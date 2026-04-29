# Bene Gesserit — Living Investment Thesis

*Last updated: 2026-04-29 | Version: 2.7 — Challenge Signal #8 (vote-pipeline bottleneck) RESOLVED. Vote pipeline migrated from Supabase to Turso (libSQL, bg-votes-dpowert2.aws-eu-west-1.turso.io); the 5-cycle Supabase-unreachable streak is over. Preference model now reads from Turso bg_votes table, which doesn't auto-pause and is reachable from both the orchestrator sandbox and the user's browser. localStorage fallback layer also added at the same time. Next cycle should re-process any votes Dave has cast since 2026-04-15. v2.6 prior changes still in force: Research mandate has three sub-areas (Consumer behaviour & market analysis; Investable Everything; Wealth-Generation Reinvention).*

---

## Core Thesis

**Fidelity wins by harnessing external innovation, not by trying to out-build it.**

The new apps are agents. Just as mobile apps transformed how customers interacted with financial services, AI agents will become the primary interface for financial discovery, planning, and execution. The companies building these agents will move faster than any single institution — including Fidelity. That's not a threat. It's the opportunity.

Fidelity should become the **app store for financial agents** — a trusted, regulated walled garden where external agents operate on behalf of customers, connecting to Fidelity's markets, execution infrastructure, and regulatory standing. Fidelity owns the marketplace, the review process, the safety net, and the rails. Startups build the agents that sit inside the garden and deliver a superior customer experience.

By leaning into an ecosystem of agents rather than building a single proprietary one, Fidelity gains a structural advantage: **we will always have access to the latest and best agents.** When the next breakthrough in tax optimisation, portfolio construction, or financial planning arrives, it arrives inside our garden — not as a competitor. We don't risk obsolescence because the platform evolves as fast as the ecosystem does. The agents come to us.

This requires assembling the technology stack that makes a regulated agent marketplace possible: orchestration, safety, identity, compliance, audit, and governance infrastructure. That's what we're scouting for.

**What this is NOT:** Internal workflow optimisation. Back-office efficiency. Making life easier for the finance department. This is a major competitive strategy — building the platform that every financial agent needs, not building the agents themselves.

---

## Why Now

### The Agentic Brokerage Already Shipped

The agentic brokerage is no longer hypothetical. In the last two weeks of March 2026:

- **eToro launched "Agent Portfolios" (March 26)** — bring-your-own-agent model. Users create a sub-portfolio, allocate capital ($200 minimum), connect their own AI agent via scoped API key. Developer-first. Building MCP integration. Extending social trading from "copy a human" to "copy an AI agent."
- **Public.com launched "the world's first Agentic Brokerage" (March 31)** — natural language strategy definition. Users describe intent, the platform builds and executes the agent workflow. Passed eight Series 7 exams. $400M+ raised (Accel, Tiger Global), manages billions in assets.

Neither has a governance layer. Neither has pre-trade compliance. Neither has suitability checks, audit trails, or agent identity management. The infrastructure beneath these products — the part that makes them safe enough for a regulated brokerage — doesn't exist yet.

That's the gap. That's the platform.

### Fidelity Is Regulated — The Technology Must Be Too

Fidelity operates under SEC, FINRA, FCA, and MiFID II obligations. Any agent that touches a customer account, recommends a trade, or executes on behalf of a client must meet the same compliance standards as a human advisor. That's not optional — it's the business.

This means the technology stack powering the agent marketplace must be compliance-native from the ground up: suitability checks, audit trails, explainability, identity management, and human oversight. Off-the-shelf AI tooling built for general enterprise use won't meet the bar.

**Why we scout in Europe:** European startups tend to build compliance, governance, and audit into their architecture by default — a product of operating in a heavily regulated environment (GDPR, DORA, MiFID II, and the incoming EU AI Act). This makes them naturally suited as technology partners for a regulated brokerage. US startups often bolt compliance on later. For Fidelity's purposes, the European supply chain is the better fit.

### Agentic Commerce Went Live — Investment Is Next

- **Visa Intelligent Commerce** produced hundreds of live agent-initiated transactions by December 2025 — world's first agent-completed purchases.
- **Santander + Mastercard** completed Europe's first live AI agent payment on March 2 — first within a regulated banking framework.
- **Santander + Visa** completed LatAm's first agent-powered payments across five markets on March 12.
- **Visa launched "Agentic Ready" in Europe** — Barclays, Commerzbank, HSBC UK, Revolut, Santander signed up.
- **Citi, US Bank, DBS, Westpac, Axis Bank, RBL Bank** all trialling Mastercard Agent Pay or Visa VIC.

Commerce infrastructure (agent identity, payment rails, consent frameworks) is directly reusable for investment. JPMorgan's Mirakl partnership on agentic commerce checkout is the bridge. Public.com and eToro shipping agentic brokerage products compresses the timeline — the transfer from commerce to investment is happening now.

---

## What Others Are Doing (and Why We're Different)

**Building internally:** JPMorgan ($20B tech budget, 450+ AI use cases), Goldman Sachs (Claude for compliance), Citi (182,000 employees with AI tools), Morgan Stanley (OpenAI partnership). Massive internal investment. None building an open agent marketplace.

**Partnering with frontier models:** Santander (OpenAI, 30,000 employees), HSBC (Mistral for custom LLMs). Faster than building, but still tied to a single provider's roadmap.

**Shipping consumer agentic products without governance:** eToro (Agent Portfolios — BYOA via API, developer-first), Public.com ("world's first Agentic Brokerage" — natural language to execution), Arta Finance ($92M — AI wealth management with "Wealth as a Service" for partner banks). All live. None have the compliance, identity, or audit infrastructure that a regulated brokerage requires.

**Nobody is building the platform.** Every approach above either builds agents internally, partners with a model provider, or ships consumer products without governance infrastructure. The regulated agent marketplace — where external agents are certified, governed, and executed safely — is unoccupied.

---

## Our Differentiation

### What Competitors Are Doing

