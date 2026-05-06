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

1. `config/thesis-schema.yaml` — the gap definitions (source of truth)
2. `config/search-state.json` — read to preserve existing query tracking data; update with new query entries
3. `config/thesis.md` — read to compute its SHA-256 hash (store in search-state.json as `thesis_hash`)

---

## Output

`config/bg-search-terms.md` — completely replaced (not appended). Version bumped by 0.1.

---

## Generation Architecture: 4 Layers per Gap

For each gap in thesis-schema.yaml, generate queries across exactly 4 discovery layers.
Each layer targets a different source surface and uses different vocabulary.

### LAYER 1 — Press & Funding Coverage
**Source:** General web search, news, TechCrunch, Sifted, The Information
**Vocabulary:** `institutional_vocabulary` from schema
**Query structure:** `"{vocab term}" seed startup [geo_qualifier]`
**Crypto exclusion:** Add `global_config.crypto_exclusion_terms` if gap has `crypto_exclusion: true`
**Count per gap:** 4–6 queries
**Example for S1:**
```
"alternative data API" startup seed Europe -crypto -DeFi -blockchain
"financial signal intelligence" startup "Series A" fintech
"earnings intelligence" AI startup London OR Berlin
"financial research agent" seed funding 2025 OR 2026
```

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
**Source:** GitHub repositories
**Vocabulary:** `technical_vocabulary` from schema
**Query structure:** `site:github.com "{vocab term}"` (most recent)
**Count per gap:** 2–3 queries
**Example for S1:**
```
site:github.com "financial MCP server" fintech
site:github.com "alternative data SDK" investment
site:github.com "earnings data API" agent
```

### LAYER 4 — Community & Accelerator Discovery
**Source:** YC batch pages, EF cohort pages, Antler portfolio, Reddit, HN general
**Vocabulary:** `community_vocabulary` from schema + accelerator sources from global_config
**Query structure:** accelerator URL queries + community vocabulary searches
**Count per gap:** 2–3 queries (accelerator sweeps are run separately as batch operations)
**Example for S1:**
```
site:ycombinator.com "alternative data" fintech AI
site:joinef.com "financial intelligence"
"AI investment research" startup EF OR Antler OR Entrepreneur First
```

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

## Updating search-state.json

After generating bg-search-terms.md, update `config/search-state.json`:

1. Set `thesis_hash` to the SHA-256 of `config/thesis.md`
2. Set `search_terms_version` to the new version number
3. Set `search_terms_generated` to today's date
4. For any NEW query blocks (not in previous version), add an entry to the `query_blocks` object:
   ```json
   "S1_layer2_ph_01": {
     "query": "site:producthunt.com \"financial data MCP\"",
     "gap_id": "S1",
     "layer": 2,
     "first_added": "YYYY-MM-DD",
     "hit_count": 0,
     "empty_run_streak": 0,
     "status": "active"
   }
   ```
5. PRESERVE all existing query block entries (carry forward hit counts and streaks)
6. For any query blocks from the OLD version that no longer appear in the new version,
   set their `status` to `"deprecated"` with `deprecated_date` — do NOT delete them

---

## Step-by-Step Execution

1. **Read** `config/thesis-schema.yaml` (full file)
2. **Read** `config/search-state.json` (for preservation of tracking data)
3. **Compute** SHA-256 of `config/thesis.md` via bash: `sha256sum /sessions/focused-gallant-lovelace/mnt/BeneGesserit/config/thesis.md`
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
