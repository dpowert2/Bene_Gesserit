# BG System Evaluation — Operator Addendum
*Layer added 2026-05-07 by the cycle-14 author. Reads as a supplement to `system-evaluation-2026-05-07.md`. Where the independent evaluation took a softer view, this is harsher; where it missed concrete drift, this catches it; where the recommendations need ordering, this orders them.*

---

## Where I think the independent evaluation was too generous

**1. "Self-correction discipline" is over-credited.** The evaluation says BG over-performs on self-correction because the discovery log documents failures and cycle 14 closed the execution gap. True at the level of *recording* failures — but the same failure was documented for four cycles before being fixed. The right framing is: *BG documents better than it executes.* The Phase 4 protocol authored in cycle 14 is the first *binding* of a documented cure into scheduled behaviour. That's not "self-correction discipline" — it's "we finally noticed we hadn't been doing what we said we would." Treat as a one-time fix, not a property.

**2. Novelty filtering is not "codified hard filters with vote-based thresholds" yet.** The evaluation Section 5 caught this — `scoring-weights.json` has no `novelty_gate` entry, only the two original hard filters. But the "What's working" section #3 then claims novelty filtering is a strength. Both can't be right. The accurate read: the novelty *language* is sharp and Dave applies it manually at vote time; the *system* does not enforce it pre-scoring. This matters because cards score high → reach the top of the briefing → get seen → get rejected. The pre-scoring gate would prevent the cycle.

**3. Funnel "to deal flow" claim needs a denominator.** 38 outreach markers / 107 live = 35%. But Kanban states show 3 accepted, 6 talked_to, 3 contacted, 1 rejected — that's 13 actively progressing of 38 outreach = 34% conversion from outreach to active conversation. Of 107 cards total → 13 active = 12% conversion. Real, but not the headline rate the evaluation implies. A professional VC team at this stage might run 20–30% to-meeting conversion on cold-outbound; BG's 12% is the right order of magnitude but not exceptional. The evaluation should not have framed it as a strength without the denominator math.

---

## Gaps the independent evaluation missed

**A. Taxonomy drift between schema and the operational reports.** `cycle-13-coverage-report.md` lists `S5 Execution` as empty. `thesis-schema.yaml` defines `S5 = Options & Derivatives Strategy Agent` and `S6 = Execution Agent`. The coverage report's S-numbering is shifted by one. The operational layer was using a different S-number map than the schema. Cycle 14 didn't catch or fix this. **Severity: MEDIUM** — when audits cite "S5" they mean different cells depending on which doc you're reading. Fix: align all reports to schema numbering.

**B. The auto-update task prompts reference SKILL.md files outside the workspace.** `task-prompts/bg-search-terms-update-v2.md` and `task-prompts/radar-step-0b-addition.md` both reference paths under `~/Documents/Claude/Scheduled/`. These files are the *actual* schedule executors but they live outside the repo and are not version-controlled within BG. There is no test that verifies the SKILL.md content matches the task-prompt convention docs. **Severity: HIGH** — this is the single biggest "trust gap" in the system. The repo can be perfect and the actual scheduled behaviour can drift silently.

**C. The Era card is orphaned.** A 2026-05-07 changelog entry (above the cycle-14 system entry) shows `bg-card-era.html` was generated as a standalone HTML file via the bene-gesserit-card skill, scored 100/100, but explicitly marked "Not yet added to `startups-data.js` or the live pipeline — pending decision on inclusion." It's been a day. Either decide and add it, or formally archive it. Don't let cards sit in limbo. **Severity: LOW** but symptomatic of a workflow gap: there's no "card → pipeline" promotion checklist.

**D. Phase 5 (Publish) has no automation binding.** The how-it-works site says "After each scan, the digest site is regenerated" — implying automation. In practice cycle 14 publish ran via the operator manually invoking the publish skill. There is no scheduled-task definition that triggers publish automatically after Phase 4 completes. If the operator ever forgets to publish, the live site silently stales. **Severity: MEDIUM**.

**E. The "agent_exposure_api_callable" emerging soft factor has been stuck at 2/3 for cycles.** Pattern: 5★ votes for Serafis and Kimpton AI both included "better if it exposed an agent." Quartr (just added) is a textbook fit for this preference. The factor is documented in `scoring-weights.json` under `soft_factors_pending` waiting for a third case to formalise. This is one vote away from a real scoring rule. **Severity: LOW** but actionable: vote on Quartr and it likely formalises automatically.

**F. The thesis carries quality criteria as prose ("compliance-native architecture", "agent-callable", "European preferred") that aren't structured fields in the schema.** Only `geo_preference` is a schema field; the others live in prose-only sections of `thesis.md` and the per-gap `target_company_shape`. The scoring model can't apply them as gate conditions. **Severity: LOW**.

