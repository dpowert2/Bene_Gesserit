#!/bin/bash
# Fix: push correct pipeline.html (141KB, 45 startups, includes Basis + Ralio) to GitHub Pages
# Run this from Terminal on your Mac if the automated push failed.
cd /Users/davidpower/BeneGesserit
rm -f .git/index.lock .git/HEAD.lock
git add pipeline.html
git commit -m "feat: 2026-04-14 run — add Basis and Ralio to pipeline (45 startups)"
git push origin main
echo "Done! pipeline.html pushed to GitHub Pages."
