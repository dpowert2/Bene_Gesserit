/**
 * generate-card — given a URL (and optional name hint), researches the
 * startup, scores it against the user's thesis, and writes the result into
 * the `startups` table marked manualAdd: true.
 *
 * Called by:
 *   - app/api/cron/process-pending/route.ts (picks up rows from manual_pending)
 *   - app/api/manual-add/route.ts (sync mode, optional)
 *
 * One invocation = one card. Designed to fit comfortably under Vercel's 60s
 * function timeout. For batch jobs (radar runs), the orchestrator fans out
 * to multiple invocations rather than running them sequentially.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { startups, manualPending } from "@/db/schema";
import { claude, MODEL, TOOLS } from "./shared/claude";
import { CardSchema, type Card } from "./shared/types";
import { loadConfig } from "./shared/config-loader";
import { scoringSystemPrompt, generateCardPrompt } from "./shared/prompts";

export interface GenerateCardInput {
  slug: string;
  url: string;
  name?: string;
}

export interface GenerateCardResult {
  ok: boolean;
  slug: string;
  card?: Card;
  error?: string;
}

export async function generateCard(input: GenerateCardInput): Promise<GenerateCardResult> {
  const { slug, url, name } = input;

  try {
    await db
      .update(manualPending)
      .set({ status: "generating" })
      .where(eq(manualPending.slug, slug));

    const cfg = await loadConfig();
    const system = scoringSystemPrompt(cfg);
    const userMsg = generateCardPrompt(url, name);

    const response = await claude().messages.create({
      model: MODEL,
      max_tokens: 4096,
      system,
      tools: [TOOLS.webSearch],
      messages: [{ role: "user", content: userMsg }],
    });

    // Extract the final text block — the agent may have made tool calls along
    // the way; the last text block is the JSON card.
    const lastText = [...response.content]
      .reverse()
      .find((b) => b.type === "text");
    if (!lastText || lastText.type !== "text") {
      throw new Error("Agent returned no text content");
    }

    const json = extractJson(lastText.text);
    const parsed = CardSchema.safeParse(json);
    if (!parsed.success) {
      throw new Error("Card JSON failed validation: " + parsed.error.message);
    }
    const card = parsed.data;

    // Honour the slug we generated at submit time — agents can suggest one,
    // but the DB key is fixed.
    card.slug = slug;
    card.url = url;

    const today = new Date().toISOString().slice(0, 10);
    await db
      .insert(startups)
      .values({
        slug: card.slug,
        name: card.name,
        url: card.url,
        oneliner: card.oneliner,
        gap: card.gap,
        stageLabel: card.stageLabel,
        geo: card.geo,
        verticalSignal: card.verticalSignal,
        team: card.team,
        thesisFit: card.thesisFit,
        evidence: card.evidence,
        score: card.score,
        bars: card.bars,
        source: "manual",
        manualAdd: true,
        detectedAt: today,
        createdAt: new Date().toISOString(),
      })
      .onConflictDoUpdate({
        target: startups.slug,
        set: {
          name: card.name,
          oneliner: card.oneliner,
          gap: card.gap,
          stageLabel: card.stageLabel,
          geo: card.geo,
          verticalSignal: card.verticalSignal,
          team: card.team,
          thesisFit: card.thesisFit,
          evidence: card.evidence,
          score: card.score,
          bars: card.bars,
        },
      });

    await db
      .update(manualPending)
      .set({ status: "done", resolvedAt: new Date().toISOString(), errorMsg: null })
      .where(eq(manualPending.slug, slug));

    return { ok: true, slug, card };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    await db
      .update(manualPending)
      .set({ status: "failed", errorMsg: msg })
      .where(eq(manualPending.slug, slug))
      .catch(() => {});
    console.error(`generateCard(${slug}) failed:`, msg);
    return { ok: false, slug, error: msg };
  }
}

/**
 * Robust JSON extraction — the agent may wrap output in markdown fences or
 * include trailing prose despite the system prompt. Strip and parse.
 */
function extractJson(text: string): unknown {
  let s = text.trim();
  // Strip ```json ... ``` or ``` ... ```
  s = s.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
  // Locate the first { and the matching closing }
  const first = s.indexOf("{");
  if (first < 0) throw new Error("No JSON object found in agent output");
  let depth = 0;
  for (let i = first; i < s.length; i++) {
    if (s[i] === "{") depth++;
    else if (s[i] === "}") {
      depth--;
      if (depth === 0) {
        const slice = s.slice(first, i + 1);
        return JSON.parse(slice);
      }
    }
  }
  throw new Error("Unbalanced JSON in agent output");
}
