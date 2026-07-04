# Manga-Style Portfolio Website — Implementation Plan

## Context
User wants a personal portfolio website styled like a Japanese manga comic. The aesthetic should feel genuinely drawn — not "comic-book-themed SaaS". Key manga visual language: bold ink borders, panel grid layouts, screen tone (halftone dot) textures, speed lines, speech bubbles for CTAs, and high-contrast black & white with selective red/yellow accent pops.

---

## Aesthetic Decisions

**Stance:** Manga / gekiga — commit fully to the comic panel language. Dark ink on white paper ground. No SaaS rounding or gradients.

**Fonts (Google Fonts):**
- Display headings: `Bangers` (comic lettering energy, all-caps impact)
- Body / reading text: `Noto Sans JP` (authentic Japanese manga body feel, great Latin fallback)
- Labels / UI detail: `Space Mono` (panel numbering, metadata)

**Color tokens:**
- `--background`: `#f5f0e8` (aged manga paper)
- `--foreground`: `#0d0d0d` (heavy ink black)
- `--primary`: `#cc0000` (manga red — used sparingly for impact panels, CTAs)
- `--primary-foreground`: `#ffffff`
- `--secondary`: `#1a1a1a` (panel borders, ink fills)
- `--accent`: `#f5c518` (manga speed-line yellow, highlight)
- `--border`: `#0d0d0d` (thick ink borders)
- `--card`: `#ffffff` (panel interior white)
- `--muted`: `#d4cfc7`
- `--radius`: `0` (no border-radius — manga panels are hard-edged)

---

## Sections (pending user confirmation — defaulting to full set)
1. **Hero** — full-viewport manga splash panel. Name as protagonist title, role as subtitle in speech bubble, speed-line radial background
2. **About** — 3-panel manga strip telling "the story so far" with character description and avatar illustration placeholder
3. **Projects** — manga page grid of project cards styled as manga panels with chapter titles
4. **Skills** — "Power level" section with skill bars styled as manga power meters
5. **Contact** — speech bubble CTA with contact form styled like a manga dialog box

---

## Implementation Plan

### 1. `src/styles/fonts.css`
Import Google Fonts: Bangers (700), Noto Sans JP (400, 700), Space Mono (400)

### 2. `src/styles/theme.css`
Update `:root` tokens only (preserve `.dark` block and `@theme inline` mapping structure):
- Set manga paper/ink/red/yellow tokens as above
- Set `--radius: 0` for hard panel edges

### 3. `src/app/App.tsx`
Single-file implementation with these sections as components:

**Manga visual effects (CSS via Tailwind + inline):**
- Screen tone texture: CSS `radial-gradient` dot pattern (halftone effect) applied to backgrounds
- Speed lines: SVG `<lines>` radiating from center for hero background
- Panel borders: thick `border-4 border-foreground` on all cards
- Double-border effect: `outline` + `border` combo for classic manga panel look
- Speech bubbles: CSS clip-path or pseudo-element triangles
- Panel numbering: `Space Mono` small labels in corners (e.g., "PAGE 01 / PANEL 03")

**Hero Section:**
- Full screen, radial speed-line SVG bg
- Name in massive `Bangers` font with ink-stroke effect (text-shadow for depth)
- Role/tagline in speech bubble shape
- "READ MORE ↓" CTA button styled as manga action panel

**About Section:**
- 3-column manga strip panel
- Each panel has a thick black border, panel number, and text
- Halftone dot texture overlay on one panel for visual variety

**Projects Section:**
- Asymmetric CSS Grid (manga page composition — not equal columns)
- Each project is a manga panel: title as chapter heading in Bangers, description in body text, tech tags as small sticker-style labels
- Hover: panel "activates" with red border + slight scale
- 4 placeholder projects with realistic names/descriptions

**Skills Section:**
- "BATTLE STATS" header in Bangers
- Skill rows styled as manga power meters (thick bordered progress bars)
- Skills: JavaScript, TypeScript, React, Design, etc.

**Contact Section:**
- Large speech bubble shape for headline
- Simple form (name, email, message) with manga-bordered inputs
- Submit button in red with manga action typography

---

## Files to Modify
- `src/styles/fonts.css` — add Google Fonts imports
- `src/styles/theme.css` — update `:root` token values only
- `src/app/App.tsx` — full implementation (replace placeholder)

## Verification
- Dev server starts with `npm run dev`
- Page renders manga panel grid correctly
- Speed lines and halftone textures visible in hero
- Speech bubbles render correctly
- Hover states on project panels show red border activation
- Responsive: panels reflow to single column on mobile (~768px breakpoint)
