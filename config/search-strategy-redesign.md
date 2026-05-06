# Search Strategy Redesign — v6.0 proposal
*Drafted: 2026-05-07. Revised same day after closer reading of the existing system. Status: working memo. Companion docs: `radar-phase-4-blind-spot-protocol.md` (the structural fix), `generate-search-terms-v6-spec.md` (the vocabulary fix), `empty-cells-seed-pass-2026-05-07.md` (the proof-of-concept).*

**REVISED FRAMING — read this first.** My initial draft of this memo overstated the diagnosis. After reading the discovery log, search-state.json, and the how-it-works architecture document, the actual situation is:

1. **The system already knows the empty cells (S3, S5, S6, S7, S9, S10) cannot be cracked by vocabulary-driven web search.** Cycle 7 reframed this from a market-supply gap to a search-strategy gap. Cycle 9, 10, 12, and 13 all reconfirmed it. The discovery log explicitly says "the accelerator-batch path is the only path that has produced specialist-agent hits historically."
2. **The system already knows the cure: accelerator-batch portfolio walks + reverse-archetype queries + Layer 3 GitHub MCP at scale.** Cycle 9 surfaced 4 specialist agents from a YC W26 sweep (Autonomous score 92, Sponge, Orthogonal, Maven). Cycle 13 monitor surfaced 6 candidates from a Layer 3 GitHub MCP pass.
3. **The cure is not being executed.** Cycle 9 wrote "schedule an EF / Antler London / Tenity portfolio walk" into the recommendations. Cycle 13 (seven days later, four full cycles later) still shows the recommendation as "un-actioned." The empty cells stayed empty because Phase 4 of the radar kept running the documented-exhausted vocabulary queries instead of the documented-effective alternatives.

So the real structural problem is an **execution gap inside Phase 4 of the radar task**, not a vocabulary gap. The vocabulary-and-surface points below remain real and worth fixing — but as second-order improvements, not the primary cure. The primary cure is `radar-phase-4-blind-spot-protocol.md`.

The vocabulary critique below is still useful for cells where vocabulary-driven search **is** the right tool (S-FRONT, S1, P1–P8) — and the schema upgrades it implies are still worth landing because they tighten every search the system runs. But the vocabulary fix alone will not unstick S3 / S5 / S6 / S7 / S10 — only the protocol will.

---

## What's broken (vocabulary side — second-order fixes)

107 companies in the live pipeline across 22 scouting categories. Five categories carry 68 of them (64%). Nine specialist-agent categories sit at zero. The thesis says the "specialist agents" are the primary scouting target as of v3.0; the search architecture has produced almost nothing for them.

| Coverage band | Categories | Companies |
|---|---|---|
| Heavy (10+) | AI Safety, Compliance, Orchestration, Personal Agent, Agent Auth | 68 |
| Light (3–9) | Tax Optimisation, Research & Signal Intelligence | 15 |
| Sparse (1–2) | Tokenization, Payment Rails, Monetisation, Dispute Resolution, S2, S9 | 14 |
| Empty (0) | **S3, S5, S6, S7, S8, S10, R3, P3, P7** | 0 |

The empty cells are not coincidence. They share three properties: (a) the customer is **not** a European bank's compliance officer, (b) the founder doesn't ship via a Sifted funding announcement, and (c) the BG vocabulary for the category is BG-internal jargon that nobody in the world uses to describe themselves.

### Failure mode 1 — Synthetic vocabulary

Every L1 line in `bg-search-terms.md` is a brittle quoted exact-match against a phrase no founder has ever written. Examples taken verbatim from the file:

- `"trade structuring AI startup"`
- `"options strategy AI startup"`
- `"derivatives intelligence agent fintech"`
- `"smart order routing AI"`
- `"execution quality AI fintech"`
- `"AI-native RIA startup"`
- `"holistic wealth platform AI"`
- `"behavioural coaching agent"`

These are BG taxonomy labels with the word "AI" or "agent" stapled on. They appear nowhere on the open web outside this file. A founder building an options copilot writes "your AI options trader", "the wheel strategy on autopilot", "1% a week from premium", "options brain", "Robinhood for vol selling" — vivid, customer-facing, JTBD-shaped phrases. None of those phrases is in the search corpus.

