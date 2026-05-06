# Radar Task — Step 0b Addition
*Add this block to `/Users/davidpower/Documents/Claude/Scheduled/bene-gesserit-radar/SKILL.md`*
*Insert AFTER "Step 0 — Find workspace" and BEFORE "Step 1 — Deduplication check"*

---

## Step 0b — Thesis hash check (regenerate search terms if thesis has changed)

```python
import json, hashlib

# Compute current thesis hash
with open(f'{workspace}/config/thesis.md', 'rb') as f:
    current_hash = hashlib.sha256(f.read()).hexdigest()

# Read stored hash from search-state.json
with open(f'{workspace}/config/search-state.json') as f:
    state = json.load(f)
stored_hash = state.get('thesis_hash', '')

print(f"Current thesis hash: {current_hash}")
print(f"Stored thesis hash:  {stored_hash}")
print(f"Match: {current_hash == stored_hash}")
```

**If the hashes DO NOT match:**
1. Print: "⚠️ THESIS CHANGED — regenerating search terms before scanning"
2. Read `{workspace}/skills/generate-search-terms/SKILL.md` and follow its instructions to regenerate `config/bg-search-terms.md` from `config/thesis-schema.yaml`
3. After regeneration, update `config/search-state.json` with the new `thesis_hash`
4. Run `cd {workspace} && bash scripts/privacy-check.sh config/bg-search-terms.md && echo PRIVACY_OK` before proceeding
5. Then continue with Step 1

**If the hashes MATCH:** print "✓ Thesis unchanged — using existing search terms" and continue.

---

*Also update the Step 2 scan instructions to reference the 4-layer structure:*

Replace the existing Step 2 paragraph that begins "Search the web for recent..." with:

```
Search the web for recent (last 48 hours) news and developments. The search terms file
is now structured as 4 layers per gap. Run ALL layers, not just Layer 1:
- Layer 1 (Press & Funding): Standard web search — always run
- Layer 2 (Product Hunt / Show HN): site:producthunt.com and site:news.ycombinator.com queries — run every cycle
- Layer 3 (GitHub): site:github.com queries — run every cycle
- Layer 4 (Community & Accelerators): Accelerator batch page sweeps — run every other cycle

Prioritise S3, S5, S6, S7, S9, S10 (all empty gaps) across all layers.
```

*And add to the briefing template (Step 5) after "Specialist vs Infrastructure Split":*

```
## Layer Coverage This Cycle
- Layer 1 (Press): {n} queries run
- Layer 2 (Product Hunt/HN): {n} queries run
- Layer 3 (GitHub): {n} queries run
- Layer 4 (Accelerators): {n} queries run
```
