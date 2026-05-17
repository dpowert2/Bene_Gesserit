# Bene Gesserit — Discovery Log

Append-only record of what the system learns each week. Written by the weekly radar task (Fridays) and preference learning task (Sundays).

---

## Preference Learning — 2026-05-17
Total votes: 94 (31 up [4★+5★], 8 neutral [3★], 38 down [1★+2★]) | New near misses: 0 | New soft factors: r3_tokenization_novel_asset (+12 pts) | Weight changes: none | Key insight: R3 Tokenization / novel asset democratisation graduates to formal soft factor at n=3 (TYTL + ANote Music + Noise, 3/3 = 100% upvote rate); radar→outreach walkback reaches n=2 with Alomana deal-stage softening | Confidence: high

### Vote Corpus
94 entries total (77 voted + 17 outreach-marker 0★). Net delta since last preference learning cycle (2026-05-10, 89 entries): +5 — anote-music 5★ (1 strategic upvote), serveusai/platform1online/contextbases/openbox (4 outreach markers). Re-vote annotations on nava, solvapay, deeploy, ralio, alomana, geordie — deal-funnel progress notes only, no star-rating changes.

### STEP 1 — Vote Pattern Analysis
Corpus movement is minimal (+1 strategic upvote, +4 non-strategic markers), so no entirely new patterns emerge. However, existing patterns either consolidate or approach new thresholds:

**R3 Tokenization cluster reaches n=3.** TYTL 5★ (tokenized residential RE) + Noise 5★ (attention market on Base) + ANote Music 5★ (music-royalty marketplace) = 3/3 upvotes in the novel-asset-tokenisation cell. All three are: (a) tokenising previously illiquid or non-traditional asset classes, (b) democratising retail access, (c) independent seed/Series-A startups, (d) operating on new asset surfaces that did not exist as investable products before. This is the same pattern strength as Research & Signal Intelligence (3/3, 100%) and Dispute Resolution (2/2, 100%). **Formalised as soft factor this cycle.**

**Radar→outreach walkback at n=2.** autonomous (BG 92 → 0★, "style over substance") was n=1. Alomana (5★, "feels more like a consultancy at the moment" — 2026-05-13 meeting note) is the potential second occurrence. Alomana's 5★ is intact, making this a weaker case than autonomous, but the business-model concern (product vs consultancy) at deal stage matches the same failure mode: a dimension invisible at carding time became decisive in person. At n=3 this pattern would earn a scoring signal (likely a penalty for companies scoring high on pedigree signals but with thin public product evidence).

**Deal-funnel competitive dynamics first visible.** deeploy (0★, kanban: talked_to) note: "Geordie is a more mature solution. We may say no to Deeploy if Geordie show more interest." This is the first explicit intra-category competitive comparison in the deal funnel — two companies competing for the same slot with Dave weighing them against each other. Not a scoring signal yet (sample-of-one, purely operational) but worth watching as the funnel deepens.

**No hard filter candidates, no new rejection patterns.** The absence of new downvotes this cycle is itself a calibration signal: the hard filters are successfully blocking internal-workflow and accounting companies before they reach the vote stage.

### STEP 2 — Near-Miss Analysis
**0 new near-misses.** The only new strategic vote is anote-music 5★ (upvote). All other activity is deal-funnel annotation. Near-miss total remains 24.

### STEP 3 — Preferences Changes
Four targeted edits to `config/preferences.md`:
1. **Header** — updated to cycle 19, 2026-05-17; vote count reflects 94.
2. **Strong Positive Signals** — added new section #8: R3 Tokenization / Novel Asset Democratisation (+12 pts); inserted before Compliance with Differentiation.
3. **Emerging Preferences — Radar→outreach walkback** — updated from n=1 (autonomous) to n=2 (autonomous + alomana softening); formalisation threshold at n=3 noted.
4. **Emerging Preferences — R3 Tokenization** — entry marked GRADUATED; forward reference to Strong Positive Signal #8; Wealthyhood flagged as the first untested candidate in the now-formalised cell.

### STEP 4 — Weight Calibration
94 entries ≥ 50-vote threshold. Core weights unchanged (gap_fit 30, finserv_readiness 25, stage_match 25, team_signal 20). Rationale: +1 strategic upvote is insufficient new signal to shift any dimension's predictive power estimate. The single change is the new `r3_tokenization_novel_asset` soft factor (+12 pts). No retirements: all 17 pre-existing active factors remain directionally valid. Pending factor `agent_exposure_api_callable` stays at 2/3 — ANote Music's note was blank, so it does not advance the counter.

---

## Thesis Review — 2026-05-15 (Cycle 18)

### Feedback Processed
- `bg_thesis_feedback` (Supabase, project `iyoseurwycryykrnlbig`) **unreachable again** — `execute_sql` returned "Connection terminated due to connection timeout" on both attempts (full SELECT and count query). This is the **fifth consecutive cycle** the Supabase channel has timed out (cycles 14–18). No `feedback_type='thesis'` row has ever been logged; the table holds only the 2026-04-14 test row. Treated as no-op, proceeded on vote signal alone. **The Supabase deprecation recommendation now stands across five cycles — this last Supabase dependency should be retired or migrated to Turso.**

### Vote Signals
- Live Turso fetch via `scripts/fetch-votes-from-turso.py`: **94 entries** (77 voted: 20 ★★★★★ / 11 ★★★★ / 8 ★★★ / 16 ★★ / 22 ★ + 17 outreach-marker 0★). Net delta since cycle 17: **+5 entries** — 1 net-new star rating, 4 new 0★ outreach markers, plus several re-vote annotations on existing entries.
- **anote-music 5★** (2026-05-13, no note) — net-new star rating. European music-royalty marketplace, R3 Tokenization, carded cycle 17 at score 70. First upvote anywhere in the R3 cell and the first vote-confirmed entry on the music-IP surface Research mandate #3 explicitly names. A clean, note-free confirmation of the category.
- **resistant-ai re-vote** (2026-05-13) — note added: "Novel and love the agentic security angle. Going to kill this - too late stage. Should have caught it earlier - Dave." The 5★ on the angle stands, but the company is killed as a deal on stage grounds. Strategically notable: this is the first "5★-but-killed-on-stage" case — a genuine thesis-fit upvote dropped at the deal stage, not a downvote. Contrast with linx-security (94→2★, which at least downvoted).
- **4 new 0★ outreach markers** — serveusai, platform1online, contextbases, openbox (all 2026-05-14, followup=true, no notes). Operational deal-flow markers per the established cycle-15 carve-out; non-strategic. ("openbox" is a distinct slug from the existing "openbox-ai" 3★ pivot-candidate.)
- **Re-vote annotations on existing entries** (nava, solvapay, deeploy, ralio, alomana, geordie) — outreach/deal-funnel progress notes (contact attempts, meetings, NDA status). The deeploy note ("Geordie is a more mature solution. We may say no to Deeploy if Geordie show more interest") is a competitive deal-funnel comparison, not a thesis-level signal. None require thesis change.

### Thesis Changes (v3.2 → v3.3)
Surgical edits, five locations:
1. **Header paragraph** — version bumped to 3.3; cycle 18 summary.
2. **Research sub-area 3** — added ANote Music 5★ as a vote-confirmation line; first upvote in the R3 Tokenization / music-IP cell.
3. **Challenge signal #4** — annotated: Resistant-AI's 5★ on the angle stands but the company was killed as a deal on stage; the miss is a process signal that the stage gate must fire at carding.
4. **Cycle 15 tracked-patterns block** — added new tracked pattern "stage gate fires too late" (resistant-ai, sample-of-one).
5. **Learned preferences header + versioning table** — vote count 89 → 94; v3.3 row added.
No gap-map structural changes, no new hard gates, no team-mandate edits. The corpus growth is calibration data, not direction change.

### Preferences Changes
- Header rewritten with cycle 18 summary; count 89 → 94.
- Strong Negative Signal #3 (Series B+/Over-Funded) — added resistant-ai as evidence plus a "stage gate fires too late" process-signal note (apply the stage check at carding, not post-vote).
- Emerging Preferences — added "R3 Tokenization / music-IP surface — first vote confirmation (anote-music 5★)"; tracking toward a formal positive signal at a second R3 upvote.

### Confidence
- **High** on the no-op-on-direction assessment — only 1 net-new star rating, note-free, confirming an existing thesis sub-area; the 4 outreach markers are explicitly non-strategic.
- **Medium** on the "stage gate fires too late" pattern — sample-of-one (resistant-ai) with linx-security as a close analogue; flagged as tracked, not formalised.
- **High** on the Supabase deprecation recommendation — five consecutive timeouts, zero useful data ever.

### Action for Downstream Tasks
- `bg-search-terms-update` should treat the thesis as **substantively unchanged** — the v3.3 edits are calibration annotations (one vote confirmation, one challenge-signal note), not new gap categories or search-surface changes. A carry-forward is sufficient; the standing R3-sweep recommendation from cycle 17 remains the highest-leverage next action.
- **Migration item still flagged:** retire the Supabase `bg_thesis_feedback` channel — fifth consecutive dead cycle.

---

## Thesis Review — 2026-05-12 (Cycle 17)

### Feedback Processed
- `bg_thesis_feedback` (Supabase, project `iyoseurwycryykrnlbig`) **unreachable again** — `execute_sql` returned "Connection terminated due to connection timeout" on each of the three attempts this cycle (full SELECT, count query, narrowed-column query). This is the fourth consecutive cycle the Supabase channel has timed out (cycles 14, 15, 16, 17). Prior cycles confirmed the table holds only the 2026-04-14 test row; no `feedback_type='thesis'` row has ever been logged. Treating as no-op and proceeding on vote signal alone. **Outstanding migration item:** the last Supabase dependency should be moved to Turso (or the channel deprecated) in a future cycle — the timeout has gone from "transient" to "persistent" and the dependency now contributes nothing.

### Vote Signals
- Live Turso fetch via `scripts/fetch-votes-from-turso.py`: **89 entries** (19 ★★★★★ / 11 ★★★★ / 8 ★★★ / 16 ★★ / 22 ★ + 13 outreach-marker 0★). Distribution **identical to cycle 16** (2026-05-10) — corpus has been stable for 48+ hours.
- **Net delta since cycle 16: one (1) note edit.** `gradient-labs` 0★ outreach marker re-saved at 2026-05-11T08:01:38Z with the note expanded from "Aaron wants to take them in" to a version that adds a followup owner. Star rating unchanged (0★), strategic positioning unchanged (operational deal-flow marker), only the followup-owner name was added. This is an operational annotation, not a strategic signal.
- No new star ratings. No new outreach markers. No re-votes on previously-rated entries. No new strategic feedback.

