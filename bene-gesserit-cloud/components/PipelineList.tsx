"use client";

import { useMemo, useState } from "react";
import { flagFor } from "@/lib/flags";
import type { StartupRow, VoteRow } from "./KanbanBoard";

type Filter = "all" | "voted" | "unvoted" | "followup" | "archived";

export function PipelineList({
  startups,
  votes: initialVotes,
}: {
  startups: StartupRow[];
  votes: VoteRow[];
}) {
  const [voteMap, setVoteMap] = useState(() => new Map(initialVotes.map((v) => [v.slug, v])));
  const [filter, setFilter] = useState<Filter>("all");
  const [gapFilter, setGapFilter] = useState("");
  const [savingSlug, setSavingSlug] = useState<string | null>(null);

  async function persist(slug: string, patch: Partial<VoteRow>) {
    setSavingSlug(slug);
    setVoteMap((prev) => {
      const next = new Map(prev);
      const cur = next.get(slug) ?? {
        slug,
        voter: null,
        stars: 0,
        note: null,
        followup: false,
        archived: false,
        kanbanStage: null,
        votedAt: null,
      };
      next.set(slug, { ...cur, ...patch });
      return next;
    });
    try {
      await fetch("/api/vote", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, patch }),
      });
    } finally {
      setSavingSlug(null);
    }
  }

  const gaps = useMemo(() => {
    return Array.from(new Set(startups.map((s) => s.gap).filter(Boolean) as string[])).sort();
  }, [startups]);

  const counts = useMemo(() => {
    let voted = 0;
    let followup = 0;
    let archived = 0;
    voteMap.forEach((v) => {
      const isReviewed =
        (v.stars || 0) > 0 || v.followup || v.archived || (v.note?.trim()?.length ?? 0) > 0;
      if (isReviewed) voted++;
      if (v.followup) followup++;
      if (v.archived) archived++;
    });
    return { all: startups.length, voted, unvoted: startups.length - voted, followup, archived };
  }, [startups, voteMap]);

  const visible = startups.filter((s) => {
    const v = voteMap.get(s.slug);
    const stars = v?.stars ?? 0;
    const isReviewed =
      stars > 0 || !!v?.followup || !!v?.archived || (v?.note?.trim()?.length ?? 0) > 0;
    if (filter === "voted" && !isReviewed) return false;
    if (filter === "unvoted" && isReviewed) return false;
    if (filter === "followup" && !v?.followup) return false;
    if (filter === "archived" && !v?.archived) return false;
    if (gapFilter && s.gap !== gapFilter) return false;
    return true;
  });

  return (
    <div className="max-w-[780px] mx-auto px-6 py-8">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h1 className="text-serif text-4xl text-ink-heading tracking-tight">Pipeline</h1>
        <span className="text-mono text-xs text-ink-muted">{visible.length} candidates</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {(
          [
            ["all", `All (${counts.all})`],
            ["voted", `Rated (${counts.voted})`],
            ["unvoted", `Unrated (${counts.unvoted})`],
            ["followup", `↗ Follow Up (${counts.followup})`],
            ["archived", `↓ Archived (${counts.archived})`],
          ] as Array<[Filter, string]>
        ).map(([f, label]) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`pill ${filter === f ? "active" : ""}`}
          >
            {label}
          </button>
        ))}
        <select
          value={gapFilter}
          onChange={(e) => setGapFilter(e.target.value)}
          className={`pill cursor-pointer ${gapFilter ? "active" : ""}`}
        >
          <option value="">All categories</option>
          {gaps.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {visible.map((s) => (
          <PipelineCardItem
            key={s.slug}
            startup={s}
            vote={voteMap.get(s.slug)}
            saving={savingSlug === s.slug}
            onPersist={(patch) => persist(s.slug, patch)}
          />
        ))}
        {visible.length === 0 && (
          <div className="text-center py-16 text-ink-muted text-sm">No candidates match.</div>
        )}
      </div>
    </div>
  );
}

