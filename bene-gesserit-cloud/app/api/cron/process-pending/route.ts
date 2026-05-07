import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { manualPending } from "@/db/schema";
import { generateCard } from "@/agents/generate-card";

export const runtime = "nodejs";
// Vercel Pro accounts can extend this. Hobby caps at 60s — one card per tick.
export const maxDuration = 60;

/**
 * Cron job — picks up pending manual adds and runs the card-generation agent.
 *
 * Wired in vercel.json to run every 5 minutes. Each invocation processes ONE
 * pending row (the oldest), so the loop stays well under the 60s timeout.
 * Multiple pending rows resolve over multiple ticks — fine for typical usage
 * (manual adds are infrequent).
 *
 * Auth: middleware.ts checks for `Authorization: Bearer ${CRON_SECRET}`.
 * Vercel sets this header automatically on cron invocations.
 */
export async function GET() {
  const pending = await db
    .select()
    .from(manualPending)
    .where(eq(manualPending.status, "pending"))
    .orderBy(manualPending.submittedAt)
    .limit(1);

  if (pending.length === 0) {
    return NextResponse.json({ ok: true, processed: 0 });
  }

  const row = pending[0];
  const result = await generateCard({
    slug: row.slug,
    url: row.url,
    name: row.name ?? undefined,
  });

  return NextResponse.json({
    ok: result.ok,
    processed: 1,
    slug: result.slug,
    error: result.error,
  });
}
