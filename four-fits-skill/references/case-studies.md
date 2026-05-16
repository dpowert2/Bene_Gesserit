# Four Fits — Worked Case Studies

Two worked examples. **Hiri** is a textbook cascade failure — every box looks defensible on its
own, but the proposition collapses when you read the connections. **Reflo** is a proposition where
the fits mostly align — a useful contrast for showing a founder what "good" looks like.

Use these to show a founder what a finished diagnosis looks like, or to calibrate your own read.

---

## Case study 1 — Hiri (a cascade failure)

*An email client that helps knowledge workers write fewer, better emails. Real company, launched.*

### The four cards

**Market.** Who: a C-level exec — CIO/CEO — of a knowledge-worker company of 50–1000 staff, who
thinks of email as a productivity tax on the org. Macro problem: knowledge-worker organisations
are losing productivity to a poor written-communication culture. Micro problem: individual bad
email habits — overlong messages, unclear asks, reply-all noise. Pain level: mild — execs grumble
about email, but few have a budget line for it and there's no current spend on a fix. Motivation:
Paid — claw back productivity hours, reduce wasteful email volume. PMF phase: early signal — warm
individual feedback, no retention-curve data at org level.

**Product.** Value prop: "save time, improve communication". Marketing promise: "a beautiful
email client for mid-level managers" — an emotional promise. Features that deliver: email scoring,
send-later, focus inbox — none of which directly produce the org-level "save time" claim quickly.
Hook: rate each other's emails — hold up a mirror to the team's habits. Aha moment: unclear and
buried. Time to value: ~12 months for org-level habit change. Onboarding: org-wide rollout,
training, change management — bundled into the deal, not a product in its own right. Stickiness:
habit-based, but only if onboarding ever gets there.

**Channel.** Primary: enterprise sales — but in practice the channel was networking, word-of-mouth
and founder coffees. Natural fit: weak. Audience density: C-level buyers have no concentrated
venue, so generic channels reach almost no one who would actually buy. Scales naturally: no. Cost
to run: high. CAC: effectively very high — founder time × months per deal.

**Model.** Animal: Whale. Pattern: standard enterprise SaaS subscription, no model innovation.
ARPA: $500k–$1.5M per company. Pricing logic: competitor-anchored. Value quantification: vague —
"save time" was never converted to dollars per company per year. Motion: field sales. CAC math:
never done. Volume to outcome: 70+ whale customers needed for a $100M outcome — with no enterprise
sales org. Unit economics: ARPU is large, but CAC is enormous and throughput is far too low.

### The diagnosis

**Overall: needs work. The Four Fits do not currently hold.**

**The four fits.** *Market ↔ Product:* partial — the buyer and both problem altitudes are clear,
but the pain is only mild (no current spend), and the value prop is too generic for the buyer's
actual decision. *Product ↔ Channel:* needs work — the 12-month Time to Value is the upstream
cause of everything that follows. *Channel ↔ Model:* needs work — a manual, founder-led channel
can't sustain the throughput whale economics demand. *Model ↔ Market:* partial — whale ARPA is
consistent with the buyer's purchasing power, but pricing is competitor-anchored, value was never
quantified, and "70+ whale customers without an enterprise sales org" is a gap.

**The connections that aren't holding.** C4 — the shipped features (scoring, send-later) don't
deliver the "save time" promise quickly. C5 — the marketing promise ("a beautiful email client")
is an emotional promise, and beauty isn't a realizable value. C7 — onboarding is "training and
rollout", not a product driving to a fast Aha; with a 12-month TTV there is no fast Aha to drive
to. C8 — the channel doesn't reach the C-level Who at any density. C13 — the value was never
quantified, so pricing couldn't be set to capture it.

**The cascade.** This is the lesson of Hiri. The Time to Value of roughly 12 months — because the
product was trying to change deeply-ingrained email habits at company scale — meant there was no
fast Aha moment. With no fast Aha, self-serve and paid acquisition were impossible, so the channel
collapsed into coffees, networking and word-of-mouth. Those manual channels imply enterprise sales
economics, which forced whale-scale pricing to make the per-deal numbers work. And whale pricing
requires a real enterprise sales org — named accounts, long cycles, a whole team — which didn't
exist. One slow box at the top, and the entire right-hand side of the system collapsed.

**The next move.** Start at the furthest-upstream broken joint: find a 5-minute Aha moment for an
*individual* user inside Hiri, before any org-level deployment. Build onboarding as a self-
contained product around that moment. Everything downstream — channel, model, the org-level sale —
only becomes possible once an individual can realize value fast.

