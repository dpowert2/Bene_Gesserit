# Bene Gesserit System Evaluation
*Independent review, 2026-05-07*

---

## Headline assessment

BG is a **sophisticated, self-aware system that has successfully identified and is actively fixing its own blind spots**. The core thesis is sharp, the funnel produces real deal flow (38 companies at "meeting arranged or outreach"), and the operator has built legitimate calibration discipline into the radar. The system's greatest strength is its operational transparency—every failure is documented, every fix is tracked. The most important gap is not in the system's design but in execution velocity: documented cures for empty specialist-agent cells were carried forward un-actioned for four cycles before being bound into the Phase 4 protocol in cycle 14.

---

## What's working

1. **Thesis rigour and internal coherence.** The "app store for financial agents" thesis is genuinely novel—not a repackaging of existing robo-advisor or wealth-tech narratives. The three-team structure (Research/Studio/Greens) with distinct time horizons and mandates is a credible institutional operating model, not a filing convenience. The thesis has evolved precisely as new market signals (eToro App Store launch, Santander+Mastercard live payments) validate it. Version 2.8→3.0→3.1 progression shows disciplined editing.

2. **Blind-spot diagnosis is self-correcting.** The discovery log documents that S3/S5/S6/S7/S10 specialist-agent cells persisted at zero for cycles 9–13 despite the same recommendation appearing in every cycle's "next_cycle_targets." Cycle 14 authored `radar-phase-4-blind-spot-protocol.md` to bind the cure (accelerator-batch sweeps, reverse-archetype queries, GitHub MCP, audience-typed surfaces) into Phase 4 directly. This is not avoidance—it's acknowledgement and repair. The 3 new cards (Quartr, Tradefeedr, QuantWheel) in previously empty cells validate the protocol.

3. **Scoring weights are evidence-based and auditable.** The 16 soft factors in `scoring-weights.json` are each tied to specific votes with explicit rejection notes. The two hard filters (Internal Workflow –50, Accounting/CFO –50) rest on 16 and 5 votes respectively with zero upvotes—meeting the formal threshold. The linx-security near-miss (score 94 → 2★ for stage) is a textbook example of a model error being caught and metrics adjusted (gap_fit down 5 points, stage_match up 5 points).

4. **Real funnel progression to deal flow.** Of 107 live cards, 73 are voted, 38 have arranged meetings or outreach markers (35% funnel rate). The "talked_to" state shows 6 live conversations; "accepted" state shows 3 companies past first-call stage. This is not a well-organised spreadsheet—it is a real discovery-to-relationship funnel with velocity.

5. **Privacy and deployment discipline are strict.** The `privacy-check.sh` chained with `&&` in the publish flow, the refusal to use "Fidelity," the redaction rule ("Use role labels, not personal names")—these are not formalities. They are codified safeguards preventing downstream operational risk. The Supabase→Turso migration in cycle 10 (forced by free-tier auto-pause) shows recovery from infrastructure failure without losing signal.

---

## Gaps and risks

### 1. **Search vocabulary for specialist agents is structurally stale (severity: HIGH)**
**Evidence:** `bg-search-terms.md` v5.5 is marked "REGEN PENDING" at the top. The schema was upgraded in cycle 14 with `audience_archetype` tags per gap and founder-native vocabulary rewriting for S3/S5/S6/S7/S10. The v6.0 search-terms spec exists in `task-prompts/generate-search-terms-v6-spec.md` but has not been applied to the generated file. Until it is, Phase 4 blind-spot cells fall back to the documented workaround protocol—which works, but is manual and cycle-dependent.
**Impact:** A specialist-agent candidate using founder phrasing ("the wheel on autopilot" for S5 Options) will not appear in vocabulary-driven searches until the regen runs. The workaround protocol is catching them, but a scheduled cycle that skips the protocol without the regen will miss them.
**Fix:** Invoke `generate-search-terms` skill immediately to apply v6-spec to the schema. Set up a calendar reminder to re-run this after any thesis revision that touches founder_vocabulary fields. Consider adding a pre-flight check in the `bg-full-cycle` skill that verifies search-terms version >= thesis-version.

