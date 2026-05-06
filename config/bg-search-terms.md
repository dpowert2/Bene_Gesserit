# Bene Gesserit — Search Terms
*Version 5.0 | Generated: 2026-05-05 | Source: thesis-schema.yaml v1.0 | Thesis: v2.8*
*DO NOT EDIT — regenerate via `skills/generate-search-terms/SKILL.md`*

---

## How to Read This File

Each gap has 4 discovery layers. Run all 4 layers on every cycle — they target different surfaces and different vocabularies.

| Layer | Source Surface | Vocabulary Register | Why It Matters |
|-------|---------------|---------------------|----------------|
| **1 — Press & Funding** | Web search, TechCrunch, Sifted, The Information | Institutional (analyst/VC/press) | Finds funded companies that have been written about |
| **2 — Product Launch** | Product Hunt, Show HN (news.ycombinator.com) | Founder-speak (pre-press, raw pitch) | Finds 2-person teams who launched before raising |
| **3 — Technical Artifacts** | GitHub | Technical (repo names, README language) | Finds builders who shipped code before announcing |
| **4 — Community & Accelerators** | YC/EF/Antler batch pages, HN general, Reddit | Community/cohort vocabulary | Finds accelerator-backed companies before press coverage |

**Crypto exclusion** applies to all queries in gaps marked ⊗ — the term string `-crypto -DeFi -blockchain -web3` is appended.
**Third-party qualifier** applies to gaps marked ◎ — queries are weighted toward external/marketplace use cases.

---

## SPECIALIST AGENTS

---

### S-FRONT — Personal Financial Agent ⊗
**Team:** cross-team | **Status:** partial | **BG Bonus:** +10
*The front door agent. Translates customer intent into orchestrated specialist-agent conversations.*

#### Layer 1 — Press & Funding
```
"personal financial agent" startup seed Europe -crypto -DeFi -blockchain -web3
"AI financial advisor" startup "pre-seed" OR "seed" London OR Paris OR Dublin -crypto
"autonomous financial agent" fintech startup 2025 OR 2026 -crypto -DeFi
"personal CFO" AI agent startup seed funding -crypto -DeFi -blockchain
"consumer financial AI" agent startup Europe Series A -crypto
"financial planning agent" API startup seed -crypto -DeFi -blockchain
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "financial agent"
site:producthunt.com "AI financial advisor" agent
site:news.ycombinator.com "Show HN" "personal finance agent"
site:news.ycombinator.com "Show HN" "financial planning agent"
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "personal finance" "MCP" agent
site:github.com "financial agent" "planning" python -crypto
site:github.com "wealth agent" SDK
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "personal finance" AI agent fintech
site:joinef.com "financial" "agent" OR "AI advisor"
"AI financial advisor" startup EF OR Antler OR "Entrepreneur First" seed
"FCA regulated" "AI agent" startup
```

---

### S1 — Research & Signal Intelligence ◎
**Team:** greens | **Status:** filled (AgentSmyth, Serafis, Kimpton AI — 100% hit rate) | **BG Bonus:** +18
*Alternative data, earnings intelligence, sentiment, institutional flow — as agent-callable API endpoints.*

#### Layer 1 — Press & Funding
```
"alternative data" API startup seed Europe -crypto -DeFi -blockchain -web3
"financial signal intelligence" startup "Series A" fintech -crypto -DeFi
"earnings intelligence" AI startup London OR Berlin OR Amsterdam seed -crypto
"financial research agent" API startup funding 2025 OR 2026 -crypto -DeFi
"alternative data" "MCP server" fintech startup -crypto -blockchain
"agent-callable" "financial data" startup seed Europe -crypto -DeFi
"institutional flow" AI agent startup seed funding -crypto
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "financial data MCP"
site:producthunt.com "alternative data API" investing
site:news.ycombinator.com "Show HN" "alternative data" financial
site:news.ycombinator.com "Show HN" "earnings intelligence" API
site:news.ycombinator.com "Show HN" "financial signals" agent
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "financial MCP server" -crypto
site:github.com "alternative data SDK" investment agent
site:github.com "earnings data API" "agent" python
site:github.com "market intelligence" "MCP" fintech
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "alternative data" fintech AI
site:joinef.com "financial intelligence" OR "market data"
"AI investment research" startup EF OR Antler OR "Entrepreneur First"
"financial data" "agent-callable" startup accelerator
site:ycombinator.com "earnings" intelligence agent fintech
```

---

### S2 — Portfolio Construction & Risk Agent ⊗ ◎
**Team:** greens | **Status:** partial (1 company: Pillar) | **BG Bonus:** +18
*Concentration analysis, factor exposure, correlation modelling, scenario analysis, position sizing.*

