"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { flagFor, regionsFor, type Region } from "@/lib/flags";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type StartupRow = {
  slug: string;
  name: string;
  url: string;
  oneliner: string;
  gap: string | null;
  stageLabel: string | null;
  geo: string | null;
  verticalSignal: string | null;
  team: string | null;
  thesisFit: string | null;
  evidence: Array<[string, string]> | null;
  score: number | null;
  bars: { gap: [number, number]; finserv: [number, number]; stage: [number, number]; team: [number, number] } | null;
  source: string;
  manualAdd: boolean;
  detectedAt: string;
};

export type VoteRow = {
  slug: string;
  voter: string | null;
  stars: number;
  note: string | null;
  followup: boolean;
  archived: boolean;
  kanbanStage: string | null;
  votedAt: string | null;
};

export type PendingRow = {
  slug: string;
  url: string;
  name: string | null;
  status: string;
  errorMsg: string | null;
  submittedAt: string;
};

type Stage = "followup" | "contacted" | "talked_to" | "accepted" | "rejected";

const STAGES: Stage[] = ["followup", "contacted", "talked_to", "accepted", "rejected"];

const STAGE_LABELS: Record<Stage, string> = {
  followup: "↗ Follow Up",
  contacted: "→ Contacted",
  talked_to: "◇ Meeting Arranged",
  accepted: "✓ Accepted",
  rejected: "✕ Rejected",
};

// ---------------------------------------------------------------------------
// Card model — internal representation merging real cards + pending placeholders
// ---------------------------------------------------------------------------

type CardModel = {
  slug: string;
  name: string;
  url: string;
  oneliner: string;
  gap: string | null;
  stageLabel: string | null;
  geo: string | null;
  verticalSignal: string | null;
  team: string | null;
  thesisFit: string | null;
  evidence: Array<[string, string]>;
  score: number;
  bars: { gap: [number, number]; finserv: [number, number]; stage: [number, number]; team: [number, number] };
  manual: boolean;
  pending: boolean;
};

function startupToCard(s: StartupRow): CardModel {
  return {
    slug: s.slug,
    name: s.name,
    url: s.url,
    oneliner: s.oneliner,
    gap: s.gap,
    stageLabel: s.stageLabel,
    geo: s.geo,
    verticalSignal: s.verticalSignal,
    team: s.team,
    thesisFit: s.thesisFit,
    evidence: (s.evidence ?? []) as Array<[string, string]>,
    score: s.score ?? 0,
    bars: s.bars ?? { gap: [0, 35], finserv: [0, 25], stage: [0, 20], team: [0, 20] },
    manual: s.manualAdd,
    pending: false,
  };
}

function pendingToCard(p: PendingRow): CardModel {
  let host = p.url;
  try {
    host = new URL(p.url).hostname.replace(/^www\./, "");
  } catch {}
  return {
    slug: p.slug,
    name: p.name || host,
    url: p.url,
    oneliner:
      p.status === "failed"
        ? `Card generation failed: ${p.errorMsg || "unknown error"}. Will retry on next cron tick.`
        : "Manual add — pending card generation. Click to view URL or to remove.",
    gap: null,
    stageLabel: p.status === "failed" ? "Manual add — failed" : "Manual add — pending",
    geo: null,
    verticalSignal: null,
    team: null,
    thesisFit: null,
    evidence: [["Source URL", p.url]],
    score: 0,
    bars: { gap: [0, 35], finserv: [0, 25], stage: [0, 20], team: [0, 20] },
    manual: true,
    pending: true,
  };
}

// ---------------------------------------------------------------------------
// Main board
// ---------------------------------------------------------------------------

