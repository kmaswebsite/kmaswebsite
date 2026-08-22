// Alternating primary/accent across the icon-card system — mirrors the
// KMAS logo's own two-tone navy + green identity instead of one flat hue.
export const TONE_CYCLE = ["primary", "accent"] as const;

export type Tone = (typeof TONE_CYCLE)[number];

export function toneFor(index: number): Tone {
  return TONE_CYCLE[index % TONE_CYCLE.length];
}
