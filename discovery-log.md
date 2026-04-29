# Bene Gesserit — Discovery Log

Append-only record of what the system learns each week. Written by the weekly radar task (Fridays) and preference learning task (Sundays).

---

## Full Cycle Run — 2026-04-29 (Cycle 9)

### Phase 0 — Coverage Audit
Pipeline at start: 86 companies. Audit produced this distribution against thesis gap categories:
- **Blind spots (0 companies):** S3 Trade Structuring, S5 Options & Derivatives, S6 Execution, S7 Position Monitoring, S8 Financial Planning, S9 Behavioural Coaching, S10 Post-Trade Analysis. **All 7 specialist-agent blind spots from cycle 8 persist.** Mandatory ≥2 web searches each constraint applied to Phase 4.
- **Underrepresented (1–2 companies):** S2 Portfolio Construction (1: Halia), Dispute Resolution & Agent Liability (2: Mount, Klaimee), Agent Monetisation (1: Paid AI), Agent Payment Rails (2: Nava, Cat-7 entry).
- **Adequately covered (3–9):** S1 Research & Signal (5), Tax Optimisation (6).
- **Well covered (10+):** Personal Agent / S-Front (10), Agent Authentication (11), Agent Orchestration (14), AI Safety (15, Overmind archived), Compliance (15).

### Phase 1 — Learn from Votes
**Supabase unreachable from sandbox for the FIFTH consecutive cycle.** Cached votes.json predates the 61-vote corpus (only 8 votes from March). No new vote data processed. Preferences carried forward from cycle 8 with header timestamp updated to "Cycle 9." This is now the dominant operational issue: the preference model has been frozen at 61 votes since 2026-04-15, while Dave is presumably still voting in the BG Portal.

### Phase 2 — Strategise (Thesis v2.2 → v2.3)
Two changes:
1. Challenge signal #7 (Specialist Agent Desert) annotated with the cycle 7 reframe (search-strategy, not market-supply gap) and the cycle 9 Phase 0 reconfirmation. The desert pattern is now in its third consecutive cycle of confirmation.
2. **NEW Challenge signal #8** added: vote-pipeline bottleneck. 5 cycles unreachable from sandbox; preference model frozen since 2026-04-15. Action item documented in thesis.

### Phase 3 — Arm (Search Terms v4.2 → v4.3)
Carry-forward only. v4.2 vocabulary remains tuned to the persistent gap pattern that Phase 0 reconfirmed. Thesis v2.3 changes are infrastructure (Supabase bottleneck) not search-strategy, so no vocabulary edits required. Change-log entry records the carry-forward decision.

### Phase 4 — Scout
**Categories scanned:**
- Blind-spot mandate: S3, S5, S6, S7, S8, S9, S10 — at least 2 web searches each. Web-search vocabulary results: ZERO seed-stage finserv-specific candidates. Only established players (Public.com, Boldin, FP Alpha, Quod Financial, Overbond) and crypto-only execution startups that fail v4.2 negative filters. **The cycle 7 reframe holds: web-search vocabulary alone cannot crack S3–S10.**
- Accelerator-batch sweeps: YC W26 follow-on cluster from cycle 8 PM card-pending list. **Hit rate from accelerator sweeps was high.**

**Companies found, scored, carded:**

| Slug | Name | Gap | BG Score | Stage |
|---|---|---|---|---|
| autonomous | Autonomous (ATG) | S-Front / S2 / S8 / Tax (multi-fit) | **92** | Pre-Seed $15M (Garry Tan / YC) |
| sponge | Sponge | Cat 7 — Agent Payment Rails | 78 | Pre-Seed / YC W26 |
| orthogonal | Orthogonal | Agent Monetisation | 64 | Pre-Seed / YC W26 |
| maven | Maven | Agent Payment Rails (voice) | 55 | Pre-Seed / YC W26 |

**Specialist agent vs platform infrastructure split:** 1 specialist (Autonomous, multi-fit) : 3 infrastructure (Sponge, Orthogonal, Maven). By absolute count this is still infra-heavy (25%), but by quality-weighted impact Autonomous lands a 92-score multi-fit specialist that touches 4 categories simultaneously — the most impactful single Phase 4 result since the AgentSmyth/Serafis/Kimpton trio in cycle 3.

**Phase 0 effectiveness:**
- S2 Portfolio Construction (underrepresented): Autonomous added (multi-fit). Coverage: 1 → 2.
- S8 Financial Planning (blind spot): Autonomous added (multi-fit). Coverage: 0 → 1 — **first entry in this category.**
- S-Front Personal Financial Agent (well covered): Autonomous added. Coverage: 10 → 11.
- Tax Optimisation (well covered): Autonomous adds tax-aware-individual-stocks angle. Coverage: 6 → 7.
- Agent Payment Rails (underrepresented): Sponge + Maven added. Coverage: 2 → 4.
- Agent Monetisation (underrepresented): Orthogonal added. Coverage: 1 → 2.
- S3, S5, S6, S7, S9, S10 (blind spots): no candidates surfaced. **6 of 7 blind spots survive.**

**Notable signal: Autonomous as the multi-fit archetype.** This is the first time the radar has scored a single company at 92 across 4 distinct gap categories. The 0% advisory fee positioning and Paperspace founders make it both a thesis-validation signal (the regulated-retail-front-door model is real and well-funded) and a competitive-intelligence signal (if Autonomous ships their portfolio + planning + tax engine without exposing it as an agent-callable API, they'll close off a huge chunk of the BG app store's potential supply).

### Phase 5 — Publish
Files pushed to GitHub: index.html, pipeline.html, changelog.html, 2026-04-29.html, config/thesis.md, config/preferences.md, config/bg-search-terms.md (7 total). Pages already enabled (HTTP 409 expected). Live at https://dpowert2.github.io/Bene_Gesserit/. Changelog gained 4 new entries (Pipeline +4, Coverage Audit, Thesis v2.3, Search-Terms v4.3) at the top. SLUG_DATES updated with autonomous/sponge/orthogonal/maven at 2026-04-29.

### Search Term Effectiveness (S1–S10)
- **Web-search S-category queries (this cycle):** 0 thesis-aligned hits. Same as cycle 7 and cycle 8.
- **Accelerator-batch S-category queries:** 1 high-value multi-fit (Autonomous) + 3 adjacent payment/monetisation infrastructure entries. Same yield pattern as cycle 7 (Cohesion → S1) and cycle 8 (Astor → S-Front).
- **Conclusion:** v4.2's promotion of Accelerator-Batch Sweeps to first-class 🔴 EVERY SCAN status was the right call. The vocabulary-driven S-category queries should remain in the file as low-yield rotation but the accelerator path is doing the actual work.

### Recommendations for Next Cycle
1. **Highest-value vote to cast:** Autonomous (92) — the multi-fit specialist agent landing across S-Front + S2 + S8 + Tax simultaneously. A 5★ here would be the strongest specialist-agent vote since AgentSmyth and would unlock validation for 3 thesis categories at once.
2. **Vote-pipeline bottleneck unblock:** highest-priority infrastructure action. Either get the sandbox network egress to Supabase fixed, or write a polling-mode scheduled task in the user's environment that fetches votes via the BG Portal worker URL (which IS reachable from the user's browser) and writes votes.json into the repo every 4 hours. Without this, the preference model continues to drift from reality.
3. **YC W26 follow-on continued surveillance:** Sponge, Orthogonal, Maven are now carded. Watch for their first product traction signals over the next 2–4 weeks. Sponge in particular needs to be tracked against Nava (5★) and Natural (4★) — if any of the three opens an EU office or pivots to a fiat-first finserv positioning, re-score upward.
4. **S3/S5/S6/S7/S9/S10 blind spots:** stop running web-search vocabulary against these. Reallocate that scan budget to deeper accelerator-batch walking — specifically EF, Antler London, Tenity, and Mouro/Santander portfolio reviews, none of which were exhausted this cycle.
5. **Autonomous deep-dive:** treat as a candidate for outreach. The "agent-callable API" question is the thesis-defining question for this company.

---

## Search Terms Update — 2026-04-28

### Context
Targeted refinement of `config/bg-search-terms.md` from v4.1 → v4.2 against the cycle 8 PM (2026-04-27) discovery-log recommendations. Thesis v2.2 itself unchanged since 2026-04-17 — no thesis drift to absorb. The prompt for change came from cycle 8 PM's three concrete recommendations: drop crypto-execution vocabulary from S6, add regulated-securities qualifiers to S2/S5/S6, and confirm vocabulary calibration after the Paygentic find.

### Changes Made
- **S6 Execution decrypto-fied** — every S6 query now carries either `"broker-dealer"`, `"regulated securities"`, `"listed"`, or `"equity"` qualifier; new `-crypto -DeFi -tokenized -"digital assets" -"perpetual swap" -"DEX aggregator" -"on-chain"` category-specific negative filter introduced. Direct response to cycle 8 PM precedent: Sequence Markets ($20M YC W26) and Fere AI surfaced as accelerator-batch false positives because the regulated-securities qualifier was missing.
- **S2 (Portfolio Construction) and S5 (Options & Derivatives)** received the same crypto-exclusion treatment at lower severity — preventive, since the same noise pattern would emerge as accelerator searches scale. New S-Category Specific Negative Filter block added below master filter.
- **Agent Monetisation reframed** — Paygentic ($2M pre-seed, MiddleGame Ventures, ex-Sulu) added as the second confirmed entry alongside Paid AI. Paygentic was sourced 2026-04-27 PM through the exact v4.1 "agent commerce billing finserv" query line — vocabulary is calibrated and producing hits. Section header changed from "Paid AI pattern signal only" to "vocabulary calibrated post-Paygentic." One MiddleGame/Sulu founder-network angle query added.
- **YC W26 follow-on cluster** — Sponge / Maven / Orthogonal added to accelerator-batch YC query block as pending-card candidates per cycle 8 PM recommendation #4.
- **AIUC + Armilla European-presence query** added to Dispute Resolution per cycle 8 PM recommendation #5 — both are reference companies in v4.1; their European entry plans, if any, would warrant pipeline cards.
- **Accelerator-batch action note** expanded with calibration warning: when scoring against S2/S5/S6, auto-skip candidates whose primary venue is a crypto exchange/DEX. Crypto-only execution doesn't translate to a regulated brokerage context.

### New Categories Added
None. v4.2 is a refinement, not a new architecture. The 11-specialist + 7-platform taxonomy is unchanged.

### Categories Removed
None.

### Effectiveness Notes
- **Working well (keep):** v4.1's "third-party agent" qualifier across governance/compliance categories continues to suppress internal-workflow false positives. v4.1's "agent commerce billing finserv" Agent Monetisation query produced Paygentic — strongest evidence to date that the v4.x vocabulary tightening is increasing precision. Accelerator-batch sweeps continue producing detections (Cohesion, Astor, Paygentic adjacencies).
- **Producing noise (now filtered):** S6 Execution queries without regulated-securities qualifier surface crypto/DeFi execution venues. v4.2 negative filter and qualifier should suppress this on next scan.
- **Signal-poor categories (track):** S3 Trade Structuring, S5 Options & Derivatives, S7 Position Monitoring, S8 Financial Planning, S9 Behavioural Coaching, S10 Post-Trade Analysis still showed zero qualifying finds in cycle 8 PM despite mandatory accelerator-batch overrides. v4.2 cleaner queries may help marginally on next scan; if signal-poverty persists for 2+ more cycles in S5/S7/S8/S9/S10 specifically, recommend formally expanding stage criteria to pre-seed / research-stage per thesis challenge signal #7.
- **Validated working hypothesis:** The cycle 8 PM finding that "Paygentic was sourced via the v4.1 query line" is the cleanest evidence that the v4.x search-terms refactor is paying off. The query-to-candidate trace is now documented end-to-end.