The industry is converging on two approaches, and we believe both are wrong:

**Build it yourself.** JPMorgan is spending $20B and has 450+ AI use cases deployed internally. Goldman Sachs is deploying Anthropic Claude for compliance. Morgan Stanley partnered with OpenAI. Citi has 182,000 employees equipped with generative AI tools. These banks are building proprietary AI capabilities at massive scale — but they're building for internal efficiency, not for an ecosystem. When the next breakthrough agent arrives, it arrives at a startup, not inside JPMorgan.

**Partner with a frontier model provider.** Santander partnered with OpenAI (30,000 employees on ChatGPT Enterprise). HSBC partnered with Mistral. This is faster than building, but it still ties innovation to a single provider's roadmap. And frontier model providers don't build brokerage infrastructure — they build general-purpose AI.

### What We Believe

Neither approach harnesses the full pace of external innovation. The winning strategy is to build the **platform** — the walled garden — and let the entire startup ecosystem compete to deliver superior customer experiences inside it. Fidelity doesn't need to pick the winning agent or the winning model. Fidelity needs to be the place where all of them operate.

This is a fundamentally different bet. Our competitors are trying to build the best internal AI. We're trying to build the best environment for external AI.

### Why European Startups

Fidelity needs compliance-native technology. European startups build that way by default — governance, explainability, and audit baked into the architecture, not bolted on after. They're building for our requirements without us having to ask. That's why we scout primarily in Europe.

---

## Gap Map: Reimagining Brokerage Infrastructure for Agents

Every function a brokerage performs today — onboarding, compliance, trading, custody, reporting — was designed for human actors. In an agent-first world, each of these must be reimagined. KYC becomes KYA (Know Your Agent). Pre-trade compliance checks must happen in milliseconds against agent-initiated orders. Audit trails must capture agent reasoning, not just human sign-off. Dispute resolution must account for a new actor in the value chain.

The gap map below identifies the infrastructure layers needed to build the app store. For each, we ask: is there a startup building this through an agentic, financial-services-specific lens?

| Layer | Traditional Brokerage Function | Agent-First Reimagining | Status |
|-------|-------------------------------|------------------------|--------|
| Agent Orchestration | Workflow management | Route, schedule, and govern multi-agent workflows | ✅ Jentic (POC partner) |
| AI Safety & Guardrails | Risk controls | Supervise agent behaviour, enforce boundaries, prevent hallucination | ⚠️ Gap reopened — Overmind declined; Manifold 5★ and Kai 4★ remain |
| Pre-Trade Compliance | Suitability, best execution | Agent checks suitability, concentration limits, restricted lists before every trade | ❌ **Market gap** — Hadrius (YC) closest signal |
| Agent Authentication | KYC / identity | KYA — Know Your Agent. Permissions, secrets, identity delegation for non-human actors | ✅ Vouched (5★, KYA platform) |
| Audit & Explainability | Regulatory reporting | "Why did the agent do this?" — auditable, regulator-ready explanation | ⚠️ First entry — Alinia (vote pending) |
| Dispute Resolution | Customer complaints | When an agent trade goes wrong, who pays? Insurance, certification, accountability | ✅ Mount (5★), Klaimee (4★) — partially addressed |
| Tax Optimisation | Tax-lot accounting | Portfolio-integrated TLH, gain deferral, asset location as agent-callable services | ✅ Alomana (5★) — first confirmed match |
| Research & Signal Intelligence (S1) | Idea generation | Alternative data, earnings, sentiment, flow — agent-callable intelligence | ✅ AgentSmyth (5★), Serafis (5★), Kimpton AI (5★) — 100% hit rate |
| Agent Monetisation | Fee schedules | Results-based billing for agent-mediated services | ✅ Paid AI (pattern signal) |
| Agent Payment Rails | Settlement | Escrow, intent verification, dispute resolution for agent transactions | ✅ Nava (5★), Natural (4★) |

### Gaps With European Startup Coverage

**1. Agent Orchestration & Workflow** ✅ POC Partner
Jentic (Dublin, pre-seed $4.5M). Arazzo workflows, agentic sandboxes, centralised credentials, governed execution. Governance-native architecture. BG Score: 95.

**2. AI Safety & Guardrails** ⚠️ Gap Reopened
Previous lead Overmind (London, seed €2.3M, ex-MI5 founder, BG Score 100) archived 2026-04-14 — *"They aren't interested in participating."* Manifold (5★ "Similar to Geordie") and Kai (4★) remain as partial coverage. Priority re-elevated from MEDIUM to HIGH — active scouting for agent-specific (not AI-model-level) safety companies.

**3. Compliance — Customer Operations** ✅ Reference Architecture
Gradient Labs (London, Series A $13M). SOP-following agents in regulated banking. Deployed at a major UK bank, 98% CSAT. LHV Bank POC signed. The architectural pattern — procedure-based, auditable, deterministic — is the template for how agents should behave inside the walled garden. BG Score: 82.

**4. Compliance + KYC + Research** ✅ Strong Candidate
Unique AI (Zurich, Series A $30M, $53M total). 25 specialised finserv use cases. Deployed at Pictet, UBP, LGT, SIX, Partners Group. 30,000 users. $2.3T AUM across clients. CPO from Google DeepMind. MCP Hub for secure agent-to-system connections. BG Score: TBD — card pending.

**5. Agentic Commerce Middleware** ✅ Pattern Signal
Lemrock (Paris, seed €6M). Middleware connecting catalogues to LLMs. 60+ brands, 1B+ queries. Architecture transfers to financial product distribution through the marketplace. BG Score: 57.

**6. Agent Monetisation** ✅ Pattern Signal
Paid AI (London, seed $33M). Results-based billing for AI agents. Directly relevant — how does Fidelity charge when an agent in the marketplace generates a trade? BG Score: 53.

**7. Cross-Border Compliance** ✅ Adjacent
Outpost (London, seed $17.5M). Ex-Revolut founders, Ribbit Capital. Cross-border payments and tax compliance. BG Score: 58.

