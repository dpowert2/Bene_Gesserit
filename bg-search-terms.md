# Bene Gesserit — Search Terms

*Last updated: 2026-04-29 | Revision: v4.6 — Operational notes updated to reflect the Supabase → Turso migration. Vote pipeline now reads from Turso bg_votes table (bg-votes-dpowert2.aws-eu-west-1.turso.io), which doesn't auto-pause; the v4.1 / v4.2 / v4.3 change-log entries below all flagged "Supabase bg_thesis_feedback query unavailable" — that root cause is now resolved. Preference model can re-process votes cast since 2026-04-15. localStorage fallback layer added client-side. v4.5 prior changes still in force: three Research vocabulary sub-blocks (Consumer behaviour, Investable Everything, Wealth-Generation Reinvention); three structural improvement blocks (Investor-Portfolio Walks, Reverse-Archetype Queries, Negative-Space Audit Protocol). Cycle 10 should run against v4.6 with the live preference signal restored.*

---

## Operating Instructions

**Stage bias:** Pre-seed, seed, and early Series A only. Series B is "too late" (vote-confirmed: linx-security 2★, april 3★, basis 1★, armadin 2★). Append `seed OR "Series A" -"Series B" -"Series C"` where useful.

**Geography bias:** Europe preferred (compliance-native by default). London, Berlin, Paris, Dublin, Barcelona, Amsterdam, Zurich, Stockholm, Madrid. Global acceptable if governance-native. Append `Europe OR UK OR EU` to rotate.

**External vs internal — THE decisive filter.** Every query must surface startups building for **third-party agents in a regulated marketplace**, not for internal institutional workflows. Hard-filtered categories (auto-reject in scoring, –50 pts each):
- Internal workflow / back-office tools (16 past rejections, 0 exceptions)
- Accounting / bookkeeping / CFO automation (5 past rejections)

Exclude in queries where helpful: `-"internal workflow" -"back-office" -"finance department" -"CFO tools" -bookkeeping -accounting -"AP automation"`.

**"Third-party agent" qualifier (NEW v4.1).** The 2026-04-27 radar identified that bare "agentic AI compliance" / "agent governance" queries continue surfacing internal-workflow false positives that the Hard Filter then rejects — wasted scan budget. Where a query targets governance, compliance, safety, or orchestration, append at least one of: `"third-party agent"`, `"external agent"`, `"agent marketplace"`, `"BYOA" OR "bring-your-own-agent"`, or `"agent ecosystem"`. The lema-ai 1★ note ("solutions that mitigate risk of third party agents") is the canonical phrasing.

**Agents, not AI-models.** Agent-level governance, identity, and safety — not model interpretability, red-teaming, or jailbreak-resistance. Mindgard 2★ note ("AI, not agents") is the precedent.

**Quality filter:** Skip roundups/listicles. Append `-list -roundup -"top 10" -"best AI"`. Prefer primary sources: press releases, funding announcements, founder interviews, IETF / Linux Foundation standards drafts.

**Composability preference:** Favour startups exposing agent-callable APIs / MCP servers over dashboard-only products. Search signal: "MCP server", "agent-callable API", "agent SDK".

**Accelerator-batch sweeps (PROMOTED v4.1).** The 2026-04-27 radar found that S2–S11 specialist agents are surfacing from YC W26 batches (Cohesion → S1, Astor → S-Front) rather than from web-search vocabulary. The structural-supply-side-desert framing was wrong: it's a *search-strategy* problem, not a market-supply problem. Run batch sweeps against YC W26, YC S26, EF, Antler, Techstars, and Mouro/Santander InnoVentures every scan — not just rotation.

---

## Scan Priority Matrix

| Priority | Categories | Rationale |
|---|---|---|
| 🔴 EVERY SCAN | Pre-Trade Compliance, Audit & Explainability, AI Safety & Guardrails, Specialist Agent Desert (S2, S3, S5, S6, S7, S8, S9, S10, S11), **Accelerator-Batch Sweeps (NEW)** | Genuine market gaps + accelerator batches confirmed primary sourcing path for S-categories |
| 🟡 HIGH | Dispute Resolution & Agent Liability, Agent Monetisation (vocabulary calibrated post-Paygentic), Personal Financial Agent (S-Front, **incl. Regulated-Retail-Front-Door sub-track**), Research & Signal Intelligence (European replacements) | Partially addressed; looking for better fits / European equivalents / new sub-shape |
| 🟠 MEDIUM | Agent Orchestration, Agent Authentication & Identity (KYA), Agent Payment Rails | Strong candidates in place (Jentic, Vouched, Nava); Agent Orchestration 1/10 hit rate after Hard Filter — keep medium, don't elevate |
| ⚪ MONITOR | Tax Optimisation (Alomana 5★), S1 incumbents (AgentSmyth/Serafis/Kimpton) | Confirmed match — watch for follow-on entries |

---

## Highest signal-to-noise sources (hit directly every scan)

Use `site:` operators — historically the strongest producers of thesis-aligned signals.

- `site:fintech.global agentic AI 2026`
- `site:techcrunch.com "AI agent" fintech seed 2026`
- `site:eu-startups.com "AI agent" OR "agentic" fintech 2026`
- `site:sifted.eu "agentic AI" OR "AI agent" fintech 2026`
- `site:siliconangle.com agentic AI financial services 2026`
- `site:pymnts.com "AI agent" startup 2026`
- `site:fintechfutures.com "agentic AI" 2026`
- `site:businesswire.com "AI agent" fintech raises 2026`
- `site:prnewswire.com "agentic AI" financial services 2026`
- `site:finovate.com "AI agent" 2026`
- `site:altfi.com "AI agent" OR "agentic" 2026`
- `site:tech.eu "agentic" OR "AI agent" fintech 2026`

---

# 🔴 EVERY SCAN — Genuine Market Gaps

## Pre-Trade Compliance Agent *(Gap #8 — market gap, Hadrius closest signal)*

Thesis anchor: "Agent checks suitability, concentration limits, restricted lists before every trade." Nobody is building this finserv-native. Hadrius (YC, SEC/FINRA native) is the reference.

**v4.1 update:** Tightened with "third-party agent" / "external agent" qualifiers — the 2026-04-27 radar found bare compliance queries returned zero relevant signals while surfacing internal-workflow noise.

- `"pre-trade compliance" "third-party agent" startup seed 2026`
- `"suitability check" "external agent" broker-dealer startup 2026`
- `"agent pre-trade" compliance SEC OR FINRA seed 2026`
- `"restricted list" "third-party agent" compliance startup 2026`
- `"best execution" "agent marketplace" startup seed 2026`
- `"investment adviser compliance" "external agent" 2026`
- `"concentration limits" AI agent portfolio seed 2026`
- `"agentic compliance" broker-dealer "third-party" 2026`
- `"SEC compliance" "agent ecosystem" seed OR "Series A" 2026 -"KYC" -"AML"`
- `"FINRA compliance" "agent marketplace" startup 2026`
- `"MiFID II" "third-party agent" compliance startup 2026`
- `site:ycombinator.com "pre-trade" OR "investment adviser" AI`

