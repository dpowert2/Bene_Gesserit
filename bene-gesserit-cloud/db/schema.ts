import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

/**
 * startups — the canonical pipeline.
 * One row per candidate the radar (or a manual add) has surfaced.
 */
export const startups = sqliteTable(
  "startups",
  {
    slug: text("slug").primaryKey(),
    name: text("name").notNull(),
    url: text("url").notNull(),
    oneliner: text("oneliner").notNull(),

    // Categorisation — what gap / category does this card fall into?
    // Vocabulary is defined by the user's thesis (see config.gap_categories).
    gap: text("gap"),

    // Funding-stage label, e.g. "Seed (€4M)" or "YC W26 / Pre-Seed".
    stageLabel: text("stage_label"),
    geo: text("geo"),

    // Vertical signal — why this is relevant to your domain.
    // Default label is "FinServ"; user can rename via config.vertical_signal_label.
    verticalSignal: text("vertical_signal"),

    team: text("team"),

    // Per-card thesis-fit narrative — why does this matter given the user's thesis?
    thesisFit: text("thesis_fit"),

    // JSON array of [name, url] tuples
    evidence: text("evidence", { mode: "json" }).$type<Array<[string, string]>>(),

    score: integer("score"),

    // JSON: {gap: [n, max], finserv: [n, max], stage: [n, max], team: [n, max]}
    bars: text("bars", { mode: "json" }).$type<{
      gap: [number, number];
      finserv: [number, number];
      stage: [number, number];
      team: [number, number];
    }>(),

    // 'radar' | 'manual' | 'imported'
    source: text("source").notNull().default("radar"),
    manualAdd: integer("manual_add", { mode: "boolean" }).notNull().default(false),

    // ISO date (YYYY-MM-DD) — used for grouping in pipeline / radar feeds
    detectedAt: text("detected_at").notNull(),

    // ISO timestamp
    createdAt: text("created_at").notNull(),
  },
  (t) => ({
    detectedAtIdx: index("startups_detected_at_idx").on(t.detectedAt),
    sourceIdx: index("startups_source_idx").on(t.source),
  })
);

/**
 * votes — per-card user state (votes, notes, kanban stage).
 * One row per card.
 */
export const votes = sqliteTable(
  "votes",
  {
    slug: text("slug")
      .primaryKey()
      .references(() => startups.slug, { onDelete: "cascade" }),
    voter: text("voter"),
    stars: integer("stars").notNull().default(0),

    // Free-form. Acts as a running outreach history per card.
    note: text("note"),

    followup: integer("followup", { mode: "boolean" }).notNull().default(false),
    archived: integer("archived", { mode: "boolean" }).notNull().default(false),

    // null | 'contacted' | 'talked_to' | 'accepted' | 'rejected'
    // (followup state is implied by `followup = true && kanban_stage IS NULL`)
    kanbanStage: text("kanban_stage"),

    votedAt: text("voted_at"),
  },
  (t) => ({
    kanbanStageIdx: index("votes_kanban_stage_idx").on(t.kanbanStage),
    followupIdx: index("votes_followup_idx").on(t.followup),
  })
);

/**
 * manual_pending — URLs submitted via the kanban awaiting agent processing.
 * The agent picks pending rows, generates a card, inserts into `startups`,
 * then marks the row resolved. Failed rows record the error for retry.
 */
export const manualPending = sqliteTable(
  "manual_pending",
  {
    slug: text("slug").primaryKey(),
    url: text("url").notNull(),
    name: text("name"),

    // 'pending' | 'generating' | 'done' | 'failed'
    status: text("status").notNull().default("pending"),
    errorMsg: text("error_msg"),

    submittedAt: text("submitted_at").notNull(),
    resolvedAt: text("resolved_at"),
  },
  (t) => ({
    statusIdx: index("manual_pending_status_idx").on(t.status),
  })
);

/**
 * radar_runs — log of scheduled radar scans.
 * Useful for the changelog and for showing recent activity on the home page.
 */
export const radarRuns = sqliteTable("radar_runs", {
  id: text("id").primaryKey(),

  // YYYY-MM-DD — used to group startups detected in the run
  runDate: text("run_date").notNull(),

  // 'queued' | 'running' | 'done' | 'failed'
  status: text("status").notNull().default("queued"),

  // JSON array of slugs added by this run
  newSlugs: text("new_slugs", { mode: "json" }).$type<string[]>(),

  summary: text("summary"),
  errorMsg: text("error_msg"),

  createdAt: text("created_at").notNull(),
  completedAt: text("completed_at"),
});

/**
 * changelog_entries — every system change worth recording.
 * Manual edits via /settings, agent-generated thesis updates, scoring weight
 * changes, radar run summaries.
 */
export const changelogEntries = sqliteTable(
  "changelog_entries",
  {
    id: text("id").primaryKey(),

    // 'system' | 'thesis' | 'scoring' | 'search-terms' | 'radar' | 'preferences'
    type: text("type").notNull(),

    date: text("date").notNull(),
    title: text("title").notNull(),
    body: text("body"),
    evidence: text("evidence"),

    // 'manual' | 'agent' | 'cron'
    source: text("source"),

    createdAt: text("created_at").notNull(),
  },
  (t) => ({
    typeIdx: index("changelog_type_idx").on(t.type),
    dateIdx: index("changelog_date_idx").on(t.date),
  })
);

/**
 * config — key/value store for user-editable settings.
 *
 * Known keys:
 *   - thesis                  (markdown)
 *   - search_terms            (markdown)
 *   - scoring_weights         (JSON: see config/scoring-weights.json.example)
 *   - vertical_signal_label   (string, default 'FinServ')
 *   - gap_categories          (JSON array of strings)
 *   - radar_cadence_days      (integer, default 2)
 *
 * Seed values come from /config/*.example on first deploy.
 */
export const config = sqliteTable("config", {
  key: text("key").primaryKey(),
  value: text("value"),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});