#### Layer 1 — Press & Funding
```
"portfolio construction" AI agent startup seed Europe -crypto -DeFi -blockchain -web3
"risk engine" API startup fintech "pre-seed" OR seed -crypto -DeFi
"portfolio optimisation" agent API startup seed funding -crypto -DeFi -blockchain
"factor analysis" AI startup fintech seed London OR Berlin -crypto
"portfolio risk" API "third party" OR "external" startup seed -crypto -DeFi
"rebalancing agent" API startup fintech 2025 OR 2026 -crypto -DeFi -blockchain
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "portfolio risk" agent API
site:producthunt.com "portfolio construction" AI
site:news.ycombinator.com "Show HN" "portfolio risk engine"
site:news.ycombinator.com "Show HN" "factor model" API investment
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "portfolio optimisation" python API agent -crypto
site:github.com "risk engine" fintech SDK -crypto
site:github.com "factor model" API investment agent
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "portfolio" "risk" AI fintech agent
site:joinef.com "portfolio construction" OR "risk agent"
"portfolio risk API" startup EF OR Antler OR YC seed
"AI quant" startup accelerator fintech Europe -crypto
```

---

### S3 — Trade Structuring Agent ⊗ ◎
**Team:** greens | **Status:** empty (0 companies) | **BG Bonus:** +15
*Equity vs options vs pairs. Account selection across taxable/IRA/Roth. Structures thesis expression for tax efficiency.*

#### Layer 1 — Press & Funding
```
"trade structuring" AI agent startup -crypto -DeFi -blockchain -web3
"account selection" AI "tax-aware" fintech startup seed -crypto -DeFi
"tax-aware" "trade execution" AI startup seed funding -crypto -DeFi -blockchain
"options vs equity" agent API startup fintech -crypto -DeFi
"trade expression" AI agent fintech startup -crypto -DeFi -blockchain
"account allocation" AI "IRA" OR "Roth" agent startup seed -crypto
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "trade structuring" AI
site:producthunt.com "account selection" investing AI
site:news.ycombinator.com "Show HN" "trade structuring" agent
site:news.ycombinator.com "Show HN" "tax-aware" "trade" API
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "trade structuring" agent python -crypto
site:github.com "account selection" "IRA" "Roth" algorithm
site:github.com "options vs equity" decision engine
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "trade structuring" OR "account selection" fintech
"tax-aware execution" startup EF OR Antler OR YC
"trade expression" AI fintech startup accelerator -crypto
```

---

### S4 — Tax Optimisation Agent ◎
**Team:** studio | **Status:** partial (Alomana 5★) | **BG Bonus:** +12
*Lot-level TLH, gain deferral, asset location, wash sale prevention. Portfolio-integrated, real-time, NOT tax filing.*

#### Layer 1 — Press & Funding
```
"tax loss harvesting" AI agent API startup seed -"tax filing" -accounting
"portfolio tax optimisation" agent startup "pre-seed" OR seed funding
"direct indexing" "tax agent" startup fintech seed 2025 OR 2026
"tax-aware" portfolio AI agent startup seed London OR New York OR Boston
"lot-level" "tax" AI agent startup fintech -"tax filing"
"real-time TLH" agent API startup seed funding -accounting -bookkeeping
"wash sale" prevention AI agent startup fintech seed
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "tax loss harvesting" agent
site:producthunt.com "portfolio tax" agent API
site:news.ycombinator.com "Show HN" "tax loss harvesting" API
site:news.ycombinator.com "Show HN" "TLH" OR "tax harvesting" agent
site:news.ycombinator.com "Show HN" "accountant in your pocket"
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "tax lot optimisation" python
site:github.com "TLH" OR "tax loss harvesting" API agent
site:github.com "wash sale" algorithm fintech
site:github.com "direct indexing" "tax" agent SDK
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "tax loss harvesting" OR "TLH" fintech agent
site:joinef.com "tax" "portfolio" agent
"direct indexing" "tax agent" startup EF OR Antler OR YC
"intelligent tax" fintech startup accelerator 2025 OR 2026
```

---

### S5 — Options & Derivatives Strategy Agent ⊗ ◎
**Team:** greens | **Status:** empty (0 companies) | **BG Bonus:** +15
*Covered calls, protective puts, spreads, collar strategies, volatility trading — democratised as agent-callable service.*