### Genuine Market Gaps (Highest Priority for Scouting)

**8. Pre-Trade Compliance Agent** ❌ FCAT's Most Actionable Insight
Nobody building this. When an AI agent in the marketplace wants to trade, who checks: is this suitable for the client? Does it violate concentration limits? Is the security on a restricted list? Is this best execution? In a world where Public.com ships "describe your intent, we execute" without suitability checks, the company that builds the pre-trade compliance agent owns the governance layer for every agentic brokerage — including the app store. Hadrius (YC, SEC/FINRA native) is the closest signal.

**9. Agent Authentication & Identity** ❌ No FinServ Startup
Ping Identity shipped "Identity for AI" GA. IETF standard being written (draft-klrc-aiagent-auth, March 2026). Horizontal players exist (Composio, Nango, Strata, Runlayer, Aembit, Astrix). Nobody building "Know Your Agent" for financial services. This is the app store's certification system — without it, there's no marketplace.

**10. Audit & Explainability** ❌ No Purpose-Built Startup
Regulators require explainability for AI-driven financial decisions — and so will customers. ValidMind is closest. Nobody building "why did the agent recommend this trade?" as an auditable service. This is the app store's transparency layer.

**10b. Audit & Explainability** ⚠️ First Entry
Alinia (Barcelona, seed $7.5M, Mouro Capital/Santander). Backend compliance controller for high-stake AI agents. First entry in this previously empty category — vote pending. ValidMind also tracked. The regulatory-grade explainability layer is now partially scouted.

**11. Dispute Resolution & Agent Liability** ✅ Partially Addressed
Previously "completely unsolved." Now validated by Mount Insurance (5★ "Reduces risk — excellent") and Klaimee (4★ "Not quite as good as Mount"). Mount's "insurer for the agent economy" model is the archetype. Armilla (Lloyds-backed) and AIUC ($15M seed, Nat Friedman, predicts $500B market by 2030) round out the category. Still only 2 pipeline companies — continued scouting HIGH priority.

### Partial Coverage

**12. Personal Financial Agent** ⚠️
Mistral (Paris, $13.7B) — infrastructure play, not a partner in the traditional sense. Finley AI (London, FCA spotlight) — financial AI agent API. Arta Finance ($92M, US+Singapore) — "Wealth as a Service" reference architecture. No European startup building a personal financial agent specifically — suitability regulation makes it harder to ship fast.

**13. Tax Optimisation Agent** ⚠️ Likely Internal Build
No startup found. Vanguard does daily autonomous TLH internally. This is probably a Fidelity capability question — The Greens has tax APIs, the opportunity is wrapping them agent-ready for the marketplace.

---

## The Hypothesis: How Agentic Investing Works

To understand what the app store needs, we need to understand how the very best investors actually make decisions — and then imagine each stage of that process as a specialist agent.

### How Elite Traders Actually Work

The best portfolio managers and traders don't just "buy a stock." They execute a multi-stage process that draws on deep, specialised knowledge at every step. Here's the real workflow:

**1. Idea generation.** It starts with signals. Elite traders screen thousands of securities using quantitative filters — valuation metrics, growth rates, momentum signals, earnings revisions. But the edge comes from layering in alternative data that most investors never see: satellite imagery showing retail foot traffic, aggregated credit card transaction data, app download trends, supply chain shipping data, social sentiment analysis. The best funds combine multiple independent data sources because conviction rises when two unrelated signals point the same direction. They also tap human networks — broker research calls, management conversations, industry expert networks — and pattern-match against historical situations where similar setups produced outsized moves.

**2. Research and thesis building.** Once a signal surfaces, the trader builds a thesis — a specific, falsifiable argument for why this security should move. This means deep fundamental analysis: revenue trajectory, margin dynamics, competitive moat, management quality, capital allocation decisions, insider buying patterns. It means identifying specific catalysts — earnings surprises, product launches, regulatory decisions, activist involvement, M&A potential — and structuring a time horizon around them. And it means understanding what the market consensus is and where it's wrong. The best trades are contrarian: the thesis must explain why the market is mispricing the security.

**3. Sentiment and flow analysis.** Before committing capital, the trader reads the room. What's the short interest? What are institutional ownership flows showing — is smart money accumulating or distributing? What's the analyst consensus, and how crowded is it? Order flow analysis reveals whether recent trading has been buyer-initiated or seller-initiated, signalling institutional intent. This isn't just technical analysis — it's understanding the supply/demand dynamics of the security itself.

**4. Portfolio impact assessment.** No trade exists in isolation. The trader calculates: what does adding this position do to the overall portfolio? Does it push sector concentration above limits? Does it introduce correlated risk (adding another semiconductor name when the portfolio is already overweight tech)? What's the marginal contribution to portfolio volatility? Factor analysis reveals hidden exposures — a "diversified" portfolio that's actually just a leveraged bet on interest rates. Scenario modelling shows what happens to the portfolio in a 2-sigma down day, a sector rotation, a liquidity crisis.

**5. Position sizing.** This is where amateurs lose and professionals survive. The size of the position is a direct expression of conviction and risk tolerance. Elite traders work within a risk budget — typically risking 1-2% of capital per position. They use fractional Kelly criterion to determine optimal sizing based on win probability and payoff ratio. A high-conviction thesis with 3:1 risk-reward gets a larger allocation than a speculative idea at 2:1. The question is always: "If I'm completely wrong, how much am I willing to lose?" That answer IS the position size.

**6. Trade structuring.** The trader decides HOW to express the thesis. Direct equity purchase? Options (calls for leverage, puts for hedging, spreads for defined risk)? A pairs trade (long the winner, short the loser in the same sector)? Each structure has different risk/reward profiles, capital requirements, and time decay characteristics. For a wealth management client, this also means deciding WHICH ACCOUNT to trade in — and this is where it gets complex. A high-turnover strategy belongs in a tax-sheltered IRA. A buy-and-hold position belongs in a taxable account. High-dividend stocks go in IRAs to avoid annual tax drag. A covered call programme for income generation might work in the taxable account where the underlying is already held. The optimal account selection depends on the client's entire financial picture.

