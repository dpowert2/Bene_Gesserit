# Four Fits — The Diagnostic Tradecraft

The full ruleset behind the diagnostic. Each rule names a thing to probe, the failure mode it
catches, and *why* it matters. Use this when you need depth on a particular box or connection, or
to be sure you're not missing a known trap.

## Contents

- Market rules (M1–M5)
- Product rules (P1–P5)
- Channel rules (CH1–CH4)
- Model rules (MO1–MO5)
- Cross-fit rules (X1–X3)
- The known red flags

---

## Market rules

**M1 · Get to the individual.** "Who" must be a real human you could picture — a title, a company
size, a geography, a moment in their week. "Startups and small businesses" or "product teams" is a
category, not a person. Personas-by-committee fail this box because they're too vague to test a
product, a channel, or a price against. *Why it matters:* every downstream decision — what to
build, where to find them, what to charge — is only as precise as the Who.

**M2 · Macro vs micro problem — two altitudes.** A complete Market hypothesis has both: the
**macro problem** (the systemic "why it matters" — e.g. the electricity grid can't connect new
generation fast enough) and the **micro problem** (the specific, addressable bottleneck inside it —
e.g. transformer availability). You solve the macro by picking the right micro. Flag when only one
altitude is present, or when the micro doesn't credibly sit inside the macro. *Why it matters:*
the macro gives the work meaning and market size; the micro is the thing the product can actually
grab hold of. Founders who only have the macro are vague; founders who only have the micro can't
say why anyone should care.

**M3 · Pain, not vitamins.** A problem can be specific *and* still be a vitamin. Probe the pain
level against the evidence: if the founder claims "real" or "hair-on-fire" pain but there's no
current spend, no workaround, no cost they can name, and no budget — it's a vitamin dressed up.
*Why it matters:* if the buyer doesn't already feel the pain enough to do something about it, they
won't care about the solution — you're not solving something they thought was a problem. Vitamin-
level pain isn't fatal at idea stage, but it must be named honestly, because it changes everything
downstream (vitamins need much cheaper channels and much lower friction).