**Reference companies to track:** Hadrius, ValidMind (adjacent).
**Negative filters:** `-"KYC-only" -"AML-only" -"tax filing" -"internal audit" -"internal workflow"`.

---

## Audit & Explainability *(Gap #10 — first entry: Alinia, vote pending)*

Thesis anchor: "'Why did the agent do this?' — auditable, regulator-ready explanation." Alinia (Barcelona, Mouro/Santander) is the first entry. Need more, especially EU-based.

**v4.1 update:** Added "third-party" / "external agent" qualifiers; removed bare "agent observability" (was producing devops noise).

- `"AI agent audit trail" "third-party agent" financial services seed 2026`
- `"agent explainability" fintech OR broker-dealer startup 2026`
- `"regulator-ready AI" "external agent" audit seed 2026`
- `"AI agent reasoning log" compliance startup 2026`
- `"agentic decision audit" seed OR pre-seed 2026`
- `"AI decision explainability" investment OR brokerage 2026`
- `"backend compliance controller" AI agent seed 2026`
- `"AI provenance" financial services startup 2026`
- `"LLM audit" regulated industry "third-party" startup 2026`
- `"agent observability" finserv OR brokerage seed 2026`
- `"EU AI Act" explainability "agent marketplace" startup 2026`
- `site:eu-startups.com "AI audit" OR "explainability" fintech`

**Reference companies to track:** Alinia, ValidMind.
**Negative filters:** `-"model interpretability" -"ML explainability research" -"DevOps observability"` (want agent-level, not model-level or infra-level).

---

## AI Safety & Guardrails *(Gap #2 — REOPENED, priority re-elevated)*

Thesis anchor: Overmind archived 2026-04-14 ("They aren't interested in participating"). Manifold (5★) and Kai (4★) provide partial coverage. Actively scouting for agent-specific (not model-level) safety companies, European preferred.

**v4.1 update:** Strict "third-party / external agent" qualifier on every query. Generic "AI safety" queries removed (commoditised post-acquisition wave; produced 0 thesis-aligned candidates in 2026-04-20 → 2026-04-27 window).

- `"AI agent guardrails" "third-party agent" financial services seed 2026`
- `"agent supervision" "external agent" fintech OR broker startup 2026`
- `"agent behaviour monitoring" "agent marketplace" seed 2026`
- `"agent boundary enforcement" "third-party" startup 2026`
- `"runtime agent safety" fintech "third-party agent" seed 2026`
- `"autonomous agent risk" "external agent" controls startup 2026`
- `"agent deviation detection" "agent ecosystem" seed 2026`
- `"multi-agent security" finserv "BYOA" startup seed 2026`
- `"agent guardrail" European OR UK "third-party" seed 2026`
- `"AI control plane" "external agent" finserv seed 2026`
- `site:sifted.eu "AI safety" OR "agent governance" fintech`
- `"agentic runtime" governance "third-party agent" seed OR "Series A" 2026`

**Reference companies to track:** Manifold, Kai, Keycard, Resistant AI, Trent AI.
**Negative filters:** `-"model red-teaming" -"jailbreak" -"LLM alignment research" -"AI interpretability" -"internal workflow"` (Mindgard/Goodfire lesson: AI ≠ agents).

---

## Specialist Agent Desert — S2–S11 *(Web-search-exhausted, ACCELERATOR-BATCH-DISCOVERABLE)*

**v4.1 reframing.** The 2026-04-27 radar revised the hypothesis: S2–S11 are not a structural market-supply gap, they're a *search-strategy* gap. Both new specialist agents detected this week (Cohesion → S1, Astor → S-Front) came from YC W26 batches, not Crunchbase / web search. Web-search queries here are kept as a low-yield rotation; the **Accelerator-Batch Sweeps section below is now the primary path** for these categories.

### S2 — Portfolio Construction & Risk Agent

**v4.2 update:** "regulated securities" / "broker-dealer" qualifiers added — cycle 8 PM observed crypto-only candidates (Sequence Markets, Fere AI) polluting S-category accelerator searches when the regulated-brokerage qualifier is missing.

- `"AI portfolio construction" "third-party agent" "regulated securities" startup seed 2026`
- `"factor exposure agent" investment broker-dealer startup 2026`
- `"portfolio risk AI agent" "external" "regulated" seed OR pre-seed 2026`
- `"correlation modelling agent" finserv broker-dealer startup 2026`
- `"position sizing AI" Kelly OR risk-budget regulated seed 2026`
- `"scenario analysis" AI agent portfolio "regulated securities" startup 2026`
- `"rebalancing agent" "agent-callable" investment seed 2026 -crypto -DeFi`
- `"agent-callable portfolio API" "broker-dealer" OR "RIA" startup 2026`
- `site:arxiv.org "agent portfolio construction" 2026`

### S3 — Trade Structuring Agent

- `"trade structuring" AI agent startup seed 2026`
- `"options vs equity" AI agent advisor 2026`
- `"account selection" AI agent taxable OR IRA 2026`
- `"pairs trade AI agent" seed OR pre-seed 2026`
- `"asset location" AI agent startup 2026`
- `"thesis expression" AI agent trading seed 2026`

### S5 — Options & Derivatives Strategy Agent

**v4.2 update:** "broker-dealer" / "regulated" qualifiers + crypto/DeFi exclusions to keep search focused on listed-options markets, not crypto perp/options DEX startups.

- `"options strategy AI agent" "broker-dealer" startup seed 2026 -crypto -DeFi`
- `"covered call AI agent" retail "regulated" startup 2026 -crypto`
- `"volatility trading AI" agent listed-options seed OR pre-seed 2026 -crypto`
- `"protective put AI advisor" startup 2026 -crypto -DeFi`
- `"listed derivatives AI agent" retail seed 2026`
- `"options agent API" "broker-dealer" OR "regulated" startup 2026 -DeFi`

### S6 — Execution Agent

**v4.2 update (HIGHEST PRIORITY refinement this cycle).** Cycle 8 PM identified that S6 was the most polluted category — Sequence Markets ($20M YC W26) and Fere AI both surfaced as false positives because the queries didn't disambiguate "execution" between regulated-securities markets and crypto/DeFi. The category now requires "broker-dealer" / "regulated securities" / "equity" / "listed" qualifiers AND a category-specific crypto-exclusion negative filter.

- `"smart order routing" AI agent "broker-dealer" startup seed 2026 -crypto -DeFi -tokenized`
- `"VWAP TWAP AI agent" retail "regulated securities" startup 2026 -crypto`
- `"algorithmic execution" AI agent equity OR "listed securities" seed OR pre-seed 2026 -crypto -DeFi`
- `"dark pool routing" AI agent retail startup 2026 -"digital assets" -crypto`
- `"implementation shortfall" AI agent equity OR fixed-income startup 2026 -crypto`
- `"execution algo AI" retail investor "broker-dealer" startup 2026 -crypto -DeFi`
- `"agentic execution" "regulated securities" OR "Reg NMS" startup seed 2026`
- `"NBBO" OR "best execution" AI agent startup 2026 -crypto`

