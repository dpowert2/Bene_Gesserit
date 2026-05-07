/**
 * Single-user auth.
 *
 * The password lives in BG_PASSWORD. The session cookie holds a signed token;
 * the signing key is derived from BG_PASSWORD itself, so rotating the
 * password invalidates all outstanding cookies (a useful side-effect).
 *
 * No external auth provider needed. For multi-user, swap this file for Clerk
 * or NextAuth — the touch points are middleware.ts, app/login, and app/api/login.
 */

const COOKIE_NAME = "bg_session";
const COOKIE_MAX_AGE_S = 60 * 60 * 24 * 30; // 30 days

const enc = new TextEncoder();

function getPassword(): string {
  const p = process.env.BG_PASSWORD;
  if (!p) throw new Error("BG_PASSWORD is required");
  return p;
}

async function hmac(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return base64url(new Uint8Array(signature));
}

function base64url(bytes: Uint8Array): string {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** Build a signed token from a payload. Returned as `payload.signature`. */
export async function sign(payload: string): Promise<string> {
  const sig = await hmac(payload, getPassword());
  return `${payload}.${sig}`;
}

/** Constant-time string compare. */
function timingSafeEq(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Verify a signed token. Returns true if signature is valid. */
export async function verify(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const dot = token.lastIndexOf(".");
  if (dot < 0) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = await hmac(payload, getPassword());
  return timingSafeEq(sig, expected);
}

/** Issue a fresh session token (called after correct password entry). */
export async function issueSession(): Promise<string> {
  const issued = Date.now().toString(36);
  return sign(`s.${issued}`);
}

export const SESSION_COOKIE = {
  name: COOKIE_NAME,
  maxAge: COOKIE_MAX_AGE_S,
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};
