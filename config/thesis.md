# Bene Gesserit — Living Investment Thesis
*Last updated: 2026-05-07 | Version: 3.1 — Cycle 14. Three-team hypotheses uniformly structured (time horizon → numbered focus areas → reference signals → out-of-scope). Search architecture redesigned and protocol-fixed — Phase 4 of the radar now follows `task-prompts/radar-phase-4-blind-spot-protocol.md` for blind-spot cells (accelerator-batch sweeps + reverse-archetype + GitHub MCP, not vocabulary search). Schema upgraded with `audience_archetype` per gap and a top-level `audience_archetypes` block. All v2.9 hard gates remain in force.*

---

## Core thesis

The new apps are agents. AI agents will become the primary interface for financial discovery, planning, and execution — the way mobile apps reshaped customer interaction last cycle. The companies building these agents will move faster than any single institution. That isn't a threat. It's the opportunity.

The strategic move is to become the **app store for financial agents**: a trusted, regulated walled garden where external agents operate on behalf of customers, connecting to your markets, execution infrastructure, and regulatory standing. You own the marketplace, the review process, the safety net, and the rails. Startups build the agents that sit inside the garden and deliver the customer experience.

By leaning into an ecosystem of agents instead of building one internally, the platform always has access to the latest and best of them. When the next breakthrough in tax optimisation or portfolio construction arrives, it arrives inside the garden — not as a competitor. Obsolescence stops being a risk because the platform evolves as fast as the ecosystem does.

What this is **not**: internal workflow optimisation, back-office efficiency, or tooling that improves life for the finance department. This is the platform that every financial agent needs — not the agents themselves.

---

## Why now

The agentic brokerage already shipped. In the last two weeks of March 2026, eToro launched Agent Portfolios (bring-your-own-agent, $200 minimum, scoped API key, MCP integration in build) and Public.com launched "the world's first Agentic Brokerage" (natural-language strategy definition, $400M+ raised, Series 7 passed). Neither has a governance layer, pre-trade compliance, suitability checks, audit trails, or agent identity management. The infrastructure beneath them — the part that makes them safe enough for a regulated brokerage — doesn't exist yet. That's the gap.

Agentic commerce went live ahead of agentic investment. Visa Intelligent Commerce produced hundreds of live agent-initiated transactions by December 2025. Santander + Mastercard completed Europe's first live AI agent payment on March 2, 2026 — the first within a regulated banking framework. Santander + Visa shipped LatAm's first agent-powered payments across five markets on March 12. Visa Agentic Ready signed Barclays, Commerzbank, HSBC UK, Revolut, Santander. Citi, US Bank, DBS, Westpac, Axis Bank, RBL Bank are all trialling Mastercard Agent Pay or Visa VIC. Commerce-to-investment is the obvious next step.

eToro App Store launched April 15 — a third-party developer marketplace with APIs, MCP server, and revenue sharing. Dual signal: the thesis is correct, and the timeline is compressing. Infrastructure startups need to establish themselves before eToro defines the de facto standard.

European startups build compliance, governance, and audit by default — a product of operating under GDPR, DORA, MiFID II, and the incoming EU AI Act. They are naturally suited as technology partners for a regulated brokerage. US startups tend to bolt compliance on later. The European supply chain is the better fit for the platform.

---

## Where the competition is wrong

| Approach | Examples | What it gets wrong |
|---|---|---|
| Build internally | JPMorgan ($20B tech budget, 450+ AI use cases), Goldman (Claude for compliance), Morgan Stanley (OpenAI partnership), Citi (182,000 employees with AI tools) | Builds for internal efficiency, not for an ecosystem. The next breakthrough agent arrives at a startup, not inside the bank. |
| Partner with one frontier model | Santander + OpenAI (30,000 employees on ChatGPT Enterprise), HSBC + Mistral | Faster than building, but tied to one provider's roadmap. Frontier model providers don't build brokerage infrastructure. |
| Ship consumer agentic products without governance | eToro Agent Portfolios, Public.com Agentic Brokerage, Arta Finance ($92M) | Live, but missing the compliance, identity, and audit infrastructure a regulated brokerage requires. |