#### Layer 1 — Press & Funding
```
"options strategy" AI agent API startup seed -crypto -DeFi -blockchain -web3
"derivatives intelligence" agent fintech startup "pre-seed" OR seed -crypto
"covered call" agent API startup fintech seed funding -crypto -DeFi
"retail options" AI agent startup seed Europe OR US -crypto -DeFi -blockchain
"volatility" intelligence AI agent startup fintech seed -crypto -DeFi
"income generation" agent "covered call" startup seed -crypto -DeFi -blockchain
"options flow" AI agent API startup fintech seed -crypto
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "options strategy" agent AI
site:producthunt.com "covered call" agent
site:news.ycombinator.com "Show HN" "options strategy" API
site:news.ycombinator.com "Show HN" "vol surface" OR "volatility" agent
site:news.ycombinator.com "Show HN" "income generation" options agent
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "options strategy" agent SDK -crypto
site:github.com "vol surface" API python -crypto
site:github.com "covered call" generator agent fintech
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "options" OR "derivatives" AI fintech agent -crypto
site:joinef.com "derivatives" OR "options" agent fintech
"retail derivatives" AI startup EF OR Antler OR YC seed -crypto
"options intelligence" agent startup accelerator -crypto -DeFi
```

---

### S6 — Execution Agent ⊗ ◎
**Team:** greens | **Status:** empty (0 companies) | **BG Bonus:** +15
*Algorithm selection (VWAP/TWAP/POV), dark pool routing, smart order routing, slippage minimisation.*

#### Layer 1 — Press & Funding
```
"algorithmic execution" agent API startup seed -crypto -DeFi -blockchain -web3
"smart order routing" AI startup fintech seed funding -crypto -DeFi
"execution quality" AI agent API startup fintech seed -crypto -DeFi -blockchain
"VWAP" agent API fintech startup seed -crypto -DeFi
"slippage minimisation" AI agent startup fintech seed -crypto -DeFi -blockchain
"trade execution" agent API "third party" startup seed -crypto -DeFi
"execution algorithm" agent startup fintech "pre-seed" OR seed -crypto
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "execution agent" trading API
site:producthunt.com "smart order routing" API
site:news.ycombinator.com "Show HN" "execution algorithm" agent
site:news.ycombinator.com "Show HN" "VWAP" OR "smart order router" API
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "smart order routing" python -crypto
site:github.com "VWAP" OR "TWAP" execution API agent
site:github.com "execution algorithm" fintech SDK -crypto
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "execution" "algorithm" fintech AI -crypto
"algorithmic execution" startup EF OR Antler OR YC seed -crypto
"smart order routing" API startup accelerator fintech -crypto
```

---

### S7 — Position Monitoring & Thesis Tracking Agent ⊗ ◎
**Team:** greens | **Status:** empty (0 companies) | **BG Bonus:** +12
*Continuous thesis monitoring, stop-loss management, catalyst tracking, event-triggered agent conversations.*

#### Layer 1 — Press & Funding
```
"portfolio monitoring" AI agent API startup seed Europe -crypto -DeFi -blockchain -web3
"thesis tracking" AI agent fintech startup "pre-seed" OR seed -crypto
"catalyst monitoring" agent API fintech startup seed -crypto -DeFi -blockchain
"position monitoring" AI agent API startup seed London OR Berlin -crypto -DeFi
"investment monitoring" agent startup "external" OR "third party" seed -crypto
"stop loss" AI agent API startup fintech seed 2025 OR 2026 -crypto -DeFi
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "portfolio monitoring" agent AI
site:producthunt.com "thesis tracking" investment agent
site:news.ycombinator.com "Show HN" "portfolio watchdog" agent
site:news.ycombinator.com "Show HN" "catalyst tracker" API investing
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "portfolio monitoring" agent event-driven -crypto
site:github.com "catalyst tracking" API investment
site:github.com "thesis monitor" fintech SDK agent
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "portfolio monitoring" agent fintech -crypto
"position monitoring" AI startup EF OR Antler OR YC seed
"investment thesis" tracking agent startup accelerator Europe
```

---

### S8 — Financial Planning Agent
**Team:** research | **Status:** empty (0 companies) | **BG Bonus:** +12
*Goals-based planning, retirement projections, life event modelling, estate considerations.*

#### Layer 1 — Press & Funding
```
"financial planning" AI agent API startup seed Europe
"goals-based" planning AI agent fintech startup "pre-seed" OR seed
"retirement planning" AI agent startup seed London OR Paris OR Dublin
"life event" financial agent startup fintech seed funding 2025 OR 2026
"estate planning" AI agent startup seed "FCA" OR "SEC"
"holistic financial" AI agent startup seed Europe funding
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "financial planning agent"
site:producthunt.com "retirement agent" AI
site:news.ycombinator.com "Show HN" "financial planning" agent API
site:news.ycombinator.com "Show HN" "goals-based" financial AI
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "financial planning" agent python API
site:github.com "retirement planning" SDK agent
site:github.com "goals engine" financial AI
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "financial planning" agent AI fintech
site:joinef.com "retirement" OR "financial planning" agent
"life events" financial agent startup EF OR Antler seed
"estate planning" AI agent startup accelerator Europe
```

