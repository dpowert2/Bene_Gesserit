## Near Misses

A "near miss" is a startup that scored above 60 on the relevance model but received a downvote (≤2★). These are the most informative examples because they reveal what the scoring model is getting wrong.

---

## 2026-03-15 — First Preference Learning Cycle

### Near Miss #1: Stacks

- **Score:** 82 | **Gap:** Agent Orchestration | **Stage:** Series A ($23M) | **Geography:** Europe
- **Vote:** 2★ | **Note:** "Not really looking for accounting services. This is too small."
- **Score breakdown:** High gap_fit (Agent Orchestration), reasonable stage_match (Series A), Europe geography. Model awarded 82/100 based on category label alone.
- **What the model got wrong:** Classified Stacks as a strong Agent Orchestration match without detecting that its primary product is *accounting automation* — bookkeeping and accounts payable workflows — rather than financial services agentic infrastructure. The orchestration category is too broadly defined; the model cannot yet distinguish finserv agentic workflow tooling from generic business automation.
- **Missing dimension:** Sub-domain qualifier within Agent Orchestration. The preferred sub-domain is "finserv agentic workflow infrastructure" (orchestrating agents operating on financial data, compliance decisions, customer interactions). The dispreferred sub-domain is "accounting/bookkeeping automation" (automating repetitive finance back-office tasks with no agent identity or trust layer).
- **Secondary signal:** "This is too small" suggests that company scale/traction may be a secondary qualifier. Stacks at Series A $23M may be below the minimum threshold of interest. Cannot isolate from the product-type signal with only 1 data point — tracking separately.
- **Blind spot type:** Intra-category sub-domain mismatch — Agent Orchestration (Occurrence 1 of 3 needed to propose soft factor)

---

### Near Miss #2: TaxDown

- **Score:** 78 | **Gap:** Tax Optimisation | **Stage:** Seed (€4M, BBVA Spark) | **Geography:** Spain / Europe
- **Vote:** 2★ | **Note:** "Not really interested in EU tax products or tax filing. Looking for intelligent tax systems that uncover benefits as you update your portfolio."
- **Score breakdown:** High gap_fit (Tax Optimisation), finserv_readiness boosted by BBVA backing, Seed stage. Model awarded 78/100 on category and institutional backing alone.
- **What the model got wrong:** Treated all tax-related AI products as equivalent within the Tax Optimisation gap. TaxDown is a *tax filing* tool (helping individuals and businesses submit tax returns digitally using AI) — not a portfolio-integrated tax intelligence product. The preference is explicitly for tools that sit inside investment portfolio workflows and surface tax-advantaged decisions dynamically as holdings change.
- **Missing dimension:** Product type specificity within Tax Optimisation. The preferred sub-domain is "portfolio-integrated tax intelligence" (tools that operate on a live portfolio and surface tax-optimised decisions: loss harvesting, gain deferral, rebalancing sequencing). The dispreferred sub-domain is "tax filing / e-filing" (tools that automate or improve the annual/quarterly tax return submission process).
- **Secondary signal:** "EU tax products" were also flagged — EU geographic focus may be a mild negative for Tax Optimisation specifically (US/international portfolio tax tools more relevant to thesis). Only 1 data point — tracking.
- **Blind spot type:** Intra-category sub-domain mismatch — Tax Optimisation (Occurrence 1 of 3 needed to propose soft factor)

---

## Blind Spot Tracker

| Blind Spot | Occurrences | Status | Threshold to Propose Soft Factor |
|---|---|---|---|
| Intra-category sub-domain mismatch — Agent Orchestration (accounting automation) | 1 | Tracking | 3 occurrences |
| Intra-category sub-domain mismatch — Tax Optimisation (tax filing) | 1 | Tracking | 3 occurrences |
| Company scale below interest threshold | 1 | Tracking | 3 occurrences |

*Once any blind spot reaches 3 occurrences, a formal soft factor will be proposed in the next learning cycle with: name, condition, initial value, and supporting evidence.*
