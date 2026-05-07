import { Nav } from "@/components/Nav";
import { PipelineList } from "@/components/PipelineList";
import { db } from "@/db/client";
import { startups, votes } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function PipelinePage() {
  const [allStartups, allVotes] = await Promise.all([
    db.select().from(startups).orderBy(desc(startups.score), desc(startups.detectedAt)),
    db.select().from(votes),
  ]);

  return (
    <>
      <Nav active="pipeline" />
      <PipelineList startups={allStartups as never} votes={allVotes as never} />
    </>
  );
}