### Supabase Feedback
- `bg_thesis_feedback WHERE feedback_type = 'search_terms'` query failed with connection timeout (2 attempts, third consecutive cycle of timeout failures). Same query returned zero rows on 2026-04-17 when reachable. No user feedback specific to search terms has been processed; no signal indicating the timeout hides new feedback.

### Confidence
- **High** on the S6 crypto-exclusion refinement — directly traces to two documented cycle 8 PM false positives (Sequence Markets, Fere AI) and to the explicit cycle 8 PM recommendation. The negative filter is conservative (scoped to S2/S5/S6 only) so collateral damage is bounded.
- **High** on the Paygentic vocabulary calibration — empirically validated by the query-to-candidate trace.
- **Medium** on the S2/S5 preventive crypto exclusion — applies the cycle 8 PM logic to adjacent categories that didn't show the noise pattern this cycle but plausibly will at scale.
- **Medium** on the YC W26 follow-on additions — Sponge/Maven/Orthogonal are mentioned in cycle 8 PM as company-level details too thin for a card; tracking them in search terms is appropriate but the actual cards must wait for next cycle.

---

## 2026-04-27 (PM) — Cycle 8 Master Orchestrator (full-stack, second run of the day)

### Phase 0 — Coverage Audit

Mapped 83 pipeline entries against the thesis taxonomy (11 specialist-agent + 7 platform infrastructure categories). Result:

- **Blind spots (0 companies)** — MANDATORY scan: S3 Trade Structuring, S5 Options & Derivatives, S6 Execution, S7 Position Monitoring, S8 Financial Planning, S9 Behavioural Coaching, S10 Post-Trade Analysis, Agent Monetisation.
- **Underrepresented (1–2)** — elevated to 🔴 CRITICAL: S2 Portfolio Construction & Risk (1, Trata added AM), Dispute Resolution (2), Agent Payment Rails (2).
- **Adequately covered (3–9)**: S1 Research & Signal Intelligence (5), S4 Tax Optimisation (6), S-Front Personal Financial Agent (9).
- **Well covered (10+) — maintenance only**: KYA (11), Agent Orchestration (14), AI Safety (15), Compliance umbrella (15).

The "Compliance" umbrella likely conflates Pre-Trade Compliance and Audit & Explainability with general compliance — treating both as functionally underrepresented for this cycle.

### Phase 1 — Learn

No new vote signal. Supabase unreachable from sandbox; cached votes.json severely stale (8 entries vs the 61 documented). Cycle 7 (AM) already confirmed "no new meaningful votes since cycle 3 (2026-04-15)." Solvapay 0★ remains flagged for re-vote. preferences.md updated with cycle 8 timestamp; no structural changes.

### Phase 2 — Strategise

No thesis changes. Phase 0 specialist-agent desert finding is already documented as Challenge Signal #7 in thesis v2.2. Morning's run had thesis updates absorbed via cycle 7. No drift detected.

### Phase 3 — Arm

Search terms v4.1 carried forward unchanged. The morning's v4.1 already incorporated the cycle 7 discovery-log recommendations (Agent Orchestration 🔴→🟠 demotion, accelerator-batch elevation, regulated-retail-front-door sub-track). Header annotated "(cycle 8 confirms v4.1)".

### Phase 4 — Scout

Searched 8 categories per Phase 0 binding constraints. Findings:

| Category | Result | Decision |
|---|---|---|
| Agent Monetisation | **Paygentic** ($2M pre-seed, MiddleGame Ventures, ex-Sulu founder) | **Pipeline (score 85)** — second entry, gap resolved from "blind spot" to "underrepresented" |
| S6 Execution | Sequence Markets (YC W26, $20M) | Skip — crypto-only, weak fit for regulated brokerage |
| S2/S5 (crypto) | Fere AI (Singapore, $1.3M) | Skip — crypto yield farming, weak fit |
| Audit & Explainability | Laminar (already covered AM) | Already in AM briefing |
| Pre-Trade Compliance | FINRA 2026 Regulatory Oversight Report | Briefing item — regulatory tailwind |
| Dispute Resolution | AIUC + Armilla landscape | Briefing item — consolidation note, both reference companies in v4.1 search terms |
| YC W26 cluster | Sponge / Maven / Orthogonal | Briefing item — follow-on cards next cycle |
| S3, S5, S7, S8, S9, S10 | Zero qualifying finds | Desert remains structural |

**Specialist agent vs infrastructure split this cycle:** 1 specialist-aligned find (Paygentic — Agent Monetisation is technically platform infrastructure but is a specialist-agent enabler); 0 pure specialist-agent finds. The desert holds for S3, S5, S6, S7, S8, S9, S10 even with mandatory accelerator-vocabulary searches.

**Phase 0 effectiveness:** the Agent Monetisation blind spot was resolved (now 2 pipeline companies). Seven other specialist-agent blind spots survived this cycle. The override produced one upgrade out of eight blind spots — modest but non-zero. The accelerator vocabulary returned 2 candidates, both crypto-only — confirming that when the regulated-securities qualifier is missing, accelerator searches default to digital-asset execution.

### Phase 5 — Publish

Pushed 6 files (2026-04-27b.html, index.html, pipeline.html, changelog.html, preferences.md, bg-search-terms.md). Index updated to point to PM run as latest; AM run reframed as Apr 27 AM. Pipeline at 83 entries. Changelog: 4 new entries (1 scoring, 1 system, 1 search-terms confirmed, 1 preferences).

### What I Learned This Cycle

The afternoon master-orchestrator run did exactly what the morning's discovery-log predicted: with no new vote signal and the morning having already absorbed all available learning, the system's contribution had to come from Phase 4 scouting against the structural blind spots. One concrete result (Paygentic), one validating insight (the crypto-only finds confirm that S6 Execution as currently scoped is being polluted by digital-asset noise), and one strategic recommendation queued for next cycle (drop crypto-execution vocabulary; add explicit "regulated securities" qualifiers; pivot S2/S5/S6 alt-sourcing toward academic spinouts and fintech pivots).

The Paygentic find also matters as a test case for the v4.1 "agent commerce billing for finserv" search query — the second-time-founder + MiddleGame backing combination produced a clean 85-score result. This is the strongest argument yet that v4.1's tightened vocabulary is producing higher precision than v3.x. Watch whether Dave's vote validates the score; if Paygentic gets 4–5★, the Agent Monetisation gap and the v4.1 vocabulary are both calibrated.

### Next Cycle Recommendations

1. **Drop crypto-execution vocabulary** from S6 Execution search terms; add `-crypto -DeFi -tokenized -"digital assets"` to negative filter for that category specifically.
2. **Add explicit "regulated securities" / "broker-dealer" qualifiers** to S2/S5/S6 queries.
3. **Re-vote prompt for Solvapay** still pending — surface to Dave on next active session.
4. **Follow-on cards** for Sponge, Maven, Orthogonal once YC W26 company-level details surface (currently too thin for a card).
5. **AIUC and Armilla cards** — both are reference companies in v4.1; the YC W26 cluster signal in this cycle's competitive intelligence suggests the agent-insurance category is now mature enough that pipeline cards are warranted, especially if either company has European entry plans.
6. **Vote-queue surfacing** remains the highest-leverage action — the system has been running calibration loops against the same 61-vote corpus for two weeks. Without new votes, learning is bounded.

---

## Search Terms Update — 2026-04-27

### Context
Refresh of `config/bg-search-terms.md` to v4.1 against thesis v2.2 (unchanged since 2026-04-17) + the 2026-04-27 weekly radar findings. The thesis itself didn't move this cycle — what moved is *how to search for the thesis*. Two specialist-agent detections this week (Cohesion → S1, Astor → S-Front) both surfaced from YC W26 batch monitoring, not web search, contradicting the v4.0 framing of S2–S11 as a structural supply-side desert. The desert is a search-strategy problem, not a market-supply one.

### Changes Made
- **"Third-party agent" qualifier added to governance/compliance/safety queries** — Pre-Trade Compliance, Audit & Explainability, AI Safety, Orchestration, KYA all tightened with `"third-party agent"` / `"external agent"` / `"agent marketplace"` / `"BYOA"` qualifiers. Addresses the radar finding that bare "agentic AI compliance" continues to surface internal-workflow false positives the Hard Filter then rejects — work the system shouldn't have to do. Lema-AI 1★ note ("solutions that mitigate risk of third party agents") is canonical phrasing.
- **Accelerator-Batch Sweeps promoted from rotation to first-class 🔴 EVERY SCAN section** — direct response to YC W26 detection signal. New dedicated query block covers YC (W26/S26/S25), Entrepreneur First, Antler, Techstars/Plug-and-Play/Tenity, and strategic-VC portfolio trackers (Mouro, Ribbit, Anthemis, Speedinvest, LocalGlobe). Action note instructs scoring against 11-specialist + 7-platform taxonomy explicitly and searching by domain term (portfolio/options/execution/tax/planning/behavioural) rather than "agentic" — specialist-agent batch teams typically don't self-describe as agentic.
- **Specialist Agent Desert reframed** — removed "structural supply-side desert" framing; web-search queries kept as low-yield rotation; accelerator-batch sweeps marked as the primary path. This aligns the search-terms file with the radar's challenge to thesis signal #7.
- **"AI safety" generic queries removed** — produced zero thesis-aligned candidates in the 2026-04-20 → 2026-04-27 window. Replaced with finserv-qualified, third-party-qualified versions.
- **"agent observability" tightened** — was producing DevOps noise; now requires "finserv" or "brokerage" co-occurrence. `-"DevOps observability"` and `-"infra observability"` added to master negative filter.

### New Categories Added
- **Regulated-Retail Front-Door** — new sub-track under Personal Financial Agent (S-Front), capturing the Astor archetype: retail consumer + RIA registration + brokerage integration. Distinct from institutional-facing personal agents (Mistral) and from BYOA platforms (eToro). Six dedicated queries; if a second Astor-shaped company surfaces, formally split as its own category.
- **Accelerator-Batch Sweeps** — see above. Promoted from a few queries scattered in v4.0 to a full first-class section (35+ queries across YC, EF, Antler, Techstars, strategic VCs).

### Categories Removed
None. v4.1 is a refinement, not a re-architecture.

### Effectiveness Notes
- **Working well (keep):** Tax Optimisation negative filters (vote-validated; Alomana 5★ confirmed in monitor tier). Geography-specific European queries. site: operators to fintech.global / sifted.eu / eu-startups.com. Accelerator-batch sweeps (NEW — already producing two detections this week).
- **Producing noise (now filtered):** Bare "agentic AI compliance" / "AI agent governance" without third-party qualifier. Bare "AI safety" / "AI agent guardrails" without finserv qualifier. Bare "agent observability" without finserv qualifier (was surfacing DevOps).
- **Signal-poor categories (track):** Pre-Trade Compliance, Audit & Explainability, AI Safety 🔴 every-scan queries returned zero new candidates in 2026-04-20 → 2026-04-27. v4.1 tightening addresses the noise problem; if signal-poverty persists for 2+ more cycles, consider whether the gap is genuinely empty at seed-stage (i.e., a market-supply problem in *these* categories specifically).
- **New experiment:** Okta for AI Agents (April 30 GA) added to Competitive Intelligence track. Tracking whether incumbent identity products compress the window for non-finserv-specific KYA startups.

