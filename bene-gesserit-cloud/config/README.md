# /config

Default values for the user-editable configs. Each `.example` file ships with the template; on first deploy, `db/seed.ts` reads them and inserts them into the `config` table if no values exist.

After first deploy, **edit via `/settings` in the running app** rather than these files. Reasons:

- The UI saves immediately and writes a `changelog_entries` row.
- The example files won't conflict when you pull upstream template updates.
- Multiple `.example` files would create churn in the repo.

The example files are kept around so:

- A user resetting their config to defaults can just re-seed.
- Forkers learn the shape of each config quickly.
- Pulling upstream improvements to the templates shows up cleanly in diffs.

## Files

- **`thesis.md.example`** — your hunting thesis (markdown).
- **`scoring-weights.json.example`** — base dimensions + soft factors (JSON).
- **`search-terms.md.example`** — radar query list (markdown).