Nobody is building the platform. The regulated agent marketplace — where external agents are certified, governed, and executed safely — is unoccupied.

---

## The three teams

Bene Gesserit doesn't scout the platform in the abstract. It scouts on behalf of three operating teams, each with a distinct mandate, time horizon, and definition of "good." Every signal in the pipeline now carries an implicit team tag — Research, Studio, Greens, or cross-team. The same gap map applies; the priority of each gap shifts depending on which team needs it next.

| Team | Mandate | Time horizon |
|---|---|---|
| Research | Forward-looking knowledge function. Three sub-areas: novel takes on old investment mechanisms, forward-looking signals on where investing is going, turning previously-uninvestable things into investable surfaces. | 12–24 months |
| Studio | The 0-to-1 venture team. Prototypes new ventures inside emerging tech (voice, agents, predictive frameworks). Validates through three gates before graduating. | 6–18 months |
| The Greens | Execution and infrastructure. Owns the regulated rails — tax APIs, account structure, custody, brokerage operations. Where graduated Studio ventures land for production. | 0–12 months |

---

### Research team hypothesis

Time horizon: 12–24 months ahead.

Research is looking for three things. Each one is forward-leaning and each one is about novelty — not incremental advisor tooling, not operational improvements, not workflow upgrades.

**1. Novel takes on old investment mechanisms.** Established investment products — options, derivatives, structured products, prediction-market mechanics — reimagined for retail or for a buyer who's been locked out by capital, complexity, or geography. The bet isn't building another Robinhood. It's finding the company that takes a real institutional product and unwraps it for a wider audience in a way that's clearer, cheaper, or faster. The "inversion" has to genuinely simplify access; rebranding the same product doesn't count.
*Reference signals:* Kalshi and Polymarket on prediction markets. Robinhood's options UX on retail derivatives. eToro's copy-trading on social investing.

**2. Forward-looking signals on where investing is going.** Things that hint at how investing will actually pan out over the next decade — not the next quarter. New asset classes. New buyer behaviours. New advisor structures. AI-native RIAs that suggest the human-advisor layer collapses into software (Astor, Era, Autonomous). AI-native advisor platforms (Marloo). Behavioural-coaching wealth platforms. Frontier-model and academic partners doing regulated-environment research that's hard to do anywhere else.
*The test:* if this exists at scale in 10 years, does the picture of who manages money and how look meaningfully different?

**3. Turning previously-uninvestable things into investable surfaces.** Tokenization and fractionalization as compliant infrastructure for assets that have historically been off-limits to retail — real estate, private equity, collectibles, IP rights, royalties, litigation finance, life settlements, music IP.
*Reference signals:* Securitize, Republic, Rally, TYTL, Willow Wealth, Moonfare. The strongest candidates have full-stack coverage — issuance, custody, and secondary market — with a rights model clear enough to survive regulatory scrutiny. Issuance-only plays with a fuzzy rights model score lower.

**A note on the Versus revision.** Versus was originally one of the canonical 5★ retail-prediction-market exemplars. The May 2026 follow-up found it's actually a Kalshi product, not an independent seed-stage startup. The category (mass-market retail prediction app combining social, cultural, and financial forecasting) is still validated. The specific company is no longer a usable archetype reference. That triggered an entity-level rule in the broader thesis: verify a candidate is an independent seed/Series-A startup before treating it as a canonical archetype. Parent affiliation by an established company disqualifies the archetype claim, even when the underlying category is correct.

---

### Studio team hypothesis

Time horizon: 6–18 months ahead.

Studio is the 0-to-1 venture team. It prototypes new ventures inside emerging technology — voice, agents, predictive intelligence — before they're ready for the platform. Studio doesn't sell. It builds reference architectures, validates problem statements with academic and frontier-model partners, runs PoCs with Labs and EIRs, and graduates ventures to the Greens once three gates are cleared.

Three focus projects for 2026.