### Supabase Feedback
- `bg_thesis_feedback WHERE feedback_type = 'search_terms'` query failed with connection timeout (3 attempts). Same query returned zero rows on 2026-04-17. No user feedback specific to search terms has been processed; no signal indicating the timeout hides new feedback.

### Confidence
- **High** on the third-party-qualifier tightening — directly traces to documented near-miss patterns (lema-ai, sycamore, obin-ai, haast, lyzr, basis) and to the radar's explicit recommendation.
- **High** on the accelerator-batch promotion — empirically validated by Cohesion + Astor detections this week.
- **Medium** on the Regulated-Retail Front-Door sub-track — n=1 (Astor) drives the split; will formalise as its own category when a second instance appears.
- **Low** on whether the signal-poor 🔴 categories will improve under v4.1 — the tightening reduces noise but cannot create supply where none exists. Re-evaluate after next radar.

---

## 2026-04-27 — Weekly Radar

### Thesis Drift Detection

**Which gaps are generating the most shortlists vs. passes?** No formal shortlist movement this week — all 100 pipeline companies remain in detected. Cumulative vote signals unchanged: S1 (3/3 = 100%) and Dispute Resolution (2/2 = 100%) lead hit rate; Agent Orchestration (1/10 = 10%) trails after the internal-workflow Hard Filter. The cumulative pattern hasn't shifted because no new votes were cast across the 2026-04-20 → 2026-04-27 window.

**Are any search terms producing noise?** Not visibly this cycle — both new entries (Cohesion → S1, Astor → S-Front) are clean specialist-agent hits. The 🔴 every-scan queries for Pre-Trade Compliance, AI Safety, and Audit & Explainability returned zero new candidates. That's signal-poverty, not noise. Proposed replacement: tighten the orchestration and compliance vocabularies with a strict "third-party agent" qualifier; the term "agentic AI compliance" continues to surface internal-workflow false positives that the Hard Filter then rejects — work the system shouldn't have to do.

**Are there new themes that don't fit existing gaps?** No. Both new entries fit existing categories. The only candidate "new theme" worth tracking is "regulated retail agent front-door" — Astor combines retail consumers + RIA + brokerage integration, which is a different shape than the institutional-facing personal agents. If a second regulated-retail front-door surfaces, split it out as a sub-theme of S-Front. Not yet a category proposal.

**Are any gaps candidates for deprioritisation?** Two:
- **Tax Optimisation:** already at maintenance-only since Alomana 5★. No change recommended.
- **Agent Orchestration:** 23 detected, 1/10 hit rate, Hard Filter rejecting most new candidates. Recommend dropping from 🔴 every-scan to 🟠 monitor for the next cycle and re-allocating that scan budget to YC/Antler/EF batch mining for S2–S9 vocabulary.

**Any signals that challenge or complicate the thesis?** Two:
1. **Okta for AI Agents launches in three days (April 30).** First major incumbent identity product to GA in this category. Doesn't displace Vouched (5★, finserv-specific KYA) but compresses the window for non-finserv-specific agent-auth startups.
2. **Specialist agents are appearing from accelerator batches, not from Crunchbase searches.** Both new entries this week are YC W26. This contradicts the "structural supply-side desert" framing by 50%. Challenge signal #7 in the thesis may need a v2.3 amendment: "S2–S9 are web-search-exhausted but accelerator-discoverable." A dedicated YC W26 batch sweep against S2–S9 vocabulary should be run before next radar.

### What I Learned This Week

The system entered its first observed cooldown period — eight days without new votes, seven weeks without new research papers, and the first cycle since launch where the briefing feed went idle for a full week. That stillness is itself the signal: the calibration sprint that ended on 2026-04-17 created a backlog of unvoted candidates (Capsule Security, Spektr, Veritus, Alinia, plus the new Cohesion and Astor) that the system can't act on without Dave returning to the vote queue. The two new YC W26 detections matter less for what they add to the pipeline and more for what they reveal about sourcing: both arrived through accelerator-batch monitoring rather than the web-search vocabulary, and both fit cleanly into specialist agent categories the "structural supply-side desert" framing said wouldn't have candidates. The desert hypothesis needs to be revised — it's a search-strategy problem, not a market-supply problem. Next cycle's highest-leverage action is a dedicated YC W26 batch sweep against S2–S9 vocabulary, paired with surfacing the vote queue so the calibration loop can restart.

---

## Search Terms Update — 2026-04-17

### Context
Full rebuild of `config/bg-search-terms.md` (created as v4.0) against thesis v2.2. Canonical search-terms file did not previously exist at the config/ path — only a legacy copy in `.claude/worktrees/great-chebyshev/config/search-terms.md` with the original 6-gap v1 structure. This update aligns search terms to the current 11 specialist + 7 platform infrastructure taxonomy.

### Changes Made
- **Priority matrix introduced** — four tiers (🔴 EVERY SCAN / 🟡 HIGH / 🟠 MEDIUM / ⚪ MONITOR) mapped directly to thesis gap-map statuses and scouting priorities.
- **Master negative filter consolidated** — drew from the near-misses file's two Hard Filters (internal workflow, accounting/bookkeeping) and six soft factors (tax filing, KYC/AML-only, AI-vs-agents, Series B+, non-finserv, geography) into a single reusable append block.
- **Composability signal surfaced** — added "MCP server", "agent-callable API", "agent SDK" across categories, reflecting Dave's stated "better if it exposed an agent" preference from serafis/kimpton-ai 5★ notes.
- **Pre-Trade Compliance** elevated to permanent 🔴 top-of-scan with 12 SEC/FINRA/MiFID-specific queries — Hadrius-closest-signal, no seed-stage competitor yet.
- **Audit & Explainability** expanded from first-entry (Alinia) to 12 queries; EU AI Act deadline (Aug 2) and "agent-level, not model-level" signal added.
- **AI Safety & Guardrails** re-elevated from 🟠 MEDIUM to 🔴 EVERY SCAN with new European-focused queries and Mindgard-lesson negative filters ("-model red-teaming, -jailbreak, -LLM alignment research").
- **Dispute Resolution & Agent Liability** promoted to 🟡 HIGH with 12 queries spanning Lloyd's / AIUC-1 / insurance / certification angles.
- **Agent Monetisation** added as first-class 🟡 HIGH category (was not in v1 at all) with Paid-AI-style results-based-billing vocabulary.

### New Categories Added
- **Specialist Agent Desert (S2, S3, S5, S6, S7, S8, S9, S10)** — dedicated query blocks for Portfolio Construction & Risk, Trade Structuring, Options & Derivatives, Execution, Position Monitoring, Financial Planning, Behavioural Coaching, and Post-Trade Analysis. Previous search terms had zero coverage of these. Acknowledges structural market reality (two cycles with zero results despite mandatory Phase 0 overrides) with alt-sourcing queries (Crunchbase, PitchBook, YC/Antler/EF batches, academic spinouts, fintech pivots).
- **Personal Financial Agent (S-Front)** — elevated as a standalone 🟡 HIGH category with explicit European-equivalent framing and FCA-sandbox query.
- **Research & Signal Intelligence — European Replacements** — separate block for 🟡 HIGH scouting of EU equivalents to the validated US trio (AgentSmyth / Serafis / Kimpton AI), responding to Serafis note "Can we also find things like this in the EU?".
- **Pre-Trade Compliance Agent** — first-class 🔴 category (previously absent from the v1 file entirely).
- **Audit & Explainability** — first-class 🔴 category (previously absent).
- **Agent Monetisation** — first-class 🟡 category (previously absent).
- **Dispute Resolution & Agent Liability** — first-class 🟡 category (previously absent).
- **Agent Payment Rails** — first-class 🟠 category (previously buried in Auth).
- **Competitive Intelligence track** — dedicated queries on eToro App Store, Public.com, JPMorgan, Visa/Mastercard, OpenAI acquisitions, Arta Finance (compression signals).

### Categories Removed
- **Generic "Tax Optimisation" broad queries** — narrowed sharply. Moved to ⚪ MONITOR tier (Alomana confirmed match); dropped any query that could surface tax filing or CPA tools; added strict negative filters (`-"tax filing" -"tax return" -"e-filing" -"tax compliance" -"CPA tools" -"accounting"`). Applies the Juno 2★ / TaxDown 2★ lesson.
- **Generic "AI safety / governance" queries without finserv or agent qualifier** — removed; all Safety queries now require either "financial services", "fintech", "broker", "regulated industry", or agent-specific framing. Applies Mindgard 2★ / Goodfire 2★ lesson.
- **Horizontal "AI agent compliance" without sub-domain specificity** — split into Pre-Trade Compliance, Audit & Explainability, and Agent Authentication — each with its own vocabulary.

### Effectiveness Notes
- **Working well (keep):** Tax Optimisation negative filters (vote-validated), geography-specific European queries, site: operators to fintech.global / sifted.eu / eu-startups.com, YC/accelerator queries.
- **Producing noise (now filtered):** Horizontal AI safety terms (commoditised post-acquisition wave); generic "compliance" without SEC/FINRA/MiFID qualifier; Agent Orchestration queries without accounting/RPA negative filters (stacks 2★ lesson).
- **New to monitor:** "Composability / agent-callable API / MCP server" signal — untested at query level but vote-supported. "European-equivalent" framing for S1 categories is a first-time experiment. Alt-sourcing queries for S2–S10 (Crunchbase, PitchBook, Antler, EF, academic spinouts) need evaluation after next scan — web search alone confirmed exhausted.
- **Structural finding carried forward:** S2–S10 web-search strategy will probably continue to yield zero. The alt-sourcing queries are a deliberate pivot; if they also return empty next cycle, the system should formally expand stage criteria to pre-seed / research-stage for specialist agents per thesis challenge signal #7.

### Supabase Feedback
- `bg_thesis_feedback WHERE feedback_type = 'search_terms'` returned zero rows. No user feedback specific to search terms has been logged.

### Confidence
- **High** on the priority-matrix alignment to thesis v2.2 (direct 1:1 mapping to gap-map statuses).
- **High** on the negative-filter consolidation (derived directly from 62-vote corpus, two Hard Filters, six soft factors).
- **Medium** on the Specialist Agent Desert alt-sourcing query set (untested; first attempt at non-web-search sourcing via queries rather than direct database access).
- **Medium** on the "European-equivalent" S1 framing (untested as a standalone search thread).

---

## Thesis Review — 2026-04-17

### Feedback Processed
- `bg_thesis_feedback` table: 1 entry, a 2026-04-14 test row ("Test feedback — verifying table works"). No strategic feedback since last review.

