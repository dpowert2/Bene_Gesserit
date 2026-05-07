import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db/client";
import { config, changelogEntries } from "@/db/schema";
import { eq } from "drizzle-orm";

export const runtime = "nodejs";

/**
 * Editable user settings.
 *
 * GET → returns the full config map.
 * PUT → updates one or more keys. Logs a changelog entry on each save.
 */

const ALLOWED_KEYS = new Set([
  "thesis",
  "search_terms",
  "scoring_weights",
  "vertical_signal_label",
  "gap_categories",
  "radar_cadence_days",
]);

export async function GET() {
  const rows = await db.select().from(config);
  const map: Record<string, string | null> = {};
  rows.forEach((r) => {
    map[r.key] = r.value;
  });
  return NextResponse.json({ config: map });
}

const Body = z.object({
  updates: z.record(z.string(), z.string()),
});

export async function PUT(req: NextRequest) {
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid body", details: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const { updates } = parsed.data;

  for (const key of Object.keys(updates)) {
    if (!ALLOWED_KEYS.has(key)) {
      return NextResponse.json({ error: `Unknown config key: ${key}` }, { status: 400 });
    }
  }

  // Validate JSON shapes for known structured keys
  if (updates.scoring_weights) {
    try {
      JSON.parse(updates.scoring_weights);
    } catch {
      return NextResponse.json(
        { error: "scoring_weights must be valid JSON" },
        { status: 400 }
      );
    }
  }
  if (updates.gap_categories) {
    try {
      const arr = JSON.parse(updates.gap_categories);
      if (!Array.isArray(arr)) throw new Error("not an array");
    } catch {
      return NextResponse.json(
        { error: "gap_categories must be a JSON array" },
        { status: 400 }
      );
    }
  }

  const now = new Date().toISOString();

  // Upsert each key
  const changedKeys: string[] = [];
  for (const [key, value] of Object.entries(updates)) {
    const existing = await db
      .select({ value: config.value })
      .from(config)
      .where(eq(config.key, key))
      .limit(1);

    if (existing[0]?.value === value) continue; // no-op

    await db
      .insert(config)
      .values({ key, value, updatedAt: now })
      .onConflictDoUpdate({
        target: config.key,
        set: { value, updatedAt: now },
      });

    changedKeys.push(key);
  }

  // Changelog entry
  if (changedKeys.length > 0) {
    const today = now.slice(0, 10);
    await db.insert(changelogEntries).values({
      id: `cfg-${Date.now()}`,
      type: changedKeys.includes("thesis")
        ? "thesis"
        : changedKeys.includes("scoring_weights")
        ? "scoring"
        : changedKeys.includes("search_terms")
        ? "search-terms"
        : "preferences",
      date: today,
      title: `Settings updated: ${changedKeys.join(", ")}`,
      body: null,
      evidence: `Keys: ${changedKeys.join(", ")}`,
      source: "manual",
      createdAt: now,
    });
  }

  return NextResponse.json({ ok: true, changedKeys });
}
