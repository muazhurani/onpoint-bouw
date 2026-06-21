/**
 * Flatness heatmap data. Discrete flat color steps (deep blue → slate → signal
 * orange) — stepped cells, never a gradient. Values are deterministic so server
 * render is stable.
 */

export const HEAT_STEPS = [
  "#1b3a5c", // −8 mm
  "#28567c",
  "#3f729a",
  "#6e94ac",
  "#a3a08b",
  "#d88e5a",
  "#ff6b2c", // +8 mm
];

/** Map an elevation delta in mm (−8…+8) to a discrete palette index. */
export function heatIndex(v: number): number {
  const i = Math.round(((v + 8) / 16) * (HEAT_STEPS.length - 1));
  return Math.min(HEAT_STEPS.length - 1, Math.max(0, i));
}

/**
 * Plausible slab surface: two low-frequency waves plus one pronounced high
 * spot at grid C4 (col index 2, row index 3) — the cell the callout flags.
 */
export function slabValue(row: number, col: number): number {
  const base =
    Math.sin(row * 0.8 + col * 0.32) * 2.6 +
    Math.sin(col * 0.55 - row * 0.45 + 1.2) * 2.2;
  const bump = 8 * Math.exp(-((row - 3) ** 2 + (col - 2) ** 2) / 1.6);
  return base + bump;
}