### Vote Signals
- **1 new vote since Cycle 3 (2026-04-15):** solvapay — 0 stars, no note, followup=true, not archived, voted 2026-04-17 09:37 UTC. Inconclusive: a 0-star vote with followup=true looks like an incomplete/accidental submission. Flagged for re-vote rather than treated as signal.
- No other votes cast since the last strategic review (Cycle 3 on 2026-04-15 processed agentsmyth/serafis/kimpton-ai/mount-insurance/klaimee/overmind-archived).

### Thesis Changes
The thesis file on disk was staged at v2.1 but had NOT absorbed Cycle 3 (2026-04-15) learnings. This review rolls them in as v2.2:

- **Vote count + preference header refreshed** — 53 → 61 votes; 17 → 24 upvotes; 28 → 29 downvotes.
- **S1 specialist agents validated** — new Learned Preferences bullet documenting agentsmyth 5★, serafis 5★, kimpton-ai 5★ (3/3, 100% hit rate); first specialist agent category with vote data; scout-to-upvote conversion now 6/6 across two cycles.
- **Dispute Resolution upgraded** — gap map status changed from "❌ Unsolved" to "✅ Mount (5★), Klaimee (4★) — partially addressed." Added bullet to Learned Preferences.
- **AI Safety gap reopened** — Overmind archived ("They aren't interested in participating"); gap map status changed to "⚠️ Gap reopened." Narrative block updated. Priority re-elevated MEDIUM → HIGH.
- **Audit & Explainability gap gets first entry** — Alinia (Barcelona, Mouro/Santander). Gap map status "❌ No finserv startup" → "⚠️ First entry — Alinia (vote pending)."
- **Tax Optimisation gap resolved** — Alomana 5★ moves it from "⚠️ Likely internal build" to "✅ Alomana (5★) — first confirmed match."
- **Agent Authentication gap resolved** — Vouched 5★ is the KYA platform the gap called for; status "❌ No finserv startup" → "✅ Vouched (5★, KYA platform)."
- **Agent Payment Rails added to gap map** — previously only in narrative; now an explicit row with Nava (5★) and Natural (4★).
- **Research & Signal Intelligence added to gap map** — previously only in specialist-agent section; now a first-class row with the S1 trio.
- **"Agent exposure" preference documented** — Dave wants intelligence exposed as agent-callable APIs, not dashboard-only products (serafis, kimpton-ai notes).
- **European preference reinforced** — Serafis note "Can we also find things like this in the EU?" added as explicit signal.
- **eToro App Store added as challenge signal #6** — dual validation/compression finding; major brokerage shipped the thesis model 2026-04-15.
- **Specialist agent desert added as challenge signal #7** — S2–S9 structural supply-side gap; two consecutive cycles with zero new companies despite mandatory Phase 0 overrides. Sourcing strategy and stage criteria may need to change.
- **Versioning table** — added v2.2 entry.

### Confidence
- **Med.** The Cycle 3 signals themselves are high-confidence (all 5 new votes had clear notes and followed the scout→vote pattern established in Cycle 2). Confidence is capped at medium only because no *additional* votes or feedback have arrived in the 48 hours since Cycle 3 — this update is mostly a belated file-sync of changes already reasoned about in the discovery log.

### Next-Review Priorities
1. Re-solicit a vote on **solvapay** — current 0-star entry looks accidental.
2. Watch for first vote on **Alinia** (Audit & Explainability) — will calibrate whether "backend compliance controllers for agents" is thesis-aligned.
3. Continue S2–S9 alt-sourcing (accelerator batches, academic spinouts, fintech pivots) — web search is exhausted.
4. Scout AI Safety replacement for Overmind — agent-specific, finserv-focused, European preferred.

---

2026-03-11: 6 new signals found. Searches used: "AI guardrails fintech safety startup 2026", "personal AI wealth advisor startup 2026 seed funding", "agentic AI compliance fintech startup 2026 funding", "AI agent authentication startup 2026 funding", "European AI agent startup funding 2026", "AI tax loss harvesting startup 2026". Signals: Bretton AI $75M Series B (Compliance), Avantos $25M Series A (Personal Agent), Rogo $75M Series C (Agent Orchestration), Overmind €2.3M seed (Agent Auth & Security), TaxDown €4M BBVA Spark (Tax Optimisation), Escape $18M Series A (AI Safety & Guardrails).
2026-03-11: Portal published. Current briefing: 2026-03-11. Archived: 2026-03-10 (displayed in archive tab), 2026-03-09 (in briefings/archive/).

---

## 2026-03-13 — Weekly Radar (Inaugural)

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting yet — all 21 companies in detected. Vote data gives early signal: Agent Authentication & Security and AI Safety & Guardrails have the strongest early upvote concentration (3 of 4 upvotes). Tax Optimisation and Agent Orchestration are generating downvotes with specific qualification notes rather than full passes.

Are any search terms producing noise? Yes. (1) Tax Optimisation searches are surfacing tax filing companies rather than portfolio-integrated tax intelligence companies. Proposed refined terms: "tax-loss harvesting," "tax-aware rebalancing," "capital gains optimisation," "after-tax portfolio returns" — exclude "tax filing," "tax return," "e-filing." (2) Agent Orchestration searches may be surfacing generic automation (e.g., accounting automation). Append "financial services" or "agentic workflow financial" to searches.

Are there new themes that don't fit existing gaps? Two emerging themes: (1) Agent Payment Rails — forming around autonomous agent payments (Sapiom, Google AP2, Coinbase x402). Currently a sub-theme of Agent Authentication & Security; promote to standalone gap if 3+ more companies emerge. (2) Regulatory Technology for AI Governance — AI-Act-style transparency and governance tooling, distinct from financial crime compliance. Proposed as a new search thread, not yet a gap category.

Are any gaps candidates for deprioritisation? No. Tax Optimisation needs qualification refinement, not removal.

Any signals that challenge or complicate the thesis? (1) Salesforce Agentforce at $1.8B ARR — enterprise agentic AI adoption faster than expected; window to establish regulated infrastructure layer may compress from 3–4 years to 18–24 months. (2) Google AP2 / Coinbase x402 — agent payment rails may be commoditised by hyperscalers; the compliance overlay remains the differentiated opportunity.

### What I Learned This Week

This inaugural week established the core thesis signal clearly: the strongest early preference is for the infrastructure trust layer — Agent Authentication & Security and AI Safety & Guardrails — exactly where the thesis centres. Dave's 5★ votes for Overmind and t54 Labs confirm the search is for regulated plumbing beneath agents, not any agentic AI company. The two near-misses — Stacks and TaxDown — reveal a precision failure in sub-domain matching: the system found the right category but not the right flavour within it. The tax gap is underserved; the ideal company (portfolio-integrated, intelligent, not filing-focused) has not yet surfaced. Regulatory acceleration signals from FINRA and the EU AI Act, combined with the AP2 vs. x402 standards battle, mean the compliance overlay on agent payment infrastructure is the emerging thesis-aligned white space to watch.

---

## Preference Learning — 2026-03-15
Total votes: 8 (4 up, 2 down, 2 neutral) | New near misses: 2 (Stacks, TaxDown — first formal logging) | New soft factors: none (sub-domain blind spot at 1 occurrence each; threshold is 3) | Weight changes: none (8 votes; threshold is 50) | Key insight: The trust infrastructure gaps (Agent Authentication & Security and AI Safety & Guardrails) generated 4/4 upvotes at 100%, while both downvotes trace to the same intra-category sub-domain mismatch pattern — correct gap, wrong product flavour | Confidence: med

---

## 2026-03-20 — Weekly Radar

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting or passing has occurred — all 30 companies remain in detected. Vote data continues to provide the primary signal. Agent Authentication & Security (2 of 4 upvotes at 5★ each) and AI Safety & Guardrails (2 of 4 upvotes including 1 at 5★ and 1 at 4★) dominate the upvote count. Tax Optimisation and Agent Orchestration each carry one downvote. Compliance has 1 neutral vote; both gaps with neutral signals suggest sub-domain calibration is needed rather than gap removal.

Are any search terms producing noise? Tax Optimisation refined terms are validated by April's emergence. Continue: "tax-loss harvesting," "tax-aware rebalancing," "capital gains optimisation," "after-tax portfolio returns," "embedded tax platform wealth management." Exclude: "tax filing," "tax return," "e-filing." Agent Orchestration: maintain "financial services" qualifier. AI Safety & Guardrails: current searches working well; add "AI control plane enterprise," "agentic runtime monitoring," "AI detection and response."

Are there new themes that don't fit existing gaps? (1) Agent Payment Rails — significantly strengthened by Mastercard (Verifiable Intent + live Santander transaction), Visa (Agentic Ready + Crypto Labs CLI), Google (AP2), Coinbase (x402). Maintain as sub-theme of Agent Auth; promote to standalone gap if 2+ additional startups emerge. (2) AI Interpretability — Goodfire's $1.25B unicorn + EU AI Act August deadline. Monitor as sub-theme. (3) Regulatory Technology for AI Governance — US Treasury FS AI RMF, FCA SM&CR personal liability, FINRA agent-specific guidance all landed this week. Upgrade from search thread to active gap candidate.

Are any gaps candidates for deprioritisation? No. All six gaps received either new companies or significant market validation this week.

Any signals that challenge or complicate the thesis? (1) Nvidia NemoClaw open-sources agent security stack at GTC 2026 — narrows differentiation; thesis must be sharper about what "regulated" adds beyond open-source security. (2) Payment networks (Mastercard, Visa, Google) claiming agentic commerce infrastructure — startup opportunity is the compliance/governance layer atop whichever payment standard wins. (3) FCA SM&CR personal liability for AI decisions — validates demand but means partner infrastructure must be demonstrably liability-reducing.

### What I Learned This Week

The single most important insight from this week is that the AI Safety & Guardrails gap has become a full-blown infrastructure category practically overnight. Five new companies raised a combined ~$313M, Goodfire achieved unicorn status on interpretability alone, and Nvidia validated the space by open-sourcing NemoClaw — which simultaneously proves the market and compresses the differentiation window. The thesis must now be sharper about what the regulated infrastructure layer provides that open-source security stacks and horizontal governance platforms do not: fiduciary accountability chains, regulatory reporting primitives, and audit-grade provenance that satisfies FINRA, FCA, and EU AI Act requirements specifically. Meanwhile, the payment networks' coordinated sprint into agentic commerce means the identity and authorisation layer for agents is being actively claimed by the most trusted brands in financial services. The startup opportunity is not to compete with Visa and Mastercard on payment identity, but to build the compliance and governance layer that sits on top of whichever payment standard wins. April's arrival finally gives the Tax Optimisation gap a candidate that matches the stated preference — embedded, advisor-workflow-integrated, and backed by QED — and getting a vote on April should be a priority this week.

---

## Preference Learning — 2026-03-23
Total votes: 8 (4 up, 2 down, 2 neutral) | New near misses: 0 | New soft factors: none | Weight changes: none (8 votes; threshold is 50) | Key insight: No new votes were cast since the 2026-03-15 cycle — 22 of 30 pipeline companies remain unvoted; the system is data-starved and the highest-value action this week is voting on April (Tax Optimisation), Steward (Compliance), Manifold and Onyx Security (AI Safety & Guardrails) to generate the calibration data needed to distinguish preferred sub-domains across the four gaps with no positive signals yet | Confidence: low

---

