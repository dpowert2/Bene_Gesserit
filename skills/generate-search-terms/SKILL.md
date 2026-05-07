# Skill: generate-search-terms

## Purpose

Read `config/thesis-schema.yaml` and produce a complete, multi-layer `config/bg-search-terms.md`.

This skill is the ONLY authorised way to update bg-search-terms.md. Never edit that file by hand.

---

## When to Run

- After any edit to `config/thesis.md` (the thesis hash in `config/search-state.json` will have changed)
- After any edit to `config/thesis-schema.yaml`
- When the radar task detects a thesis hash mismatch at Step 0
- On manual request: "regenerate search terms"

---

## Inputs

1. `config/thesis-schema.yaml` — the gap definitions and source lists (source of truth)
2. `config/search-state.json` — read to preserve existing query tracking data; update with new query entries
3. `config/thesis.md` + `config/thesis-schema.yaml` — combined SHA-256 hash stored in `search-state.json` as `thesis_hash`. Hashing both files means edits to source lists, vocabularies, or accelerator lists trigger regeneration (not just thesis.md edits).

**Hash computation:**
```python
import hashlib
h = hashlib.sha256()
with open('config/thesis.md','rb') as f: h.update(f.read())
with open('config/thesis-schema.yaml','rb') as f: h.update(f.read())
thesis_hash = h.hexdigest()
```

---

## Output

`config/bg-search-terms.md` — completely replaced (not appended). Version bumped by 0.1.

---

## Generation Architecture: 4 Layers per Gap

For each gap in thesis-schema.yaml, generate queries across exactly 4 discovery layers.
Each layer targets a different source surface and uses different vocabulary.

### LAYER 1 — Press & Funding Coverage
**Source:** General web search PLUS targeted high-quality press outlets from `global_config.press_sources`
**Vocabulary:** `institutional_vocabulary` from schema
**Crypto exclusion:** Add `global_config.crypto_exclusion_terms` if gap has `crypto_exclusion: true`

Layer 1 has TWO sub-blocks per gap:

**1a. Generic press queries** — 4–6 queries
**Query structure:** `"{vocab term}" seed startup [geo_qualifier]`

**1b. Targeted press queries** — one `site:` query for every `priority: high` source, plus one combined query covering the medium/low sources. The skill MUST iterate `global_config.press_sources` and generate these — DO NOT hardcode site names.
**Query structure:** `site:{source.site} "{vocab term}" [stage] [geo]`

**Example for S1 (institutional vocab: "alternative data API", "earnings intelligence"):**
```
# 1a — Generic
"alternative data API" startup seed Europe -crypto -DeFi -blockchain
"financial signal intelligence" startup "Series A" fintech
"earnings intelligence" AI startup London OR Berlin
"financial research agent" seed funding 2025 OR 2026

# 1b — Targeted press (one per high-priority source)
site:sifted.eu "alternative data API" -crypto
site:techcrunch.com "earnings intelligence" startup seed
site:tech.eu "financial signal intelligence" Europe
site:eu-startups.com "alternative data API" fintech
site:finextra.com "financial research agent" startup
# Combined for medium/low priority
("site:theinformation.com" OR "site:fintechfutures.com" OR "site:maddyness.com") "alternative data API" agent
```

If `geo_preference: europe-first`, prefer European sources (Sifted, tech.eu, EU-Startups, Maddyness, Handelsblatt, Financial News London) when picking which targeted queries to emit.

### LAYER 2 — Product Launch Discovery
**Source:** Product Hunt, Show HN (Hacker News)
**Vocabulary:** `founder_vocabulary` from schema
**Query structure:** `site:producthunt.com "{vocab term}"` OR `site:news.ycombinator.com "Show HN" "{vocab term}"`
**Count per gap:** 3–4 queries
**Example for S1:**
```
site:producthunt.com "financial data MCP"
site:news.ycombinator.com "Show HN" "alternative data API"
site:producthunt.com "earnings intelligence API"
site:news.ycombinator.com "Show HN" "financial signals"
```

### LAYER 3 — Technical Artifact Discovery
**PRIMARY method (much higher signal):** GitHub MCP tools — `mcp__github__search_repositories`
with `sort=updated` and a recent `pushed:>YYYY-MM-DD` filter. This returns real repos
sorted by recency, with stars/forks/languages, and is dramatically more reliable than
Google's GitHub index (which has historically returned zero pipeline-converted signals).

**DO NOT use a `stars:>N` filter** — it zeroes out fresh repos that haven't accumulated
stars yet but ARE the early-signal we want. Recency + topic vocabulary is enough.

**Fallback (when MCP not available):** targeted topic-page queries and date-filtered
web searches against `site:github.com`, `site:huggingface.co`, `site:gitlab.com`.