**M4 · PMF is phases, not binary.** Product-market fit is a spectrum: *no data* → *early signal*
(good qualitative feedback, NPS north of 90) → *some retention* (paying customers staying, but the
curve still declines) → *flat retention curve* (the gold standard — a flat curve of paying
customers). A flat retention curve is the single strongest signal there is; early qualitative
feedback is the weakest. Check the claimed phase against the actual evidence — a claimed phase
with nothing behind it is a hope, not a finding. The Sean Ellis test ("how disappointed would you
be if this disappeared?" — 40%+ "very disappointed" indicates PMF) is one good piece of evidence.

**M5 · Laid, Made, or Paid.** The three real reasons humans buy: **Laid** (status, belonging,
attraction), **Made** (achievement, mastery, advancement), **Paid** (money, security, savings).
Pick the dominant driver and check it lines up with what the product actually does. A "Made"
motivation paired with a value prop that's all about saving money is a tell — what's actually
being sold, and to whom?

---

## Product rules

**P1 · Realizable benefit, not a nice-to-have.** The value prop must be a concrete, *realizable*
value — something the user can actually get inside the product — not an aesthetic or aspirational
quality. "A beautiful email client" — beauty is a nice-to-have you can't realize as value. "Save
2.5 hours a day" / "the best Linux email client for those who need a Microsoft email client" —
concrete, realizable, checkable. *Why it matters:* the founder will build, market, and price
around the value prop; if it's vague or aesthetic, everything downstream is vague.

**P2 · Two kinds of marketing.** Startup marketing makes a nuts-and-bolts **value** promise — a
literal, checkable claim. Mature-business marketing makes **emotional**/brand promises —
differentiation, "step into the future", brand consideration (think Coca-Cola, or a luxury car
tagline). An early-stage company usually can't afford brand marketing, and an emotional promise
can't be checked against the product. Flag an emotional promise on an early-stage proposition.

**P3 · The value chain — marketing is a promise the product must keep.** Marketing is a promise
you make to the customer. The customer comes to the product seeking a *specific* value. If they
can't realize that value inside the product — within the Time to Value — you've broken the chain:
they came for something they couldn't get, and they leave disinterested. Two specific checks:
(a) **value prop ↔ features** — the promise must be backed by features *shipped today*, not
roadmap; if the promise is bigger than what's shipped, that's the most common Product gap;
(b) **promise ↔ Time to Value** — a fast promise with a slow TTV is a credibility gap.

**P4 · The Aha moment must be precisely nameable.** The Aha moment is the single, observable
moment a user *feels* the value — not "when they understand it", not "when they realize the
value" (those are feelings, not events). "The first time X happens" passes. If the founder can't
name it precisely, that's the first thing to fix, because onboarding has nothing to aim at.

**P5 · Onboarding is a separate product.** Onboarding's only job is to drive the user to the Aha
moment as fast as possible. If the founder describes onboarding as "training", "rollout", or
"change management", that's a flag — they're treating it as overhead, not as a product with a
single ruthless goal. And Time to Value is critical in its own right: a TTV longer than a few
weeks, for anything not sold via enterprise field sales, is a severe constraint and the most
common trigger of a cascade (see X1).

---

## Channel rules

**CH1 · The Power Law of Distribution.** In early life, 70%+ of acquisition comes from **one**
channel — not three or four. If a founder lists several primary channels, they usually haven't yet
found the one that works. The Bullseye Framework (from *Traction*) is the exercise: brainstorm
wide across all channels, run cheap tests on the promising few, then commit to the one. "No box is
filler" — social-media-as-catch-all is a non-answer.

**CH2 · Density, not reach.** The real channel test isn't how many people it reaches — it's what
*fraction of the channel's audience can actually realize the value*. Hiri advertising on the
radio: maybe 1 in 10,000 listeners could ever get value — enormous reach, near-zero density, a
terrible channel. A good channel is dense with viable buyers.

**CH3 · The channel must reach the specific Who.** A generic channel for a niche buyer is a known
failure pattern. C-level executives are the canonical example — there is no concentrated venue
where C-level execs gather to be marketed to, so generic content, paid, and networking all
underperform. Specific buyers need specific channels. Check the channel against M1's Who.

**CH4 · The three channel tests.** Every channel must pass all three: (1) **natural fit** — the
product lends itself to it (channels don't mold to products); (2) **scales naturally** — it
doesn't cap out the way founder coffees or networking do; (3) **affordable to run** — the cost
isn't prohibitive. A channel that fails any one of these isn't the channel.

---

## Model rules

**MO1 · The Model is the bet — don't let it be a throwaway box.** Steve Blank: a startup is "a
temporary entity set up to find a scalable, repeatable business model." Finding the model *is* the
work of an early-stage startup. Treat the Model card as central, not a checkbox.

**MO2 · Sometimes the model is the innovation.** Strategyzer / *Business Model Generation*
catalogues dozens of patterns — subscription, freemium, transactional, marketplace, multi-sided
platform, razor-and-blade, pay-per-use, revenue share, aggregator, open-source-with-paid-services,
white-label, franchise, long tail, who-pays inversion, third-party subsidised. Sometimes the
*model* is the transformative thing, not the product: Apple persuaded telcos to subsidise the
iPhone handset — that pricing inversion was as transformative as the device. Xerox shifted from
selling copiers to per-page billing, turning a capital purchase into recurring revenue and
changing an industry. If a founder has dialled in "standard per-seat SaaS" but the channel/market
geometry is uncomfortable, ask whether a non-standard pattern would unlock more.

**MO3 · The Janz animals — pick one and own the implications.** Indexed by ARPA: **Mouse** ($100
ARPA, ~1M customers) — requires inherent virality; without a viral mechanic, mouse is dead.
**Rabbit** ($1k, ~100k) — usually has to go upmarket past $10–20M ARR. **Deer** ($10k, ~10k) — the
standard SaaS sweet spot; most $100M+ ARR companies live here or one segment up. **Elephant**
($100k, ~1k) — real field sales motion required. **Whale** ($1M, ~100) — a full enterprise sales
org required. Cross-check the animal against the sales motion and the channel: a Whale animal with
a self-serve motion, or a Mouse with no virality, is an immediate "needs work".

**MO4 · ARPU must cover CAC — the absolute floor.** Obvious, but a constant pitfall. If revenue
per customer doesn't cover the cost to acquire them over a reasonable payback window, nothing else
matters and that fit is "needs work" on its own. Look for back-of-envelope CAC math — e.g. "$5 per
click × a 1-in-10 conversion rate = $50 to acquire a customer, so the product (or its lifetime
value) had better clear $50." If the founder hasn't done this arithmetic, that's a gap in itself.

**MO5 · Price to capture value; avoid commodity; aim for monopoly.** The best pricing method is to
ramp the price up until the customer won't pay any more — find the ceiling. Don't just anchor to
competitors. Price to capture the *value added*: you need to quantify the value (how much money
you save or make the customer per year) and price at a fraction of it. Commodities are a race to
the bottom — flag commodity-risk pricing. The goal is monopoly-like pricing power, earned through
genuine value add. If the value isn't quantified, the founder can't price to it — flag that.

---

## Cross-fit rules

**X1 · The CAC–ARPU spectrum and the danger zone.** Map the proposition on a spectrum: at one end,
Viral B2C / SEO (low cost to acquire, low revenue per customer); through Paid; through B2B Content
/ Inside Sales; to Enterprise Sales (high cost to acquire, high revenue per customer). Both ends
are viable. The **danger zone is the middle** — high cost to acquire paired with low revenue per
customer. Companies that try to run an enterprise-style sales motion at consumer-style prices die
there.

**X2 · Willingness AND ability to pay.** Model ↔ Market is two separate tests: does the segment
*want* it (willingness), and can they *afford* it (purchasing power and budget authority)? A buyer
who loves the product but has no budget line is a Model ↔ Market mismatch.

**X3 · The arithmetic of a meaningful outcome.** Revenue per customer × customers in the market ×
the share you can realistically win has to add up to something worth doing. If the market is too
small for the model, or the model extracts too little from the market, the math never gets there
— and that's a Model ↔ Market problem even if every other box looks fine.

---

## The known red flags — a quick checklist

When you're scanning a proposition, these are the patterns that most often signal a fit isn't
holding:

- A value prop that says one thing while the shipped features deliver something weaker, or slower,
  or different.
- An emotional/brand marketing promise on an early-stage proposition.
- A generic channel aimed at a specific niche buyer (especially C-level — no concentrated venue
  exists).
- Three or more "primary" channels — no real channel discipline.
- A Time to Value longer than a few weeks for anything not sold via enterprise field sales.
- An Aha moment that can't be named as a specific, observable event.
- Onboarding described as "training" or "rollout" rather than a product driving to Aha.
- A Mouse animal with no inherent viral mechanic.
- A Whale ARPA with no enterprise sales org.
- ARPU below CAC, or a CAC that was never estimated.
- Pain claimed as "real" or "hair-on-fire" with no current spend, workaround, or budget behind it.
- A macro problem with no micro problem (vague), or a micro with no macro (no reason to care).
- The Model treated as a checkbox — "standard SaaS, $X/seat/month" — when the channel and market
  geometry is clearly straining for a non-standard pattern.
- Pricing anchored to competitors or heading toward commodity, with the value never quantified.
