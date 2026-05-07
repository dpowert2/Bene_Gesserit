# Reverse Prompt — S6 Execution Agent — for PitchBook-connected Claude

*Paste this verbatim into a fresh Claude session that has the PitchBook MCP connector enabled. The prompt is self-contained — no other context needed. Output is structured so it can be pasted back into the Bene Gesserit pipeline.*

---

You are scouting one specific gap in a private deal-scouting system called Bene Gesserit. You have access to the PitchBook MCP connector. Use PitchBook's company/deal search to surface candidates that match the criteria below, then return them in the structured format at the end of this prompt.

## What Bene Gesserit is looking for in this run

Bene Gesserit tracks agentic AI startups in financial services, divided into specialist agents (the customer experience: research, portfolio construction, execution, etc.) and platform infrastructure (auth, safety, compliance, audit). I am searching only **one** gap right now: **S6 — Execution Agent**.

## Gap definition: S6 — Execution Agent

**Thesis:** Algorithm selection (VWAP, TWAP, POV), dark pool routing, multi-venue smart order routing, slippage minimisation. Professional-grade execution surfaced as an API for AI agents and wealth platforms to call. Covers investment process stage 9.

**Target company shape:**
- B2B, API-first execution infrastructure
- Agent-callable execution layer (third-party agents call the API; not embedded in a single platform)
- Team often has ex-broker / ex-exchange / ex-execution-tech DNA
- Pre-seed to Series A
- Must serve external customers — NOT an internal OMS for one fund's ops

**Vocabulary to search PitchBook with:**

Institutional / press register (use these for keyword searches):
- "algorithmic execution"
- "smart order routing"
- "execution quality"
- "VWAP" / "TWAP" / "POV algorithm"
- "execution algorithm API"

Technical register (for product-description searches):
- "execution agent API"
- "smart order router SDK"
- "VWAP engine"
- "slippage minimisation"
- "trade execution SDK"

**Reference archetypes:** none in pipeline yet — this is an empty gap, you should expect to surface unfamiliar names.

**Anti-archetypes — REJECT these (do not include in output):**
- OMS (order management systems for fund ops)
- HFT firms (wrong stage and business model)
- Exchange technology vendors selling matching engines
- Trading platforms ("trade like a pro" consumer apps)
- Brokerage infrastructure (white-label broker tech)

## PitchBook search strategy

Use PitchBook's company search with the following filters where the connector supports them. If a filter is not available, note that in your output and proceed with the rest.

**Filters:**
- **Stage:** Pre-Seed, Seed, Series A only. Drop everything Series B and beyond.
- **Round size:** between $250k and $50m (USD). Drop both micro-rounds and any round above $50m.
- **Round age:** announced within the last 90 days from today. Drop older rounds.
- **Sector / industry tags (PitchBook taxonomy):** combinations involving "Capital Markets", "Trading & Investing", "AI & Machine Learning", "Wealth Management Tech", "B2B Software", "Capital Markets Software".
- **Geography:** global, but tag the geography in the output. Bene Gesserit is currently underweighted on CEE, Baltic, Iberia, Greece, Ukraine — flag European candidates from these regions explicitly.
- **Exclude:** any company whose tags or description include "crypto", "DeFi", "blockchain", "web3", "NFT", "token", or any of the chain names: solana, ethereum, polygon, arbitrum, optimism, base network, avalanche, cardano, polkadot, cosmos, near protocol, aptos, sui, tezos, algorand, starknet, zksync, scroll, linea. The S6 gap has hard crypto exclusion. Do not return DeFi execution layers even if they technically do "smart order routing".

**Search recipes to run (in order):**

1. Keyword search across all the institutional vocabulary terms above, AND/OR-combined.
2. PitchBook lookup: companies tagged "Capital Markets" + "AI" + raised in last 90 days + Pre-Seed/Seed/Series A.
3. PitchBook lookup: investor portfolio scrape for the following execution-adjacent VCs and surface their recent additions: Alpha JWC, FinTech Collective, Anthemis, Lakestar, QED Investors, Speedinvest. Filter to last 90 days.
4. PitchBook lookup: funding-round search filtered to "Trading Software", "Investment Management Software" categories, last 90 days, Seed/Series A.

If PitchBook returns >30 candidates, narrow by date (last 60 days) before returning results — quality over quantity.

## Quality bar

For each candidate, before including in output, verify:
- It actually serves external customers (third-party callable) — not just an internal trading desk tool.
- It is at the API/SDK/agent-callable layer — not a UI-only trading platform.
- It is not a thinly-rebranded OMS, HFT shop, or DeFi project.

Drop candidates that fail any of these checks; note the drops with reasons.

## Output format — match this exactly

Return your findings as a JSON array of profiles, plus a short narrative summary. Use this schema for each profile:

```json
{
  "name": "Company Name",
  "url": "https://primary-website-or-pitchbook-link",
  "gap": "S6",
  "stage": "Pre-Seed | Seed | Series A",
  "round_size_usd": 7500000,
  "announced_date": "2026-04-15",
  "geo": {"city": "London", "country": "UK", "region_tag": "Western Europe | CEE | Baltic | Iberia | Greece | Ukraine | Nordic | US | Other"},
  "one_liner": "One sentence describing what the company does.",
  "finserv_signal": "Concrete evidence of finserv traction or design (named customers, regulated-industry DNA, etc.)",
  "team": "Founders + their backgrounds (ex-broker, ex-exchange, ex-execution-tech DNA matters most). Named lead investor.",
  "thesis_fit": "Why this matches S6 specifically. 2-3 sentences.",
  "evidence_sources": ["url1", "url2"],
  "score_breakdown": {
    "gap_fit": "0-35",
    "finserv_signal": "0-25",
    "stage_match": "0-20",
    "team_signal": "0-20",
    "total": "0-100"
  },
  "anti_archetype_check": "Confirmed not an OMS / HFT / exchange tech / trading platform / brokerage white-label",
  "pitchbook_id": "PB12345 (if available)"
}
```

After the JSON array, write a short prose summary covering:
- How many candidates surveyed in PitchBook for this run
- How many passed the quality bar
- How many were dropped, with the most common reasons
- Geographic distribution of survivors (count by region_tag)
- Anything that surprised you — patterns or gaps in PitchBook's coverage of this category

## Privacy and safety

- This prompt contains nothing sensitive. You can run it on any Claude with PitchBook access.
- Do NOT include any internal Bene Gesserit notes, scoring weights, or pipeline contents in your output — only the profiles you found in PitchBook.
- If PitchBook surfaces a company that names specific people, treat those names as data, not actionable contacts.

## When you're done

Return the JSON array + prose summary in a single response. The downstream Bene Gesserit system will:
- Dedup against the existing pipeline (~117 profiles, mostly other gaps)
- Apply its own quality filters and re-score
- Add survivors to `pipeline/detected/{slug}.md` files

If you find zero candidates that pass the bar, say so explicitly — a clear empty result is more useful than weak fillers.
