# Memory

## Me
Dave Power. Running Bene Gesserit — a personal deal-scouting system for agentic AI startups in financial services.

## Hard Rules
| Rule | Why |
|------|-----|
| **Always invoke the publish skill** (`Skill tool, skill: "publish"`) before pushing ANY files to GitHub | Ensures consistent deployment, proper large-file handling, visible tracking |
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
| Voting | Supabase (bg_votes table) |
| Design system | Warm beige/cream, Instrument Serif / DM Sans / DM Mono |
| Scheduled tasks | 15 tasks covering radar, publish, thesis, search terms, learning, watchdog |

## Preferences
- Proceed without asking — Dave prefers action over confirmation
- Keep changelog entries tagged with correct data-type for filtering
- New pipeline entries go at TOP of array (newest first)
- New SLUG_DATES entries go at BEGINNING of object
- Dynamic counts from JS, never hardcoded