**Vocabulary:** `technical_vocabulary` from schema
**Count per gap:** 2 MCP queries + 2 fallback web queries
**Example for S1:**
```
# 3a — GitHub MCP (primary)
mcp__github__search_repositories: q="alternative data API agent pushed:>2026-01-01", sort="updated", per_page=20
mcp__github__search_repositories: q="earnings intelligence MCP language:python pushed:>2026-01-01", sort="updated"

# 3b — Topic pages & date-filtered web (fallback)
site:github.com/topics/financial-agent
site:github.com "alternative data SDK" "pushed in 2026"
site:huggingface.co "earnings agent" model
site:gitlab.com "financial agent" "MCP"
```

The radar prompt MUST attempt the MCP search first; only fall back to web queries
if the MCP tool errors or returns empty.

### LAYER 4 — Community, Accelerators, VCs, Spin-outs, Competitions, Databases
This layer is split into 5 sub-layers. The skill MUST iterate the FULL lists for each — do not hardcode any names.

- **4a (Accelerators)** — every entry in `global_config.accelerator_sources`
- **4b (Seed VCs)** — every entry in `global_config.vc_seed_sources`
- **4c (University spin-outs)** — every entry in `global_config.university_spinout_sources`
- **4d (Competitions)** — every entry in `global_config.startup_competition_sources`
- **4e (Startup databases)** — every entry in `global_config.startup_databases` (AngelList/Wellfound, F6S, Dealroom, Crunchbase, Tracxn, Beauhurst, SeedTable, EU-Startups directory, Sifted Startup Tracker)

**Vocabulary by sub-layer (CRITICAL — do not reuse):**
- 4a, 4b, 4c, 4d, 4e all use `institutional_vocabulary` (formal/funding-press register)
- Layer 2 was the only place to use `founder_vocabulary` ("Show HN", "AI money manager", etc.)
- **NEVER embed a Layer-2 idiom (e.g. "Show HN", "I built", "Launching today") inside a 4a/4b/4c/4d/4e site: query.** Strip them before emitting.

**Query structure:** `site:{source.site} "{institutional_vocab_term}"` — one query per source entry
**Count per gap:** at minimum, ONE query per source entry (the skill MUST iterate the full lists). Plus 1–2 generic community queries using `community_vocabulary`.
**Example for S1 (with accelerator_sources containing YC, EF, Antler, Mouro, P&P, Techstars, Seedcamp, Notion, Index, Balderton, Atomico, SPC, OnDeck):**
```
site:ycombinator.com "alternative data" fintech AI
site:joinef.com "financial intelligence"
site:antler.co "alternative data" fintech
site:mourocapital.com "financial signals"
site:plugandplaytechcenter.com "alternative data API"
site:techstars.com "financial intelligence" agent
site:seedcamp.com "alternative data" fintech
site:notion.vc "financial signals" B2B
site:balderton.com "alternative data" Europe
site:atomico.com "earnings intelligence"
"AI investment research" startup EF OR Antler OR Seedcamp OR Atomico
```

Filter European-first gaps to the European-tagged accelerators (those with `filter_tags: [European, ...]`) where possible.

---

## Quality Gates (Applied During Generation)

These are STRUCTURAL constraints, not optional checks. If a gap fails a gate, fix the output — don't skip the gate.

**Gate 1: Layer Completeness**
Every gap MUST have queries in all 4 layers. No layer can be empty.

**Gate 2: Vocabulary Diversity**
Layer 1 and Layer 2 queries for the same gap MUST use different vocabulary registers.
If you find yourself writing the same phrase in both layers, you've missed the founder-speak framing.

**Gate 3: Crypto Exclusion**
Every query for a gap with `crypto_exclusion: true` MUST include: `-crypto -DeFi -blockchain -web3`
Apply to all 4 layers. No exceptions.

**Gate 4: Third-Party Qualifier**
For gaps with `third_party_qualifier: true`, at least 2 queries per gap MUST include one of:
`"third party"` OR `"external agents"` OR `"marketplace"` OR `"platform"` OR `"API"` OR `"SDK"`
This enforces the core Hard Filter that internal workflow tools are rejected.

**Gate 5: Stage Anchoring**
Layer 1 queries MUST include at least one stage qualifier per gap:
`seed` OR `"pre-seed"` OR `"Series A"` OR `YC` OR `EF` OR `Antler`
This keeps the search surface at the target stage.

**Gate 6: Geo Weighting**
For gaps with `geo_preference: europe-first`, at least 2 Layer 1 queries MUST include a European location:
`Europe` OR `UK` OR `London` OR `Berlin` OR `Paris` OR `Amsterdam` OR `Dublin` OR `Barcelona`

