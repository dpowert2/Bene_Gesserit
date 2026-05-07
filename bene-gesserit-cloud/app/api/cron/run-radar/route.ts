import { NextResponse } from "next/server";
import { runRadar } from "@/agents/run-radar";

export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Scheduled radar run. Wired in vercel.json.
 *
 * Default cadence: every 2 days at 06:00 UTC. Adjust in vercel.json.
 *
 * Auth: middleware checks for Vercel-injected Authorization header.
 */
export async function GET() {
  const result = await runRadar();
  return NextResponse.json(result);
}

/**
 * On-demand radar trigger from /settings (or anywhere that wants to kick a run).
 * Same handler — POST is just a convenience for forms / fetch calls that prefer it.
 */
export async function POST() {
  const result = await runRadar();
  return NextResponse.json(result);
}