**1. Voice AI through estate planning.** A constrained voice agent that helps a customer onboard — turning a decision tree into voice, explicitly *not* advice. The fundamental questions are about voice itself: can it be personalised, what kind of voice fits a regulated environment, what does the voice-artist research look like. The internal voice prototype from Labs is the starting point. Potential extension into the research component for the internal estate-planning initiative's voice implementation.
*Reference signals:* Mistral and Anthropic on voice solutions in regulated environments. The internal estate-planning initiative as the venue and EIRs as the collaborators.

**2. Nostradamus — predictive agent framework.** An agent framework for predictive intelligence across health, wealth, and physical domains. The work is to map what agent structures actually exist and how they can be integrated usefully. The "JTBD for agents" question — *what is the job an agent is being hired to do* — is the spine.
*Reference signals:* Mantic on AI-based future prediction. The academic research partner running a Four-Fits / PoC project for problem-statement validation.

**3. Intelligent tax agent.** US financial products are complex (direct indexing as the cleanest case — investing in individual top constituents so investment losses can offset capital gains). Tax-loss harvesting is not a per-position problem; it requires looking holistically across the client's full account picture, and tax varies state by state. The hypothesis is a frontier-fintech intelligence layer — *"the accountant in your pocket"* — sitting on top of direct indexing and the broader portfolio, with state-by-state tax-harvesting logic running on top of the Greens' tax APIs.
*Reference signals:* Alomana (autonomous portfolio rebalancing + TLH, 5★) on the agent side. The Greens' existing tax APIs on the rails side. *Tax filing alone is not interesting (juno 2★ remains the canonical anti-pattern); portfolio-integrated, real-time tax intelligence is.*

**Studio's search boundaries.** Internal-workflow tools are excluded by the global hard filter. Private markets are secondary — a separate analysis stream is being led elsewhere. Stage discipline matches the rest of BG: seed to early Series A.

**Three gates before a venture graduates.**
- *Ecosystem validation* — third-party demand and architectural fit beyond a single internal sponsor.
- *Internal board approval* — Strategy and Labs leadership commit to the build.
- *External market validation* — Strategic Investment Committee sign-off applying *venture-capital* principles, not corporate-assurance methods. The distinction matters: a corporate-assurance gate kills the venture; a VC gate sizes the bet.

---

### Greens team hypothesis

Time horizon: 0–12 months ahead.

The Greens own the regulated rails — tax APIs, account structure, custody, brokerage operations. This is where graduated Studio ventures land for production deployment, and where every external agent eventually has to clear if it wants to act on a customer account. The Greens are looking for compliance-native primitives that wrap existing regulated capabilities into agent-callable services. The criterion is two parts in one: the primitive has to be safe enough for a regulated brokerage to expose, *and* it has to be agent-callable so the marketplace can actually use it.

Three things that means in practice.

**1. Know-Your-Agent (KYA) and pre-trade compliance as agent-ready services.** KYC was for human customers; KYA is for non-human actors acting on customer accounts. Pre-trade compliance — suitability, concentration limits, restricted-list checks, best-ex obligations — has to run in milliseconds against agent-initiated orders, not as a quarterly review of a human advisor. This is the app store's admission system and its trade gate.
*Reference signals:* Vouched (5★, KYA platform). Hadrius (YC, SEC/FINRA-native pre-trade signal — the closest live candidate in a market that is otherwise empty).

**2. Audit, explainability, and dispute resolution as marketplace infrastructure.** Regulators and customers will both ask "why did the agent recommend this?" and "who pays when the agent gets it wrong?" Explainability has to be agent-aware (not model-level — the line between Mindgard 2★ and the agent-specific space matters). Dispute resolution requires an insurance / liability frame, not an internal-risk frame.
*Reference signals:* Alinia (Mouro/Santander seed, agent compliance controller — first entry in a previously-empty cell). Mount Insurance (5★ "reduces risk — excellent"). Klaimee (4★). Armilla (Lloyds-backed) and AIUC ($15M seed, Nat Friedman) round out the category.

**3. Tax APIs and execution rails wrapped as agent-callable.** The rails already exist. The work is to make them callable by external agents in the marketplace — the agent calls a tax API, a compliance API, and an execution API, and the customer sees one outcome. This is also where Studio's Intelligent Tax venture lands.
*Reference signals:* Alomana (5★) on the consumer-facing tax-agent side. Existing Greens tax APIs on the rails side.