**7. Tax optimisation.** Before execution, the tax agent runs the numbers across the client's full account structure. If funding this purchase requires a sale, which lot should be sold? Lot #3 might be a short-term loss that offsets $4,200 in gains from January. But selling lot #1 — a long-term holding — triggers capital gains. Can we harvest losses elsewhere in the portfolio to offset? Is there a substantially identical security we can swap into to maintain exposure while capturing the tax benefit? What's the wash sale window? For a Roth conversion analysis, does it make sense to convert this year given the client's income? The difference between tax-aware and tax-unaware execution can be 1-2% of annual return — compounded over decades, that's transformative.

**8. Pre-trade compliance.** The gate. Every proposed action must clear compliance before execution. Is this trade suitable for this client's risk profile, investment objectives, and time horizon? Does it violate concentration limits? Is the security on a restricted list (because the firm has material non-public information)? Does it meet best execution obligations? Are there counterparty risks? Position limits by sector, country, single issuer? What's the liquidity profile — if the client needs to exit quickly, how many days would liquidation take? Compliance is non-negotiable. Violations mean regulatory fines, potential criminal liability, and client harm.

**9. Execution.** Professional execution is nothing like clicking "buy" on an app. The trader selects an execution algorithm matched to order size, urgency, and market conditions. VWAP algorithms spread orders across the day's expected volume to minimise market impact. TWAP distributes evenly over time. For larger orders, portions route to dark pools — private venues where orders are hidden from the public book, preventing information leakage. Smart order routers work across multiple venues simultaneously. The goal is minimising implementation shortfall — the gap between the decision price and the actual execution price. Five basis points of slippage on a large order is real money.

**10. Position monitoring.** The trade is live. Now the thesis must be monitored continuously. Is the fundamental case still intact? Have earnings or guidance changed? Has a competitor made an unexpected announcement? Has the macro backdrop shifted? The trader watches specific thesis milestones — if the catalyst doesn't materialise by the expected date, the thesis may be broken. Stop-losses and profit targets enforce discipline: if the position hits 2-3x the initial risk, take profits. If it hits the stop, exit regardless of emotion. Maximum Favourable Excursion analysis tracks whether the trader is capturing enough of each move or leaving money on the table.

**11. Rebalancing and exit.** Positions don't stay optimal. A winner that's outperformed now represents 8% of the portfolio instead of the target 3% — the trader must trim to maintain diversification. Correlations shift over time, creating hidden concentration. Rebalancing is mechanical and emotion-free — the portfolio must stay within risk parameters. Exits happen for specific reasons: catalyst realised and priced in, thesis broken, profit target hit, or portfolio rebalancing required. Each exit decision also loops back through the tax optimisation stage — is this the right time to realise this gain or loss?

**12. Post-trade analysis and learning.** Every closed position gets a forensic review. Was the thesis correct? Was the entry well-timed? What was the maximum adverse excursion (worst drawdown)? Did the exit capture the optimal amount of the move? Over hundreds of trades, patterns emerge — which setups work, which market regimes favour the strategy, where the process breaks down. Trade journals, attribution analysis (how much return came from stock selection vs sector allocation vs timing), and systematic learning loops are what separate elite traders from everyone else.

**13. Behavioural coaching.** For wealth management clients, the most valuable intervention is often preventing a bad decision. When markets crash 20%, the natural human response is to panic and sell at the bottom. The best advisors prepare clients in advance for drawdowns, provide perspective during volatility, and enforce discipline when emotions run high. This is a distinct skill from portfolio construction — it's behavioural psychology applied to finance.

**14. Financial planning overlay.** Everything above operates within the context of the client's actual life. A 30-year-old accumulating wealth has a different optimal strategy than a 70-year-old in drawdown. Life events — marriage, children, job change, inheritance, retirement — require portfolio restructuring. Income generation (dividends, covered calls) matters for retirees. Estate planning (step-up-in-basis, trusts, charitable giving) matters for wealth transfer. The planning agent ensures that no short-term trade decision undermines the client's long-term objectives.

### Now Imagine Every Stage as an Agent

In the app store, each of these fourteen stages is handled by a specialist agent — or a constellation of agents — built by a startup that does one thing brilliantly. A customer's personal agent initiates a conversation that flows through these specialists:

"I want more semiconductor exposure" triggers a cascade: the **research agent** analyses the sector and surfaces candidates. The **portfolio agent** checks existing exposure and models the impact. The **sizing agent** recommends allocation based on conviction and risk budget. The **structuring agent** evaluates equity vs options vs pairs. The **tax agent** finds the optimal execution path across account types. The **compliance agent** gates the trade. The **execution agent** places the order. The **monitoring agent** watches the position. And when conditions change, the conversation begins again.

The output is a better decision than any single agent — or most human advisors — could produce, because it draws on deep specialist knowledge at every stage. And every step is auditable, explainable, and governed inside the garden.

**This is the customer experience that the app store delivers.** Fidelity provides the garden. Startups provide the intelligence. The customer gets the combined brainpower of the entire ecosystem.

---

## The Three Teams: Research, Studio, Greens

Bene Gesserit isn't scouting "the platform" in the abstract — it's scouting on behalf of three operating teams, each with a distinct mandate, time horizon, and definition of "good." A startup that's wrong for one team can be exactly right for another. The team filter is now part of how every signal is triaged.