### Thesis Changes
**No changes — thesis stable at v3.2.** The corpus has not moved since cycle 16. All v3.2 architecture remains valid: three-team hypotheses intact, gap-map state intact (Tax gap dual-upvote, S7 contested-slot annotation, S10 still empty post-TraderSage rejection), Hard Filters and soft factors unchanged. The single note edit on `gradient-labs` is below the threshold for any thesis-level update — operational annotations on existing 0★ outreach markers are explicitly carved out as non-strategic per the cycle 15 finding ("the 0★+followup combination is operational deal-flow tracking, not strategic star-rating signal").

### Preferences Changes
**No changes — preferences stable at cycle 16.** The cycle 16 NOVELTY GATE formalisation (asseta-ai + addition-wealth + tradersage at n=3 → soft factor active at –10 pts) was the last structural change and remains the current state. No new emerging patterns reach the n=2 threshold; the three cycle-15 sample-of-one patterns (archetype-slot displacement, radar→outreach walkback, TLH-alone-not-novel) are still at sample-of-one.

### Confidence
- **High** on the no-op assessment — the vote distribution is byte-identical to cycle 16, and the only delta is a verifiable single-note edit on an existing outreach marker.
- **High** on the Supabase deprecation recommendation — four consecutive timeouts with no successful read since the table contained anything other than the 2026-04-14 test row.
- **Low** strategic risk in carrying forward — no edits to thesis or preferences, no contradictions surfaced.

### Action for Downstream Tasks
- `bg-search-terms-update` should treat the thesis as **unchanged**. No regeneration needed beyond whatever the v6 spec migration (still pending from cycle 14) requires when it runs. A pure carry-forward is sufficient for this cycle's downstream chain.
- **Migration item flagged:** when next opportunity allows, retire the Supabase `bg_thesis_feedback` channel. Options: (a) recreate the table in Turso, (b) route strategic feedback through a different surface (in-portal form posting to Turso), or (c) declare the channel deprecated and remove the read step from this task. The channel has now produced zero useful data across four full cycles plus the original test entry.

---

## Preference Learning — 2026-05-10
Total votes: 89 (30 up [4★+5★], 8 neutral [3★], 38 down [1★+2★]) | New near misses: 0 | New soft factors: novelty_gate_penalty (–10 pts) | Weight changes: none | Key insight: NOVELTY GATE reaches 3-occurrence threshold — tradersage 2★ ("obvious implementation of AI") in an empty cell is the confirming case; formalised as soft factor distinct from internal workflow hard filter | Confidence: high

### Vote Corpus
Stable at 89 entries (unchanged from cycle 15 processed 2026-05-08). 76 voted + 13 outreach-marker 0★. No new votes since 2026-05-07.

### STEP 1 — Vote Pattern Analysis
No new data to analyse. The dominant patterns remain those established in cycles 10–15:
- Internal workflow hard filter (–50): 16 rejections, 0 upvotes — strongest rejection signal
- External/third-party governance (+15): defining positive signal
- Agent auth/security (+15): 6/6 upvotes (100%) — strongest positive gap
- Stage gate (–15): 4+ explicit Series B rejections — stage_match weight remains appropriate at 25%
- The key split: upvotes cluster in agent security, agent safety, external governance, and specialist agents; downvotes cluster in internal workflow, wrong sub-domain, and wrong stage. No change from cycle 15.

### STEP 2 — Near-Miss Analysis
No new near-misses. The 24 historical near-misses from cycles 1–6 remain the full record. All root causes are covered by active filters. No new blind spots to propose.

### STEP 3 — Preferences Update
Single structural change: **NOVELTY GATE formalised as Strong Negative Signal #7** (–10 points). Previously tracked in "Emerging Preferences" as a serialisation gap (declared in cycle 10, evidence base at 2 standalone cases through cycle 15). tradersage 2★ (cycle 14/15) is the third confirming case — threshold met.

The novelty_gate_penalty is complementary, not redundant, with the internal_workflow_hard_filter:
- **Hard Filter #1** answers: "Does this serve internal staff or external agents?" → if internal, –50
- **novelty_gate_penalty** answers: "Is this a genuine category reinvention or an obvious AI application of an existing workflow?" → if obvious, –10

A product can fail both (an obvious internal workflow tool) or either independently. The two signals cover different dimensions of the same broad failure mode (being uninteresting to BG).

Emerging preferences NOVELTY GATE entry in preferences.md marked resolved and updated to point to Strong Negative Signals #7.

### STEP 4 — Weight Calibration
Corpus unchanged → no new predictive-power signal → no weight changes. The 2026-04-27 calibration (gap_fit 30%, finserv_readiness 25%, stage_match 25%, team_signal 20%) remains well-supported by the corpus. No candidate change flagged for next cycle. Soft factors now: 17 active (14 from prior cycles + novelty_gate_penalty) + 1 pending (agent_exposure_api_callable at 2/3).

### Emerging Pattern Status Update
| Pattern | Status |
|---|---|
| NOVELTY GATE (SaaS-with-AI non-novel) | **FORMALISED cycle 16** — soft factor active (–10 pts) |
| agent_exposure_api_callable | Still pending at 2/3 — one more confirming vote needed |
| Entity-level independence check | Still sample-of-one (versus revision) |
| Archetype-slot displacement | Still sample-of-one (quartr/edgehound) |
| Radar→outreach walkback | Still sample-of-one (autonomous) |

### Files Changed
- `learning/near-misses.md` — summary table +1 row; blind spot tracker NOVELTY GATE updated to SOFT FACTOR ACTIVE
- `config/preferences.md` — header date + Strong Negative Signal #7 added; NOVELTY GATE emerging preference marked FORMALISED
- `config/scoring-weights.json` — novelty_gate_penalty added to soft_factors; cycle 16 history entry added (no weight changes)
- `learning/discovery-log.md` — this entry appended

---

## Thesis Review — 2026-05-08 (Cycle 15)

### Feedback Processed
- `bg_thesis_feedback` (Supabase, project `iyoseurwycryykrnlbig`) **unreachable this cycle** — `execute_sql` returned "Connection terminated due to connection timeout" on every attempt across multiple retries (count query, full SELECT, smaller LIMIT). Cycles 13/14 confirmed this table holds only the 2026-04-14 test entry; no `feedback_type='thesis'` row has ever been logged. Treating as no-op for this cycle and proceeding on vote signal alone. *Action item:* a future cycle should retry connectivity or migrate this last Supabase channel to Turso to remove the dependency.

### Vote Signals
- Live Turso fetch via `scripts/fetch-votes-from-turso.py`: **89 entries** (76 voted: 19 ★★★★★ / 11 ★★★★ / 8 ★★★ / 16 ★★ / 22 ★ + 13 outreach-marker 0★). Cycle 14 cut-off was 2026-05-05 78-entry corpus. Net delta: **+11 entries** — 4 net-new star ratings (2 × 4★, 1 × 2★), 7 new 0★ outreach markers, plus several re-vote annotations on existing entries. Activity concentrated on 2026-05-07 (cycle 14 publish day) — Dave appears to have voted/annotated alongside the cycle 14 run.

**Net-new star ratings (4 entries):**
- **alphathena 4★** (Tax Optimisation) — "Includes tax harvesting https://alphathena.com/features/portfolio-optimization/" — second upvote in the Tax Optimisation gap. Portfolio optimization platform with TLH as one feature.
- **quartr 4★** (S1 Research / S7 Position Monitoring, carded cycle 14 BG 78) — "Good but too similar to Edgehound who have taken this slot." First entry into S7 cell, but the note flags archetype-slot displacement against the S1 incumbent.
- **tradersage 2★** (S10 Post-Trade, carded from empty-cells seed pass) — "I don't see anything special here. Seems liek an obvious implementation of AI." Novelty gate rejection — confirms the gate applies in empty cells too.
- **autonomous 0★ outreach with skeptical note** ("Potential white label? YC personal investment is promising. Otherwise style over substance right now.") — first observed walkback of a cycle 9 BG Score 92 prediction. Not a star rating per se, but a substantial qualitative downgrade.

**Re-vote annotations (existing entries, new context):**
- **april 3★** (re-voted 2026-05-07) — added "Unless their are interested in providing this as an agent. Perhaps they are working on it." This is the SECOND occurrence of the 3★ + external-agent-pivot pattern (joining openbox-ai). Pattern graduates from sample-of-one to formalised at n=2.
- **alomana 5★** (re-voted) — caveat: "the tax harvesting use case is generated by AI and just one of a hundred." 5★ stands but TLH alone is now flagged as not-novel; differentiator is portfolio integration.
- **ralio 5★** — "Dave met and liked them, slightly different, really nice founder."
- **gradient-labs 0★** — "Aaron wants to take them in." Internal champion.
- **revenium 0★** — "Reconciling agentic payments and a bit more, 'no brainer'." Strong qualitative language despite 0★.
- **solvapay 5★** — "waiting on the NDA". **unique-ai 4★** — "Booked demo." Both deal-progression markers.

**Outreach markers (7 net-new 0★ entries):** evergreen-wealth, wallace-finance, range-com, saif, geordie, cognibit, deeploy. Plus autonomous re-vote at 0★. All operational deal-flow markers.

### Thesis Changes (v3.1 → v3.2)
Surgical edits, four locations:
1. **Header paragraph** — version bumped to 3.2; cycle 15 summary in one paragraph.
2. **Gap map: Tax Optimisation row** — added Alphathena (4★) alongside Alomana (5★).
3. **Gap map: Position Monitoring (S7) row** — moved from ❌ blind-spot to ⚠️ contested-slot with explanatory note about Quartr/Edgehound archetype overlap.
4. **Gap map: Post-Trade (S10) row** — updated annotation: still empty, TraderSage carded then 2★-rejected on novelty.
5. **Learned preferences header** — vote count line updated 78 → 89, distribution updated.
6. **Cycle 12 patterns section** — split into "Patterns formalised (cycle 15)" with the 3★+pivot pathway promoted from sample-of-one to n=2 (openbox-ai + april), and a fresh "Cycle 15 patterns being tracked" block listing the three new emerging patterns: archetype-slot displacement, radar→outreach walkback, TLH alone isn't novel.
7. **Versioning table** — v3.2 row added.

