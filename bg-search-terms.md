# Bene Gesserit — Search Terms

*Last updated: 2026-04-27 (cycle 8 confirms v4.1) | Revision: v4.1 — Refresh against thesis v2.2 + 2026-04-27 weekly radar findings. Tightens orchestration/compliance vocabulary against internal-workflow noise, elevates accelerator-batch sweeps in response to YC W26 detection signal (Cohesion → S1, Astor → S-Front), adds "regulated retail agent front-door" sub-track, adds Okta for AI Agents (April 30 GA) as compression signal. Cycle 8 (afternoon orchestrator run) carries v4.1 forward unchanged — focuses scan effort on the Phase 0 blind spots (S3, S5, S6, S7, S8, S9, S10, Agent Monetisation) using accelerator + YC W26 vocabulary.*

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
| 🟡 HIGH | Dispute Resolution & Agent Liability, Agent Monetisation, Personal Financial Agent (S-Front, **incl. Regulated-Retail-Front-Door sub-track**), Research & Signal Intelligence (European replacements) | Partially addressed; looking for better fits / European equivalents / new sub-shape |
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

- `"AI portfolio construction" "third-party agent" startup seed 2026`
- `"factor exposure agent" investment startup 2026`
- `"portfolio risk AI agent" "external" seed OR pre-seed 2026`
- `"correlation modelling agent" finserv startup 2026`
- `"position sizing AI" Kelly OR risk-budget seed 2026`
- `"scenario analysis" AI agent portfolio startup 2026`
- `"rebalancing agent" "agent-callable" investment seed 2026`
- `"agent-callable portfolio API" startup 2026`
- `site:arxiv.org "agent portfolio construction" 2026`

### S3 — Trade Structuring Agent

- `"trade structuring" AI agent startup seed 2026`
- `"options vs equity" AI agent advisor 2026`
- `"account selection" AI agent taxable OR IRA 2026`
- `"pairs trade AI agent" seed OR pre-seed 2026`
- `"asset location" AI agent startup 2026`
- `"thesis expression" AI agent trading seed 2026`

### S5 — Options & Derivatives Strategy Agent

- `"options strategy AI agent" startup seed 2026`
- `"covered call AI agent" retail startup 2026`
- `"volatility trading AI" agent seed OR pre-seed 2026`
- `"protective put AI advisor" startup 2026`
- `"derivatives AI agent" retail seed 2026`
- `"options agent API" startup 2026`

### S6 — Execution Agent

- `"smart order routing" AI agent startup seed 2026`
- `"VWAP TWAP AI agent" retail startup 2026`
- `"algorithmic execution" AI agent seed OR pre-seed 2026`
- `"dark pool routing" AI agent retail startup 2026`
- `"implementation shortfall" AI agent startup 2026`
- `"execution algo AI" retail investor startup 2026`

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

**YC (highest yield this cycle):**
- `site:ycombinator.com/companies "W26" investment OR trading OR brokerage`
- `site:ycombinator.com/companies "W26" "AI agent" OR "agentic" wealth`
- `site:ycombinator.com/companies "W26" portfolio OR options OR execution`
- `site:ycombinator.com/companies "W26" "tax" OR "compliance" agent`
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

---

## Agent Monetisation *(Gap #13 — Paid AI pattern signal only)*

Thesis anchor: "How each specialist agent gets paid — results-based billing, revenue sharing." Paid AI ($33M seed) is the lone entry.

- `"results-based billing" AI agent startup seed 2026`
- `"service-as-software" billing platform seed 2026`
- `"AI agent monetisation" fintech startup 2026`
- `"usage-based billing" AI agent seed OR pre-seed 2026`
- `"agent revenue sharing" marketplace startup 2026`
- `"AI agent payments" subscription startup 2026`
- `"outcome-based pricing" AI agent seed 2026`
- `"agent pricing API" startup 2026`
- `"agent commerce billing" finserv startup 2026`

**Reference companies to track:** Paid AI.
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

---

## Change Log

- **v4.1 (2026-04-27)** — Refresh against thesis v2.2 + 2026-04-27 weekly radar findings. (1) Strict "third-party agent" / "external agent" / "agent marketplace" / "BYOA" qualifiers added across Pre-Trade Compliance, Audit & Explainability, AI Safety, Orchestration, KYA — addresses internal-workflow false-positive noise the Hard Filter was wasting cycles rejecting. (2) **Accelerator-Batch Sweeps** promoted from rotation to first-class 🔴 EVERY SCAN section in response to YC W26 detection signal (Cohesion → S1, Astor → S-Front) — the Specialist Agent Desert is reframed from structural-supply problem to search-strategy problem. (3) **Regulated-Retail Front-Door** sub-track added under Personal Financial Agent capturing the Astor archetype (retail consumer + RIA + brokerage integration). (4) Okta for AI Agents (April 30 GA) and Ping Identity added to Competitive Intelligence as compression signals for KYA. (5) Generic "AI safety" queries removed (commoditised post-acquisition wave; produced zero thesis-aligned candidates 2026-04-20 → 2026-04-27). (6) "agent observability" tightened with finserv qualifier to suppress DevOps noise; `-"DevOps observability"` added to master negative filter. (7) Cohesion added to S1 reference companies. Supabase `bg_thesis_feedback` query unavailable (connection timeout); no new search-terms-specific feedback to incorporate.
- v4.0 (2026-04-17) — Full rebuild against thesis v2.2. New taxonomy: 11 specialist agent categories (S-Front + S1–S10) + 7 platform infrastructure categories. Specialist Agent Desert (S2, S3, S5, S6, S7, S8, S9, S10) elevated to 🔴 EVERY SCAN with alt-sourcing queries. AI Safety re-elevated (Overmind archived). Audit & Explainability priority raised after Alinia entry. Pre-Trade Compliance remains highest-gap. European-equivalent queries added for S1 (Serafis feedback). Composability / agent-callable API signal prioritised. Master negative filter consolidated from hard-filter and soft-factor learnings (62 vote corpus).
- v3.2 (2026-04-15) — AI Safety re-elevated to HIGH after Overmind decline.
- v3.0–v3.1 (2026-04-14/15) — Expanded to 21 categories, specialist-agent categories added.
- v2 (2026-04-14) — External/third-party qualifiers added, stage qualifiers added, orchestration negative filters.
- v1 (2026-03-10) — Initial 6-gap search terms.
