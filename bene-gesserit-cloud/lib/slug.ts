import { db } from "@/db/client";
import { startups, manualPending } from "@/db/schema";
import { inArray } from "drizzle-orm";

/**
 * Derive a stable slug from a URL (and optional name). Resolves collisions
 * against existing startups and manualPending rows by appending -2, -3, ...
 */
export async function makeSlugFromAdd(url: string, name?: string): Promise<string> {
  const base = (name && name.trim()) || url;
  let s = base
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[\/?#].*$/, "")
    .replace(/\.[a-z]{2,}.*$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!s) s = "manual-" + Date.now().toString(36);

  // Check up to ~10 candidates
  const candidates = [s, ...Array.from({ length: 9 }, (_, i) => `${s}-${i + 2}`)];
  const startupTaken = (
    await db.select({ slug: startups.slug }).from(startups).where(inArray(startups.slug, candidates))
  ).map((r) => r.slug);
  const pendingTaken = (
    await db
      .select({ slug: manualPending.slug })
      .from(manualPending)
      .where(inArray(manualPending.slug, candidates))
  ).map((r) => r.slug);
  const taken = new Set([...startupTaken, ...pendingTaken]);

  for (const c of candidates) {
    if (!taken.has(c)) return c;
  }
  // Fallback — collision space exhausted (extremely unlikely)
  return s + "-" + Date.now().toString(36);
}
