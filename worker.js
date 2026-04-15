/**
 * Bene Gesserit — Auth Gateway Worker
 *
 * Cloudflare Worker that gates all BG pages behind server-side
 * password authentication, then proxies to GitHub Pages.
 *
 * Routes:
 *   GET  /login       → login page (public)
 *   POST /login       → validate password server-side, set HttpOnly cookie
 *   GET  /logout      → clear session cookie, redirect to /login
 *   GET  /votes       → proxy vote reads to GitHub (legacy, authenticated)
 *   PUT  /votes       → proxy vote writes to GitHub (legacy, authenticated)
 *   GET  /*           → proxy to GitHub Pages (authenticated)
 *
 * Secrets (set via `wrangler secret put`):
 *   GITHUB_TOKEN      → fine-grained PAT, Contents:write on this repo
 *   AUTH_SECRET        → random string for HMAC session signing (min 32 chars)
 */

const REPO          = 'dpowert2/Bene_Gesserit';
const VOTES_PATH    = 'learning/votes.json';
const BRANCH        = 'main';
const GITHUB_PAGES  = 'https://dpowert2.github.io/Bene_Gesserit';
const PASSWORD_HASH = '083f2a24d6014289d15b37930cb382d9703a5c9829460ddc7a2f9637c669c684';
const COOKIE_NAME   = 'bg_session';
const SESSION_DAYS  = 7;

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/* ================================================================
   Main entry
   ================================================================ */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    /* CORS preflight */
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS });
    }

    /* ── Public routes (no auth) ─────────────────────────────── */
    if (url.pathname === '/login') {
      if (request.method === 'POST') return handleLogin(request, env);
      return serveLoginPage();
    }

    if (url.pathname === '/logout') {
      return new Response(null, {
        status: 302,
        headers: {
          'Set-Cookie': `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Strict`,
          Location: '/login',
        },
      });
    }

    /* ── Auth check ──────────────────────────────────────────── */
    const authed = await validateSession(request, env);
    if (!authed) {
      /* API callers get 401 JSON; browsers get redirected */
      const accept = request.headers.get('Accept') || '';
      if (accept.includes('application/json')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { ...CORS, 'Content-Type': 'application/json' },
        });
      }
      return new Response(null, { status: 302, headers: { Location: '/login' } });
    }

    /* ── Votes API (legacy — authenticated) ──────────────────── */
    if (url.pathname === '/votes') {
      if (request.method === 'GET') return handleGetVotes(env);
      if (request.method === 'PUT') return handlePutVotes(request, env);
    }

    /* ── Proxy to GitHub Pages (authenticated) ───────────────── */
    return proxyToGitHubPages(url);
  },
};