**Reference companies to track:** None confirmed — category remains a desert in regulated-securities scope.
**Strict negative filters (S6 specifically):** `-crypto -DeFi -tokenized -"digital assets" -"perpetual swap" -"DEX aggregator" -"on-chain"`. Any candidate whose primary venue is a crypto exchange or DEX is auto-skip — the thesis serves a regulated brokerage; crypto-only execution doesn't translate.

### S7 — Position Monitoring & Thesis Tracking Agent

- `"thesis tracking" AI agent investment startup seed 2026`
- `"stop loss AI agent" automated startup 2026`
- `"catalyst monitoring" AI agent startup seed 2026`
- `"position monitoring" AI agent fintech 2026`
- `"earnings surprise AI agent" seed 2026`
- `"thesis milestone" AI agent startup 2026`

### S8 — Financial Planning Agent

- `"AI financial planning agent" goals-based seed 2026`
- `"retirement projection AI agent" startup 2026`
- `"life event modelling" AI agent wealth seed 2026`
- `"estate planning AI agent" seed OR pre-seed 2026`
- `"income generation AI" retiree agent 2026`
- `"agent-callable planning API" startup 2026`

### S9 — Behavioural Coaching Agent

- `"behavioural coaching AI" investor startup seed 2026`
- `"panic prevention" AI agent investment 2026`
- `"behavioural finance AI agent" seed OR pre-seed 2026`
- `"drawdown coaching" AI agent startup 2026`
- `"investor psychology AI agent" startup 2026`

### S10 — Post-Trade Analysis & Learning Agent

- `"post-trade analysis AI agent" startup seed 2026`
- `"trade journal AI" attribution startup 2026`
- `"attribution analysis AI agent" seed 2026`
- `"trade review AI agent" startup 2026`
- `"maximum adverse excursion AI" startup 2026`

### S11 — (Reserved — post-trade + learning overlaps)

Covered by S10 queries; monitor for dedicated learning-loop startups.

**Negative filters for S-category queries:** `-"hedge fund internal" -"portfolio manager tool" -"trader productivity" -"back-office" -"CIO dashboard"`.

---

## Accelerator-Batch Sweeps *(PROMOTED v4.1 — primary path for S2–S11 + S-Front)*

The 2026-04-27 radar identified that web-search exhaustion is being broken by accelerator batches. Run these every scan, not on rotation. Both new entries this week (Cohesion, Astor) came from YC W26 batch surveillance. Treat each accelerator's most recent batch as a list to walk — pull ALL fintech / AI-agent / investing companies, score each against thesis.

**YC (highest yield this cycle — five batch-sourced detections in two cycles: Cohesion, Astor, Sponge, Maven, Orthogonal pending follow-on):**
- `site:ycombinator.com/companies "W26" investment OR trading OR brokerage`
- `site:ycombinator.com/companies "W26" "AI agent" OR "agentic" wealth`
- `site:ycombinator.com/companies "W26" portfolio OR options OR execution -crypto`
- `site:ycombinator.com/companies "W26" "tax" OR "compliance" agent`
- `site:ycombinator.com/companies "W26" "Sponge" OR "Maven" OR "Orthogonal"  *(follow-on cards pending — score next cycle)*`
- `site:ycombinator.com/companies "S26" investment OR trading agent`
- `site:ycombinator.com/companies "S25" "AI agent" finance`
- `"YC W26" launch finance OR investing OR brokerage agent`
- `"YC S26" launch finance OR investing AI agent`

**Entrepreneur First (London/Berlin/Paris):**
- `"Entrepreneur First" "AI agent" finance OR investing 2026`
- `"EF cohort" 2026 fintech OR investing agent`
- `site:joinef.com fintech OR investing AI agent 2026`

**Antler:**
- `"Antler" "AI agent" finance OR investing seed 2026`
- `"Antler London" OR "Antler Amsterdam" fintech AI agent 2026`
- `site:antler.co fintech AI agent 2026`

**Techstars / Plug and Play / Tenity:**
- `"Techstars" agentic AI fintech 2026 cohort`
- `"Plug and Play" AI agent investing 2026`
- `"Tenity" Zurich AI agent fintech 2026`

**Strategic-VC batch trackers (Mouro, Ribbit, Anthemis, Speedinvest):**
- `"Mouro Capital" OR "Santander InnoVentures" AI agent 2026 portfolio`
- `"Ribbit Capital" agent seed 2026 portfolio`
- `"Anthemis" AI agent fintech seed 2026 portfolio`
- `"Speedinvest" AI agent finserv 2026 portfolio`
- `"LocalGlobe" OR "Phoenix Court" AI agent fintech 2026`

**Action note:** When walking these, score each candidate against the 11-specialist + 7-platform taxonomy explicitly. Specialist agents are typically 2–4 person teams, pre-seed to seed, tend NOT to use the term "agentic" in batch summaries — search by domain (portfolio, options, execution, tax, planning, behavioural) instead.

**v4.2 calibration note:** Cycle 8 PM observed two false positives from accelerator searches (Sequence Markets, Fere AI) — both crypto-only execution. When scoring batch candidates against S2/S5/S6, apply the regulated-securities qualifier as a hard pre-filter: if the candidate's primary venue is a crypto exchange or DEX, auto-skip. The thesis serves a regulated brokerage; crypto-only execution doesn't translate.

---

# 🟡 HIGH — Partial Coverage, Actively Looking

## Dispute Resolution & Agent Liability *(Gap #11 — Mount 5★, Klaimee 4★; still only 2 pipeline companies)*

Thesis anchor: "When an agent trade goes wrong, who pays?" AIUC ($15M seed, Nat Friedman) predicts $500B market by 2030. Armilla (Lloyds-backed) tracked.

- `"AI agent insurance" startup seed OR "Series A" 2026`
- `"agent liability" coverage startup 2026`
- `"agent certification" insurance startup seed 2026`
- `"AI accountability framework" startup 2026`
- `"autonomous agent underwriting" insurance startup 2026`
- `"agentic dispute resolution" finserv seed 2026`
- `"AI economy insurance" startup 2026`
- `"AI agent bond" OR "AI agent warranty" startup 2026`
- `"Lloyd's AI" OR "Lloyd's agent" insurance startup 2026`
- `"agent audit certification" startup 2026`
- `site:sifted.eu "AI insurance" OR "agent liability" 2026`
- `"AIUC-1" OR "agent insurance standard" 2026`

**Reference companies to track:** Mount, Klaimee, Armilla, AIUC.

**v4.2 note:** Cycle 8 PM flagged AIUC and Armilla for pipeline cards next cycle — the YC W26 cluster signal in 2026-04-27 competitive intelligence suggests the agent-insurance category is now mature enough that reference companies warrant scoring, especially if either has European entry plans. Add European-presence query: `"Armilla Europe" OR "AIUC Europe" OR "AIUC London" OR "Armilla London" 2026`.