The teaching point: every one of Hiri's cards is internally defensible. The company only dies when
you read the cards *together*.

---

## Case study 2 — Reflo (a strong fit)

*Release notes that write themselves — merged pull requests become a polished changelog in
minutes. Fictional, but realistic; launched. A useful contrast to Hiri.*

### The four cards

**Market.** Who: Head of Product at a 50–200 person B2B SaaS company that ships weekly and owns
the changelog. Macro problem: SaaS companies ship constantly but fail to communicate the value
they add — customers don't notice improvements, and churn quietly rises. Micro problem: release
notes are a manual Friday-afternoon chore the product lead does badly, or skips. Pain level: real
— ~2 hrs/week spent on it, or skipped with guilt; some have paid a contractor. Motivation: Made —
wants to look on top of the product story, and to reduce churn they get blamed for. PMF phase:
some retention — month-6 retention ~68% and flattening; ~45% would be "very disappointed" without it.

**Product.** Value prop: "your changelog writes itself — from merged PRs to a published changelog
in 5 minutes". Marketing promise: "connect your repo, publish your changelog in 5 minutes" — a
value promise. Features that deliver: GitHub + Linear integration, AI draft from PR titles and
descriptions, one-click publish to a hosted changelog page and in-app widget. Hook: the Friday
"your changelog is ready to review" nudge that becomes the team's ritual. Aha moment: the first
time they see a publish-ready changelog generated from their actual repo without writing a word.
Time to value: ~10 minutes — connect repo to first draft. Onboarding: connect GitHub → pick a repo
→ see the draft → publish; no tour, no demo data. Stickiness: the hosted changelog accumulates
history and SEO; leaving means losing the public archive.

**Channel.** Primary: product-led / self-serve. Natural fit: the product's own output is the
channel — every Reflo-powered changelog page carries a "powered by" link. Audience density: high —
every viewer of a changelog page is a product person at a SaaS company. Scales naturally: yes.
Cost to run: low. CAC: ~$80 blended, ~$36 on a paid backstop.

**Model.** Animal: Rabbit. Pattern: freemium — free tier carries "powered by" branding, paid
removes it and adds the in-app widget. Model innovation: the free tier's public changelog page *is*
the acquisition channel — the model and the growth loop are the same thing. ARPA: $1,200/year.
Pricing logic: value-capture. Value quantification: saves a product lead ~2 hrs/week (~$5k/year of
time) and reduces churn — priced at $1.2k, capturing ~24% of value created. Motion: self-serve.
CAC math: viral loop drives most signups; paid backstop at $3 CPC × 1-in-12 = $36 CAC, covered in
the first month. Volume to outcome: ~8,000 paying customers at $1.2k ≈ $10M ARR; a $100M outcome
needs going upmarket — the classic rabbit move. Unit economics: ARPU $1,200, CAC ~$80, payback ~1
month.

### The diagnosis

**Overall: largely aligned. The Four Fits mostly hold, with one honest open question.**

**The four fits.** *Market ↔ Product:* aligned — a specific buyer, a real and evidenced pain, a
realizable value prop backed by shipped features, a precisely-named Aha. *Product ↔ Channel:*
aligned — the 10-minute TTV makes self-serve viable, and the product's output literally is the
channel. *Channel ↔ Model:* aligned — a low-cost viral channel against $1,200 ARPA, with the CAC
math shown and covered in a month. *Model ↔ Market:* partial — the model and pricing are sound,
but Reflo is a Rabbit, and a $100M outcome means deliberately going upmarket. That's not a flaw;
it's a known Rabbit fork in the road that should be named.

**The connections.** C4 holds — the shipped features (PR-to-draft, one-click publish) directly
deliver the "5 minutes" promise. C5 holds — it's a value promise, and the product keeps it. C7
holds — onboarding is a ruthless four-step path to a 10-minute Aha. C8 holds — the channel reaches
the exact Who at high density. C13 holds — the value is quantified ($5k/year saved) and price is a
clean fraction of it.

**The teaching point.** Reflo's standout is C9 and the model innovation together: the product's
own output (a public changelog page) is the acquisition channel, so the growth loop and the
business model are the same mechanism. That's what a fit *looking right* feels like — not that
every box is perfect, but that the joints carry load. The one honest gap (Model ↔ Market for a
$100M outcome) is named, not hidden — which is exactly how a good proposition handles its open
questions.

**The next move.** Decide the upmarket path deliberately now, while still small — what the Deer-
sized version of Reflo looks like — rather than discovering the Rabbit ceiling at $10–20M ARR.
