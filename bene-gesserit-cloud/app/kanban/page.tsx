import { Nav } from "@/components/Nav";
import { KanbanBoard } from "@/components/KanbanBoard";
import { db } from "@/db/client";
import { startups, votes, manualPending, config } from "@/db/schema";
import { eq, inArray } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function KanbanPage() {
  const [allStartups, allVotes, pending, verticalLabelRow] = await Promise.all([
    db.select().from(startups),
    db.select().from(votes),
    db
      .select()
      .from(manualPending)
      .where(inArray(manualPending.status, ["pending", "failed"])),
    db.select().from(config).where(eq(config.key, "vertical_signal_label")).limit(1),
  ]);

  const verticalSignalLabel = verticalLabelRow[0]?.value || "FinServ";

  return (
    <>
      <Nav active="kanban" />
      <KanbanBoard
        startups={allStartups as never}
        votes={allVotes as never}
        pending={pending as never}
        verticalSignalLabel={verticalSignalLabel}
      />
    </>
  );
}