## Preference Learning — 2026-03-29
Total votes: 8 (4 up, 2 down, 2 neutral) | New near misses: 0 | New soft factors: none | Weight changes: none (8 votes; threshold is 50) | Key insight: No new votes cast for the second consecutive learning cycle — pipeline has grown to 40 companies (80% unvoted), the system is increasingly data-starved relative to pipeline size; radar context updated with KYA/Agent Payment Rails sub-theme crystallisation, RSAC 2026 validation of agentic security, and Mastercard Virtual C-Suite incumbent pressure on Personal Agent gap, but none of these are applied to scoring until confirmed by votes | Confidence: low

---

## 2026-03-29 — Weekly Radar

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting or passing has occurred — all 40 companies remain in detected. The pipeline grew by 10 companies this week (30→40), the largest single-week intake to date. Vote data remains the only calibration signal. Agent Authentication & Security and AI Safety & Guardrails have 100% upvote rates across all votes cast (4 of 4 combined). Tax Optimisation and Agent Orchestration each have one downvote and no upvotes. Compliance has one neutral. Personal Agent has zero votes. The un-voted proportion has grown to 32/40 (80%) — the model is increasingly data-starved relative to pipeline size.

Are any search terms producing noise? Yes. (1) Agent Orchestration: "agentic AI operating system" without a financial services qualifier is surfacing Eragon (score 55, no finserv specificity) — add "financial services" qualifier or remove the standalone term. (2) Compliance: "AI compliance fintech" may be surfacing India-first geographic markets (Zoven) outside the primary thesis geography — add "Europe" or "US" qualifier if India-specific entries continue. (3) Agent Authentication & Security: add "KYA Know Your Agent" and "agent identity compliance financial services" to capture the emerging KYA credentialing sub-theme. Tax Optimisation and AI Safety & Guardrails searches are performing well — no changes recommended.

Are there new themes that don't fit existing gaps? (1) Agent Payment Rails — elevated to formal gap candidate. Crossmint and InFlow are first two pure-play pipeline entries. Promote to standalone gap if any one of: a third startup enters the pipeline, a regulatory body formally references agent payment standards, or Crossmint/InFlow receives a positive vote. (2) Institution-Native Agentic Workforce — Obin AI's inside-the-institution governance model is architecturally distinct from personal agent apps and may belong in Agent Orchestration or a new "Regulated Agentic Workforce" gap. Assess before next vote. (3) Human-Agent Boundary Security — imper.ai and the IBM/Auth0/Yubico framework both address the human-to-agent identity delegation problem as a distinct attack surface; track as a formal sub-theme within Agent Authentication & Security.

Are any gaps candidates for deprioritisation? No. All six gaps received new companies or major market validation. Mastercard's Virtual C-Suite weakens the front-door Personal Agent gap rationale, but this strengthens rather than removes the regulated infrastructure sub-thesis (agents need compliant plumbing even if Mastercard owns the front door).

Any signals that challenge or complicate the thesis? (1) Mastercard Virtual C-Suite — positions Mastercard as agentic intelligence layer for SME finance using 175B annual transaction signals; if incumbents own the front-door agent, startup opportunity in Personal Agent narrows. (2) Harvey's $11B valuation — legal-first AI reaching finserv compliance via contract review and regulatory diligence may compete with finserv-native compliance infrastructure at scale. (3) ABA/BPI NIST standards push — voluntary governance standards for bank-deployed agents are being written now; infrastructure that lacks early certification will face headwinds when standards solidify. (4) Zero new academic papers for third consecutive week — market has moved into deployment mode; governance and compliance primitives in production environments are now the analytical frontier.

### What I Learned This Week

The most important insight this week is that the thesis is being validated from both ends simultaneously — and the validation is accelerating faster than the pipeline can absorb. From the top, incumbents (Mastercard, JPMorgan, Manulife, Visa) are publicly committing to agentic commerce infrastructure with explicit governance-first framing, confirming that regulated institutions will pay for the infrastructure layer the thesis describes. From the bottom, the startup ecosystem produced ten new pipeline entries in a single week — its largest intake — concentrated in exactly the gaps (Agent Auth, AI Safety & Guardrails) where the thesis has the strongest signal. The clearest new insight is the emergence of KYA (Know Your Agent) as vocabulary and concept: it positions the agent credentialing problem as structurally equivalent to KYC for humans, which means regulators will eventually mandate it, whoever defines the standard earliest has a durable advantage, and the compliance layer atop any agentic payment standard is the defensible infrastructure play. The week's most uncomfortable signal is Mastercard's Virtual C-Suite — which suggests the "front door" personal finance agent may be claimed by incumbents with proprietary data moats before startups can establish it, making the regulated plumbing beneath those incumbent agents the more durable opportunity. Finally, the complete absence of new academic papers for the third consecutive week signals that the market has moved into deployment mode: the analytical challenge is no longer understanding what is theoretically possible but identifying which governance and compliance primitives become hard requirements in production environments — and which startups are building those primitives with finserv-grade quality.

---

## 2026-04-03 — Weekly Radar

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting or passing has occurred — all 61 companies remain in detected. Vote data remains the only calibration signal with 8 votes cast and 53 pending (87% unvoted). Agent Authentication & Security and AI Safety & Guardrails maintain 100% upvote rates across all votes cast (4 of 4 combined, all at 4–5★). Tax Optimisation and Agent Orchestration each have one downvote and no upvotes. Compliance has one neutral (Bretton AI, 3★). Personal Agent has no votes at all. The data starvation is now critical — pipeline grew 53% in one week (40→61) while votes remain frozen at 8.

Are any search terms producing noise? Propose replacements. (1) AI Safety & Guardrails is producing very high volume (6 new companies in one week). Horizontal offensive security companies (XBOW, RunSybil, Novee) lack finserv specificity — consider narrowing to "AI safety financial services," "agent guardrails regulated industry," "AI audit trail banking." (2) Agent Orchestration: "trusted agent operating system" is a productive new term given Sycamore and Notch; add "agent OS governance compliance." (3) Tax Optimisation: no entries for three weeks — consider broadening to "AI wealth management tax," "robo-advisor tax optimisation," "embedded tax API fintech." (4) Agent Auth: add "AI agent PAM privileged access" and continue "KYA Know Your Agent" and "agent identity NIST standards."

Are there new themes that don't fit existing gaps? (1) Agent Payment Rails — promotion threshold met with Natural as third pure-play entry joining Crossmint and InFlow. Recommend formal promotion to seventh gap category. (2) Trusted Agent OS — Sycamore ($65M) and Notch ($30M) position governance as a platform feature; track as sub-theme within Agent Orchestration, escalate to competitive threat if either announces finserv-specific compliance module. (3) AI Training Data Provenance — Aether DataHub partnership with OORT; track as emerging infrastructure signal, not yet gap candidate.

Are any gaps candidates for deprioritisation? No. All six gaps received new companies or significant market/regulatory validation.

Any signals that challenge or complicate the thesis? (1) AI Safety acquisition wave — OpenAI/Promptfoo, SentinelOne/Prompt Security, Check Point/Lakera — horizontal safety being absorbed into platforms, compressing standalone opportunity window. (2) Sycamore's $65M "trusted OS" — governance could become a platform feature rather than standalone infrastructure. (3) Regulatory friction as headwind — Center for Data Innovation warns human-designed regulation could handicap agentic commerce and push agents to less-regulated channels. (4) Pipeline velocity vs. voting velocity — 21 new companies against 0 votes; model operating increasingly blind. (5) Mastercard Universal Commerce Protocol with Google and Microsoft — incumbents defining standards before regulators.

### What I Learned This Week

The most important insight this week is that the pipeline is now growing faster than I can evaluate it, and this velocity gap is itself the most analytically significant signal. Twenty-one new companies in a single week — more than double the previous record — with combined funding exceeding $700M across the new entries alone. The market is not gradually building toward the regulated infrastructure thesis; it is arriving all at once. The second insight is that the thesis is being simultaneously validated and compressed: NIST is formally drafting agent identity standards with bank input, the EU AI Act high-risk deadline is four months away, MAS Singapore published the most advanced agentic risk toolkit, and Goldman Sachs is running Claude-powered agents in production — yet the acquisition wave (Promptfoo, Prompt Security, Lakera) is collapsing the horizontal AI safety layer into platform incumbents faster than anyone expected. The surviving opportunity is narrowing to precisely what the thesis predicted: the regulated compliance overlay that platform vendors cannot build because it requires deep domain knowledge of FINRA, FCA, EU AI Act, and DORA. The third insight is uncomfortable: Sycamore's $65M seed for a "trusted agent OS" suggests that governance could become a feature of the orchestration platform rather than an independent infrastructure layer. If that happens, the thesis still holds — but the target shifts from standalone infrastructure companies to the finserv compliance modules that those platforms will need to buy rather than build. The week's most uncomfortable silence remains the zero votes cast against a pipeline that is now 87% untested.

---

## Preference Learning — 2026-04-05
Total votes: 8 (4 up, 2 down, 2 neutral) | New near misses: 0 | New soft factors: none | Weight changes: none (8 votes; threshold is 50) | Key insight: Zero new votes for the fourth consecutive learning cycle — pipeline has expanded to 61 companies (87% unvoted) while the vote corpus is frozen at 8; the model has no positive calibration data for 4 of 6 gaps and the KYA / Agent Payment Rails sub-themes have zero vote data despite meeting the gap promotion threshold; the most impactful single action available remains voting, with April, Obin AI, Crossmint, Sycamore, and Unique AI as the highest-value candidates | Confidence: low

---

## 2026-04-07 — Full Scan (All Categories, Expanded Search Terms)

### Run Context
First full scan using the April 2026 revised search terms (~160 queries across 12 categories + 2 tracks, up from ~50 queries across 6 categories). All categories ran regardless of frequency schedule to establish baseline for expanded terms.

### Key Findings
Twelve new companies added to the pipeline in a single scan — the highest intake since the 21-company week of April 3. The expansion of search terms from 6 to 12 gap categories immediately surfaced companies in previously uncovered areas: Agent Memory (Mem0, Cognee), Dispute Resolution & Agent Liability (Armilla, AIUC), Agent Monetisation (Paid.ai), and Agentic Commerce (Circuit & Chisel). The thesis is validated at broader scope — infrastructure demand exists across all 12 categories, not just the original 6.

### Category-Level Observations
- **Agent Authentication & Security (3 new):** Runlayer (MCP gateway), Aembit (workload IAM), Astrix Security (NHI, Anthropic co-investor). The NHI market continues its funding explosion. Runlayer is the first pure MCP authentication play in the pipeline.
- **Pre-Trade Compliance (1 new):** Hadrius (YC, SEC/FINRA native). Previously undiscovered because prior search terms focused too broadly on "compliance" without SEC/FINRA specificity.
- **Audit & Explainability (1 new):** ValidMind (AI governance for finserv). Directly addresses the August 2 EU AI Act deadline.
- **Agent Memory & Context (2 new):** Mem0 ($24.5M, AWS exclusive) and Cognee (€7.5M, Berlin). This is a completely new gap category for the pipeline — both companies surfaced from the new Category 8 search terms.
- **Agent Orchestration (1 new):** Pluvo ($5M seed, finserv-specific). The orchestration gap continues to be difficult to fill — most companies are horizontal. Pluvo is the most finserv-focused orchestration play found to date.
- **Agent Payment Rails (2 new):** Circuit & Chisel ($19.2M, ATXP protocol) and the Machine Payments Protocol (Stripe+Tempo). Four payment protocols now live or near-live (MPP, TAP, AP2, ATXP). Standardisation is the next battle.
- **Dispute Resolution & Liability (2 new):** Armilla (Lloyds-backed AI insurance) and AIUC (agent certification). Entirely new category — insurance and certification for autonomous agents. This has potential to become foundational compliance infrastructure.
- **Agent Monetisation (1 new):** Paid.ai ($33M, results-based billing). Confirms service-as-software billing is a real infrastructure category.

