# `generate-search-terms` — v6.0 Upgrade Spec
*Upgrade contract for the skill that turns `config/thesis-schema.yaml` into `config/bg-search-terms.md`. Read this before any regeneration. Apply alongside the schema additions described below.*

*Last updated: 2026-05-07. Companion documents: `search-strategy-redesign.md` (memo), `radar-phase-4-blind-spot-protocol.md` (the structural fix this spec amplifies). Note: this spec does not on its own unstick the persistent S3/S5/S6/S7/S10 zeros — the protocol does that. The spec lifts the quality of every cell where vocabulary-driven search is the right tool, including the well-covered cells that the protocol leaves alone.*

---

## What this upgrade does

The current generator output `bg-search-terms.md` v5.5 has three weaknesses, only one of which is structural:

1. **Synthetic vocabulary (real, fixable here).** Every L1 query is a quoted exact-match against a phrase no founder writes (`"trade structuring AI startup"`, `"options strategy AI startup"`, `"AI-native RIA startup"`). The schema already has a `founder_vocabulary` field per gap but the generator emits the institutional version; switching to OR-lists of founder phrases as free-text terms is the fix.
2. **Single surface menu (real, fixable here).** Every category uses the same surface set (Sifted, Tech.eu, StationF, Level39, ~95 European seed VCs). The schema upgrade adds `audience_archetype` per gap (A/B/C/D/E) and a top-level `audience_archetypes` block that defines per-archetype surface menus (Kitces / T3 for B; The Trade News / Markets Media for C; ACAMS / Compliance Week for D; Reddit / Show HN for A; LangChain / Anthropic customer pages for E). The generator must read these and emit archetype-matched L2 / L3 queries.
3. **Audience inversion (real, partially fixable here).** The current queries ask "where does the press talk about this kind of company?" rather than "where does this company go to find its first fifty customers?" Fixing #1 and #2 closes most of this gap. The remaining residue — that for the empty cells the answer is *not* L1 press at all but accelerator portfolios, reverse-archetype walks, and GitHub — is handled by the radar's Phase 4 blind-spot protocol, not by this generator.

The 2026-05-07 manual seed pass against five empty cells (S3, S5, S6, S7, S10) surfaced ~20 candidates in 30 minutes using the protocol's path (Step B / D / E). Evidence: `empty-cells-seed-pass-2026-05-07.md`. Once the schema upgrade lands and the generator follows this spec, the same kind of pass will run automatically every cycle.

---

## What the v6.0 generator must do

### 1. Read the new schema fields

`config/thesis-schema.yaml` v2.0 (companion update) adds two new top-level blocks and two new per-gap fields. The generator must read all four.

**Top-level: `audience_archetypes`** — five archetypes (A through E) with their watering holes, conferences, trade press, newsletters, podcasts. The generator pulls surface lists from this block.

**Top-level: `discovery_layers`** — the L0–L10 layer architecture. The generator emits queries grouped by these layers, not the old L1a–L4e syntax.

**Per-gap: `audience_archetype`** — one or more archetype tags (A/B/C/D/E). The generator picks the union of surface menus for the listed archetypes.

**Per-gap: `customer_jobs`** — JTBD phrasing from the customer's side, used to enrich free-text queries (replaces the old institutional_vocabulary as the primary L1 input).

### 2. Replace the L1a–L4e taxonomy with L0–L10

| Old | New | Rationale |
|---|---|---|
| L1a (Generic press) | L1 (Tech press) | Same surface, but query is `(founder_phrase_1 OR founder_phrase_2 OR ...) site:domain` not `"synthetic exact-match phrase" site:domain` |
| L1b (Targeted press) | L2 (Trade press by archetype) | Per-archetype trade press from `audience_archetypes`. Old country-rotation press is now a sub-list of L1 (still useful for non-English markets). |
| L1c (Hubs) | L3 (Conferences & demo days, archetype-specific) | StationF / Level39 / Plexal still belong in this list but for archetypes A and E only. Adds Money 2020, Finovate, T3, Future Proof, Kitces showcase, Show HN, Product Hunt, ACAMS, RegTech FS Innovation. |
| L2 (Product launches) | rolls into L3 (A and E archetypes) | Show HN and Product Hunt are now archetype-A/E specific surfaces, not category-universal. |
| L3 (GitHub MCP) | L8 (Build-in-public, archetype-A/E) | GitHub remains useful for E archetype. For B/C/D, swap in LinkedIn-job-post and trade-association-member-list searches. |
| L4a (Accelerators) | L10 (Accelerator showcases, expanded) | Adds Mastercard Start Path, Tenity (was F10), Barclays Rise, Fintech Sandbox, MassChallenge FinTech, ICONIQ, AI Grant cohorts. |
| L4b (Seed VCs) | L5 (VC portfolio + corporate VC) | Existing list **plus** finserv-native (F-Prime, Flourish, Nyca, FT Partners) **plus** corporate venture (Citi Ventures, Wells Fargo Strategic Capital, JPMorgan Strategic Investments, Goldman Strategic Investments, Visa Ventures, Mastercard Foundry, Capital One Ventures, American Express Ventures). |
| L4c (Spin-outs) | rolls into L10 | Same surface, just renamed. |
| L4d (Competitions) | rolls into L3 | Same surface, just renamed. |
| L4e (Databases) | L9 (Adjacent-competitor pages) | Crunchbase / Dealroom / Wellfound stay; G2 / Capterra "alternatives to" pages added. |

