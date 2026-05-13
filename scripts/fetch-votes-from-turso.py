#!/usr/bin/env python3
"""
Fetch live votes from Turso bg_votes table and write learning/votes.json.

Run at the start of every full-cycle scheduled task so the preference model
reads from the live vote stream rather than a stale cache. Closes the gap
that left the preference model frozen at 8 March votes while Dave was
actively voting in the BG portal.

The Turso bearer token is the same one embedded in the public BG HTML pages
(the portal client writes votes from the browser). It is a public-by-design
read/write token for the bg_votes table — not a secret.

Usage:
  python3 scripts/fetch-votes-from-turso.py
  # writes learning/votes.json with the live state
"""

import json
import os
import sys
import urllib.request

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_PATH = os.path.join(REPO_ROOT, "learning", "votes.json")

TURSO_URL = "https://bg-votes-dpowert2.aws-eu-west-1.turso.io"
# Public read/write token (already embedded in published HTML; not a secret)
TURSO_TOKEN = (
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9."
    "eyJhIjoicnciLCJpYXQiOjE3Nzc0NTg4MTIsImlkIjoiMDE5ZGQ4Y2MtMDgwMS03MTQ3LTk5YjQtYWQxNDhhNzA5NmUyIiwicmlkIjoiN2RjYzZjYzItOTkyOS00MDU5LWI5YjQtNGE0MzlkZTVhNWY3In0."
    "PcZ5Qaz19H8nTZj7ZS5YapV4WoqxK5NiwSkEU1m1pGUNqBva_DT1Lij3JlrhhDJ130GfFIoSo4adcM8O2VjYAQ"
)


def turso_exec(sql, args=None):
    body = json.dumps({
        "requests": [
            {"type": "execute", "stmt": {"sql": sql, "args": args or []}},
            {"type": "close"},
        ]
    }).encode("utf-8")
    req = urllib.request.Request(
        f"{TURSO_URL}/v2/pipeline",
        data=body,
        headers={
            "Authorization": f"Bearer {TURSO_TOKEN}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        return json.loads(resp.read().decode("utf-8"))


def parse_rows(data):
    """Turso /v2/pipeline returns rows as arrays of typed values; convert to dicts."""
    out = []
    try:
        result = data["results"][0]["response"]["result"]
    except (KeyError, IndexError):
        return out
    cols = [c["name"] for c in result["cols"]]
    for row in result.get("rows", []):
        d = {}
        for c, v in zip(cols, row):
            # v is {"type":"text"|"integer"|"null","value":"..."}
            if v["type"] == "null":
                d[c] = None
            elif v["type"] == "integer":
                d[c] = int(v["value"])
            else:
                d[c] = v["value"]
        out.append(d)
    return out


def main():
    print(f"Fetching live votes from Turso ({TURSO_URL})...", file=sys.stderr)
    data = turso_exec("SELECT * FROM bg_votes")
    rows = parse_rows(data)
    print(f"Got {len(rows)} rows.", file=sys.stderr)

    # Convert to the legacy votes.json schema (slug-keyed dict),
    # but include the richer fields too — followup / archived / kanban_stage
    # so downstream consumers (preferences re-aggregation, etc.) can use them.
    votes = {}
    for r in rows:
        slug = r.get("slug")
        if not slug:
            continue
        entry = {
            "stars": int(r.get("stars") or 0),
            "note": r.get("note") or "",
            "voter": r.get("voter") or "anonymous",
            "voted_at": r.get("voted_at") or "",
        }
        # Optional fields — only include if present (and truthy for booleans)
        if r.get("followup") in (1, "1", True):
            entry["followup"] = True
        if r.get("archived") in (1, "1", True):
            entry["archived"] = True
        if r.get("kanban_stage"):
            entry["kanban_stage"] = r["kanban_stage"]
        votes[slug] = entry

    # Sort by voted_at desc to make the file scannable for humans
    sorted_votes = dict(sorted(
        votes.items(),
        key=lambda kv: kv[1].get("voted_at", ""),
        reverse=True,
    ))

    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w") as f:
        json.dump(sorted_votes, f, indent=2)
        f.write("\n")
    print(f"Wrote {len(sorted_votes)} votes to {OUT_PATH}", file=sys.stderr)

    # Quick stats
    stars = [v["stars"] for v in sorted_votes.values() if v["stars"]]
    fives = sum(1 for s in stars if s == 5)
    fours = sum(1 for s in stars if s == 4)
    threes = sum(1 for s in stars if s == 3)
    twos = sum(1 for s in stars if s == 2)
    ones = sum(1 for s in stars if s == 1)
    notes = sum(1 for v in sorted_votes.values() if v.get("note", "").strip())
    followups = sum(1 for v in sorted_votes.values() if v.get("followup"))
    archives = sum(1 for v in sorted_votes.values() if v.get("archived"))
    print(f"  ★★★★★ {fives}  ★★★★ {fours}  ★★★ {threes}  ★★ {twos}  ★ {ones}", file=sys.stderr)
    print(f"  notes: {notes}  follow-ups: {followups}  archived: {archives}", file=sys.stderr)

    # ────────────────────────────────────────────────────────────────────
    # Funnel snapshot — write the current pipeline state into search-state.json
    # so the Radar page can show historical evolution AND the per-cycle deltas
    # are part of the persistent memory, not just live fetches.
    # ────────────────────────────────────────────────────────────────────
    import re
    from datetime import datetime
    state_path = os.path.join(REPO_ROOT, "config", "search-state.json")
    sd_path = os.path.join(REPO_ROOT, "startups-data.js")

    # Count current pipeline cards
    try:
        with open(sd_path) as f:
            sd_text = f.read()
        live_pipeline = len(re.findall(r'slug: "([^"]+)"', sd_text))
    except Exception:
        live_pipeline = 0

    # Kanban stages
    def ks(stage):
        return sum(1 for v in sorted_votes.values() if v.get("kanban_stage") == stage)

    funnel_snapshot = {
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "live_pipeline": live_pipeline,
        "voted": sum(1 for v in sorted_votes.values() if v.get("stars", 0) > 0),
        "stars": {"5": fives, "4": fours, "3": threes, "2": twos, "1": ones},
        "with_notes": notes,
        "follow_up_flagged": followups,
        "archived_by_user": archives,
        "kanban": {
            "followup": ks("followup"),
            "contacted": ks("contacted"),
            "talked_to": ks("talked_to"),
            "accepted": ks("accepted"),
            "rejected": ks("rejected"),
        },
        "meeting_arranged_or_outreach": followups + ks("contacted") + ks("talked_to"),
    }

    # Merge into search-state.json under "funnel_history" array (append-only)
    try:
        with open(state_path) as f:
            state = json.load(f)
    except Exception:
        state = {}

    history = state.setdefault("funnel_history", [])
    history.append(funnel_snapshot)
    # Keep last 30 snapshots; older snapshots compress into the changelog
    state["funnel_history"] = history[-30:]
    state["latest_funnel"] = funnel_snapshot
    state["_last_updated"] = datetime.utcnow().date().isoformat()

    with open(state_path, "w") as f:
        json.dump(state, f, indent=2)
        f.write("\n")
    print(f"Wrote funnel snapshot to {state_path}", file=sys.stderr)
    print(f"  live_pipeline: {live_pipeline}  voted: {funnel_snapshot['voted']}  outreach: {funnel_snapshot['meeting_arranged_or_outreach']}  accepted: {funnel_snapshot['kanban']['accepted']}", file=sys.stderr)


if __name__ == "__main__":
    main()