**Gate 7: Novelty Anti-pattern Exclusion**
For each gap, scan its `novelty_antipatterns` and generate at least one query that
negates the most common anti-pattern. Example: if "dashboard" is an anti-pattern,
at least one query should include `-dashboard`.

---

## File Structure: bg-search-terms.md

The output file must follow this exact structure:

```markdown
# Bene Gesserit — Search Terms
*Version X.X | Generated: YYYY-MM-DD | Source: thesis-schema.yaml v1.0 | Thesis: v2.8*
*DO NOT EDIT — regenerate via generate-search-terms skill*

---

## How to Read This File

[Standard explanation of 4 layers]

---

## SPECIALIST AGENTS

### S-FRONT — Personal Financial Agent
**Team:** cross-team | **Status:** partial | **BG Bonus:** +10

#### Layer 1 — Press & Funding
[queries]

#### Layer 2 — Product Launch (Product Hunt / Show HN)
[queries]

#### Layer 3 — Technical Artifacts (GitHub)
[queries]

#### Layer 4 — Community & Accelerators
[queries]

---
[repeat for each gap]

## PLATFORM INFRASTRUCTURE
[P1–P8]

## RESEARCH TEAM
[R1–R3]

---

## GLOBAL ACCELERATOR SWEEPS
*Run these as batch operations, not inline with daily searches*
[accelerator URLs with filter instructions]

---

## SEARCH STATE
*Last generated: YYYY-MM-DD*
*Thesis hash: [SHA-256 of thesis.md at generation time]*
*Total queries: N*
```

---

## Updating search-state.json (closes the learning loop)

After generating bg-search-terms.md, update `config/search-state.json`:

1. Set `thesis_hash` to the COMBINED SHA-256 of `config/thesis.md` + `config/thesis-schema.yaml` (see Inputs section)
2. Set `search_terms_version` to the new version number
3. Set `search_terms_generated` to today's date
4. For any NEW query blocks (not in previous version), add an entry to the `query_blocks` object:
   ```json
   "S1_layer1b_sifted": {
     "query": "site:sifted.eu \"alternative data API\" -crypto",
     "gap_id": "S1",
     "layer": "1b",
     "first_added": "YYYY-MM-DD",
     "hit_count": 0,
     "empty_run_streak": 0,
     "status": "active"
   }
   ```
5. **PRESERVE** all existing query block entries (carry forward hit counts and streaks). The radar populates these every cycle — they are the system's memory.
6. **Honor learning signals from prior cycles:**
   - For query blocks with `status: "candidate_quarantine"` AND `empty_run_streak >= 6`:
     do NOT include them in the new version's queries; mark them `status: "deprecated"` with `deprecated_date`.
   - For query blocks with `status: "high_yield"`: keep them verbatim, AND generate one or
     two sibling queries that vary the vocabulary/site so the high-yield pattern can be exploited further.
7. For any query blocks from the OLD version that no longer appear in the new version
   AND were not auto-deprecated in step 6, set their `status` to `"superseded"` with
   `superseded_date` — do NOT delete them (they're our query archaeology).

---

## Step-by-Step Execution

1. **Read** `config/thesis-schema.yaml` (full file)
2. **Read** `config/search-state.json` (for preservation of tracking data)
3. **Compute** combined SHA-256 of `config/thesis.md` + `config/thesis-schema.yaml` (see Inputs section above for the exact Python recipe; uses the workspace path discovered via glob, not a hardcoded session path)
4. **Generate** all queries gap-by-gap, applying all 4 layers and all 7 quality gates
5. **Count** total queries generated; verify minimum 8 queries per gap (4 layers × 2 minimum)
6. **Write** the complete new `config/bg-search-terms.md` (full overwrite)
7. **Update** `config/search-state.json` with new hash and query block entries
8. **Run** `scripts/privacy-check.sh` on the new bg-search-terms.md before finalising
9. **Report** summary: gaps covered, total queries, layer breakdown, any gates that needed forcing

---

## Anti-Patterns to Avoid

- DO NOT carry over old vocabulary-only queries that duplicate what the new layers already cover
- DO NOT write Layer 2 queries using institutional vocabulary (that's Layer 1's job)
- DO NOT omit crypto exclusion terms just because the gap seems unlikely to surface crypto results
- DO NOT generate identical queries for similar gaps (S3 and S6 share trade vocabulary — differentiate)
- DO NOT make Layer 3 GitHub queries too broad ("site:github.com finance AI" is useless)
- DO NOT include specific company names in queries (the pipeline already has them; queries find new ones)

---

## Version History Convention

| Old version | New version | Trigger |
|-------------|-------------|---------|
| 4.10 | 5.0 | First generation from thesis-schema.yaml (major rebuild) |
| 5.0 | 5.1 | Thesis change (minor schema update) |
| 5.1 | 6.0 | Schema structural change (new fields or new gaps) |