### Standards & Regulatory Signals
- IETF published draft-klrc-aiagent-auth (March 30) — first formal internet standard for agent identity
- MCP 2026 roadmap released under Linux Foundation governance
- EU AI Act full enforcement date confirmed: August 2, 2026
- DORA active enforcement phase live since January 2026
- PSD3/FiDA political agreement reached
- Visa Agentic Ready Programme live in Europe with 8 major banks

### Research Signal
Five new papers identified, including formal compliance verification for agents (Lean 4 theorem proving), agent safety degradation research (ClawSafety), and a new cross-protocol identity standard (AIP) that bridges MCP and A2A.

### Search Term Effectiveness
The expanded search terms dramatically improved coverage:
- New Category 8 (Memory) terms surfaced 2 companies on first run
- New Category 10 (Dispute/Liability) terms surfaced 2 companies
- New Category 12 (Monetisation) terms surfaced 1 company
- SEC/FINRA-specific compliance terms surfaced Hadrius (missed by prior generic terms)
- Negative filters for tax filing/bookkeeping worked correctly — TaxGPT and Deduction were detected but correctly excluded from thesis-relevant results

### Pipeline State
- Previous: 67 companies
- Added: 12
- Current: 79 companies
- Unvoted: ~71/79 (90%)
- Vote starvation warning: FIFTH consecutive cycle with zero new votes

### Recommendations
1. **Vote on new auth companies:** Runlayer and Aembit are both pure infrastructure plays that would provide calibration for the Auth gap
2. **Vote on Armilla or AIUC:** First entries in the Liability gap — votes would establish scoring baseline for the entire category
3. **Consider promoting Agent Payment Rails to standalone gap:** Now 5 companies (Natural, Crossmint, InFlow, Circuit & Chisel, + Paid.ai adjacent). Threshold exceeded.
4. **Consider promoting Agent Memory to standalone gap:** Mem0 and Cognee are first dedicated entries. AWS partnership with Mem0 suggests market maturity.

---

## Preference Learning — 2026-04-12
Total votes: 8 (4 up, 2 down, 2 neutral) | New near misses: 0 | New soft factors: none (sub-domain blind spot at 1 occurrence each; threshold is 3; Compliance dual-failure-mode pattern identified but unconfirmed) | Weight changes: none (8 votes; threshold is 50) | Key insight: Zero new votes for the fifth consecutive learning cycle — the pipeline has expanded to 86 companies across 12 gap categories while the vote corpus remains frozen at 8; the Compliance gap's dual neutral pattern (Bretton AI: wrong sub-domain; Sphinx: undifferentiated execution) reveals two distinct failure modes requiring different corrective signals, and Juno's entry into Tax Optimisation creates the first natural test of the tax filing penalty's scope | Confidence: low

---

## 2026-04-14 — Full Cycle (Phases 1–6)

### Run Context
First full end-to-end cycle since system launch. Dave cast 45 votes in a single session, ending five consecutive data-starved cycles. Vote corpus jumped from 8 to 53. Preference model rebuilt from the ground up. All 6 phases executed: LEARN → STRATEGISE → ARM → SCOUT → PUBLISH → REPORT.

### Phase 1: LEARN
- 45 new votes processed (8 → 53 total)
- 17 upvotes (4–5★): keycard, resistant-ai, manifold, complyance, ralio (all 5★); unique-ai, natural, bank-of-bots, norm-ai, aether-datahub, venice-security, imper-ai (4★)
- 28 downvotes (1–2★): 16 explicitly rejected as "internal workflow"
- 22 new near-misses (score > 60, stars ≤ 2) — highest ever
- 2 new Hard Filters created: Internal Workflow (–50pts), Accounting/CFO (–50pts)
- 7 new soft factors: Series B+ (–15pts), AI-not-agents (–15pts), KYC/AML (–15pts), Non-finserv (–10pts)
- 12 companies flagged for followup

### Phase 2: STRATEGISE
- Thesis updated v2.0 → v2.1
- Learned Preferences section rebuilt from 53 votes
- Sycamore competitive threat resolved (1★ — "internal workflow stuff")
- AI safety commoditisation added as challenge signal
- Key insight: Internal/external boundary is THE primary scoring dimension (16/28 downvotes cite it)

### Phase 3: ARM
- Search terms updated v1 → v2
- "External/third-party agent" qualifiers added across all categories
- Stage qualifiers (seed/Series A) added to most searches
- Category 5 shifted from "AI safety" to "agentic security" vocabulary
- CRITICAL negative filters added to Category 4 (Orchestration) — produced 6+ false positives in vote data

### Phase 4: SCOUT — 4 New Companies
1. **Nava** (Score 85) — Escrow + intent verification + dispute resolution for AI agent transactions. Seed $8.3M (Polychain, Archetype). Gap: Agent Payment Rails.
2. **Vouched** (Score 83) — Know Your Agent (KYA) identity platform with MCP-Identity. Series A $17M. Gap: Agent Authentication & Identity.
3. **Trent AI** (Score 78) — Multi-agent security via specialised security agents. Seed €11M (LocalGlobe). Gap: AI Safety & Guardrails.
4. **Alomana** (Score 72) — Autonomous portfolio rebalancing + tax-loss harvesting. Seed €4M. Gap: Tax Optimisation. HIGH UNCERTAINTY on internal/external boundary.

### Competitive Intelligence
- OpenAI acquires Hiro Finance — first frontier model provider M&A in finserv AI
- Ralio additional £1.8M pre-seed (total £2.5M+) for agent payment rails
- Geordie AI wins RSAC 2026 Innovation Sandbox as "Most Innovative Startup"

### Thesis Drift Observations
1. Internal/external boundary is now THE primary scoring dimension (16/28 downvotes)
2. Trust infrastructure thesis stronger than ever — Agent Auth (100%) and AI Safety (100%) upvote rates
3. Compliance gap resolved — Complyance 5★ proves differentiated compliance is thesis-aligned
4. Stage filter crystallised — Series B = "too late"; Seed to early Series A only
5. AI ≠ Agents is critical — model-level safety companies fail even in the right gap
6. Tax Optimisation remains unfilled — Alomana is first potential match but internal/external risk high

### Pipeline State
- Previous: ~81 companies
- Added: 4 (nava, trent-ai, vouched, alomana) + 2 from morning radar (ralio, basis)
- Current: ~85 companies tracked
- Voted: 53/85 (62%) — up from 9% pre-cycle

### What I Learned This Cycle
The most important insight is that Dave's thesis is far more precisely defined than the model previously captured. The overwhelming signal from 45 votes is a single, decisive dimension: external vs. internal. Sixteen companies were rejected explicitly as internal workflow tools — not because they were bad companies, but because they don't build infrastructure for THIRD-PARTY agents in a regulated marketplace. The trust infrastructure gaps (Agent Auth, AI Safety) maintain 100% upvote rates across 11 total votes with zero exceptions. The scoring model's biggest blind spot — failing to detect the internal/external boundary — has been corrected with a Hard Filter. The second insight is that stage matters more than previously modelled: Series B = "too late" (Linx-Security 94 score → 2★). The third insight is that "AI safety" and "agent safety" are categorically different things in Dave's framework — Mindgard's 2★ with the two-word note "AI, not agents" is the most economical preference statement in the corpus. This cycle transforms the system from a broad scanner into a precision instrument calibrated to Dave's actual investment thesis.

---

## 2026-04-15 — Full Cycle #3 (Phases 0–6)

### Run Context
Third full end-to-end cycle. Second cycle with Phase 0 (Coverage Audit). 5 new votes processed (agentsmyth 5★, serafis 5★, kimpton-ai 5★, mount-insurance 5★, overmind 1★). 1 new company scouted (Alinia). Specialist agent vs infrastructure split: 0% specialist agents (0/1), 100% infrastructure (1/1). Major competitive intelligence signal: eToro launches App Store — exactly the thesis model.

### Phase 0: Coverage Audit
- **8 specialist agent categories (S2–S9) remain at ZERO pipeline coverage** — confirmed blind spots for third consecutive cycle
- S1 (Research & Signal Intelligence) graduated from blind spot to well-covered (3 companies, all 5★)
- **3 platform infrastructure categories underrepresented:** Audit & Explainability (0), Agent Monetisation (0), Dispute Resolution (2 but partially addressed)
- AI Safety reclassified: Overmind declined participation → gap reopened despite 2 remaining candidates (Manifold 5★, Kai 4★)
- Well-covered categories unchanged: Orchestration (14), Safety (14), Compliance (14), Auth (11)
- Mandatory scan overrides applied to all 8 specialist agent blind spots + Audit & Explainability + Agent Monetisation
- Coverage audit binding constraints: prioritise S2–S9 scans, de-prioritise well-covered infrastructure categories

### Phase 1: LEARN
- 5 new votes processed (56 → 61 total)
- 24 upvotes, 8 neutral, 29 downvotes
- New votes: agentsmyth 5★ (S1), serafis 5★ (S1), kimpton-ai 5★ (S1), mount-insurance 5★ (Dispute Resolution), overmind 1★ (AI Safety)
- All 5 are companies from previous cycle's Phase 4 scout — 100% of scout finds voted
- S1 (Research & Signal Intelligence) now has 3 votes, ALL 5★ — 100% hit rate, highest in the system
- Overmind 1★ triggered significant cascading changes: declined participation → strongest AI Safety candidate lost
- Dispute Resolution partially validated: Mount 5★ confirms thesis alignment
- Exposure-normalised metrics: S1 hit rate 100% (3/3), Dispute Resolution 100% (1/1), Agent Auth 64%, AI Safety 43%
- No new near-misses (4 votes are 5★, 1 is 1★)

### Phase 2: STRATEGISE
- Thesis v3.0 → v3.3 (three incremental updates in one cycle)
- S1 status upgraded: "Not scouted — highest priority" → "3 candidates — AgentSmyth 5★, Serafis 5★, Kimpton AI 5★"
- AI Safety status downgraded: "Overmind (strong candidate)" → "Overmind declined participation — gap reopened"
- Dispute Resolution upgraded: "Gap (embryonic)" → "Partially addressed — Mount 5★, Klaimee 4★"
- AI Safety priority re-elevated from MEDIUM to HIGH
- Pipeline coverage updated for Overmind: ACTIVE → ARCHIVED
- Vote count updated to 61

### Phase 3: ARM
- Search terms v3.1 → v3.2
- AI Safety (Category 5) priority re-elevated from 🟠 MEDIUM to 🟡 HIGH
- Rationale: Overmind declined participation, reopening the gap despite Manifold and Kai remaining
- Scan priority matrix updated: Safety moved from Medium to High row
- ~252 queries maintained across 21 categories + 2 tracks

