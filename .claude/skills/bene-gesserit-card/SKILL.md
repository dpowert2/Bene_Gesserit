---
name: bene-gesserit-card
description: |
  Create a Bene Gesserit startup pipeline card from a company name, URL, or description. Use this skill whenever the user mentions a startup they want assessed, scored, or added to the Bene Gesserit pipeline — whether they say "card this", "score this startup", "add to the pipeline", "what do you think of [company]", "look into [company] for BG", or simply paste a startup name or funding article URL. Also trigger when the user asks to "evaluate", "assess", or "profile" a startup in the context of agentic AI or financial services. This is the core skill for turning a raw startup signal into a structured, scored Bene Gesserit pipeline entry. MANDATORY trigger on any mention of "Bene Gesserit" combined with a startup name.
---

# Bene Gesserit Card Creator

You are producing a startup assessment card for the Bene Gesserit radar — a curated pipeline tracking agentic AI startups relevant to financial services infrastructure. The card should be displayed directly in the chat as formatted text.

## What You're Producing

Given a startup name (and optionally a URL, article, or context), you will:

1. **Research** the startup using web search
2. **Score** it against the Bene Gesserit scoring model
3. **Display** a formatted card directly in the conversation

## Step 1: Research

Search the web for the startup. You need:

- **What they do** — one-liner, core product
- **Funding** — amount, round, lead investors, date
- **Team** — founders, notable backgrounds, angels
- **Geography** — HQ location
- **Financial services signal** — any evidence of finserv customers, partnerships, or regulated-industry DNA
- **Product maturity** — live product, beta, stealth?

Run 2-3 web searches with different angles (company name, "company name funding", "company name financial services"). If the user provided a URL, fetch that first, then supplement with searches.

If information is sparse, produce a partial card noting what's missing. Don't refuse — a partial card with gaps flagged is more useful than nothing.

## Step 2: Classify

Assign to one of these gap categories:

1. **Personal Agent** — agentic personal finance assistants (discovery, planning, execution for investors/advisors)
2. **Compliance** — agent-native compliance tooling (supervision, audit trails, policy enforcement)
3. **Tax Optimisation** — after-tax optimisation agents (tax-loss harvesting, capital gains, tax-aware rebalancing)
4. **Agent Orchestration** — multi-agent workflow infrastructure (tool routing, planning/execution loops)
5. **AI Safety & Guardrails** — hallucination prevention, guardrails, monitoring, evals for high-stakes agent deployment
6. **Agent Authentication & Security** — identity, authN/authZ, permissions, secrets management for agents
7. **Agent Payment Rails** — payment primitives, settlement, credential/authorisation for agent-initiated transactions

If the startup doesn't fit any category, it may not be thesis-relevant. Score it anyway but note this.

## Step 3: Score

Four base dimensions totalling 100, plus soft-factor adjustments (final score capped 0-100).

### Base Dimensions

| Dimension | Max | What to assess |
|-----------|-----|----------------|
| **Gap fit** | 35 | How precisely does the product address the gap? Purpose-built > adjacent. Infrastructure-layer > application-layer. |
| **FinServ readiness** | 25 | Named finserv customers (20-25), finserv-relevant team DNA (12-18), general enterprise with no finserv signal (5-10), nothing (0-5) |
| **Stage match** | 20 | Seed to Series B is the sweet spot (16-20). Pre-seed or Series C+ (8-15). |
| **Team signal** | 20 | Domain expertise, prior exits, notable investors/angels, team quality relative to stage |

### Soft Factor Adjustments

Apply AFTER the base score:

- **Trust infrastructure layer (+15):** Product directly addresses "who authorises the agent" or "how do agents prove identity" — infrastructure other agents connect TO
- **AI Safety for regulated industries (+12):** Purpose-built guardrails for regulated deployment (finserv, legal, healthcare), not horizontal generic LLM safety
- **Portfolio-integrated tax intelligence (+10):** Operates on live portfolios to surface tax optimisation dynamically (not tax filing)
- **Tax filing / e-filing (-20):** Primary value proposition ends at tax submission
- **Accounting automation / bookkeeping (-20):** Bookkeeping, AP/AR, expense management, general finance back-office. Does NOT apply if orchestration runs on regulated workflows (trading, advisory, lending, compliance)

### Scoring Calibration

Be honest — the model's value depends on calibration:
- **90-100:** Almost perfectly thesis-aligned with strong evidence across all dimensions. Rare.
- **70-89:** Strong candidate worth tracking closely.
- **50-69:** Interesting but significant gaps or thesis distance.
- **Below 50:** Likely not thesis-relevant. Still card it, but the score should communicate this.

## Step 4: Display the Card

Present the card in chat using this format. Use the score-bar visualisation to make scores scannable at a glance:

---

### Example Card Output

> **BENE GESSERIT CARD**
>
> # Keycard
> *AI-native identity and access management platform using cryptography to verify agent identity, enforce delegation chains, and provide audit trails for every agent action.*
>
> | | |
> |---|---|
> | **Gap** | Agent Authentication & Security |
> | **Stage** | Series A ($38M — a16z, Acrew Capital, Oct 2025) |
> | **Geo** | USA |
> | **FinServ** | No explicit finserv customers; ecommerce beachhead. Angels include Auth0/Okta veterans who typically serve regulated enterprises. |
> | **Team** | Ian Livingstone (serial founder). Angels: Karl McGuinness (ex-Okta), Matias Woloski (Auth0 co-founder). Led by a16z + boldstart. |
>
> **SCORE: 98**
> ```
> Gap fit       ████████████████████████████████████ 35/35
> FinServ       ██████████░░░░░░░░░░░░░░░ 10/25
> Stage match   ██████████████████░░ 18/20
> Team signal   ████████████████████ 20/20
> ```
> *+15 trust infrastructure layer*
>
> **Why this matters:** Keycard is the closest thing to a pure-play on cryptographic agent identity with revocable delegation chains and per-task policy enforcement. The Auth0/Okta founding network built the last identity standards layer.
>
> **Why you might pass:** Zero finserv signal at launch; ecommerce is the beachhead. Financial services will require regulated-entity trust anchoring beyond what the current product demonstrates.
>
> **Sources:** [SiliconAngle](url) · [a16z](url)

---

### Formatting Notes

- The score bars use block characters: `█` for filled, `░` for empty. Scale each bar proportionally to its max (e.g., 10/25 = 10 filled + 15 empty).
- Keep the one-liner to one sentence, italicised.
- "Why this matters" and "Why you might pass" should each be 2-3 sentences max.
- Always include source links so the assessment can be verified.
- Bold "BENE GESSERIT CARD" at the top makes it immediately recognisable.

## The Thesis in Brief

The Bene Gesserit thesis is specifically about the **regulated infrastructure layer** for agentic AI in financial services. The ideal target is something other agentic systems must connect to — not something that happens to use agentic AI. Infrastructure-layer companies score higher than application-layer companies, all else equal. Geography is neutral. Seed to Series B is the stage sweet spot.
