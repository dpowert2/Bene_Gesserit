import Anthropic from "@anthropic-ai/sdk";

let _client: Anthropic | null = null;

/**
 * Shared Anthropic SDK client. Constructed lazily so build-time imports don't
 * fail when ANTHROPIC_API_KEY is unset.
 */
export function claude(): Anthropic {
  if (_client) return _client;
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY is required");
  _client = new Anthropic({ apiKey: key });
  return _client;
}

/**
 * Default model for agent calls. Override per-agent if needed.
 * Refresh as new Claude versions ship — single point of truth.
 */
export const MODEL = process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-6";

/** Standard tool config used by all research agents. */
export const TOOLS = {
  webSearch: {
    type: "web_search_20250305" as const,
    name: "web_search" as const,
    max_uses: 8,
  },
};