---

## Agent Monetisation *(Gap #13 — Paid AI + Paygentic; vocabulary calibrated)*

Thesis anchor: "How each specialist agent gets paid — results-based billing, revenue sharing."

**v4.2 update:** Paygentic ($2M pre-seed, MiddleGame Ventures, ex-Sulu founder) added 2026-04-27 PM via the v4.1 "agent commerce billing finserv" query — the query line **was the actual sourcing path**. Vocabulary confirmed productive; keep unchanged. Gap moves from "lone entry" to "underrepresented but vocabulary calibrated." Watch for vote on Paygentic to confirm score-to-upvote conversion.

- `"results-based billing" AI agent startup seed 2026`
- `"service-as-software" billing platform seed 2026`
- `"AI agent monetisation" fintech startup 2026`
- `"usage-based billing" AI agent seed OR pre-seed 2026`
- `"agent revenue sharing" marketplace startup 2026`
- `"AI agent payments" subscription startup 2026`
- `"outcome-based pricing" AI agent seed 2026`
- `"agent pricing API" startup 2026`
- `"agent commerce billing" finserv startup 2026`
- `"MiddleGame Ventures" OR "ex-Sulu" agent billing seed 2026`

**Reference companies to track:** Paid AI, Paygentic.
**Negative filters:** `-"SaaS billing" -"enterprise subscription management"` (want agent-specific, not generic).

---

## Personal Financial Agent *(S-Front — Partial coverage; new sub-track v4.1)*

Thesis anchor: The front door. Mistral (infrastructure only), Finley AI (FCA spotlight), Arta Finance (US+Singapore) are partials. No European startup building an agent-callable personal financial agent specifically — regulation makes it hard to ship fast.

**v4.1 sub-track: "Regulated-Retail Front-Door."** Astor (YC W26, 2026-04-27 detection) combines retail consumer + RIA registration + brokerage integration in a single shape — distinct from institutional-facing personal agents (Mistral) and from BYOA platforms (eToro). If a second Astor-shaped company surfaces, formally split this as its own sub-category. Until then, track via dedicated queries below.

**Core S-Front queries:**

- `"AI personal finance agent" pre-seed OR seed 2026`
- `"agentic wealth assistant" Europe OR UK seed 2026`
- `"conversational investing agent" startup launch 2026`
- `"AI wealth concierge" seed OR pre-seed Europe 2026`
- `"personal financial agent" API OR MCP 2026`
- `"AI financial copilot" consumer seed 2026`
- `"agentic retail investing" startup seed 2026`
- `"robo-advisor agent" natural language seed 2026`
- `site:eu-startups.com personal finance AI agent 2026`
- `"FCA sandbox" AI agent wealth 2026`

**Regulated-Retail Front-Door sub-track (v4.1):**

- `"RIA AI agent" retail consumer startup seed 2026`
- `"registered investment adviser" AI agent retail seed 2026`
- `"brokerage integration" AI agent consumer launch 2026`
- `"retail wealth agent" RIA OR fiduciary startup 2026`
- `"consumer RIA agent" seed OR pre-seed 2026`
- `"Schwab" OR "Alpaca" OR "DriveWealth" AI agent integration 2026`

**Reference companies to track:** Finley AI, Arta Finance, Mistral (infrastructure), Astor (YC W26 — sub-track archetype).
**Negative filters:** `-"internal adviser tool" -"RIA back-office" -"wealth manager CRM"`.

---

## Research & Signal Intelligence — European Replacements *(S1 — validated US trio, need EU equivalents)*

Thesis anchor: Serafis note — "Can we also find things like this in the EU?" AgentSmyth, Serafis, Kimpton AI all US-based. Cohesion (YC W26, 2026-04-27 detection) is also US — search must continue to bias EU.

- `"alternative data AI agent" fintech seed Europe 2026`
- `"AI investment research agent" Europe OR UK seed 2026`
- `"agentic equity research" startup seed Europe 2026`
- `"earnings analysis AI agent" European startup 2026`
- `"sentiment analysis agent" finserv Europe seed 2026`
- `"institutional flow AI agent" European fintech 2026`
- `"AI research platform" agent-callable Europe seed 2026`
- `"catalyst identification AI" investment Europe 2026`
- `"macro AI agent" research startup Europe 2026`
- `site:sifted.eu AI investment research agent 2026`
- `site:eu-startups.com alternative data agent 2026`

**Reference companies to track:** AgentSmyth, Serafis, Kimpton AI, Cohesion (US — for comparison).
**Negative filters:** `-"internal research tool" -"analyst productivity"`.

---

# 🟠 MEDIUM — Existing Candidates, Better Options May Exist

## Agent Orchestration *(Gap #1 — Jentic POC partner, BG Score 95)*

**v4.1 note:** 23 detected, 1/10 hit rate after Hard Filter. The 2026-04-27 radar recommended keeping at 🟠 (not elevating); accounting/RPA negative filters are doing the right work. Tightened with "third-party agent" qualifier to suppress remaining noise.

- `"multi-agent orchestration" "third-party agent" financial services seed 2026`
- `"agentic workflow" "external agent" regulated industry seed 2026`
- `"governed agent execution" "agent marketplace" startup 2026`
- `"agent routing" finserv "third-party" startup seed 2026`
- `"agentic sandbox" compliance "BYOA" startup 2026`
- `"Arazzo workflow" OR "OpenAPI agent" startup 2026`
- `"agent credential management" finserv seed 2026`
- `site:ycombinator.com agent orchestration financial`

**Reference companies to track:** Jentic (POC), Pluvo, Gradient Labs.
**Negative filters:** `-"accounting automation" -"AP automation" -"RPA" -"ETL" -"internal workflow"` (accounting stacks 2★ lesson; Hard Filter applies).

---

## Agent Authentication & Identity (KYA) *(Gap #4 — Vouched 5★ KYA platform)*

**v4.1 note:** Okta for AI Agents goes GA April 30 — see Competitive Intelligence track. Doesn't displace Vouched (finserv-specific) but compresses the window for non-finserv-specific agent-auth startups. Bias queries toward finserv specificity.

- `"Know Your Agent" KYA "financial services" startup seed 2026`
- `"agent identity" finserv OR brokerage startup seed 2026`
- `"MCP identity" OR "agent credentialing" finserv startup 2026`
- `"non-human identity" financial services seed 2026`
- `"agent authentication" regulated industry "third-party" 2026`
- `"agent permissions" finserv seed OR "Series A" 2026`
- `"IETF aiagent-auth" startup 2026`
- `"agent IAM" finserv seed 2026`

**Reference companies to track:** Vouched, Keycard, Runlayer, Aembit, Astrix Security.
**Negative filters:** `-"KYC-only" -"AML-only" -"customer onboarding"` (KYC/AML ≠ KYA; KYC/AML has its own –15 pt soft factor).

---

