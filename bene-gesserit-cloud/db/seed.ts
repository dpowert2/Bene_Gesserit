/**
 * Idempotent seed — populates the `config` table from /config/*.example
 * if no row exists for a given key.
 *
 * Runs automatically on first deploy via `npm run build` (which calls migrate
 * then seed). After that, edits happen via /settings in the UI.
 *
 * Re-running this script will NOT overwrite existing config rows. To reset to
 * defaults, manually delete the row in the DB or use the Reset button in
 * /settings.
 */

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { eq } from "drizzle-orm";
import { config } from "./schema";

const SEEDS = [
  { key: "thesis", file: "thesis.md.example" },
  { key: "search_terms", file: "search-terms.md.example" },
  { key: "scoring_weights", file: "scoring-weights.json.example" },
];

const DEFAULT_CONFIG: Record<string, string> = {
  vertical_signal_label: "FinServ",
  radar_cadence_days: "2",
  gap_categories: JSON.stringify([
    "Personal Agent",
    "Compliance",
    "Tax Optimisation",
    "Agent Orchestration",
    "AI Safety & Guardrails",
    "Agent Authentication & Security",
    "Agent Payment Rails",
  ]),
};

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required");
  }
  const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });
  const db = drizzle(client, { schema: { config } });

  let inserted = 0;
  let skipped = 0;

  // File-based seeds
  for (const seed of SEEDS) {
    const existing = await db
      .select()
      .from(config)
      .where(eq(config.key, seed.key))
      .limit(1);
    if (existing.length > 0) {
      console.log(`  • ${seed.key}: already seeded (skipped)`);
      skipped++;
      continue;
    }
    const path = join(process.cwd(), "config", seed.file);
    if (!existsSync(path)) {
      console.warn(`  ! ${seed.file} not found at ${path} — skipping`);
      continue;
    }
    const value = readFileSync(path, "utf-8");
    await db.insert(config).values({
      key: seed.key,
      value,
      updatedAt: new Date().toISOString(),
    });
    console.log(`  + ${seed.key}: seeded from ${seed.file}`);
    inserted++;
  }

  // Inline default seeds
  for (const [key, value] of Object.entries(DEFAULT_CONFIG)) {
    const existing = await db
      .select()
      .from(config)
      .where(eq(config.key, key))
      .limit(1);
    if (existing.length > 0) {
      skipped++;
      continue;
    }
    await db.insert(config).values({
      key,
      value,
      updatedAt: new Date().toISOString(),
    });
    console.log(`  + ${key}: seeded with default`);
    inserted++;
  }

  console.log(`Seed complete — ${inserted} inserted, ${skipped} skipped.`);
  client.close();
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
