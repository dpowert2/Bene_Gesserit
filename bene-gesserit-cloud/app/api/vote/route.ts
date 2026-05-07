import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { votes } from "@/db/schema";

export const runtime = "nodejs";

/**
 * Update a card's vote/note/followup/archived/kanbanStage.
 *
 * The body is a partial patch — only the fields you include get touched.
 * Used by the kanban (stage transitions, note saves) and the pipeline
 * (stars, archive).
 */

const Body = z.object({
  slug: z.string().min(1).max(120),
  patch: z
    .object({
      stars: z.number().int().min(0).max(5).optional(),
      note: z.string().optional(),
      followup: z.boolean().optional(),
      archived: z.boolean().optional(),
      kanbanStage: z
        .enum(["contacted", "talked_to", "accepted", "rejected"])
        .nullable()
        .optional(),
    })
    .refine((p) => Object.keys(p).length > 0, "patch must contain at least one field"),
});

export async function PUT(req: NextRequest) {
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid body", details: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const { slug, patch } = parsed.data;
  const now = new Date().toISOString();
  const voter = process.env.BG_VOTER_NAME || "you";

  // Upsert. INSERT branch fires only for slugs that have never been voted on.
  // ON CONFLICT touches just the fields included in the patch.
  await db
    .insert(votes)
    .values({
      slug,
      voter,
      stars: patch.stars ?? 0,
      note: patch.note ?? null,
      followup: patch.followup ?? false,
      archived: patch.archived ?? false,
      kanbanStage: patch.kanbanStage ?? null,
      votedAt: now,
    })
    .onConflictDoUpdate({
      target: votes.slug,
      set: {
        ...(patch.stars !== undefined && { stars: patch.stars }),
        ...(patch.note !== undefined && { note: patch.note }),
        ...(patch.followup !== undefined && { followup: patch.followup }),
        ...(patch.archived !== undefined && { archived: patch.archived }),
        ...(patch.kanbanStage !== undefined && { kanbanStage: patch.kanbanStage }),
        voter,
        votedAt: now,
      },
    });

  return NextResponse.json({ ok: true });
}

/**
 * Read all votes (used to bootstrap client state if needed).
 */
export async function GET() {
  const rows = await db.select().from(votes);
  return NextResponse.json({ votes: rows });
}

/**
 * Delete a vote row entirely (rare — used to fully reset a card).
 */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });
  await db.delete(votes).where(eq(votes.slug, slug));
  return NextResponse.json({ ok: true });
}