## Agent Payment Rails *(Gap #11b — Nava 5★, Natural 4★)*

- `"agent escrow" payment startup seed 2026`
- `"agent dispute resolution" payment startup 2026`
- `"agent intent verification" payment seed 2026`
- `"agentic commerce middleware" fintech seed 2026`
- `"AP2" OR "ATXP" OR "TAP" agent payment startup 2026`
- `"agent-initiated payment" regulated startup 2026`
- `"Visa Intelligent Commerce" OR "Mastercard Agent Pay" startup 2026`
- `"machine payments protocol" startup seed 2026`

**Reference companies to track:** Nava, Natural, Ralio, Lemrock, Crossmint, Circuit & Chisel.
**Negative filters:** `-"crypto-only" -"wallet management"` (unless agent-first).

---

# ⚪ MONITOR — Strong Candidates Already Identified

## Tax Optimisation Agent *(Gap #7 — Alomana 5★ CONFIRMED match)*

Thesis anchor: Portfolio-integrated TLH, gain deferral, asset location. **NOT tax filing, NOT e-filing, NOT CPA firm tools** (Juno 2★, TaxDown 2★ precedents — Hard Filter applies).

- `"tax-loss harvesting" AI agent portfolio seed 2026`
- `"tax-aware rebalancing" AI startup seed 2026`
- `"asset location AI agent" wealth seed 2026`
- `"wash sale prevention" AI agent startup 2026`
- `"capital gains optimisation" AI agent seed 2026`
- `"lot-level tax" AI agent portfolio startup 2026`
- `"embedded tax API" wealth management seed 2026`
- `"Roth conversion AI" agent advisor seed 2026`
- `"after-tax portfolio returns" AI agent startup 2026`

**Reference companies to track:** Alomana.
**Strict negative filters:** `-"tax filing" -"tax return" -"e-filing" -"tax compliance" -"CPA tools" -"accounting"`. Any result matching these is auto-reject.

---

# Cross-Cutting Tracks

## Regulatory & Standards Signals

- `FCA "AI agent" OR "agentic AI" 2026`
- `SEC "AI agent" OR "investment adviser AI" 2026`
- `FINRA "agentic" OR "AI agent" broker 2026`
- `"EU AI Act" financial services agent 2026`
- `"DORA" AI agent resilience 2026`
- `"MAS" AI agent fintech Singapore 2026`
- `"NIST" AI agent identity standard 2026`
- `"IETF aiagent-auth" 2026`
- `"MCP" Linux Foundation 2026`
- `"AIUC-1" OR "agent insurance standard" 2026`

## Competitive Intelligence (thesis compression signals)

**v4.1 additions:** Okta for AI Agents (April 30 GA), eToro App Store ongoing coverage.

- `"Okta for AI Agents" launch OR GA 2026`
- `"Okta" "Identity for AI Agents" enterprise 2026`
- `eToro "App Store" OR "Agent Portfolios" developer 2026`
- `Public.com "Agentic Brokerage" agents 2026`
- `"JPMorgan" agent compliance platform 2026`
- `"Visa Intelligent Commerce" launch 2026`
- `"Mastercard Agent Pay" bank launch 2026`
- `"Santander" AI agent launch 2026`
- `"OpenAI" acquires fintech OR finserv 2026`
- `"Arta Finance" OR "Wealth as a Service" partner bank 2026`
- `"Ping Identity" "Identity for AI" enterprise 2026`

## YC / Accelerator / Early-Stage Circuit

*See "Accelerator-Batch Sweeps" above for the primary, every-scan version. Queries below are kept as legacy rotation.*

- `site:ycombinator.com/companies "AI agent" fintech`
- `"YC W26" OR "Y Combinator W26" finance agent`
- `"YC S26" OR "Y Combinator S26" AI agent finance`
- `"a16z" OR "Andreessen Horowitz" AI agent fintech seed 2026`
- `"Mouro Capital" OR "Santander InnoVentures" AI agent 2026`
- `"Ribbit Capital" agent seed 2026`
- `"LocalGlobe" OR "Accel Europe" AI agent fintech 2026`

## Research Signals (arxiv / SSRN)

- `"multi-agent finance" OR "agentic investing" site:arxiv.org 2026`
- `"agent safety financial" site:arxiv.org 2026`
- `"pre-trade compliance agent" site:arxiv.org 2026`
- `"agent explainability finance" site:arxiv.org 2026`
- `"AI agents wealth management" site:scholar.google.com 2026`
- `"agentic portfolio construction" site:ssrn.com 2026`

## Geography Rotation (European-first)

- `site:sifted.eu "AI agent" OR "agentic" fintech 2026`
- `site:eu-startups.com "AI agent" fintech 2026`
- `site:tech.eu "agentic" fintech seed 2026`
- `"agentic AI" seed London OR UK fintech 2026`
- `"agentic AI" Berlin OR Frankfurt fintech 2026`
- `"agentic AI" Paris OR "Station F" fintech 2026`
- `"agentic AI" Dublin OR Amsterdam fintech 2026`
- `"agentic AI" Barcelona OR Madrid fintech 2026`
- `"agentic AI" Zurich OR Stockholm fintech 2026`

---

## 🔵 Research Team Vocabulary *(new v4.4 — Caroline / Matt / Molly mandate)*

The Research team's mandate per thesis v2.4: *forward-looking knowledge function — custom GPT-driven research into consumer behaviour across financial / physical / mental health, market analysis, fundamental research, problem-statement validation.* Reference Research-team companies in the pipeline: **Mantic** (forecasting, multi-team Studio+Research), **Sooth Labs** (predictive geopolitical/market events, multi-team), **Nayya** (health × wealth advisory), **Octen** (agent-callable signal infrastructure), **AgentSmyth / Serafis / Kimpton AI** (Research & Signal Intelligence — 5★ vote-validated trio), **Aether DataHub** (market data), **Cohesion / Trata** (S1 — institutional research).

The first Phase 0 audit after this update should compare Research team count cycle-on-cycle. Target: ≥15 Research-tagged cards within 3 cycles.

### Consumer-Behaviour AI × Health × Wealth × Mental
*The financial × physical × mental health intersection Studio's research request to Research is asking about. Nayya is the production benchmark.*

- `"consumer behaviour" AI agent "financial wellness" startup 2026`
- `"health and wealth" agentic AI advisor benefits platform 2026 funding`
- `"mental health" AND "financial planning" AI agent startup seed Series A 2026`
- `"agentic AI" employee benefits health wealth Series A B 2026`
- `"financial × health" OR "health and wealth" AI consumer research startup 2026`
- `consumer-research API "financial services" agent-callable 2026 seed`

### Alternative Data for Life Events
*Predictive analytics that anticipate marriage / childbirth / job change / retirement / inheritance and trigger downstream financial workflows.*

- `"life event" prediction AI agent "financial planning" startup 2026 seed`
- `"alternative data" "life events" finserv agent API 2026`
- `predictive analytics "financial planning" "12-18 months" AI startup 2026 funding`
- `"household-level" AI agent advisor predictive life events 2026`
- `"event prediction" finserv AI startup Felicis OR Bessemer OR a16z 2026`