| Team | Mandate | Time Horizon | What It Wants From BG |
|------|---------|--------------|------------------------|
| **Research** | Forward-looking knowledge function. Three sub-areas: (a) **Consumer behaviour & market analysis** — custom GPT-driven research into consumer behaviour across financial / physical / mental health, fundamental research, problem-statement validation (Caroline / Matt / Molly). (b) **Investable Everything** — scout startups that *democratise access* to financial products through Product Inversion (reimagining derivatives, options, structured products, and prediction-market mechanics for retail) and Tokenization / Fractionalization (compliant rights-clear infrastructure for previously illiquid assets — real estate, private equity, collectibles, IP rights) (Caroline Federal). (c) **Wealth-Generation Reinvention** — anything that meaningfully reimagines wealth management or investing: AI-native RIAs that bypass the human-advisor stack, family-office-as-a-service democratisation, novel asset-class access for retail (royalties, litigation finance, life settlements, music IP), holistic wealth-CPA-attorney stack replacement, behavioural-coaching wealth platforms, retail private-market access. The criterion: a leap forward from the usual, not an incremental advisor tool. | 12–24 months | Signals from research labs, alternative-data vendors, academic spinouts, and frontier-model partners (Mistral, Anthropic) where regulated-environment research is non-trivial. PLUS: prediction-market platforms (Kalshi / Polymarket / Versus archetype), retail-friendly derivatives platforms (Robinhood options UX archetype), full-stack tokenization (Securitize / Republic / Rally / TYTL archetype), AI-native RIAs (Astor / Era / Autonomous archetype), family-office OS (Asseta AI archetype), AI-native advisor platforms (Marloo archetype), retail private markets (Willow Wealth / Moonfare archetype). |
| **Studio** | The 0-to-1 venture team. Prototypes new ventures inside emerging tech (voice, agents, predictive frameworks) before they're ready for the core platform. Validates problems through a structured three-gate framework before ventures graduate. | 6–18 months | Reference architectures, voice infrastructure, agentic frameworks, fintech-AI startups in problem-spaces Studio is actively prototyping (estate planning, predictive intelligence, intelligent tax). |
| **The Greens** | Execution and infrastructure. Owns the regulated rails — tax APIs, account structure, custody, brokerage operations. Where graduated ventures land for production deployment. | 0–12 months | Compliance-native primitives, agent-callable wrappers around existing capabilities, KYA / pre-trade compliance / audit infrastructure that lets the rails serve the marketplace safely. |

Every signal in the BG pipeline now carries an implicit team tag — Research, Studio, Greens, or *cross-team*. The same gap map (above) applies, but the *priority* of each gap shifts depending on which team needs it next.

---

### Studio Team Hypothesis (v1.0 — 2026-01-19)

**Mandate.** Studio is the 0-to-1 venture team. It prototypes new financial-services ventures using emerging technology — voice, agents, predictive intelligence — before they're ready for the platform. Studio doesn't sell. It builds reference architectures, runs PoCs with the Labs team and EIRs, validates problem statements with Research, and graduates ventures to The Greens once the gates are cleared.

**Three Focus Projects for 2026.** Studio is concentrating capacity on three projects this year. Every Studio-tagged signal in the BG pipeline should pattern-match against one of them.

1. **Voice AI through Estate Planning** *(Beyond Will collaboration with Mike & Pooja).* A constrained voice agent that helps a customer onboard — turning a decision tree into voice — explicitly *not* advice. Fundamental research questions: is voice personalisable? What type of voice (inclusive, single-voice, financial-services-appropriate)? Research into voice artists. The Labs team has a Brent-built voice prototype that's the starting point. Ecosystem partners: Mistral and Anthropic on voice solutions for regulated environments. Potential extension into the research component for Beyond Will voice implementation.

2. **Nostradamus — Predictive Agent Framework.** An agent framework for predictive intelligence across health, wealth, and physical domains. Studio is mapping what agent structures actually exist out there and how they can be integrated usefully. Ecosystem partners: MIT (validating problem statements through a Four-Fits / PoC project) and Mantic (a company specialising in AI-based future predictions). The "JTBD for agents" question — *what is the job an agent is being hired to do* — is the spine of this work.

3. **Intelligent Tax Agent.** US financial products are very complex (e.g. direct indexing — investing in individual top constituents so investment losses can offset capital gains). Tax-loss harvesting is not just a per-position problem — it requires looking holistically across the client's full account picture, and tax varies state by state. Studio's hypothesis: a frontier-fintech intelligence layer — *"the accountant in your pocket"* — sitting on top of direct indexing and the broader portfolio, with state-by-state tax-harvesting logic. This ties directly to The Greens' existing tax APIs; Studio's role is the agent-ready intelligence wrapper.

**Venture Opportunity Evaluation Framework.** Every Studio venture passes through three gates before graduating:

1. **Ecosystem validation** — does the problem have third-party demand and architectural fit beyond a single internal sponsor?
2. **Internal board approval** — does Strategy and Labs leadership commit to the build?
3. **External market validation** — sign-off from the Strategic Investment Committee, applying *venture-capital* principles, not corporate-assurance methods. Senior leadership understanding that distinction matters: a corporate-assurance gate kills the venture; a VC gate sizes the bet.

**Studio's Active Ecosystem Partners.**

- **MIT** — Jim Flynn meeting (Boston Trip week). Validating problem statements, mapping opportunities, the Future / Nostradamus framework, Four-Fits methodology, the PoC Project. February visit to schedule with MIT stakeholders working on AI agents.
- **Whitespace (Paul Jenkins)** — Collective AI platform discussion; intro pending from Aaron.
- **Mantic** — AI-based future predictions; meeting today to scope predictive intelligence collaboration.
- **Mistral / Anthropic** — voice solutions for regulated environments; what are they looking at in this space?
- **Labs (Brent et al.) and EIRs (Mike, Pooja)** — voice prototyping, Beyond Will integration, Future Horizons.
- **Research Team (Caroline, Matt, Molly)** — Custom GPT (Consumer) research into Financial / Physical / Mental health; outputs shared with Labs.

**What Studio Wants from BG.** Pipeline signals that match one of the three focus projects. Specifically:

- **Voice AI** — voice-first agents in regulated environments, voice cloning / personalisation infrastructure, decision-tree-to-voice tooling, voice identity, conversational onboarding for high-stakes financial moments (estate, retirement).
- **Predictive / Nostradamus** — predictive AI for life events, health-wealth-physical agent frameworks, JTBD-driven agent companies (Mantic-class), agent orchestration patterns Studio can plug into the framework.
- **Intelligent Tax** — direct-indexing-aware tax agents, multi-account tax-lot intelligence, US state-by-state tax-harvesting engines, frontier-fintech intelligence layers ("accountant in your pocket"). *Tax filing alone is not interesting (juno 2★ remains the canonical anti-pattern); portfolio-integrated, real-time tax intelligence is.*

