# Thesis Writing Conventions
*Authoritative structural rules for any task that writes or rewrites `config/thesis.md`. Read this before generating any change to the thesis. These rules apply to the bg-full-cycle radar task (specifically Phase 2 — Strategise), to manual edits, and to any agent or skill that touches the file.*

*Last updated: 2026-05-07 — locked in alongside thesis v3.0 structural cleanup.*

*Cadence note: Phase 2 of `bg-full-cycle` runs every 2 days. The conventions below assume that cadence. The thesis is small enough that two days of new vote / market / strategic-feedback signal rarely justifies more than a one-row addition to the Versioning table and a tightening of the Learned Preferences section. Surgical edits — not rewrites — are the norm.*

---

## Why these rules exist

The thesis was bloating one cycle at a time because every auto-update appended a paragraph of version notes to the header, embedded operational findings inside the prose, and let team-hypothesis sections drift toward unstructured narrative. v3.0 is the clean baseline. These conventions are how it stays clean.

The prime rule: **adding content is never enough. Every change has to either (a) replace existing content, (b) compress two existing things into one, or (c) move content out into a separate file.** Net additions to the thesis without compensating removals are a violation.

---

## Section structure (do not change)

The thesis has eight sections, in this order. Do not add new top-level sections without removing one.

1. Header (one paragraph max, ending in version number)
2. Core thesis
3. Why now
4. Where the competition is wrong
5. The three teams (table + Research + Studio + Greens hypotheses)
6. Gap map (table only)
7. How the customer experience flows through specialist agents
8. What good looks like
9. Learned preferences (compact summary)
10. Signals that challenge the thesis (numbered)
11. Versioning (table only)

---

## Header rules

The header is one paragraph and ends with the version number. It names the cycle, the structural change (if any), and any active hard gates. **It does not include version-history narrative.** All version history goes in the table at the bottom.

✅ Good: "Cycle 13 absorbed the search-architecture redesign. Research, Studio, and Greens hypotheses are now uniformly structured. All v2.9 hard gates remain in force."

❌ Bad: "Cycle 12 absorbed 5 new vote events plus 2 re-votes with revised notes. The headline finding from the 2026-05-05 wave is the Versus revision: Dave investigated the canonical 5★ archetype and discovered..." (this is a paragraph of version history; it belongs in the version table.)

---

## Team-hypothesis structure (mandatory template)

Each of the three team hypotheses (Research, Studio, Greens) follows the same template. Use it. Do not let one team's hypothesis drift into a different shape than the others.

```
### [Team] team hypothesis

Time horizon: [X]–[Y] months ahead.

[One-paragraph mandate. What this team does, who they answer to, and the criterion for what they want from BG.]

[Optionally: a second framing paragraph, only if needed for context. Three sentences max.]

[Numbered focus areas — typically three.]

**1. [Focus area name].** [Two to four sentences explaining the area, with the criterion for what counts and what doesn't.]
*Reference signals:* [Companies or partners that exemplify the area, with brief role descriptors.]

**2. [Focus area name].** [Same shape.]
*Reference signals:* [...]

**3. [Focus area name].** [Same shape.]
*Reference signals:* [...]

[Out-of-scope block, one paragraph.]
**[Team]'s search boundaries.** [What this team explicitly does not scout.]

[Optional: one structural note block — for one-off rules like the Versus revision or the three-gate framework. Keep tight.]
```

The Research hypothesis in v3.0 is the canonical example. If you find yourself writing prose that doesn't fit this template, you are bloating. Restructure or remove.

---

## Banned patterns

- **First-person plural and the word "Fidelity."** The thesis is written in second person ("you", "your firm", "the platform") or in direct prose. No "we believe", "our differentiation", "what we want." (Aligned with the broader CLAUDE.md hard rule.)
- **Version-history paragraphs in the header.** All version history goes in the bottom version table. The header gets one paragraph that names the current state, not the path to it.
- **Embedded vote-data narratives in the body.** "47 votes processed in cycle 9 producing the following counts..." is operational state. Put summary numbers in *Learned preferences*; everything else lives in `preferences.md`.
- **Active-next-steps lists.** Operational TODOs ("Studio sponsor → introduce Studio leads to...") go in the relevant working doc or task system. They are not thesis content.
- **Repeated content across sections.** *Why now*, *Where the competition is wrong*, and *Core thesis* used to repeat each other. They don't anymore. If a fact appears in two of those sections, delete from one.
- **Headline-style strikethroughs of resolved challenges.** Resolved challenges either get rewritten or deleted. The thesis is not a changelog — `changelog.html` is a changelog.

---

## What Phase 2 (Strategise) is allowed to do

Phase 2 should:
- Refresh the *Learned preferences* section with current vote counts and any new soft factors that have hit the 5-appearance threshold.
- Add new entries to the *Gap map* status column when a vote moves a category (e.g. ❌ → ⚠️ → ✅).
- Add new entries to the *Versioning table* with one-row deltas — never paragraph-form.
- Add or remove entries from *Signals that challenge the thesis* when new structural challenges emerge or are resolved.
- Update the header paragraph to a single sentence naming the current cycle and any active hard gates. Do not append; replace.

Phase 2 should **not**:
- Rewrite team hypotheses — those are owned by Dave directly. Phase 2 may add a *Reference signals* line if a new vote produces an obvious archetype.
- Edit the *Core thesis*, *Why now*, *Where the competition is wrong*, *How the customer experience flows*, or *What good looks like* sections — these are stable. If they need changes, Dave makes them.
- Append operational findings to the header. New findings either become a new row in the version table or get filed in a working doc.
- Trample the structural template for team hypotheses (time horizon → numbered focus areas → reference signals → out-of-scope). If a new section feels like it doesn't fit the template, escalate per the *Structural changes* rule below rather than improvising.

---

## Compression budget

The thesis at v3.0 is roughly 250 lines. The compression budget for any auto-update is ±15 lines. If a cycle's update would push the thesis above 280 lines, the writer must compress before writing. Net growth across cycles is forbidden.

---

## When a structural change is genuinely needed

If the thesis structure itself needs to change (new section, removed section, reordered sections), the auto-update task must NOT make the change. It must instead emit a one-line note in its run output: "Structural change recommended: [description]. Deferring to manual review." Dave will review and apply.

Structural changes are rare. The current structure has held since v3.0 and should continue to hold for many cycles.