---

### S9 — Behavioural Coaching Agent
**Team:** research | **Status:** empty (0 companies) | **BG Bonus:** +8
*Panic prevention, drawdown coaching, portfolio discipline enforcement for investors.*

#### Layer 1 — Press & Funding
```
"behavioural finance" AI agent startup seed funding 2025 OR 2026
"investor coaching" AI agent fintech startup "pre-seed" OR seed
"panic selling" prevention AI agent startup fintech seed
"behavioural coaching" agent fintech startup seed Europe OR US
"investor psychology" AI agent startup seed funding
"portfolio discipline" AI agent startup fintech seed 2025 OR 2026
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "investor behaviour" agent AI
site:producthunt.com "behavioral finance" AI investing
site:news.ycombinator.com "Show HN" "investor coaching" agent
site:news.ycombinator.com "Show HN" "don't panic sell" AI
site:news.ycombinator.com "Show HN" "behavioural nudge" investor
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "behavioural finance" API agent python
site:github.com "investor nudge" SDK
site:github.com "portfolio discipline" agent fintech
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "behavioural" finance AI investing startup
"investor behaviour" agent startup EF OR Antler OR YC
"behavioural coaching" fintech AI startup accelerator 2025 OR 2026
```

---

### S10 — Post-Trade Analysis & Learning Agent ◎
**Team:** greens | **Status:** empty (0 companies) | **BG Bonus:** +8
*Trade journaling, attribution analysis, pattern recognition across closed positions, learning loops.*

#### Layer 1 — Press & Funding
```
"post-trade analytics" AI agent API startup seed -"fund administration" -"back office"
"trade attribution" AI agent fintech startup "pre-seed" OR seed
"performance analytics" agent API "third party" startup seed funding
"investment learning" AI agent startup fintech seed 2025 OR 2026
"trade journal" AI agent API startup fintech seed -dashboard
"post-trade analysis" agent API startup seed Europe OR US
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "trade attribution" agent AI
site:producthunt.com "post-trade analytics" AI
site:news.ycombinator.com "Show HN" "trade journal" agent API
site:news.ycombinator.com "Show HN" "post-trade analysis" AI
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "trade attribution" python API agent
site:github.com "post-trade analysis" SDK fintech
site:github.com "investment attribution" agent
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "post-trade" analytics agent fintech
"trade attribution" AI startup EF OR Antler OR YC seed
"performance analytics" agent startup accelerator fintech Europe
```

---

## PLATFORM INFRASTRUCTURE

---

### P1 — Agent Orchestration ◎
**Team:** greens | **Status:** filled (Jentic — POC partner) | **BG Bonus:** +0
*Routes conversations between agents, manages multi-agent workflows, governs execution in regulated context.*

#### Layer 1 — Press & Funding
```
"multi-agent orchestration" fintech startup seed Europe -"enterprise workflow" -"operating system"
"agent workflow" infrastructure startup seed London OR Dublin OR Berlin
"agentic workflow" platform "financial services" startup seed funding
"governed agent execution" startup fintech "pre-seed" OR seed
"agent coordination" fintech infrastructure startup seed 2025 OR 2026
"MCP" "agent orchestration" fintech startup seed -"operating system"
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "agent orchestration" fintech
site:producthunt.com "multi-agent framework" financial
site:news.ycombinator.com "Show HN" "agent orchestration" API
site:news.ycombinator.com "Show HN" "multi-agent" workflow fintech
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "multi-agent orchestration" fintech -"operating system"
site:github.com "agent workflow" SDK "financial services"
site:github.com "MCP" "orchestrator" fintech governance
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "multi-agent" orchestration fintech infrastructure
site:joinef.com "agent orchestration" OR "agentic workflow"
"agent workflow" fintech startup EF OR Antler OR YC seed
```

---

### P2 — AI Safety & Guardrails ◎
**Team:** greens | **Status:** partial (gap reopened — Overmind archived) | **BG Bonus:** +0
*Agent-LEVEL safety (runtime supervision), NOT AI model interpretability. The referee for the marketplace.*

#### Layer 1 — Press & Funding
```
"AI agent safety" startup seed Europe -"model safety" -"AI interpretability"
"agent guardrails" fintech startup "pre-seed" OR seed London OR Berlin
"agentic security" startup seed funding 2025 OR 2026 -"model safety"
"agent behaviour" monitoring startup fintech seed -"AI training"
"hallucination prevention" agent runtime startup fintech seed
"agent policy enforcement" startup seed fintech -"AI operating system"
"agent runtime safety" fintech startup "pre-seed" OR seed Europe
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "agent safety" runtime fintech
site:producthunt.com "AI guardrails" agent
site:news.ycombinator.com "Show HN" "agent guardrails" SDK
site:news.ycombinator.com "Show HN" "agent safety" runtime API
site:news.ycombinator.com "Show HN" "agent policy" enforcement
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent safety" SDK -"model interpretability"
site:github.com "guardrails" "agent" fintech runtime
site:github.com "agent policy" enforcement python API
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "agent safety" OR "guardrails" fintech -"AI model"
site:joinef.com "agentic security" OR "agent safety"
"agent runtime safety" startup EF OR Antler OR YC seed
"agentic security" fintech startup accelerator Europe
```