### Phase 4: SCOUT — 1 New Company + Competitive Intelligence
**New company:**
1. **Alinia** (Score 83) — Audit & Explainability. Seed $7.5M. Mouro Capital (Santander). Backend compliance controller for high-stake AI agents. Barcelona, Spain. European founder. FIRST ENTRY IN AUDIT & EXPLAINABILITY.

**Competitive Intelligence (major signal):**
- **eToro launches App Store** — third-party developer marketplace with APIs, MCP server, revenue sharing. This is EXACTLY the "app store for financial agents" model described in the BG thesis. Validates the thesis but compresses the competitive timeline significantly.
- Public.com Agents continue rolling out — "world's first Agentic Brokerage" positioning maintained
- OpenAI/Hiro acquisition continues reshaping the landscape

**Specialist Agent Desert (structural finding):**
- Intensive searches across all 8 blind spot categories (S2–S9) produced ZERO new thesis-matching startups
- Categories searched: Portfolio Construction & Risk, Trade Structuring, Options & Derivatives, Execution & Routing, Position Monitoring, Financial Planning & Advice, Behavioural Coaching, Post-Trade & Settlement
- This is a supply-side problem, not a search-terms problem — there are very few seed-stage startups building agent-callable APIs for these specialist functions
- Implication: the specialist agent layer of the app store thesis may require longer time horizons or different sourcing strategies (incubation, academic spinouts, fintech pivots)

### Specialist Agent vs Infrastructure Split
- New companies this cycle: 0 specialist agents (0%), 1 infrastructure (100%)
- Cumulative pipeline: specialist agent representation remains critically low — only S1 has coverage (3 companies)
- S2–S9 have been searched in two consecutive cycles with zero results — this is now a confirmed structural gap in the market, not a scouting failure
- The app store thesis requires both infrastructure AND specialist agents — the infrastructure layer is well-scouted but the apps themselves barely exist at seed stage

### Phase 0 Effectiveness
- S2–S9 (all specialist agent categories): MANDATORY scan overrides → 0 companies found ❌ (second consecutive cycle)
- Audit & Explainability: MANDATORY scan override → 1 company found (Alinia) ✅
- Agent Monetisation: Searched but no new entries ❌
- AI Safety: Re-elevated to HIGH but no new companies found beyond existing pipeline ❌
- **Conclusion:** Phase 0 overrides are effective for categories where startups exist (Audit & Explainability this cycle, S1 and Dispute Resolution last cycle). The S2–S9 desert is confirmed as a market reality. Future cycles should shift S2–S9 strategy from broad web search to targeted approaches: startup database mining, accelerator batch reviews, academic lab spinout tracking, and monitoring for fintech companies pivoting to agent-callable APIs.

### Thesis Drift Observations
1. **S1 fully validated** — 3/3 votes at 5★ makes Research & Signal Intelligence the highest-conviction specialist agent category. The internal/external boundary concern from Cycle #2 was resolved: institutional-serving research agents ARE thesis-aligned.
2. **Overmind decline is a significant loss** — strongest AI Safety candidate exiting reopens a critical infrastructure gap. Manifold and Kai provide partial coverage but the category needs fresh scouting.
3. **eToro App Store is the most important competitive signal since project inception** — a major brokerage building exactly the thesis model compresses the timeline for infrastructure startups to establish themselves.
4. **Specialist agent desert confirmed** — two consecutive full cycles with mandatory overrides have produced zero S2–S9 companies. This is structural, not tactical.
5. **European search reinforced** — Alinia (Barcelona, Mouro/Santander) continues the European pipeline strength. 3 of last 6 companies are European.
6. **Dispute Resolution partially resolved** — Mount 5★ validates the category. Gap status upgraded from "embryonic" to "partially addressed."

### Search Term Effectiveness
- Audit & Explainability queries productive: 1 company found (Alinia) — first result ever in this category
- AI Safety queries: re-elevated priority but no new seed-stage companies found. Existing pipeline (Manifold, Kai) may be sufficient if one converts.
- S2–S9 queries: second consecutive cycle with zero results across ~80 queries. Recommend supplementing web search with startup database queries in next cycle.
- Competitive intelligence queries (eToro, Public.com) highly productive — surfaced the most important thesis-validation signal to date.

### Pipeline State
- Previous: 74 companies
- Added: 1 (Alinia)
- Current: 75 companies
- Voted: 61/75 (81%)
- Unvoted new entry: alinia (needs vote)
- **Priority votes needed:** Alinia (first Audit & Explainability entry — will validate or reject the gap category)

### Recommendations
1. **Vote on Alinia** — first and only Audit & Explainability entry. Critical for calibrating whether backend compliance controllers for agents are thesis-aligned.
2. **Shift S2–S9 strategy** — web searches are exhausted. Next cycle should try: (a) startup database searches (Crunchbase, PitchBook), (b) YC/accelerator batch reviews, (c) academic lab spinout tracking, (d) monitoring fintech pivots to agent-callable APIs.
3. **Scout for AI Safety replacements** — Overmind's departure reopens the gap. Look for agent-specific safety companies (not general AI safety).
4. **Track eToro App Store evolution** — monitor developer adoption, API capabilities, and whether they build or buy governance infrastructure. This is the closest real-world implementation of the thesis.
5. **Consider extending specialist agent thesis timeline** — the desert finding suggests the "apps" layer may lag the "infrastructure" layer by 12–18 months. Adjust expectations and potentially expand stage criteria for S2–S9 to include pre-seed or research-stage companies.

---

## 2026-04-15 — Full Cycle #2 (Phases 0–6)

### Run Context
Second full end-to-end cycle. First cycle to include Phase 0 (Coverage Audit). 3 new votes processed (nava 5★, vouched 5★, alomana 5★). 5 new companies scouted — first specialist agent companies in the pipeline. Specialist agent vs infrastructure split: 60% specialist agents (3/5), 40% infrastructure (2/5).

### Phase 0: Coverage Audit
- **12 out of 20 thesis gap categories have ZERO pipeline companies**
- All 9 specialist agent categories (S1–S9) have zero coverage — confirmed as blind spots
- Platform infrastructure blind spots: Audit & Explainability (0), Dispute Resolution & Liability (0), Agent Monetisation (0)
- Agent Payment Rails underrepresented (1 company)
- Well-covered: Orchestration (14), Safety (14), Compliance (14), Auth (11)
- Mandatory scan overrides applied to all blind spots
- Phase 0 effectiveness this cycle: S1 gained 3 companies (from 0→3). Dispute Resolution gained 2 (from 0→2). Remaining blind spots (S2–S9, Audit, Monetisation) produced no thesis-matching results — deeper or different search strategies needed.

### Phase 1: LEARN
- 3 new votes processed (53 → 56 total)
- 19 upvotes, 8 neutral, 29 downvotes
- New votes: nava 5★ (Agent Payment Rails), vouched 5★ (Agent Auth/KYA), alomana 5★ (Tax Optimisation)
- All 3 are companies found in the previous cycle's Phase 4 scout — 75% of scout finds voted, 100% positive
- Agent Payment Rails bonus strengthened (+10→+12)
- Tax Optimisation gap partially resolved — alomana 5★ confirms portfolio-integrated tax intelligence is thesis-aligned
- Exposure-normalised metrics: Agent Auth hit rate 64%, AI Safety 43%, Compliance 14%, Orchestration 7%
- No new near-misses (all 3 votes are 5★)

### Phase 2: STRATEGISE
- Thesis v3.0 → v3.1
- Tax Optimisation status updated: "Alomana 5★ first confirmed match"
- Vote count updated to 56
- No structural thesis changes — v3.0 rebalance still correct

### Phase 3: ARM
- Search terms v3 confirmed (just created yesterday)
- Minor addition: 2 new queries added to Agent Payment Rails (agent escrow, agent dispute)
- ~252 queries total across 21 categories + 2 tracks

### Phase 4: SCOUT — 5 New Companies
1. **AgentSmyth** (Score 88) — S1: Research & Signal Intelligence. Seed $8.7M ($11.2M total). FinTech Collective, Thomson Reuters, BNY (Ascent). 48 institutional customers. 5 autonomous specialist agents (macro, sentiment, quant, options, earnings). NYC. FIRST ENTRY IN S1.
2. **Serafis** (Score 85) — S1: Research & Signal Intelligence. YC. Mining unstructured data for narrative inflections. 5+ orgs, $40B+ AUM. Ex-Ribbit Capital Head of Data. SF. SECOND ENTRY IN S1.
3. **Kimpton AI** (Score 80) — S1: Research & Signal Intelligence. YC P26. AI-native investment research. 120K+ assets. Ex-Goldman Sachs quant fund operators. SF. THIRD ENTRY IN S1.
4. **Mount** (Score 78) — Dispute Resolution & Agent Liability. "Insurer for the Agent Economy." Agent risk evaluation, ADR certifications. FIRST NEW ENTRY IN DISPUTE RESOLUTION.
5. **Klaimee** (Score 72) — Dispute Resolution & Agent Liability. Agent certification + AI-native liability coverage. Self-serve. SECOND ENTRY IN DISPUTE RESOLUTION.

### Competitive Intelligence
- eToro Agent Portfolios now live — scoped API keys, BYOA model, $200 minimum
- Public.com Agents rolling out since March 31 — "world's first Agentic Brokerage"
- AIUC emerged from stealth with $15M seed (Nat Friedman) — agent insurance standards (AIUC-1), audits, liability coverage. Predicts $500B market by 2030.
- OpenAI acquired Hiro Finance — first frontier model provider M&A in finserv AI
- European VC: Q1 2026 $17.6B (up 30% YoY), AI claimed 50%+ of Europe's total funding for first time

### Specialist Agent vs Infrastructure Split
- New companies this cycle: 3 specialist agents (60%), 2 infrastructure (40%)
- Cumulative pipeline: specialist agents still dramatically underrepresented (3 in S1 vs 14+ in each infrastructure category)
- The specialist agent scouting challenge is real: most startups building investment intelligence sell to institutions (internal workflow risk). The S1 candidates found this cycle all serve institutional customers directly — marketplace fit needs validation through votes.

### Phase 0 Effectiveness
- S1 (Research & Signal Intelligence): MANDATORY scan override → 3 companies found ✅
- Dispute Resolution & Liability: MANDATORY scan override → 2 companies found ✅
- S2 (Portfolio Construction & Risk): Searched but no thesis-matching results ❌
- S3–S9: Searched but no thesis-matching startups found at Seed/Series A ❌
- Audit & Explainability: Searched but no dedicated startups found ❌
- Agent Monetisation: No new entries ❌
- **Conclusion:** Phase 0 overrides produced results where startups exist (S1, Dispute Resolution). Categories producing zero results may reflect genuine market gaps (fewer startups at this stage) rather than search term failures. Next cycle should try alternative search strategies for S2–S9.

### Thesis Drift Observations
1. Internal/external boundary remains THE decisive dimension — but now applies to specialist agent scouting too. S1 candidates serve institutions directly — marketplace fit is ambiguous.
2. The 100% validation rate on scout finds (3/3 voted as 5★) suggests the scoring model is well-calibrated for categories with vote training data.
3. Specialist agent categories have zero vote training data — scoring model is operating blind on S1–S9 companies.
4. Competitive pressure intensifying: eToro and Public.com both live with agent trading features. Neither has governance/compliance infrastructure. The window for the app store thesis is compressing.
5. AIUC's $15M seed and $500B market prediction validates the Dispute Resolution gap as a massive opportunity.

