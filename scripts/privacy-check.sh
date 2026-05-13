#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
# BG Privacy Check
# ─────────────────────────────────────────────────────────────────────
# Greps the working tree against config/redact-list.txt.
# Exits 1 (and prints all hits) if any redacted term is found in a
# file that would be pushed to public GitHub Pages.
#
# Run before EVERY publish:
#   ./scripts/privacy-check.sh && publish
#
# The redact list itself is .gitignored — never pushed. Add entries
# to config/redact-list.txt; do NOT commit them.
# ─────────────────────────────────────────────────────────────────────

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REDACT_LIST="$REPO_ROOT/config/redact-list.txt"

if [[ ! -f "$REDACT_LIST" ]]; then
  echo "ERROR: $REDACT_LIST not found. Privacy check cannot run." >&2
  exit 2
fi

# Files to exclude from check (paths that are NOT pushed publicly)
EXCLUDES=(
  --exclude-dir=.git
  --exclude-dir=node_modules
  --exclude-dir=.wrangler
  --exclude-dir=.claude
  --exclude=redact-list.txt
  --exclude=privacy-check.sh
)

HITS_FOUND=0
HIT_OUTPUT=""

while IFS= read -r line; do
  # Strip comments and whitespace
  term="${line%%#*}"
  term="$(echo -n "$term" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
  [[ -z "$term" ]] && continue

  # Grep the working tree for this term (case-sensitive, word-bounded via Perl regex).
  # Word boundaries prevent false positives like "Brent" matching "Brenton".
  # Escape regex special characters in the term.
  escaped="$(printf '%s' "$term" | sed 's/[][\\.^$*+?(){}|/]/\\&/g')"
  matches="$(grep -rnP "${EXCLUDES[@]}" "\\b${escaped}\\b" "$REPO_ROOT" 2>/dev/null || true)"
  if [[ -n "$matches" ]]; then
    HITS_FOUND=1
    HIT_OUTPUT+="\n  TERM: \"$term\""
    while IFS= read -r match; do
      HIT_OUTPUT+="\n    $match"
    done <<< "$matches"
  fi
done < "$REDACT_LIST"

if [[ $HITS_FOUND -eq 1 ]]; then
  echo ""
  echo "❌ PRIVACY CHECK FAILED"
  echo "The following redacted terms appear in files that would be pushed publicly:"
  echo -e "$HIT_OUTPUT"
  echo ""
  echo "→ Redact these terms before pushing."
  echo "→ See config/redact-list.txt for the full list."
  exit 1
fi

echo "✓ Privacy check passed. No redacted terms found in working tree."
exit 0
