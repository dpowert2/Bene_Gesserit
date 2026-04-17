#!/usr/bin/env python3
"""
Guarded push-to-GitHub for the Bene Gesserit repo.

Same interface as the publish-skill's push_to_github.py, but with a
size-floor guard that refuses to push a file significantly smaller
than its remote version. This exists because multiple past sessions
have pushed core files (pipeline.html, index.html) as 0 bytes after
content truncation, silently breaking the live site.

Defaults:
  --min-size-ratio 0.80   new file must be >= 80% of remote size
  --min-absolute-bytes 1  never push a 0-byte file (catch accidents)
  --allow-shrink          disable both guards (use when the shrink
                          is genuinely intentional — e.g. archiving)

Usage:
  python scripts/push_with_guard.py \\
    --owner dpowert2 --repo Bene_Gesserit --pat <PAT> \\
    --file pipeline.html \\
    --message "feat: add new startup cards"

  # Multiple files, one commit per file:
  python scripts/push_with_guard.py \\
    --owner dpowert2 --repo Bene_Gesserit --pat <PAT> \\
    --file index.html --file pipeline.html \\
    --message "daily run: Apr 18 morning scan"
"""

import argparse
import base64
import json
import os
import sys
import urllib.request
import urllib.error


def api(method, url, token, data=None):
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json",
    }
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read()), resp.status
    except urllib.error.HTTPError as e:
        try:
            err_body = json.loads(e.read())
        except Exception:
            err_body = {}
        return err_body, e.code


def get_remote_file_info(owner, repo, path, token, branch="main"):
    """Return (sha, size_bytes) of the remote file, or (None, None) if absent."""
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}?ref={branch}"
    result, status = api("GET", url, token)
    if status == 200 and isinstance(result, dict):
        return result.get("sha"), result.get("size")
    return None, None


def push_file(owner, repo, path, content_bytes, token, message, branch="main",
              min_size_ratio=0.80, allow_shrink=False, min_absolute_bytes=1):
    """Push one file. Aborts if size-floor guard trips."""
    new_size = len(content_bytes)

    # Absolute floor — never push a 0-byte file by accident.
    if new_size < min_absolute_bytes and not allow_shrink:
        print(f"  REJECTED {path}: new file is {new_size} bytes "
              f"(< {min_absolute_bytes}). This is almost certainly a truncation "
              f"accident. If intentional, pass --allow-shrink.")
        return False

    sha, remote_size = get_remote_file_info(owner, repo, path, token, branch)

    # Relative floor — if file exists and new version is much smaller, abort.
    if sha and remote_size and remote_size > 0 and not allow_shrink:
        ratio = new_size / remote_size
        if ratio < min_size_ratio:
            print(
                f"  REJECTED {path}: new size {new_size} is {ratio:.0%} of "
                f"remote {remote_size} (< {min_size_ratio:.0%} floor). "
                f"This looks like truncated or fabricated content. "
                f"If the shrink is intentional, re-run with --allow-shrink."
            )
            return False

    encoded = base64.b64encode(content_bytes).decode()
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    data = {"message": message, "content": encoded, "branch": branch}
    if sha:
        data["sha"] = sha

    result, status = api("PUT", url, token, data)
    if status in (200, 201):
        action = "Updated" if sha else "Created"
        if remote_size:
            note = f" ({new_size}B, {new_size/remote_size:.0%} of prior)"
        else:
            note = f" ({new_size}B, new)"
        print(f"  {action}: {path}{note}")
        return True
    print(f"  Error pushing {path}: {status} {result.get('message', '')}")
    return False


def main():
    parser = argparse.ArgumentParser(description="Push files with size-floor guard")
    parser.add_argument("--owner", required=True)
    parser.add_argument("--repo", required=True)
    parser.add_argument("--pat", required=True)
    parser.add_argument("--file", action="append", dest="files", required=True,
                        help="Local file to push (repeatable). Repo path is the basename.")
    parser.add_argument("--message", default="update", help="Commit message")
    parser.add_argument("--branch", default="main")
    parser.add_argument("--min-size-ratio", type=float, default=0.80,
                        help="New file must be at least this fraction of remote size (default 0.80)")
    parser.add_argument("--min-absolute-bytes", type=int, default=1,
                        help="Reject files smaller than this many bytes outright (default 1)")
    parser.add_argument("--allow-shrink", action="store_true",
                        help="Disable both size guards. Use only when the shrink is intentional.")
    args = parser.parse_args()

    print(f"Pushing {len(args.files)} file(s) to {args.owner}/{args.repo}...")
    any_fail = False
    for local in args.files:
        repo_path = os.path.basename(local)
        with open(local, "rb") as f:
            content = f.read()
        ok = push_file(
            args.owner, args.repo, repo_path, content, args.pat, args.message,
            branch=args.branch, min_size_ratio=args.min_size_ratio,
            allow_shrink=args.allow_shrink, min_absolute_bytes=args.min_absolute_bytes,
        )
        if not ok:
            any_fail = True

    if any_fail:
        print("\nOne or more pushes rejected or failed. No further action taken.")
        sys.exit(1)
    print(f"\nDone. https://dpowert2.github.io/{args.repo}/")


if __name__ == "__main__":
    main()