### Forecasting / Nostradamus / JTBD-for-agents
*Mantic + Sooth Labs are the seed signals. Look for the next entrants on geopolitical / market / regulatory event prediction.*

- `AI forecasting platform geopolitical market events "financial services" startup 2026`
- `"superforecasting" OR "Metaculus" AI startup finserv 2026 funding`
- `predictive AI multimodal "geopolitical" OR "macro" finserv enterprise 2026 seed`
- `"problem statement validation" JTBD AI agent platform startup 2026 funding`
- `"jobs to be done" AI research agent platform 2026 seed Series A`
- `"Four Fits" OR "four-fits" methodology AI research validation platform 2026`

### Frontier-Research Vendors for Regulated Environments
*Research's collaboration partners on Mistral / Anthropic / academic spinouts. Look for governance-aware research vendors not just LLM wrappers.*

- `"regulated environment" AI research partner Mistral OR Anthropic finserv 2026`
- `frontier model "financial services" research collaboration startup 2026`
- `"academic spinout" AI agent finserv 2026 seed`
- `"AI for finance" research lab "human review" deterministic startup 2026`
- `"compliance-native" AI research platform startup 2026 funding seed`

### Agent-Callable Signal Infrastructure
*Octen-class infrastructure exposed as APIs that Research agents can call. The 'agent exposure' preference (kimpton-ai 5★, serafis 5★) — composability over UI.*

- `"agent-callable" search API "financial data" startup 2026 seed`
- `"MCP server" finserv research data startup 2026 funding`
- `"agent skills" market data research API finserv 2026 seed Series A`
- `"composable" research agent infrastructure "financial services" startup 2026`

### Competitive Intelligence — Research-team compression signals

- Watch Wealth.com Ester Intelligence — 100K+ estate documents/year is a research-data moat.
- Watch Savvy Wealth's "Relationship Monitor" agent — when it ships, it's a Research-team competitive read on consumer signal capture.
- Watch Nayya's SuperAgent GA in 2026 — first integrated health-wealth agentic interface.
- Watch Sooth Labs' API exposure — if predictions become callable, Research adoption follows.

### Investable Everything — Product Inversion & Access *(new v4.5 — Caroline Federal mandate, gap #8 in skill)*
*Reimagining derivatives, options, structured products, and prediction-market mechanics for retail. Reference archetypes: Kalshi, Polymarket, eToro copy-trading, Robinhood options UX, Versus, Noise.*

- `prediction market retail platform startup 2026 funding seed Series A`
- `event contract CFTC retail derivatives platform startup 2026 seed`
- `"democratising" OR "democratizing" derivatives options structured products startup 2026`
- `retail-friendly options UX simplified startup seed Series A 2026`
- `"prediction market mechanics" traditional finance startup 2026 funding`
- `binary outcome derivatives retail platform startup 2026 seed`
- `"event-based investing" OR "outcome-based investing" platform startup 2026`

### Investable Everything — Tokenization & Fractionalization *(new v4.5 — Caroline Federal mandate, gap #9 in skill)*
*Compliant rights-clear infrastructure for previously illiquid/inaccessible assets. Full-stack coverage (issuance → custody → secondary market) scores highest. Reference archetypes: Securitize, Republic, Rally, TYTL, Polymath, Tokeny, InvestaX, BlockInvest.*

- `tokenization platform "real estate" OR "private equity" compliant infrastructure startup 2026 seed Series A`
- `fractional equity blockchain residential commercial property startup 2026 funding`
- `"security token" issuance custody secondary market platform startup 2026 seed`
- `tokenized "private credit" OR "private equity" retail access startup 2026 funding`
- `"music royalty" OR "litigation finance" OR "life settlement" fractional retail platform 2026 seed`
- `"IP rights" tokenization platform retail investor startup 2026 funding`
- `MAS-licensed OR FCA-regulated tokenization platform startup 2026 funding seed`

### Wealth-Generation Reinvention *(new v4.5 — full Research v2.6 mandate)*
*Anything that meaningfully reimagines wealth management or investing — leaps forward from the usual, not incremental advisor tools. Reference archetypes: Astor, Era, Autonomous (AI-native RIA), Asseta AI (family office OS), Marloo / Avantos (AI-native advisor platforms), Range / Savvy Wealth (broad-mandate platforms), Seeds (personalised investing), Willow Wealth / Moonfare / OurCrowd (retail private markets).*

- `AI-native RIA bypass advisor startup 2026 seed Series A`
- `"family office as a service" OR "FOaaS" democratised mass affluent platform startup 2026 funding`
- `"family office operating system" platform startup 2026 seed Series A`
- `"reimagining" OR "rebuilding" wealth management investing startup 2026 funding`
- `holistic wealth platform CPA attorney advisor stack startup 2026 seed`
- `"behavioural coaching" OR "behavioral wealth" AI advisor platform startup 2026 funding`
- `private markets retail access alternatives platform startup 2026 seed Series A`
- `"AI replaces" OR "AI replaces advisor" wealth management platform startup 2026 seed`
- `accredited-investor-only platform alternative assets startup 2026 funding`

---

## 🟣 Investor-Portfolio Walks *(new v4.5 structural improvement)*

When a sweep surfaces a high-conviction card, walk the lead investor's portfolio for adjacent plays that didn't make the press cycle. The fund's other 2025–26 fintech bets are usually thesis-aligned by definition. Run these as the FINAL step of every cycle, after primary vocabulary has produced cards.

- `Paradigm portfolio fintech 2025 2026 seed Series A` — Paradigm has surfaced Noise, Kalshi exposure, Tempo (with Stripe) — likely more.
- `Bessemer portfolio fintech 2025 2026 fintech seed Series A` — Avantos surfaced; the BVP "doubling down" framing implies a thesis-anchored cluster.
- `"ICONIQ Growth" portfolio AI fintech 2025 2026 seed Series A` — Nayya surfaced; ICONIQ's "wealth tech" focus is structural.
- `"Felicis Ventures" portfolio AI fintech 2025 2026 seed Series A` — Sooth Labs + Nayya both have Felicis exposure.
- `"Nyca Partners" OR "Motive Partners" portfolio fintech 2025 2026 seed Series A` — Asseta AI surfaced; Nyca + Motive only co-invest on category-defining plays.
- `"Blackbird Ventures" portfolio fintech 2025 2026 seed Series A` — Marloo's lead; Australian/Commonwealth fintech beachhead.
- `"Square Peg" portfolio fintech 2025 2026 seed Series A` — Octen's lead.
- `"Mistral Venture Partners" portfolio fintech 2025 2026 seed` — Trusty's investor; LLM-aware finserv plays.
- `"Mouro Capital" OR "Anthemis" OR "MiddleGame Ventures" portfolio fintech 2025 2026 seed Series A` — finserv-specialist VCs whose portfolios reliably yield BG-fit candidates.
- `"YC W26" OR "YC S26" fintech AI agent batch 2026` — accelerator-batch sweep (this is already in the regular rotation but flagged here as part of the same structural pattern).

