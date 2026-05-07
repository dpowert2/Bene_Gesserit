import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { config } from "@/db/schema";
import type { ConfigSnapshot, ScoringWeights } from "./types";

/**
 * Load the user's current configuration from the DB. Agents call this at the
 * start of every run so edits in the /settings page take effect immediately.
 */
export async function loadConfig(): Promise<ConfigSnapshot> {
  const rows = await db.select().from(config);
  const map = new Map<string, string>();
  rows.forEach((r) => {
    if (r.value !== null) map.set(r.key, r.value);
  });

  const thesis = map.get("thesis") ?? "";
  const searchTerms = map.get("search_terms") ?? "";

  const scoringRaw = map.get("scoring_weights");
  if (!scoringRaw) {
    throw new Error("scoring_weights config missing — run db:seed");
  }
  const scoringWeights = JSON.parse(scoringRaw) as ScoringWeights;

  const verticalSignalLabel = map.get("vertical_signal_label") ?? "FinServ";

  const gapCatRaw = map.get("gap_categories");
  const gapCategories: string[] = gapCatRaw ? JSON.parse(gapCatRaw) : [];

  return { thesis, searchTerms, scoringWeights, verticalSignalLabel, gapCategories };
}

export async function getConfigValue(key: string): Promise<string | null> {
  const rows = await db.select().from(config).where(eq(config.key, key)).limit(1);
  return rows[0]?.value ?? null;
}

export async function setConfigValue(key: string, value: string): Promise<void> {
  await db
    .insert(config)
    .values({ key, value, updatedAt: new Date().toISOString() })
    .onConflictDoUpdate({
      target: config.key,
      set: { value, updatedAt: new Date().toISOString() },
    });
}