---

### P3 — Pre-Trade Compliance Agent ◎ ★ MARKET GAP
**Team:** greens | **Status:** market-gap (nobody building this) | **BG Bonus:** +20
*Suitability, concentration limits, restricted lists, best execution — as agent-callable gate before every trade.*

#### Layer 1 — Press & Funding
```
"pre-trade compliance" AI agent API startup seed -"post-trade" -"compliance management"
"suitability check" AI agent fintech startup "pre-seed" OR seed funding
"compliance gate" AI agent "third party" startup fintech seed
"MiFID" compliance AI agent startup seed Europe -"reporting" -"post-trade"
"best execution" AI agent startup seed fintech 2025 OR 2026
"pre-trade" "suitability" AI agent startup seed London OR Dublin -"post-trade"
"restricted list" AI agent API startup fintech seed -"compliance management"
"agentic brokerage" compliance infrastructure startup seed -"post-trade"
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "pre-trade compliance" agent
site:producthunt.com "suitability check" API fintech
site:news.ycombinator.com "Show HN" "pre-trade compliance" API
site:news.ycombinator.com "Show HN" "suitability check" agent fintech
site:news.ycombinator.com "Show HN" "compliance middleware" agent
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "pre-trade compliance" API
site:github.com "suitability check" fintech agent python
site:github.com "compliance gate" agent "MiFID" OR "SEC" OR "FINRA"
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "pre-trade" compliance agent fintech
site:joinef.com "compliance" "pre-trade" OR "suitability"
"pre-trade compliance" AI startup EF OR Antler OR YC seed
"MiFID compliance" agent startup accelerator Europe
"suitability" "AI agent" fintech startup accelerator
```

---

### P4 — Agent Authentication & Identity (KYA) ◎
**Team:** greens | **Status:** partial (Vouched 5★) | **BG Bonus:** +15
*Know Your Agent. Certification, permissioning, and accountability for non-human actors in finance.*

#### Layer 1 — Press & Funding
```
"AI agent identity" fintech startup seed Europe -"KYC" -"human identity"
"Know Your Agent" platform startup "pre-seed" OR seed funding
"agent authentication" fintech startup seed London OR Berlin OR Zurich
"non-human identity" finserv startup seed funding 2025 OR 2026
"agent permissioning" fintech startup seed -"enterprise" -"internal"
"KYA" fintech startup seed -"KYC" -"AML"
"agent certification" finserv marketplace startup seed funding
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "agent identity" fintech API
site:producthunt.com "Know Your Agent" platform
site:news.ycombinator.com "Show HN" "agent authentication" SDK
site:news.ycombinator.com "Show HN" "non-human identity" API fintech
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent authentication" fintech SDK
site:github.com "non-human identity" API "financial services"
site:github.com "agent auth" "IETF" implementation
site:github.com "agent secrets" management fintech
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "agent identity" OR "Know Your Agent" fintech
site:joinef.com "agent authentication" OR "KYA"
"agent identity" fintech startup EF OR Antler OR YC seed -KYC
"non-human identity" finserv startup accelerator Europe
```

---

### P5 — Audit & Explainability ◎
**Team:** greens | **Status:** partial (Alinia first entry) | **BG Bonus:** +15
*Regulator-ready explanation of agent decisions. NOT AI observability (Langsmith etc).*

#### Layer 1 — Press & Funding
```
"AI audit trail" fintech startup seed Europe -"model monitoring" -"AI observability"
"agent explainability" finserv startup "pre-seed" OR seed funding
"explainable AI" "financial services" agent startup seed London OR Barcelona
"regulatory" "AI audit" agent startup seed funding 2025 OR 2026 -"observability"
"agent decision" audit trail fintech startup seed -"logging" -"observability"
"compliance" "AI explanation" agent startup seed Europe -"model monitoring"
"regulator-ready" AI agent audit startup seed fintech
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "AI audit trail" fintech agent
site:producthunt.com "agent explainability" API
site:news.ycombinator.com "Show HN" "audit trail" AI agent fintech
site:news.ycombinator.com "Show HN" "AI explainability" regulatory fintech
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent audit" SDK fintech -"observability"
site:github.com "explainability" API finserv agent
site:github.com "audit trail" "AI agent" "financial" python
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "audit" "explainability" AI fintech agent
site:joinef.com "AI audit" OR "explainability" fintech
"AI explainability" regulatory fintech startup EF OR Antler OR YC seed
"agent audit" fintech startup accelerator Europe -observability
```