---

## 🟢 Reverse-Archetype Queries *(new v4.5 structural improvement)*

The bene-gesserit-card skill enumerates reference signals for each gap. When a category produces too few candidates, run "alternatives to X" / "competitors to X" against those reference signals — the second-place runners-up often don't get the same press cycle but match the thesis as well.

- `"alternatives to Kalshi" OR "Polymarket competitors" prediction market startup 2026`
- `"Robinhood for" OR "alternatives to Robinhood" retail trading startup 2026 seed Series A`
- `"competitors to Securitize" OR "alternatives to Republic" tokenization platform startup 2026`
- `"alternatives to Compound" OR "Long Angle competitors" wealth management platform 2026`
- `"alternatives to Vise" OR "Wealth.com competitors" AI wealth platform 2026 seed Series A`
- `"alternatives to Mantic" OR "Sooth Labs competitors" predictive AI startup 2026`
- `"Astor competitors" OR "alternatives to Era" AI RIA startup 2026 seed`
- `"alternatives to Trusty" estate planning AI startup 2026 funding`
- `"Wealthfront for X" OR "Betterment for X" segment-specific wealth platform 2026 seed`

Cadence: run reverse-archetype queries at the end of any sweep where a primary category produced fewer than 3 candidates. Compare results against the dedup list before scoring.

---

## 🟡 Negative-Space Audit Protocol *(new v4.5 structural improvement)*

After every sweep, before publishing, run a 5-minute negative-space audit. The goal is to identify which sub-categories the cycle's vocabulary missed entirely so the next run targets the empty cells.

**Audit checklist:**

1. **Per-team count delta vs target.** Research target: ≥15 cards within 3 cycles of v4.5 (currently 21 ✓). Studio target: ≥30 within 3 cycles (currently 27, on track). Greens: maintain 60+ (currently 63 ✓).
2. **Per-sub-area count.** For each Research sub-area below, count cards. Empty/single-card sub-areas trigger a targeted re-query in the next cycle.
   - Consumer behaviour × health × wealth × mental: Nayya (1) — under-represented; needs second card.
   - Alternative data for life events: 0 — empty cell.
   - Forecasting / Nostradamus / JTBD: Mantic, Sooth Labs (2) ✓.
   - Frontier-research vendors for regulated environments: 0 — empty cell.
   - Agent-callable signal infrastructure: Octen, AgentSmyth, Serafis, Kimpton AI (4) ✓.
   - Product Inversion: Versus, Noise (2) ✓.
   - Tokenization & Fractionalization: TYTL (1) — under-represented; needs second card.
   - Wealth-Generation Reinvention: Astor, Era, Autonomous, Seeds, Willow Wealth, Asseta AI, Marloo (7) ✓.
3. **Per-archetype check.** For each reference archetype (Kalshi, Polymarket, Robinhood options, Securitize, Republic, Rally, Compound, Long Angle, Range, Wealth.com, Vise), confirm at least one BG-pipeline analogue exists. Empty archetypes trigger a reverse-archetype query in the next cycle.
4. **Investor-portfolio coverage.** Each high-conviction lead investor should produce at least one card per cycle they appear in. Run a portfolio walk for any fund that surfaced as a lead and didn't yield a second adjacent card.
5. **Geography rotation.** European-preferred bias is hardcoded — but check whether US bias has crept in via single-cycle press surfacing. If EU share <40% of new cards, rotate next cycle through European-only queries.
6. **Time-window granularity.** If a sweep produces stale results (more than ~3 months old), re-run with explicit `Q1 2026` / `April 2026` / `last 30 days` qualifiers.

**Output of the audit:** a "Next-Cycle Targets" sub-section appended to the cycle's changelog entry, listing the 3–5 empty cells the next sweep must fill.

---

## Master Negative Filter (append globally where relevant)

```
-"internal workflow" -"back-office" -"finance department" -"CFO tools"
-bookkeeping -accounting -"AP automation" -"expense management"
-"tax filing" -"tax return" -"e-filing" -"tax compliance"
-"KYC-only" -"AML-only"
-"model interpretability" -"jailbreak" -"LLM alignment research"
-"DevOps observability" -"infra observability"
-list -roundup -"top 10" -"best AI"
-"Series B" -"Series C" -"Series D"
```

## S-Category Specific Negative Filter (append to S2 / S5 / S6 queries — v4.2)

```
-crypto -DeFi -tokenized -"digital assets" -"perpetual swap"
-"DEX aggregator" -"on-chain" -"Web3" -"crypto execution"
```

Cycle 8 PM precedent: Sequence Markets ($20M YC W26) and Fere AI both surfaced as false positives in S6 Execution and S2/S5 because the regulated-securities qualifier was missing. Apply to S2 (Portfolio Construction), S5 (Options & Derivatives), S6 (Execution). S-Front, S1, S3, S4, S7, S8, S9, S10 do not require this filter — they don't have a crypto-overlap noise pattern.

---

## Change Log

