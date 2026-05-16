# Four Fits Diagnostic — Developer Specification

A coaching diagnostic for early-stage propositions, derived from Brian Balfour's Four Fits framework and refined with operator tradecraft from running these sessions at Dogpatch Labs.

This spec is **model-agnostic and stack-agnostic**. The reference implementation uses Anthropic's Claude API behind a Cloudflare Worker, but any capable LLM (GPT-4-class or better) and any backend will work. The only hard requirement is the LLM must reliably emit structured JSON when instructed.

---

## Part One — The Framework

### 1.1 Purpose

A founder fills in four hypothesis cards describing their proposition. An LLM then runs a coaching diagnostic against the inputs and returns a structured critique that:

1. Names where each of the four fits is **aligned**, **partial**, or **needs work**.
2. Highlights the most likely **cascading break** — where one weak field is creating downstream pressure on fits two steps away.
3. Suggests a concrete **next move** for every flagged item.

The output is intended for a working session — a single founder, a coach, or a small team — not a verdict-style grading exercise.

### 1.2 Origin and Sources

- **Brian Balfour, "Four Fits for $100M+ Growth"** — the foundational framework. Four elements (Market, Product, Channel, Model) connected by four fits. https://brianbalfour.com/four-fits-growth-framework
- **Steve Blank** — "A startup is a temporary entity set up to find a scalable, repeatable business model." Used as the framing for why the Model card matters.
- **Sean Ellis, *Hacking Growth*** — Aha moment, must-have moment, onboarding-as-product, Time to Value.
- **Christoph Janz** — the mice / rabbits / deer / elephants / whales segmentation by ARPA.
- **Strategyzer / *Business Model Generation*** — the catalogue of business model patterns.

### 1.3 Conceptual Model

```
[ Market ] ⇄ [ Product ] ⇄ [ Channel ] ⇄ [ Model ] ⇄ [ Market ]
```

Four elements; four fits between adjacent elements (the last loops back). Each fit either matches or doesn't.

| Fit | The diagnostic question |
|---|---|
| **Market ↔ Product** | Does the product solve a real problem for a specific buyer in a way they'd actually buy? |
| **Product ↔ Channel** | Does the product fit how the channel actually works? Channels don't mold to products — products are built for channels. |
| **Channel ↔ Model** | Do the channel economics (CAC) match the business model economics (ARPU)? |
| **Model ↔ Market** | Does the model extract enough revenue per customer × customers in market × % capture to constitute a meaningful outcome? |

### 1.4 Core Principles (must be encoded into the analysis)

1. **A fit either matches or it doesn't.** Frame every verdict as match / partial-match / mismatch with a one-sentence reason.
2. **Channels don't mold to products. Products are built for channels.** This is a one-way constraint.
3. **Fits are interdependent.** One weak element ripples through. Diagnose the system, not just each card.
4. **Fits evolve and break over time.** A diagnostic is a snapshot, not a forever-truth.
5. **The Model deserves serious scrutiny.** Sometimes the model IS the innovation (Apple persuading telcos to subsidise iPhone handsets; Xerox moving from selling copiers to per-page billing). Don't let it be a throwaway box.
6. **ARPU must cover CAC over a reasonable payback window.** Absolute floor.
7. **Specific buyers need specific channels.** A generic channel for a niche buyer is a known failure mode.

### 1.5 Hypothesis Cards (Input Schema)

The founder fills these in. All fields are free-text unless flagged otherwise.

#### 0. Setup

| Field | Type | Description |
|---|---|---|
| `proposition.name` | string | Project / company name. |
| `proposition.stage` | enum: `idea` \| `building` \| `launched` \| `scaling` | Current stage. |
| `proposition.pitch` | string | One-line description. |

#### 1. Market Hypothesis

