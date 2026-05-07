-- Initial schema. Idempotent — safe to run on every deploy.
-- For schema changes, you can either edit this file by hand OR migrate to
-- proper Drizzle-generated migrations via `npm run db:generate`. See README.

CREATE TABLE IF NOT EXISTS startups (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  oneliner TEXT NOT NULL,
  gap TEXT,
  stage_label TEXT,
  geo TEXT,
  vertical_signal TEXT,
  team TEXT,
  thesis_fit TEXT,
  evidence TEXT,                       -- JSON array of [name, url] tuples
  score INTEGER,
  bars TEXT,                           -- JSON {gap:[n,m], finserv:[n,m], ...}
  source TEXT NOT NULL DEFAULT 'radar',
  manual_add INTEGER NOT NULL DEFAULT 0,
  detected_at TEXT NOT NULL,           -- YYYY-MM-DD
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS startups_detected_at_idx ON startups(detected_at);
CREATE INDEX IF NOT EXISTS startups_source_idx ON startups(source);

CREATE TABLE IF NOT EXISTS votes (
  slug TEXT PRIMARY KEY REFERENCES startups(slug) ON DELETE CASCADE,
  voter TEXT,
  stars INTEGER NOT NULL DEFAULT 0,
  note TEXT,
  followup INTEGER NOT NULL DEFAULT 0,
  archived INTEGER NOT NULL DEFAULT 0,
  kanban_stage TEXT,
  voted_at TEXT
);

CREATE INDEX IF NOT EXISTS votes_kanban_stage_idx ON votes(kanban_stage);
CREATE INDEX IF NOT EXISTS votes_followup_idx ON votes(followup);

CREATE TABLE IF NOT EXISTS manual_pending (
  slug TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  name TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  error_msg TEXT,
  submitted_at TEXT NOT NULL,
  resolved_at TEXT
);

CREATE INDEX IF NOT EXISTS manual_pending_status_idx ON manual_pending(status);

CREATE TABLE IF NOT EXISTS radar_runs (
  id TEXT PRIMARY KEY,
  run_date TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'queued',
  new_slugs TEXT,                      -- JSON array
  summary TEXT,
  error_msg TEXT,
  created_at TEXT NOT NULL,
  completed_at TEXT
);

CREATE TABLE IF NOT EXISTS changelog_entries (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  date TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT,
  evidence TEXT,
  source TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS changelog_type_idx ON changelog_entries(type);
CREATE INDEX IF NOT EXISTS changelog_date_idx ON changelog_entries(date);

CREATE TABLE IF NOT EXISTS config (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