### 2. **Execution gaps persist between what is documented and what runs (severity: MEDIUM-HIGH)**
**Evidence:** The Phase 4 blind-spot protocol was authored and documented in cycle 14, but its predecessor—the same recommendation about accelerator-batch sweeps—was carried forward un-actioned for cycles 9–13. The discovery log explicitly notes: "carried as `next_cycle_target=true` in `search-state.json` for cycles 9, 10, 12, 13 — un-actioned each time." The `bene-gesserit-radar` skill (in `~/Documents/Claude/Scheduled/`) has not been updated to read the new protocol. Without that bind, cycle 15 will face the same risk.
**Impact:** If Phase 0 flags a blind spot and the radar skill does not reference the new protocol, Phase 4 will default to vocabulary-driven search and the specialist-agent yield will drop back to zero.
**Fix:** Update the `bene-gesserit-radar` SKILL.md in `~/Documents/Claude/Scheduled/bene-gesserit-radar/` to read `task-prompts/radar-phase-4-blind-spot-protocol.md` whenever Phase 0 outputs a `next_cycle_target=true` cell. Make this a read-first action, not a downstream note.

### 3. **Reverse-prompts for S3, S5, S7, S10 do not exist (severity: MEDIUM)**
**Evidence:** Phase 4 Step C (reverse-archetype queries) depends on reverse-prompt files. Only `config/reverse-prompts/S6-execution-agent-pitchbook.md` exists. S3 Trade Structuring, S5 Options, S7 Position Monitoring, and S10 Post-Trade have no equivalent. The discovery log (cycle 14 recommendations, item 4) lists this as backlog but does not mark it urgent.
**Impact:** Step C cannot run cleanly for those cells without manual reverse-engineering of the incumbent list and Crunchbase/G2 query strategy.
**Fix:** Write reverse-prompt files for S3 (reference Holistiplan), S5 (reference an options retail platform), S7 (reference ThinkOR or similar), and S10 (reference TradeGym or similar). Model on the S6 file. Include list of canonical incumbents and three structured queries per cell. Estimate 2 hours total for four files.

### 4. **Vote stagnation is a single-operator risk (severity: MEDIUM)**
**Evidence:** The vote corpus is 78 votes (73 unique cards, 5 outreach markers) with last new vote dated 2026-05-05. The live-pipeline is 107 cards but only 69% are voted. The discovery log shows that "no new votes since 2026-05-05" appeared in both the May 6 morning cycle and the May 6 PM cycle—a 30+ hour freeze with no Phase 1 (Learn) signal processing.
**Impact:** If voting pauses for a week, the system does not auto-degrade—it simply carries forward the prior preferences. But if the operator changes their investment priorities or thesis direction, the old weights will produce increasingly stale scores. A feedback loop breakage is invisible until the operator notices a score that seems "off."
**Fix:** Add a cycle-level metric in `discovery-log.md`: days since last new vote. Escalate a comment to the operator if >7 days. Set up a reminder every Friday to "review 3–5 cards and cast votes" as a lightweight calibration gesture.

### 5. **Novelty Gate is declared but not fully serialised (severity: LOW)**
**Evidence:** The "Novelty (lead criterion since cycle 10)" section of the thesis is formal, and preferences.md documents it as a Hard Filter ("Automatically reject OS framings, workflow tools, SaaS-for-X companies"). But `scoring-weights.json` does not have a `novelty_gate` soft factor entry—it is mentioned only in the pending list and in comments. Near-miss analysis shows it working (Wealth.com 1★, Avantos 1★, Marloo 1★, Asseta-AI 1★) but the scoring model itself does not express it as a named, weighted rule.
**Impact:** When a new card lands that is high-fit on gap + stage + team but framings as "operating system for X," the scoring model will assign points normally, and the rejection will come as a downvote post-scoring rather than a pre-scoring gate. This makes it harder to detect when a candidate narrowly misses due to framing vs. substance.
**Fix:** Add a `novelty_gate` hard filter (or equivalent) to scoring-weights.json when the third standalone case appears. Currently at 2 cases (Wealth.com, Avantos). Threshold for formalisation is 3+.