**Greens' search boundaries.** Workflow tooling for the Greens' own internal operations is excluded by the same hard filter that applies elsewhere. Bookkeeping, accounting, and CFO tools are excluded by the second hard filter. The "wrong kind of risk" pattern — internal enterprise risk versus external-agent risk — is a –15 penalty (lema-ai 1★).

---

## Gap map

Every brokerage function — onboarding, compliance, trading, custody, reporting — was designed for human actors. In an agent-first world, each must be reimagined. KYC becomes KYA. Pre-trade compliance must run in milliseconds. Audit trails must capture agent reasoning. Dispute resolution must account for a new actor in the value chain.

| Layer | Traditional function | Agent-first reimagining | Status |
|---|---|---|---|
| Agent Orchestration | Workflow management | Route, schedule, govern multi-agent workflows | ✅ Jentic (POC partner, BG 95) |
| AI Safety & Guardrails | Risk controls | Supervise agent behaviour, enforce boundaries, prevent hallucination | ⚠️ Reopened — Overmind declined; Manifold 5★ + Kai 4★ remain |
| Pre-Trade Compliance | Suitability, best execution | Agent-initiated trades cleared in milliseconds | ❌ Market gap — Hadrius (YC) closest signal |
| Agent Authentication | KYC / identity | KYA — Know Your Agent. Permissions, secrets, identity delegation for non-human actors | ✅ Vouched (5★) |
| Audit & Explainability | Regulatory reporting | "Why did the agent do this?" — auditable, regulator-ready | ⚠️ First entry — Alinia (vote pending) |
| Dispute Resolution | Customer complaints | Insurance, certification, accountability for agent trades | ✅ Mount (5★), Klaimee (4★) |
| Tax Optimisation | Tax-lot accounting | Portfolio-integrated TLH, gain deferral, asset location as agent-callable services | ✅ Alomana (5★) |
| Research & Signal Intelligence | Idea generation | Alternative data, earnings, sentiment, flow as agent-callable intelligence | ✅ AgentSmyth, Serafis, Kimpton AI (3/3 at 5★) |
| Agent Monetisation | Fee schedules | Results-based billing for agent-mediated services | ✅ Paid AI (pattern signal) |
| Agent Payment Rails | Settlement | Escrow, intent verification, dispute resolution for agent transactions | ✅ Nava (5★), Natural (4★) |
| Trade Structuring (S3) | Account selection, options/equity | Asset location, after-tax routing, structure-aware advisor copilot | ❌ Empty until 2026-05-07 — seed pass surfaced Range, PortfolioPilot, Zeplyn |
| Options Strategy (S5) | Derivatives access | Wheel / covered-call / income strategies for retail | ❌ Empty until 2026-05-07 — seed pass surfaced QuantWheel, OptionsPilot, Jenova AI |
| Execution (S6) | Smart order routing | AI-native execution copilot, TCA agent | ❌ Empty until 2026-05-07 — seed pass surfaced big xyt, Tradefeedr, OneChronos |
| Position Monitoring (S7) | Watchlists | Thesis tracker, earnings prep, agent-callable research data | ❌ Empty until 2026-05-07 — seed pass surfaced Quartr, Brightwave (track), Daloopa |
| Post-Trade (S10) | Trade journals | AI-tagged trade journaling, attribution, coaching | ❌ Empty until 2026-05-07 — seed pass surfaced TraderSage, TradeLog Pro, JournalPlus |

---

## How the customer experience flows through specialist agents

A customer's personal agent says "I want more semiconductor exposure." The conversation cascades:

The **research agent** analyses the sector and surfaces candidates. The **portfolio agent** checks existing exposure and models the impact. The **sizing agent** recommends allocation against a risk budget. The **structuring agent** evaluates equity vs options vs pairs. The **tax agent** finds the optimal execution path across account types. The **compliance agent** gates the trade. The **execution agent** places the order. The **monitoring agent** watches the position. When conditions change, the conversation begins again.

