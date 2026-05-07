# Deploy Guide

Ten minutes from "I want this" to a live Bene Gesserit running on your own thesis. Four free-tier services, four environment variables.

---

## 1. Use the Template

On GitHub, click **Use this template** → name your repo (e.g. `my-radar`). This creates a clean fork under your account with no upstream connection — your data and your config will live here.

---

## 2. Create a Turso Database

Sign up at [turso.tech](https://turso.tech) (free tier covers personal use easily — 9 GB storage, 1B row reads/month).

```bash
# Install the CLI once
brew install tursodatabase/tap/turso       # macOS
# or: curl -sSfL https://get.tur.so/install.sh | bash

turso auth signup
turso db create bene-gesserit
turso db show bene-gesserit --url          # → libsql://...
turso db tokens create bene-gesserit       # → eyJ...
```

Save both. You'll paste them into Vercel in step 4.

(If you'd rather skip the CLI: create the database in the [Turso web UI](https://app.turso.tech), then go to **Database → Connect** for the URL and **Database → Tokens** for an auth token.)

---

## 3. Get an Anthropic API Key

Sign up at [console.anthropic.com](https://console.anthropic.com), generate an API key. Pricing is pay-as-you-go — typical BG usage (one radar run every two days, ~10 manual adds/month) costs a few dollars per month.

---

## 4. Deploy to Vercel

Click the **Deploy with Vercel** button in your fork's README, or:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your fork
3. In **Environment Variables**, add:

| Variable | Where it comes from |
|---|---|
| `DATABASE_URL` | Turso `db show --url` (looks like `libsql://...`) |
| `DATABASE_AUTH_TOKEN` | Turso `db tokens create` (a long JWT) |
| `ANTHROPIC_API_KEY` | Anthropic console |
| `BG_PASSWORD` | Pick one. You'll type it once per browser to log in. |
| `BG_VOTER_NAME` | (Optional) Your name. Defaults to "you". |

4. Click **Deploy**.

Vercel will:
- Run `npm install`
- Run `npm run db:migrate` (creates the schema in your Turso DB)
- Run `npm run db:seed` (loads `/config/*.example` defaults into the DB if it's empty)
- Deploy the Next.js app
- Register the cron schedules from `vercel.json`

When it's done, visit the URL.

---

## 5. First Login & Configuration

1. The first page asks for your `BG_PASSWORD`. Enter it. (Cookie lasts 30 days.)
2. You'll land on `/settings` (because the DB has no thesis yet).
3. Paste your thesis into the **Thesis** field. This is the most important step — the agents read this on every run.
4. (Optional) Adjust scoring weights. Defaults are 35/25/20/20 across Gap Fit / Vertical Signal / Stage Match / Team Signal.
5. (Optional) Edit search terms. Defaults are generic and will not be useful for most theses.
6. (Optional) Rename the vertical signal label (default "FinServ") to match your domain.
7. Click **Save & Run First Radar**.

The first radar run kicks off as a background job (typically 2-5 minutes). When it completes, refresh `/pipeline` — your first cohort of candidates is there.

---

## Schedules

Set in `vercel.json`. Defaults:

| Job | Cadence | What it does |
|---|---|---|
| `cron/run-radar` | Every two days at 6 AM UTC | Reads thesis + search terms, runs the radar agent, inserts new candidates |
| `cron/process-pending` | Every 5 minutes | Picks up any unresolved manual adds and runs the card-generation agent |
| `cron/changelog-summary` | Weekly, Mondays | Generates a summary changelog entry for the past week |

You can edit these in `vercel.json` and redeploy.

---

## Updating

When the upstream template gets new features, in your fork:

```bash
git remote add upstream https://github.com/<original>/bene-gesserit-cloud.git
git fetch upstream
git merge upstream/main
```

Resolve any merge conflicts (your `/config/*` files won't conflict because they're per-user). Push. Vercel redeploys.

---

## Costs

| Service | Free tier limit | BG typical usage |
|---|---|---|
| GitHub | Unlimited public repos | One repo |
| Vercel | 100 GB-hours, 100 GB bandwidth | Well under |
| Turso | 9 GB, 1B row reads | Tens of MB, thousands of reads |
| Anthropic | Pay-as-you-go | ~$3-10/month |

Net: a few dollars a month for the Anthropic API. Everything else is free for personal use.