---

### P6 — Dispute Resolution & Agent Liability ◎
**Team:** greens | **Status:** partial (Mount 5★, Klaimee 4★) | **BG Bonus:** +0
*When an agent trade goes wrong, who pays? Insurance and accountability for agent-mediated financial harm.*

#### Layer 1 — Press & Funding
```
"AI agent liability" insurance startup seed Europe
"agent insurance" fintech startup "pre-seed" OR seed funding
"agentic commerce" liability startup seed funding 2025 OR 2026
"AI liability" finserv startup seed London OR Dublin OR Amsterdam
"agent accountability" insurance startup seed fintech
"insurer" "AI agent" startup seed Europe OR US funding
"AI indemnification" fintech startup seed -"legal workflow"
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "AI agent insurance" liability
site:producthunt.com "agent liability" platform fintech
site:news.ycombinator.com "Show HN" "insurance for AI agents"
site:news.ycombinator.com "Show HN" "agent liability" fintech
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent liability" SDK insurance
site:github.com "AI insurance" API fintech
site:github.com "agent indemnification" platform
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "agent liability" OR "AI insurance" fintech
site:joinef.com "agent liability" OR "AI accountability"
"AI agent insurance" startup EF OR Antler OR "Lloyds" seed
"agentic liability" fintech startup accelerator Europe
```

---

### P7 — Agent Monetisation ◎
**Team:** greens | **Status:** partial (Paid AI) | **BG Bonus:** +0
*Results-based billing for agent-mediated services. How the app store's economic model works.*

#### Layer 1 — Press & Funding
```
"agent monetisation" OR "agent monetization" startup seed Europe
"results-based billing" AI agent startup "pre-seed" OR seed funding
"agentic payments" billing infrastructure startup seed -"payment gateway"
"pay-per-result" AI agent startup fintech seed 2025 OR 2026
"AI agent billing" startup seed Europe -"subscription management"
"usage-based billing" AI agent "marketplace" startup seed
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "agent billing" API results
site:producthunt.com "results-based" AI payments
site:news.ycombinator.com "Show HN" "agent monetisation" OR "agent monetization"
site:news.ycombinator.com "Show HN" "pay-per-result" AI agent
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent billing" SDK marketplace
site:github.com "results-based" billing API agent
site:github.com "agent monetization" platform
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "agent billing" OR "agent monetisation" startup
site:joinef.com "AI billing" OR "agent monetisation"
"agent billing" fintech startup EF OR Antler OR YC seed
"pay-per-result" AI startup accelerator Europe
```

---

### P8 — Agent Payment Rails ⊗ ◎
**Team:** greens | **Status:** partial (Nava 5★, Natural 4★) | **BG Bonus:** +0
*Escrow, intent verification, dispute resolution for agent-initiated financial transactions.*

#### Layer 1 — Press & Funding
```
"agent payment" infrastructure startup seed Europe -crypto -DeFi -blockchain -web3
"agentic transaction" rails startup "pre-seed" OR seed funding -crypto
"agent escrow" fintech startup seed London OR Amsterdam -crypto -DeFi
"non-human payment" rails startup fintech seed 2025 OR 2026 -crypto -DeFi
"agent-initiated payment" infrastructure startup seed -crypto -DeFi -blockchain
"intent verification" payment agent startup fintech seed -crypto
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "agent payments" infrastructure -crypto
site:producthunt.com "AI agent" escrow fintech
site:news.ycombinator.com "Show HN" "agent payment" rails -crypto
site:news.ycombinator.com "Show HN" "agentic" payments API -crypto
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "agent payment" SDK -crypto -DeFi
site:github.com "agentic transaction" API fintech -crypto
site:github.com "agent escrow" implementation -crypto
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "agent payments" OR "agent rails" fintech -crypto
"agent payment" infrastructure startup EF OR Antler OR YC seed -crypto
"agentic commerce" payments startup accelerator Europe -crypto
```

---

## RESEARCH TEAM

---

### R1 — Product Inversion / Retail Derivatives ⊗
**Team:** research | **Status:** partial (Versus 5★) | **BG Bonus:** +0
*Democratising derivatives, options, structured products, prediction markets for retail. Novel product form required.*