**Studio's Search Boundaries.**

- **Private markets** — secondary search. Worth tracking, not the primary lens. Aaron is leading a separate private-markets analysis stream as part of the Boston Trip Labs EIR session.
- **Internal-workflow tools** — already excluded by the global Hard Filter (16 1–2★ companies, no exceptions). Studio inherits this filter.
- **Stage** — Studio cares about Seed–Series A like the rest of BG; ventures Studio prototypes itself are pre-seed by definition.

**Studio Operating Document — In Progress.** Long-form memo and visual representation of the Studio ecosystem modus operandi and operating model, to be shared with stakeholders. Drafted by Dave (with Magda) following the 19.01.26 hypothesis session.

**Active Next Steps (per 19.01.26 session).**

- Aaron → introduce Dave and Magdalena to Paul Jenkins at Whitespace (Collective AI platform).
- Magda → send and discuss problem statements / requirements for voice/agent solutions to Naz.
- Aaron → for Boston Trip, schedule a 1-hour session with Labs EIRs to introduce the team, discuss collaboration, and work through the private-markets analysis.
- Aaron → send Studio Strategy deck to the team via Teams.
- Dave → create long-form memo and visual representation of ecosystem MO and operating model.
- Dave + Magda → work with Research Team (Caroline, Matt, Molly) on custom research request: GPT usage in health, mental health, and financial health segments.
- Dave + Magda → schedule MIT meetings during February visit with stakeholders working on AI agents.

*Research and Greens team hypotheses to follow in subsequent thesis updates.*

---

## What We're Scouting For

Everything required to make the above flow real. This spans two categories: the **specialist agents** that deliver the customer experience, and the **platform infrastructure** that makes the garden safe.

### Specialist Agents (The Apps)

These are the startups building deep domain intelligence that agents can draw on. Each maps to one or more stages of the investment process above.

1. **Personal Financial Agent** — The front door. Understands the customer's goals, translates intent into action, orchestrates the conversation across specialists. *(Stages 1, 13, 14)*
2. **Research & Signal Intelligence Agent** — Alternative data, earnings analysis, sector research, catalyst identification, sentiment analysis, institutional flow tracking. The knowledge layer that generates ideas and validates theses. *(Stages 1, 2, 3)*
3. **Portfolio Construction & Risk Agent** — Concentration analysis, factor exposure, correlation modelling, scenario analysis, position sizing, rebalancing triggers. Knows what you own and what adding or removing a position does to the whole. *(Stages 4, 5, 11)*
4. **Trade Structuring Agent** — Equity vs options vs pairs vs ETFs. Account selection across taxable, IRA, Roth, 529. Structures the expression of a thesis for optimal risk/reward and tax efficiency. *(Stage 6)*
5. **Tax Optimisation Agent** — Lot-level tax-loss harvesting, gain deferral, asset location, wash sale prevention, Roth conversion analysis. Operates on the live portfolio in real time across all account types. Not tax filing. *(Stage 7)*
6. **Options & Derivatives Strategy Agent** — Covered calls for income, protective puts, spreads for defined risk, collar strategies, volatility trading. Deep specialist knowledge that most retail investors can't access today. *(Stages 6, 10)*
7. **Execution Agent** — Algorithm selection (VWAP, TWAP, POV), dark pool routing, multi-venue smart order routing, slippage minimisation. Professional-grade execution for everyone. *(Stage 9)*
8. **Position Monitoring & Thesis Tracking Agent** — Continuous monitoring of thesis milestones, stop-loss/profit-target management, catalyst tracking, earnings surprises, macro regime changes. Initiates new conversations when conditions change. *(Stage 10)*
9. **Financial Planning Agent** — Goals-based planning, retirement projections, life event modelling, income generation strategy, estate considerations. The long-term guardrail that prevents short-term decisions from undermining the client's actual objectives. *(Stage 14)*
10. **Behavioural Coaching Agent** — Panic prevention, discipline enforcement, drawdown perspective, portfolio-consistent decision support. The agent that stops you selling at the bottom. *(Stage 13)*
11. **Post-Trade Analysis & Learning Agent** — Trade journaling, attribution analysis, pattern recognition across closed positions, strategy refinement. The feedback loop that makes the entire system smarter over time. *(Stage 12)*

### Platform Infrastructure (The Garden)

These are the startups building the technology that makes the agent marketplace safe, compliant, and trustworthy.

7. **Agent Orchestration** — Routes conversations between agents, manages workflows, enforces execution order. Jentic (Dublin, POC partner, BG Score: 95) is the current lead.
8. **AI Safety & Guardrails** — Supervises agent behaviour, prevents hallucination, enforces boundaries. The referee. Overmind (London, BG Score: 100) is the strongest candidate.
9. **Pre-Trade Compliance** — The gate. Checks suitability, concentration limits, restricted lists, best execution before any trade executes. Nobody is building this. Genuine market gap.
10. **Agent Authentication & Identity (KYA)** — Know Your Agent. Every agent in the garden must be certified, permissioned, and accountable. The app store's admission system.
11. **Audit & Explainability** — Records every agent conversation and decision. "Why did the agent recommend this?" must be answerable for regulators and customers.
12. **Dispute Resolution & Agent Liability** — When the conversation produces a bad outcome, who's responsible? Insurance, certification, accountability frameworks. Completely unsolved.
13. **Agent Monetisation** — How each specialist agent gets paid. Results-based billing, revenue sharing, subscription models for agent-mediated services. Paid AI (London, BG Score: 53) is a pattern signal.

---

## What "Good" Looks Like

