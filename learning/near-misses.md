## Near Misses

A "near miss" is a startup that scored above 60 on the relevance model but received a downvote (≤2★). These are the most informative examples because they reveal what the scoring model is getting wrong.

---

## Summary Statistics

| Cycle | New Near Misses | Total | Dominant Root Cause |
|---|---|---|---|
| 2026-03-15 | 2 | 2 | Sub-domain mismatch |
| 2026-04-05 | 0 | 2 | — |
| 2026-04-12 | 0 | 2 | — |
| **2026-04-14** | **22** | **24** | **Internal workflow blind spot (14/22)** |
| 2026-04-27 | 0 | 24 | — (solvapay 0★ is accidental; excluded) |

---

## 2026-04-14 — Sixth Preference Learning Cycle (MAJOR UPDATE)

45 new votes processed. 22 new near-misses identified (score > 60, stars ≤ 2). This is the single largest blind-spot detection event in system history. The dominant failure mode is clear: **the model scores based on gap category without detecting the internal/external boundary**.

### Root Cause Analysis

| Root Cause | Count | Companies | Action Taken |
|---|---|---|---|
| Internal Workflow / Back-Office | 14 | appzen, haast, lyzr, obin-ai, basis, pace, lema-ai, kaaj, meridian-ai, numos, galdera, interloom, sycamore, opencfo | **HARD FILTER created** (–50 points) |
| Wrong Stage (Series B+ / Over-Funded) | 2 | linx-security (94→2★), armadin (68→2★) | **Soft factor created** (–15 points) |
| Wrong Sub-Domain (Tax/KYC/IT) | 4 | juno (76→2★), vivox-ai (74→2★), novee (72→1★), mindgard (82→2★) | Tax filing penalty confirmed; KYC/AML penalty elevated; AI-vs-agent signal created |
| Internal Security (Not Innovation) | 1 | armorcode (66→2★) | Covered by internal workflow + AI-vs-agent signals |
| Unclear (no note) | 1 | goodfire (77→2★) | Likely AI-vs-agent (interpretability company) |

### High-Score Near Misses (Most Informative)

#### Linx-Security — Score 94, Stars 2★
- **Note:** "Just too late at series B"
- **Root cause:** Stage mismatch. This is the highest-scoring near-miss in system history. The model gave near-perfect score (94/100) to a company that was rejected purely on stage grounds. The product was presumably thesis-aligned but the company is too mature.
- **Scoring fix:** The –15 stage penalty for Series B+ would reduce this to 79, still high but no longer a top-tier recommendation. Consider whether stage should carry even more weight.

#### Obin-AI — Score 82, Stars 1★
- **Note:** "Internal pipelines. Again, not what I'm looking for."
- **Root cause:** Internal workflow. Previously tracked as an emerging signal in preferences.md ("institution-native agentic workforce framing"). The 1★ vote decisively resolves this: inside-the-institution deployment is NOT thesis-aligned regardless of how it's framed.
- **Previous prediction:** Preferences.md asked "Does Obin AI vote as an infrastructure-layer candidate (4–5★) or as an application candidate (3★ or below)?" Answer: 1★. The institution-native framing was a negative, not a positive.

#### Mindgard — Score 82, Stars 2★
- **Note:** "AI, not agents"
- **Root cause:** AI-vs-agent confusion. The model scored this AI red-teaming company highly because it sits in the AI Safety & Guardrails gap. But Dave's distinction is precise: the thesis is about AGENT security, not AI/model security. Two-word note, crystal clear signal.

#### Sycamore — Score 65, Stars 1★
- **Note:** "Looks like more internal workflow stuff."
- **Root cause:** Internal workflow. Previously tracked as a competitive threat ("trusted agent OS" absorbing the governance layer). Dave doesn't see it as a competitive threat at all — he sees it as internal workflow tooling. The competitive threat from preferences.md is now resolved as a non-issue.

#### Haast — Score 80, Stars 1★
- **Note:** "Internal workflow nonsense"
- **Root cause:** Internal workflow. Strong language ("nonsense") confirms depth of rejection.

#### Lyzr — Score 80, Stars 2★
- **Note:** "Internal workflows again"
- **Root cause:** Internal workflow. The word "again" signals frustration with repeated internal workflow companies in the pipeline.

#### Basis — Score 79, Stars 1★
- **Note:** "raised too much and for accounting firms. This is not who we serve and it is not useful to who we serve."
- **Root cause:** Dual failure — accounting firm focus (Hard Filter #2) + over-funded. "This is not who we serve" is an important framing: the thesis serves end investors through an agent marketplace, not accounting firms.

#### Lema-AI — Score 78, Stars 1★
- **Note:** "wrong kind of risk. I'm looking for solutions that mitigate risk of third party agents."
- **Root cause:** Internal vs external risk. This note is THE most precisely stated preference in the entire corpus. Dave is not looking for enterprise risk management tools. He is looking for tools that protect AGAINST risks posed by third-party agents.

#### Juno — Score 76, Stars 2★
- **Note:** "I'm not looking for tax compliance so much as tax efficiencies. Agents that can help investors with clever tax strategies."
- **Root cause:** Tax sub-domain mismatch. Confirms the penalty extends to CPA-firm tax preparation, not just consumer e-filing. Draws the line clearly: "compliance" vs "efficiencies."

---

## 2026-03-15 — First Preference Learning Cycle (Original Near Misses)

### Near Miss #1: Stacks

- **Score:** 82 | **Gap:** Agent Orchestration | **Stage:** Series A ($23M) | **Geography:** Europe
- **Vote:** 2★ | **Note:** "Not really looking for accounting services. This is too small."
- **Root cause:** Intra-category sub-domain mismatch (accounting automation ≠ agent orchestration) + now subsumed by Hard Filter #2 (accounting/bookkeeping).

### Near Miss #2: TaxDown

- **Score:** 78 | **Gap:** Tax Optimisation | **Stage:** Seed (€4M, BBVA Spark) | **Geography:** Spain / Europe
- **Vote:** 2★ | **Note:** "Not really interested in EU tax products or tax filing."
- **Root cause:** Tax filing sub-domain mismatch. Now confirmed and strengthened by Juno 2★.

---

## Blind Spot Tracker

| Blind Spot | Occurrences | Status | Action |
|---|---|---|---|
| Internal workflow / back-office tools | 16 | **HARD FILTER ACTIVE** | –50 points, auto-archive |
| Accounting / bookkeeping / CFO tools | 5 | **HARD FILTER ACTIVE** | –50 points, auto-archive |
| Tax filing / tax compliance | 3 (TaxDown, Juno, + thesis statement) | **Soft factor active** | –20 points |
| KYC/AML compliance | 2 (bretton-ai 3★, vivox-ai 2★) | **Soft factor active** | –15 points |
| Series B+ / over-funded | 4 (linx-security, april, armadin, basis) | **Soft factor active** | –15 points |
| AI-level (not agent-level) security | 3 (mindgard, goodfire, armorcode) | **Soft factor active** | –15 points |
| Non-finserv focus | 2 (certivo, novee) | Tracking | –10 points (emerging) |
| Company scale below interest threshold | 1 (stacks) | Tracking | Needs more data |
| Geography (SF specifically negative) | 1 (onyx-security) | Tracking | Needs more data |

*Once any tracking blind spot reaches 3 occurrences, it will be elevated to a formal soft factor.*
