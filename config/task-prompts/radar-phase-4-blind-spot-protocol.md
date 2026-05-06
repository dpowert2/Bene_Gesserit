# Radar Phase 4 — Blind-Spot Protocol
*Authoritative protocol for what the bg-full-cycle radar does in Phase 4 (Scout) when Phase 0 (Coverage Audit) flags one or more categories at zero or under-represented. Read this when Phase 0's output declares any cell `next_cycle_target=true` in `config/search-state.json` — i.e. on every cycle.*

*Last updated: 2026-05-07. This protocol exists because the cycle-9 → cycle-13 record shows the same blind-spot constellation persisting four cycles in a row. The diagnosis is in the discovery log. The cure is documented but un-executed. This protocol turns the documented cure into a hard step in the radar.*

---

## Why this protocol exists

The radar has been running with the same Phase 4 default for many cycles: read `config/bg-search-terms.md` and execute web searches across the four-layer query set. For well-covered categories (S1 Research, Compliance, Auth, AI Safety, Personal Agent) this works — most of the cycle's hits come from L1 press queries against fresh funding announcements.

For under-represented and blind-spot categories (S3 Trade Structuring, S5 Options & Derivatives, S6 Execution, S7 Position Monitoring, S9 Behavioural Coaching, S10 Post-Trade), the same default has produced **zero seed-stage thesis-aligned hits across cycles 7, 8, 9, 12, and 13**. The discovery log documents this every cycle; the next-cycle-targets array in `search-state.json` carries the recommendation forward; the cure does not get executed.

Cycle 9's evidence: a YC W26 batch sweep surfaced four specialist-agent companies (Autonomous score 92, Sponge, Orthogonal, Maven) — the most impactful single Phase 4 result since the AgentSmyth/Serafis/Kimpton trio in cycle 3. Cycle 13's evidence: a single Layer 3 GitHub MCP pass surfaced six candidates (APEX-Standard, mcp-foundry, Sardis, Argus, etc.) — three of them in S6 Execution, the cell that's been zero for five cycles. These are not anomalies. They are the documented high-yield paths for these categories.

The protocol below makes them the default for blind-spot cells, not the exception.

---

## The protocol

When Phase 0 outputs any category with `card_count: 0` or `card_count: 1–2` AND the discovery log of the previous cycle marked the same cell as a blind-spot recommendation:

### Step A — Skip vocabulary-driven web search for the affected cell
Do not run L1 / L2 generic-press queries from `bg-search-terms.md` against the blind-spot category. The discovery log has already documented these as exhausted. Running them again costs scan budget and produces the same zero result.

