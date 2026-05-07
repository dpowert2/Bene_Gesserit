"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const r = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (r.ok) {
      router.push(next);
      router.refresh();
    } else {
      setError("Wrong password.");
      setPassword("");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-sm bg-canvas border border-line rounded-2xl p-8 shadow-sm"
    >
      <h1 className="text-serif text-3xl text-ink-heading tracking-tight mb-1">
        Bene Gesserit
      </h1>
      <p className="text-sm text-ink-muted mb-6">Enter your password to continue.</p>
      <input
        type="password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-3 border border-line-strong rounded-lg bg-sand text-mono text-sm focus:outline-none focus:border-brown focus:bg-canvas"
      />
      {error && <p className="text-coral text-sm mt-2 text-mono">{error}</p>}
      <button
        type="submit"
        disabled={loading || !password}
        className="w-full mt-4 bg-ink-heading text-white py-3 rounded-pill text-mono text-xs uppercase tracking-wider hover:bg-brown disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <Suspense fallback={null}>
        <LoginInner />
      </Suspense>
    </div>
  );
}