New layers introduced:

| New layer | What it queries | When to fire |
|---|---|---|
| **L0 — Customer-Native Vocabulary** | Free-text founder/customer phrases per gap. Used as terms inside L1, L2, L3 queries — never as exact-match. | Always — L0 is the input substrate for higher layers, not a layer that emits its own queries. |
| **L4 — Newsletters & podcasts** | Fintech Brainfood, Fintech Business Weekly, Net Interest, This Week in Fintech, Wealth Mosaic, Kitces Financial Advisor Success podcast, Wharton Fintech podcast, Latent Space, Future Proof podcast | Every cycle for any archetype |
| **L6 — Inverse signals: hiring posts** | `site:wellfound.com "founding engineer" + [CNV]`; `site:linkedin.com/jobs "founding ML engineer" + [CNV]`; `site:efinancialcareers.com "founding"`; `site:workatastartup.com [CNV]` | Every cycle, every archetype |
| **L7 — Inverse signals: customer logos** | `site:langchain.com case study + finserv`; `site:anthropic.com/customers + finserv`; `site:vercel.com/customers + wealth`; `site:vanta.com/customers + finance` | Every cycle, every archetype |

### 3. Use customer_jobs and founder_vocabulary as free-text, not exact-match

Wrong:
```
"trade structuring AI startup" startup seed funding -crypto -DeFi -blockchain
```

Right:
```
("after-tax alpha" OR "asset location" OR "tax-aware advisor" OR "AI tax planning" OR "advisor copilot") seed funding -crypto -DeFi
```

The exact-match phrase is the synthetic taxonomy label, which never appears in the wild. The OR-list of customer-native phrases produces real hits.

### 4. Apply archetype-specific surface menus

When generating L2 (trade press) for a gap tagged `B` (advisor):
```
site:kitces.com [CNV terms]
site:thinkadvisor.com [CNV terms]
site:wealthmanagement.com [CNV terms]
site:riabiz.com [CNV terms]
site:fa-mag.com [CNV terms]
site:advisorhub.com [CNV terms]
site:wealthmosaic.com [CNV terms]
site:citywireria.com [CNV terms]
```

When generating L2 for a gap tagged `C` (broker):
```
site:thetradenews.com [CNV terms]
site:marketsmedia.com [CNV terms]
site:waterstechnology.com [CNV terms]
site:risk.net [CNV terms]
site:financemagnates.com [CNV terms]
site:a-teaminsight.com [CNV terms]
site:fnlondon.com [CNV terms]
```

For a gap tagged `B + C` (advisor + broker), use the union of both lists. The full surface lists live in `thesis-schema.yaml` under `audience_archetypes`.

### 5. Emit a per-cell coverage map at the bottom of the file

The current file has a `## SEARCH STATE` block with a hash. Add a `## COVERAGE MAP` block above it that lists every gap with its archetype tag, the layers fired, and the count of CNV phrases used. This makes it possible to audit coverage without diff'ing the full file.

```
## COVERAGE MAP
| Gap | Archetype | Status | CNV count | Layers fired |
|---|---|---|---|---|
| S-FRONT | A + B | partial | 14 | L1, L2, L3, L4, L6, L7, L10 |
| S1 | C + E | filled | 12 | L1, L2, L4, L5, L7, L8, L10 |
| S3 | B + C | empty (seed pass 2026-05-07) | 16 | L1, L2, L3, L6, L7, L10 |
| ... |
```

---

## Migration notes

1. The old taxonomy (`L1a` through `L4e`) is deprecated but should be left in the file as commented section headers for one cycle, so existing radar tasks don't break on a missing reference. The radar-task `Step 0b` block in `radar-step-0b-addition.md` references "Layer 1 / Layer 2 / Layer 3 / Layer 4" — that block must be updated alongside this generator.
2. The `quality_gates` block (`max_round_size_usd: $50M`, `max_age: 90d`, etc.) stays unchanged.
3. The `chain_exclusion_terms` block stays unchanged.
4. The country-rotation press list stays — but moves into the L1 sub-block, not the universal L1b layer.

---

## Acceptance test

After regeneration, run a manual scout against three previously-empty cells (e.g. S3, S5, S10). Each should produce at least three live candidates from the v6.0 architecture that the v5.5 architecture missed. The 2026-05-07 seed pass surfaced 20 candidates across five empty cells; v6.0 should match or exceed that with no manual intervention.

If a cell still produces zero after the upgrade, the failure is in the schema — either the `customer_jobs` list is too thin or the archetype tag is wrong. Fix the schema, not the generator.
