# OnPoint — Website Design Specification

**Client:** OnPoint Geomatics
**What they do:** Precision land surveying & geomatics. Trimble total station fieldwork: point stakeout from project plans, floor-flatness analysis before concrete pours (FF/FL heatmaps), as-built verification, and deliverable reports.
**Audience:** Contractors, construction project managers, engineers, architects.
**The page's single job:** Make a contractor think "these people measure things to the millimeter — I can trust them with my slab" and request a quote.

---

## 1. Design Thesis

> **"Everything in this business is a point with coordinates. So the whole site is built like a survey: points, crosshairs, grids, and elevation data."**

The visual language is borrowed directly from the instruments and deliverables of the trade — total-station crosshairs, stakeout points, control grids, and flatness heatmaps — not from generic "construction" tropes (no hard hats, no stock photos of guys in hi-vis vests squinting at the horizon).

**Design-language reference (as requested):** the calm, confident product-engineering style of **Linear.app / Vercel / Arc** — generous whitespace, one strong accent color, big confident type, rounded geometry, restrained motion — but warmed up and grounded with surveying iconography instead of abstract SaaS glows. No gradients anywhere. Flat color, crisp lines, soft radii.

---

## 2. Design Tokens

### 2.1 Color — "Stakeout"

Flat colors only. No gradients, no glassmorphism, no glows.

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#101418` | Near-black. Primary text, dark sections, footer. |
| `--paper` | `#FAFAF7` | Warm off-white page background (not pure white — feels like plotter paper). |
| `--survey-yellow` | `#FFC91F` | THE accent. Stakeout-flag yellow. Buttons, markers, highlights, crosshair. Used sparingly but loudly. |
| `--signal-orange` | `#FF6B2C` | Secondary accent. Hover states, heatmap "high" end, small labels. Never side-by-side with yellow in the same element. |
| `--grid-line` | `#E4E2DA` | 1px grid/divider lines, card borders. |
| `--slate` | `#5C6470` | Secondary/body-muted text. |

**Rule:** yellow is for *action and precision* (CTAs, the active point, the crosshair). Orange is for *data and heat* (heatmap legends, hover, badges). The page is 90% ink-on-paper; the accents earn their impact through scarcity.

### 2.2 Typography

| Role | Face | Why |
|---|---|---|
| Display / headlines | **Space Grotesk** (700/500) | Geometric but quirky; its slightly technical character echoes instrument lettering without being a cliché monospace headline. Tight tracking (`-0.03em`) at large sizes. |
| Body | **Inter** (400/500) | Invisible, highly legible workhorse. |
| Data / coordinates / labels | **IBM Plex Mono** (400/500) | Coordinates, eyebrows, stats, FF/FL numbers. This is where the surveying soul lives — every number on the site is set in mono, like a data collector readout. |

**Type scale (desktop):** hero `clamp(3rem, 7vw, 5.5rem)`; section titles `2.5rem`; body `1.0625rem / 1.7`; mono labels `0.8125rem`, uppercase, `letter-spacing: 0.08em`.

### 2.3 Geometry & Surface

- **Radii:** cards `20px`, buttons `999px` (full pill), small chips `8px`. Modern, soft, friendly — per brief.
- **Borders over shadows:** default card = `1px solid var(--grid-line)` on `--paper`. Shadows only on hover, and subtle: `0 8px 24px rgb(16 20 24 / 0.07)`.
- **The grid is visible.** Sections sit on a faint background grid (1px `--grid-line` lines every 80px, CSS `background-image: linear-gradient` trick — flat lines, not a gradient effect). This is the survey-control-grid motif and the quiet backbone of the whole identity.
- **Spacing:** 8px base unit. Section padding `clamp(80px, 12vh, 140px)`. Max content width `1200px`.

### 2.4 Signature Element — the **Live Crosshair**

The one thing visitors remember:

A total-station **reticle (crosshair)** that follows the cursor inside the hero, set over a field of small survey points (+ marks). When the crosshair passes near a point, that point "locks": it snaps to yellow, scales up slightly, and a small mono tooltip appears with fake-but-plausible data, e.g. `PT-114 · N 52.371 · E 4.895 · Δ 2 mm`. On mobile/`prefers-reduced-motion`: the crosshair sits statically locked on one highlighted point.

This single interaction *demonstrates* the business (find the point, hit it exactly) instead of describing it. Spend the motion budget here; everything else stays quiet.

---

## 3. Page Structure & Wireframes

Single landing page, 7 sections. Uncluttered: each section makes exactly one claim.

### 3.1 Navigation
Floating pill nav (sticky, `backdrop-filter: blur`, ink text on translucent paper, full-radius). Left: logotype `OnPoint` — the "O" is drawn as a crosshair circle with four tick marks, doubling as the logo mark. Right: `Services · Flatness · Process · Reports` + a yellow pill CTA **"Get a quote"**.

```
┌──────────────────────────────────────────────────────┐
│ ⊕ OnPoint     Services  Flatness  Process  Reports  [Get a quote] │
└──────────────────────────────────────────────────────┘
```

### 3.2 Hero — communicative & impressive
Full viewport. Paper background + faint grid + scattered `+` survey points + the Live Crosshair.