### Step B — Run an accelerator-batch sweep
For each blind-spot category, walk the most recent batches of:
1. **Y Combinator** (YC W26, YC S26 batch pages)
2. **Entrepreneur First** (EF London / Berlin / Paris cohort pages)
3. **Antler** (Antler London, Antler Berlin, Antler Paris launch-day decks)
4. **Mouro Capital** (the Santander-backed fintech fund's portfolio)
5. **Tenity** (formerly F10 — Zürich fintech accelerator)
6. **Mastercard Start Path** (the Mastercard-run fintech accelerator)
7. **Plug and Play Fintech** (batch announcements per cohort)
8. **Barclays Rise** (London / NYC / Mumbai cohort pages)
9. **Fintech Sandbox** (Boston-based residency programme)
10. **AI Grant** (Nat Friedman / Daniel Gross AI cohort)

Read each batch page or portfolio page directly. For each company, classify against the blind-spot category and check stage / financial-services adjacency. Card any candidate that passes the hard gates (Stage HARD GATE, Adjacency HARD GATE, novelty gate, internal-workflow filter).

This step alone produces the cycle's biggest specialist-agent yield when it runs.

### Step C — Run a reverse-archetype query
For each blind-spot category, identify the canonical incumbent or reference archetype (Vise, Sequence Markets, Public.com, eToro, Robinhood, Public, Holistiplan, Range, etc.) and query: who else is doing this? Surfaces:
- **Crunchbase / Pitchbook competitors lists** (for any category with an explicit reverse-prompt file in `config/reverse-prompts/`, use that file directly)
- **G2 / Capterra alternatives-to pages** for the incumbent
- **The incumbent's own customer / partner pages** (often lists the integration ecosystem)
- **The incumbent's lead investors' other portfolio companies in the same vintage** (a bet adjacent to the incumbent is often the right adjacent bet)

`config/reverse-prompts/S6-execution-agent-pitchbook.md` exists as the prototype for this step. The blind-spot cells without an existing reverse-prompt file (S3, S5, S7, S10) need one written before the next cycle — see "Backlog" below.

### Step D — Run Layer 3 GitHub MCP at scale
Cycle 13's monitor briefing produced six candidates from three GitHub MCP queries. The L3 vocabulary for the blind-spot cells is well-tuned. Run all L3 queries for the affected categories every cycle, with `pushed:>` window set to the last 60 days, no stars filter. Open-source-first plays in the agent-protocol space (APEX-Standard, mcp-foundry, Sardis) are emerging fast and the GitHub layer surfaces them before the press does.

### Step E — Run the audience-typed L2 / L3 surfaces
Once the schema upgrade lands (see `generate-search-terms-v6-spec.md`), each blind-spot cell will carry an `audience_archetype` tag. Run L2 / L3 against archetype-matched surfaces:
- **Archetype B (Independent Advisor)** → Kitces.com AdvisorTech roundup, T3 Tech Tools showcase, Future Proof pavilion list, ThinkAdvisor, RIABiz, Wealth Mosaic, AdvisorHub
- **Archetype C (Bank / Broker / Asset Manager)** → The Trade News, Markets Media, Waters Technology, Risk.net, A-Team Insight, FinanceFeeds
- **Archetype D (Compliance / RegTech)** → Compliance Week, ACAMS, NSCP, RegTech FS Innovation Lab
- **Archetype A (Retail Investor)** → Reddit r/options, r/wallstreetbets, r/algotrading; Hacker News Show HN; Product Hunt; FinTwit
- **Archetype E (AI-native Infrastructure)** → Latent Space, AI Engineer Summit attendee/sponsor lists, Anthropic / OpenAI / LangChain customer pages, Vercel customers, Vanta customers

Until the schema upgrade lands, treat the per-category audience map in `config/search-strategy-redesign.md` (Section "Per-category audience map") as the working surface menu.

### Step F — Log what was tried, even if zero hits
Phase 4's output to `learning/discovery-log.md` must include a `Steps Attempted` block listing which of A–E ran for each blind-spot cell, and the candidate count from each step. This is the visibility loop that catches the un-actioned-recommendation pattern.

```
### Phase 4 — Scout — Blind-Spot Cells
| Cell | A skipped vocab | B accel-batch | C reverse-archetype | D GitHub MCP | E archetype L2/L3 | Total cards |
|---|---|---|---|---|---|---|
| S3 | yes | YC W26 + EF Lon | reverse from Holistiplan | run | B-typed (Kitces) | 2 |
| S5 | yes | YC W26 | reverse from OptionsAI | run | A-typed (Reddit) | 4 |
| ... |
```

A cell with all-zero rows across A–E for two consecutive cycles triggers an escalation comment in the discovery log; the next thesis review must address it.

---

## What the protocol does not do

- Does not change the radar's overall six-phase order. Phase 4 still runs after Phase 3 (Arm) and before Phase 5 (Publish).
- Does not change Phase 0 or Phase 1. The coverage audit and vote-learning steps are unchanged.
- Does not relax the hard gates. Stage, Adjacency, Internal-Workflow, Novelty, and the two scoring hard filters all apply pre-scoring as documented in the how-it-works site (sections 09b).

The protocol is additive: it specifies what Phase 4 does on top of (or instead of) the default vocabulary scan when Phase 0 has produced a blind-spot-target list.

---

## Backlog (one-off prep)

Before the protocol can run cleanly:
- [ ] Reverse-prompt files for **S3, S5, S7, S10** — model on `config/reverse-prompts/S6-execution-agent-pitchbook.md`. Each names the canonical incumbents for the cell and the structured query format.
- [ ] Schema upgrade per `generate-search-terms-v6-spec.md` — `audience_archetype` per gap, `audience_archetypes` block with surfaces.
- [ ] Update the `bene-gesserit-radar` SKILL.md (lives in `~/Documents/Claude/Scheduled/`) to reference this protocol — read it whenever Phase 0 flags a blind spot.

---

## Worked example — S6 Execution, what cycle 14 should produce

Pre-cycle: Phase 0 says S6 = 0. Phase 4 default would run vocabulary L1 / L2 queries from `bg-search-terms.md` against "smart order routing AI startup" — same as it has for five cycles, zero hits expected.

Protocol-driven Phase 4 instead:
- Step A: skip those queries.
- Step B: walk YC W26 / YC S26 / Mouro Capital portfolio pages for execution-tech plays. Cycle 13 monitor already surfaced APEX-Standard and mcp-foundry from GitHub; an accelerator-batch sweep should surface their commercial counterparts.
- Step C: read `config/reverse-prompts/S6-execution-agent-pitchbook.md` and run the PitchBook query manually if the connector is available; otherwise execute the same query against Crunchbase / G2.
- Step D: run all S6 L3 GitHub queries with no stars filter, 60-day window. Cycle 13 already proved this surfaces ≥3 candidates per pass.
- Step E: query The Trade News, Markets Media, Waters Technology, A-Team Insight (archetype-C surfaces) for execution-AI startups in the last 60 days.
- Step F: log all of the above to discovery-log.md with candidate counts.

Expected output: at least 3 cards in S6 Execution. Anything less is a protocol failure to investigate, not a market-supply finding to ratify.