### 6. **Funding-stage discretion in near-misses is under-documented (severity: LOW)**
**Evidence:** linx-security scored 94 but received 2★ for "Just too late at series B." The Series B+ soft factor (–15 points) would reduce 94 to 79, but the actual downvote suggests stage is applying a larger discount. Unique-AI received 4★ with a note "Maybe a little late for a chat" at Series A $30M. The stage gate is real but its precise threshold (Series A $X = acceptable, Series A $X+1M = too late) is fuzzy.
**Impact:** Borderline-stage companies will score high pre-vote and then be downvoted on stage grounds. The delta between model confidence and actual vote can be large, making cycle-by-cycle calibration noisy.
**Fix:** Codify stage thresholds in the thesis: "Series A up to $30M acceptable; $30M+ signals over-maturity even if stage label says A." Build a lookup table in preferences.md with example companies at each boundary.

### 7. **Entity-level archetype rule is documented but not automated (severity: LOW)**
**Evidence:** The Versus revision (cycle 12) established a new rule: verify independence before treating a candidate as an archetype. The rule is stated clearly in preferences.md and thesis.md but there is no check in the scoring model or the radar that would detect parent-company affiliation automatically.
**Impact:** A future candidate that is a product of an established incumbent (like Versus/Kalshi) will score highly on gap_fit and other dimensions, and the rejection will come only at vote time when the operator notices the parent affiliation.
**Fix:** Add a scoring soft factor: "Established parent affiliation –20 points (candidate cannot serve as an archetype even if category is correct)." Or add a pre-score alert if the company is known to be a subsidiary of an existing financial-services incumbent. The latter is harder without external data; the former is immediately implementable as a note to self.

### 8. **Candidate deduplication is manual (severity: LOW)**
**Evidence:** The discovery log (cycle 13) notes: "Resolves an existing 0★ outreach marker in the vote stream under typo'd slug 'egdehound' — formalised this cycle as 'edgehound'. The typo'd vote slug needs reconciliation in a future cycle." This is a one-off, but it shows that if a candidate lands under two different names or spellings, the system has no deduplication layer.
**Impact:** If a company receives a 5★ vote under slug `my-startup` and later arrives as a new card under slug `mystartup`, it will be scored and carded as a duplicate. The vote history is lost.
**Fix:** Before carding any new candidate, run a fuzzy-match check against the live pipeline and vote corpus. The YAML schema can include a `canonical_slug` field per company. Set up a monthly deduplication audit.

### 9. **Arbitrage between voting and internal-memo notes is untracked (severity: LOW)**
**Evidence:** The discovery log shows that Follow-up-requested flags correlate with 4–5★ votes (all 12 followup-requested companies are 4★+), but there is no formal scoring bonus for "demonstrated intent to engage." A company with strong follow-up notes may be downranked by future cycles if voting stagnates and context is lost.
**Impact:** Institutional memory lives in the notes field of the vote, not in the score. A 3★ vote with the note "strong product, wrong timing — check back in 6 months" will not surface again in 6 months without manual follow-up.
**Fix:** Implement a "snooze until date X" field in the vote model. Cards with snooze dates >today should float to the top of Phase 0's coverage audit. Turso supports this natively (add a `snooze_until` timestamp column).