### Search Term Effectiveness
- S1 queries productive: 3 companies found on first scan (AgentSmyth, Serafis, Kimpton AI)
- Dispute Resolution queries productive: 2 companies found (Mount, Klaimee)
- S2 queries produced interesting leads (AgentSmyth partially covers S2) but no dedicated S2 company
- S3–S5 (Trade Structuring, Options, Execution): search terms produced no seed-stage startups. These may be categories where startups haven't emerged yet or where the search vocabulary needs refinement.
- S6–S9 (Position Monitoring, Financial Planning, Behavioural Coaching, Post-Trade): minimal results. These are emerging categories with few dedicated startups.

### Pipeline State
- Previous: 69 companies (in pipeline.html)
- Added: 5
- Current: 74 companies
- Voted: 56/74 (76%)
- Unvoted new entries: agentsmyth, serafis, kimpton-ai, mount-insurance, klaimee (all need votes)
- **Priority votes needed:** AgentSmyth (highest score S1 entry — will calibrate the internal/external boundary for specialist agents)

### Recommendations
1. **Vote on AgentSmyth** — highest priority. Will determine if institutional-deployment research agents are thesis-aligned or internal workflow.
2. **Vote on Serafis and Kimpton AI** — will calibrate S1 scoring across the three entries.
3. **Vote on Mount and Klaimee** — will establish baseline for Dispute Resolution gap.
4. **Next cycle should try refined search strategies for S2–S9** — consider broader terms, different search engines, or startup database searches rather than web searches.
5. **Track AIUC** ($15M seed, Nat Friedman) as potential pipeline addition if not already tracked.

---

## 2026-04-10 — Weekly Radar

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting or passing has occurred — all 86 companies remain in detected. Vote data remains the only calibration signal with 8 votes cast and 78 pending (91% unvoted — up from 87% last week). Agent Authentication & Security and AI Safety & Guardrails maintain 100% upvote rates across all votes cast (4 of 4 combined, all at 4–5★). Tax Optimisation and Agent Orchestration each have one downvote and no upvotes. Compliance has two neutrals (Bretton AI and Sphinx, both 3★). Personal Agent has no votes. The six new gap categories (Memory, Liability, Monetisation, Pre-Trade Compliance, Audit, Payment Rails) have zero votes.

Are any search terms producing noise? Propose replacements. (1) AI Safety & Guardrails: Microsoft's open-source toolkit and the acquisition wave mean horizontal companies are increasingly undifferentiated — narrow to "AI safety financial services," "agent guardrails regulated industry," "AI audit trail banking," "fiduciary agent governance." (2) Tax Optimisation: Juno surfaced but is closer to tax filing — continue emphasising "tax-loss harvesting," "tax-aware rebalancing," "embedded tax API fintech." Add "advisor tax planning AI" given Altruist Hazel signal. (3) Agent Memory & Context: new category working well — add "agent state persistence financial services." (4) Pre-Trade Compliance: "SEC FINRA compliance AI" productive — expand to "pre-trade compliance agent," "investment adviser compliance automation." (5) Dispute Resolution & Liability: add "agent accountability framework."

Are there new themes that don't fit existing gaps? (1) Agent Memory & Context — now standalone with 2 companies, validated by AWS partnership and academic research. Recommend formalising as eighth gap. (2) Dispute Resolution & Agent Liability — insurance and certification layer. Recommend formalising as ninth gap. (3) Agent Monetisation — Paid.ai ($33M) is first dedicated billing infrastructure. Monitor; promote if second company enters. (4) Agentic Content Governance — Haast ($12M) deploys compliance agents for AI-generated content. Could become standalone as FI content production scales.

Are any gaps candidates for deprioritisation? No. The expansion to 12 categories reveals the original 6-gap framing was under-scoped rather than over-scoped.

Any signals that challenge or complicate the thesis? (1) Visa Intelligent Commerce Connect positions Visa as protocol-agnostic infrastructure for agentic payments — exactly the positioning the thesis describes for startups. (2) Microsoft Agent Governance Toolkit (open-source) commoditises horizontal agent safety at the framework level. (3) Okta for AI Agents means the largest identity platform now treats agents as first-class entities — compressing the window for standalone agent identity startups. (4) JPMorgan's 450+ active agentic use cases confirms tier-1 bank adoption is already at production scale. (5) Q1 2026 venture funding hit $300B (80% AI) — application/model layers massively overfunded relative to regulated infrastructure layer, creating structural supply-demand imbalance in the thesis's favour.

### What I Learned This Week

The most important insight from this week is that the thesis scope was too narrow. The April 7 full scan with expanded search terms immediately surfaced companies across six new categories — Agent Memory, Dispute Resolution & Liability, Pre-Trade Compliance, Audit & Explainability, Agent Monetisation, and Agent Payment Rails — revealing that the regulated infrastructure layer beneath agentic AI in financial services is significantly wider and deeper than the original six-gap framing captured. The second insight is that incumbents are no longer building toward agentic commerce — they are operationalising it at continental scale: Visa's protocol-agnostic Intelligent Commerce Connect, Amex's ACE developer kit, FIS's KYA framework, Mastercard's live transactions with six banks in Hong Kong, and JPMorgan's 450+ active agentic use cases. The gap between "agents can transact" and "agents are governed while transacting" is now the defining infrastructure opportunity, and it is a gap incumbents are explicitly not filling. The third insight is that the academic community has finally caught up: five new papers broke a five-week drought, and the most important (ClawSafety) proves what the thesis assumed — safe models become unsafe agents, making agent-level safety infrastructure non-negotiable for regulated deployment. The uncomfortable truth remains: the pipeline grew 41% (61→86) while votes remained frozen at 8. The model is now 91% untested.

---

## 2026-04-17 — Weekly Radar

### Thesis Drift Detection

Which gaps are generating the most shortlists vs. passes? No formal shortlisting has occurred — all 92 companies remain in detected. Using votes as a proxy, Research & Signal Intelligence (S1) leads at 100% hit rate (3/3), followed by Dispute Resolution at 100% (2/2), Agent Auth at 64% (7/11), and AI Safety at 43% (6/14). Agent Orchestration leads passes at 64% rejection rate (9/14), driven by internal-workflow rejections. The Hard Filter created last cycle is now doing its job — internal-workflow companies that would previously have scored 75–94 are being filtered at scoring time rather than at voting time.

Are any search terms producing noise? Propose replacements. Yes — but the dominant noise has already been filtered via the internal-workflow Hard Filter. Residual noise this week: Agent Orchestration queries continue to surface enterprise-broad BPO-replacement tools (AppZen, Octonomy, Pace) that fail the third-party-agent test. Proposed replacements: tighten orchestration queries with "marketplace", "third-party agents", "MCP-native" qualifiers; add "external agent" as a required phrase; continue aggressive negative filters on "finance department", "back office", "workflow automation". AI Safety queries also need narrower framing — the horizontal AI red-teaming and AI interpretability vocabulary continues to surface commoditised horizontal players. Add mandatory "broker", "investment adviser", "SEC", "FINRA", or "FCA" qualifiers to AI Safety queries. Research & Signal Intelligence: add explicit European site: operators (sifted.eu, eu-startups.com, tech.eu, fintech.global) to fulfil the Serafis "find things like this in the EU?" mandate.

Are there new themes that don't fit existing gaps? Propose a new category if warranted. One candidate: **Multi-Gap Agent Controls Architecture**. Nava (Safety + Payment Rails + Dispute Resolution) is the first concrete example; Vouched (Auth + MCP-Identity) and SolvaPay (Payment Rails + Auth DNA) are secondary. This is not yet a formal gap — two datapoints do not make a category — but it is worth monitoring. If a third multi-gap company emerges and votes 4–5★, promote to cross-gap theme. A second candidate is **Regulated-Industry Agentic OS** — Notch and Sycamore already anchor it, but Sycamore's 1★ vote suggests these are seen as internal workflow platforms rather than marketplace infrastructure. Not warranted at this time.

Are any gaps candidates for deprioritisation? Tax Optimisation should move to maintenance-only scouting (Alomana 5★ has effectively closed it; continued queries produce tax filing noise). Agent Monetisation remains at 1 pipeline company (Paid AI) — not a deprioritisation candidate yet but the low signal volume is worth noting. Personal Agent scouting should narrow: the Mastercard Virtual C-Suite, Amex ACE, and eToro App Store signals suggest the front-door opportunity is being claimed by incumbents faster than seed-stage startups can establish themselves.

Any signals that challenge or complicate the thesis? Three. First, incumbent protocol-agnostic layers — Visa Intelligent Commerce Connect supports all four agent payment protocols simultaneously; if Visa becomes the neutral clearing layer, the startup opportunity narrows to the governance overlay above it. Second, Oracle's FI-grade agent compliance product — Oracle + Lucinity is the first single-vendor, single-stack agent compliance pitch aimed at regulated FIs and competes directly with the independent infrastructure thesis. Third, specialist agent desert confirmed as structural — S2–S9 produced one marginal result (Pillar, adjacent) across two cycles of intensive Phase 0 scouting. The "apps" layer of the app store thesis may lag the "infrastructure" layer by 12–18 months, and the stage criteria may need to expand to pre-seed / research-stage for these categories.

### What I Learned This Week

This was the cycle where the thesis stopped being a hypothesis and started being a calibrated instrument. The 45-vote backlog processing on April 14 produced a single, overwhelming signal — that the external-vs-internal boundary is more predictive than gap category, team quality, funding amount, or geography — and that signal has now been encoded as the system's highest-weight Hard Filter. The follow-on Cycle 2 and Cycle 3 scout rounds then delivered six consecutive 5★ scout-to-vote conversions (nava, vouched, alomana, agentsmyth, serafis, kimpton-ai) plus mount-insurance 5★ and klaimee 4★ — proving the recalibrated model works in practice, not just in theory. The uncomfortable counterweight is the specialist agent desert: two consecutive intensive Phase 0 scans across S2–S9 produced essentially zero seed-stage companies, and Pillar's commodity-hedging pitch is the closest the market has gotten to the pattern. The app store thesis holds on the infrastructure side, but the "apps" layer may be 12–18 months behind supply-side reality — which is itself a scouting finding worth acting on. The week's final positive signal is European-cluster activation in Agent Payment Rails: SolvaPay, Ralio, and Nava forming a three-company cohort in 72 hours, with SolvaPay's ex-FIS/BoA/Lehman/Handelsbanken team directly answering the Serafis European-equivalent mandate.

---

## Preference Learning — 2026-04-27
Total votes: 61 (24 up, 8 neutral, 29 down) + 1 accidental (solvapay 0★, excluded) | New near misses: 0 | New soft factors: none (no new near-misses; solvapay excluded as accidental) | Weight changes: gap_fit 35→30, stage_match 20→25 (FIRST CALIBRATION RUN — 61-vote threshold finally met; soft_factors array bootstrapped with 16 vote-evidenced factors never previously serialised to scoring-weights.json) | Key insight: Stage was the most underweighted dimension in the original config — Linx-Security's 94→2★ near-miss and four explicit stage rejections prove it should carry as much weight as finserv_readiness; the gap_fit reduction reflects that Hard Filters now handle the mispredictions gap_fit alone could not catch | Confidence: med
