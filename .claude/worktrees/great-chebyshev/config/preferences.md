## Learned Preferences

*Last updated: 2026-03-23 | Based on 8 votes (4 upvotes ★★★★–★★★★★, 2 downvotes ★★–★, 2 neutral ★★★) | No new votes cast since 2026-03-15 cycle — confirmed current, no changes to vote-derived signals*

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
- *Market context update (2026-03-20 radar):* The AI Safety & Guardrails market has since exploded — ~$313M raised in a single week across 5 new entrants, Goodfire achieved $1.25B unicorn valuation, and Nvidia open-sourced NemoClaw at GTC. This significantly compresses the "too early" window. The precondition Dave cited (insufficient agentic infrastructure deployment density) is now visibly changing. Kai may warrant a re-evaluation vote.
- *Watch for: Does a re-vote on Kai after this market inflection produce a 5★? If yes, confirms the temporal qualifier is a dynamic market-density signal rather than a stable preference discount.*

---

## Thesis Drift Observations

**Core thesis confirmed:** The infrastructure trust layer (Agent Authentication & Security + AI Safety & Guardrails) generates 100% upvotes. The thesis is specifically searching for *regulated plumbing beneath agents*, not agentic AI applications. The ideal target is something other agentic systems must connect to — not something that happens to use agentic AI.

**Gap quality variation:** The two most consistently upvoted gaps (Agent Auth & Security, AI Safety & Guardrails) are infrastructure-layer gaps. The other four gaps (Compliance, Tax Optimisation, Agent Orchestration, Personal Agent) have mixed or no upvote signals so far. This may indicate the thesis is narrower than six gaps suggest — or that the non-infrastructure gaps require more precise sub-domain calibration before strong candidates emerge.

**Geographic neutrality:** No consistent geographic preference signal yet. Overmind (London) received 5★; TaxDown (Spain/EU) received 2★; t54 Labs (US) received 5★; Stacks (Europe) received 2★. Geography does not predict outcome — product type does.

**Market acceleration signal (2026-03-20 radar — not vote-derived, context only):** The AI Safety & Guardrails market validated dramatically this week with ~$313M in new funding and Goodfire's $1.25B unicorn valuation. Nvidia's NemoClaw open-source release simultaneously proves the category and challenges horizontal differentiation. The thesis must be sharper: the value of the *regulated* layer is fiduciary accountability chains, regulatory reporting primitives, and audit-grade provenance that satisfies FINRA, FCA SM&CR, and EU AI Act — not generic security features that open-source stacks now provide. Separately, Mastercard, Visa, and Google all moved aggressively into agent payment identity in the same week; the startup differentiation opportunity is the compliance/governance overlay atop whichever payment standard wins, not the payment identity layer itself. These signals narrow the territory but confirm it is real.

*Note: These observations are from radar intelligence, not new vote data. They are not applied to scoring until confirmed by vote evidence.*
