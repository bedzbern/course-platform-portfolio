# Portfolio Builder + Codecademy-Style Course

## Two Tracks, One Project

Build a real manga-style portfolio from scratch AND create a Codecademy-style tutorial that teaches how it was made — every line explained.

---

## Track A: The Portfolio

A plain HTML + CSS + JS site (no React, no Vite, no build tools).

### Sections
1. **Hero** — Name + tagline, manga-style splash
2. **About** — Your real story
3. **Projects** — Your real projects
4. **Skills** — Simple skill bars/labels
5. **Contact** — Form or social links
6. **Footer**

### Build Steps

| Step | What We Build | Code Added |
|------|--------------|------------|
| 1 | HTML skeleton — all sections, semantic tags, linked CSS/JS | ~50 lines |
| 2 | CSS layout — flexbox/grid, colors (manga palette), typography | ~80 lines |
| 3 | Manga visual effects — thick borders, speech bubbles, halftone texture | ~40 lines |
| 4 | JavaScript — smooth scroll, nav highlighting, typewriter effect | ~30 lines |
| 5 | Your real content — your name, your projects, your story | Edit text |
| 6 | Deploy — GitHub Pages or Netlify, it goes live | 1 push |

### Stack
```
index.html  (all structure)
style.css   (all styling)
script.js   (all interactivity)
```
No frameworks. Every line explained before moving on.

---

## Track B: The Course

Each build step produces a matching lesson in `course/`:

```
/course/
  lesson-01-html-structure.md
  lesson-02-css-layout.md
  lesson-03-manga-effects.md
  lesson-04-javascript-basics.md
  lesson-05-final-polish.md
```

### Lesson Format (Codecademy style)
```
# Lesson: [Topic]

## Concept (3-5 sentences — what this is and why it matters)

## Your Code (the lines you just wrote, annotated line-by-line)

## Try It (a mini challenge to modify your code and see what happens)

## What You Learned (checklist of concepts covered)
```

---

## End Result

```
/portfolio
├── index.html       # Live portfolio site
├── style.css         # Styling
├── script.js         # Interactivity
├── course/
│   ├── lesson-01-html-structure.md
│   ├── lesson-02-css-layout.md
│   ├── lesson-03-manga-effects.md
│   ├── lesson-04-javascript-basics.md
│   └── lesson-05-final-polish.md
└── plans/
    └── overview-plan.md   # This file
```

You walk away with:
1. A real portfolio you can deploy and use
2. A self-written tutorial proving you understand every line you wrote
3. Something unique for your professor that demonstrates genuine learning

---

## Session Log — Jul 4, 2026

### Changes Made

**1. Playground layout fix** (`course-platform/`)
- Fixed standalone playground not filling full viewport height on `/playground` route
- Root cause: `h-full` chain was unreliable through multiple `flex-1` parents
- Changed all height inheritance from `h-full` to `flex-1 min-h-0` throughout:
  - `app/layout.tsx:22` — `<main>`: `flex-1` → `flex-1 flex flex-col min-h-0`
  - `app/playground/PlaygroundClient.tsx:27` — outer div: `h-full` → `flex-1 flex flex-col min-h-0`
  - `app/playground/PlaygroundClient.tsx:47` — playground container: added `flex flex-col`
  - `components/CodePlayground.tsx:277` — inner split pane: `h-full` → `flex-1 min-h-0`
  - `components/CodePlayground.tsx:297-298` — standalone wrapper removed, returns `inner` directly

**2. Nav links missing in phases 5-6** (`portfolio/snapshots/`)
- About and Skills nav links were dropped when nav was extracted to `nav.js` in phase 5
- Added both links back to `nav.js` in phases 5 and 6
- Scroll-highlight selector `[href^="#"]` didn't match `index.html#hash` format — fixed to `[href*="#"]`
- Inlined `nav.js` content directly into `index.html` so the playground blob preview renders the nav (external `script src` doesn't resolve in blob: URLs)
  - Updated: `phase-5-evolution/index.html`, `phase-6-ship/index.html`
  - `nav.js` files still exist on disk for reference but are no longer referenced from HTML

### Remaining / Known Issues

- Standalone playground editor textarea doesn't show the snapshot initial code until user interacts (might need a `runCode()` call on mount)
- Scroll-active nav highlighting scroll offset of 120px may need tuning
- Phase lessons content (`.md` files in `course-platform/content/`) not yet created — lessons exist as routes but are empty shells

---

## Session Log — Jul 6, 2026

### Changes Made

**1. Figma boilerplate deleted from repo root**
- Removed the original Figma-exported scaffolding files from the repo root level
- Only the living project in `Manga Style Portfolio Website (1)/` remains

**2. Monokai dark theme applied across course-platform code blocks**

Two complementary changes:
- **Monaco Editor** (`@monaco-editor/react`, vs-dark theme) replaced raw `<textarea>` editors in `CodePlayground.tsx` and `SnapshotViewer.tsx`
- **rehype-highlight** + `highlight.js/styles/vs2015.css` added to `LessonContent.tsx` for syntax-highlighted code blocks in lesson markdown
- New deps: `@monaco-editor/react`, `rehype-highlight`

### Files Modified
- `course-platform/app/globals.css` — imported vs2015.css, removed hardcoded dark pre bg
- `course-platform/app/lessons/[id]/LessonContent.tsx` — added rehype-highlight plugin
- `course-platform/components/CodePlayground.tsx` — replaced textarea with Monaco
- `course-platform/components/SnapshotViewer.tsx` — replaced pre/code with Monaco (read-only)
- `course-platform/package.json` / `package-lock.json` — new deps

**3. Monaco editor height fix** (`course-platform/components/CodePlayground.tsx`, `components/SnapshotViewer.tsx`)
- Monaco editor only rendered at 86px because its flex container wasn't a flex parent
- Fix: added `flex flex-col` to the outer `h-[500px] sm:h-[60vh]` container so `flex-1` on `inner` actually works
- Added `h-full` + `height="100%"` + `automaticLayout: true` to Monaco wrapper and props
- Same fix applied to `SnapshotViewer.tsx` (added `automaticLayout: true`)

**4. Full-width layout** (lesson, syllabus, exercises, progress pages)
- Changed all `max-w-4xl`/`max-w-5xl mx-auto px-6` to `w-full px-4 sm:px-6 lg:px-8` on:
  - `app/lessons/[id]/page.tsx`
  - `app/syllabus/page.tsx`
  - `app/exercises/[phase]/page.tsx`
  - `app/progress/page.tsx`

**5. Progress tracking overhaul**
- **Deleted** `components/TryItChecklist.tsx` (useless, user requested removal)
- **Created** `components/CompleteAndNext.tsx` — replaces the plain Next link; marks lesson complete in Firestore then navigates forward
- **Created** `components/ProgressMini.tsx` — small progress percent + bar in lesson page breadcrumb
- **Created** `components/SyllabusProgress.tsx` — adds checkboxes + "X/Y completed" counters to the syllabus page
- **Updated** `app/lessons/[id]/page.tsx` — removed TryItChecklist, added ProgressMini and CompleteAndNext
- **Updated** `app/syllabus/page.tsx` — replaced static list with SyllabusProgress component

### Remaining / Known Issues
- `/exercises/[phase]/page.tsx` — still a stub
- `/playground/page.tsx` — still a stub
- `components/SnapshotViewer.tsx` — layout not wired into exercise pages yet
- `lib/snapshots.ts` — still a stub