The output is a better decision than any single agent — or most human advisors — could produce, because it draws on deep specialist knowledge at every stage. Every step is auditable, explainable, and governed inside the garden. The platform provides the garden; the startups provide the intelligence; the customer gets the combined brainpower of the entire ecosystem.

---

## What good looks like

- **Novelty (lead criterion since cycle 10).** Genuinely category-reinventing, a new asset class, a leap forward from the usual, or a novel mechanism. *Not* "an operating system for X", *not* "workflow management for X", *not* "AI-assisted SaaS for X". Cards that fail the novelty gate are 1–2★ no matter how strong the team or investors.
- **Entity-level archetype check (cycle 12).** Before treating any candidate as a canonical archetype, verify it is an independent seed/Series-A startup — not a product of an established company. Parent affiliation disqualifies the archetype claim even when the underlying category is correct (Versus/Kalshi as the precedent).
- **Stage:** Seed to Series A. Series B+ is "too late" (Wealth.com 1★, linx-security 2★, april 3★).
- **Geography:** Europe preferred, global acceptable.
- **External over internal.** Products that govern, secure, authenticate, or monitor *external* agents in a marketplace, not products that improve internal institutional operations. This is the decisive dimension — 0 of 16 internal-workflow companies received an upvote.
- **Agent-callable.** Even strong research / specialist intelligence companies score higher when the intelligence is exposed as an agent-callable API, not a dashboard. ("Better if it exposed an agent" appears in 2 of 3 S1 5★ votes.)
- **Compliance-native architecture.** Governance, explainability, audit baked in — not bolted on.

---

## Learned preferences (78 votes — 19 ★★★★★ · 9 ★★★★ · 8 ★★★ · 15 ★★ · 22 ★ · 5 0★ outreach markers)

Hard filters in force:
- *Internal workflow / back-office tools* — 16 companies at 1–2★, zero exceptions, –50 points and auto-archive.
- *Accounting / bookkeeping / CFO tools* — 5/5 at 1–2★, –50 and auto-archive.

Soft factors:
- Tax filing / compliance products: –20.
- KYC/AML-focused compliance: –15.
- Series B+ / over-funded: –15.
- AI-level (not agent-level) security: –15.
- Wrong-kind-of-risk (internal enterprise risk): –15.
- Non-finserv focus: –10.

Specialist agent bonuses (highest-priority scouting target):
- Research & Signal Intelligence (S1): +18, confirmed at 100% hit rate (3/3).
- Portfolio Construction (S2): +18.
- Trade Structuring (S3), Options (S5), Execution (S6): +15.
- Position Monitoring (S7): +12.
- Financial Planning (S8): +12.
- Behavioural Coaching (S9): +8.
- Post-Trade (S10): +8.

Cycle 12 patterns being tracked (not yet formal):
- *3★ + external-pivot intent → active-deal pathway.* Openbox-ai 3★ ("could be interesting if they would do the same for third-party agents") progressed to call held + NDA + demo booked. The 3★-with-pivot-hedge isn't always a polite rejection — sometimes it's an explicit invitation that the company will accept.
- *Followup requests as high-conviction signal.* All 12 followup-requested companies are at 4★ or 5★.

---

## Signals that challenge the thesis

1. **Incumbents claiming agent infrastructure.** Visa Intelligent Commerce Connect is building protocol-agnostic agent payment infrastructure. Mastercard Virtual C-Suite positions them as the agentic intelligence layer. If payment networks own the agent rails, the platform's value proposition narrows.
2. **Horizontal players moving into finserv.** Okta launched "Identity for AI Agents." AI safety companies are being acquired by platform incumbents (OpenAI/Promptfoo, SentinelOne/Prompt Security, Check Point/Lakera). The window for finserv-specific startups to establish themselves is compressing.
3. **Agents bypassing brokerages entirely.** If eToro and Public.com build their own execution infrastructure and succeed without traditional brokerage rails, the "agents must come through us" thesis weakens.
4. **AI-level safety commoditisation.** Goodfire ($1.25B unicorn) received 2★. The AI interpretability / model safety layer may be commoditised. The surviving opportunity is agent-specific security (Keycard 5★, Resistant-AI 5★).
5. **eToro App Store launched (April 15).** Third-party developer marketplace with APIs, MCP server, revenue sharing. Dual signal: powerful validation that the thesis is correct; timeline compression because infrastructure startups must establish themselves before eToro defines the de facto standard.
6. **Specialist agent desert — RESOLVED 2026-05-07 as a search-architecture problem.** S2–S10 produced zero seed-stage thesis-matches across multiple full-cycle web-search scans. Cycle 7 reframed this from supply-side desert to vocabulary-and-surface gap; cycle 13 confirmed the reframe with the v6.0 search redesign. The seed pass on five empty cells (S3, S5, S6, S7, S10) surfaced ~20 candidates in 30 minutes using customer-native vocabulary on audience-typed surfaces. The signal is downgraded from "structural challenge" to "operational backlog."

