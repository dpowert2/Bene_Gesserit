# Daily Scan Runbook — Bene Gesserit

**Audience:** any Claude/Opus session running a BG radar scan.
**Goal:** add new startups to the pipeline without breaking the live site.
**Last updated:** Apr 17, 2026

---

## Read this first

The portal has broken multiple times this month because sessions pushed `pipeline.html` as 0 bytes after a content-truncation accident, then tried to "fix" it by fabricating replacement data. If you are here because the site looks broken:

- **Do not fabricate startup data.** Ever. If `pipeline.html` is zero bytes, the data still exists in git history — restore from there.
- **Do not push large files through multiple-round-trip content assembly.** Use `push_with_guard.py` and pass the file path.
- **Do not invent a new architecture mid-incident.** If you need to change the data model, open a scope doc, don't improvise in production.

---

## What a scan produces

Each radar run produces:

1. **One daily HTML page** — e.g. `2026-04-18.html` (morning run) or `2026-04-18b.html` (second run that day, `b`, `c`… suffix).
2. **New cards appended to `pipeline.html`** — JS array `const startups = [...]` at line ~391.
3. **A card on `index.html`'s `.run-grid`** — links to the daily page, shows stat counts.
4. **Optional: per-startup `.md` files in `/pipeline/detected/`** — reference docs only right now; not loaded at runtime.

---

## How to push (use the guarded script)

```bash
python push_with_guard.py \
  --owner dpowert2 --repo Bene_Gesserit --pat <PAT> \
  --file pipeline.html \
  --file index.html \
  --file 2026-04-18b.html \
  --message "Apr 18 Europe run: 12 new cards (89 → 101)"
```

The script **refuses** to push:
- A 0-byte file (absolute floor).
- A file smaller than 80% of its current remote size (relative floor). Catches truncation + fabrication.

If the guard trips, **do not pass `--allow-shrink`** unless you have a genuine reason (e.g. you're archiving cards and the shrink is intentional). The default behaviour is the safe one.

---

## Multiple runs per day

Naming convention:

| File | Meaning |
|------|---------|
| `2026-04-18.html` | First run that day |
| `2026-04-18b.html` | Second run (different focus — Europe, US, deep-dive, etc.) |
| `2026-04-18c.html` | Third run |

Each run gets its own card on the hub. Today that card is a peer of every other day's card — the multi-run UI grouping (date headers + theme chips) is P2 of the robustness scope. For now, just:

- Put a 1-line theme in the daily page title (e.g. `"Apr 18 — Europe focus"`).
- Add a `.run-card` to `index.html`'s `.run-grid` linking to the daily page.
- Append the new startup objects to the `startups` array in `pipeline.html`.
- Update the meta description count (`"All N startups"`) on both `pipeline.html` and `index.html` if present.

---

## What to do when something looks wrong

- **`pipeline.html` is 0 bytes on main.** Find the last good commit: `gh api repos/dpowert2/Bene_Gesserit/commits --jq '.[] | select(.commit.message | contains("restore")) | .sha'` or walk commits manually. Download that commit's version, push via the guarded script. Do not rewrite from memory.
- **Tool just said "Updated: pipeline.html" but the site looks blank.** Cloudflare worker proxies GitHub raw content — there's a short cache. Hard refresh (⌘⇧R). If still blank after 2 minutes, check the actual file size at `https://raw.githubusercontent.com/dpowert2/Bene_Gesserit/main/pipeline.html`.
- **You got an MCP error mid-push that left the file in an ambiguous state.** Do not assume success. Check remote size first. If it's wrong, restore from history before doing anything else.
- **Another Opus session is running concurrently.** Stop it before pushing. Two sessions touching `pipeline.html` race with each other and the loser silently loses its work.

---

## P1/P2/P3 is coming

This runbook is a stopgap. The real fix (see `outputs/bg-multirun-scope.md` or the scope doc in the user's working notes) moves the data model to per-startup JSON files + a manifest, and adds a multi-run-per-day UI with date-grouping and theme chips. Until that lands, follow the above.