### Failure mode 2 — Single surface menu

Every category in the file uses the same surface menu: 6 tech-press sites + 21 country-rotation press sites + 5 tech hubs + 13 accelerators + ~95 seed VCs + 8 university spin-outs + 8 competitions + 8 databases. This menu was designed for one thing — picking up European platform-infrastructure startups on their Series A funding day — and that's exactly the kind of company that's over-represented in the pipeline (see "heavy" band above).

The menu is structurally blind to everything else:

| What it misses | Examples of what's actually there |
|---|---|
| B2C retail-investor surfaces | Reddit r/options, r/wallstreetbets, r/personalfinance, r/Bogleheads; X / FinTwit; TikTok finance; Discord trader communities; App Store launches; Hacker News Show HN |
| B2B advisor-tech surfaces | Kitces.com, T3 Technology Hub, Future Proof, Schwab IMPACT, RIABiz, ThinkAdvisor, AdvisorHub, Wealth Mosaic, FA Magazine, FPA Annual, NAPFA |
| B2B trading / brokerage surfaces | Markets Media, Risk.net, The Trade News, Waters Technology, FIA Boca, TradeTech, ISITC, SIFMA Ops, Sibos, Money 2020, Finovate, Innotribe |
| B2B compliance surfaces | ACAMS, Compliance Week, NSCP, RegTech FS Innovation, GARP Risk, AICPA |
| AI-native infrastructure surfaces | Hacker News, GitHub trending, Hugging Face, LangChain showcase, Anthropic / OpenAI customer pages, Latent Space, AI Engineer Summit, AI Tinkerers |
| Inverse-signal surfaces | "Founding engineer" job posts on Wellfound / LinkedIn / eFinancialCareers; G2 / Capterra alternatives-to pages; conference speaker lists; podcast guest lists |
| Corporate venture & finserv-native VCs | Citi Ventures, Wells Fargo Strategic Capital, Visa Ventures, Mastercard Foundry, JPMorgan Strategic Investments, Goldman Strategic Investments, Anthemis (already in), F-Prime, Flourish, Nyca, QED (already in), Ribbit (already in) |

### Failure mode 3 — Audience inversion

The current architecture asks: *where does the press talk about this kind of company?* The right question is: *where does this kind of company go to find its first fifty customers?*

A startup building "the AI tax-loss harvesting copilot for RIAs" goes to Kitces, sponsors a Future Proof podcast episode, gets a slot in T3's demo lineup, and shows up in WealthManagement.com. It does **not** go to Sifted. A startup building "the wheel-strategy autopilot for retail" goes to r/options, sponsors a FinTwit personality, ships on Product Hunt, and gets a Show HN. It does **not** go to Tech.eu. The startup follows its customers; the customers don't read what we're searching.

---

## The reframe — five audience archetypes

Every scouting category should carry one of these tags. The surface menu follows from the tag. The vocabulary follows from the customer's language.

| Tag | Audience | Watering holes |
|---|---|---|
| **A — Retail investor** | Self-directed traders, savers, mass affluent | Reddit (r/options, r/wallstreetbets, r/personalfinance, r/Bogleheads, r/algotrading), X / FinTwit, TikTok finance, Discord trader communities, App Store launches, Hacker News Show HN, Product Hunt, Bogleheads forum, Substack |
| **B — Independent advisor / RIA** | RIAs, family offices, hybrid advisors, wirehouse breakaways | Kitces.com, T3 Technology Hub, Future Proof, Schwab IMPACT, Wealthstack, RIABiz, ThinkAdvisor, AdvisorHub, Wealth Mosaic, FA Magazine, FPA Annual, NAPFA, Barron's Top Advisor Summit, AdvisorEngine, Citywire RIA, Financial Advisor Success podcast |
| **C — Bank / broker / asset manager** | OMS, EMS, trading desks, ops, treasurers | Money 2020, Finovate, Sibos / Innotribe, ISITC, SIFMA Ops, FIA Boca, TradeTech, IMpower / FundForum, Markets Media, Risk.net, The Trade News, Waters Technology, FN London, American Banker, Banking Dive, Finadium, Tabb / Coalition Greenwich vendor surveys |
| **D — Compliance / risk / regtech buyer** | CCOs, MLROs, risk officers, GRC | ACAMS, Compliance Week, NSCP, RegTech FS Innovation Lab, FIA Boca compliance day, GARP Risk Convention, AICPA, Reg Reporter, Regulation Asia, FT Regulation desk, ABA RegTech |
| **E — AI-native infrastructure builder** | ML platform teams, agent builders, AI engineers | Hacker News, GitHub trending, Hugging Face, LangChain showcase, CrewAI / AutoGen showcase, Anthropic / OpenAI / Vercel customer pages, Latent Space, AI Engineer Summit, AI Tinkerers, Anthropic Builder Day, Sequoia AI Atlas |