export function KanbanBoard({
  startups,
  votes,
  pending,
  verticalSignalLabel,
}: {
  startups: StartupRow[];
  votes: VoteRow[];
  pending: PendingRow[];
  verticalSignalLabel: string;
}) {
  const router = useRouter();
  const [voteMap, setVoteMap] = useState(() => new Map(votes.map((v) => [v.slug, v])));
  const [pendingList, setPendingList] = useState(pending);
  const [activeRegion, setActiveRegion] = useState<Region | "all">("all");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [topStatus, setTopStatus] = useState<{ msg: string; tone?: "saving" | "saved" | "error" }>({
    msg: "",
  });

  // Build augmented card list from startups + pending placeholders
  const cards = useMemo(() => {
    const knownSlugs = new Set(startups.map((s) => s.slug));
    const list: CardModel[] = startups.map(startupToCard);
    pendingList.forEach((p) => {
      if (!knownSlugs.has(p.slug) && (p.status === "pending" || p.status === "failed")) {
        list.push(pendingToCard(p));
      }
    });
    return list;
  }, [startups, pendingList]);

  function stageOf(slug: string): Stage | null {
    const v = voteMap.get(slug);
    if (!v) return null;
    if (v.kanbanStage && STAGES.includes(v.kanbanStage as Stage)) return v.kanbanStage as Stage;
    if (v.followup) return "followup";
    return null;
  }

  // ── API: persist a vote patch ─────────────────────────────────────────────
  async function persist(slug: string, patch: Partial<VoteRow>): Promise<boolean> {
    setTopStatus({ msg: "Saving…", tone: "saving" });
    try {
      // Map our internal field names to API's
      const apiPatch: Record<string, unknown> = {};
      if ("stars" in patch) apiPatch.stars = patch.stars;
      if ("note" in patch) apiPatch.note = patch.note;
      if ("followup" in patch) apiPatch.followup = patch.followup;
      if ("archived" in patch) apiPatch.archived = patch.archived;
      if ("kanbanStage" in patch) apiPatch.kanbanStage = patch.kanbanStage;

      const r = await fetch("/api/vote", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, patch: apiPatch }),
      });
      if (!r.ok) throw new Error(await r.text());
      setTopStatus({ msg: "Saved ✓", tone: "saved" });
      setTimeout(() => setTopStatus({ msg: "" }), 1800);
      return true;
    } catch (err) {
      setTopStatus({
        msg: "Save error: " + (err instanceof Error ? err.message : String(err)),
        tone: "error",
      });
      return false;
    }
  }

  // ── Optimistic updates ────────────────────────────────────────────────────
  function updateVoteLocal(slug: string, patch: Partial<VoteRow>) {
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
  }

  async function transitionStage(slug: string, newStage: Stage | null) {
    const patch: Partial<VoteRow> =
      newStage === null
        ? { followup: false, kanbanStage: null }
        : newStage === "followup"
        ? { followup: true, kanbanStage: null }
        : { kanbanStage: newStage };
    updateVoteLocal(slug, patch);
    await persist(slug, patch);
  }

  async function saveNote(slug: string, note: string) {
    updateVoteLocal(slug, { note });
    await persist(slug, { note });
  }

  // ── Drag & drop ───────────────────────────────────────────────────────────
  function onCardDragStart(e: React.DragEvent, slug: string) {
    e.dataTransfer.setData("text/plain", slug);
    e.dataTransfer.effectAllowed = "move";
  }
  function onColDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  async function onColDrop(e: React.DragEvent, stage: Stage) {
    e.preventDefault();
    const slug = e.dataTransfer.getData("text/plain");
    if (!slug || stageOf(slug) === stage) return;
    await transitionStage(slug, stage);
  }

  // ── Manual add (POST /api/manual-add) ─────────────────────────────────────
  async function submitAdd(url: string, name: string): Promise<{ ok: boolean; error?: string }> {
    try {
      const r = await fetch("/api/manual-add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name: name || undefined }),
      });
      if (!r.ok) {
        const text = await r.text();
        return { ok: false, error: text };
      }
      const data = await r.json();
      // Optimistic: insert pending row + vote row locally
      setPendingList((prev) => [
        ...prev,
        {
          slug: data.slug,
          url: url.startsWith("http") ? url : "https://" + url,
          name: name || null,
          status: "pending",
          errorMsg: null,
          submittedAt: new Date().toISOString(),
        },
      ]);
      updateVoteLocal(data.slug, { followup: true });
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : String(err) };
    }
  }

  async function deletePending(slug: string) {
    const r = await fetch(`/api/manual-add/${encodeURIComponent(slug)}`, { method: "DELETE" });
    if (!r.ok) {
      setTopStatus({ msg: "Failed to delete", tone: "error" });
      return;
    }
    setPendingList((prev) => prev.filter((p) => p.slug !== slug));
    setVoteMap((prev) => {
      const next = new Map(prev);
      next.delete(slug);
      return next;
    });
    setActiveSlug(null);
    setTopStatus({ msg: "Pending entry deleted.", tone: "saved" });
    setTimeout(() => setTopStatus({ msg: "" }), 2200);
  }

  // ── Auto-refresh: pick up newly-generated cards ───────────────────────────
  // Polls /api/manual-add status indirectly by triggering a router refresh
  // every 30s while there are pending entries.
  useEffect(() => {
    if (pendingList.length === 0) return;
    const id = setInterval(() => router.refresh(), 30_000);
    return () => clearInterval(id);
  }, [pendingList.length, router]);

  // ── Build per-column lists (region-filtered) ──────────────────────────────
  function regionMatches(geo: string | null, region: Region | "all") {
    if (region === "all") return true;
    return regionsFor(geo).includes(region);
  }

  const onBoard = useMemo(() => {
    return cards
      .map((c) => ({ c, stage: stageOf(c.slug) }))
      .filter((x): x is { c: CardModel; stage: Stage } => x.stage !== null)
      .filter((x) => regionMatches(x.c.geo, activeRegion))
      .sort((a, b) => (b.c.score || 0) - (a.c.score || 0));
  }, [cards, voteMap, activeRegion]);

  const counts: Record<Stage, number> = { followup: 0, contacted: 0, talked_to: 0, accepted: 0, rejected: 0 };
  onBoard.forEach((x) => {
    counts[x.stage]++;
  });

  const regionCounts = useMemo(() => {
    const c: Record<"all" | Region, number> = { all: 0, us: 0, europe: 0, asia: 0 };
    cards.forEach((card) => {
      if (stageOf(card.slug) === null) return;
      c.all++;
      regionsFor(card.geo).forEach((r) => c[r]++);
    });
    return c;
  }, [cards, voteMap]);

  const activeCard = activeSlug ? cards.find((c) => c.slug === activeSlug) : null;

  return (
    <div className="max-w-[1480px] mx-auto px-6 py-6">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h1 className="text-serif text-4xl text-ink-heading tracking-tight">Kanban</h1>
        <button
          onClick={() => setShowAdd(true)}
          className="text-mono text-xs uppercase tracking-wider bg-ink-heading text-white px-4 py-2 rounded-pill hover:bg-brown transition"
        >
          + Add Startup
        </button>
      </div>
      <p className="text-ink-muted text-sm mb-4 max-w-2xl">
        Outreach pipeline. Drag a card between columns or click to open the full profile, leave a
        history note, and change stage.
      </p>

      <div className="flex flex-wrap gap-2 items-center mb-4">
        <span className="text-mono text-xs uppercase tracking-wider text-ink-muted mr-2">
          Region
        </span>
        {(["all", "us", "europe", "asia"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setActiveRegion(r)}
            className={`pill ${activeRegion === r ? "active" : ""}`}
          >
            {r === "all" ? "All" : r === "us" ? "🇺🇸 US" : r === "europe" ? "🇪🇺 Europe" : "🌏 Asia"}
            <span className="text-[0.62rem] ml-1 px-2 py-[1px] rounded-pill bg-black/5">
              {regionCounts[r]}
            </span>
          </button>
        ))}
        {topStatus.msg && (
          <span
            className={`text-mono text-xs ml-auto ${
              topStatus.tone === "error"
                ? "text-coral"
                : topStatus.tone === "saved"
                ? "text-accent-dark"
                : "text-amber"
            }`}
          >
            {topStatus.msg}
          </span>
        )}
      </div>

      <div className="flex gap-3 overflow-x-auto pb-12 items-start">
        {STAGES.map((stage) => (
          <KanbanColumn
            key={stage}
            stage={stage}
            count={counts[stage]}
            cards={onBoard.filter((x) => x.stage === stage).map((x) => x.c)}
            voteMap={voteMap}
            onDragOver={onColDragOver}
            onDrop={(e) => onColDrop(e, stage)}
            onCardClick={(slug) => setActiveSlug(slug)}
            onCardDragStart={onCardDragStart}
          />
        ))}
      </div>

      {showAdd && <AddStartupModal onClose={() => setShowAdd(false)} onSubmit={submitAdd} />}

      {activeCard && (
        <CardDetailModal
          card={activeCard}
          vote={voteMap.get(activeCard.slug)}
          verticalSignalLabel={verticalSignalLabel}
          onClose={() => setActiveSlug(null)}
          onTransition={(stage) => transitionStage(activeCard.slug, stage)}
          onSaveNote={(note) => saveNote(activeCard.slug, note)}
          onDeletePending={() => deletePending(activeCard.slug)}
          currentStage={stageOf(activeCard.slug)}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Column
// ---------------------------------------------------------------------------

function KanbanColumn({
  stage,
  count,
  cards,
  voteMap,
  onDragOver,
  onDrop,
  onCardClick,
  onCardDragStart,
}: {
  stage: Stage;
  count: number;
  cards: CardModel[];
  voteMap: Map<string, VoteRow>;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onCardClick: (slug: string) => void;
  onCardDragStart: (e: React.DragEvent, slug: string) => void;
}) {
  const [over, setOver] = useState(false);
  const colorClass = {
    followup: "text-coral",
    contacted: "text-brown-dark",
    talked_to: "text-blue",
    accepted: "text-accent-dark",
    rejected: "text-ink-muted",
  }[stage];

  return (
    <div
      onDragOver={(e) => {
        onDragOver(e);
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        setOver(false);
        onDrop(e);
      }}
      className={`flex-shrink-0 w-[280px] bg-canvas border rounded-2xl p-3 min-h-[200px] ${
        over ? "border-accent bg-accent-light" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between px-1 pb-3 mb-3 border-b border-line">
        <span className={`text-mono text-xs uppercase tracking-wider font-semibold ${colorClass}`}>
          {STAGE_LABELS[stage]}
        </span>
        <span className="text-mono text-[0.62rem] text-ink-muted bg-sand border border-line rounded-pill px-2 py-[2px]">
          {count}
        </span>
      </div>
      <div className="flex flex-col gap-2.5 min-h-[80px]">
        {cards.length === 0 ? (
          <div className="text-mono text-[0.65rem] uppercase tracking-wider text-ink-light text-center py-6 border border-dashed border-line rounded-lg">
            {stage === "followup" ? "Tag cards in Pipeline →" : "No cards yet"}
          </div>
        ) : (
          cards.map((c) => (
            <KanbanCard
              key={c.slug}
              card={c}
              vote={voteMap.get(c.slug)}
              onClick={() => onCardClick(c.slug)}
              onDragStart={(e) => onCardDragStart(e, c.slug)}
            />
          ))
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

function KanbanCard({
  card,
  vote,
  onClick,
  onDragStart,
}: {
  card: CardModel;
  vote?: VoteRow;
  onClick: () => void;
  onDragStart: (e: React.DragEvent) => void;
}) {
  const flag = flagFor(card.geo);
  const scoreClass =
    card.score >= 75
      ? "bg-accent-light text-accent-dark border-accent"
      : card.score >= 50
      ? "bg-amber-light text-amber border-amber"
      : "border-line text-ink-muted bg-canvas";

  const tags: React.ReactNode[] = [];
  if (card.pending) {
    tags.push(
      <Tag key="pending" className="bg-amber-light text-amber">
        ✋ Manual — pending
      </Tag>
    );
  } else if (card.manual) {
    tags.push(
      <Tag key="manual" className="bg-blue-light text-blue">
        ✋ Manual
      </Tag>
    );
  }
  if (vote?.stars) {
    tags.push(
      <Tag key="stars" className="bg-amber-light text-amber">
        {"★".repeat(vote.stars)}
      </Tag>
    );
  }
  if (vote?.note?.trim()) {
    tags.push(
      <Tag key="note" className="bg-accent-light text-accent-dark">
        note
      </Tag>
    );
  }
  if (card.gap) {
    tags.push(
      <Tag key="gap" className="bg-brown-light text-brown-dark" title={card.gap}>
        {truncate(card.gap, 28)}
      </Tag>
    );
  }

  const baseBorder = card.pending
    ? "border-blue border-dashed bg-blue-light/30"
    : card.manual
    ? "border-blue border-l-[3px]"
    : "border-line border-l-[3px]";

  return (
    <div
      draggable
      onClick={onClick}
      onDragStart={onDragStart}
      className={`bg-sand border ${baseBorder} rounded-xl p-3 cursor-pointer hover:shadow-md transition`}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="text-serif text-base text-ink-heading leading-tight flex-1 min-w-0">
          <a
            href={card.url}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            className="text-ink-heading no-underline border-b border-line-strong hover:border-brown hover:text-brown"
          >
            {card.name}
          </a>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {flag && (
            <span className="text-sm leading-none" title={card.geo || ""}>
              {flag}
            </span>
          )}
          {!card.pending && (
            <span
              className={`text-mono text-[0.62rem] font-semibold border rounded-pill px-2 py-[1px] ${scoreClass}`}
            >
              {card.score}
            </span>
          )}
        </div>
      </div>
      <div className="text-xs text-ink-muted leading-snug line-clamp-2 mt-1">{card.oneliner}</div>
      {tags.length > 0 && <div className="flex flex-wrap gap-1.5 mt-2">{tags}</div>}
    </div>
  );
}

function Tag({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <span
      className={`text-mono text-[0.55rem] font-medium uppercase tracking-wider px-1.5 py-[2px] rounded-pill ${className}`}
      title={title}
    >
      {children}
    </span>
  );
}

function truncate(s: string, n: number) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

// ---------------------------------------------------------------------------
// Card detail modal
// ---------------------------------------------------------------------------

function CardDetailModal({
  card,
  vote,
  verticalSignalLabel,
  currentStage,
  onClose,
  onTransition,
  onSaveNote,
  onDeletePending,
}: {
  card: CardModel;
  vote?: VoteRow;
  verticalSignalLabel: string;
  currentStage: Stage | null;
  onClose: () => void;
  onTransition: (stage: Stage | null) => void;
  onSaveNote: (note: string) => void;
  onDeletePending: () => void;
}) {
  const [note, setNote] = useState(vote?.note ?? "");
  const taRef = useRef<HTMLTextAreaElement>(null);

  function stampDate() {
    const today = new Date().toISOString().slice(0, 10);
    const stamp = `${today} — `;
    const next = (note ? note + "\n" : "") + stamp;
    setNote(next);
    requestAnimationFrame(() => {
      taRef.current?.focus();
      taRef.current?.setSelectionRange(next.length, next.length);
    });
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-[1000] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-canvas rounded-2xl p-8 max-w-[720px] w-full shadow-2xl my-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h2 className="text-serif text-3xl text-ink-heading tracking-tight">
            <a
              href={card.url}
              target="_blank"
              rel="noopener"
              className="text-ink-heading no-underline border-b border-line-strong hover:border-brown hover:text-brown"
            >
              {card.name}
            </a>
          </h2>
          <div className="flex items-center gap-2 flex-shrink-0">
            {!card.pending && (
              <span className="text-mono text-xs font-semibold bg-sand border border-line rounded-pill px-3 py-1">
                {card.score}/100
              </span>
            )}
            <button onClick={onClose} className="pill">
              Close ✕
            </button>
          </div>
        </div>

        {card.pending && (
          <div className="bg-amber-light border-l-4 border-amber rounded-lg px-4 py-3 my-4 text-sm leading-relaxed">
            <strong className="text-brown-dark">✋ Pending generation.</strong> The full BG profile
            will be created on the next cron tick (every ~5 minutes). Until then, this is a
            placeholder — you can leave history notes and move it through stages.
            <br />
            <br />
            URL:{" "}
            <a href={card.url} target="_blank" rel="noopener" className="text-brown underline">
              {card.url}
            </a>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {card.manual && !card.pending && <Tag className="bg-blue-light text-blue">✋ Manually added</Tag>}
          {card.gap && <Tag className="bg-brown-light text-brown-dark">{card.gap}</Tag>}
          {card.stageLabel && <Tag className="bg-amber-light text-amber">{card.stageLabel}</Tag>}
          {card.geo && (
            <Tag className="bg-[#EEEDEB] text-ink-muted">
              {flagFor(card.geo)} {card.geo}
            </Tag>
          )}
        </div>

        {!card.pending && <p className="text-base text-ink leading-relaxed mb-4">{card.oneliner}</p>}

        {card.verticalSignal && (
          <Section label={`${verticalSignalLabel} Signal`} value={card.verticalSignal} />
        )}
        {card.team && <Section label="Team" value={card.team} />}
        {card.thesisFit && (
          <div className="bg-accent-light border-l-4 border-accent rounded-lg px-4 py-3 mb-3">
            <div className="text-mono text-[0.6rem] uppercase tracking-wider text-accent-dark mb-1">
              Why this matters
            </div>
            <p className="text-sm leading-relaxed">{card.thesisFit}</p>
          </div>
        )}
        {card.evidence.length > 0 && (
          <div className="mb-5 mt-3">
            <div className="text-mono text-[0.6rem] uppercase tracking-wider text-ink-muted mb-1">
              Evidence
            </div>
            <ul className="space-y-1">
              {card.evidence.map(([label, url], i) => (
                <li key={i} className="text-sm">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="text-brown hover:border-b hover:border-brown"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t border-line pt-4 mt-5">
          <div className="text-mono text-[0.62rem] uppercase tracking-wider text-ink-muted mb-2 flex items-center gap-2">
            Stage
            {card.pending && (
              <button
                onClick={onDeletePending}
                className="ml-auto text-mono text-[0.66rem] uppercase tracking-wider text-coral border border-coral-light rounded-pill px-3 py-1 hover:bg-coral-light hover:border-coral"
              >
                🗑 Delete pending
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {STAGES.map((s) => (
              <button
                key={s}
                onClick={() => onTransition(s)}
                className={`pill ${currentStage === s ? "active" : ""}`}
              >
                {STAGE_LABELS[s]}
              </button>
            ))}
            <button
              onClick={() => onTransition(null)}
              className="pill !text-coral !border-coral-light hover:!bg-coral-light"
            >
              Remove
            </button>
          </div>
        </div>

        <div className="border-t border-line pt-4 mt-5">
          <div className="text-mono text-[0.62rem] uppercase tracking-wider text-ink-muted mb-2">
            History / Notes
          </div>
          <p className="text-xs text-ink-light mb-2">
            A running record of what's happened. Use "+ Stamp date" to log an entry.
          </p>
          <textarea
            ref={taRef}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="e.g. 2026-04-29 — Reached out via founder LinkedIn DM, no reply yet"
            className="w-full min-h-[140px] p-3 border border-line-strong rounded-lg bg-sand text-sm leading-relaxed resize-y focus:outline-none focus:border-brown focus:bg-canvas"
          />
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => onSaveNote(note)}
              className="bg-ink-heading text-white text-sm px-4 py-2 rounded-pill hover:bg-brown"
            >
              Save note
            </button>
            <button
              onClick={stampDate}
              className="bg-canvas border border-line-strong text-ink-muted text-sm px-4 py-2 rounded-pill hover:border-brown hover:text-ink-heading"
            >
              + Stamp date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-sand rounded-lg px-4 py-3 mb-2">
      <div className="text-mono text-[0.6rem] uppercase tracking-wider text-ink-muted mb-1">
        {label}
      </div>
      <div className="text-sm leading-relaxed">{value}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Add modal
// ---------------------------------------------------------------------------

function AddStartupModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (url: string, name: string) => Promise<{ ok: boolean; error?: string }>;
}) {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<{ msg: string; tone?: "error" | "saving" | "saved" }>({
    msg: "",
  });
  const [busy, setBusy] = useState(false);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    let u = url.trim();
    if (!u) return setStatus({ msg: "URL is required.", tone: "error" });
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    try {
      new URL(u);
    } catch {
      return setStatus({ msg: "That doesn't look like a valid URL.", tone: "error" });
    }
    setBusy(true);
    setStatus({ msg: "Adding…", tone: "saving" });
    const r = await onSubmit(u, name.trim());
    setBusy(false);
    if (r.ok) {
      setStatus({ msg: "Added ✓ — appears in Follow Up", tone: "saved" });
      setTimeout(onClose, 700);
    } else {
      setStatus({ msg: r.error || "Failed", tone: "error" });
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-[1000] overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={submit}
        className="bg-canvas rounded-2xl p-7 max-w-[520px] w-full shadow-2xl my-6"
      >
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 className="text-serif text-3xl text-ink-heading tracking-tight">Add Startup</h2>
          <button onClick={onClose} type="button" className="pill">
            Close ✕
          </button>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed mb-4">
          Submit a URL to add a startup directly to <strong>Follow Up</strong>. The full BG profile
          is generated by the agent on the next cron tick (every ~5 minutes).
        </p>

        <label className="text-mono text-[0.65rem] uppercase tracking-wider text-ink-muted block mb-1.5">
          Startup URL <span className="text-coral">*</span>
        </label>
        <input
          autoFocus
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-3 py-2.5 border border-line-strong rounded-lg bg-sand text-sm focus:outline-none focus:border-brown focus:bg-canvas mb-3"
        />

        <label className="text-mono text-[0.65rem] uppercase tracking-wider text-ink-muted block mb-1.5">
          Name <span className="text-ink-light normal-case tracking-normal text-xs">(optional)</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Acme Labs"
          className="w-full px-3 py-2.5 border border-line-strong rounded-lg bg-sand text-sm focus:outline-none focus:border-brown focus:bg-canvas"
        />

        <div className="flex justify-end gap-2 mt-5">
          <button
            type="button"
            onClick={onClose}
            className="bg-canvas border border-line-strong text-ink-muted text-sm px-4 py-2 rounded-pill hover:border-brown hover:text-ink-heading"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={busy}
            className="bg-ink-heading text-white text-sm px-4 py-2 rounded-pill hover:bg-brown disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Follow Up
          </button>
        </div>

        {status.msg && (
          <div
            className={`text-mono text-xs mt-3 text-right ${
              status.tone === "error"
                ? "text-coral"
                : status.tone === "saved"
                ? "text-accent-dark"
                : "text-amber"
            }`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </div>
  );
}