- **Stage:** Seed to Series A (we want to shape what the startup is building, not adopt a finished product)
- **Geography:** Europe preferred, global acceptable
- **FinServ readiness:** Evidence of financial services traction, customers, or regulated-industry DNA
- **Team:** Domain expertise in financial services, AI/ML, or security. Prior startup experience valued
- **Architecture:** API-first, platform thinking, not point solutions
- **Governance-native:** Compliance, audit, and explainability as foundational design — not bolted on

### Learned Preferences (from 61 votes — 24 upvotes, 8 neutral, 29 downvotes)

**THE DECISIVE DIMENSION: External vs Internal**
The single most predictive attribute is whether the product serves external/third-party agents in a marketplace or improves internal institutional workflows. 16 internal workflow companies received 1–2★ with zero exceptions. This is now a Hard Filter. Dave's words: *"I'm looking for solutions that mitigate risk of third party agents"* (lema-ai 1★). *"This works as long as it also works for external agents"* (ralio 5★).

- **Trust infrastructure dominates:** Agent Auth & Security (7/11 upvotes, 64%) and AI Safety & Guardrails (6/14 upvotes, 43% — suppressed by internal-workflow false positives now filtered). Keycard 5★ ("Spot on"), resistant-ai 5★ ("Novel and love the agentic security angle"), manifold 5★, complyance 5★.
- **Specialist agents validated (NEW — Cycle 3):** Research & Signal Intelligence (S1) is the first specialist agent category with vote data: AgentSmyth 5★ (*"This is what we are looking for. Shame we didn't find them sooner."*), Serafis 5★, Kimpton AI 5★ — 3/3 hit rate, 100%. Combined with previous cycle's nava/vouched/alomana at 5★, scout-to-upvote conversion is 6/6 across two cycles.
- **Dispute Resolution validated (NEW — Cycle 3):** Mount 5★ (*"Reduces risk — excellent"*) and Klaimee 4★ move this gap from "completely unsolved" to "partially addressed." Agent insurance / liability infrastructure is thesis-aligned.
- **"Agent exposure" preference EMERGING:** Dave wants intelligence exposed as agent-callable APIs, not dashboard-only products. *"Better if it exposed an agent"* appears in 2 of 3 S1 votes (serafis, kimpton-ai). Composability > UI.
- **European preference REINFORCED:** Serafis 5★ note *"Can we also find things like this in the EU?"* — Dave explicitly wants European equivalents of strong US research companies. Continues the compliance-native European supply chain thesis.
- **Internal workflow = automatic rejection:** 16 companies at 1–2★. No exceptions. Hard Filter applied.
- **Agents, not AI:** The distinction between agent-level security and AI/model-level security is critical. Mindgard (2★, "AI, not agents") and goodfire (2★) miss despite being in the right gap category.
- **Stage: Seed to Series A only.** Series B is "too late" (linx-security 2★, april 3★). Over-funded = "for procurement, not innovation" (armadin 2★).
- **Sub-domain precision matters:** Tax filing ≠ tax efficiencies (juno 2★). KYC/AML ≠ compliance governance (vivox-ai 2★). Accounting ≠ agent orchestration (stacks 2★).
- **Compliance requires differentiation:** Complyance 5★ and norm-ai 4★ prove the gap is live. Sphinx 3★ ("not exactly groundbreaking") and bretton-ai 3★ show generic execution or wrong sub-domain fails.
- **Portfolio-integrated tax intelligence confirmed:** Alomana 5★ resolves the Tax Optimisation gap. Autonomous portfolio rebalancing + TLH is thesis-aligned. Tax *filing* is not.
- **Finserv specificity required:** Certivo 3★ ("Had this been for Finserv I would have been interested") — horizontal products without finserv signal score lower.
- **Agent Payment Rails confirmed:** Natural 4★ and Nava 5★ (agent escrow / dispute resolution) validate payment infrastructure as a real gap.
- **Marketplace concepts resonate:** Bank-of-Bots 4★ ("Love this concept. Looks like something I'd like to play with") validates the platform/marketplace thesis directly.

---

## Signals That Challenge the Thesis

1. **Incumbents claiming agent infrastructure** — Visa Intelligent Commerce Connect is building protocol-agnostic agent payment infrastructure. Mastercard Virtual C-Suite positions them as the agentic intelligence layer. If payment networks own the agent rails, the app store's value proposition narrows.
2. ~~**Governance becoming a platform feature** — Sycamore raised $65M for a "trusted agent OS."~~ **RESOLVED by vote:** Sycamore received 1★ ("Looks like more internal workflow stuff"). Dave does not view "trusted agent OS" platforms as competitive threats — he sees them as internal workflow tools. The governance opportunity remains standalone.
3. **Horizontal players moving into finserv** — Okta launched "Identity for AI Agents." AI safety companies are being acquired by platform incumbents (OpenAI/Promptfoo, SentinelOne/Prompt Security, Check Point/Lakera). The window for finserv-specific startups to establish themselves is compressing.
4. **Agents bypassing brokerages entirely** — If eToro and Public.com build their own execution infrastructure and succeed without traditional brokerage rails, the "agents must come through us" thesis weakens.
5. **AI-level safety commoditisation** — Goodfire ($1.25B unicorn) received 2★. The AI interpretability/model safety layer may be commoditised. The surviving opportunity is agent-specific security (keycard 5★, resistant-ai 5★).
6. **eToro App Store launched (2026-04-15)** — third-party developer marketplace with APIs, MCP server, revenue sharing. This is *exactly* the "app store for financial agents" model the thesis describes. Dual signal: (a) powerful validation — the thesis is correct and a major brokerage agrees; (b) timeline compression — infrastructure startups must establish themselves before eToro defines the de facto standard. Monitor whether they build or buy governance infrastructure.
7. **Specialist agent desert (structural, Cycle 3 finding — REFRAMED Cycle 7/8, RECONFIRMED Cycle 9)** — S2–S10 (Portfolio, Trade Structuring, Options, Execution, Monitoring, Planning, Behavioural, Post-Trade) produced zero seed-stage thesis-matching startups across multiple full-cycle web-search scans. **Cycle 7 reframed this from a supply-side desert to a search-strategy gap** after YC W26 batches surfaced Cohesion (S1), Astor (S-Front), Sponge, Maven, and Orthogonal — i.e. the candidates exist, they aren't discoverable via vocabulary-driven web search. Accelerator-batch sweeps (YC, EF, Antler, Mouro/Santander portfolios) are now the primary path. **Cycle 9 Coverage Audit (2026-04-29) confirms 7 blind spots persist (S3, S5, S6, S7, S8, S9, S10) plus S2 underrepresented (1 company).** The "apps" layer continues to lag the infrastructure layer.

