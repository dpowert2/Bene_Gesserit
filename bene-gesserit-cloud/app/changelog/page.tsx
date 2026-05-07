import { Nav } from "@/components/Nav";
import { db } from "@/db/client";
import { changelogEntries } from "@/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

const TYPE_STYLES: Record<string, { label: string; cls: string }> = {
  thesis: { label: "Thesis", cls: "bg-accent-light text-accent-dark" },
  scoring: { label: "Scoring", cls: "bg-coral-light text-coral" },
  "search-terms": { label: "Search Terms", cls: "bg-amber-light text-amber" },
  preferences: { label: "Preferences", cls: "bg-blue-light text-blue" },
  radar: { label: "Radar", cls: "bg-brown-light text-brown-dark" },
  system: { label: "System", cls: "bg-brown-light text-brown" },
};

export default async function ChangelogPage() {
  const entries = await db
    .select()
    .from(changelogEntries)
    .orderBy(desc(changelogEntries.createdAt));

  return (
    <>
      <Nav active="changelog" />
      <main className="max-w-[780px] mx-auto px-6 py-10">
        <h1 className="text-serif text-4xl text-ink-heading tracking-tight mb-2">Changelog</h1>
        <p className="text-ink-muted text-sm mb-8 max-w-xl">
          Every system change worth recording — thesis edits, scoring weight changes, radar runs.
        </p>

        {entries.length === 0 ? (
          <div className="text-center py-16 text-ink-muted text-sm">No entries yet.</div>
        ) : (
          <div className="space-y-4">
            {entries.map((e) => {
              const t = TYPE_STYLES[e.type] ?? TYPE_STYLES.system;
              return (
                <article
                  key={e.id}
                  className="bg-canvas border border-line rounded-2xl p-6 hover:border-line-strong transition"
                >
                  <header className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-mono text-xs text-ink-muted">{e.date}</span>
                    <span
                      className={`text-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-[3px] rounded-pill ${t.cls}`}
                    >
                      {t.label}
                    </span>
                    {e.source && (
                      <span className="text-mono text-[0.62rem] text-ink-light ml-auto">
                        {e.source}
                      </span>
                    )}
                  </header>
                  <h3 className="text-serif text-lg text-ink-heading leading-tight mb-1">
                    {e.title}
                  </h3>
                  {e.body && (
                    <p className="text-sm text-ink leading-relaxed whitespace-pre-wrap">{e.body}</p>
                  )}
                  {e.evidence && (
                    <div className="mt-3 pt-3 border-t border-line text-xs text-ink-muted">
                      <span className="text-mono text-[0.6rem] uppercase tracking-wider">
                        Evidence
                      </span>
                      <p className="mt-1">{e.evidence}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
