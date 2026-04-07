## Learned Preferences

*Last updated: 2026-04-05 | Based on 8 votes (4 upvotes ★★★★–★★★★★, 2 downvotes ★★–★, 2 neutral ★★★) | No new votes cast since 2026-03-15 cycle — confirmed current for FOURTH consecutive learning cycle, no changes to vote-derived signals. Radar context updated from 2026-04-03 weekly radar (non-vote data; not applied to scoring until confirmed by votes).*

You can edit this file directly at any time to override or supplement the system's learned preferences. The morning/evening scan tasks read this file when scoring startups.

---

## Strong Positive Signals

### 1. Agent Authentication & Security — Trust Infrastructure Layer (+15 points)
- **Evidence:** t54-labs 5★ ("we need a verification layer for agents"), oasis-security 5★
- **Vote rate in gap:** 2/2 upvotes (100%)
- **What scores well:** Developer-facing agent identity standards, non-human identity (NHI) management at enterprise scale, agent identity + payment-layer integration, zero-trust per-tool-call authorisation
- **Key attribute:** Infrastructure-layer positioning — the product is something other agents connect *to* for trust anchoring, not a product that *uses* agents to do a task
- **Minimum score boost:** Apply when a company's core product directly addresses "who authorises the agent" or "how do agents prove identity"

### 2. AI Safety & Guardrails for Regulated Industries (+12 points)
- **Evidence:** overmind 5★ (MI5/MI6/GCHQ pedigree, finserv/legal/healthcare focus), kai 4★ ("good but a little early")
- **Vote rate in gap:** 2/2 upvotes (100%)
- **What scores well:** Supervised agent operation in regulated contexts (finserv, legal, healthcare), security-intelligence pedigree teams, agentic behaviour monitoring and intervention
- **Key attribute:** Regulated-industry specificity. Horizontal guardrails (generic LLM safety) score lower than purpose-built guardrails for regulated deployment environments
- **Modifier:** "Too early" can dampen immediate urgency (kai 4★ rather than 5★) but does not eliminate interest — still a high-priority tracking candidate

### 3. Portfolio-Integrated Tax Intelligence (+10 points, strong preference stated but unconfirmed by upvote)
- **Evidence:** Explicitly stated in TaxDown downvote: "Looking for intelligent tax systems that uncover benefits as you update your portfolio"
- **Vote confirmation:** No upvote yet — scouting gap. Hive Tax AI and Mezzi are closest candidates but unvoted.
- **What would score well:** AI tool that operates on a live investment portfolio, surfaces tax-loss harvesting opportunities, optimises rebalancing sequences for after-tax returns, identifies capital gains deferral windows — all dynamically as portfolio evolves
- **Key attribute:** Integration with portfolio management workflow (not a standalone filing interface)

---

## Strong Negative Signals

### 1. Tax Filing / E-Filing Products (–20 points)
- **Evidence:** taxdown 2★ ("Not really interested in EU tax products or tax filing")
- **Applies to:** Consumer tax filing apps, B2B tax return automation, e-filing platforms, AI-accelerated tax form submission — regardless of AI sophistication
- **Does NOT apply to:** Portfolio tax optimisation tools, tax-loss harvesting engines, capital gains management platforms
- **Sub-domain test:** Ask "does this product's primary value proposition end at tax submission?" → if yes, apply penalty

### 2. Accounting Automation / Bookkeeping Tools (–20 points)
- **Evidence:** stacks 2★ ("Not really looking for accounting services. This is too small.")
- **Applies to:** Bookkeeping automation, accounts payable/receivable AI, expense management, accounting workflow orchestration, general finance back-office automation
- **Does NOT apply to:** Financial services agent orchestration (orchestrating agents that handle regulated financial workflows such as trade execution, compliance decisions, customer advisory)
- **Sub-domain test:** Ask "does this product's orchestration operate on regulated financial services workflows (trading, advisory, lending, compliance)?" → if no, apply penalty

---

## Hard Filters

