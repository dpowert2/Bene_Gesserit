/**
 * Apply schema. Idempotent.
 *
 * Strategy: ship a hand-maintained init.sql that contains all the
 * CREATE TABLE IF NOT EXISTS statements. Running this script applies them.
 *
 * For a fresh fork, this is everything you need — no `drizzle-kit generate`
 * step required. If you later modify db/schema.ts and want to use Drizzle's
 * generated migrations instead, you can switch to `drizzle-kit migrate`; the
 * two approaches are interchangeable.
 *
 * Runs as part of `npm run build` so Vercel applies on every deploy.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@libsql/client";

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required");
  }

  const client = createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });

  const sqlPath = join(process.cwd(), "db", "init.sql");
  const sql = readFileSync(sqlPath, "utf-8");

  // libSQL accepts a single SQL string; split on `;` boundaries to issue
  // statements individually so we can log progress and tolerate partial
  // re-runs cleanly.
  const statements = sql
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && !s.startsWith("--"));

  console.log(`Applying ${statements.length} statements to ${redact(process.env.DATABASE_URL)}…`);

  for (const stmt of statements) {
    await client.execute(stmt);
  }

  console.log("Schema applied.");
  client.close();
}

function redact(url: string): string {
  return url.replace(/(libsql:\/\/[^@]*@)/i, "libsql://***@").slice(0, 60) + "…";
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