A category can carry more than one tag — most of them do. S-FRONT (personal financial agent) is A + B. S5 (options strategy) is A + E. S6 (execution agent) is C. P3 (pre-trade compliance) is C + D. R3 (wealth management reinvention) is B.

---

## The new layer architecture

Replace the current L1a–L4e structure with surface-typed layers. Each layer is applied per archetype tag, so a B-tagged category gets the Kitces / T3 / Future Proof menu and an A-tagged category gets the Reddit / FinTwit / Product Hunt menu. Categories that span archetypes get the union.

| Layer | Surface type | Applies to | Example shape |
|---|---|---|---|
| **L0** | **Customer-Native Vocabulary (CNV)** — 10–20 founder-native phrases per category, in plain text, fed into other layers as the term not the exact-match | All | Free-text, ungated. Founder phrasing, customer JTBD phrasing. |
| **L1** | General tech press | All | `("AI options trader" OR "wheel strategy autopilot" OR "covered-call income engine") site:techcrunch.com` |
| **L2** | Trade press by archetype | A → fintech consumer press; B → Kitces / RIABiz / ThinkAdvisor; C → Risk / Markets Media / Waters; D → Compliance Week / ACAMS; E → Latent Space / AI Engineer | Archetype-specific. Most categories will have 6–10 high-signal trade-press domains. |
| **L3** | Conference & demo-day surfaces | A → Product Hunt, App Store launch tag; B → T3 demo lineup, Future Proof exhibitor list; C → Money 2020 / Finovate finalists, Sibos Innotribe; D → ACAMS exhibitors, RegTech FS finalists; E → AI Engineer Summit, Anthropic Builder Day | Archetype-specific. |
| **L4** | Newsletters & podcasts | All | Fintech Brainfood (Simon Taylor), Fintech Business Weekly (Jason Mikula), Net Interest (Marc Rubinstein), This Week in Fintech, Wealth Mosaic, Kitces' Financial Advisor Success podcast, Wharton Fintech podcast, Latent Space podcast, Future Proof podcast |
| **L5** | VC portfolio + corporate VC | All — but tagged | Existing seed-VC list **plus** finserv-native (Anthemis, F-Prime, Flourish, Nyca, FT Partners) **plus** corporate venture (Citi Ventures, Wells Fargo Strategic Capital, JPMorgan Strategic Investments, Goldman Strategic Investments, Visa Ventures, Mastercard Foundry, Capital One Ventures, American Express Ventures) |
| **L6** | Inverse signals — hiring posts | All | `site:wellfound.com "founding engineer" + [CNV term]`; `site:linkedin.com/jobs "founding ML engineer" + [CNV term]`; `site:efinancialcareers.com "founding"`; `site:workatastartup.com [CNV term]` |
| **L7** | Inverse signals — customer logos | All | `site:langchain.com case study + finserv`; `site:anthropic.com/customers + finserv`; `site:vercel.com/customers + wealth`; `site:vanta.com/customers + finance` |
| **L8** | Build-in-public | A + E (some B) | Twitter advanced search by CNV phrase; Substack search; GitHub trending by topic; founder Mastodon / Bluesky presence |
| **L9** | Adjacent-competitor pages | All | G2 / Capterra "alternatives to [incumbent]"; Crunchbase competitors list; "competitors of [incumbent]" press |
| **L10** | Accelerator showcases (expanded) | All | YC W26 + S26 batches, EF cohorts, Antler launches, Mouro/Santander, Plug and Play Fintech, Mastercard Start Path, Tenity, Barclays Rise, Fintech Sandbox, MassChallenge FinTech, ICONIQ, AI Grant cohorts |