### 10. **Search-state.json carries metadata but not schema version alignment (severity: LOW)**
**Evidence:** `search-state.json` tracks thesis_hash and carries a `regen_pending` flag. But it does not track the schema-version that the current search-terms.md was generated against. When thesis-schema gets upgraded (as in cycle 14), the flag is set but the earlier version (1.0) is not explicitly linked to v5.5.
**Impact:** A future contributor may not realize that v5.5 + schema 1.0 are a pair, or that schema 1.1 exists and requires v6.0+ of search-terms. The version alignment becomes implicit rather than explicit.
**Fix:** Add a `search_terms_schema_version` field to search-state.json. Track it alongside thesis_hash and regen_pending.

---

## Best-practice comparison

**How a professional VC scouting operation would build this:**

A 10-person VC scout team would typically run with: (1) a 100–200 company pipeline divided by sector/stage; (2) a weekly or bi-weekly triage meeting where analysts present new cards and vote; (3) a CRM database (Airtable, SalesForce, Linear, Carta) tracking funnel state; (4) dedicated scouts for each subsector with deep domain networks; (5) a weekly "market signals" briefing pulling from news, Twitter, research reports, and investor calls; (6) quarterly thesis reviews with the investment committee; (7) a dealflow attribution model to measure which sources produce the best outcomes.

**Where BG over-performs:**

- **Self-correction discipline.** Most scout teams carry forward "we should search for X" as a standing agenda item without binding it to default behavior. BG's Phase 4 protocol makes the cure automatic.
- **Vote explainability.** A professional team's voting notes often stay in Slack or meeting transcripts. BG's preferences.md is a public, versioned record of why each company scored the way it did, with explicit contradictions surfaced (Versus archetype validated, company disqualified).
- **Novelty filtering.** Most scout teams struggle with "workflow tool for X" versus "genuine innovation in X"—the boundary is inherently subjective. BG has codified hard filters with vote-based thresholds.
- **Documentation of what doesn't work.** The discovery log is an explicit failure journal. Most teams do not maintain this; they move on to the next cycle.

**Where BG under-performs:**

- **Velocity of execution.** A 10-person team would have the S3/S5/S6/S7/S10 cells filled within 2 weeks via accelerator-batch walks. BG took 4 cycles (8 weeks) because the recommended path was not bound into the radar until cycle 14. Single-operator systems are slower at turning recommendations into action.
- **Feedback loop breadth.** A professional team gets weekly pressure from deal-flow partners ("have you seen this company?"), from the IC ("where are candidates in X"), and from portfolio companies ("we want to integrate with Y"). BG has no external signal loop—all signal is internal voting. If the operator's thesis drifts, there is no counter-pressure from outside.
- **Candidate sourcing beyond search.** Professional teams source from: warm intros via LPs, mutual-fund holdings reviews, competitor-intelligence tools (Crunchbase, PitchBook, Dealroom APIs), advisor networks. BG is web-search first + accelerator batches. This is sufficient for early-stage startups but misses many Series A companies that never appear in press.
- **Quantitative precision on hit rate.** BG tracks funnel snapshots but does not measure precision @ k (how many of the top-10 recommendations convert to meetings vs. 20 do-not-meets). A professional team would track: "of the 15 we approached in March, 3 resulted in meetings; of those, 1 is now in active evaluation; our conversion rate is 20% meetings / 7% active."
- **Explainability of rankings.** BG shows why a company scored high (gap_fit=30, stage=25, novelty check, soft factors applied), but not why it ranks #5 instead of #3 when two companies have similar scores. A decision-tree visualization or a "similar-score cluster" audit would help.

---

## Specific contradictions / drift to fix

1. **thesis.md v3.1 credits the Phase 4 blind-spot protocol as cycle-14 finding, but discovery-log.md cites it as un-actioned for cycles 9–13.** The protocol was *authored* in cycle 14, not discovered then. The phrasing should shift: "Cycle 14 — execution-gap fix: authored `task-prompts/radar-phase-4-blind-spot-protocol.md` to bind the cure that was documented but un-executed from cycles 9–13."

2. **search-state.json lists cycle 14 team_coverage targets but does not reflect the 3 new cards from cycle 14.** The file shows `cycle_completed_at: null` and the latest funnel snapshot is from May 6 23:45 UTC (pre-cycle-14-protocol-run). This should be updated to reflect the May 7 closure.

