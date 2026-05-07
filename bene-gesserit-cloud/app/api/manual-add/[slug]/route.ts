import { NextRequest, NextResponse } from "next/server";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db/client";
import { manualPending, votes, startups } from "@/db/schema";

export const runtime = "nodejs";

/**
 * Cancel a pending manual add. Only valid while the row is still 'pending'
 * or 'failed' — once 'done', the corresponding startups row exists and the
 * card should be removed via the regular vote flow (followup=false, etc.)
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Only delete pending/failed rows
  const result = await db
    .delete(manualPending)
    .where(
      and(eq(manualPending.slug, slug), inArray(manualPending.status, ["pending", "failed"]))
    )
    .returning();

  if (result.length === 0) {
    return NextResponse.json(
      { error: "No pending entry to delete (already done or not found)" },
      { status: 404 }
    );
  }

  // Clean up the placeholder vote row IF the startup hasn't been generated yet.
  const startupExists = await db
    .select({ slug: startups.slug })
    .from(startups)
    .where(eq(startups.slug, slug))
    .limit(1);

  if (startupExists.length === 0) {
    await db.delete(votes).where(eq(votes.slug, slug));
  }

  return NextResponse.json({ ok: true });
}