No gap-map structural changes. No new HARD GATES. No team mandate edits. The corpus growth is calibration data, not direction change — the thesis architecture is stable.

### Preferences Changes
- Header rewritten with cycle 15 summary (5 distinct signals in one paragraph).
- Section "Portfolio-Integrated Tax Intelligence" expanded with alphathena 4★ as second upvote and the new TLH-alone-isn't-novel tightening.
- "3★ + external-pivot" entry promoted from "Emerging Preferences (sample-of-one)" to "FORMALISED cycle 15 — n=2" with operational rule articulated.
- Three new emerging-pattern entries appended: archetype-slot displacement (Quartr); radar→outreach walkback (Autonomous); novelty-gate-applies-in-empty-cells (TraderSage). Each at sample-of-one and waiting for second occurrence to formalise.
- Followup-as-conviction-signal entry updated to reflect the cycle 15 distinction between strategic followup (4★/5★) and operational followup (0★ outreach markers).

### Confidence
- **High** on Tax Optimisation second-upvote absorption — alphathena is unambiguous, alomana caveat is direct quote.
- **High** on 3★ + external-pivot graduation — n=2 with identical shape (stage/internal objection followed by explicit "if [external/agent]" invitation).
- **Medium** on archetype-slot displacement — the Quartr note is precise but a single occurrence; will need a second case before scoring rubric changes.
- **Medium** on radar→outreach walkback — the Autonomous note is qualitative ("style over substance") and could reflect a transient impression, not a final read. Awaiting more outreach data before re-balancing the scoring rubric.
- **Low** strategic risk in the changes — all surgical, additive, non-contradictory with v3.1 architecture.

### Action for Downstream Tasks
- `bg-search-terms-update` should treat thesis architecture as substantively unchanged. The cycle 15 deltas are calibration-level: a new upvote in an existing-validated category (Tax Optimisation), a contested-slot annotation on an empty cell that has now received its first entry (S7), and three sample-of-one emerging patterns. Search-vocabulary surface area is not affected. Carry-forward with a brief change-log note on the alphathena addition is sufficient.
- The cycle 14 REGEN PENDING flag on `bg-search-terms.md` (v5.5 → v6) is independent of this thesis review and should still proceed when the v6 spec is run.
- **Operational follow-up:** Quartr's 4★ + slot-displacement note is good calibration evidence for the cycle 14 protocol — the protocol surfaced a real candidate, but the scoring rubric should learn to detect archetype overlap with existing pipeline entries during the carding step.

---

## Full Cycle Run — 2026-05-07 (Cycle 14)

### Phase 0 — Coverage Audit
Pipeline at start: 107 (cycle 13 PM close). Same six blind spots that have persisted since cycle 9 — S3 Trade Structuring (0), S5 Options & Derivatives (0), S6 Execution (0), S7 Position Monitoring (0), S9 Behavioural Coaching (0 dedicated; Balanced Investor Club tracked under S8/cross), S10 Post-Trade (0), Audit & Explainability (0 dedicated). The recommendation to fix these via accelerator-batch sweeps + reverse-archetype walks + Layer 3 GitHub MCP has been carried as `next_cycle_target=true` in `search-state.json` for cycles 9, 10, 12, 13 — un-actioned each time.

### Phase 1 — Learn from Votes
Live Turso fetch via `scripts/fetch-votes-from-turso.py`: **78 votes** (19 ★★★★★ / 9 ★★★★ / 8 ★★★ / 15 ★★ / 22 ★ / 5 outreach-marker 0★). Identical to cycle 13 corpus — no new votes since 2026-05-05. Preferences.md unchanged. Phase 1 is no-op verification.

### Phase 2 — Strategise (Thesis v2.9 → v3.0 → v3.1)
Two surgical passes:

**v2.9 → v3.0 (structural cleanup).** Dave provided a clean Research-team-hypothesis rewrite as a template; Studio and Greens hypotheses rewritten in the same shape (time horizon → numbered focus areas → reference signals → out-of-scope). The sprawling "Why now" / "Differentiation" / "What others are doing" sections compressed and de-duplicated. Gap map kept as a table (no preamble repetition). The cycle-12 entity-level rule (Versus revision) and the openbox-ai 3★ pivot pattern preserved verbatim. All v2.9 hard gates remain in force. Versioning table extended with v3.0 row.

**v3.0 → v3.1 (cycle-14 finding absorption).** Closer reading of the how-it-works microsite + four cycles of discovery log revealed that the v3.0 vocabulary critique was second-order. The primary cause of the persistent S3/S5/S6/S7/S10 zeros is an execution gap inside Phase 4 of the radar — the documented cure has been carried as `next_cycle_target=true` for four cycles without firing. v3.1 absorbs that finding into the version table.

Thesis-writing conventions encoded in `config/task-prompts/thesis-writing-conventions.md` to prevent the auto-update from re-bloating the document. The conventions enforce: header is one paragraph (no version-history narrative), team hypotheses follow the uniform template, no "Fidelity" / first-person plural, no operational TODOs, ±15-line compression budget per cycle, structural changes deferred to manual review.

### Phase 3 — Arm (Schema upgrade + REGEN PENDING)
`config/thesis-schema.yaml` upgraded with a new `audience_archetype` field per gap (initially populated for S3 / S5 / S6 / S7 / S10) and a new top-level `audience_archetypes` block defining surface menus per archetype (A = Retail Investor, B = Independent Advisor / RIA, C = Bank / Broker / Asset Manager, D = Compliance / RegTech, E = AI-Native Infrastructure). Founder vocabulary for the 5 empty cells rewritten with founder-native phrasing replacing the synthetic `"[topic] AI startup"` exact-match strings (e.g. S5 now reads "the wheel on autopilot" / "covered-call income engine" / "your AI options trader" instead of "options strategy AI startup"). Reference archetypes filled in for the 5 empty cells using the candidates surfaced by the cycle-14 manual seed pass.

`bg-search-terms.md` v5.5 marked **REGEN PENDING** at the top — a header note documents that the schema has changed and that the next `generate-search-terms` invocation must apply `task-prompts/generate-search-terms-v6-spec.md` (replace L1a–L4e with L0–L10; CNV as free-text terms not exact-match; archetype-typed L2/L3 surfaces). Until the regen runs, Phase 4 follows the new blind-spot protocol for the affected cells. `search-state.json` updated with the new thesis hash, cycle 14 marker, and `regen_pending=true` flag.

### Phase 4 — Scout (Protocol-driven, not vocabulary-driven)
Authored `config/task-prompts/radar-phase-4-blind-spot-protocol.md`. The protocol binds the cure that has been documented but un-executed for four cycles: when Phase 0 flags a blind spot, Phase 4 (a) skips vocabulary-driven web search for the affected cell, (b) walks recent accelerator batches (YC, EF, Antler, Mouro, Tenity, Mastercard Start Path, Plug and Play Fintech, Barclays Rise, Fintech Sandbox, AI Grant), (c) runs a reverse-archetype query against the cell's canonical incumbents, (d) runs Layer 3 GitHub MCP at scale with no stars filter and a 60-day window, (e) runs archetype-typed L2/L3 surfaces (Kitces / T3 for B; The Trade News / Markets Media for C; ACAMS / Compliance Week for D; Reddit / Show HN for A; LangChain customer pages for E), and (f) logs what was tried for visibility.

The protocol was run manually against S3/S5/S6/S7/S10 and produced **3 new pipeline cards in 3 previously-empty cells**:

