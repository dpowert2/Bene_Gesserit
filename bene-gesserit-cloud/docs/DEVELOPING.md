# Developing

Local development setup for working on this codebase.

## Prerequisites

- Node 20+
- A Turso DB (free tier — see [DEPLOY.md](../DEPLOY.md) step 2) **or** a local libSQL file (no setup)
- An Anthropic API key

## First-time setup

```bash
git clone <your-fork>
cd bene-gesserit-cloud
cp .env.example .env.local
# Edit .env.local — for local dev you can use a file-based libSQL:
#   DATABASE_URL=file:./local.db
# (DATABASE_AUTH_TOKEN can be left blank for file mode)
npm install
npm run db:migrate     # creates the tables
npm run db:seed        # loads /config/*.example into the config table
npm run dev
```

Open http://localhost:3000, log in with your `BG_PASSWORD`, and you should land on the empty home page.

## Day-to-day

```bash
npm run dev          # Next.js dev server on :3000
npm run typecheck    # tsc --noEmit
npm run lint         # next lint
npm run db:studio    # Drizzle Studio (browse/edit DB rows in a web UI)
```

## Project layout

See [ARCHITECTURE.md](ARCHITECTURE.md) for the full file tree and component diagram.

Quick reference:
- `app/` — Next.js routes (UI + API)
- `agents/` — Claude Agent SDK orchestration
- `components/` — React components
- `db/` — Drizzle schema, migration runner, seed script, init.sql
- `lib/` — shared utilities (auth, slug, flags, etc.)
- `config/` — `.example` files seeded into the `config` table on first deploy

## Schema changes

Two paths:

**Option A — edit `db/init.sql` directly** (simplest).

Add the new table or column to `db/init.sql` using `IF NOT EXISTS` / `ALTER TABLE` clauses. Update `db/schema.ts` to match. Re-run `npm run db:migrate`.

This is the default approach — idempotent, no migration metadata to manage.

**Option B — switch to Drizzle-generated migrations** (if you want versioned diffs).

```bash
npm run db:generate    # writes db/migrations/NNNN_*.sql + meta files
```

Then change `db/migrate.ts` to use Drizzle's migrator instead of running `init.sql`. This is worth doing if you intend to maintain a long history of schema changes; for "I'm tweaking my fork" it's overkill.

## Testing the agent locally

```bash
# Submit a manual add via the API
curl -X POST http://localhost:3000/api/manual-add \
  -H "Content-Type: application/json" \
  -H "Cookie: bg_session=..." \
  -d '{"url":"https://example.com","name":"Example"}'

# Trigger the cron pickup (you'll need CRON_SECRET set or empty middleware bypass)
curl http://localhost:3000/api/cron/process-pending \
  -H "Authorization: Bearer $CRON_SECRET"
```

For local dev without auth, you can temporarily comment out the middleware check.
