/**
 * Schema for a generated BG card.
 * Mirrors the columns in `startups` table — what the agent fills in.
 */

import { z } from "zod";

export const CardSchema = z.object({
  /** Stable identifier — slug-cased company name. */
  slug: z.string().min(1).max(80).regex(/^[a-z0-9-]+$/),

  name: z.string().min(1).max(120),
  url: z.string().url(),

  /** One-sentence summary of what the company does. */
  oneliner: z.string().min(20).max(800),

  /**
   * Which gap category this card falls into. Must be one of the strings
   * in config.gap_categories. The agent chooses the closest fit; "Unclassified"
   * is acceptable for genuinely ambiguous cards.
   */
  gap: z.string().nullable(),

  /** Free-form funding stage label, e.g. "Seed (€4M)" or "YC W26 / Pre-Seed". */
  stageLabel: z.string().nullable(),

  /** Free-form geography string, e.g. "London, UK" or "Tel Aviv, Israel / USA". */
  geo: z.string().nullable(),

  /** Vertical-relevance signal — why this matters in your domain. */
  verticalSignal: z.string().nullable(),

  /** Founders + notable backers + relevant background. */
  team: z.string().nullable(),

  /** Per-card thesis-fit narrative. */
  thesisFit: z.string().nullable(),

  /** Sources backing the above. */
  evidence: z.array(z.tuple([z.string(), z.string().url()])).default([]),

  /** Score 0-100. The agent computes this from bars + soft factors. */
  score: z.number().int().min(0).max(100),

  /** Per-dimension score breakdowns. [actual, max] */
  bars: z.object({
    gap: z.tuple([z.number(), z.number()]),
    finserv: z.tuple([z.number(), z.number()]),
    stage: z.tuple([z.number(), z.number()]),
    team: z.tuple([z.number(), z.number()]),
  }),
});

export type Card = z.infer<typeof CardSchema>;

export interface ConfigSnapshot {
  thesis: string;
  searchTerms: string;
  scoringWeights: ScoringWeights;
  verticalSignalLabel: string;
  gapCategories: string[];
}

export interface ScoringWeights {
  base: {
    gap_fit: { max: number; description: string };
    vertical_signal: { max: number; description: string };
    stage_match: { max: number; description: string };
    team_signal: { max: number; description: string };
  };
  soft_factors: Array<{
    id: string;
    label: string;
    delta: number;
    description: string;
  }>;
}