3. **preferences.md footer says "Last updated: 2026-05-06 (cycle 12)" but cycle 13 and 14 have absorbed votes and Versus revisions.** The date should be 2026-05-07 to align with the thesis.md and discovery-log.md versioning.

4. **thesis-schema.yaml header says "Thesis version this tracks: 2.8" but thesis.md is now 3.1.** The schema was upgraded for cycle 14 but the header comment is stale.

5. **near-misses.md summary table shows "2026-05-03 — 0 new near-misses" but discovery-log shows "vote corpus unchanged since 2026-05-05."** The dates should align: near-misses data is only as fresh as the vote corpus.

---

## What I would do this week

1. **Run `generate-search-terms` skill immediately** to apply `task-prompts/generate-search-terms-v6-spec.md` to `config/thesis-schema.yaml` and produce `bg-search-terms.md` v6.0. Set a calendar reminder to re-run this after any thesis revision that updates `founder_vocabulary` fields. Remove the "REGEN PENDING" note from search-terms.md once complete.

2. **Update the `bene-gesserit-radar` skill** to read `config/task-prompts/radar-phase-4-blind-spot-protocol.md` as a first action in Phase 4. Add the line: `if phase_0_output.next_cycle_targets, read task-prompts/radar-phase-4-blind-spot-protocol.md and execute steps A–F.` This binds the protocol into the default behavior so cycle 15 does not regress.

3. **Write reverse-prompt files for S3, S5, S7, S10** (4 files, ~30 min each). Model each on `config/reverse-prompts/S6-execution-agent-pitchbook.md`. Include: (a) list of canonical incumbents, (b) 3 structured queries (Crunchbase competitors, G2 alternatives-to, investor portfolio adjacency).

4. **Reconcile vote-side metadata** in the Turso `bg_votes` table: (a) fix the 'egdehound' slug tie-up from discovery-log cycle 13 item 1, (b) add a `snooze_until` column and backfill 3–5 cards that have "check back in 6 months" notes, (c) spot-check for any other slug typos or duplicates using fuzzy matching.

5. **Update search-state.json and preferences.md** dates to 2026-05-07, add cycle 14 funnel snapshot, update thesis-schema.yaml header to reflect thesis v3.1, and add a `search_terms_schema_version` field to track version alignment.

---

## Things I'd track to know if BG is getting better

1. **Specialist agent candidate sourcing velocity** — measure in cards/week for S3/S5/S6/S7/S10. Baseline from cycle 13: 0 cards/week via web search, ~3 cards when protocol runs manually. Target: 1–2 cards/week sustained once protocol is bound into the radar.

2. **Outreach-to-meeting conversion rate** — of the 38 companies in "meeting arranged or outreach" state, measure how many convert to "talked_to" and from there to "accepted" each month. Target: 30% meeting rate sustained (current: 35% at 107-card scale; sample size is small but directional).

3. **Vote freshness / operator engagement** — days since last vote cast. Target: <7 days. If >14 days, candidate for escalation (could indicate loss of interest or thesis shift that auto-update is not detecting).

4. **Thesis drift detection** — compare bias in new votes (last 10 votes) against the soft factors in scoring-weights.json. If a new pattern appears (e.g. "AI-native founders preferred but not scoring that way"), surface it in the discovery log as a signal that weights need adjustment.

5. **Near-miss resolution rate** — every near-miss represents a scoring model error. Track how many are resolved in the next 2 cycles (either the company is re-voted with context correction, or the scoring model is updated to prevent the same error). Target: 80% resolution within 2 cycles; if a near-miss persists 3+ cycles without explanation, it signals a systematic blind spot.

---

*This evaluation is based on code and operational records as of 2026-05-07. The system is actively improving. The most important risk is execution velocity: documented cures must be bound into scheduled tasks, not carried forward as recommendations.*
