import { NextRequest, NextResponse } from "next/server";
import { issueSession, SESSION_COOKIE } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { password } = await req.json().catch(() => ({}));

  if (!process.env.BG_PASSWORD) {
    return NextResponse.json(
      { error: "BG_PASSWORD not configured on server" },
      { status: 500 }
    );
  }
  if (typeof password !== "string" || password !== process.env.BG_PASSWORD) {
    // Constant-ish delay to slow down brute force attempts
    await new Promise((r) => setTimeout(r, 600));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = await issueSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set({ ...SESSION_COOKIE, value: token });
  return res;
}
