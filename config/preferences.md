## Learned Preferences

*Last updated: 2026-05-06 (cycle 12 — 5 new vote events + 2 re-votes absorbed; corpus 73 → 78) | Previous full rewrite: 2026-04-29 (cycle 10 — first run with live Turso vote stream) | Based on **78 live votes** (19 ★★★★★, 9 ★★★★, 8 ★★★, 15 ★★, 22 ★, plus 5 outreach-marker 0★ entries) — refreshed via `scripts/fetch-votes-from-turso.py` against the live `bg_votes` table. **CYCLE 12 SIGNAL: Versus revision.** The 2026-05-05 follow-up note ("the platform is built by a company called 'Kalshi' founded in 2019 with which seems to be a rather big team. I think there could be better candidates than these guys in general") preserves the 5★ on the **archetype** but disqualifies Versus the **company** as a canonical archetype reference. The 5★ trio (TYTL / Versus / Noise) is now a duo (TYTL / Noise). **NEW ENTITY-LEVEL RULE:** before treating any candidate as a canonical archetype, verify it is an independent seed/Series-A startup. Parent affiliation by an established company disqualifies the archetype claim even when the underlying category is correct. **CYCLE 12 SIGNAL: openbox-ai 3★→active-deal pathway.** A 3★ vote with the framing "could be interesting if they did this for third-party agents" can convert to active deal flow when the company engages on the external-agent pivot — Dave booked a demo, NDA going out. Validates "3★ + external-pivot intent" as a real funnel pattern, not just a rejection-with-hedge. **Cycle 10 HARD FILTER still in force:** "Operating system / workflow tool / SaaS-with-AI" → automatic 1★ rejection. Evidence — Avantos 1★, Marloo 1★, Asseta AI 1★, IMTC 2★, Addition Wealth 2★. The criterion isn't "what does it do" — it's "is it genuinely novel, a category reinvention, or a leap forward from the usual." **Wealth.com 1★** confirms the stage gate is hard. **5★ signals on novel category-reinvention plays:** TYTL (tokenized residential RE — Anchorage custody full-stack), Noise ("Love it" — attention market on Base). Pattern: novelty + retail democratisation + new asset surface + independent seed/Series-A = 5★. SaaS-with-AI = 1★. Established-parent product = archetype-level disqualification even at 5★.*

You can edit this file directly at any time to override or supplement the system's learned preferences. The morning/evening scan tasks read this file when scoring startups.

---

## Hard Filters

*A hard filter is applied when an attribute produces 0 upvotes across 5 or more appearances. Hard-filtered companies receive –50 points and are auto-archived.*

### 1. Internal Workflow / Back-Office Tools (–50 points, HARD FILTER)

- **Evidence:** 15+ companies at 1–2★ with explicit "internal workflow" rejection:
  - sycamore 1★ ("Looks like more internal workflow stuff")
  - obin-ai 1★ ("Internal pipelines. Again, not what I'm looking for")
  - nexus 1★ ("I'm not looking for internal agentic tools right now")
  - octonomy 1★ ("Again, not interested in internal workflows right now")
  - haast 1★ ("Internal workflow nonsense")
  - galdera 1★ ("Not interested in internal process improvements")
  - meridian-ai 1★ ("Again, this is improvements to internal workflows")
  - pace 1★ ("More back office - not interested. Also, this is a specialist back office tool")
  - appzen 1★ ("I'm not interested in internal workflow tools")
  - numos 1★ ("I'm not trying to improve life for the finance dept")
  - opencfo 1★ ("Not looking for in-house workflows or to make our CFO's life easier")
  - kaaj 1★ ("Not something I care about. Not interested in small business workflow")
  - basis 1★ ("raised too much and for accounting firms. This is not who we serve")
  - harvey 1★ ("Workflow for a law firm. Not what we're looking for")
  - interloom 2★ ("Internal workflows again")
  - lyzr 2★ ("Internal workflows again")