*None active yet. A hard filter is applied when an attribute produces 0 upvotes across 5 or more appearances.*

**Currently tracking toward hard filter status:**
- KYC/AML-focused compliance tools: 1 neutral (bretton-ai 3★). Need 4 more appearances with 0 upvotes to qualify.

---

## Near-Miss Patterns (Blind Spots)

**Pattern: Intra-category sub-domain mismatch**
Both near-misses scored correctly at the gap level but incorrectly at the product-type level. The model does not yet distinguish high-preference sub-domains from low-preference sub-domains within a gap. Two occurrences tracked:
1. Agent Orchestration → accounting automation (Stacks, 2★)
2. Tax Optimisation → tax filing (TaxDown, 2★)

*When a third intra-category sub-domain mismatch is identified, a formal "Sub-Domain Qualifier" soft factor will be proposed (suggested: –15 penalty when primary product type falls outside the preferred sub-domain for its gap).*

---

## Emerging Preferences (< 5 data points — tracking, not yet applied)

**"Not groundbreaking" as a negative signal (1 occurrence)**
- sphinx 3★ ("Probably good but not exactly ground breaking")
- The compliance tooling market may be crowded enough that competent execution is insufficient for strong interest. Architectural differentiation or novel approach (e.g., Sphinx's browser-native zero-new-system design) may be required to score above neutral.
- *Watch for: Do architecturally differentiated compliance tools score higher than standard ones?*

**Company scale / traction as a minimum qualifier (1 occurrence)**
- stacks 2★ includes "This is too small" alongside product-type rejection
- Cannot be isolated from product-type signal at 1 data point. If a clearly thesis-aligned company also receives a "too small" comment, this becomes a trackable dimension.
- *Watch for: Does traction level (ARR, team size, customer count) correlate with vote outcome independent of product type?*

**KYC/AML specifically as low-preference within Compliance (1 occurrence)**
- bretton-ai 3★ ("Not so interested in KYC and AML")
- The Compliance gap may have a sub-domain split similar to Tax Optimisation: KYC/AML/financial crime (neutral to negative) vs. AI compliance orchestration / AI governance (potentially positive). The downvote on KYC/AML framing is explicit but the vote was 3★ not 2★, suggesting partial thesis overlap.
- *Watch for: Does compliance orchestration (Uptiq) or AI-governance compliance (Sphinx) score higher than financial crime compliance (Bretton AI, Unit21)?*

**"Too early" as a temporal modifier (1 occurrence)**
- kai 4★ ("good but a little early — there's not a lot of agentic infrastructure out there to fix security for yet")
- Strong interest in the product, but agentic infrastructure deployment density is seen as a precondition. This is a market-timing signal, not a product quality signal. May inform priority (watch vs. engage now) rather than score.
- *Market context update (2026-03-20 radar):* The AI Safety & Guardrails market exploded — ~$313M raised in a single week across 5 new entrants, Goodfire achieved $1.25B unicorn valuation, and Nvidia open-sourced NemoClaw at GTC. This significantly compressed the "too early" window.
- *Market context update (2026-03-29 radar):* RSAC 2026 (March 24–26) crowned agentic AI security as the defining enterprise security theme of the conference: 87% of organisations report increased risk from AI vulnerabilities, 72% lack confidence in their AI security strategy, and five new companies entered the pipeline in two weeks with a combined ~$560M in funding. The precondition Kai cited is now visibly arriving. A re-vote on Kai is warranted.
- *Watch for: Does a re-vote on Kai after this market inflection produce a 5★? If yes, confirms the temporal qualifier is a dynamic market-density signal rather than a stable preference discount.*

**KYA (Know Your Agent) as regulatory credentialing standard — agent identity (radar signal, unvoted)**
- 2026-03-29 radar: Crossmint/BlockEden analysis named KYA as the structural parallel to KYC for agents — an auditable chain from every agent action back to a human principal. Visa (Agentic Ready), Mastercard (Verifiable Intent), and InFlow all address overlapping credential/authorisation problems using similar vocabulary.
- Not yet confirmed by vote, but the concept is explicit in Crossmint (score 80, Ribbit + Franklin Templeton) and InFlow (score 62). If Crossmint receives a 4–5★ vote, this becomes the first positive calibration point for the KYA/agent payment rails sub-theme within Agent Authentication & Security.
- *Watch for: Crossmint or InFlow vote outcome — positive vote confirms KYA-framed infrastructure as thesis-aligned; negative vote suggests the payment rails layer is too commoditised by Visa/Mastercard.*

**Agent Payment Rails as potential standalone sub-gap (radar signal, unvoted)**
- 2026-03-29 radar: Crossmint (full agentic payments stack — wallets, virtual cards, stablecoin, KYA credentials) and InFlow (agent onboarding and policy compliance at the moment of action) are the first two dedicated pipeline entries in this sub-theme. The network-level plays by Mastercard Verifiable Intent, Visa Agentic Ready, and Google AP2 define the rails; startups build the compliance/governance layer on top.
- Sub-gap promotion threshold: one additional pure-play company enters the pipeline, or a regulatory body formally references agent payment standards, or either Crossmint/InFlow receives a positive vote.
- *Watch for: Does the compliance overlay atop payment rails score as well as the pure agent identity layer? This determines whether Agent Payment Rails becomes its own gap or remains a sub-theme of Agent Authentication & Security.*

**Institution-native agentic workforce framing (radar signal, unvoted)**
- 2026-03-29 radar: Obin AI (score 82, Seed $7M, Motive Partners) deploys inside a financial institution's existing controls and audit perimeter — not as an external SaaS product. Founded by JPMorgan's former Head of AI, already processing 50,000+ annual loan notices for a $500B+ private credit fund. This framing is structurally closer to the regulated infrastructure thesis than to the consumer Personal Agent gap.
- *Watch for: Does Obin AI vote as an infrastructure-layer candidate (4–5★) or as an application candidate (3★ or below)? Outcome clarifies whether "inside-the-institution governance model" is a thesis-positive attribute.*

---

## Thesis Drift Observations

**Core thesis confirmed:** The infrastructure trust layer (Agent Authentication & Security + AI Safety & Guardrails) generates 100% upvotes across all 4 votes cast in those gaps. The thesis is specifically searching for *regulated plumbing beneath agents*, not agentic AI applications. The ideal target is something other agentic systems must connect to — not something that happens to use agentic AI.

**Gap quality variation:** The two most consistently upvoted gaps (Agent Auth & Security, AI Safety & Guardrails) are infrastructure-layer gaps. The other four gaps (Compliance, Tax Optimisation, Agent Orchestration, Personal Agent) have mixed or no upvote signals so far. This may indicate the thesis is narrower than six gaps suggest — or that the non-infrastructure gaps require more precise sub-domain calibration before strong candidates emerge. Pipeline is now 61 companies with 53/61 (87%) unvoted — insufficient data to make gap-level conclusions for the non-infrastructure categories.

**Geographic neutrality:** No consistent geographic preference signal. Overmind (London) received 5★; TaxDown (Spain/EU) received 2★; t54 Labs (US) received 5★; Stacks (Europe) received 2★. Geography does not predict outcome — product type does.

**Market acceleration signal (2026-03-20 radar — not vote-derived):** The AI Safety & Guardrails market validated dramatically with ~$313M in new funding and Goodfire's $1.25B unicorn valuation. Nvidia's NemoClaw open-source release simultaneously proves the category and challenges horizontal differentiation. The regulated-layer thesis must be sharper: the value is fiduciary accountability chains, regulatory reporting primitives, and audit-grade provenance that satisfies FINRA, FCA SM&CR, and EU AI Act — not generic security features that open-source stacks now provide.

**Agentic security consensus signal (2026-03-29 radar — not vote-derived):** RSAC 2026 crystallised agentic AI security as the defining enterprise security category of 2026. Combined new investment in the AI Safety & Guardrails gap over two weeks exceeds $560M. The differentiation question has shifted from "is this category real?" to "which vendors have the regulatory compliance layer that financial services institutions require?" — which is precisely the thesis. Three further signals complicate the landscape: (1) Mastercard Virtual C-Suite occupies the "front door" agent layer for SME finance using 175B annual transaction data points — startup opportunity in Personal Agent narrows if incumbents establish this position; (2) Harvey's $11B valuation validates legal-AI-to-finserv-compliance as a route, complicating the Compliance gap's thesis boundary; (3) ABA/BPI is actively drafting voluntary NIST governance standards for bank-deployed agents — early certified infrastructure will have structural advantages when those standards formalise.

**KYA as emerging regulatory vocabulary (2026-03-29 & 2026-04-03 radar — not vote-derived):** "Know Your Agent" positions the agent credentialing problem as structurally equivalent to KYC — meaning regulators will eventually mandate it and whoever defines the standard earliest has a SWIFT-like durable advantage as the mandatory middle layer. Worth ($30M, Amex Ventures) is now the first funded product to treat KYA as a concrete compliance feature for SMB agent transactions, not just a concept. NIST's AI Agent Standards Initiative (comment period closed April 2) and BPI/ABA formal submissions mean banks are actively defining these standards — companies that align early gain structural procurement advantages when standards formalise. The compliance and governance overlay atop whichever payment identity standard wins (Visa Agentic Ready, Mastercard Verifiable Intent, or an open standard) remains the most defensible infrastructure play identified to date.

**AI Safety acquisition wave signal (2026-04-03 radar — not vote-derived):** The horizontal AI safety layer is being absorbed into platform incumbents (OpenAI/Promptfoo, SentinelOne/Prompt Security, Check Point/Lakera). The surviving startup opportunity is narrowing to precisely what the thesis predicted: the regulated compliance overlay requiring deep FINRA/FCA/EU AI Act domain knowledge that platform vendors cannot build natively. Companies like Overmind and Kai, purpose-built for regulated industries, sit in the defensible zone; horizontal guardrails companies face acquisition or commoditisation risk.

**Trusted Agent OS as emerging competitive framing (2026-04-03 radar — not vote-derived):** Sycamore ($65M seed, ex-Atlassian CTO, Coatue + Lightspeed) and Notch ($30M, 12× ARR, "AI OS for regulated industries") are positioning governance as a native feature of the agent orchestration platform. If successful, this could absorb the regulated infrastructure layer into general-purpose platforms. Counter-thesis: FINRA, FCA SM&CR, EU AI Act, and DORA compliance is deep domain work a horizontal OS cannot credibly address — which is precisely the finserv infrastructure opportunity. Vote outcome on Sycamore will be the first direct test of whether "trusted OS" framing is thesis-aligned or competitive threat.

**Agent Payment Rails gap promotion threshold met (2026-04-03 radar — not vote-derived):** Natural (Seed $9.8M), Crossmint (Series A $23.6M), and InFlow (pre-seed) constitute three dedicated pure-play pipeline entries in agentic payment infrastructure. Promotion threshold (3 startups) has been met. Recommendation pending vote confirmation: promote to formal seventh gap category covering payment primitives, settlement infrastructure, and credential/authorisation standards for agent-initiated financial transactions.

**Critical data starvation warning:** The pipeline has grown from 8 to 61 companies while the vote corpus remains frozen at 8. Four consecutive learning cycles have produced zero new calibration data. The model's ability to distinguish thesis-aligned from thesis-adjacent companies is degrading. The scoring model has no positive calibration data for 4 of 6 gaps (Compliance, Tax Optimisation, Agent Orchestration, Personal Agent) and no vote data on any Agent Payment Rails candidate. Voting on April, Obin AI, Crossmint, Sycamore, and Unique AI would collectively provide the highest marginal calibration value available.

*All observations marked "not vote-derived" are from radar intelligence. They are not applied to scoring until confirmed by vote evidence.*