function PipelineCardItem({
  startup,
  vote,
  saving,
  onPersist,
}: {
  startup: StartupRow;
  vote: VoteRow | undefined;
  saving: boolean;
  onPersist: (patch: Partial<VoteRow>) => void;
}) {
  const [showNote, setShowNote] = useState(false);
  const [note, setNote] = useState(vote?.note ?? "");

  const score = startup.score ?? 0;
  const scoreClass =
    score >= 75
      ? "bg-accent-light text-accent-dark border-accent"
      : score >= 50
      ? "bg-amber-light text-amber border-amber"
      : "bg-canvas text-ink-muted border-line";

  const flag = flagFor(startup.geo);
  const stars = vote?.stars ?? 0;
  const isFollowup = !!vote?.followup;
  const isArchived = !!vote?.archived;

  return (
    <article
      className={`bg-canvas border rounded-2xl p-6 transition ${
        isArchived
          ? "opacity-50 border-l-[3px] border-l-line-strong"
          : isFollowup
          ? "border-l-[3px] border-l-coral border-line"
          : stars > 0 || vote?.note?.trim()
          ? "border-l-[3px] border-l-accent border-line"
          : "border-line"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-serif text-xl text-ink-heading tracking-tight">
          <a
            href={startup.url}
            target="_blank"
            rel="noopener"
            className="text-ink-heading no-underline border-b border-line-strong hover:border-brown hover:text-brown"
          >
            {startup.name}
          </a>
        </h3>
        <span
          className={`text-mono text-xs font-semibold border rounded-pill px-3 py-1 flex-shrink-0 ${scoreClass}`}
        >
          {score}/100
        </span>
      </div>

      <p className="text-ink leading-relaxed text-sm mb-3">{startup.oneliner}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {startup.gap && (
          <span className="text-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-[3px] rounded-pill bg-brown-light text-brown-dark">
            {startup.gap}
          </span>
        )}
        {startup.stageLabel && (
          <span className="text-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-[3px] rounded-pill bg-amber-light text-amber">
            {startup.stageLabel}
          </span>
        )}
        {startup.geo && (
          <span className="text-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-[3px] rounded-pill bg-[#EEEDEB] text-ink-muted">
            {flag} {startup.geo}
          </span>
        )}
        {startup.manualAdd && (
          <span className="text-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-[3px] rounded-pill bg-blue-light text-blue">
            ✋ Manual
          </span>
        )}
      </div>

      {/* Vote row */}
      <div className="flex items-center gap-3 pt-3 border-t border-line">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => onPersist({ stars: stars === n ? 0 : n })}
              className={`text-2xl transition ${n <= stars ? "text-amber" : "text-line-strong hover:text-amber"}`}
              title={`${n} star${n > 1 ? "s" : ""}`}
            >
              ★
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowNote((v) => !v)}
          className="text-mono text-xs uppercase tracking-wider text-ink-muted hover:text-brown"
        >
          {vote?.note?.trim() ? "Edit note" : "+ Add note"}
        </button>
        <button
          onClick={() => onPersist({ followup: !isFollowup, archived: false })}
          className={`text-mono text-xs uppercase tracking-wider px-3 py-1 rounded-pill border transition ${
            isFollowup
              ? "bg-coral text-white border-coral"
              : "border-line-strong text-coral hover:bg-coral-light"
          }`}
        >
          ↗ Follow Up
        </button>
        <button
          onClick={() => onPersist({ archived: !isArchived, followup: false })}
          className={`text-mono text-xs uppercase tracking-wider px-3 py-1 rounded-pill border transition ${
            isArchived
              ? "bg-ink-muted text-white border-ink-muted"
              : "border-line-strong text-ink-muted hover:bg-sand"
          }`}
        >
          ↓ Archive
        </button>
        {saving && <span className="text-mono text-[0.7rem] text-amber ml-auto">Saving…</span>}
      </div>

      {showNote && (
        <div className="mt-3">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onBlur={() => onPersist({ note })}
            placeholder="Why this rating? What would need to change?"
            className="w-full min-h-[80px] p-3 border border-line-strong rounded-lg bg-sand text-sm focus:outline-none focus:border-brown focus:bg-canvas"
          />
        </div>
      )}
    </article>
  );
}
