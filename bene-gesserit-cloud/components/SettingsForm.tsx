"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SettingsForm({ initial }: { initial: Record<string, string> }) {
  const router = useRouter();
  const [thesis, setThesis] = useState(initial.thesis ?? "");
  const [searchTerms, setSearchTerms] = useState(initial.search_terms ?? "");
  const [scoringWeights, setScoringWeights] = useState(initial.scoring_weights ?? "");
  const [verticalLabel, setVerticalLabel] = useState(initial.vertical_signal_label ?? "FinServ");
  const [gapCategories, setGapCategories] = useState(initial.gap_categories ?? "[]");
  const [status, setStatus] = useState<{ msg: string; tone?: "saving" | "saved" | "error" }>({
    msg: "",
  });

  async function save() {
    setStatus({ msg: "Saving…", tone: "saving" });
    try {
      const r = await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          updates: {
            thesis,
            search_terms: searchTerms,
            scoring_weights: scoringWeights,
            vertical_signal_label: verticalLabel,
            gap_categories: gapCategories,
          },
        }),
      });
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        throw new Error(data.error || "Save failed");
      }
      const data = await r.json();
      const changed = (data.changedKeys ?? []).length;
      setStatus({
        msg: changed === 0 ? "No changes" : `Saved ✓ (${changed} key${changed === 1 ? "" : "s"})`,
        tone: "saved",
      });
      router.refresh();
      setTimeout(() => setStatus({ msg: "" }), 2400);
    } catch (err) {
      setStatus({
        msg: err instanceof Error ? err.message : String(err),
        tone: "error",
      });
    }
  }

  return (
    <div className="max-w-[780px] mx-auto px-6 py-8">
      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h1 className="text-serif text-4xl text-ink-heading tracking-tight">Settings</h1>
        <div className="flex items-center gap-3">
          {status.msg && (
            <span
              className={`text-mono text-xs ${
                status.tone === "error"
                  ? "text-coral"
                  : status.tone === "saved"
                  ? "text-accent-dark"
                  : "text-amber"
              }`}
            >
              {status.msg}
            </span>
          )}
          <button
            onClick={save}
            className="bg-ink-heading text-white text-mono text-xs uppercase tracking-wider px-4 py-2 rounded-pill hover:bg-brown"
          >
            Save
          </button>
        </div>
      </div>
      <p className="text-ink-muted text-sm mb-8 max-w-xl">
        Edit your thesis, scoring rubric, and search terms. Changes take effect on the next agent
        run; a changelog entry is recorded for each save.
      </p>

      <Field
        label="Thesis"
        hint="Prose describing what kinds of companies you want surfaced. The agents read this on every run."
      >
        <textarea
          value={thesis}
          onChange={(e) => setThesis(e.target.value)}
          className="w-full min-h-[280px] p-4 border border-line-strong rounded-lg bg-sand text-sm font-sans leading-relaxed focus:outline-none focus:border-brown focus:bg-canvas"
        />
      </Field>

      <Field
        label="Search terms"
        hint="Markdown — query patterns the radar uses each run."
      >
        <textarea
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
          className="w-full min-h-[200px] p-4 border border-line-strong rounded-lg bg-sand text-sm font-sans leading-relaxed focus:outline-none focus:border-brown focus:bg-canvas"
        />
      </Field>

      <Field
        label="Vertical signal label"
        hint="The name shown in card headers ('FinServ Signal'). Rename if your domain isn't financial services."
      >
        <input
          type="text"
          value={verticalLabel}
          onChange={(e) => setVerticalLabel(e.target.value)}
          className="w-full p-3 border border-line-strong rounded-lg bg-sand text-sm focus:outline-none focus:border-brown focus:bg-canvas"
        />
      </Field>

      <Field
        label="Scoring weights"
        hint="JSON — base dimensions and soft factors. See config/scoring-weights.json.example for the schema."
      >
        <textarea
          value={scoringWeights}
          onChange={(e) => setScoringWeights(e.target.value)}
          className="w-full min-h-[280px] p-4 border border-line-strong rounded-lg bg-sand text-mono text-xs leading-relaxed focus:outline-none focus:border-brown focus:bg-canvas"
        />
      </Field>

      <Field
        label="Gap categories"
        hint="JSON array of strings. The agent classifies each card into one of these (or null if unclear)."
      >
        <textarea
          value={gapCategories}
          onChange={(e) => setGapCategories(e.target.value)}
          className="w-full min-h-[120px] p-4 border border-line-strong rounded-lg bg-sand text-mono text-xs leading-relaxed focus:outline-none focus:border-brown focus:bg-canvas"
        />
      </Field>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-7">
      <div className="text-mono text-xs uppercase tracking-wider text-ink-heading mb-1">
        {label}
      </div>
      <p className="text-xs text-ink-light mb-2">{hint}</p>
      {children}
    </section>
  );
}
