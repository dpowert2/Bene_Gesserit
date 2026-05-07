# Bene Gesserit Briefing — 2026-05-06 (monitored cycle, radar v3.4 trial)

This briefing was produced manually as a monitored end-to-end test of the v3.4 radar (combined hash + GitHub MCP no-stars-filter + chain-name post-filter + round-size & age gates + comprehensive Europe coverage + startup databases). It is in addition to the regular automated 2026-05-06.md briefing.

## Signals (7 surviving — H was dropped post-hoc by the new round-size & age filters)

### 1. Pallma AI — €1.36M pre-seed for AI agent security
**Gap:** P-safety | **Type:** New Signal | **Geo:** UK/Greece | **Via:** S-FRONT_layer1b_therecursive
**Source:** [Tech.eu](https://tech.eu/2026/01/28/pallma-ai-closes-16m-pre-seed-round-for-ai-agent-security/)

Greek-origin, London-headquartered Pallma AI raised £1.36M pre-seed led by Marathon Venture Capital with angels from AWS/Meta/Google. They're building real-time threat detection, prompt-injection defence, and red-teaming for autonomous agents. First Greek-originating signal in BG pipeline.

---

### 2. BottleCap AI — $7.5M seed (CEE breakout, but borderline thesis fit)
**Gap:** Adjacent (foundation model, not specialist) | **Type:** Challenges | **Geo:** Czech Republic | **Via:** S-FRONT_layer1b_therecursive
**Source:** [Sifted](https://sifted.eu/articles/bottlecap-ai-seed-round)

Mikolov (word2vec) + Beck (Beat Saber) + Herel raised $7.5M led by 20VC for efficient foundation models. Not a specialist finserv agent — fails Hard Filter — but a thesis-watch item because efficient LLMs change unit economics for everyone downstream.

---

### 3. Sardis — open-source financial authority layer
**Gap:** P-permissions/audit | **Type:** Reinforces | **Geo:** unknown | **Via:** S-FRONT_layer3_github_mcp
**Source:** [GitHub repo](https://github.com/EfeDurmaz16/sardis)

Solo-developer open-source project building exactly the mandate/policy/audit substrate the BG P-side thesis predicts. Not yet a company — research_watch flag. Most-recent push: today.

---

### 4. APEX-Standard — agent-to-exchange protocol
**Gap:** S6 / P-protocol | **Type:** New Signal | **Geo:** unknown | **Via:** S6_layer3_github_mcp
**Source:** [GitHub repo](https://github.com/APEX-Standard/protocol)

Standards-track effort defining how AI agents communicate with brokers, exchanges, dealers, and execution venues. Created March 2026, active repo. Worth tracking the maintainer for company emergence.

---

### 5. mcp-foundry / Universal Trading Interface
**Gap:** S6 / P-protocol | **Type:** Reinforces | **Geo:** unknown | **Via:** S6_layer3_github_mcp
**Source:** [GitHub repo](https://github.com/iceccarelli/mcp-foundry)

Parallel "Universal Trading Interface" effort — first open standard for connecting AI agents to financial markets. Reinforces APEX-Standard signal that protocol-level work is happening in the open.

---

### 6. Argus — AML investigator workspace
**Gap:** S-AML/compliance | **Type:** New Signal | **Geo:** unknown | **Via:** S-AML_layer3_github_mcp
**Source:** [GitHub repo](https://github.com/Cesco556/argus-investigator)

Claude-powered agent with MCP tools for AML investigation, defensible decision trail, case management UI. Front-end of "Argus financial-crime detection platform." Watch for commercial entity.

---

### 7. Quillon (rebrand of Acclara AI) — €1.28M pre-seed
**Gap:** S2 (research/reporting agent) | **Type:** New Signal | **Geo:** Bulgaria | **Via:** S2_layer1b_therecursive
**Source:** [TheRecursive](https://therecursive.com/cee-startup-tech-weekly-largest-pre-seed-round-in-cee/)

Bulgarian, AI platform for technical accounting and financial reporting. Pre-seed €1.28M led by 42CAP, with angels linked to NVIDIA and Roblox. First Bulgarian signal in BG pipeline.

---

## Filtered (dropped pre-profile in retrospect — fix applied for next cycle)
- **H (Holistic AI rebrand) — $220M seed (Paris)** — DROPPED. Two reasons: (1) round size $220M >> $50M BG ceiling, (2) announcement is months old, not a fresh signal. Filter primitives `max_round_size_usd` and `max_signal_age_days` now in schema; v3.4 radar applies them BEFORE profiling.

---

## New Startups (3 profiles created)
- pallma-ai (UK/Greece, P-safety, score 78)
- bottlecap-ai (Czech, adjacent/challenges, score 42)
- sardis-financial-authority (unknown geo, P-permissions, score 55, research_watch)

## New Research (0 papers)

## Specialist vs Infrastructure Split
- Specialist signals: 3 (Quillon S2, APEX/mcp-foundry S6, Argus S-AML)
- Platform signals: 4 (Pallma, Sardis, H, BottleCap as infra-watch)
- Adjacent/challenges: 1 (BottleCap)

## Layer Coverage This Cycle (sample run)
- L1a generic press: 0 (not exercised this trial)
- L1b targeted press: 6 queries (Sifted, Mam Startup, TheRecursive, Dealroom, Wellfound, F6S-adjacent)
- L1c hubs: 0 (not exercised)
- L2: 0 (not exercised)
- L3 GitHub MCP: 3 queries — produced 6 candidates (HUGE upgrade vs prior 0 conversion)
- L4a accel: 0
- L4b VC: 1 (Karma + Inovo + Credo combined)
- L4c spinouts: 0
- L4d comps: 0
- L4e databases: 1 (Dealroom)

## Geographic Distribution
- UK: 1 (Pallma — dual-base) | DE: 0 | FR: 1 (H)
- Nordics: 0 | CEE: 2 (BottleCap CZ, Quillon BG) | Baltic: 0 | Iberia: 0 | Greece: 1
- Unknown geo (GitHub-sourced): 4 (Sardis, APEX, mcp-foundry, Argus)

**CEE/Greece coverage achieved this cycle ✓** — first Czech, Bulgarian, Greek signals in pipeline.

## Top-Yielding Queries This Cycle
1. S-FRONT_layer1b_therecursive — surfaced 3 candidates (Pallma, BottleCap, Quillon)
2. S6_layer3_github_mcp — surfaced 4 GitHub candidates
3. S-FRONT_layer4e_dealroom — surfaced 2 (H, Across AI)

## Empty Queries This Cycle
- portfolio_risk_layer3_github_mcp_stars10 (the stars:>10 filter zeroed it — recommend dropping the filter)

## Issues Caught This Run
1. **Layer 4a vocabulary reuse** — community_vocabulary terms with "Show HN" prefixes get embedded in accelerator site queries (e.g. `site:ycombinator.com "Show HN execution algorithm"`) which is nonsensical. Generator should strip layer-2 idioms when emitting L4a/L4b queries.
2. **GitHub MCP `stars:>10` is too strict for new repos.** Drop the stars filter or lower to `stars:>1`.
3. **Crypto exclusion needs a post-filter on chain names** (`solana`, `ethereum`, `base network`, `polygon`, `arbitrum`, `avalanche`) — the keyword list `crypto/DeFi/blockchain/web3/NFT/token` doesn't catch repos that just say "Solana" in their description.
4. **WebFetch tool not available** — the radar prompt's example fetches use the wrong tool. Should use `mcp__workspace__web_fetch` instead.