| Field | Type | Description |
|---|---|---|
| `market.who` | string | The specific individual buyer — title, company size, geography. Get to the human, not a category. |
| `market.macro_problem` | string | The systemic "why it matters" — the big problem the micro problem sits inside. (Energy example: the grid can't connect new generation.) |
| `market.micro_problem` | string | The specific, addressable bottleneck inside the macro problem. (Energy example: transformer availability.) You solve the macro by picking the right micro. |
| `market.pain_level` | enum: `vitamin` \| `mild` \| `real` \| `hair-on-fire` | How painful is the micro problem? A problem can be specific and still be a vitamin. We want painkillers. |
| `market.pain_detail` | string | Evidence the pain is real — what does the buyer currently do about it, what does it cost them? |
| `market.motivation_archetype` | enum: `laid` \| `made` \| `paid` | The dominant human driver. (Laid = status, belonging, attraction. Made = achievement, mastery, advancement. Paid = money, security, savings.) |
| `market.motivation_detail` | string | Why this individual cares enough to act. |
| `market.pmf_phase` | enum: `none` \| `early-signal` \| `some-retention` \| `flat-retention` | Where the proposition sits on the PMF spectrum. |
| `market.pmf_evidence` | string | The actual evidence — NPS score, feedback quotes, the shape of the retention curve, % "very disappointed" if the product vanished. |

PMF phases: `none` (no data yet) → `early-signal` (good feedback, NPS >90) → `some-retention` (paying customers staying, curve still declining) → `flat-retention` (the gold standard — a flat retention curve of paying customers).

#### 2. Product Hypothesis

| Field | Type | Description |
|---|---|---|
| `product.value_prop` | string | The concrete, **realizable** benefit. Not a nice-to-have ("a beautiful email client"), a checkable value ("save 2.5 hours a day"). |
| `product.marketing_promise` | string | The actual promise made in marketing. |
| `product.promise_type` | enum: `value` \| `emotional` | Is the promise a nuts-and-bolts value promise (what a startup needs) or an emotional/brand promise (mature-business marketing)? |
| `product.features_that_deliver` | string | The specific shipped features that deliver the value prop and solve the micro problem. Must map back to the problem — features on the roadmap don't count. |
| `product.hook` | string | What pulls them in? Habit-forming or habit-replacing. |
| `product.aha_moment` | string | The single, observable moment a user feels the value. Must be precisely nameable. |
| `product.time_to_value` | string | How long from sign-up to Aha. Minutes / hours / days / weeks / months. |
| `product.onboarding` | string | The path to Aha. Onboarding is a separate product whose only job is to get users to Aha fast. |
| `product.stickiness` | string | Why they come back — network effect, lock-in, habit, switching cost. |

#### 3. Channel Hypothesis

| Field | Type | Description |
|---|---|---|
| `channel.primary` | enum (see below) | The single dominant channel. Power Law: 70%+ of acquisition comes from one. |
| `channel.natural_fit` | string | Why this is THE channel — why the product lends itself to it naturally. Channels don't mold to products. |
| `channel.audience_density` | string | What fraction of this channel's audience can actually realize value from the product? Radio for Hiri = ~1 in 10,000 = terrible. Density, not reach. |
| `channel.scales_naturally` | enum: `yes` \| `partly` \| `no` | Does the channel scale on its own, or does it cap out (founder coffees, networking)? |
| `channel.cost_to_run` | enum: `low` \| `medium` \| `high` | Roughly how expensive is it to run this channel? |
| `channel.cac_expectation` | string | Realistic CAC range for this channel + buyer combination. |
| `channel.secondary` | string | Other channels for context only. |

`channel.primary` enum values: `viral-b2c`, `seo`, `paid`, `b2b-content`, `inside-sales`, `enterprise-sales`, `plg`, `partnerships`, `community`, `other`.

#### 4. Model Hypothesis

| Field | Type | Description |
|---|---|---|
| `model.animal` | enum: `mouse` \| `rabbit` \| `deer` \| `elephant` \| `whale` | Janz segment. (Mouse $100 ARPA × ~1M / Rabbit $1k × ~100k / Deer $10k × ~10k / Elephant $100k × ~1k / Whale $1M × ~100.) |
| `model.pattern` | string | Strategyzer pattern: subscription, freemium, transactional, marketplace, multi-sided platform, razor-and-blade, pay-per-use, revenue share, aggregator, open-source-with-paid-services, white-label, franchise, long tail, who-pays inversion, third-party subsidised, etc. |
| `model.innovation` | string | Is the model itself the bet? If non-obvious (subsidies, unbundling, new pricing axis, who-pays inversion), describe. If standard, say so. |
| `model.arpa` | string | ARPA / pricing. |
| `model.pricing_logic` | enum: `commodity-risk` \| `competitor-anchored` \| `value-capture` \| `monopoly-like` | How is price set? Commodity = race to the bottom. Value-capture = priced to the value added. Monopoly-like = can charge freely because of the value add. |
| `model.value_quantification` | string | The value added, in money where possible — $ saved or $ made per customer per year. Pricing should be a fraction of this. |
| `model.motion` | enum: `self-serve` \| `plg-with-sales` \| `inside-sales` \| `field-sales` \| `hybrid` | Sales motion. |
| `model.cac_math` | string | Back-of-envelope CAC: e.g. "$5/click × 1-in-10 conversion = $50 CAC". Must be covered by ARPU/LTV. |
| `model.volume_to_outcome` | string | Customers needed at this ARPA to hit a meaningful ARR target. |
| `model.unit_economics` | string | ARPU and CAC explicitly, plus LTV/CAC and payback. Does ARPU cover CAC? |

### 1.6 UX Flow (Reference Implementation)

1. Founder lands on the page; persisted draft (if any) is restored from local storage.
2. **Optional onboarding aid:** the founder can load a worked case study (Hiri, plus a strong-fit contrast) or click "Generate a random case study" — the LLM invents a realistic, fully-filled proposition so the founder can see what good looks like end to end before starting their own.
3. Founder fills the four hypothesis cards in any order. Each field carries a one-line "what we're looking for" and an expandable "what good looks like" with a strong and a weak example. Saves continuously.
4. **Coach-as-you-go:** each card has a "Coach this card" button that runs a focused critique of that card (plus whatever else has been filled), so the founder gets feedback before completing the whole template.
5. Founder clicks **Run Full Analysis**.
6. Frontend builds a JSON payload (the schema in §1.5) and POSTs it to the analysis endpoint.
7. Backend prepends the system prompt (§2.2) and sends to the LLM.
8. LLM returns JSON matching the output schema (§2.5).
9. Frontend renders: overall verdict (including a "does this fulfil the requirements of Four Fits" judgment), four fit-tile traffic lights, box-by-box critique, **connection-by-connection critique** (the lines between boxes), and cascade narratives.

---

## Part Two — The Analysis Specification

### 2.1 Tone (mandatory)

The analysis is a **coaching read, not a verdict**. The founder has put real thought into this; the LLM's job is to help them see the system clearly and act on it, not to grade them.

- Open every flagged field by acknowledging what's working before naming the gap.
- Plain English. Avoid acronym stacks (ICP, PMF, GTM, etc.) without unpacking.
- Use **"the joint isn't yet aligned"** not "broken." Use **"needs work"** not "fail."
- Status labels exposed to the user: **Aligned / Partial / Needs work**. Never "broken" or "fail."
- Quote the founder's own words back when relevant — grounds the feedback.
- Every Partial or Needs-work item must have a concrete `next_move` — a doable step this week.

### 2.2 System Prompt (canonical)

The full system prompt is reproduced verbatim in the reference implementation (`index.html`, `SYSTEM_FRAME` constant). The structure:

```
1. Identity ("senior innovation coach")
2. Tone rules (coaching, not verdict)
3. The fundamental test (match / mismatch)
4. Framework core (4 elements, 4 fits, channels don't mold)
5. Diagnostic lens — full ruleset (§2.3)
6. Model scrutiny block (§2.3.4)
7. Cascading patterns (§2.4)
8. Output schema (§2.5)
9. Length caps (§2.6)
10. Final rules (every red/amber needs next_move; output JSON only)
```

A developer porting to a different LLM can swap the model and provider without changing the prompt. Test on the canonical Hiri example (§2.7) and tune length caps if the model truncates.

### 2.3 Diagnostic Ruleset

The LLM must apply each of these rules and surface violations as Partial or Needs-work flags with explanations.

#### 2.3.1 Power Law of Distribution (Channel)
- 70%+ of early acquisition comes from one channel.
- If the founder names three+ primary channels, flag as **Partial** — they likely haven't yet identified THE channel.
- Suggest: pick the most promising and run a 4-week experiment to validate it.

#### 2.3.2 Channel must reach the specific Who (Channel ↔ Market via Product)
- A generic channel for a niche buyer is a known failure pattern.
- C-level executives are the canonical example: no concentrated venue → "networking + content + paid" all underperform.
- Specific buyers need specific channels. Flag if `channel.primary` looks generic relative to `market.who`.

#### 2.3.3 Channel ↔ Model Danger Zone
- Plot the proposition on the spectrum: Viral/SEO → Paid → B2B Content/Inside Sales → Enterprise Sales.
- Low ARPU + high CAC is the classic squeeze. Specifically: if `channel.cac_expectation` is high while `model.arpa` is low (e.g., outbound sales motion at $1k ARPA), flag as Needs work.
- Show the founder where they sit on the spectrum.

#### 2.3.4 Janz Animals (Model)
Each animal carries non-negotiable implications:
- **Mouse** ($100 ARPA, ~1M customers): requires inherent virality. Without a viral mechanic, mouse is dead.
- **Rabbit** ($1k ARPA, ~100k customers): often needs to go upmarket past $10–20M ARR.
- **Deer** ($10k ARPA, ~10k customers): standard SaaS sweet spot — most $100M+ ARR companies live here or one segment higher.
- **Elephant** ($100k ARPA, ~1k customers): real field sales motion required.
- **Whale** ($1M ARPA, ~100 customers): full enterprise sales org required.

Cross-check `model.animal` against `model.motion` and `channel.primary`. Mismatches (e.g., Whale animal + self-serve motion) are immediate Needs work.

#### 2.3.5 Model can BE the innovation
- Strategyzer catalogues dozens of patterns. Sometimes the model is the bet, not the product.
- Examples to internalise: Apple convincing telcos to subsidise iPhone handsets (third-party subsidised); Xerox moving from copier sales to per-page billing (unbundling capex into recurring); Gillette razor-and-blade.
- If `model.innovation` is "standard pattern" but the Channel ↔ Model or Model ↔ Market geometry is uncomfortable, gently surface that a non-standard pattern might unlock more.

#### 2.3.6 ARPU > CAC (the absolute floor)
- If ARPU does not cover CAC over a reasonable payback window, the fit is **Needs work** regardless of anything else.
- If CAC is undefined, status: **Partial** with a next_move asking the founder to ballpark it.

#### 2.3.7 Aha Moment must be precisely nameable (Product)
- The Aha moment must be a single, specific, observable user experience. Not a category. Not a feeling.
- "When users see X happen for the first time" passes. "When they realise the value" does not.

#### 2.3.8 Onboarding is a separate product (Product)
- Onboarding's only job is to drive users to Aha as fast as possible.
- If the founder describes onboarding as "training," "rollout," or "change management" — that's a flag. They're treating it as overhead, not as a product.

#### 2.3.9 Value Prop ↔ Features (Product, internal)
- The most common Product red flag in operator experience: the marketing promise is bigger than the features actually shipped.
- The promise must be backed by what's in the product **today**, not on the roadmap.
- Surface specifically: which features deliver the promise, and what's missing.

#### 2.3.10 Time to Value (Product → Channel cascade trigger)
- TTV > a few weeks for any product not sold via enterprise field sales = severe channel constraint.
- Long TTV is the most common upstream cause of cascading failure (§2.4).

#### 2.3.11 Motivations: Laid, Made, or Paid
- The dominant human driver should match what the product actually delivers.
- A "Made" motivation paired with a value prop about saving money is a tell — what's actually being sold?

#### 2.3.12 Macro vs micro problem (Market)
- A complete Market hypothesis has both altitudes: a macro problem (the systemic "why it matters") and a micro problem (the specific addressable bottleneck inside it).
- You solve the macro by picking the *right* micro. Flag if only one altitude is present, or if the micro problem doesn't credibly sit inside the macro.

#### 2.3.13 Pain, not vitamins (Market)
- A problem can be specific and still be a vitamin. We want painkillers.
- Check `market.pain_level` against `market.pain_detail`. If pain is claimed as "real" or "hair-on-fire" but the detail shows no current spend, workaround, or cost — flag it: the pain may not be as real as claimed.
- Vitamin-level pain is not fatal at idea stage, but it must be named honestly.

#### 2.3.14 PMF as phases, not binary (Market)
- PMF is a spectrum: no data → early signal (good feedback, NPS >90) → some retention → flat retention curve (the gold standard).
- A flat retention curve of paying customers is the strongest signal there is. Early-stage qualitative feedback is the weakest.
- Check `market.pmf_phase` against `market.pmf_evidence`. A claimed phase with no evidence behind it is Partial at best.

#### 2.3.15 Realizable benefit vs nice-to-have (Product)
- The value prop must be a *realizable* value, not a nice-to-have. "A beautiful email client" — beauty is a nice-to-have you can't realize as value. "Save 2.5 hours a day" — concrete, realizable, checkable.
- Flag value props that are aesthetic, aspirational, or vague rather than concrete and realizable.

#### 2.3.16 Two kinds of marketing (Product)
- Startup marketing must make a nuts-and-bolts **value** promise. Mature-business marketing makes **emotional**/brand promises (differentiation, "step into the future", brand consideration).
- If `product.promise_type` is `emotional` for an early-stage proposition, flag it: an early-stage company usually can't afford brand marketing, and an emotional promise can't be checked against the product.

#### 2.3.17 Channel audience density + the three channel tests (Channel)
- The real channel test isn't reach, it's **density** — what fraction of the channel's audience can actually realize value. Hiri on the radio: ~1 in 10,000 = terrible.
- Three tests every channel must pass: (1) natural fit — the product lends itself to it; (2) scales naturally — doesn't cap out like founder coffees; (3) doesn't cost too much to run.
- "No box is filler" — social-media-as-catchall or a dialed-in channel box is a flag. The Bullseye Framework (start wide, whittle to a few) is the recommended exercise.

#### 2.3.18 Repeatable channel + CAC math (Channel ↔ Model)
- The channel must be **repeatable** and pay for itself. Look for back-of-envelope CAC math in `model.cac_math`.
- If `model.cac_math` is absent, flag Partial — the founder hasn't done the arithmetic.

#### 2.3.19 Willingness AND ability to pay (Model ↔ Market)
- Two separate tests: does the segment *want* it (willingness), and can they *afford* it (purchasing power)?
- A buyer who wants the product but lacks budget authority or spend is a Model ↔ Market mismatch.

#### 2.3.20 Pricing: capture value, avoid commodity, aim for monopoly (Model)
- Best pricing method: ramp price up until the customer won't pay anymore — find the ceiling. Don't just anchor to competitors.
- Price to capture the value added. Check `model.pricing_logic` against `model.value_quantification`: price should be a fraction of the quantified value.
- Commodities are a race to the bottom — flag `commodity-risk`. The goal is monopoly-like pricing power, earned through genuine value add.
- If `model.value_quantification` is vague or missing, the founder can't price to value — flag it.

### 2.4 The Connections Model

The analysis is **box-by-box, but the boxes must relate to each other**. The Four Fits are not four separate scores — they are a chain, and a chain is only as strong as its joints. The LLM must explicitly walk each connection below, decide whether the two boxes line up, and flag any that don't. When connections don't align, the Four Fits model needs revisiting — say so plainly.

| # | Connection | The question |
|---|---|---|
| C1 | Who → Macro/Micro problem | Does this specific person actually have this problem? Is the micro problem a credible wedge into the macro? |
| C2 | Micro problem → Pain | Is the problem genuinely painful, with evidence — or a vitamin dressed up? |
| C3 | Problem → Value prop | Does the value prop directly address the stated micro problem? |
| C4 | Value prop → Features that deliver | Do shipped features actually deliver the value prop and solve the problem? (Roadmap doesn't count.) |
| C5 | Value prop → Marketing promise | Is the promise a value promise, and does it match what the product delivers? Break the realization, break the chain. |
| C6 | Value prop → Aha moment | Is the Aha moment the moment the promised value is felt? |
| C7 | Aha moment → Time to Value → Onboarding | Can onboarding get the user to Aha fast enough for the channel to work? |
| C8 | Who → Channel | Does the channel reach this specific person, at density? |
| C9 | Product → Channel | Does the product lend itself naturally to this channel? Does it scale? Is it affordable? |
| C10 | Channel CAC → Model ARPU | Does the revenue per customer cover the cost to acquire them, with the CAC math shown? |
| C11 | Animal ↔ Motion ↔ Channel | Do the Janz animal, the sales motion, and the channel all agree with each other? |
| C12 | Model ARPA → Who's purchasing power | Can this buyer actually afford this price — willingness *and* ability? |
| C13 | Value quantification → Pricing logic | Is price set to capture a fraction of the quantified value, not anchored to commodities or competitors? |

The output (§2.6) carries a `connections` array — one entry per connection the LLM judges worth commenting on, each with a status and a coaching comment.

### 2.5 Cascading Failure Patterns

The most important thing the LLM must find. Cascades are cross-fit failure narratives — one upstream gap creating downstream pressure.

The canonical cascade:

> Long Time to Value → kills self-serve and paid acquisition → forces high-touch sales → which implies whale pricing → which implies enterprise sales motion → even if the founder hasn't built one.

The LLM should produce 1–3 cascade narratives in the output, framed in coaching tone. Each cascade: name the upstream gap, trace the downstream pressure, suggest where to intervene first.

### 2.6 Output Schema (JSON)

The LLM must return ONLY this JSON object. No markdown fences, no prose before or after, no comments inside JSON, no literal newlines inside string values.

Two modes share this schema:
- **Full analysis** — all sections populated.
- **Coach-a-card** — only `summary`, the relevant `boxes`, and any `connections` touching that card are populated; `fits` and `cascades` may be omitted.

```json
{
  "summary": {
    "overall_status": "green" | "amber" | "red",
    "fulfils_four_fits": true | false,
    "headline": "<one line, ≤18 words>",
    "body": "<3–4 sentences in coaching tone, ≤60 words>"
  },
  "fits": {
    "market_product": {
      "status": "green" | "amber" | "red",
      "verdict": "<≤25 words>",
      "next_move": "<≤20 words; only if amber/red>"
    },
    "product_channel": { "status": "...", "verdict": "...", "next_move": "..." },
    "channel_model":   { "status": "...", "verdict": "...", "next_move": "..." },
    "model_market":    { "status": "...", "verdict": "...", "next_move": "..." }
  },
  "boxes": [
    {
      "card": "market" | "product" | "channel" | "model",
      "label": "<name of the input field, e.g. 'Who'>",
      "status": "green" | "amber" | "red",
      "comment": "<≤30 words: warm, specific, quotes the input where useful>",
      "next_move": "<≤20 words; only if amber/red>"
    }
  ],
  "connections": [
    {
      "id": "<e.g. C4>",
      "from": "<box name>",
      "to": "<box name>",
      "status": "green" | "amber" | "red",
      "comment": "<≤35 words: does this joint line up? coaching tone>",
      "next_move": "<≤20 words; only if amber/red>"
    }
  ],
  "cascades": [
    "<≤60 words; max 3 entries>"
  ]
}
```

`fulfils_four_fits` is the headline judgment: does this proposition currently meet the bar — all four fits aligned and the connections holding — or does the model need revisiting?

### 2.7 Length Caps (mandatory)

The model must respect these to fit within token budgets:

| Element | Cap |
|---|---|
| `summary.headline` | ≤18 words |
| `summary.body` | ≤60 words |
| `fits.*.verdict` | ≤25 words |
| `fits.*.next_move` | ≤20 words |
| `boxes[].comment` | ≤30 words |
| `boxes[].next_move` | ≤20 words |
| `connections[].comment` | ≤35 words |
| `connections[].next_move` | ≤20 words |
| `cascades[]` | ≤60 words each, max 3 |

Total output budget: ~8000 tokens. If the model can stream, prefer streaming.

### 2.8 Worked Example: Hiri (canonical)

A real-world startup that ran every fit "green" on its own card but failed when read across cards. Use as a smoke test for any implementation.

#### Input

```json
{
  "proposition": { "name": "Hiri", "stage": "launched",
    "pitch": "An email client that helps knowledge workers write fewer, better emails." },
  "market": {
    "who": "C-level exec — CIO/CEO — of a knowledge-worker company (50–1000 staff).",
    "macro_problem": "Knowledge-worker organisations are losing productivity to a poor written-communication culture.",
    "micro_problem": "Individual bad email habits — overlong messages, unclear asks, reply-all noise.",
    "pain_level": "mild",
    "pain_detail": "Execs grumble about email but few have a budget line for it; no current spend on a fix.",
    "motivation_archetype": "paid",
    "motivation_detail": "Wants to claw back productivity hours and reduce wasteful email volume.",
    "pmf_phase": "early-signal",
    "pmf_evidence": "Warm individual feedback from early users; no retention curve data at org level."
  },
  "product": {
    "value_prop": "Save time, improve communication.",
    "marketing_promise": "A beautiful email client for mid-level managers.",
    "promise_type": "emotional",
    "features_that_deliver": "Email scoring, send-later, focus inbox. None of these directly produce the org-level 'save time' claim quickly.",
    "hook": "Rate each other's emails — hold up a mirror to the team's habits.",
    "aha_moment": "Unclear. Buried, not front-loaded.",
    "time_to_value": "~12 months for org-level habit change.",
    "onboarding": "Org-wide rollout, training, change management.",
    "stickiness": "Habit-based, but only if onboarding gets there."
  },
  "channel": {
    "primary": "enterprise-sales",
    "natural_fit": "Weak. In practice: networking, word-of-mouth, founder coffees.",
    "audience_density": "C-level buyers have no concentrated venue — generic channels reach almost no one who'd buy.",
    "scales_naturally": "no",
    "cost_to_run": "high",
    "cac_expectation": "Effectively very high — founder time × months per deal.",
    "secondary": "Word of mouth, founder coffees."
  },
  "model": {
    "animal": "whale",
    "pattern": "Standard enterprise SaaS subscription. No model innovation.",
    "innovation": "No real model innovation.",
    "arpa": "$500k – $1.5M per company.",
    "pricing_logic": "competitor-anchored",
    "value_quantification": "Vague — 'save time' never converted to $ per company per year.",
    "motion": "field-sales",
    "cac_math": "Not done — no per-deal CAC arithmetic.",
    "volume_to_outcome": "70+ whale customers needed for $100M — but no enterprise sales org.",
    "unit_economics": "ARPU $500k–$1.5M; CAC very high (founder time × months); throughput too low."
  }
}
```

#### Expected Diagnosis (high level)

- **Overall status:** `red` / Needs work. `fulfils_four_fits: false`.
- **Market ↔ Product:** Partial — buyer and problem altitudes are clear, but pain is only `mild` (no current spend), and the value prop is too generic for the buyer's actual decision.
- **Product ↔ Channel:** Needs work — the 12-month TTV is the upstream cause of the cascade. With no fast Aha moment, self-serve and paid acquisition are impossible; founder is forced into coffees and word-of-mouth.
- **Channel ↔ Model:** Needs work — manual founder-led channel cannot sustain the throughput required for whale economics; CAC math was never done; CAC is effectively unbounded.
- **Model ↔ Market:** Partial — whale ARPA is consistent with the buyer's purchasing power, but pricing is competitor-anchored not value-captured, value was never quantified, and "70+ whale customers without an enterprise sales org" is the gap.
- **Key broken connections:** C4 (features don't deliver the value prop fast), C5 (marketing promise is emotional, not a value promise — "beautiful email client" isn't realizable value), C7 (onboarding is "training/rollout", not a product driving to a fast Aha), C8 (channel doesn't reach the Who at density), C13 (value never quantified, so pricing can't capture it).
- **Primary cascade:** Time to Value (12 months) → killed scalable channels → forced into manual sales → forced into whale ARPA to make the unit economics work → required enterprise sales motion that doesn't exist.
- **Primary next move:** Find a 5-minute Aha moment for an individual user inside Hiri before any org-level deployment. Build onboarding as a self-contained product around it.

A correct implementation should surface most of this. Verdicts may vary slightly in colour but the cascading narrative and the broken connections are the test.

### 2.9 Status Semantics (UI mapping)

| LLM emits | UI label | Semantic |
|---|---|---|
| `green` | Aligned | The two sides line up |
| `amber` | Partial | Some alignment but a meaningful gap |
| `red` | Needs work | Significant mismatch |

UI should colour-code: green = success colour, amber = warning colour, red = the brand accent (not a literal red — softer is better, given the coaching tone).

---

## Part Three — Non-Functional Requirements

### 3.1 Model independence

- The system prompt is portable. Any LLM that reliably emits structured JSON (Claude 3.5+, GPT-4-class, Gemini 1.5+, Llama 3.1 70B+) will work.
- If the chosen model frequently emits prose around the JSON, add an explicit instruction: "Begin your response with `{` and end with `}`. No other characters."
- Test on the Hiri example before shipping.

### 3.2 Latency

- One analysis call per click. Expected end-to-end: 5–15 seconds for ~8000 tokens of output.
- A loading state is mandatory.

### 3.3 Robustness

- The frontend must repair near-miss truncated JSON before failing (the reference implementation walks the response, finds the last complete top-level entry, and closes balanced brackets).
- Treat malformed responses as transient; surface a "Try Run again" message rather than a hard error.
- Cap input prompt size (~30k characters) to prevent abuse.

### 3.4 Privacy

- Inputs may contain proprietary strategy. Do not log full payloads server-side without explicit user consent. The reference implementation does not persist analyses.
- Drafts may be persisted client-side (local storage) for convenience.

### 3.5 Authentication & rate limiting

- The reference implementation uses an Origin allowlist (one or more domains the API will accept POSTs from). For higher-traffic deployments, add IP-based rate limiting and an optional Turnstile / hCaptcha challenge.

### 3.6 Cost

- Reference implementation: Sonnet-class model at ~$0.005–0.015 per analysis. Haiku-class is cheaper but quality drops noticeably on the cascading-narrative requirement.

---

## Part Four — Acceptance Tests

A correct implementation should pass:

1. **Hiri smoke test.** Loading the canonical Hiri example and running analysis must produce: overall `red`, `fulfils_four_fits: false`, Time-to-Value flagged in `boxes[]`, at least one broken `connections[]` entry among C4/C5/C7/C8/C13, at least one cascade narrative naming the TTV → channel → model chain, and a concrete next_move suggesting an individual-user Aha moment.
2. **Empty-fields handling.** An entirely empty submission must return: all boxes with `status: amber`, sensible "worth filling in" comments, no errors.
3. **Tone test.** No output should contain the words "broken," "fail," "wrong," or imperatives like "you must." Spot-check three generated analyses.
4. **JSON robustness.** Truncate the LLM response 100 chars short of the closing `}`. The repair function must still produce a valid object with the available data.
5. **Length caps.** No `boxes[].comment` exceeds 30 words; no `connections[].comment` exceeds 35 words; no `cascades[]` entry exceeds 60 words. Validate programmatically.
6. **Channel discipline.** A submission with a vague or multi-channel `channel.natural_fit` must trigger a Partial verdict on Product ↔ Channel with a next_move about picking THE channel.
7. **Model-as-checkbox check.** A submission where `model.innovation` is "standard SaaS, no innovation" but `channel.primary` is `enterprise-sales` and `model.animal` is `mouse` or `rabbit` must trigger a flag on Model ↔ Market suggesting a non-standard pattern.
8. **Connections test.** A submission where `product.features_that_deliver` does not address `market.micro_problem` must produce a `red` or `amber` on connection C4 (Value prop → Features) with a specific comment.
9. **Pain test.** A submission claiming `pain_level: hair-on-fire` with a `pain_detail` showing no current spend or workaround must be flagged on connection C2.
10. **Coach-a-card mode.** Requesting coaching on a single card must return only `summary`, that card's `boxes`, and `connections` touching it — no errors from the omitted `fits`/`cascades`.

---

## Appendix A — Reference Implementation

- Frontend: single static HTML file with inline CSS/JS.
- Backend: Cloudflare Worker (`worker.js`) that proxies to Anthropic's API. Holds the API key as a Worker secret. Origin-gated.
- Hosting: GitHub Pages.
- Source: https://github.com/dpowert2/four-fits

The reference implementation is complete and shippable; this spec exists so the same product can be rebuilt on any other stack.

## Appendix B — Jargon Buster

The framework borrows vocabulary from venture, product, marketing and finance. A founder shouldn't need a separate degree to use the diagnostic. The LLM prompt instructs the model to avoid acronym stacks in its outputs, but the underlying terms still appear in the framework — so define them here and link from the UI where space allows.

### B.1 Money and economics

| Term | Plain-English definition | Where it shows up |
|---|---|---|
| **ARPA** (Average Revenue Per Account) | The average annual revenue from one customer account. If you have 100 customers paying $10k/year each, your ARPA is $10k. | Model card: `model.arpa` |
| **ARPU** (Average Revenue Per User) | Same as ARPA but per individual user rather than per account. Used interchangeably for many SaaS products. | Diagnostic ruleset (Channel ↔ Model) |
| **ACV** (Annual Contract Value) | The total annual value of a customer's contract — particularly for enterprise deals (e.g., $120k ACV for a 10-seat contract at $12k/seat). | Model card examples |
| **CAC** (Customer Acquisition Cost) | What it costs you, on average, to acquire one paying customer — including ad spend, sales team time, content costs. | Channel card: `channel.cac_expectation` |
| **LTV** (Lifetime Value) | The total revenue you expect from one customer over the whole time they're with you. A $10k ARPA customer who stays 3 years has an LTV of $30k. | Model card: unit economics |
| **LTV / CAC** | A ratio. The standard healthy target is 3× or higher — meaning each customer is worth 3× what it cost to acquire them. Below 1× and you're losing money on every sale. | Model card: unit economics |
| **Payback period** | How many months of revenue from a new customer it takes to recover what you spent acquiring them. Healthy SaaS: under 12–18 months. | Model card: unit economics |
| **ARR** (Annual Recurring Revenue) | The total predictable revenue you'd generate over a year if nothing changed today. The headline number for SaaS companies. | Model card: `model.volume_to_outcome` |
| **MRR** (Monthly Recurring Revenue) | ARR / 12. | (Not directly in the schema but referenced in diagnostic) |
| **Unit economics** | The maths of one customer: revenue earned, cost to acquire, cost to serve, profit. If unit economics don't work, scaling makes things worse, not better. | Model card |

### B.2 Channels and sales motion

| Term | Plain-English definition | Where it shows up |
|---|---|---|
| **Channel** | The route by which a customer first finds out about your product. Search, ads, word-of-mouth, sales reps, etc. | Channel card |
| **Power Law of Distribution** | Empirical observation that early-stage companies typically get 70%+ of their acquisition from one channel — not three or four. Listing many channels usually means you don't yet know which one works. | Diagnostic rule §2.3.1 |
| **Self-serve** | Customers find, sign up, and start using the product without ever talking to a salesperson. Typical for low-price, fast-to-value products. | Model card: `model.motion` |
| **PLG** (Product-Led Growth) | Self-serve plus a deliberate strategy of using the product itself as the primary acquisition and conversion engine — usually via free / freemium tiers and viral mechanics. | Channel & Model cards |
| **Inside sales** | A sales team that closes deals over phone, email, and video — without traveling on-site. Suits mid-market deals roughly $10k–$100k ACV. | Model card |
| **Field sales / Enterprise sales** | Sales reps who travel, build long relationships, and close large deals (typically $100k+ ACV) over months. Comes with high CAC. | Model card |
| **Outbound** | Sales motion where you reach out to prospects who haven't heard of you (cold email, cold calls, LinkedIn). | (Implicit in ruleset) |
| **Inbound** | The opposite — prospects find you (via SEO, content, referrals) and come to you. | (Implicit in ruleset) |
| **Viral B2C** | Consumer products that grow because users invite other users (WhatsApp, Yelp). Requires a built-in viral mechanic — products without one cannot rely on this channel. | Channel card: `channel.primary` |
| **SEO** (Search Engine Optimisation) | Ranking high on Google searches that your buyers type — earns free traffic indefinitely once it works. | Channel card: `channel.primary` |
| **B2B Content** | Educational content (blog posts, guides, reports) used to attract business buyers. Typical of mid-ARPU B2B SaaS. | Channel card: `channel.primary` |
| **Paid** | Acquisition from paid ads — Google, Meta, LinkedIn, etc. CAC is more predictable than other channels, but goes up over time as auctions get crowded. | Channel card: `channel.primary` |
| **Channel-Model Danger Zone** | The middle of the spectrum: low-to-mid ARPU paired with high-CAC channels. Companies that try to do enterprise-style sales at consumer-style prices die here. | Diagnostic rule §2.3.3 |

### B.3 Product and user experience

| Term | Plain-English definition | Where it shows up |
|---|---|---|
| **Aha moment** | The single, specific moment a user *feels* what your product does for them. Not "they understood" — they experienced it. Twitter: first time you see a tweet from someone you follow. Facebook: getting to seven friends in 10 days. | Product card: `product.aha_moment` |
| **Time to Value** (TTV) | How long it takes from the user starting (signing up, entering a contract) to reaching the Aha moment. Minutes is great. Months is dangerous. | Product card: `product.time_to_value` |
| **Hook** | The thing that pulls the user in — and ideally forms a habit. Strong hooks become routines (checking email, opening Slack). | Product card: `product.hook` |
| **Stickiness** | Why users come back tomorrow. Could be habit, network effect, accumulated data, or switching cost. | Product card: `product.stickiness` |
| **Onboarding** | The user journey from first sign-up to Aha. The framework treats it as a separate product whose only job is to get users to Aha as fast as possible. | Product card: `product.onboarding` |
| **Activation** | The point in onboarding where a new user has done enough to be "real." Often defined by the metric that best predicts long-term retention. | (Implicit) |
| **Retention** | The percentage of users who keep coming back over time. The single best signal that you have product-market fit. | (Implicit) |
| **Churn** | The opposite of retention — the rate at which existing customers cancel or stop using the product. | (Implicit) |
| **Must-have moment** (Sean Ellis) | A test: ask your users how disappointed they'd be if your product disappeared tomorrow. If 40%+ say "very disappointed," you have product-market fit. | Diagnostic ruleset |
| **Value Prop** (Value Proposition) | The actual value you're delivering, expressed simply. The promise on the homepage. | Product card: `product.value_prop` |

### B.4 Market and customers

| Term | Plain-English definition | Where it shows up |
|---|---|---|
| **ICP** (Ideal Customer Profile) | The exact kind of customer your product is built for. The closer this is to a real human, the better. | Market card: `market.who` |
| **Persona** | A profile of a typical user. The framework asks for one *individual*, not a "marketing persona" composite — the latter is usually too vague to be useful. | Market card |
| **PMF** (Product-Market Fit) | The state where a real market wants what you're building enough to pay for it and tell others. The Sean Ellis 40% test is one way to measure it. | Framework background |
| **GTM** (Go-to-Market) | Your overall plan for how the product reaches the customer. Combines Channel, Model, and sales motion. | Framework background |
| **TAM / SAM / SOM** (Total / Serviceable / Serviceable Obtainable Addressable Market) | Concentric circles of market size: everyone who could theoretically buy → everyone you could realistically reach → the slice you'll actually win. | Diagnostic (Model ↔ Market) |
| **Whale customer** (and the rest of the zoo) | Christoph Janz's shorthand for customer segments by annual revenue: Mouse $100, Rabbit $1k, Deer $10k, Elephant $100k, Whale $1M. Each animal carries different implications for sales motion, virality, and volume needed. | Model card: `model.animal` |
| **Laid, Made, or Paid** | A shorthand for the three core human motivations: status / belonging / attraction (laid), achievement / mastery / advancement (made), and money / security / savings (paid). Buying decisions usually trace back to one. | Market card: `market.motivation_archetype` |

### B.5 Business model patterns (Strategyzer)

| Pattern | What it means |
|---|---|
| **Subscription** | Customers pay regularly (monthly / yearly) for ongoing access. Standard SaaS. |
| **Freemium** | A free tier that converts a fraction of users to paid. Works when the free tier creates real value but the paid tier creates more. |
| **Transactional** | Customers pay per use or per purchase, no recurring relationship. |
| **Marketplace** | You connect two sides of a transaction (buyers and sellers) and take a cut. |
| **Multi-sided platform** | Three or more user types interact, with different value flows between them (e.g., advertisers, publishers, readers). |
| **Razor-and-blade** | Sell the durable thing cheap (or at a loss); make money on the consumable. Gillette, printer ink. |
| **Pay-per-use** | Customer pays in proportion to how much they consume. Cloud compute. |
| **Aggregator** | You become the default place to find supply, taking a cut as gatekeeper. |
| **Open-source-with-paid-services** | Core product is free and open; revenue from support, hosting, premium features. |
| **Long tail** | You serve a vast number of niche customers with small individual revenue — works if your serving cost is low. |
| **Who-pays inversion** | The user is not the buyer. Free for users, advertisers pay (Google). Or: free for individuals, employer pays (Slack at a team level). |
| **Third-party subsidised** | Someone other than the user picks up the bill — often because the product creates value for that third party. Apple persuading telcos to subsidise iPhones is the canonical example. |

### B.6 Framework-specific terms

| Term | Definition |
|---|---|
| **Fit** | The joint between two adjacent elements (Market↔Product, Product↔Channel, Channel↔Model, Model↔Market). Either matches or doesn't. |
| **Cascade** | A cross-fit failure narrative — one upstream gap creating downstream pressure on fits two steps away. The most important pattern the diagnostic looks for. |
| **Aligned / Partial / Needs work** | The three traffic-light states the analysis emits per fit and per field. Aligned = matches. Partial = some alignment with a meaningful gap. Needs work = significant mismatch. |
| **Smooth Sailer / Tugboat** (Balfour) | Companies where growth feels easy ("Smooth Sailers") versus hard ("Tugboats"). Tugboats often have product-market fit but are missing one of the other three fits. |
