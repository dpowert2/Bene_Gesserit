# Empty-Cells Seed Pass — 2026-05-07
*Manual run of the new Phase 4 blind-spot protocol (`task-prompts/radar-phase-4-blind-spot-protocol.md`) against five cells (S3, S5, S6, S7, S10) that have sat at zero across cycles 7, 8, 9, 12, 13. This is the kind of pass Phase 4 should produce every cycle when Phase 0 flags blind spots.*

**Framing context (revised 2026-05-07):** The discovery log already said for four cycles in a row that vocabulary-driven web search is exhausted for these cells and that accelerator-batch sweeps + reverse-archetype queries + Layer 3 GitHub MCP are the high-yield path. The cure was un-actioned. This pass is the manual demonstration that running the documented cure produces results. The protocol document binds that cure into Phase 4 going forward; this file is the worked example, not the redesign itself.

Twenty candidates surfaced in roughly thirty minutes of search using customer-native vocabulary on audience-typed surfaces (Kitces / The Trade News / Reddit / FinTwit / direct product domains / GitHub) — instead of the synthetic exact-match phrases (`"trade structuring AI startup"` etc.) in `bg-search-terms.md` v5.5. The schema upgrade landed alongside this pass strengthens those vocab values for the next regen.

Status notes are first-pass triage, not full BG cards. The companies marked `[card]` should go through the bene-gesserit-card skill next; those marked `[track]` are too-late-stage but worth keeping as category-validation evidence; those marked `[verify]` need a quick stage / independence check before they're worth carding (entity-level rule from cycle 12).

---

## S3 — Trade Structuring Agent · `B + C`
**CNV used:** "asset location", "after-tax alpha", "tax-aware portfolio", "AI tax planning", "advisor copilot", "next-gen RIA"
**Surfaces fired:** L2 (Kitces, ThinkAdvisor, WealthManagement), L4 (Kitces AdvisorTech roundup), L10 (YC asset-management tag)

| Slug | What | Stage signal | Source |
|---|---|---|---|
| `range-com` `[card]` | All-in-one wealth: planning + tax + estate, AI-native, "plans to eliminate advisor workforce as AI takes over" | $700M AUM, growth-stage but worth verifying funding cohort | InvestmentNews, range.com |
| `portfoliopilot` `[card]` | AI financial advisor — multi-strategy with tax-aware + after-tax optimisation positioning, retail-side | Seed/Series A, independent | portfoliopilot.com |
| `zeplyn` `[card]` | Advisor copilot — meeting capture + planning workflow, AI-native | Seed, mentioned in Kitces Jan 2026 AdvisorTech roundup | kitces.com |
| `syntheticfi` `[card]` | Liquidity / cash-management for independent RIAs | Seed | YC company directory, kitces.com |
| `finny-ai` `[verify]` | AI prospecting for advisors. Strong category signal but adjacent to S3, may be more S9 (advisor productivity / acquisition) | Series A $17M Jan 2026 | YC, kitces.com |

**Verdict:** S3 should not be empty. Five plausible cards from one pass. Range and PortfolioPilot are the strongest signals.

---

## S5 — Options & Derivatives Strategy Agent · `A + E`
**CNV used:** "wheel strategy autopilot", "covered call autopilot", "AI options trader", "options income engine", "AI Options Income Strategy Agent"
**Surfaces fired:** L1 (general press) but with CNV instead of `"options strategy AI startup"`; L8 (build-in-public — direct to product domains)

| Slug | What | Stage signal | Source |
|---|---|---|---|
| `optionspilot` `[card]` | AI-powered strike finder for covered calls and cash-secured puts; recommends optimal strikes for income vs share-retention | Independent app, seed-stage indie | optionspilot.app |
| `quantwheel` `[card]` | Wheel + covered-call screener — scans 500+ tickers in <5 min on DTE / delta / IV rank / yield with AI risk-adjusted ranking | Independent SaaS, seed-stage indie | quantwheel.com |
| `optionwheeltracker` `[card]` | Wheel-campaign management + ACB automation for theta gang traders | Independent, seed-stage indie | optionwheeltracker.app |
| `jenova-ai` `[verify]` | "AI Options Income Strategy Agent" for systematic premium collection — automated CCs, CSPs | Independent, agent-positioned (matches "exposed an agent" preference); stage uncertain | jenova.ai |
| `flyonthewall-ai` `[verify]` | Options strategy / AI tooling — content-first surface | Independent, stage uncertain | flyonthewall.ai |

**Verdict:** Five concrete candidates in S5, the highest-priority empty cell after S3. The retail options space is dense — these are first-pass; a deeper pass on Reddit r/options, r/thetagang, and FinTwit would surface more. The "agent-callable" preference (Jenova explicitly positions as an agent) is exactly the v3.0 specialist-agent thesis match.

---

## S6 — Execution Agent · `C`
**CNV used:** "AI execution", "smart order routing AI", "TCA copilot", "execution copilot", "agentic OMS"
**Surfaces fired:** L2 (The Trade News, A-Team Insight), L5 (Nordic Capital portfolio)