```
┌────────────────────────────────────────────────────────┐
│  +        +              +                 +            │
│      MM ACCURACY · TRIMBLE EQUIPPED · ON SITE  (mono eyebrow)
│                                                          │
│      Every project starts                                │
│      with a point. (word "point." underlined w/ yellow stroke
│                     that draws itself on load)           │
│                                                          │
│      Precision surveying & geomatics for construction.   │
│      Stakeout, floor flatness, as-builts — measured      │
│      once, measured right.                               │
│                                                          │
│      [● Get a quote]   [View a sample report ↗]          │
│            +            ⊕ (crosshair follows cursor)     │
│  +              +                    +          +        │
│  ───────────────────────────────────────────────────    │
│  PT 4,200+ points set · ±2 mm tolerance · 150+ pours    │ ← mono stat strip
└────────────────────────────────────────────────────────┘
```

Headline copy: **"Every project starts with a point."** Sub: one sentence, plain, names the three services. No carousel, no video, no clutter.

### 3.3 Services — three cards
Eyebrow: `WHAT WE MEASURE` (mono). Three equal cards, 20px radius, grid-line borders, icon drawn in the house line style (1.5px strokes, ink, one yellow detail each):

1. **Point stakeout** — "From plan to ground. We set your design coordinates on site with a Trimble total station — gridlines, anchors, columns, penetrations."
2. **Floor flatness & levelness** — "FF/FL surveys before and after the pour. Know exactly where the slab is high or low — before it costs you."
3. **As-builts & verification** — "Independent checks of what was actually built versus what was drawn, with a clear report for the record."

Hover: border turns ink, card lifts 4px, icon's yellow detail pulses once. No other animation.

### 3.4 Flatness Showcase — the data section (dark)
This is the proof section and the visual centerpiece after the hero. Background flips to `--ink` (the section change itself creates rhythm — and a gentle parallax: the grid background scrolls at 0.5× speed behind the content, the only parallax on the page, per "nice to have / not cluttered").

Left: copy. Right: a **stylized floor-flatness heatmap** built as an inline SVG/CSS grid of flat-colored cells (steps from deep blue `#1B3A5C` → slate → `--signal-orange` for highs — discrete flat steps, not a gradient), with mono axis labels and a legend reading `Δ ELEVATION (mm)  −8 ─ 0 ─ +8`. One cell is marked with the yellow crosshair and a callout: `HIGH SPOT · +6 mm · GRID C4`.

```
┌──────────────── ink background ────────────────────┐
│  FLOOR FLATNESS (mono, orange)    ┌──────────────┐ │
│  See the slab before              │ ▦▦▦▦▦▦▦▦▦▦  │ │
│  you see the problem.             │ ▦▦▦▦⊕▦▦▦▦▦  │ │  ← heatmap
│                                   │ ▦▦▦▦▦▦▦▦▦▦  │ │
│  We turn thousands of points      │  legend ───   │ │
│  into one honest picture…         └──────────────┘ │
│  [How flatness surveys work →]                      │
└─────────────────────────────────────────────────────┘
```

### 3.5 Process — four steps
Back to paper. Here numbering is *earned* — surveying genuinely is sequential. Horizontal timeline drawn as a leveling line with four yellow point markers:

`01 SETUP & CONTROL → 02 MEASURE → 03 ANALYZE → 04 REPORT`

Each step: mono number, short title, one sentence. Scroll-triggered: the connecting line draws left-to-right once, points pop in sequence (respects `prefers-reduced-motion`).

### 3.6 Reports — the deliverable
Split section. Left: a clean mockup of a report page (pure HTML/CSS — a white card with a mini heatmap, a mono data table of point deviations, a pass/fail chip). Right: copy — "You don't get a pile of numbers. You get a decision-ready report: heatmaps, deviation tables, and a clear pass/fail against your spec." CTA: ghost button "Download a sample report".

### 3.7 Final CTA + Footer
Ink band, big Space Grotesk line: **"Ready when you break ground."** Yellow pill CTA + phone/email in mono. Footer: minimal — logo crosshair, nav repeat, location, `© 2026 OnPoint Geomatics`. A single yellow `+` sits in the footer's bottom-right corner: the last point on the page.

---

## 4. Motion Budget (deliberate & minimal)

| Where | What | Notes |
|---|---|---|
| Hero | Live Crosshair + point lock-on | The signature. Cursor-follow with slight easing lag (like a servo motor catching up). |
| Hero load | Yellow underline draws under "point."; stats fade up | 600ms total, once. |
| Flatness section | Background grid parallax at 0.5× | The only parallax. Subtle. |
| Process | Line draw + sequential point pop on scroll | Once, IntersectionObserver. |
| Cards/buttons | Hover lift + border color | 150ms ease. |

Everything respects `prefers-reduced-motion: reduce` (static crosshair, no parallax, no draws).

## 5. Quality Floor

- Fully responsive: hero stacks at `<900px`, heatmap goes above copy on mobile, nav collapses to logo + CTA + menu.
- Visible keyboard focus: 2px yellow outline, 2px offset.
- Contrast: all text ≥ WCAG AA (yellow is never used for body text — only fills behind ink text, or decorative strokes).
- Semantic HTML, single `h1`, system fallback fonts.
- No stock photography anywhere. All visuals are drawn (SVG/CSS): crosshairs, grids, heatmap, report mockup. This keeps it fast, sharp, and impossible to mistake for a template.

## 6. Anti-Generic Checklist (what we deliberately avoided)

- ❌ Gradients, glows, glassmorphism hero blobs
- ❌ Stock photos of surveyors / hard hats / drone shots
- ❌ "Trusted by 500+ companies" logo wall
- ❌ Three-icons-with-circles generic services row (ours carry the house line style + data motifs)
- ✅ Instead: the site itself behaves like a survey instrument.