The point is **not** that every layer fires on every category. The point is that each category gets the layers that match its audience, instead of every category getting the same Sifted-and-StationF treatment.

---

## Per-category audience map

The ten empty / sparse cells, with archetype tag, sample CNV, and the surface mix that should fire. Sample CNV is illustrative — full lists belong in the regenerated `bg-search-terms.md`.

### S3 — Trade Structuring Agent · `B` (advisor) · `C` (broker)
**CNV:** "asset location optimizer", "after-tax alpha", "options vs equity decisioning", "Roth vs taxable", "where should this trade sit", "tax-aware trade routing", "structure-aware advisor copilot", "trade allocation engine", "account selection AI"
**Surfaces:** L2 → Kitces, ThinkAdvisor, RIABiz, T3; L3 → T3 demo, Future Proof, Schwab IMPACT exhibitor; L6 → "founding engineer" + "tax-aware investing"

### S5 — Options & Derivatives Strategy Agent · `A` (retail) · `E` (infra)
**CNV:** "the wheel on autopilot", "covered-call income engine", "your AI options trader", "vol selling for retail", "options brain", "income strategies on autopilot", "1% a week from premium", "options copilot", "AI for options"
**Surfaces:** L1 alt — Reddit r/options + r/thetagang searches; L3 → Product Hunt, Show HN; L8 → FinTwit options personalities; L7 → LangChain showcase + Anthropic case studies for options apps

### S6 — Execution Agent · `C` (broker)
**CNV:** "execution copilot", "AI smart order router", "TCA copilot", "best-ex agent", "algo wheel selector", "venue selection AI", "execution analytics", "agentic OMS", "implementation shortfall AI"
**Surfaces:** L2 → Markets Media, The Trade News, Waters Technology, Risk.net; L3 → TradeTech, FIA Boca, ISITC, SIFMA Ops; L5 → Coalition Greenwich vendor lists; L6 → "founding quant developer" + "execution"

### S7 — Position Monitoring & Thesis Tracking · `A` (retail) · `B` (advisor)
**CNV:** "thesis tracker", "earnings prep agent", "catalyst tracker", "AI watchlist", "smart price alerts", "thesis-aware alerts", "AI portfolio butler", "stop-loss intelligence"
**Surfaces:** L1 alt — Reddit r/SecurityAnalysis, FinTwit; L3 → Product Hunt, App Store; L4 → Substack investor newsletters; L8 → GitHub portfolio-monitor projects

### S8 — Financial Planning Agent · `A` (consumer) · `B` (advisor)
**CNV:** "AI financial planner", "monte carlo for your goals", "decumulation engine", "retirement income planner", "goals-based investing AI", "your AI CFO", "personal CFO", "retirement readiness AI", "spend-down agent"
**Surfaces:** L2 → Kitces, FA Magazine, ThinkAdvisor; L3 → FPA Annual, NAPFA, Schwab IMPACT, Future Proof; L4 → Kitces' Financial Advisor Success podcast; L1 alt → Bogleheads forum

### S9 — Behavioural Coaching Agent · `B` (advisor) · `A` (consumer)
**CNV:** "drawdown coach", "client retention AI", "investor psychology agent", "behavioral finance copilot", "panic prevention", "advisor coaching AI", "client communication AI", "loss-aversion coach"
**Surfaces:** L2 → Kitces, AdvisorHub, RIA Channel; L4 → behavioural-finance newsletters (Daniel Crosby, Carl Richards Sketch Guy); L6 → "behavioral economics" + finserv hiring; L1 alt — therapy-tech adjacent press

### S10 — Post-Trade Analysis & Learning · `A` (retail) · `C` (broker)
**CNV:** "trade journal AI", "trade attribution agent", "AI performance attribution", "post-trade analytics", "your trading coach", "trade review AI", "MFE / MAE analyzer"
**Surfaces:** L2 → Markets Media, Risk.net (institutional); L1 alt — Reddit r/algotrading, FinTwit (retail); L3 → Product Hunt, Show HN; L8 → GitHub trade-journal projects