- **Upvotes from internal workflow tools:** 0 out of 16 appearances (0%)
- **Threshold met:** 5 appearances required; 16 observed with 0 upvotes → HARD FILTER
- **What it applies to:** Any company whose primary value proposition is improving internal processes, back-office efficiency, employee productivity, or in-house workflows — regardless of how sophisticated the AI is
- **Does NOT apply to:** Companies building infrastructure for EXTERNAL/third-party agent governance, even if their technology could be deployed inside an institution. The test is: "Does this product exist to serve third-party agents in a marketplace, or to make the institution's own staff more efficient?"
- **Dave's explicit framing:** "I'm looking for solutions that mitigate risk of third party agents" (lema-ai 1★). "Could be interesting if they would do the same for third party agents rather than internal workflows" (openbox-ai 3★). "This works as long as it also works for external agents" (ralio 5★).

### 2. Accounting / Bookkeeping / CFO Tools (–50 points, HARD FILTER)

- **Evidence:** stacks 2★, basis 1★, opencfo 1★, numos 1★, kaaj 1★ — all rejected
- **Upvotes from accounting/bookkeeping:** 0 out of 5 appearances (0%)
- **Threshold met:** HARD FILTER
- **What it applies to:** Bookkeeping automation, accounts payable/receivable, CFO tools, accounting workflow, expense management, small business finance operations

---

## Scouting Priority Rebalance (v3.0)

**EXPOSURE BIAS CORRECTION:** The strong positive signals below were derived from 53 votes, but those votes were cast against a pipeline dominated by platform infrastructure companies (security, auth, compliance) because that's what the search terms surfaced. The resulting preference weights over-index on platform infrastructure and under-represent specialist agent categories that were never scouted. This section corrects the imbalance.

**Specialist agent bonuses apply when a company builds deep domain intelligence that agents in the marketplace can draw on — the "apps" in the app store.** These are the companies that make the customer experience worth having. They are the PRIMARY scouting target as of v3.0.

### Specialist Agent Bonuses (NEW — highest scouting priority)

**Research & Signal Intelligence Agent** (+18 points, PRIORITY — CONFIRMED BY 3 UPVOTES)
- Alternative data for investment decisions, earnings analysis, sentiment analysis, institutional flow tracking, catalyst identification
- Must serve external agents or end investors, not internal research desks
- The "idea generation" layer — Stages 1, 2, 3 of the investment process
- **Vote confirmation (2026-04-15):** agentsmyth 5★ ("This is what we are looking for. Shame we didn't find them sooner."), serafis 5★ ("Looks really interesting for us. Can we also find things like this in the EU?"), kimpton-ai 5★ ("Definitely worth a look. Again, better if it exposed an agent."). 3/3 exposures upvoted = 100% hit rate. This is the FIRST validated specialist agent category.
- **"Agent exposure" preference:** Dave explicitly wants these companies to expose their intelligence as an agent/API ("better if it exposed an agent" appears in 2 of 3 votes). Dashboard-only research tools will score lower.

**Portfolio Construction & Risk Agent** (+18 points, PRIORITY)
- Concentration analysis, factor exposure modelling, correlation analysis, position sizing, scenario analysis, rebalancing triggers
- Must operate on live portfolios, not just backtest
- The "what does this trade do to the whole portfolio?" layer — Stages 4, 5, 11

**Trade Structuring & Account Optimisation Agent** (+15 points)
- Equity vs options vs pairs vs ETFs, cross-account selection (taxable/IRA/Roth/529)
- Structures the expression of a thesis for optimal risk/reward and tax efficiency
- Stage 6 of the investment process

**Options & Derivatives Strategy Agent** (+15 points)
- Covered calls, protective puts, spreads, collar strategies, volatility trading
- Deep specialist knowledge that retail investors can't access today
- Stages 6, 10

**Execution Quality Agent** (+15 points)
- Algorithm selection (VWAP, TWAP, POV), dark pool routing, smart order routing, slippage minimisation
- Professional-grade execution infrastructure for everyone
- Stage 9

