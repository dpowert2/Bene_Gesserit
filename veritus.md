# Veritus

**URL:** https://www.veritus.com
**Gap:** Specialist Agent — Consumer Lending (S-adjacent)
**Stage:** Seed ($10.1M, YC S25)
**Geo:** US (San Francisco)
**Score:** 52

## One-liner
Voice-first AI agents that handle regulated borrower conversations across phone, text, email, and chat — deployed by lenders for application-funnel conversion and early-stage delinquency management.

## FinServ Signal
Live customers include fintechs, a major loan servicer, and a UK bank. YC S25 backed. Integration with lender loan-management systems. Handles regulated conversations (TCPA, FDCPA compliance implied). Funded by Crosslink, Threshold, Emergence Capital, and Surge Point.

## Team
Joshua March (CEO) — founder background in enterprise AI communications. David Schlesinger and Joey Stein — former Divvy Homes engineers (proptech/fintech DNA). Y Combinator S25 batch.

## Thesis
Veritus builds AI agents that lenders deploy to communicate with borrowers — converting applicants and engaging delinquent accounts. This is genuinely agent-level work in a regulated industry (consumer lending conversations are legally regulated), and the agents operate externally (customer-facing, not internal ops). However, the key tension: the product is purely B2B-for-institutions, where the lender controls the agents to serve the lender's own business goals (higher conversion, debt recovery). This maps more closely to the institution's "internal capability" in the spirit of the Hard Filter than to a third-party agent in an open marketplace. Pace (1★) and Enfi (in pipeline, lending workforce) established a pattern of caution around lending-specific institutional tools. The "external boundary" test is ambiguous — agents touch external borrowers but serve internal institutional objectives. Score reflects this ambiguity with a moderate penalty. Would need clarification on whether Veritus is architecturally positioned as an agent-callable API for marketplaces or as a SaaS platform exclusively for institutions.

## Evidence
- [Veritus bags $10.1M seed — FintechFutures](https://www.fintechfutures.com/venture-capital-funding/exclusive-veritus-raises-10-1m-seed-funding-to-power-voice-first-ai-agents-for-lenders)
- [AI Insider coverage](https://theaiinsider.tech/2026/02/11/veritus-secures-10-1m-seed-round-to-deploy-ai-agents-across-consumer-lending/)
- [YC profile](https://www.ycombinator.com/companies/veritus)

## Score Breakdown
- Gap Fit: 22/35 — Consumer lending specialist agent; touches regulated conversations; unclear third-party/marketplace positioning
- FinServ Signal: 20/25 — Live with lenders including a UK bank; YC-backed
- Stage: 18/20 — $10.1M seed, ideal timing
- Team: 14/20 — Solid YC founders with fintech background
- Adjustment: -22 (internal/external boundary concern: agents serve institution's own objectives; potential Hard Filter if borderline call goes the wrong way)

**⚠️ BOUNDARY FLAG:** This company warrants review before voting — the Hard Filter question (internal vs external agent) is not cleanly resolved. Ask: does Veritus expose APIs that other agents in a marketplace can call, or is it a closed B2B platform?
