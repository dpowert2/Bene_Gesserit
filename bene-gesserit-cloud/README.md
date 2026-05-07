# Bene Gesserit

A personal startup-radar framework. You define what kind of company you're hunting for; BG runs scheduled research agents, scores candidates against your thesis, and maintains a pipeline you can vote on, take notes against, and run an outreach kanban from.

This is the **portable, fork-and-deploy edition** — designed so anyone can clone the template, point it at their thesis, and have a live cloud-hosted BG running in about ten minutes.

---

## What You Get

- **Radar** — scheduled AI-driven scans for startups matching your thesis. Each run produces a dated feed plus structured entries.
- **Pipeline** — every candidate the radar has surfaced, scored, sortable, filterable.
- **Kanban** — outreach board with five stages (Follow Up → Contacted → Meeting Arranged → Accepted / Rejected). Notes act as a per-card running history.
- **Manual add** — paste a URL; the system researches it and produces a full BG card automatically, marked with a persistent "added by you" badge.
- **Changelog** — every thesis edit, scoring weight change, and radar run is logged.

The system is single-tenant: one deployment per user. Fork the repo, deploy to Vercel, point at your Turso database, paste your Anthropic key, fill in your thesis. Done.

---

## Architecture in One Paragraph

A Next.js 14 App Router app deployed to Vercel. State lives in a Turso (libSQL) database accessed through Drizzle ORM. AI agents run as Vercel serverless functions using the Claude Agent SDK; scheduled work (radar runs, manual-add processing, thesis review) is wired through Vercel Cron. Configs (thesis, scoring weights, search terms) live in the DB and are edited via a settings page, but seeded from `/config/*.example` on first deploy. Single-user auth via an environment-variable password and a signed cookie. Total external services to configure: GitHub, Vercel, Turso, Anthropic — all free tier.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full design.
See [`DEPLOY.md`](DEPLOY.md) for the deploy guide.

---

## Ten-Minute Setup

Detailed steps in [`DEPLOY.md`](DEPLOY.md). Summary:

1. **Use this template** on GitHub → name your fork.
2. Create a free **Turso** database → copy the URL and auth token.
3. Get an **Anthropic API key** at [console.anthropic.com](https://console.anthropic.com).
4. **Deploy to Vercel** from your fork → set four env vars (`DATABASE_URL`, `DATABASE_AUTH_TOKEN`, `ANTHROPIC_API_KEY`, `BG_PASSWORD`).
5. Open your URL → log in with the password → land on the **Settings** page → paste in your thesis, adjust scoring weights, add starting search terms.
6. Trigger the first radar run from the Settings page (or wait for the scheduled cron).

That's it. From step 1 to live takes roughly ten minutes.

---

## Personalization

Three configs define what your BG hunts for. All editable in-app at `/settings`:

- **Thesis** — prose describing what kinds of companies you want to surface. The agents read this on every run.
- **Scoring weights** — the BG model has four base dimensions (default 35/25/20/20) plus optional soft-factor adjustments. Both are configurable.
- **Search terms** — keywords/queries the radar uses each run. The system also evolves this file based on what's converting.

Initial defaults ship as `/config/*.example` files in the repo. On first deploy these are imported into the DB. After that, edits happen via the UI; the example files stay as upstream-pullable defaults for users who want to reset.

The vertical signal — what BG calls "FinServ" by default in scoring — is configurable. If your thesis is healthcare or education or climate, rename it to match.

---

## Local Development

```bash
git clone <your-fork>
cd bene-gesserit-cloud
cp .env.example .env.local
# Fill in DATABASE_URL, etc. (point at a local libSQL or your Turso DB)
npm install
npm run db:migrate
npm run dev
```

See [`docs/DEVELOPING.md`](docs/DEVELOPING.md) for more.

---

## License

MIT.