- **v4.6 (2026-04-29)** — Operational notes updated for Supabase → Turso migration. Header rewritten to point at the Turso endpoint (bg-votes-dpowert2.aws-eu-west-1.turso.io). Earlier change-log entries (v4.1, v4.2, v4.3) flagged "Supabase bg_thesis_feedback query unavailable" — that root cause is now resolved (Supabase free-tier auto-pause; resolved by migration). The next full cycle should re-process any votes cast since 2026-04-15 — the date the Supabase pipeline last produced fresh data. No vocabulary edits this revision.
- **v4.5 (2026-04-29)** — Two-part update. **Part 1: Vocabulary expansion.** Added three new sub-blocks under Research Team Vocabulary covering Caroline Federal's Investable Everything mandate (Product Inversion & Access; Tokenization & Fractionalization) and the v2.6 Wealth-Generation Reinvention vector (AI-native RIAs, family-office OS, retail private markets, novel asset-class access). Manual sweep this cycle added 7 Research-tagged cards (Versus, Noise, TYTL, Seeds, Willow Wealth, Asseta AI, Marloo) plus dual-tagged Astor and Era as Studio+Research; Research went from 8 → 21 cards. **Part 2: Structural improvements.** Three new structural blocks added beyond category vocabulary: (i) 🟣 **Investor-Portfolio Walks** — query templates for high-conviction lead investors (Paradigm, Bessemer, ICONIQ, Felicis, Nyca, Motive, Blackbird, Square Peg, Mistral Venture Partners, Mouro, Anthemis, MiddleGame, YC) so each strong card surfaces adjacent plays; (ii) 🟢 **Reverse-Archetype Queries** — "alternatives to X" / "competitors to X" lookups against bene-gesserit-card skill reference signals (Kalshi, Polymarket, Robinhood, Securitize, Republic, Rally, Compound, Long Angle, Vise, Wealth.com, Mantic, Sooth Labs, Astor, Era, Trusty); (iii) 🟡 **Negative-Space Audit Protocol** — codified end-of-cycle checklist with per-team count targets, per-sub-area card counts, per-archetype coverage check, investor-portfolio coverage check, geography rotation, time-window granularity. Output: a "Next-Cycle Targets" sub-section in each cycle's changelog. The v4.5 audit identifies 4 empty/under-represented cells the next cycle must address: alternative data for life events (0), frontier-research vendors for regulated environments (0), Tokenization (1, needs second), Consumer behaviour × health × wealth × mental (1, needs second). Cycle 9 was the last full carry-forward; cycle 10 should run against v4.5.
- **v4.4 (2026-04-29)** — Three-team architecture (thesis v2.4) absorbed. New 🔵 Research Team Vocabulary block added covering five sub-areas: consumer-behaviour AI × health × wealth × mental, alternative data for life events, forecasting / Nostradamus / JTBD-for-agents, frontier-research vendors for regulated environments, agent-callable signal infrastructure. Reference companies enumerated (Mantic, Sooth Labs, Nayya, Octen, AgentSmyth/Serafis/Kimpton AI, Aether DataHub, Cohesion/Trata). Target set: Research-tagged cards ≥15 within 3 cycles. Trigger for the change: 2026-04-29 thesis-update review surfaced Research underrepresentation (8 cards vs Studio 20 / Greens 63) — manual Studio sweep this same cycle added 9 cards (Trusty, Wealth.com, Avantos, Mantic, Savvy Wealth, Vise, Nayya, Sooth Labs, Octen) bringing totals to Studio 27 / Research 12 / Greens 63. Studio vocabulary already covered organically through Personal Agent / Tax Optimisation / front-door queries — no new Studio-specific block needed. Greens vocabulary already covered through compliance / KYA / orchestration / payment rails.
- **v4.3 (2026-04-29)** — Cycle 9 carry-forward. Phase 0 Coverage Audit confirms v4.2 vocabulary remains tuned to the persistent gap pattern: 7 specialist-agent blind spots (S3, S5, S6, S7, S8, S9, S10) at 0 pipeline companies, plus S2 (Portfolio Construction & Risk) still at 1. No vocabulary edits — accelerator-batch sweeps remain primary path, S6 crypto-exclusion filter remains in force. Thesis bumped to v2.3 with new challenge signal #8 (vote-pipeline bottleneck — Supabase unreachable for 5 consecutive cycles, preference model frozen at 61 votes since 2026-04-15) — but this is an infrastructure issue, not a search-strategy issue, so no search-terms changes required. Supabase `bg_thesis_feedback` query still unavailable (fifth consecutive cycle).
- **v4.2 (2026-04-28)** — Targeted refinement against cycle 8 PM (2026-04-27) findings. Three refinements, no architectural changes. (1) **S6 Execution decrypto-fied** — added `-crypto -DeFi -tokenized -"digital assets" -"perpetual swap" -"DEX aggregator" -"on-chain"` as category-specific negative filter and `"broker-dealer"` / `"regulated securities"` / `"listed"` / `"equity"` qualifiers to every S6 query. Cycle 8 precedent: Sequence Markets ($20M YC W26) and Fere AI false positives — both crypto-only execution. (2) **Regulated-securities qualifier added to S2 (Portfolio Construction) and S5 (Options & Derivatives)** — same crypto-noise pattern at lower severity; preventive. New **S-Category Specific Negative Filter** block added below master filter, scoped to S2/S5/S6. (3) **Agent Monetisation upgraded** from "lone entry" framing to "vocabulary calibrated post-Paygentic" — Paygentic ($2M pre-seed, MiddleGame Ventures, ex-Sulu) sourced 2026-04-27 PM via the v4.1 "agent commerce billing finserv" query, confirming v4.1 vocabulary is producing hits; added to reference companies; one query line added for MiddleGame/Sulu founder-network angle. (4) **YC W26 follow-on cluster (Sponge, Maven, Orthogonal)** added to accelerator-batch sweeps — flagged for next-cycle scoring per cycle 8 PM recommendation #4. (5) **AIUC + Armilla European-presence query** added to Dispute Resolution — cycle 8 PM flagged both for card scoring next cycle if European entry plans surface. (6) Accelerator-batch action note expanded with calibration warning: when scoring against S2/S5/S6, auto-skip if primary venue is crypto exchange/DEX. Supabase `bg_thesis_feedback` query unavailable (connection timeout — third consecutive cycle); no new search-terms-specific feedback to incorporate. Thesis v2.2 unchanged since 2026-04-17.
- **v4.1 (2026-04-27)** — Refresh against thesis v2.2 + 2026-04-27 weekly radar findings. (1) Strict "third-party agent" / "external agent" / "agent marketplace" / "BYOA" qualifiers added across Pre-Trade Compliance, Audit & Explainability, AI Safety, Orchestration, KYA — addresses internal-workflow false-positive noise the Hard Filter was wasting cycles rejecting. (2) **Accelerator-Batch Sweeps** promoted from rotation to first-class 🔴 EVERY SCAN section in response to YC W26 detection signal (Cohesion → S1, Astor → S-Front) — the Specialist Agent Desert is reframed from structural-supply problem to search-strategy problem. (3) **Regulated-Retail Front-Door** sub-track added under Personal Financial Agent capturing the Astor archetype (retail consumer + RIA + brokerage integration). (4) Okta for AI Agents (April 30 GA) and Ping Identity added to Competitive Intelligence as compression signals for KYA. (5) Generic "AI safety" queries removed (commoditised post-acquisition wave; produced zero thesis-aligned candidates 2026-04-20 → 2026-04-27). (6) "agent observability" tightened with finserv qualifier to suppress DevOps noise; `-"DevOps observability"` added to master negative filter. (7) Cohesion added to S1 reference companies. Supabase `bg_thesis_feedback` query unavailable (connection timeout); no new search-terms-specific feedback to incorporate.
- v4.0 (2026-04-17) — Full rebuild against thesis v2.2. New taxonomy: 11 specialist agent categories (S-Front + S1–S10) + 7 platform infrastructure categories. Specialist Agent Desert (S2, S3, S5, S6, S7, S8, S9, S10) elevated to 🔴 EVERY SCAN with alt-sourcing queries. AI Safety re-elevated (Overmind archived). Audit & Explainability priority raised after Alinia entry. Pre-Trade Compliance remains highest-gap. European-equivalent queries added for S1 (Serafis feedback). Composability / agent-callable API signal prioritised. Master negative filter consolidated from hard-filter and soft-factor learnings (62 vote corpus).
- v3.2 (2026-04-15) — AI Safety re-elevated to HIGH after Overmind decline.
- v3.0–v3.1 (2026-04-14/15) — Expanded to 21 categories, specialist-agent categories added.
- v2 (2026-04-14) — External/third-party qualifiers added, stage qualifiers added, orchestration negative filters.
- v1 (2026-03-10) — Initial 6-gap search terms.