### P3 — Pre-Trade Compliance Agent · `C` (broker) · `D` (compliance)
**CNV:** "pre-trade compliance agent", "suitability check API", "agent best-ex", "restricted-list agent", "concentration-limit AI", "trade gate", "agent suitability", "real-time compliance for AI agents"
**Surfaces:** L2 → Compliance Week, Risk.net, Markets Media; L3 → ACAMS, FIA Boca compliance, NSCP, RegTech FS Innovation Lab; L5 → Citi Ventures, Wells Fargo Strategic, FIS / Broadridge corporate-venture lists; L6 → "compliance engineer" + "AI"

### P7 — Agent Monetisation · `E` (infra) · `C` (broker)
**CNV:** "agent revenue share", "results-based AI billing", "agent marketplace fees", "agent metering", "outcome-based AI pricing", "agentic billing", "AI usage-based payments"
**Surfaces:** L1/L4 → Latent Space, AI Engineer; L7 → Anthropic, OpenAI, LangChain customer pages; L3 → AI Engineer Summit, Anthropic Builder Day; L5 → a16z portfolio AI tag, BCV portfolio AI tag

### R3 — Wealth Management Reinvention · `B` (advisor) · `A` (consumer)
**CNV:** "AI-native RIA", "robo 2.0", "advisor copilot", "next-gen advisor platform", "advisor OS reinvented", "AI-first wealth manager", "autonomous wealth manager", "wealth management without humans", "your AI wealth manager", "family office for everyone", "personal CFO platform"
**Surfaces:** L2 → Kitces, ThinkAdvisor, RIABiz, AdvisorHub, FA Magazine, Citywire RIA, Wealth Mosaic; L3 → T3 Tech Tools, Future Proof, Schwab IMPACT, Wealthstack, NAPFA; L4 → Kitces Financial Advisor Success, Future Proof Wealth podcast; L5 → Anthemis, F-Prime, Flourish, Nyca; L7 → Schwab Marketplace, Altruist integrations, Pershing X partner directory

---

## What to do this week

**Order matters. The protocol fix (1) is the structural one; the vocabulary fixes (2–5) are amplifiers.**

1. **Apply `radar-phase-4-blind-spot-protocol.md` to the bene-gesserit-radar SKILL.md** at `~/Documents/Claude/Scheduled/bene-gesserit-radar/SKILL.md`. This is the structural fix that closes the four-cycle execution gap. Without this, schema and vocabulary improvements will continue to produce zero in the empty cells because the wrong queries keep running.
2. **Strengthen `thesis-schema.yaml` for the empty cells**: rewrite `founder_vocabulary` and `community_vocabulary` for S3 / S5 / S6 / S7 / S10 / R3 with truly founder-native phrasing (the current values are still institutional-jargon-with-AI-stapled-on). Add `audience_archetype` field per gap. Add top-level `audience_archetypes` block with surface menus per archetype. The schema is the source of truth that flows through the auto-regen — strengthening it once cascades through every future cycle.
3. **Apply `generate-search-terms-v6-spec.md` to the generate-search-terms skill** at `~/Documents/Claude/Scheduled/.../generate-search-terms/SKILL.md`. Replace L1a–L4e with L0–L10. Use customer-jobs as free-text terms instead of exact-match. Apply archetype-typed surfaces.
4. **Write reverse-prompt files for S3, S5, S7, S10**, modelled on `config/reverse-prompts/S6-execution-agent-pitchbook.md`. Step C of the protocol depends on them.
5. **Manual seed pass on the empty cells using the new protocol.** Done as proof-of-concept on 2026-05-07 — see `empty-cells-seed-pass-2026-05-07.md` (~20 candidates surfaced in 30 minutes). Convert the `[card]`-marked rows to actual BG pipeline cards via the `bene-gesserit-card` skill.

---

## What this does NOT change

- The thesis. Same gap map, same five teams, same novelty / external-agent / stage gates.
- The redact gate, the Turso vote pipeline, the publish flow.
- The scoring weights. Once the pipeline rebalances, scoring will need a bias-correction pass — but that's downstream.

The redesign changes one thing: the act of looking. The old way looked where the press talks. The new way looks where the founders ship.