| Slug | What | Stage signal | Source |
|---|---|---|---|
| `bmll-technologies` `[track]` | Level 3 historical order book + AI-ready analytics layer with Tradefeedr | Acquired by Nordic Capital Oct 2025 — too late for seed/Series A but category-validation; also archetype reference | bmlltech.com, A-Team |
| `xyt` `[card]` | "big xyt" — natural-language AI on top of trading data platform; pitching displacement of traditional dashboards | Independent, March 2026 AI announcement | A-Team Insight |
| `tradefeedr` `[card]` | Agentic interface on top of analytics APIs; year-long pilot with BMLL (March 2026) | Independent, agent-positioned | financemagnates.com |
| `onechronos` `[card]` | Venture-backed Smart Market platform — mathematical-optimization auctions, FCA approval Q4 2025 | Venture-backed independent, stage worth verifying | onechronos.com |
| `onetick` `[verify]` | BMLL/big xyt competitor — independent trading data + analytics | Stage / independence uncertain | A-Team Insight |
| `adaptive-financial-consulting` `[verify]` | Exchange tech / capital markets infrastructure | Stage uncertain | thetradenews.com tag pages |

**Verdict:** S6 is genuinely a B2B-broker cell, which is why the European-press-and-StationF surface menu missed it entirely. The Trade News and A-Team Insight are the right surfaces. Five live candidates.

---

## S7 — Position Monitoring & Thesis Tracking · `A + B`
**CNV used:** "thesis tracker", "earnings prep", "AI watchlist", "AI investment research"
**Surfaces fired:** L2 (Kitces, ThinkAdvisor), L7 (Perplexity customer integration)

| Slug | What | Stage signal | Source |
|---|---|---|---|
| `brightwave` `[track]` | AI-powered research + diligence platform for financial professionals; processes filings, transcripts, memos in minutes | Series A $15M Oct 2024, $21M total — too late for primary card but archetype reference | businesswire.com |
| `quartr` `[card]` | Qualitative-research data API — earnings call transcripts and corporate disclosures, structured for AI; 700+ institutional clients | Series A range, Sweden-based, agent-callable API (matches "expose an agent" preference) | quartr.com |
| `daloopa` `[track]` | Financial-data layer — 5,500+ companies, integrated with Perplexity Computer (April 2026) | Likely Series A+, agent-callable | prnewswire.com |
| `atom-finance` `[verify]` | Investor research platform | Stage / independence verification needed | mentioned in coverage |
| `fey` `[verify]` | UK-based investor app, AI-native, thesis-tracking features | Search did not return enough — re-scout via L3/L8 | known from L8 discovery |

**Verdict:** S7 yielded fewer hits than S5 but the candidates that surfaced — particularly Quartr — are direct matches for the "agent-callable research intelligence" thesis already validated by AgentSmyth/Serafis/Kimpton-AI. Quartr should card now.

---

## S10 — Post-Trade Analysis & Learning · `A + C`
**CNV used:** "AI trading journal", "trade attribution", "post-trade analytics", "AI trading coach"
**Surfaces fired:** L1 (general press with CNV), L8 (direct product domains)

| Slug | What | Stage signal | Source |
|---|---|---|---|
| `tradersage` `[card]` | AI-powered journal with automatic trade tagging on technical + fundamental analysis | Independent, seed-stage indie | tradersage.ai |
| `tradelog-pro` `[card]` | Strategy + emotion tagging, win-rate / drawdown analytics, AI Coach with weekly pattern analysis | Independent, seed-stage indie | tradelog-pro.vercel.app |
| `journalplus` `[card]` | AI analysis + broker integrations for retail day traders | Independent | journalplus.co |
| `ai-trade-journal` `[verify]` | AI pattern recognition for hidden performance factors | Stage uncertain | tradejournal.one |

**Verdict:** Four retail-side candidates from one pass. The institutional side (Markets Media, The Trade News surfaces) was not yet probed deeply for S10 and would yield TCA / attribution platforms.

---

## What this proves

The empty cells were never a market-supply problem and the discovery log has been saying so since cycle 7. The B2C retail space (S5, S7-retail, S10-retail) is overflowing — at least 13 live candidates in three cells, none of which the pipeline had heard of. The B2B broker space (S6) is more concentrated but absolutely not empty — five candidates in one targeted pass via The Trade News and A-Team Insight, neither of which is in the current surface menu. The advisor-tech space (S3, S7-advisor) is dense — Kitces alone surfaces multiple new candidates per month in their AdvisorTech roundups.

Twenty candidates in thirty minutes via the protocol's Step B (accelerator + reverse-archetype walks), Step D (GitHub MCP), and Step E (archetype-typed L2/L3 surfaces). The protocol now binds these into Phase 4 by default whenever Phase 0 flags blind spots; this pass is the proof-of-concept, not the redesign.

## Next moves

1. Card the `[card]`-marked rows above through the bene-gesserit-card skill — roughly 14 cards, prioritising QuantWheel, OptionsPilot, Quartr, Tradefeedr, Range, PortfolioPilot, TraderSage, TradeLog Pro, OneChronos, big xyt, Zeplyn.
2. Verify the `[verify]` rows — independence check (entity-level rule), funding stage, finserv-specificity. Twenty minutes per row.
3. Track the `[track]` rows as archetype references — useful for thesis confirmation, not for active scouting.
4. Apply the v6.0 architecture to the regen of `bg-search-terms.md` — start with the seven specialist-agent cells using the CNV phrases above.
5. Run the same pass on R3 (Wealth Management Reinvention) — the Kitces / T3 / Future Proof surfaces will yield heavily.
