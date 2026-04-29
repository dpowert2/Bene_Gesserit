# Memory

## Me
Dave Power. Running Bene Gesserit — a personal deal-scouting system for agentic AI startups in financial services.

## Hard Rules
| Rule | Why |
|------|-----|
| **Always invoke the publish skill** (`Skill tool, skill: "publish"`) before pushing ANY files to GitHub | Ensures consistent deployment, proper large-file handling, visible tracking |
| **Always pass `--repo-root /Users/davidpower/BeneGesserit`** to the push script when pushing files in subfolders (config/, scripts/, how-it-works/, etc.) | The script's `--file` mode used to silently flatten paths via `os.path.basename()`, so `config/thesis.md` would land at the repo root as `thesis.md` instead of updating the live `config/thesis.md`. This was patched 2026-04-29 — `--repo-root` now preserves the relative path. Without the flag, single-file pushes from cwd still work via legacy basename behaviour. |
| **Run `scripts/privacy-check.sh` before EVERY publish/push, chained with `&&` so a failed check blocks the push** — if it fails, redact and re-run; never push past a failure. Example: `scripts/privacy-check.sh && python push_to_github.py ...` | Prevents personal names from private materials leaking to public GitHub Pages. The redact list lives at `config/redact-list.txt` (gitignored — never pushed). The `&&` is critical: a sequential chain (`;`) would let the publish run even on failed check, defeating the gate. |
| **Anything Dave shares or uploads is private by default** | Personal names, internal initiative names, partner contact names from notes/screenshots/docs do NOT go into thesis.md, search-terms.md, startups-data.js, changelog.html, or any other publicly-served file. Use role labels ("Studio sponsor", "Research lead", "EIRs", "academic research partner") instead. Third-party founder names from press coverage of pipeline startups are OK. |
| **Never use the word "Fidelity"** in generated HTML | Write in second person ("you", "your strategy") instead |
| **Never use AskUserQuestion tool** with Dave | Causes stalling/empty responses — just proceed |
| **Never use git CLI** (git add, git commit, git push) from the sandbox | They don't work — use the publish skill or GitHub MCP tools |

## Projects
| Name | What |
|------|------|
| **BG Portal** | Static multi-page site at bg-votes.benegesserit.workers.dev. GitHub: dpowert2/Bene_Gesserit |
| **How It Works** | Microsite explaining BG system. GitHub: dpowert2/bene-gesserit-how-it-works |
| **Mentat** | Personal financial dashboard and strategy system |

## Infrastructure
| Component | Detail |
|-----------|--------|
| Hosting | Cloudflare Workers auth gateway → GitHub Pages content |
| Voting | Turso (libSQL) — bg_votes table at bg-votes-dpowert2.aws-eu-west-1.turso.io. Migrated from Supabase 2026-04-29 (Supabase free tier auto-paused after 1 week of inactivity, silently dropping saves). localStorage fallback layer added at the same time so votes persist even if remote is unreachable. |
| Design system | Warm beige/cream, Instrument Serif / DM Sans / DM Mono |
| Scheduled tasks | 15 tasks covering radar, publish, thesis, search terms, learning, watchdog |

## Preferences
- Proceed without asking — Dave prefers action over confirmation
- Keep changelog entries tagged with correct data-type for filtering
- New pipeline entries go at TOP of array (newest first)
- New SLUG_DATES entries go at BEGINNING of object
- Dynamic counts from JS, never hardcoded