**Position Monitoring & Thesis Tracking Agent** (+12 points)
- Continuous thesis monitoring, stop-loss/profit-target management, catalyst tracking, earnings surprise detection
- The "is my trade still working?" layer — Stage 10

**Financial Planning Agent** (+12 points)
- Goals-based planning, retirement projections, life event modelling, income generation strategy, estate considerations
- The long-term guardrail — Stage 14

**Behavioural Coaching Agent** (+8 points)
- Panic prevention, discipline enforcement, drawdown perspective, portfolio-consistent decision support
- Stage 13

**Post-Trade Analysis & Learning Agent** (+8 points)
- Trade journaling, attribution analysis, pattern recognition, strategy refinement
- The feedback loop — Stage 12

---

## Strong Positive Signals

### EXPOSURE BIAS NOTE
The bonuses below for platform infrastructure categories (Auth, Safety, Compliance) were derived from a pipeline heavily skewed toward those categories. They remain valid scoring signals but should NOT be interpreted as higher priority than the specialist agent bonuses above. The platform infrastructure side is largely addressed — strong candidates exist for Auth, Safety, and Orchestration. Continued scouting in those categories is maintenance, not primary.

### 1. Agent Authentication & Security — Trust Infrastructure Layer (+15 points, CAPPED — strong candidates exist)

- **Evidence:** t54-labs 5★ ("we need a verification layer for agents"), oasis-security 5★, keycard 5★ ("Spot on"), resistant-ai 5★ ("Novel and love the agentic security angle"), venice-security 4★, imper-ai 4★ ("good for fraud")
- **Vote rate in gap:** 6/6 upvotes (100%) — strongest signal in entire pipeline
- **What scores well:** Developer-facing agent identity standards, non-human identity (NHI) management at enterprise scale, agent identity + payment-layer integration, zero-trust per-tool-call authorisation, agentic security (protecting against agent-specific attack vectors)
- **Key attribute:** Infrastructure-layer positioning — the product is something other agents connect *to* for trust anchoring. Must be about AGENTS specifically, not AI model security generally (mindgard 2★ "AI, not agents").
- **Minimum score boost:** Apply when core product directly addresses "who authorises the agent" or "how do agents prove identity" or "how do we detect malicious agent behaviour"

### 2. AI Safety & Guardrails for Regulated Industries (+12 points, UNCAPPED — Overmind declined participation)

- **STATUS CHANGE (2026-04-15):** Overmind, previously the strongest candidate (5★, 100 BG Score), has been archived by Dave with the note "They aren't interested in participating." This reopens the AI Safety gap. The category's priority should be re-elevated from MEDIUM toward HIGH until a replacement candidate is identified.

- **Evidence:** overmind 5★, manifold 5★ ("Similar to Geordie"), complyance 5★ ("Would need to talk to them to understand whether they could help us with our use case"), kai 4★ ("good but a little early"), norm-ai 4★
- **Vote rate in gap:** 5/5 upvotes (100%)
- **What scores well:** Supervised agent operation in regulated contexts, security-intelligence pedigree teams, agentic behaviour monitoring and intervention, compliance-as-code for agent governance
- **Key attribute:** Must be AGENT-level safety (not model-level). Must target regulated industries. Must address third-party agent governance, not internal AI tool monitoring.
- **Critical distinction:** "AI safety" ≠ "agentic safety". Mindgard (2★, "AI, not agents") and armorcode (2★, "internal support, not breaking innovation") confirm the boundary. Goodfire (2★, $1.25B unicorn) — even massive AI interpretability companies miss if they're not agent-specific.

### 3. External/Third-Party Agent Governance (+15 points, NEW — strongest preference signal)