**G. Vote-note tags are unstructured.** Each vote has a free-text note. Dave's notes are gold (e.g. "Just too late at series B" maps cleanly to stage_match_penalty). But there's no structured tag taxonomy on the votes themselves — the soft-factor extraction is a manual pattern-matching exercise on each cycle. A simple controlled vocabulary on votes (`stage_concern`, `adjacency_concern`, `novelty_concern`, `architecture_concern`, etc.) would let the preference-learning step run automatically rather than via prose parsing. **Severity: MEDIUM**.

**H. No time-decay on preferences.** Votes from 2026-03-15 weigh the same as votes from 2026-05-05. Thesis priorities have shifted (specialist agents now primary, infrastructure now maintenance) but the older votes still anchor weights. **Severity: LOW** for now; **MEDIUM** if the thesis keeps evolving.

**I. The "next_cycle_target" anti-pattern is not generalised.** Cycle 14 fixed the specific case (blind-spot scouting recommendations don't fire). But the *pattern* — "a recommendation carried forward 2+ cycles without action should escalate" — isn't codified anywhere. The same kind of drift could recur for other recommendation classes. Could be a generic rule in the radar's Phase 0 output. **Severity: MEDIUM**.

**J. No regression test on the search-state.json. Funnel snapshots in search-state.json stop at 2026-05-06 23:45 UTC.** The cycle-14 run did not append a fresh snapshot. The last entries don't reflect the 5 new cards or the cycle-14 results. **Severity: LOW** but it means the funnel chart on index.html is showing pre-cycle-14 numbers.

---

## What I think the consensus priorities are

Across the independent eval and this addendum, the items where both views agree (high signal):

| # | Action | Eval rank | My rank | Combined |
|---|---|---|---|---|
| 1 | Bind the Phase 4 protocol into the actual `bene-gesserit-radar` SKILL.md | High | High | **Top priority** |
| 2 | Run `generate-search-terms` regen against the upgraded schema (clears REGEN PENDING) | High | High | **Top priority** |
| 3 | Verify the SKILL.md files outside the repo match the task-prompt convention docs | (missed) | High | **New top priority** |
| 4 | Reconcile taxonomy drift: align coverage reports to schema S-numbering | (missed) | Medium | Next cycle |
| 5 | Formalise the novelty gate as a hard filter in scoring-weights.json | Low | Low (but recurring) | Next cycle |
| 6 | Write reverse-prompts for S3, S5, S7, S10 | Medium | Medium | Next cycle |
| 7 | Add a generic "carried-forward recommendation" escalation rule | (missed) | Medium | Next cycle |
| 8 | Add structured tag taxonomy to votes | (missed) | Medium | Backlog |
| 9 | Add time-decay to preferences | Low | Low | Backlog |
| 10 | Decide on Era — add to pipeline or formally archive | Low | Low | Quick win |

The dominant theme: **trust the system to do what its docs say it does.** Three of the top-five items are about closing the gap between documentation and execution.

---

## What I'd actually do this week (in order)

1. **Verify the scheduled-task skill files match the convention docs.** Open `~/Documents/Claude/Scheduled/bene-gesserit-radar/SKILL.md` and `~/Documents/Claude/Scheduled/bg-search-terms-update/SKILL.md`. Confirm the radar reads the Phase 4 blind-spot protocol when Phase 0 outputs a target. Confirm the search-terms-update task references the v6 spec. **If they don't, this week's biggest leverage is updating those two files.**
2. **Run `generate-search-terms` regeneration** against the upgraded schema. This produces v6.0 of `bg-search-terms.md`. Removes the REGEN PENDING flag.
3. **Vote on Quartr** — formalises the agent-callable soft factor (3/3 threshold) and provides a clean test of the protocol's first-card delivery.
4. **Reconcile taxonomy** between cycle-13 coverage report and schema S-numbering — fix the drift before it cascades.
5. **Write the reverse-prompts for S3, S5, S7, S10** — modelled on the existing S6 file. These unblock Step C of the Phase 4 protocol for next cycle's blind-spot pass.

The Era decision and the orphaned card cleanup are low-cost quick wins to land alongside.

---

## What worries me most

The single biggest risk is that the cycle-14 work I just did is *itself* a "carried-forward recommendation" — the protocol exists, the conventions exist, the schema upgrade exists, but the actual scheduled tasks may not yet read them. If the very pattern cycle 14 fixed (documented cure not bound to scheduled behaviour) recurs at the meta-level (cycle-14 fix not bound to scheduled behaviour), then I've shipped paperwork, not change. **The verification step in priority #1 is the test.**

The second-biggest risk is more subtle: BG is a single-operator system, and the operator is the only validator of every output. There is no peer review, no IC challenge, no LP signal. When the system surfaces something interesting, the operator's vote is the entire feedback loop. That works while attention is high. It fails silently when attention drops. The metric "days since last vote" the independent eval recommended is the right canary.