8. ~~**Vote pipeline bottleneck (Cycle 9)** — Supabase unreachable from the orchestrator sandbox for FIVE consecutive cycles.~~ **RESOLVED 2026-04-29 by migration to Turso.** Root cause was Supabase's free-tier auto-pause behaviour (instances pause after ~1 week of inactivity, silently dropping all writes). Turso (libSQL) doesn't auto-pause and is reachable from both the sandbox and the user's browser; bg-votes-dpowert2.aws-eu-west-1.turso.io is the new endpoint. All 62 prior votes were migrated. A localStorage fallback layer was added at the same time so votes persist client-side even if remote is briefly unreachable. The preference model can now re-process any votes cast since 2026-04-15.

---

## Thesis Versioning

| Version | Date | Trigger | Key Change |
|---------|------|---------|------------|
| 1.0 | 2026-03-10 | Initial setup | 6 gap categories, basic criteria |
| 2.0 | 2026-04-14 | Full rebuild from FCAT Q2 research, competitive landscape, agentic brokerage race, gap mapping | 13 gaps, "app store for financial agents" thesis, European supply chain rationale, competitive intelligence, learned anti-patterns, challenge signals |
| 2.1 | 2026-04-14 | 45 new votes processed (8→53 total), preference model rebuilt | Internal workflow Hard Filter (16 companies rejected), stage filter (Series B = too late), AI-vs-agent distinction, compliance gap resolved (complyance 5★), Sycamore threat resolved (1★), agent payment rails confirmed (natural 4★) |
| 2.2 | 2026-04-17 | Cycle 3 roll-up: 8 new votes processed (53→61), 2 new companies scouted (Alinia, specialist-agent trio confirmation), eToro App Store launch | S1 (Research & Signal Intelligence) validated at 100% hit rate (agentsmyth/serafis/kimpton-ai all 5★); Dispute Resolution upgraded from "unsolved" to "partially addressed" (Mount 5★, Klaimee 4★); Overmind archived — AI Safety gap reopened; Audit & Explainability gets first entry (Alinia); "agent exposure" preference emerging; European preference reinforced ("find things like this in the EU?"); eToro App Store added as dual validation/compression signal; specialist agent desert documented as structural S2–S9 finding |
| 2.3 | 2026-04-29 | Cycle 9 Coverage Audit + 5-cycle Supabase unreachable streak | Specialist Agent Desert challenge signal reframed as search-strategy (accelerator-batch primary), reconfirmed via Phase 0 Coverage Audit (S3/S5/S6/S7/S8/S9/S10 still 0; S2 still 1); new challenge signal added: vote-pipeline bottleneck (Supabase unreachable from sandbox 5 cycles running, preference model frozen since 2026-04-15) |
| 2.7 | 2026-04-29 | Challenge Signal #8 RESOLVED via Supabase → Turso migration | Vote pipeline migrated from Supabase to Turso (libSQL, bg-votes-dpowert2.aws-eu-west-1.turso.io). Root cause: Supabase free-tier auto-pause after ~1 week of inactivity silently dropped writes — explaining the 5-cycle "unreachable" streak. Turso doesn't auto-pause and is reachable from sandbox + browser. All 62 prior votes migrated; localStorage fallback layer added. Challenge Signal #8 marked resolved with strikethrough. CLAUDE.md / preferences.md / search-terms.md operational notes updated. how-it-works stack diagram and pipeline.html code comments updated to reflect Turso. |
| 2.6 | 2026-04-29 | Research mandate fully built out across three sub-areas | Research now has three explicit sub-areas in the three-teams table: (a) Consumer behaviour & market analysis (already in v2.4); (b) Investable Everything — Product Inversion & Access + Tokenization / Fractionalization (was queued as v2.5; rolled forward); (c) **Wealth-Generation Reinvention** — anything that meaningfully reimagines wealth management or investing; AI-native RIAs, family-office-as-a-service democratisation, novel asset-class access for retail, holistic wealth-stack replacement, behavioural-coaching platforms. The criterion: a leap forward from the usual, not an incremental advisor tool. Reference archetypes added: Astor, Era, Autonomous (AI-native RIA), Asseta AI (family office OS), Marloo (AI-native advisor platform), Willow Wealth / Moonfare (retail private markets), Seeds (personalised investing). v2.5 was queued mid-flight but consolidated into v2.6 to ship as one update. |
| 2.4 | 2026-04-29 | Studio Hypothesis (19.01.26) ingested — three-team search architecture introduced | New section: **The Three Teams: Research, Studio, Greens** — every BG signal now triaged by team mandate, time horizon, and "what good looks like." Studio Team Hypothesis v1.0 added in full: three 2026 focus projects (Voice AI through Estate Planning with Beyond Will; Nostradamus predictive agent framework with MIT + Mantic; Intelligent Tax Agent on top of direct indexing with state-by-state TLH); three-gate Venture Opportunity Evaluation Framework (ecosystem validation → internal board → Strategic Investment Committee with VC-not-corporate-assurance principles); active ecosystem partners (MIT, Whitespace, Mantic, Mistral/Anthropic, Labs, EIRs, Research Team); search boundaries (private markets secondary, internal-workflow excluded). Research and Greens team hypotheses deferred to subsequent updates. |

*This is a living document. The strategy agent reviews it bi-weekly against new vote data, market signals, and pipeline changes.*
