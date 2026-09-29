# ORA DUBAI — Luxury Real Estate Digital Showroom

A cinematic website for **ORA DUBAI**, a fictional luxury Dubai real-estate brand. A real-time 3D Dubai skyline stays fixed behind the page. Content sections scroll over it on smooth scrolling, driven by scroll-based animation.

> Where Architecture Meets Opportunity.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Database](#database)
6. [Project Structure](#project-structure)
7. [Architecture](#architecture)
8. [The 3D Dubai Scene](#the-3d-dubai-scene)
9. [Animation System](#animation-system)
10. [Page Sections](#page-sections)
11. [API Reference](#api-reference)
12. [Design System](#design-system)
13. [Performance & Responsiveness](#performance--responsiveness)
14. [Customization Guide](#customization-guide)
15. [Scripts](#scripts)
16. [Known Limitations](#known-limitations)
17. [Credits](#credits)

---

## Features

- **Real-time 3D Dubai scene**: a Burj Khalifa–style tiered tower, three districts of skyscrapers with lit windows, a Palm Jumeirah shape, reflective water, a sky shader, fog and floating gold particles.
- **Scroll-driven camera**: the camera follows a 7-point path through the skyline as you scroll.
- **Sunset to night**: the sky, fog, sun, window lights and particles change gradually over the scroll.
- **Smooth scrolling** with Lenis, synced to GSAP ScrollTrigger.
- **Animations**: headlines slide up from behind a mask, blocks fade up, images move with parallax, groups of items appear one after another, and counters count up.
- **3D tilt cards** (Framer Motion springs) with a gold glow that follows the cursor.
- **Investment dashboard** with counters, a line chart that draws itself and bar charts.
- **AI concierge demo**: types out a query, shows a thinking state, then animates recommendations, a location analysis and a score ring. Visitors can also type their own query.
- **Lead capture**: a consultation form that saves enquiries to PostgreSQL through Drizzle ORM.
- **Adaptive quality**: the 3D detail scales down automatically on weaker devices.
- **Responsive** layouts for desktop, tablet and mobile.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | Three.js, React Three Fiber, @react-three/drei |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| Smooth scroll | Lenis |
| Database | PostgreSQL + Drizzle ORM (`pg` driver) |
| Fonts | Inter + Playfair Display (`next/font/google`) |

---

## Getting Started

### Prerequisites

- Node.js 20 or newer
- A running PostgreSQL instance

### Installation

```bash
npm install
```

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
```

Apply the database schema:

```bash
npx drizzle-kit push
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000.

### Production build

```bash
npm run build
npm run start
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string used by `src/db/index.ts` |

The app throws an error at startup if `DATABASE_URL` is missing.

---

## Database

The schema is defined in `src/db/schema.ts`.

### `leads` table

| Column | Type | Notes |
|---|---|---|
| `id` | `serial` | Primary key |
| `name` | `text` | Required |
| `email` | `text` | Required, basic format check |
| `interest` | `text` | Which button opened the form, e.g. `Viewing · Skyline Penthouse` |
| `message` | `text` | Optional |
| `created_at` | `timestamp` | Defaults to `now()` |

To view saved leads:

```bash
psql "$DATABASE_URL" -c "SELECT * FROM leads ORDER BY created_at DESC;"
```

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── health/route.ts      # Health check (DB ping)
│   │   └── leads/route.ts       # POST lead capture
│   ├── globals.css              # Design tokens, glass, gold, utilities
│   ├── layout.tsx               # Fonts + metadata
│   └── page.tsx                 # Page composition
├── components/
│   ├── DubaiScene.tsx           # 3D Dubai scene (R3F)
│   ├── SmoothScroll.tsx         # Lenis + GSAP ScrollTrigger setup
│   ├── scroll-state.ts          # Shared scroll progress read by the 3D scene
│   ├── Nav.tsx                  # Glass navbar + mobile menu
│   ├── Sections.tsx             # Hero, Story, Residences, Why Dubai, CTA, Footer
│   ├── AIConcierge.tsx          # AI concierge demo
│   ├── ui.tsx                   # Logo, TiltCard, consultation modal (context)
│   └── data.ts                  # Images, communities, residences
└── db/
    ├── index.ts                 # Drizzle client
    └── schema.ts                # Tables
```

---

## Architecture

```
┌──────────────────────────────────────────────┐
│ ConsultProvider (modal context)              │
│  └ SmoothScroll (Lenis + ScrollTrigger)      │
│     ├ DubaiScene  (fixed, z-0, no SSR)       │
│     ├ Grain overlay (fixed, z-1)             │
│     ├ Nav (fixed, z-50)                      │
│     └ main (z-10): sections scroll above     │
└──────────────────────────────────────────────┘
```

- **Scroll progress is shared through a plain module object** (`scroll-state.ts`). Lenis writes `progress` (0 to 1) on every scroll event, and the 3D scene reads it inside `useFrame`. React never re-renders on scroll.
- **The 3D scene is loaded with `next/dynamic` and `ssr: false`**, so WebGL never runs on the server. A gradient placeholder shows while it loads.
- **Animations are set up declaratively.** Sections add `data-*` attributes, and `SmoothScroll` finds them and attaches the GSAP animations inside one `gsap.context()`, which is cleaned up on unmount.

---

## The 3D Dubai Scene

All geometry is generated in code. No 3D model files are loaded.

| Element | How it's built |
|---|---|
| Sky | Custom shader on a sphere: three-colour gradient, sun disc and glow, stars that fade in at night |
| Burj Khalifa | 14 tiers of three hexagonal cylinders each, a spire, a blinking red light and a gold point light |
| Towers | Instanced boxes and cylinders in three districts (Downtown, Marina, background band). Heights are taller near each district centre |
| Window lights | A procedural canvas texture used as the emissive map. Its offset changes every 6 seconds so lights appear to switch on and off |
| Beacons | Blinking red points on top of towers taller than 40 units |
| Palm Jumeirah | A trunk, 16 fronds and a crescent-shaped ring, with gold edge lights that fade in at night |
| Water | `MeshReflectorMaterial` on high quality, a metallic standard material on lower quality |
| Particles | Gold points with additive blending that drift upward. How many are drawn grows with scroll progress |
| Fog | `FogExp2`. Its colour and density change from sunset to night |

### Camera path

`CAM_PATH` in `DubaiScene.tsx` lists 7 camera positions, each with a look-at target. Scroll progress maps to a pair of neighbouring points, and the camera blends between them with `smootherstep`. It is then smoothed toward that point every frame, adjusted by the mouse, and pushed forward during the 4.5-second intro.

### Day to night

```ts
nightFactor = smoothstep(scrollProgress, 0.08, 0.6)
```

Every material and light that changes over the scroll reads this one value.

---

## Animation System

Add one of these attributes to any element and `SmoothScroll.tsx` animates it:

| Attribute | Effect |
|---|---|
| `data-reveal` | Fades up and un-blurs when it enters the viewport (optional `data-delay`) |
| `data-mask` | Headline lines (`.mask-line > span`) slide up from behind a mask, one after another |
| `data-parallax` | The image moves vertically as its parent section scrolls past |
| `data-stagger` | Child elements fade up one after another |
| `data-count="14.2"` | Counts up from 0 to the value (optional `data-decimals`) |

Framer Motion handles the hero entrance, the navbar, the modal, the tilt cards, the chart paths and the AI response sequence.

Easing is consistently `expo.out` or `[0.16, 1, 0.3, 1]`, with durations of 1.4 to 2.8 seconds, so motion reads as slow and deliberate.

---

## Page Sections

1. **Hero**: eyebrow, masked headline with the shimmering gold "Opportunity", subtitle, two buttons, coordinates, and the "Discover Dubai" scroll indicator.
2. **Dubai Story**
   - *Scene 1 — The Future Was Built Here*: three stat cards (Architecture, Innovation, Global Destination).
   - *Scene 2 — Iconic Communities*: four tilt cards with location, lifestyle, value and growth bars.
   - *Scene 3 — Your Investment, Visualized*: the live-style dashboard.
3. **Featured Residences**: three alternating large cards with parallax images, a gold border on hover, and viewing and brochure buttons.
4. **Why Dubai**: four large counters over a night photo of Dubai.
5. **AI Property Experience**: the concierge chat demo.
6. **Final CTA**: "Your Dubai Story Begins Here".
7. **Footer**: logo, four link columns, copyright.

---

## API Reference

### `GET /api/health`

Pings the database.

```json
{ "ok": true }
```

### `POST /api/leads`

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "interest": "Viewing · Palm Signature Villa",
  "message": "Interested in beachfront villas."
}
```

Responses:

| Status | Body |
|---|---|
| 200 | `{ "ok": true }` |
| 400 | `{ "ok": false, "error": "Please provide a valid name and email." }` |
| 500 | `{ "ok": false, "error": "Unable to submit right now." }` |

Input is trimmed and length-limited: 200 characters for name and email, 100 for interest, 2,000 for message.

---

## Design System

| Token | Value |
|---|---|
| Background | `#070707` |
| Luxury Black | `#0B0B0D` |
| Gold | `#D4AF37` (`gold`) |
| Light Gold | `#F5D77A` (`gold-light`) |
| Text | `#FFFFFF` |
| Muted | `rgba(255,255,255,0.65)` (`.muted`) |
| Glass | `rgba(255,255,255,0.06–0.08)` + blur (`.glass`) |
| Borders | `rgba(255,255,255,0.15)` |

**Typography:** Playfair Display for headlines (`font-serif`, italic for emphasis) and Inter for body text (`font-sans`).

**Utility classes** (in `globals.css`):

- `.glass`, `.glass-gold`: frosted panels, the second with a gold border
- `.gold-text`: animated gold gradient text
- `.btn-gold`, `.btn-ghost`: primary and secondary buttons
- `.eyebrow`: small, widely spaced uppercase gold label
- `.hairline`: thin gold divider
- `.mask-line`: container for masked headline lines
- `.scroll-line`: animated vertical scroll indicator
- `.grain`: film-grain overlay
- `.caret`: blinking typing cursor

---

## Performance & Responsiveness

| Condition | Quality | What changes |
|---|---|---|
| Width ≥ 1200px and more than 4 CPU cores | `high` | Full tower count, reflective water, DPR 1.5, antialiasing |
| Width 768–1199px | `medium` | 60% of towers and particles, DPR 1.25, plain water |
| Width < 768px or ≤ 4 CPU cores | `low` | 35% of towers and particles, DPR 1, no antialiasing |
| Frame rate drops at runtime | Steps down one level | Handled by drei's `PerformanceMonitor` |

Other optimizations:

- Buildings use instanced meshes, so each district is drawn with very few draw calls.
- Scroll updates never trigger React re-renders.
- The 3D scene is loaded only in the browser.
- Layouts stack on tablet and mobile, and the mobile menu uses a glass panel.

---

## Customization Guide

- **Properties and communities:** edit `src/components/data.ts`. Residences have `priceNum`, `waterfront` and `type` fields, which the AI concierge uses for matching.
- **Images:** replace the URLs in `IMG` (`data.ts`).
- **Camera path:** edit `CAM_PATH` in `DubaiScene.tsx`.
- **Sky colours:** `SUNSET_*` and `NIGHT_*` constants in `DubaiScene.tsx`.
- **Day-to-night timing:** the `nightFactor()` thresholds.
- **Brand colours:** the `@theme` block in `globals.css`.
- **Scroll feel:** the `duration` and `easing` options passed to Lenis in `SmoothScroll.tsx`.

### Connecting a real AI model

Replace `analyse()` in `AIConcierge.tsx` with a call to a new route such as `/api/concierge`. That route should read the API key from `process.env` so the key stays on the server.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript check |
| `npx drizzle-kit push` | Apply the schema to the database |

---

## Known Limitations

- **The AI concierge is scripted.** It matches keywords and budget against the local property list and does not call a real AI model.
- **Market figures are invented** for the fictional brand. This covers growth rates, prices per sqft, yields, projections and chart data.
- **No lead notifications.** Leads are saved to the database, but there are no email alerts and no admin page.
- **Footer links are placeholders.**
- **Photos are loaded from the Pexels CDN** rather than stored in the project.

---

## Credits

- Photography: [Pexels](https://www.pexels.com). Photographers include AJ Ahamad, Vika Glitter, Maria Charizani, Volkan Sorkun, Ivan Siarbolin, Vishnu Kalanad, Max Vakhtbovych, Kadir Avşar, Ahmet Çötür and Quang Nguyen Vinh.
- 3D: Three.js, React Three Fiber, pmndrs/drei
- Motion: GSAP, Framer Motion, Lenis

© 2026 ORA Dubai. A fictional brand created for demonstration purposes.