#### Layer 1 — Press & Funding
```
"prediction market" startup seed Europe 2025 OR 2026 -crypto -DeFi -blockchain -web3
"retail derivatives" platform startup "pre-seed" OR seed funding -crypto
"structured products" retail fintech startup seed -crypto -DeFi -blockchain
"mass-market options" platform startup seed funding -crypto -DeFi
"prediction market" fintech Europe startup seed -Polymarket -Kalshi -crypto
"retail prediction" investing startup seed London OR Berlin OR Paris -crypto
"democratise derivatives" startup seed fintech -crypto -DeFi -blockchain
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "prediction market" investing -crypto
site:producthunt.com "retail derivatives" OR "options for everyone"
site:news.ycombinator.com "Show HN" "prediction market" investing -crypto
site:news.ycombinator.com "Show HN" "retail derivatives" platform
site:news.ycombinator.com "Show HN" "structured products" retail app
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "prediction market" fintech -crypto -DeFi
site:github.com "structured payoff" engine retail
site:github.com "retail derivatives" API -crypto
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "prediction market" fintech -crypto -DeFi
site:joinef.com "prediction market" OR "retail derivatives"
"retail derivatives" startup EF OR Antler OR YC seed -crypto
"mass market" prediction investing startup accelerator Europe -crypto
"Kalshi" OR "Polymarket" competitor Europe seed startup -crypto
```

---

### R2 — Tokenization & Fractionalization ⊗
**Team:** research | **Status:** partial (TYTL 5★) | **BG Bonus:** +0
*Rights-clear infrastructure for previously illiquid assets: real estate, PE, collectibles, IP rights.*

#### Layer 1 — Press & Funding
```
"real estate tokenization" startup seed Europe -crypto -DeFi -blockchain -web3 -NFT
"asset fractionalization" fintech startup "pre-seed" OR seed -crypto -NFT
"fractional ownership" "real estate" startup seed funding -crypto -DeFi -NFT
"tokenized private equity" fintech startup seed -crypto -DeFi -blockchain
"illiquid asset" fractionalization startup seed Europe -crypto -DeFi -NFT
"music royalties" investment startup seed funding -crypto -DeFi -NFT
"fractional investing" alternative assets startup seed -crypto -blockchain
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "fractional" real estate OR "music royalties" -crypto
site:producthunt.com "tokenized" "real estate" OR "private equity" -crypto -NFT
site:news.ycombinator.com "Show HN" "fractional ownership" investing -crypto
site:news.ycombinator.com "Show HN" "tokenized" real estate -crypto -NFT
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "asset tokenization" "real estate" -crypto -NFT
site:github.com "fractionalization" SDK "real estate" OR "private equity"
site:github.com "tokenized securities" API -DeFi -crypto
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "tokenization" OR "fractionalization" "real estate" fintech -crypto
site:joinef.com "fractional" OR "tokenization" real estate
"real estate tokenization" startup EF OR Antler OR YC seed -crypto -NFT
"fractional investing" alternative assets startup accelerator Europe -crypto
"Securitize" OR "Republic" competitor Europe seed startup -crypto
```

---

### R3 — Wealth Management Reinvention
**Team:** research | **Status:** partial | **BG Bonus:** +0
*AI-native RIAs, family-office democratisation, novel asset-class access, holistic wealth stack replacement.*

#### Layer 1 — Press & Funding
```
"AI-native RIA" startup seed funding 2025 OR 2026 -"advisor workflow" -"advisor OS"
"wealth management" reinvention startup "pre-seed" OR seed -"robo-advisor" -"SaaS for advisors"
"family office" democratisation OR "democratize" startup seed Europe -"family office OS" -SaaS
"retail private markets" access startup seed funding -"private equity fund"
"holistic wealth" AI platform startup seed -"advisor workflow" -dashboard
"novel asset class" retail startup seed funding Europe -crypto -DeFi
"AI wealth manager" startup seed -"robo-advisor" -"advisor platform"
```

#### Layer 2 — Product Launch (Product Hunt / Show HN)
```
site:producthunt.com "AI wealth manager" -"robo-advisor"
site:producthunt.com "family office" "for everyone" OR "retail"
site:news.ycombinator.com "Show HN" "wealth management" reinvention AI
site:news.ycombinator.com "Show HN" "retail private" markets access
site:news.ycombinator.com "Show HN" "novel asset" investing
```

#### Layer 3 — Technical Artifacts (GitHub)
```
site:github.com "wealth management" API AI -"advisor workflow"
site:github.com "private markets" retail access SDK
site:github.com "AI-native" RIA wealth
```

#### Layer 4 — Community & Accelerators
```
site:ycombinator.com "wealth management" reinvention AI -"advisor OS"
site:joinef.com "wealth" "AI" OR "reinvention"
"AI-native RIA" startup EF OR Antler OR YC seed
"wealth reinvention" fintech startup accelerator Europe -"advisor platform"
"music royalties" OR "litigation finance" investment startup seed accelerator
```

---

## STUDIO-SPECIFIC SEARCHES

*Directly targeting Studio's three 2026 focus projects.*

