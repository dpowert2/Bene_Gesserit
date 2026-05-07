/**
 * run-radar — scheduled scout.
 *
 * Reads the user's thesis + search terms, runs the research agent with web
 * search, and inserts new candidate URLs into manual_pending so they get
 * picked up by process-pending and turned into full cards.
 *
 * Why route candidates through manual_pending rather than calling
 * generateCard directly:
 *
 *  - Bounded per-invocation work. A radar run that surfaces 12 candidates
 *    and tries to fully card each one in-process would exceed Vercel's 60s
 *    function timeout. Routing through manual_pending fans the work out
 *    over multiple cron ticks of process-pending.
 *  - Visibility. Pending rows show up in the kanban as placeholders, so the
 *    user sees what the radar found before the cards are fully generated.
 *  - Retry. Failed card generations can be retried by the same cron.
 *
 * The radar agent's only job is "produce a list of {url, name?} candidates
 * that match the thesis, deduped against existing slugs."
 */

import { eq, inArray } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db/client";
import { startups, manualPending, radarRuns, changelogEntries } from "@/db/schema";
import { claude, MODEL, TOOLS } from "./shared/claude";
import { loadConfig } from "./shared/config-loader";
import { makeSlugFromAdd } from "@/lib/slug";

const CandidateListSchema = z.object({
  candidates: z
    .array(
      z.object({
        url: z.string().url(),
        name: z.string().min(1).max(200).optional(),
        rationale: z.string().min(1).max(500).optional(),
      })
    )
    .max(20),
});

export interface RunRadarResult {
  runId: string;
  ok: boolean;
  newSlugs: string[];
  rejectedDuplicates: number;
  error?: string;
}

export async function runRadar(): Promise<RunRadarResult> {
  const runId = `radar-${Date.now().toString(36)}`;
  const today = new Date().toISOString().slice(0, 10);
  const startedAt = new Date().toISOString();

  await db.insert(radarRuns).values({
    id: runId,
    runDate: today,
    status: "running",
    createdAt: startedAt,
  });

  try {
    const cfg = await loadConfig();

    // Snapshot existing slugs so the agent can dedupe
    const existing = await db
      .select({ slug: startups.slug })
      .from(startups);
    const pendingExisting = await db
      .select({ slug: manualPending.slug })
      .from(manualPending);
    const knownSlugs = new Set([
      ...existing.map((r) => r.slug),
      ...pendingExisting.map((r) => r.slug),
    ]);

    const system = `You are the Bene Gesserit radar agent. Your job is to find startups that match the user's thesis and return a list of candidate URLs.

# THESIS

${cfg.thesis}

# SEARCH TERMS / CHANNELS

${cfg.searchTerms}

# OUTPUT REQUIREMENTS

Return ONLY a JSON object of the form:
{
  "candidates": [
    { "url": "https://...", "name": "Company Name", "rationale": "Why this fits the thesis (one sentence)." },
    ...
  ]
}

Constraints:
- Maximum 12 candidates per run.
- Only include startups you believe genuinely match the thesis. Don't pad.
- Skip established public companies, large incumbents, and anything obviously off-thesis.
- Each url must be the company's primary website.
- Output ONLY the JSON object — no prose, no markdown fences.`;

    const user = `Run today's radar. Use web_search to find recent (last 30 days preferred) startups matching the thesis. Avoid candidates the user has already seen — these slugs already exist:

${[...knownSlugs].slice(0, 200).join(", ") || "(none yet)"}

Return the JSON candidate list.`;

    const response = await claude().messages.create({
      model: MODEL,
      max_tokens: 4096,
      system,
      tools: [TOOLS.webSearch],
      messages: [{ role: "user", content: user }],
    });

    const lastText = [...response.content]
      .reverse()
      .find((b) => b.type === "text");
    if (!lastText || lastText.type !== "text") {
      throw new Error("Radar agent returned no text content");
    }

    const json = extractJson(lastText.text);
    const parsed = CandidateListSchema.safeParse(json);
    if (!parsed.success) {
      throw new Error("Radar output failed validation: " + parsed.error.message);
    }

    const candidates = parsed.data.candidates;
    const newSlugs: string[] = [];
    let rejectedDuplicates = 0;

    for (const c of candidates) {
      const slug = await makeSlugFromAdd(c.url, c.name);

      // makeSlugFromAdd already dedupes; if it returns a -2 suffix, we still
      // accept (it's a fresh candidate). But if the URL itself matches an
      // existing slug pattern, skip.
      if (knownSlugs.has(slug)) {
        rejectedDuplicates++;
        continue;
      }

      const now = new Date().toISOString();
      await db.insert(manualPending).values({
        slug,
        url: c.url,
        name: c.name ?? null,
        status: "pending",
        submittedAt: now,
      });
      knownSlugs.add(slug);
      newSlugs.push(slug);
    }

    await db
      .update(radarRuns)
      .set({
        status: "done",
        newSlugs,
        summary: `Radar surfaced ${newSlugs.length} candidates (${rejectedDuplicates} duplicates filtered).`,
        completedAt: new Date().toISOString(),
      })
      .where(eq(radarRuns.id, runId));

    await db.insert(changelogEntries).values({
      id: `radar-${runId}`,
      type: "radar",
      date: today,
      title: `Radar run — ${newSlugs.length} new candidate${newSlugs.length === 1 ? "" : "s"}`,
      body:
        newSlugs.length > 0
          ? `Surfaced: ${newSlugs.join(", ")}. ${rejectedDuplicates} duplicates filtered.`
          : "No new candidates found this run.",
      source: "cron",
      createdAt: new Date().toISOString(),
    });

    return { runId, ok: true, newSlugs, rejectedDuplicates };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    await db
      .update(radarRuns)
      .set({
        status: "failed",
        errorMsg: msg,
        completedAt: new Date().toISOString(),
      })
      .where(eq(radarRuns.id, runId))
      .catch(() => {});
    return { runId, ok: false, newSlugs: [], rejectedDuplicates: 0, error: msg };
  }
}

function extractJson(text: string): unknown {
  let s = text.trim();
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  const first = s.indexOf("{");
  if (first < 0) throw new Error("No JSON object in radar output");
  let depth = 0;
  for (let i = first; i < s.length; i++) {
    if (s[i] === "{") depth++;
    else if (s[i] === "}") {
      depth--;
      if (depth === 0) return JSON.parse(s.slice(first, i + 1));
    }
  }
  throw new Error("Unbalanced JSON in radar output");
}