---

## Versioning

| v | Date | Trigger | Key change |
|---|---|---|---|
| 1.0 | 2026-03-10 | Initial setup | 6 gap categories, basic criteria. |
| 2.0 | 2026-04-14 | Full rebuild from FCAT Q2 research | 13 gaps, "app store for financial agents" thesis, European supply chain rationale. |
| 2.1 | 2026-04-14 | 45 new votes processed | Internal-workflow Hard Filter (16 companies rejected); stage filter; compliance gap resolved. |
| 2.2 | 2026-04-17 | Cycle 3 roll-up + eToro App Store launch | S1 validated at 100% hit rate; Dispute Resolution upgraded; Audit & Explainability gets first entry (Alinia); specialist-agent desert documented. |
| 2.3 | 2026-04-29 | Cycle 9 Coverage Audit + Supabase outage | Specialist-agent desert reframed as search-strategy gap; vote-pipeline bottleneck added as challenge signal. |
| 2.4 | 2026-04-29 | Studio Hypothesis ingested | Three-team architecture introduced; Studio v1.0 hypothesis added. |
| 2.6 | 2026-04-29 | Research mandate built out | Three Research sub-areas; archetype reference list. |
| 2.7 | 2026-04-29 | Supabase → Turso migration | Vote pipeline migrated; localStorage fallback; challenge signal #8 resolved. |
| 2.8 | 2026-04-29 | First cycle on live Turso vote stream | Novelty as lead criterion; Hard Filter extended to advisor-OS / family-office-OS / broker-OS. |
| 2.9 | 2026-05-06 | Cycle 12 — 5 new votes + 2 re-votes | Versus revision absorbed; entity-level archetype rule added; openbox-ai 3★ → active-deal pattern documented. |
| 3.0 | 2026-05-07 | Cycle 13 — structural cleanup | Research / Studio / Greens hypotheses uniformly structured. Why Now and Differentiation sections compressed. Search architecture redesigned in parallel (`search-strategy-redesign.md`, `empty-cells-seed-pass-2026-05-07.md`). Specialist-agent desert downgraded from structural challenge to operational backlog now that the v6.0 architecture is producing candidates. |
| 3.1 | 2026-05-07 | Cycle 14 — execution-gap fix | Closer reading of how-it-works + discovery log revealed the v3.0 vocabulary critique was second-order; the primary cause of the persistent S3/S5/S6/S7/S10 zeros was an execution gap inside Phase 4 of the radar — the documented cure (accelerator-batch + reverse-archetype + GitHub MCP) had been carried as `next_cycle_target=true` for 4 cycles without firing. Authored `task-prompts/radar-phase-4-blind-spot-protocol.md` to bind that cure into Phase 4 directly. Schema upgraded with `audience_archetype` field per S3/S5/S6/S7/S10 plus top-level `audience_archetypes` block (5 archetypes × surface menus). Founder vocabulary for the 5 empty cells rewritten with founder-native phrasing replacing the synthetic "[topic] AI startup" exact-match strings. `task-prompts/thesis-writing-conventions.md` and `task-prompts/generate-search-terms-v6-spec.md` shipped to lock the cleanup against future bloat-creep. |

*This is a living document. The strategy agent reviews it bi-weekly against new vote data, market signals, and pipeline changes.*