### Voice AI — Estate Planning & Regulated Environments
```
"voice AI" "regulated" financial startup seed Europe -crypto
"voice agent" "estate planning" OR "onboarding" fintech startup seed
"conversational AI" "financial services" voice startup seed London OR Dublin
"voice first" financial agent startup "pre-seed" OR seed -crypto
site:producthunt.com "voice" financial agent regulated
site:news.ycombinator.com "Show HN" "voice AI" financial "regulated"
site:github.com "voice agent" "financial services" python SDK
"voice agent" fintech startup EF OR Antler OR YC seed Europe
```

### Nostradamus — Predictive Intelligence
```
"predictive AI" "life events" fintech startup seed funding
"prediction agent" health wealth financial startup "pre-seed" OR seed
"JTBD" AI agent fintech startup seed -crypto
"forecasting agent" financial services startup seed Europe
site:producthunt.com "predictive" financial life events agent
site:news.ycombinator.com "Show HN" "predictive" finance agent life
site:github.com "predictive" agent "financial" "life events"
"prediction" AI agent fintech startup accelerator seed
```

### Intelligent Tax Agent
```
"direct indexing" "tax agent" startup seed -"tax filing"
"state-by-state" "tax" portfolio AI startup seed US
"tax-loss harvesting" "direct indexing" AI startup "pre-seed" OR seed
"holistic" "tax" portfolio AI agent startup seed -accounting -bookkeeping
site:producthunt.com "direct indexing" tax agent
site:news.ycombinator.com "Show HN" "tax agent" "direct indexing"
site:github.com "direct indexing" "tax loss harvesting" agent python
"intelligent tax" agent startup EF OR Antler OR YC seed -"tax filing"
```

---

## GLOBAL ACCELERATOR SWEEPS
*Run as batch operations — scan these sources each cycle for new cohort listings.*
*Priority gaps for this sweep cycle: S3, S5, S6, S7, S9, S10 (all empty), S2 (under-represented)*

### YC Current Batch
- **URL:** https://www.ycombinator.com/companies?batch=current&tags=fintech
- **Filter:** Tags: fintech, finance, AI, financial services
- **Priority gaps:** S3, S5, S6, S7, S9, S10

### Entrepreneur First (EF) Current Cohort
- **URL:** https://www.joinef.com/companies
- **Filter:** Europe-based, financial services or AI infrastructure
- **Priority gaps:** P2, P3, P5

### Antler Portfolio
- **URL:** https://www.antler.co/portfolio
- **Filter:** Financial services, AI, compliance, Europe
- **Priority gaps:** S2, S3, P3, P4

### Mouro Capital Portfolio
- **URL:** https://www.mourocapital.com/portfolio
- **Why:** European fintech fund; previous signals from their network

### Seedcamp Portfolio
- **URL:** https://seedcamp.com/companies/
- **Why:** European early-stage, strong compliance-native pattern

### Backed VC Portfolio
- **URL:** https://backed.vc/portfolio
- **Why:** London-based, strong fintech coverage

### European Innovation Council (EIC) Accelerator
- **URL:** https://eic.ec.europa.eu/eic-funding/eic-accelerator_en
- **Why:** EU-funded deep-tech startups; compliance-native by construction

---

## OPERATING INSTRUCTIONS

### What to Do With Results

1. **Run Novelty Gate first.** If the result is described as "an operating system for X", "workflow management for X", or "AI-assisted SaaS for X" — reject immediately, do not score.
2. **Run Internal Workflow Hard Filter.** If it serves internal institutional staff (advisors, fund ops, compliance teams) rather than external/third-party agents — reject immediately.
3. **Run Stage Gate.** Series B or later = reject. Reference architectures only (no scoring).
4. **Check for duplicates.** Cross-reference against `config/seen-sources.json` before processing.
5. **Score and card.** Only then proceed to BG Score calculation and pipeline card creation.

### Auto-Deprecation Rules (via search-state.json)

A query is flagged for review (not immediately deprecated) after:
- **5 consecutive empty cycles** — flag for vocabulary refresh
- **3 consecutive cycles returning only already-seen sources** — flag for replacement
- **Never returns results at all** — deprecate after 3 cycles

---

## SEARCH STATE
*Last generated: 2026-05-05*
*Thesis hash: e1a0c83ca658c2249018fcb9091ae6d4132c41ae75e5d4b3ec2c31ce3f26c4e9*
*Source schema: config/thesis-schema.yaml v1.0*
*Thesis version: 2.8*
*Gaps covered: 18 (S-FRONT, S1–S10, P1–P8, R1–R3)*
*Layer breakdown: L1=~115 | L2=~80 | L3=~58 | L4=~46 | Studio=24 | Accelerators=7 sources*
