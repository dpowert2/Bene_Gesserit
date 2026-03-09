# Bene Gesserit — Startup Signals Radar

An AI-powered startup discovery and evaluation system for the agentic AI ecosystem in financial services.

## What This Is

Bene Gesserit surfaces, scores, and tracks early-stage companies building tools and infrastructure for AI agents in financial services. It runs as a set of scheduled tasks in [Claude Cowork](https://claude.com/product/cowork), using web search to find startups, research papers, and market signals — then learns from user feedback to get smarter over time.

## Live Digest

The public signals digest is published at: **[your-username.github.io/bene-gesserit](https://your-username.github.io/bene-gesserit)**

## Architecture

The system runs entirely from local files + Claude Cowork scheduled tasks. No database, no custom backend, no API keys.

- `config/` — Thesis, search terms, scoring weights, learned preferences
- `pipeline/` — Startup candidates in Kanban stages (detected → reviewing → shortlisted → engaged → passed)
- `briefings/` — Daily AM/PM briefings
- `radar/` — Weekly strategic analysis and theme clustering
- `research/` — Paper summaries
- `learning/` — Vote history, near-miss analysis, preference learning, discovery log
- `site/` — Static HTML digest published to GitHub Pages
- `outputs/` — Generated reports

## How It Works

1. **Scan** (every 2 days): Claude searches the web for startups matching gap criteria, scores them, and generates briefings
2. **Vote**: User reviews startup cards and votes 👍/👎 with optional tags and notes
3. **Learn** (weekly): System analyses vote patterns, identifies scoring blind spots, and adjusts weights
4. **Publish**: After each scan, the digest site is regenerated with latest data

## Gap Categories

1. Personal Agent — Agentic personal finance assistants
2. Compliance — Agent-native compliance tooling
3. Tax Optimisation — After-tax optimisation agents
4. Agent Orchestration — Multi-agent workflow infrastructure
5. AI Safety & Guardrails — Monitoring, evals, safe actioning
6. Agent Authentication & Security — Identity, permissions, enforcement

## Built With

- [Claude Cowork](https://claude.com/product/cowork) — Scheduled tasks and agentic execution
- GitHub Pages — Static site hosting
- Markdown + JSON — Local file-based data layer

---

*Built by FCAT Innovation Ecosystem Europe.*