/* ================================================================
   Authentication
   ================================================================ */

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function getSigningKey(env) {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(env.AUTH_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
}

async function hmacSign(key, data) {
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function createSessionToken(env) {
  const expiry = Math.floor(Date.now() / 1000) + SESSION_DAYS * 86400;
  const key = await getSigningKey(env);
  const sig = await hmacSign(key, String(expiry));
  return `${expiry}.${sig}`;
}

function parseCookie(cookieHeader, name) {
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

async function validateSession(request, env) {
  const token = parseCookie(request.headers.get('Cookie') || '', COOKIE_NAME);
  if (!token) return false;

  const dot = token.indexOf('.');
  if (dot === -1) return false;

  const expiry = token.slice(0, dot);
  const sig    = token.slice(dot + 1);
  if (Number(expiry) < Math.floor(Date.now() / 1000)) return false;

  const key      = await getSigningKey(env);
  const expected = await hmacSign(key, expiry);

  /* Constant-time compare */
  if (sig.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) {
    diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

async function handleLogin(request, env) {
  let password;
  const ct = request.headers.get('Content-Type') || '';
  if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
    const form = await request.formData();
    password = form.get('password');
  } else {
    const body = await request.json().catch(() => ({}));
    password = body.password;
  }

  if (!password) return serveLoginPage('Please enter a password.');

  const hash = await sha256(password);
  if (hash !== PASSWORD_HASH) return serveLoginPage('Incorrect password.');

  const token = await createSessionToken(env);
  const headers = new Headers();
  headers.append('Set-Cookie', `${COOKIE_NAME}=${token}; Path=/; Max-Age=${SESSION_DAYS * 86400}; HttpOnly; Secure; SameSite=Strict`);
  headers.append('Set-Cookie', `bg_voter=Dave; Path=/; Max-Age=${365 * 86400}; Secure; SameSite=Lax`);
  headers.set('Location', '/');
  return new Response(null, { status: 302, headers });
}

/* ================================================================
   Login page
   ================================================================ */

function serveLoginPage(error = '') {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bene Gesserit</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #0a0a0a;
      color: #e0e0e0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .login-box {
      background: #161616;
      border: 1px solid #2a2a2a;
      border-radius: 12px;
      padding: 48px 40px;
      width: 100%;
      max-width: 380px;
      text-align: center;
    }
    .login-box h1 {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 6px;
      color: #fff;
    }
    .login-box .sub {
      font-size: 0.82rem;
      color: #777;
      margin-bottom: 32px;
    }
    .login-box input[type="password"] {
      width: 100%;
      padding: 12px 16px;
      background: #0a0a0a;
      border: 1px solid #333;
      border-radius: 8px;
      color: #fff;
      font-size: 0.95rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
    }
    .login-box input[type="password"]:focus { border-color: #c9a227; }
    .login-box button {
      width: 100%;
      padding: 12px;
      margin-top: 16px;
      background: #c9a227;
      color: #0a0a0a;
      border: none;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.2s;
    }
    .login-box button:hover { background: #d4af37; }
    .error { color: #e74c3c; font-size: 0.82rem; margin-top: 14px; }
  </style>
</head>
<body>
  <form class="login-box" method="POST" action="/login">
    <h1>Bene Gesserit</h1>
    <p class="sub">Startup Intelligence Pipeline</p>
    <input type="password" name="password" placeholder="Password" autofocus required>
    <button type="submit">Enter</button>
    ${error ? '<p class="error">' + error + '</p>' : ''}
  </form>
</body>
</html>`;
  return new Response(html, {
    status: error ? 401 : 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

/* ================================================================
   GitHub Pages proxy
   ================================================================ */

async function proxyToGitHubPages(url) {
  let path = url.pathname;
  if (path === '/' || path === '') path = '/index.html';

  const ghUrl  = `${GITHUB_PAGES}${path}${url.search}`;
  const resp   = await fetch(ghUrl, {
    headers: { 'User-Agent': 'bg-auth-worker' },
    redirect: 'follow',
  });

  /* If 404 and no file extension, try appending .html */
  if (resp.status === 404 && !path.match(/\.[a-z0-9]+$/i)) {
    const retry = await fetch(`${GITHUB_PAGES}${path}.html${url.search}`, {
      headers: { 'User-Agent': 'bg-auth-worker' },
      redirect: 'follow',
    });
    if (retry.ok) return proxyResponse(retry);
  }

  return proxyResponse(resp);
}

function proxyResponse(resp) {
  const headers = new Headers(resp.headers);
  headers.delete('x-frame-options');
  /* Prevent caching of gated content in shared caches */
  headers.set('Cache-Control', 'private, no-store');
  return new Response(resp.body, { status: resp.status, headers });
}

/* ================================================================
   Legacy votes API (Cloudflare → GitHub)
   ================================================================ */

const respond = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });

async function handleGetVotes(env) {
  try {
    const file  = await ghGet(env, VOTES_PATH);
    const votes = parseVotes(file.content);
    return respond({ sha: file.sha, votes });
  } catch (e) {
    return respond({ error: e.message }, 502);
  }
}

async function handlePutVotes(request, env) {
  let body;
  try { body = await request.json(); } catch { return respond({ error: 'Invalid JSON' }, 400); }

  const { slug, stars, note, voter, followup, archived } = body;
  if (!slug) return respond({ error: 'slug is required' }, 400);

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

      if (put.status === 409 && attempt === 0) continue;

      const err = await put.json();
      return respond({ error: err }, put.status);
    } catch (e) {
      return respond({ error: e.message }, 500);
    }
  }
}

/* ── GitHub helpers ──────────────────────────────────────────── */

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