1. **Quartr** (S7 — first entry; also S1 — Research & Signal Intelligence). Stockholm. Series A $23M total, $10M Aug 2025 led by Altos Ventures. Agent-callable qualitative-research API — earnings call transcripts, IR materials, structured for AI consumption. 700+ institutional clients including 4 of the world's 5 largest hedge funds (Quartr Pro), plus AI-native customers (Perplexity Computer integration, Brightwave research-platform partnership, Yahoo Finance, Fortune). ARR grew 300% YoY by Q1 2025. Direct archetype match for AgentSmyth / Serafis / Kimpton (all 5★) and specifically the European one Dave asked for in the Serafis 5★ note. Stage caveat: $23M total puts the company at the upper edge of the stage gate. **BG Score 78.**
2. **Tradefeedr** (S6 — first entry). London. Founded 2018 by ex-Lehman quants Balraj Bassi and Alexei Jiltsov; Seth Johnson (former CEO of NEX Markets) is Chairman. Single $3M institutional round in 2020 from IPGL (Lord Michael Spencer's investment vehicle), founder-funded since. Agentic interface on FX and equities trading analytics APIs; pre- and post-trade execution analytics exposed for AI consumption. The March 2026 BMLL partnership (year-long pilot) extends the analytics layer beyond FX into equities and futures with a unified, AI-ready format. Stage profile is unusual (six years post-seed without Series A) — score reflects the uncertainty. **BG Score 64.**
3. **QuantWheel** (S5 — first entry). US indie SaaS. Bootstrapped, single named founder Ivan Orehovec. AI-ranked wheel + covered-call screener for retail options sellers; scans 500+ tickers in under 5 minutes on DTE / delta / IV rank / yield with fundamentals layered in. Auto-syncs trades from 15+ brokers. Built October 2024, stress-tested through 2025 market volatility before opening publicly in 2026. Surfaced via the protocol's archetype-A path (Reddit r/thetagang, FinTwit, direct product domain) using customer-native vocabulary. Demonstrates the pattern that this category lives in indie SaaS with consumer-marketing framing, not VC-funded "options AI startup" press. **BG Score 58.**

The seed pass also identified 17 more candidates across the same five cells (`config/empty-cells-seed-pass-2026-05-07.md`) — `[card]`-marked rows are the next round's targets; `[verify]` rows need entity-level checks; `[track]` rows are stage-out archetype references.

### Phase 5 — Publish
Files updated and pushed to dpowert2/Bene_Gesserit via the publish skill with `--repo-root /Users/davidpower/BeneGesserit`. Privacy check chained with `&&` per CLAUDE.md rules — passed clean.
- **NEW:** `2026-05-07.html` (Cycle 14 daily briefing). `pipeline/detected/quartr.md`, `pipeline/detected/tradefeedr.md`, `pipeline/detected/quantwheel.md`. `config/search-strategy-redesign.md`. `config/empty-cells-seed-pass-2026-05-07.md`. `config/task-prompts/radar-phase-4-blind-spot-protocol.md`. `config/task-prompts/thesis-writing-conventions.md`. `config/task-prompts/generate-search-terms-v6-spec.md`.
- **UPDATED:** `config/thesis.md` (v2.9 → v3.0 → v3.1). `config/thesis-schema.yaml` (audience_archetype tags + audience_archetypes block + strengthened founder_vocabulary on 5 cells). `config/bg-search-terms.md` (REGEN PENDING note). `config/search-state.json` (thesis hash bumped, regen_pending=true, cycle=14). `index.html` (May 7 promoted LATEST, May 6 PM demoted, Last Run / Runs / Startups counters updated). `startups-data.js` (3 cards prepended to top of array; SLUG_DATES updated with quartr / tradefeedr / quantwheel at 2026-05-07). `changelog.html` (Cycle 14 system entry inserted at top).

### Phase 6 — Report (this entry)

### Specialist Agent vs Infrastructure Split
- New companies this cycle: **3 specialist agents (Quartr S7, Tradefeedr S6, QuantWheel S5)** + 0 infrastructure = 3:0 ratio. First cycle in BG history where new pipeline cards are exclusively specialist agents.
- Cumulative pipeline: 107 → 110. The "apps" layer ratio improves marginally — but the structural fix is the protocol, not the three cards. The protocol will run again next cycle and again the cycle after.

### Phase 0 Effectiveness — Cycle 14 vs Cycle 13
- Cycle 13: vocabulary-driven web search across all six blind spots produced **zero seed-stage thesis-matching specialist agents** (consistent with cycles 9, 10, 12 results).
- Cycle 14: protocol-driven Phase 4 across the same constellation produced **3 carded candidates plus 17 [card]/[verify]/[track] candidates**. The delta is the protocol.

### Self-Critique — What Got Misdiagnosed Initially
The first response to Dave's "startups missing from many categories" framing diagnosed the problem as broken search vocabulary and surface narrowness — which is real but second-order. The deeper read of the discovery log shows the system had correctly diagnosed the same problem since cycle 7 and prescribed the same cure (accelerator-batch + reverse-archetype + GitHub MCP). The cure wasn't running because no Phase 4 protocol bound it as default behaviour when Phase 0 flagged blind spots. The vocabulary fixes (schema upgrade, v6 search-terms spec, founder-native phrasing) land alongside the protocol but are second-order amplifiers — they tighten cells where vocabulary-driven search IS the right tool. The protocol IS the primary cure.

### Recommendations Carried to Cycle 15
1. Convert the remaining `[card]`-marked rows from `empty-cells-seed-pass-2026-05-07.md` (Range, PortfolioPilot, Zeplyn, OptionsPilot, OneChronos, big xyt, TraderSage, TradeLog Pro, JournalPlus) into pipeline cards — 9 candidates across S3, S5, S6, S7, S10. Each should pass through `bene-gesserit-card` skill for proper scoring.
2. Apply the `radar-phase-4-blind-spot-protocol.md` to the actual `bene-gesserit-radar` SKILL.md at `~/Documents/Claude/Scheduled/bene-gesserit-radar/SKILL.md` so Phase 4 runs the protocol automatically. Until that bind happens, the protocol must be invoked manually each cycle.
3. Apply `generate-search-terms-v6-spec.md` to the `generate-search-terms` skill so the next regen of `bg-search-terms.md` reads the new schema fields (`audience_archetype`, `audience_archetypes`) and applies the L0–L10 layer architecture.
4. Write reverse-prompt files for S3, S5, S7, S10 (model on `config/reverse-prompts/S6-execution-agent-pitchbook.md`). Step C of the protocol depends on them.
5. Vote on Quartr — the agent-callable / EU-based / S1-archetype-match profile is exactly the shape Dave's previous 5★ votes (AgentSmyth / Serafis / Kimpton AI) reinforce.

---

## Full Cycle Run — 2026-05-06 (Cycle 13, PM)

### Phase 0 — Coverage Audit
Pipeline at start: **104 companies** (up from 86 at Cycle 9). Audit produced this distribution against thesis gap categories:
- **Blind spots (0 companies):** S3 Trade Structuring, S5 Execution, S6 Position Monitoring, S7 Financial Planning, S9 Post-Trade Analysis, Audit & Explainability. **All six blind spots from cycle 9 persist** seven days later. Mandatory ≥2 web searches each constraint applied to Phase 4.
- **Underrepresented (1–2 companies):** S2 Portfolio Construction (2 incl. multi-fit Autonomous), S4 Options & Derivatives (1 — Elastics), S8 Behavioural Coaching (1 — Balanced Investor Club), Tokenization & Fractionalization (2 — TYTL, Aria), Agent Monetisation (2).
- **Adequately covered (3–9):** Dispute Resolution & Liability (3 — Mount, Klaimee, Testudo), Agent Payment Rails (4), Tax Optimisation (6), S1 Research & Signal Intelligence (8).
- **Well covered (10+):** Agent Authentication (11), Agent Orchestration (14), S-Front Personal Agent (15), Compliance (15), AI Safety (17 — Overmind archived).

Modest progress in cycles 10–12: S2 went 1→2, S4 went 0→1, S8 went 0→1, Dispute Resolution 2→3, Tokenization 1→2. Net structural finding: **specialist-agent desert persists; infrastructure side is over-covered.** Personal Agent (15) + Compliance (15) + AI Safety (17) account for 47/104 = 45% of pipeline.

### Phase 1 — Learn from Votes
Live Turso fetch: **78 votes** (19 ★★★★★ / 9 ★★★★ / 8 ★★★ / 15 ★★ / 22 ★ / 5 outreach-marker 0★). **Identical to morning's Cycle 12 absorption** — no new votes in the ~7-hour window since 09:52. preferences.md unchanged from morning's run. `bg_thesis_feedback` (Supabase) returned 1 row total — only the 2026-04-14 test entry, no new strategic feedback. Phase 1 is a no-op verification step this cycle.

### Phase 2 — Update Thesis
**No changes — thesis stable at v2.9.** v2.9 was published this morning with the Versus revision and the new entity-level archetype rule. With no new votes and no new strategic feedback in the intervening hours, no evidence base for further surgical edits exists. Phase 0 confirms the same blind-spot constellation as cycle 9 — already encoded in challenge signal #7 (Specialist Agent Desert).

### Phase 3 — Update Search Terms
**No changes — search-terms stable at v5.1.** v5.1 was generated this morning aligned to thesis v2.8 plus the v2.9 entity-level rule (which doesn't change query vocabulary). Per morning's discovery log: "the minor v2.9 entity-level rule does not change the search-vocabulary surface area; if anything it tightens the *scoring* on candidates already surfaced rather than the *querying* itself." Carry-forward with no edits.

### Phase 4 — Scout
Mandatory ≥2 web searches across each Phase 0 blind-spot category executed. Vocabulary-driven web search for S3/S5/S6/S7/S9/Audit produced **zero seed-stage thesis-matching specialist agents** — consistent with cycle 9's reframing that this search surface is exhausted. The accelerator-batch path (EF, Antler London, Tenity, Mouro/Santander portfolios) is the right next move and remains un-actioned this cycle (time-bound to a single full-cycle run).

**3 new pipeline cards added:**
1. **Diligent AI** (Score 70) — Compliance/KYC/AML. London/Berlin. €2.1M ($2.5M) seed led by Speedinvest with Shapers and continued YC. Founders: Edoardo Maschio (ex-BCG, ex-Rocket Internet investor), Ahmed Gaber (ex-CTO Billie). Bank-CEO angel stack: N26, Allica Bank, IDnow, Billie, Cybersource. Autonomous AI compliance analysts (AML screening, sanctions, adverse-media). Positioned closer to Gradient Labs (5★) than to internal-workflow Spektr (56). Gap is well-covered (15 entries) but Diligent AI differentiates on agent autonomy.
2. **Edge Hound** (Score 75) — S1 Research & Signal Intelligence. US (Axion Edge). Pre-seed/operating. Multi-agent retail market intelligence — explicit specialist sub-agents (narrative, sentiment, cross-market). CEO Peter Pavlov (8 yrs CS lecturing + trading); brother as co-founder (mathematician). **Resolves an existing 0★ outreach marker in the vote stream under typo'd slug 'egdehound'** — formalised this cycle as 'edgehound'. The typo'd vote slug needs reconciliation in a future cycle.
3. **Hyperlayer** (Score 37) — Personal Agent / Infra. London. £30M Oct 2025 led by CDAM with Mouro Capital, Iona Star, Flintlock, Susquehanna. "Global programmable operating system for finance." **Two clean strikes:** (1) explicit OS framing trips v2.8 NOVELTY GATE; (2) £30M total raised with Tier 1 bank deployments puts it past the Seed-to-Series-A sweet spot. Carded with low score to make the rejection auditable. Useful as competitive-intel signal: Mouro Capital's continued move into agent-adjacent infrastructure.

**Competitive Intelligence:**
- **Olas / Polystrat** — autonomous agent that executed 4,200+ trades on Polymarket in a single month with returns up to 376% on individual trades. Confirms cycle 9's R1 signal and reinforces specialist execution agents (S5) as an underrepresented gap worth scouting harder.
- **Laminar** — $3M seed (March 2026) for agent observability/debugging (LLM calls, tool use, browser actions). Horizontal not finserv-specific. Sits adjacent to BG Audit & Explainability gap. Important compression-risk signal: agent observability is being built at the framework layer; finserv-native vertical players need to land before horizontal players (Laminar, OpenLLMetry, LangSmith) extend down.

### Phase 5 — Publish
Files updated and pushed to dpowert2/Bene_Gesserit:
- **NEW** `2026-05-06b.html` — Cycle 13 PM briefing with 5 signals + 3 startup cards
- **UPDATED** `index.html` — 2026-05-06b.html promoted to "May 6 PM · LATEST"; 2026-05-06.html demoted to "May 6 AM"
- **UPDATED** `startups-data.js` — 3 cards added at top of array; SLUG_DATES updated with `diligent-ai`, `edgehound`, `hyperlayer` at 2026-05-06
- **UPDATED** `changelog.html` — Cycle 13 system entry inserted at top of changelog list

Privacy-check passed (chained with `&&` per CLAUDE.md rules). Push completed via `push_to_github.py` with `--repo-root /Users/davidpower/BeneGesserit`.

### Specialist Agent vs Infrastructure Split
- New companies this cycle: **1 specialist agent (Edge Hound — S1) + 2 infrastructure (Diligent AI — Compliance, Hyperlayer — Personal Agent OS)** = 1:2 ratio.
- Cumulative pipeline: specialist agents still dramatically underrepresented at the application layer. The "apps" layer continues to lag the "garden" layer.

### Phase 0 Effectiveness
- All six blind-spot categories searched. **Zero specialist-agent web-search hits.** This is consistent with cycle 9's reframing — vocabulary-driven web search is the wrong tool for these categories at the seed stage.
- Underrepresented categories produced 1 hit (S1 — Edge Hound, formalising the existing 0★ marker).
- Compliance KYC/AML produced 1 strong new hit (Diligent AI) but this is a well-covered category, not an underrepresented one — accelerator-batch sweep would have likely surfaced this faster (YC P26 batch).

### Search Term Effectiveness
- v5.1 carry-forward: produced new candidates in well-covered categories (Compliance) and one S1 entry (Edge Hound) that BG had partial signal on.
- The S3/S5/S6/S7/S9 search vocabulary continues to produce zero results across now four consecutive full-cycle scans (cycles 7, 8, 9, 13). Recommendation re-iterated: stop investing scan budget in vocabulary-driven web search for these categories; reallocate to accelerator-batch portfolio walks.

### Recommendations
1. **Reconcile vote-side 'egdehound' slug** with the new 'edgehound' card in the next cycle's preference-learning step. This is a 1-line fix in `learning/votes.json` (or a manual Turso row update) but matters for vote-tying.
2. **Schedule an EF / Antler London / Tenity portfolio walk** before the next thesis review. Cycle 9 noted this as un-actioned; it remains un-actioned through cycle 13. The accelerator-batch path is the only path that has produced specialist-agent hits historically (cycle 9's YC W26 batch surfaced Cohesion → S1, Astor → S-Front, Sponge / Orthogonal / Maven / Autonomous).
3. **Vote on Diligent AI** — the buyer-side angel stack (N26, Allica, IDnow, Billie, Cybersource CEOs) is unusual enough to merit attention. Vote will tell whether the agent-autonomy framing makes this a Gradient Labs (5★) or a Spektr (56-class) candidate.
4. **Vote on Edge Hound** under the new slug `edgehound`. The multi-agent retail differentiation is the most interesting attribute; vote will calibrate whether retail-side S1 differs from the institutional-side S1 (AgentSmyth/Serafis/Kimpton) that Dave previously rated 5★ across the board.
5. **Hyperlayer scoring is a calibration test.** A 1★ vote on Hyperlayer would confirm the v2.8 NOVELTY GATE is operating correctly on auto-rejection of OS-framings. If Hyperlayer somehow attracts Dave's attention beyond 1★, the gate may need refining.

---

## Thesis Review — 2026-05-06

### Feedback Processed
- `bg_thesis_feedback` (Supabase, project `iyoseurwycryykrnlbig`) returned 1 row total — the original 2026-04-14 test entry. No new strategic feedback rows since the table was created. No `feedback_type='thesis'` rows have ever been logged. Note that vote data has fully migrated to Turso (per CLAUDE.md and v2.7 thesis change); the Supabase feedback table is the only Supabase channel this task still consults.

### Vote Signals
- Live Turso fetch: **78 votes** (19 ★★★★★ / 9 ★★★★ / 8 ★★★ / 15 ★★ / 22 ★ / plus 5 outreach-marker 0★ entries). Cycle 10 cut-off was 2026-04-29 15:28 UTC; the corpus has grown by 5 net-new entries since, plus 2 re-votes with revised notes.
- **Five 0★ outreach markers (2026-05-05)** — revenium ("This came via the Research team. Meeting arranged for Wednesday 6th."), jentic, egdehound, trinigence, gradient-labs. All followup=True, all 0★. These are operational deal-flow markers, not star-rating signals; the underlying companies' strategic positions are unchanged.
- **Versus 5★ revision (2026-05-05)** — *the* substantive signal of the cycle. Dave's follow-up note: "the platform is built by a company called 'Kalshi' founded in 2019 with which seems to be a rather big team. I think there could be better candidates than these guys in general." Star rating preserved on the archetype (mass-market retail prediction app combining social/cultural/financial); company itself disqualified as a canonical archetype reference because it's a product of an established company, not an independent seed-stage startup.
- **openbox-ai 3★ progression (2026-05-05)** — re-voted with deal-flow note: "Had a call with them, NDA going out, demo booked." Star unchanged but the company is moving up the funnel because it's engaging on the external-agent pivot. Validates "3★ + external-pivot intent → active-deal" pathway as a real pattern.

### Thesis Changes
- **v2.8 → v2.9** (surgical edits, two locations):
  - Lead paragraph rewritten to absorb the Versus revision. Canonical 5★ archetype trio (TYTL / Versus / Noise) reduced to a duo (TYTL / Noise) with Versus held as "category validated, company disqualified by parent affiliation." openbox-ai pathway noted.
  - "What Good Looks Like — Novelty" criterion gained a new **entity-level rule**: verify that a candidate held up as a canonical archetype is an independent seed/Series-A startup before treating it as an exemplar. Parent affiliation by an established company disqualifies the archetype claim even when the underlying category is correct.
  - Versioning table extended with a v2.9 row.
- **No** gap-map changes. **No** new HARD GATES. **No** new challenge signals. **No** Studio / Research / Greens-team mandate edits — the vote signals are entity-level, not category-level.

### Preferences Changes
- `config/preferences.md` header rewritten to reflect 78-vote corpus, the Versus revision, the openbox-ai pathway, and the new entity-level rule.
- Two new "Emerging Preferences" entries added: "Entity-level archetype scrutiny (cycle 12 — first occurrence)" and "3★ + external-pivot intent → active-deal pathway (cycle 12 — first occurrence)." Both at sample-of-one; will formalise into scoring once second cases appear.

### Confidence
- **High** on the Versus revision absorption — the note is unambiguous and the entity-level rule is a clean addition to the novelty criterion without disturbing other gates.
- **Medium-high** on the openbox-ai pathway — sample-of-one, but the framing is precise and aligns with prior preference signals (external/third-party agent governance is the decisive dimension).
- **Low** strategic risk in the changes — surgical and additive, no removals, no contradiction with v2.8 HARD GATES.

### Action for Downstream Tasks
- `bg-search-terms-update` should treat thesis as substantively unchanged on direction. The minor v2.9 entity-level rule does not change the search-vocabulary surface area; if anything it tightens the *scoring* on candidates already surfaced rather than the *querying* itself. A v4.10 → v4.11 carry-forward with a brief note in the change-log on the entity-level rule is sufficient. The Versus query lines, if any exist, can be retained — the archetype is still a valid search target; only the company itself is disqualified.

---

## Preference Learning — 2026-05-03
Total votes: 73 (28 up, 37 down) | New near misses: 0 | New soft factors: none | Weight changes: none | Key insight: Vote corpus unchanged since cycle 10 (2026-04-29); all signals stable — outstanding gap is the NOVELTY GATE declared in preferences.md but not yet serialised in scoring-weights.json (2 standalone cases, needs 3+ to formalise) | Confidence: high

---

## Search Terms Update — 2026-05-01 (Cycle 11 minor refresh, v4.9 → v4.10)

### Inputs
- **Thesis:** v2.8, stable since 2026-04-29 — NOVELTY GATE in force as a HARD GATE, Internal-Workflow Filter extended to advisor-OS / family-office-OS / broker-OS.
- **Current search terms:** v4.9, header already records the NOVELTY GATE in Operating Instructions but does not propagate it into the Master Negative Filter.
- **Supabase `bg_thesis_feedback` (search_terms):** 0 rows — no new operator feedback since the table was wired up.
- **Discovery log:** the immediately-prior 2026-05-01 thesis-review entry recommended a "minor cycle-11 refresh based on the v2.8 NOVELTY GATE language (negative-filter additions for 'operating system for X', 'workflow management', 'SaaS for X' framings)" — this update implements that recommendation literally.
- **Near-misses:** no new entries since 2026-04-27. The 14 internal-workflow rejections from 2026-04-14 and the cycle-10 OS/workflow/SaaS-with-AI rejections (Avantos / Marloo / Asseta AI / IMTC / Addition Wealth) are the canonical anti-patterns.

### Changes Made
- **Header:** v4.9 → v4.10. Brief explanatory paragraph added; v4.9 framing carried forward.
- **Master Negative Filter:** four new lines appended encoding the NOVELTY GATE as global negatives — `-"operating system for advisors" -"operating system for family offices" -"operating system for brokers" -"advisor OS" -"family office OS" -"broker OS"`, plus workflow-tool, SaaS-for-advisors, SaaS-for-family-offices, AI-assisted SaaS exclusions. Vote precedent annotation added.
- **Wealth-Generation Reinvention block:** archetype list re-anchored. NOVELTY-shape 5★ archetypes (TYTL / Versus / Noise) called out explicitly; vote-validated 1★ rejections (Avantos / Marloo / Asseta AI / Seeds / Wealth.com / Addition Wealth / IMTC) listed under "Excluded archetypes." Block-specific negative filter added (advisor-OS / family-office-OS / advisor-productivity exclusions). The `"family office operating system"` query line **removed** — vote-validated as 1★ shape (Asseta AI archetype). Two new query lines added: `"category reinvention" wealth investing retail consumer` and `"new asset class" OR "novel asset surface"`.
- **Investable Everything — Product Inversion block:** Versus and Noise highlighted as canonical NOVELTY-shape archetypes; Versus framed as "social/cultural/financial forecasting" multi-pillar consumer app to clarify that adjacency framing is *not* a rejection trigger when novelty is genuine.
- **Investable Everything — Tokenization block:** TYTL highlighted as the canonical "novel asset class" shape (tokenized residential RE, full-stack).

### New Categories Added
- None. The v4.10 update is filter-hardening + archetype anchoring; no new query categories.

### Categories Removed
- One query line removed from Wealth-Generation Reinvention: `"family office operating system" platform startup 2026 seed Series A` — vote-validated as a 1★ shape via Asseta AI. The "family office as a service" / "FOaaS" / "democratised mass affluent" framings remain and now do the work this line was attempting.

### Effectiveness Notes (carried forward from cycle 10 / 11)
- **High-yield queries (do not change):** `"agent commerce billing" finserv startup` (sourced Paygentic in v4.1); accelerator-batch sweeps for YC W26 (sourced Cohesion → S1, Astor → S-Front, Sponge / Orthogonal / Maven / Autonomous in cycle 9); `site:eu-startups.com` and `site:sifted.eu` rotations for European bias.
- **Low-yield queries (kept as legacy rotation):** S2–S10 specialist-agent web-search vocabulary — three consecutive cycles of zero thesis-aligned hits via web search; the accelerator path is doing the actual work for these categories.
- **Producing noise (mitigated by v4.10):** generic wealth/advisor queries surfacing operating-system / workflow / SaaS-for-advisors framings. The new global negative-filter block should drop dedup-collision rate on the next cycle's Wealth-Generation Reinvention sweep meaningfully — measure via `config/search-state.json` after cycle 12.
- **Confidence:** medium-high. Thesis stable, vote signal stable, feedback channel empty. The change is mechanical encoding of the v2.8 HARD GATE into the global filter — low-risk, high-leverage. No structural change to the file's architecture; v4.6's audits, v4.7's alignment + diff trigger + multilingual block, v4.8's stage gate, and v4.9's NOVELTY GATE in Operating Instructions remain unchanged.

### Next-Cycle Targets (carry-forward from v4.5 negative-space audit, unchanged)
- Consumer behaviour × health × wealth × mental: still 1 card (Nayya) — needs second.
- Alternative data for life events: still 0 — empty cell.
- Frontier-research vendors for regulated environments: still 0 — empty cell.
- Tokenization & Fractionalization: 1 card (TYTL) — needs second; reverse-archetype query against Securitize / Republic suggested.
- S3 / S5 / S6 / S7 / S9 / S10: web-search exhausted; reallocate scan budget to EF, Antler London, Tenity, Mouro/Santander portfolio walks (cycle 9 recommendation, still un-actioned).

---

## Thesis Review — 2026-05-01

### Feedback Processed
- `bg_thesis_feedback` (Supabase, project `iyoseurwycryykrnlbig`) returned 1 row total — the 2026-04-14 test entry ("Test feedback - verifying table works"). No new strategic feedback since the table was created. No `feedback_type='thesis'` rows have ever been logged.

### Vote Signals
- Live Turso fetch via `scripts/fetch-votes-from-turso.py`: **73 votes total** (19 ★★★★★ / 9 ★★★★ / 8 ★★★ / 15 ★★ / 22 ★). Latest vote: 2026-04-29 15:28 UTC (`addition-wealth` 2★).
- **Vote corpus is identical to the one cycle 10 (2026-04-29) absorbed.** Zero new votes in the ~42-hour window since the v2.8 thesis update. The Supabase `bg_votes` table query returned 62 rows (now stale post-migration); the Turso source is canonical and has 73.
- The supabase->turso migration documented in v2.7 + the 65-vote delta absorbed in v2.8 means the preference model and the live vote stream are now in sync for the first time since cycle 4.

### Thesis Changes
- **No changes — thesis stable at v2.8.** v2.8 was published yesterday (2026-04-29) with the cycle 10 absorption of the 65-vote delta against the live Turso stream. The two new HARD GATES from v2.8 (NOVELTY GATE + the extended Internal-Workflow filter for advisor-OS / family-office-OS / broker-OS) and the NOVELTY-AS-LEAD-CRITERION reframing are already in force. With no new votes and no new strategic feedback, there is no evidence base for further surgical edits this cycle.
- The two existing learning-loop signals that I considered but rejected as triggering an update: (a) the v2.8 sample sizes for the new "novel category-reinvention" archetype (TYTL / Versus / Noise) are still n=3 — not enough to re-weight, but in line with the v2.8 framing; (b) the Specialist-Agent Desert challenge signal #7 is unchanged because no new accelerator-batch sweeps have run since cycle 9.

### Confidence
- **High** — vote stream is fresh, feedback channel is empty, thesis was just updated 42 hours ago against this exact corpus. Re-edit would be churn.

### Action for Downstream Tasks
- `bg-search-terms-update` (the next chained scheduled task) should treat thesis as unchanged and either carry-forward search terms v4.x or apply a minor cycle-11 refresh based on the v2.8 NOVELTY GATE language (negative-filter additions for "operating system for X", "workflow management", "SaaS for X" framings). That is the search-terms file's call to make, not a thesis change.

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

---

## Search Terms Regeneration — 2026-05-08

**Source:** thesis-schema.yaml v1.0
**Thesis version:** v3.2
**Combined hash:** 98cb6f16f79e3b11a0610deda0c5e8abf327b9142151427fb6187753704e7ca1  (thesis.md + thesis-schema.yaml)
**Search terms version:** 5.5 → 5.6
**Total queries:** 5,319
**Layer breakdown:** L1a=132 | L1b=708 | L1c=185 | L1d=32 (third-party anchor) | L1e=22 (novelty negation) | L2=176 | L3=154 | L4a=273 | L4b=2,522 | L4c=528 | L4d=357 | L4e=230

### Trigger
Combined hash mismatch — thesis bumped v2.8 → v3.2 across cycles 14 and 15 (`regen_pending: true` set on 2026-05-08). The schema's audience_archetype field (added 2026-05-07) and updated CEE/Iberian/Nordic press_sources tier-9 additions also contributed to the hash drift. Regen ran via the scheduled `bg-search-terms-update` task.

### Sources active this cycle
- **Press sources (Layer 1b):** 70 outlets total — high-priority Tier-1: fintech.global, Sifted, TechCrunch, EU-Startups, SiliconANGLE, tech.eu, Finextra, PYMNTS, Tech Funding News, Crunchbase News. Plus Tier-5 CEE highs (Mam Startup, 150sec, TheRecursive), Tier-9 country-fills (Silicon Republic, Paperjam, AIN.ua, Startit), and the European-tagged medium-tier outlets surfaced for europe-first gaps. Combined Tier-3 wires (BusinessWire/PRNewswire/GlobeNewswire/etc.) emit one combined OR query per gap.
- **Accelerators (Layer 4a):** 13 — YC, EF, Antler, Mouro Capital, Plug and Play, Techstars, Seedcamp, Notion Capital, Index Ventures, Balderton, Atomico, South Park Commons, On Deck. Filtered to European-tagged for europe-first gaps.
- **Layer 4b Seed VCs:** 117 entries; for europe-first gaps, the European-tagged subset is emitted (covers UK, FR, DE, NL, BE, Nordic, CEE/Baltic, Iberia, Greece, Ukraine, Serbia, Slovakia, Slovenia, Iceland, Cyprus, Latvia, Luxembourg, Ireland). Generalist non-tagged funds are kept in scope.
- **Layer 4c (university spin-outs):** 24 sources — Oxford / Cambridge / Imperial / UCL / Edinburgh / ETH / EPFL / TU Delft / TUM / Karolinska / Aalto / DTU / Nova UCD / Trinity / Spinout.fyi plus CEE additions (TalTech, WUT, AGH, Charles, CTU, BME, PoliMi, IE, IST Lisbon).
- **Layer 4d (competitions):** 18 sources — Slush, Web Summit PITCH, EIC, Hello Tomorrow, VivaTech, TNW, TC Disrupt, F6S, Money 20/20, Banking Tech Awards, Latitude59, Wolves Summit, Bits & Pretzels, TechBBQ, Vienna Up, South Summit, How To Web, Pirate Summit.
- **Layer 4e (databases):** 14 sources — Wellfound, F6S, Dealroom, Crunchbase, Tracxn, Beauhurst, PitchBook News, SeedTable, TheOrg, Startups Magazine, EU-Startups directory, Sifted Tracker, AngelMatch, StartupBlink. Filtered to European-tagged for europe-first gaps.

### Quality gate results
- **Layer Completeness:** all 22 gaps (S-FRONT, S1–S10, P1–P8, R1–R3) have queries in every layer ✓
- **Vocabulary Diversity:** L1 uses institutional_vocabulary, L2 uses founder_vocabulary; no register cross-contamination ✓
- **Crypto Exclusion:** applied to 18 gaps with `crypto_exclusion: true` (S-FRONT, S1, S2, S3, S5, S6, S7, P8, R1, R2, plus all europe-first non-explicit gaps) — `-crypto -DeFi -blockchain -web3 -NFT -token` appended to L1 / L4 site: queries ✓
- **Third-Party Qualifier:** 16 gaps tagged `third_party_qualifier: true` get a dedicated L1d block with API / SDK / external-agents / platform anchors ✓
- **Stage Anchoring:** every L1a query carries `seed funding` or `"Series A"` per the gap's stage_gate ✓
- **Geo Weighting:** europe-first gaps rotate across 10 European geos (Europe, London, Berlin, Paris, Amsterdam, Dublin, Madrid, Stockholm, Warsaw, Tallinn) inside L1a, and L4b/c/e default to European-tagged sources ✓
- **Novelty Anti-pattern Exclusion:** every gap with novelty_antipatterns receives an L1e query that negates the top 2 antipatterns (e.g. -"robo-advisor with AI", -"financial planning software") ✓

### Notes / deviations
- Privacy check failed on first run because three real first names (already in `config/redact-list.txt`) appeared in `learning/votes.json` notes. Per the Hard Rules in CLAUDE.md ("Anything Dave shares or uploads is private by default" + redact-list semantics), the offending notes were rewritten with neutral "teammate" labels and the privacy check then passed ✓. The names were never in `bg-search-terms.md` — they were pre-existing in vote notes.
- New query_block tracking entries seeded in `search-state.json` for the new sub-layers L1d (third-party anchor) and L1e (novelty negation) so the radar can begin measuring their yield from cycle 15 onward.
- `regen_pending` flag cleared. `regen_pending_reason` removed.

---

## Weekly Strategic Radar — 2026-05-08

### Thesis Drift Detection

**Which gaps are generating the most shortlists vs. passes?** S1 (Research & Signal Intelligence) remains 100% hit rate at 3/3 with Cohesion-pending and Kimpton AI 5★ re-affirmed this pass. Tax Optimisation now has 2/9 upvotes (Alomana 5★, Alphathena 4★ NEW) plus 4 outreach 0★s — meaningful positive cluster, densest sub-cluster of the week. Agent Payment Rails 4/10 upvotes with Solvapay 5★ confirmed and Ralio 5★ reaffirmed. Agent Auth 7/12 upvotes (T54 + Keycard reaffirmed at 5★). The empty specialist cells just-filled (S3, S5, S6, S7, S9, S10) have only one entry each and are too thinly voted to compute hit rates yet — second-entry hunting is the highest-leverage next move.

**Are any search terms producing noise?** Two specific patterns this cycle:
- *Adjacency leakage in P-safety and Auth:* SAIF Autonomy (physical AI), CogniBIT (autonomous vehicles), BottleCap AI (foundation model) all carded under finserv-shaped categories but adjacent. Vocabulary refinement should add explicit "financial services" or "regulated finance" qualifiers to P2 and Auth searches.
- *Verification-pending entries:* Trinigence carded with `VERIFICATION PENDING` flag because public press surface is too thin. Either tighten the source-quality gate before carding, or formalise verification-pending as a tracked sub-state.
- *Customer-native vocabulary working as designed:* Phase-4 reverse-archetype walks (Edgewonk → TraderSage; Brightwave → Quartr; BMLL → Tradefeedr; Alomana → Alphathena/Evergreen Wealth) all surfaced thesis-shaped candidates without the OS/SaaS/"AI for X" failure modes from prior cycles. Protocol confirmed working.

**Are there new themes that don't fit existing gaps?** No structural gaps. The closest "candidate new cluster" is **portfolio-integrated tax intelligence** (Alomana + Alphathena + Evergreen Wealth + Wallace Finance), but it sits inside the existing S4 / Tax Optimisation cell as a sub-theme rather than a new gap. If a fifth portfolio-integrated tax candidate surfaces, this would warrant a dedicated sub-theme split.

**Are any gaps candidates for deprioritisation?** Tax Optimisation is no longer maintenance-only after Alphathena 4★ — worth one more scouting cycle while the cluster is hot. Agent Orchestration has 24 detections and 1/10 hit rate; the Hard Filter is doing the lifting and this gap should drop from 🔴 every-scan to 🟠 monitor next cycle. Freed scan budget should go to S5/S6/S9/S10 second-entry hunts — each cell has only one entry; the cell needs a second to leave the single-data-point zone.

**Any signals that challenge or complicate the thesis?**
1. **OpenAI/Hiro acquisition.** OpenAI bought Hiro Finance to ship a "Personal CFO" in ChatGPT Plus/Enterprise by Q3 2026 — second OpenAI fintech acqui-hire in six months. The S-Front front-door is at material risk of being absorbed by hyperscalers; specialist layers behind it (S1–S9) remain harder for OpenAI to own vertically. Strategic implication: BG should de-prioritise S-Front as a primary scouting target relative to S1–S9.
2. **Roundhill / Bitwise / GraniteShares prediction-market ETFs go live 5 May.** Wall Street brings Kalshi/Polymarket mechanics into mainstream brokerage accounts. Validates R1 (Retail Derivatives / Prediction Markets) and creates distribution-channel pull for prediction-market specialist agents. Elastics (Warsaw, €1.7M, ex-Goldman quant) is the first BG candidate in this cell.
3. **Autonomous walkback (BG 92 → 0★).** First case of a top-tier radar prediction qualitatively walked back at outreach. Sample-of-one. If a second high-BG-score multi-fit candidate walks back, the rubric needs to weight product novelty more heavily than raise-size + accelerator-pedigree for multi-fit candidates.

### What I Learned This Week

The Phase-4 blind-spot protocol finally fired, and it worked exactly as the cycle-14 thesis said it would. Six previously-empty specialist cells (S3, S5, S6, S7, S9, S10) now each have at least one entry, surfaced through customer-native vocabulary on audience-typed surfaces and reverse-archetype walks from incumbents. The persistent zeros in those cells were never a market-supply problem — they were an execution gap inside the radar. That's a meaningful framing shift: the "specialist agent desert" challenge signal can now be downgraded from structural to operational, exactly as v3.1 anticipated. The next-order learning is about second entries: with one entry per cell, none of these new cells have enough vote evidence to drive scoring updates, and three new sample-of-one patterns (archetype-slot displacement, radar→outreach walkback, novelty-gate-in-empty-cells) are all waiting for second occurrences before they can become formal scoring rules. The strategic implication is that the next cycle's highest-leverage action is *second-entry hunting* in the cells that just got first entries, plus running the same protocol that worked here against the two cells where it hasn't yet been applied (S2 Portfolio Construction with Pillar still adjacent; S8 Financial Planning still empty).

---

## 2026-05-13 — Cycle 17 (bg-full-cycle)

### Phase 0 — Coverage Audit
Audit of thesis-v3.2 gap map against 115 active pipeline entries (135 SLUG_DATES, some superseded). No 0-company blind spots remain. **11 underrepresented categories** (1–2 companies each) flagged and elevated to mandatory ≥2-search allocation this cycle: S2 Portfolio Construction (1), S3 Trade Structuring (2), S5 Options (1), S6 Execution (1), S7 Position Monitoring (1, archetype-displaced), S8 Financial Planning (1 adjacent), S9 Behavioural Coaching (1), S10 Post-Trade (1, voted 2★), P5 Audit & Explainability (1), R1 Retail Derivatives (1, Elastics), Tokenization (2). Well-covered set (≥10): Personal Agent / S-Front (18), Compliance (19), AI Safety (18), Orchestration (16), Auth (12), S1 Research (10), Tax (10) — maintenance-mode for this cycle.

### Phase 1 — Learn
Vote corpus stable at 89 strategic ratings since cycle 16 (May 10). One new outreach marker only: `gradient-labs` 0★ on 2026-05-11 ("Aaron wants to take them in"). Per the cycle-15 convention, 0★+followup is operational deal-flow tracking, not a strategic preference signal. No new near-misses. No preference weight changes. preferences.md picks up a cycle-17 stamp; content otherwise unchanged.

### Phase 2 — Strategise
No thesis structural change. v3.2 architecture (May 8) remains intact. The cycle-17 versioning entry simply logs the audit result and reaffirms that the v3.0 operational backlog around specialist agents continues to be the primary scouting target. The fact that the underrepresented set has not shrunk since v3.2 confirms the underlying issue is supply-side seed scarcity for specialist agents, not a search-architecture problem.

### Phase 3 — Arm
No regeneration. bg-search-terms.md v5.6 (May 8) remains canonical. Added a cycle-17 override note at the top of the file noting the 11 elevated categories — override is binding for this cycle only.

### Phase 4 — Scout
Searched the 11 elevated categories plus a few maintenance categories. Most strong candidates that surfaced (Elastics, Autonomous, WealthAi, Marloo, Mogul, WarrenAI) were either already in pipeline, parent-affiliated (entity-level archetype check fail — WarrenAI is an Investing.com product), or filter-fail (WealthAi as wealth-management-OS, Mogul as artist-side tooling rather than retail investable surface).

**Two new pipeline entries:**

- **ANote Music** (R3 Tokenization, Luxembourg, EU) — score 70. European music royalty marketplace; €2M+ in royalties distributed in 2026 alone; 36 catalogues live; $4.9M total raised including Luxembourg Ministry of the Economy backing. Direct fit with Research mandate #3 (turning previously-uninvestable surfaces into investable surfaces). Second R3 candidate after Wealthyhood. Friction: founded 2018 (late-seed by age) and Algorand-adjacent stack may flag as crypto-adjacent.
- **Skyfire** (KYA + Payment Rails, San Francisco, USA) — score 67. KYA-native payment rails with the KYAPay open standard. $9.5M total seed with Neuberger Berman, Inception Capital, Arrington Capital. Founded 2023. Flagged with archetype-slot displacement against Vouched (5★) and Nava (5★); the KYAPay open-standard angle is the genuine differentiator.

**Specialist-agent vs platform-infrastructure split (this cycle's adds):** 0 specialist agents, 1 research-mandate / tokenization, 1 platform infrastructure (KYA + payment rails). The structural imbalance noted in v3.0 persists — specialist agent supply remains thin at seed.

**Phase 0 effectiveness:** The audit successfully directed scout effort to underrepresented cells. R3 Tokenization gained ANote Music as a second entry. None of the S2–S10 underrepresented cells gained a second entry — confirming the supply-side scarcity diagnosis. The pattern continues: the radar is finding maintenance-category and infrastructure candidates at seed; specialist agents need a different sourcing strategy (accelerator batches, founder-vocabulary on Product Hunt / Show HN, technical-artefact-first GitHub scans).

### Phase 5 — Publish
8 files pushed to dpowert2/Bene_Gesserit in a single commit: 2026-05-13.html (new briefing), index.html (latest run card), startups-data.js (two new pipeline entries at top + SLUG_DATES update), changelog.html (4 cycle-17 entries — system, preferences, thesis, scoring), config/preferences.md (cycle-17 stamp), config/thesis.md (cycle-17 versioning entry), config/bg-search-terms.md (cycle-17 override note), learning/votes.json (refreshed vote cache, redacted). Privacy check passed pre-push after two name redactions in votes.json.

### Drift signals
- Specialist-agent supply-side scarcity at seed continues. Two consecutive cycles (16, 17) have produced zero specialist-agent adds. The v3.1 "execution-gap fix" worked for the May 7 seed pass but has not produced repeat yields. The Phase-4 blind-spot protocol surfaced no new specialist candidates this cycle.
- Tokenization (R3 + R3-adjacent) is starting to coalesce as a coverage area: Wealthyhood (R3) + ANote Music (R3) + TYTL (Tokenization 5★ archetype) + Noise (5★) form a real cluster. Worth a dedicated R3 sweep next cycle.
- Archetype-slot displacement now has a second confirming case (Skyfire flagged against Vouched/Nava at carding time, not at vote time). If Dave votes Skyfire 3–4★ with a slot-displacement note, the pattern formalises at n=2 and graduates to a formal scoring penalty.

### Recommendations
- **Highest-value votes to cast:** ANote Music and Skyfire are the only new entries; both worth a quick read. Skyfire is the more interesting test — does archetype-slot displacement actually depress the vote, or does the KYAPay open-standard angle redeem it?
- **Emerging themes to watch:** prediction-market specialist agents (Elastics + Roundhill/Bitwise/GraniteShares ETF launch); KYA open standards (KYAPay, ERC-8004) as a sub-theme inside Agent Auth; music royalties as a clean Research-mandate-#3 sub-cluster.
- **Next cycle's highest-leverage action:** dedicated R3 sweep (real estate + music royalty + private credit + collectibles), since the Tokenization gap now has 3 candidates and is showing cluster behaviour. Also re-run the Phase-4 blind-spot protocol against S2 and S8 — the two cells where it has not yet been applied with founder-vocabulary on Product Hunt / Show HN.

---

## Search Terms Regeneration — 2026-05-15

**Source:** thesis-schema.yaml v1.0
**Thesis version:** v3.3
**Combined hash:** f9736fc9b77bbc9bf4738ca2c7ad3a2c636b3efd2b669a0cac11b5122b7562d5  (thesis.md + thesis-schema.yaml)
**Search terms version:** 5.6 → 5.7
**Total queries:** 5319 (5280 gap-layer queries + 39 sweep queries)
**Layer breakdown:** L1_generic=132 | L1_targeted_press=708 | L1c_hubs=185 | L1d_third_party=32 | L1e_novelty=22 | L2=176 | L3=154 | L4=3871 (4a=273, 4b=2522, 4c=528, 4d=357, 4e=191)

**Trigger:** Combined hash mismatch — thesis.md updated v3.2 → v3.3 (Cycle 18 vote-corpus refresh). thesis-schema.yaml source lists unchanged, so all 5,319 query lines are byte-identical to v5.7's predecessor; only the version header, the stale Cycle-17 override note (dropped on full overwrite), and the SEARCH STATE footer changed.

### Sources active this cycle
- Press sources (Layer 1b): 70 sites — 17 high-priority (fintech.global, Sifted, TechCrunch, EU-Startups, SiliconANGLE, tech.eu, Finextra, PYMNTS, Tech Funding News, Crunchbase News, Mam Startup, 150sec, TheRecursive, Silicon Republic, Paperjam, AIN.ua, Startit)
- Accelerators (Layer 4a): 13 sites — YC, EF, Antler, Mouro, Plug and Play, Techstars, Seedcamp, Notion Capital, Index, Balderton, Atomico, South Park Commons, On Deck
- Layer 2 sources: 4 — Product Hunt, Show HN, BetaList, Indie Hackers
- Layer 3 sources: GitHub MCP (primary, sort=updated, pushed:>2026-03-01) + 3 fallback surfaces (github.com topics, huggingface.co, gitlab.com)
- Layer 4b seed VCs: 117 | Layer 4c university spin-outs: 24 | Layer 4d competitions: 18 | Layer 4e startup databases: 14 | Layer 1c innovation hubs: 9

### Quality gate results
- Layer Completeness: all 22 gaps covered across L1/L2/L3/L4 ✓
- Vocabulary Diversity: L1 (institutional) / L2 (founder) registers verified distinct ✓
- Crypto Exclusion: applied to all L1/L4 queries of the 16 gaps with crypto_exclusion: true ✓
- Third-Party Qualifier: L1d anchor block emitted for all 16 gaps with third_party_qualifier: true ✓
- Stage Anchoring: all L1a queries stage-qualified (seed / Series A) ✓
- Geo Weighting: Europe/London/Berlin qualifiers in all europe-first gap L1a blocks ✓
- Novelty anti-patterns: L1e negation block emitted for all 22 gaps ✓

### Notes
- Programmatic regeneration: a deterministic generator (thesis-schema.yaml → bg-search-terms.md) was used to guarantee gate compliance. Full diff vs the prior version confirmed zero unintended query changes.
- search-state.json: thesis_hash, search_terms_version (5.7), search_terms_generated, last_run updated; all 16 tracked query_blocks preserved. No blocks in candidate_quarantine (streak ≥6) or high_yield status, so no deprecation/expansion actions taken.
- Privacy check: config/bg-search-terms.md and config/search-state.json are CLEAN against config/redact-list.txt. (Resolution note 2026-05-16: previously-flagged vote notes in learning/votes.json were redacted by the daily-sync scheduled task to unblock the privacy gate.)

---

## Weekly Strategic Radar — 2026-05-15

### Thesis Drift Detection

**Which gaps are generating the most shortlists vs. passes?** S1 (Research & Signal Intelligence) holds at 100% (3/3) with Kimpton AI re-affirmed and Cohesion pending. Agent Auth 7/14 upvotes. Tax Optimisation 2/9 upvotes, but deal-side conviction on Alomana is softening ("feel more like a consultancy"). Agent Payment Rails 4/12 upvotes with two strong new infrastructure entries (Astrada, Adfin). R3 Tokenization recorded its first upvote (ANote Music 5★) — 1/1 in-cell. Specialist cells S5/S6/S7/S9/S10 remain at one entry each, too thinly voted to compute hit rates, and got no second entries this week.

**Are any search terms producing noise?** Three patterns this week: (1) Wrong-side-of-boundary cards still passing the carding gate — Fenrock AI (bank back-office), Avantos (institutional OS), Marloo (advisor workflow — already 1★), A-Cube (tax filing/compliance) all carded into thesis-shaped categories but sit on the wrong side of the internal/external boundary or the tax filing/efficiency line; the scoring filters catch them but they consume carding budget. Recommend tightening L1 query qualifiers for Compliance and Tax cells. (2) Series A / over-funded cards surfacing in priority cells — Avantos ($25M Series A), Adfin ($18M Series A), Performativ ($14M Series A) all carded despite being past the BG entry window; should be tagged `validator` at carding time, not scored as candidates. (3) Specialist-cell queries are simply dry — S3/S5/S6/S7/S9/S10 logged empty or low-yield in all four briefings; argues for retiring the press-sweep queries for these cells and replacing them with accelerator-batch and Show-HN/Product-Hunt founder-vocabulary lanes.

**Are there new themes that don't fit existing gaps?** No structural gap. The R3 Tokenization cluster (ANote Music + Wealthyhood + TYTL + Noise) has crossed four entries with a vote confirmation — it warrants its own theme cluster (added to theme-clusters.json this cycle) and a dedicated R3 sweep next cycle, but it is a Research-mandate sub-area, not a new gap-map category. The advisor-workflow-automation wave (Marloo, Flanks, Performativ, Savvy) is real but explicitly out of thesis scope — track as an adjacency cluster, do not promote.

**Are any gaps candidates for deprioritisation?** Agent Orchestration (25 detections, 1/10 hit rate, Hard Filter doing all the work) should formally drop from every-scan to monitor cadence — flagged for two cycles now, still not actioned. Agent Authentication is well-covered (14 companies, 7 upvotes) and can move to maintenance cadence. Freed budget should NOT go to another specialist-cell press sweep — that has failed three cycles running — but to accelerator-batch and founder-vocabulary lanes for S5/S6/S9/S10, and to the dedicated R3 sweep.

**Any signals that challenge or complicate the thesis?**
1. **Stage gate fires too late — Resistant AI killed as a deal despite a 5★.** The week's headline signal. Resistant AI was carded, voted a genuine 5★ on thesis-fit, entered the funnel, then killed at the deal stage purely on stage grounds ("too late stage … should have caught it earlier"). Distinct from the Autonomous radar→outreach walkback (where thesis-fit was weaker than the score implied); here the thesis-fit was real and the stage problem was simply not caught upstream. Operational fix, now overdue: the Series-B+/over-funded check must fire at carding/radar time as a hard pre-filter, not only as a post-vote scoring penalty. This week's carded validators (Avantos, Adfin, Performativ) are exactly the cards that pre-filter should have tagged.
2. **Specialist-agent supply is genuinely thin — the cycle-15 "execution gap" framing was half right.** The Phase-4 protocol surfaced first entries, but three cycles of zero second entries indicate the press-sweep surface is exhausted for these cells. The "specialist agent desert" is not fully resolved as an operational problem; it is partly a real public-market supply scarcity. The thesis should re-acknowledge this rather than treat the desert as closed.
3. **Hyperscaler compression of S-Front continues.** OpenAI's Hiro acquisition reinforces last cycle's signal — the consumer front door is being competed for at foundation-model level. The thesis read holds (de-prioritise S-Front relative to S1–S9), but the compression is now a confirmed trend, not a one-off.
4. **The card networks are funding the rails directly.** Astrada with Visa + Mastercard on the cap table is a sharper version of challenge signal #1 in the thesis ("incumbents claiming agent infrastructure"). Not yet a threat to the platform thesis — Astrada is a startup, not a network-owned product — but it signals the networks intend to shape who builds the rails.

### What I Learned This Week

The most important thing this week was not a discovery — it was a miss. Resistant AI was a real 5★, a genuine thesis-fit, and it still got killed as a deal because nobody caught the stage problem until the deal stage. That tells me the scoring model is calibrated on the *what* (is this thesis-aligned?) but the radar pipeline has no gate on the *when* (is this still shapeable?), and a post-vote penalty is structurally too late to matter. The second lesson is harder to admit: the specialist-agent desert is not the pure execution-gap problem cycle 15 declared it to be. The Phase-4 protocol surfaced first entries by reverse-archetype walking, but three cycles of zero second entries means the public-press seed supply behind those cells is genuinely thin — the founders are in stealth or being absorbed by incumbents. The week's actual signal density was all on the infrastructure side: Agent Payment Rails got two strong new entries and a Visa-plus-Mastercard cap table, while S5/S6/S7/S9/S10 got nothing. The single bright spot that fits the forward-looking thesis is ANote Music's 5★ — the first vote evidence that the R3 tokenization / music-IP surface votes positive, and enough of a cluster now (with Wealthyhood, TYTL, Noise) to justify making the dedicated R3 sweep the next cycle's highest-leverage action instead of another specialist-cell press sweep that the last three cycles have shown will come back empty.
