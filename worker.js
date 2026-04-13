/**
 * Bene Gesserit — Votes Worker
 *
 * Cloudflare Worker that proxies vote reads/writes to GitHub so the
 * GitHub token never lives in the browser.
 *
 * Routes:
 *   GET  /votes          → return current votes.json + current SHA
 *   PUT  /votes          → update one startup vote and commit to repo
 *
 * Secrets (set via Cloudflare dashboard or `wrangler secret put`):
 *   GITHUB_TOKEN         → fine-grained PAT, Contents:write on this repo
 */

const REPO       = 'dpowert2/Bene_Gesserit';
const VOTES_PATH = 'learning/votes.json';
const BRANCH     = 'main';

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {

    /* Pre-flight */
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    const url     = new URL(request.url);
    const respond = (body, status = 200) =>
      new Response(JSON.stringify(body), {
        status,
        headers: { ...CORS, 'Content-Type': 'application/json' },
      });

    /* ── GET /votes ──────────────────────────────────────────────── */
    if (request.method === 'GET' && url.pathname === '/votes') {
      try {
        const file  = await ghGet(env, VOTES_PATH);
        const votes = parseVotes(file.content);
        return respond({ sha: file.sha, votes });
      } catch (e) {
        return respond({ error: e.message }, 502);
      }
    }

    /* ── PUT /votes ──────────────────────────────────────────────── */
    if (request.method === 'PUT' && url.pathname === '/votes') {
      let body;
      try { body = await request.json(); } catch { return respond({ error: 'Invalid JSON' }, 400); }

      const { slug, stars, note, voter, followup, archived } = body;
      if (!slug) return respond({ error: 'slug is required' }, 400);

      /* Retry once on SHA conflict (two people voting simultaneously) */
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const file  = await ghGet(env, VOTES_PATH);
          const votes = parseVotes(file.content);

          votes[slug] = {
            stars:    stars    ?? votes[slug]?.stars    ?? 0,
            note:     note     ?? votes[slug]?.note     ?? '',
            voter:    voter    ?? votes[slug]?.voter    ?? 'anonymous',
            followup: followup ?? votes[slug]?.followup ?? false,
            archived: archived ?? votes[slug]?.archived ?? false,
            voted_at: new Date().toISOString(),
          };

          const put = await ghPut(
            env, VOTES_PATH, votes, file.sha,
            `vote: ${slug} (${voter ?? 'anon'})`
          );

          if (put.ok) {
            const data = await put.json();
            return respond({ sha: data.content.sha, votes });
          }

          /* 409 = SHA conflict → retry with fresh SHA */
          if (put.status === 409 && attempt === 0) continue;

          const err = await put.json();
          return respond({ error: err }, put.status);

        } catch (e) {
          return respond({ error: e.message }, 500);
        }
      }
    }

    return new Response('Not found', { status: 404, headers: CORS });
  },
};

/* ── GitHub helpers ──────────────────────────────────────────────── */

async function ghGet(env, path) {
  const r = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    {
      headers: {
        Authorization:  `token ${env.GITHUB_TOKEN}`,
        Accept:         'application/vnd.github.v3+json',
        'User-Agent':   'bg-votes-worker',
      },
    }
  );
  if (!r.ok) throw new Error(`GitHub GET ${r.status}: ${await r.text()}`);
  return r.json();
}

async function ghPut(env, path, votes, sha, message) {
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(votes, null, 2))));
  return fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization:  `token ${env.GITHUB_TOKEN}`,
        Accept:         'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent':   'bg-votes-worker',
      },
      body: JSON.stringify({ message, content, sha, branch: BRANCH }),
    }
  );
}

function parseVotes(b64) {
  const raw = JSON.parse(atob(b64.replace(/\s/g, '')));
  return Array.isArray(raw) ? {} : raw;
}
