// Single confident accent across the icon-card system instead of cycling
// through all 8 tones — the color no longer needs to communicate anything
// (order, category), so one consistent hue reads as a considered brand
// choice rather than decoration.
export const TONE_CYCLE = ["primary"] as const;

export type Tone = (typeof TONE_CYCLE)[number];

export function toneFor(index: number): Tone {
  return TONE_CYCLE[index % TONE_CYCLE.length];
}