- **Evidence:** This is the DEFINING signal of the entire 53-vote corpus. Dave's words are ground truth:
  - ralio 5★ — "This works as long as it also works for external agents"
  - openbox-ai 3★ — "Could be interesting if they would do the same for third party agents rather than internal workflows"
  - lema-ai 1★ — "wrong kind of risk. I'm looking for solutions that mitigate risk of third party agents"
  - 16 internal workflow rejections (see Hard Filter #1)
- **What scores well:** Products that govern, secure, authenticate, or monitor EXTERNAL agents operating in a marketplace or ecosystem — not products that improve internal institutional operations
- **The test:** "Would this product be part of an app store for financial agents where third-party agents operate on behalf of customers?" If yes → thesis-aligned. If it's about making the institution's own processes better → out of scope.
- **This signal overrides all others.** A perfectly scored company in the right gap, at the right stage, with the right team still fails if its product is internal-facing.

### 4. Portfolio-Integrated Tax Intelligence (+12 points, CONFIRMED BY UPVOTE)

- **Evidence:** Explicitly stated in TaxDown 2★ and Juno 2★: "I'm not looking for tax compliance so much as tax efficiencies. Agents that can help investors with clever tax strategies." **Now confirmed by alomana 5★ (followup requested).**
- **Vote confirmation:** Alomana 5★ — autonomous portfolio rebalancing + tax-loss harvesting. This is the FIRST upvote in the Tax Optimisation gap. The internal/external uncertainty flagged last cycle is RESOLVED: portfolio-integrated tax intelligence IS thesis-aligned.
- **What scores well:** AI tool that operates on a live investment portfolio, surfaces tax-loss harvesting opportunities, optimises rebalancing sequences for after-tax returns — dynamically as portfolio evolves. Alomana's "autonomous portfolio rebalancing + TLH" is the archetype.
- **Key attribute:** Integration with portfolio management workflow (not a standalone filing or compliance interface). Agent-callable, not a dashboard.
- **Scoring note:** The +12 bonus now applies to Tax Optimisation companies matching this profile. Tax filing/compliance companies still receive –20 penalty.

### 5. Agent Payment Rails (+12 points, STRENGTHENED — second upvote confirms signal)

- **Evidence:** natural 4★ ("Could be interesting", followup requested), nava 5★ (followup requested)
- **Vote rate in gap:** 2/1 exposed (nava is the only pipeline entry; natural is mapped to Personal Agent but has payment rails characteristics). Both positive.
- **What scores well:** Infrastructure enabling agents to initiate, authorise, and settle financial transactions with proper governance. Escrow, intent verification, dispute resolution for agent transactions (nava).
- **Nava 5★ signal:** Dave gave maximum score + followup to an agent payment escrow/dispute company. This confirms payment rails as a genuine gap with high conviction. Combined with natural 4★, the payment infrastructure layer is now a validated thesis category.

### 6. Dispute Resolution & Agent Liability (+15 points, CONFIRMED BY 2 UPVOTES)

- **Evidence:** mount-insurance 5★ ("Reduces risk — excellent", followup requested), klaimee 4★ ("Not quite as good as Mount")
- **Vote rate in gap:** 2/2 upvotes (100%) — previously completely unsolved with 0 votes
- **What scores well:** Agent risk evaluation, ADR certifications (SOC 2 for AI agents), liability coverage when AI agents cause harm, agent insurance
- **Key signal:** Mount Insurance validated the "insurer for the agent economy" model. Dave's note "Reduces risk" confirms that risk-reduction infrastructure for the agent marketplace is highly thesis-aligned.
- **Scoring note:** This gap was previously flagged as "Completely Unsolved" in the thesis. It is now partially addressed but still has only 2 pipeline companies — continued scouting is HIGH priority.

### 7. Marketplace/Platform Concepts (+8 points)

- **Evidence:** bank-of-bots 4★ ("Love this concept. Looks like something I'd like to play with", followup requested)
- **What scores well:** Agent marketplace infrastructure, curated agent ecosystems, platforms where multiple agents can be discovered and deployed
- **Note:** Only 1 data point but strong enthusiasm signal

### 7. Compliance with Differentiation (+8 points, NEW — resolves dual failure mode)

- **Evidence:** complyance 5★ (differentiated compliance), norm-ai 4★ vs. sphinx 3★ ("not exactly groundbreaking"), bretton-ai 3★ (wrong sub-domain)
- **What scores well:** Compliance companies that are architecturally differentiated, novel in approach, and finserv-specific
- **What scores neutral/poorly:** Compliance companies that are generic in execution (sphinx 3★) or focused on KYC/AML (bretton-ai 3★, vivox-ai 2★)
- **The compliance scoring ladder:**
  - 5★: Differentiated + finserv-specific + novel approach (complyance)
  - 4★: Solid execution + regulated focus (norm-ai)
  - 3★: Generic execution or wrong sub-domain (sphinx, bretton-ai, steward)
  - 2★ or below: KYC/AML focus or internal workflow

---

## Strong Negative Signals

### 1. Tax Filing / Tax Compliance Products (–20 points)

- **Evidence:** taxdown 2★ ("Not really interested in EU tax products or tax filing"), juno 2★ ("I'm not looking for tax compliance so much as tax efficiencies. Agents that can help investors with clever tax strategies.")
- **Scope confirmed:** Juno's 2★ confirms the penalty extends to CPA-firm tax preparation — not just consumer e-filing. The boundary is between "tax compliance/filing" (penalty) and "tax efficiencies/strategies" (desired).
- **Sub-domain test:** Ask "does this product primarily help with tax filing, tax compliance, or tax preparation?" → if yes, apply penalty. Ask "does this product help investors with clever tax strategies, tax-loss harvesting, or portfolio tax optimisation?" → if yes, do NOT apply penalty.

### 2. KYC/AML-Focused Compliance (–15 points, ELEVATED from emerging to confirmed)

- **Evidence:** bretton-ai 3★ ("Not so interested in KYC and AML"), vivox-ai 2★ ("Not really interested in AML/KYC right now")
- **Vote rate:** 0 upvotes out of 2 explicit KYC/AML appearances
- **Applies to:** Companies whose primary positioning is financial crime compliance, AML screening, KYC verification, sanctions checking
- **Does NOT apply to:** Companies doing broader compliance orchestration or agent governance that happens to include KYC elements

### 3. Series B+ / Over-Funded Companies (–15 points, NEW — formal soft factor)

- **Evidence:**
  - linx-security 2★ ("Just too late at series B")
  - april 3★ ("Series B too late")
  - armadin 2★ ("Raised too much. This is for procurement, not for innovation")
  - basis 1★ ("raised too much")
  - unique-ai 4★ ("Maybe a little late for a chat") — Series A $30M at edge of acceptability
- **4+ occurrences → formal soft factor**
- **Stage preference confirmed:** Seed to Series A only. Series B is explicitly "too late." Large raises (even at earlier stages) can signal the company is beyond the influence/shaping stage.
- **Exception:** A Series A company with an innovative concept can still score 4★ (unique-ai) but with reduced urgency.

### 4. AI-Level (Not Agent-Level) Security (–15 points, NEW)

- **Evidence:** mindgard 2★ ("AI, not agents"), goodfire 2★ ($1.25B unicorn but no upvote), armorcode 2★ ("internal support, not breaking innovation")
- **Applies to:** Companies focused on LLM/model-level safety, AI interpretability, prompt injection defense, AI red-teaming — without specific agent governance framing
- **Does NOT apply to:** Companies explicitly addressing agent-specific attack vectors, agent behaviour monitoring, agent identity
- **The test:** "Does this product specifically address the unique security challenges of autonomous agents (multi-step actions, delegation chains, tool use, identity)?" → if no, apply penalty

### 5. Non-FinServ Focus (–10 points, NEW)

- **Evidence:** certivo 3★ ("Had this been for Finserv I would have been interested"), novee 1★ ("Not trying to solve problems for IT professionals")
- **Applies to:** Companies with no finserv signal — targeting IT, DevOps, general enterprise, or other verticals exclusively
- **Note:** A horizontal company can still score well if it has finserv traction or clear finserv applicability

### 6. "Wrong Kind of Risk" — Internal Risk vs External Agent Risk (–15 points, NEW)

- **Evidence:** lema-ai 1★ ("wrong kind of risk. I'm looking for solutions that mitigate risk of third party agents")
- **Applies to:** Enterprise risk management tools, internal AI risk frameworks, GRC tools that manage the institution's own risk posture
- **Does NOT apply to:** Products that protect against risks FROM external/third-party agents

---

## Near-Miss Patterns (Blind Spots)

**CRITICAL: The internal workflow blind spot has been resolved as a Hard Filter.** The model was scoring 15+ internal workflow companies at 60-82 because it matched on gap category without detecting the internal/external distinction. This is now the highest-priority scoring correction.

**Pattern: Intra-category sub-domain mismatch** (RESOLVED → Hard Filter for internal workflow; soft factor for tax filing/KYC-AML)
The original two near-misses (Stacks accounting, TaxDown tax filing) were the first signals of a pattern that exploded in this cycle: the model assigns high scores based on gap-level category matching without distinguishing the specific sub-domain or the internal/external boundary.

**Pattern: Stage mismatch** (NEW → Formal soft factor)
Linx-security (score 94, 2★) is the most extreme case: nearly perfect model score, explicit rejection on stage alone ("Just too late at series B"). The model does not currently penalise for stage.

**Pattern: AI vs Agent confusion** (NEW)
Mindgard (score 82, 2★ "AI, not agents") and goodfire (score 77, 2★) — the model scores AI safety companies highly without detecting that they address model-level safety rather than agent-level security.

**Pattern: Geography as tiebreaker** (emerging, not yet formal)
onyx-security 3★ ("Too far away in SF"), hybridity 3★ ("Maybe they come to the US") — geography is not a hard filter but may function as a tiebreaker between otherwise similar candidates. European and US-accessible companies preferred.

---

## Emerging Preferences (< 5 data points — tracking, not yet applied)

**"Better if it exposed an agent" — API/Agent-Callable Preference (2 occurrences, STRONG)**
- serafis 5★ — "this would be better if it exposed an agent"
- kimpton-ai 5★ — "Again, better if it exposed an agent"
- Dave is signalling that even highly-rated research intelligence companies should expose their capabilities as an agent-callable API, not just as a dashboard. This is consistent with the app store thesis: the agents need to be composable. Companies that are API-first or agent-callable should receive a scoring boost; dashboard-only products should be flagged.
- **Approaching formal soft factor threshold (2/3 required).**

**"Looks like something I'd like to play with" as engagement signal (1 occurrence)**
- bank-of-bots 4★ — hands-on engagement desire suggests a preference for products with demonstrable, tangible experiences rather than abstract infrastructure concepts.

**"Similar to Geordie" as reference-point scoring (1 occurrence)**
- manifold 5★ — Dave referenced Overmind's founder (Geordie Sherrat). Companies that remind Dave of already-approved companies get quick upvotes. This suggests a "pattern matching to existing winners" heuristic.

**"Could be a 'one more thing'" framing (1 occurrence)**
- aether-datahub 4★ — suggests data provenance infrastructure could be an adjacent/supplementary thesis extension rather than a core gap.

**KYA (Know Your Agent) as regulatory credentialing standard (radar signal, partially confirmed)**
- natural 4★ confirms interest in agent payment infrastructure. KYA framing validated by Visa, Mastercard, FIS operationalisation. Still awaiting explicit vote on a KYA-positioned company.

**NOVELTY GATE serialisation gap (cycle 11 flag)**
- The cycle 10 header declared "NEW HARD FILTER: Operating system / workflow tool / SaaS-with-AI → automatic 1★ rejection" based on avantos, marloo, asseta-ai, imtc, addition-wealth. However this has NOT yet been serialised as a standalone entry in `config/scoring-weights.json`. The internal_workflow_hard_filter covers the workflow subset; the standalone "SaaS-with-AI / non-novel" cases (asseta-ai, addition-wealth) account for only 2 clean standalone occurrences — below the 5-appearance hard-filter threshold. Tracking in near-misses.md blind spot table. Will formalise as a soft factor once a third standalone case appears.

**Entity-level archetype scrutiny (cycle 12 — first occurrence)**
- versus 5★ revision (2026-05-05) — Dave's follow-up investigation revealed Versus is built by Kalshi (founded 2019, "a rather big team"), not an independent seed-stage startup. Star rating preserved on the archetype, but the company itself is now disqualified as a canonical reference. **Pattern to watch:** any candidate claimed as a category-reinvention archetype should pass an entity-level check (is it actually an independent seed/Series-A startup, not a product of an established company?). Will formalise into scoring once a second occurrence appears. For now: when a high-scoring archetype candidate is sourced, scout briefly verifies independence before logging as exemplar.

**3★ + external-pivot intent → active-deal pathway (cycle 12 — first occurrence)**
- openbox-ai 3★ (original 2026-04-15: "Could be interesting if they would do the same for third party agents rather than internal workflows") → re-voted 2026-05-05 with progression note: "Had a call with them, Dave will sent and NDA so that we can continue conversation end of this week in more detail. Booked demo." Star rating unchanged at 3★, but the company is moving up the deal funnel because it's engaging on the external-agent pivot. **Pattern to watch:** the "3★ + 'could be interesting if external'" framing is not just a polite hedge — it's an explicit invitation that some companies will accept. Treat such 3★s as pivot-candidates rather than terminal rejections. Continued sample-of-one until a second case appears.

**Followup requests as high-conviction signal**
- 12 companies received followup: true — all at 4★ or 5★. A followup request is the strongest possible engagement signal short of a deal.

---

## Thesis Drift Observations

**Core thesis POWERFULLY confirmed:** The 53-vote corpus draws an unambiguous line: the thesis is about EXTERNAL agent infrastructure for a regulated marketplace, NOT internal workflow improvement. The 17 upvotes cluster entirely in agent security, agent authentication, agent safety, and compliance-for-agents. The 28 downvotes cluster overwhelmingly in internal workflow tools, wrong sub-domains, and wrong stages.

**The internal/external boundary is THE decisive dimension.** It is more predictive of vote outcome than gap category, team quality, funding amount, or geography. A mediocre agent security startup beats a brilliant internal workflow tool every time.

**Trust infrastructure thesis reinforced and expanded:** Agent Auth & Security (6/6 upvotes, 100%) and AI Safety & Guardrails (5/5 upvotes, 100%) remain the strongest gaps. The new votes add depth: keycard ("Spot on"), resistant-ai ("Novel and love the agentic security angle"), and manifold ("Similar to Geordie") confirm that the infrastructure trust layer is where Dave sees the most value.

**Compliance gap RESOLVED:** The dual failure mode (wrong sub-domain vs undifferentiated execution) predicted in previous cycles has been confirmed. Complyance (5★) proves that differentiated compliance is thesis-aligned. Norm-ai (4★) confirms regulatory AI with depth works. Sphinx (3★) and bretton-ai (3★) confirm that generic or KYC/AML-focused compliance is insufficient. Vivox-ai (2★) confirms explicit KYC/AML rejection.

**Stage preference crystallised:** Series B is "too late" (linx-security 2★, april 3★). Large raises signal procurement, not innovation (armadin 2★, basis 1★). The sweet spot is Seed to early Series A where Fidelity can shape what the startup builds.

**Geographic signal remains weak but present:** onyx-security 3★ ("Too far away in SF") suggests some geographic preference but it's not decisive — t54-labs (US) got 5★. Europe preferred, US acceptable, SF specifically may be slightly negative.

**Sycamore competitive threat RESOLVED:** Sycamore (1★, "Looks like more internal workflow stuff") — the fear that "trusted agent OS" platforms would absorb the governance layer is moot. Dave sees Sycamore as internal workflow, not external agent infrastructure.

**Obin AI prediction resolved:** Obin-ai (1★, "Internal pipelines") — institution-native agentic workforce framing is NOT thesis-aligned. The test isn't "where does the agent deploy?" but "does it serve external agents in a marketplace?"

**Juno tax filing prediction confirmed:** Juno (2★) confirms the –20 tax filing penalty extends to CPA-firm tax preparation. The boundary is now precisely drawn: "tax compliance/filing" = negative; "tax efficiencies/strategies for investors" = positive.

**Data starvation RESOLVED:** The pipeline went from 9% voted to ~62% voted in a single cycle. The model now has meaningful calibration data across multiple gaps for the first time.

**Scout-to-vote validation STRONG (2026-04-15):** The 3 companies found in the previous cycle's Phase 4 that were voted all received 5★ with followup: nava, vouched, alomana. 75% of scout finds voted (3/4; trent-ai not yet voted). This is an exceptionally strong signal that the scoring model is now well-calibrated for the categories it's been trained on. The internal/external filter, stage filter, and sub-domain precision are working.

**Alomana 5★ resolves Tax Optimisation gap:** The previous cycle flagged alomana with "HIGH UNCERTAINTY on internal/external boundary." Dave's 5★ resolves this — autonomous portfolio rebalancing + TLH is thesis-aligned even though the company operates at the portfolio level. This validates the specialist agent thesis: deep domain intelligence that can be called by other agents in the marketplace.

**Exposure-normalised metrics (61 votes, 2026-04-15 cycle 3):**
| Gap | Exposures | Upvotes | Downvotes | Hit Rate | Rejection Rate | Trend |
|---|---|---|---|---|---|---|
| Research & Signal Intel (S1) | 3 | 3 | 0 | 100% | 0% | 🔥 NEW — first specialist agent data |
| Dispute Resolution | 2 | 2 | 0 | 100% | 0% | 🔥 NEW — gap validated |
| Agent Auth | 11 | 7 | 2 | 64% | 18% | Stable |
| Payment Rails | 1 | 1 | 0 | 100% | 0% | Stable (low data) |
| Market Data | 1 | 1 | 0 | 100% | 0% | Stable (low data) |
| AI Safety | 14 | 6 | 5 | 43% | 36% | ⚠️ Overmind archived — gap reopened |
| Personal Agent | 8 | 2 | 4 | 25% | 50% | Stable |
| Tax Optimisation | 6 | 1 | 2 | 17% | 33% | Stable |
| Compliance | 14 | 2 | 4 | 14% | 29% | Stable |
| Orchestration | 14 | 1 | 9 | 7% | 64% | Stable |
| S2–S9 | 0 | 0 | 0 | Not yet scouted — awaiting pipeline companies | — | Blind spots |

**Specialist agent thesis POWERFULLY validated (2026-04-15 cycle 3):** The first 3 specialist agent companies to receive votes ALL got 5★ with followup. AgentSmyth ("This is what we are looking for"), Serafis, and Kimpton AI prove that Research & Signal Intelligence agents are exactly what Dave wants. Combined with the previous cycle's 3/3 validation (nava, vouched, alomana), the scout-to-upvote rate for categories with good scoring calibration is now 6/6 across two cycles.

**Dispute Resolution gap RESOLVED from "Completely Unsolved" to "Partially Addressed":** Mount Insurance 5★ and Klaimee 4★ validate the agent liability/insurance model. Mount is the first strong candidate in this previously empty gap.

**AI Safety gap REOPENED:** Overmind (previously the strongest candidate, BG Score 100) has been archived — "They aren't interested in participating." The thesis should re-elevate AI Safety scouting priority. Manifold (5★) and Kai (4★) remain but neither is as strong as Overmind was.

**European scouting preference REINFORCED:** Serafis 5★ note: "Can we also find things like this in the EU?" — Dave explicitly wants European equivalents of US research intelligence companies.

**"Agent exposure" as architectural preference EMERGING:** 2/3 S1 votes include "better if it exposed an agent" — Dave values agent-callable APIs over dashboard-only research tools. This aligns with the composable agent marketplace thesis.

*All observations are now grounded in vote evidence unless explicitly marked "radar signal."*
