import { Nav } from "@/components/Nav";
import { db } from "@/db/client";
import { startups, manualPending, radarRuns } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Lightweight stats so the home page proves the DB connection works.
  const [
    [{ count: totalStartups }],
    [{ count: pendingCount }],
    recentRuns,
  ] = await Promise.all([
    db.select({ count: sql<number>`count(*)`.mapWith(Number) }).from(startups),
    db
      .select({ count: sql<number>`count(*)`.mapWith(Number) })
      .from(manualPending)
      .where(eq(manualPending.status, "pending")),
    db.select().from(radarRuns).orderBy(desc(radarRuns.createdAt)).limit(3),
  ]);

  return (
    <>
      <Nav active="radar" />
      <main className="max-w-[780px] mx-auto px-6 py-16">
        <h1 className="text-serif text-5xl text-ink-heading tracking-tight mb-3">
          Bene Gesserit
        </h1>
        <p className="text-ink-muted mb-12 max-w-lg">
          A personal startup-radar framework. Configure your thesis in Settings,
          submit URLs from the Kanban, and the agents handle the rest.
        </p>

        <section className="grid grid-cols-3 gap-4 mb-12">
          <Stat label="Pipeline" value={totalStartups.toString()} />
          <Stat label="Pending adds" value={pendingCount.toString()} />
          <Stat
            label="Last radar run"
            value={recentRuns[0] ? recentRuns[0].runDate : "—"}
          />
        </section>

        {totalStartups === 0 && (
          <div className="bg-amber-light border-l-4 border-amber rounded-lg p-4 text-ink text-sm leading-relaxed">
            <strong className="text-brown-dark">Empty pipeline.</strong> Edit
            your thesis in <a href="/settings" className="text-brown underline">Settings</a>{" "}
            and either trigger a radar run or add a URL via the{" "}
            <a href="/kanban" className="text-brown underline">Kanban</a>.
          </div>
        )}
      </main>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-canvas border border-line rounded-lg p-5">
      <div className="text-mono text-xs uppercase tracking-wider text-ink-muted mb-1">
        {label}
      </div>
      <div className="text-serif text-3xl text-ink-heading">{value}</div>
    </div>
  );
}
