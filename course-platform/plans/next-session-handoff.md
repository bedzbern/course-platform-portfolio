# Next Session Handoff — Course Platform (Next.js)

> Read this file first. Tell the user: "I've read the course-platform handoff. I'm ready to continue."

---

## Project Status: BUILDING

A Next.js 16 app that turns the 39 portfolio lesson `.md` files into an interactive Codecademy-style learning platform with Firebase auth, progress tracking, interactive exercises, and a code playground.

### Stack
- **Framework:** Next.js 16.2.10 (Turbopack default) with TypeScript
- **Styling:** Tailwind CSS v4 (manga color palette matching the portfolio)
- **Auth & Database:** Firebase Auth (email/password) + Firestore
- **Content:** 39 lesson `.md` files in `content/` (copied from `portfolio/course/`)
- **Rendering:** `react-markdown` + `remark-gfm` + `rehype-highlight` with custom code block wrapping
- **Code Editors:** Monaco Editor (`@monaco-editor/react`, vs-dark theme) — replaces all `<textarea>` editors in playground and snapshot viewer
- **Syntax Highlighting:** `highlight.js/styles/vs2015.css` for lesson markdown code blocks

### Env Vars (in `.env.local`)
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBG1QoMTeaOKTeTZ32ha04tP1LfdVYXiX0
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=course-platform-8d142.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=course-platform-8d142
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=course-platform-8d142.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=643320373420
NEXT_PUBLIC_FIREBASE_APP_ID=1:643320373420:web:64253d8729bf2da3563f09
```

### File Structure
```
course-platform/
├── app/
│   ├── globals.css               # Tailwind + manga markdown styles
│   ├── layout.tsx                # Root layout (AuthProvider, Navbar, Footer)
│   ├── page.tsx                  # Home page
│   ├── syllabus/page.tsx         # Lesson list by phase
│   ├── about/page.tsx            # About page
│   ├── faq/page.tsx              # FAQ page
│   ├── auth/login/page.tsx       # Login form
│   ├── auth/register/page.tsx    # Register form
│   ├── lessons/[id]/page.tsx     # Lesson viewer (SSG) with all interactive features
│   ├── lessons/[id]/LessonContent.tsx  # react-markdown wrapper with copy-code
│   ├── progress/page.tsx         # Progress tracker (Firestore)
│   ├── exercises/page.tsx        # Exercise index — PICK UP HERE
│   ├── exercises/[phase]/page.tsx  # Phase exercise page — PICK UP HERE
│   └── playground/page.tsx       # Standalone full-page code playground — PICK UP HERE
├── components/
│   ├── Navbar.tsx                # Auth-aware nav
│   ├── Footer.tsx                # Simple footer
│   ├── MarkComplete.tsx          # Firestore toggle per lesson
│   ├── CopyCode.tsx              # "Copy" button on code blocks
│   ├── CompleteAndNext.tsx       # "Complete & Continue →" button (marks + navigates)
│   ├── ProgressMini.tsx          # Small progress bar in lesson breadcrumb
│   ├── SyllabusProgress.tsx      # Checkboxes + phase counters on syllabus page
│   ├── CodePlayground.tsx        # Reusable editor (used in lessons + standalone)
│   └── SnapshotViewer.tsx        # Read-only tabbed snapshot code viewer — PICK UP HERE
├── lib/
│   ├── firebase.ts               # Firebase init (graceful if env missing)
│   ├── auth.tsx                  # Auth context + provider
│   ├── lessons.ts                # Hardcoded lesson list & helpers
│   └── snapshots.ts              # Snapshot file loader (fs) — PICK UP HERE
├── content/                      # 39 .md lesson files
│   ├── 00-welcome.md
│   ├── 01-01-document-setup.md
│   └── ...
└── plans/
    └── next-session-handoff.md   # ← This file
```

---

## Interactive Features (Already Built)

### On Every Lesson Page (`/lessons/[id]`)
| Feature | Component | What It Does |
|---------|-----------|-------------|
| **Mark Complete** | `MarkComplete.tsx` | Toggle button in breadcrumb, syncs to Firestore per user |
| **Copy Code** | `CopyCode.tsx` → `PreWrapper` | Hover code block → "Copy" button appears |
| **Code Playground** | `CodePlayground.tsx` | HTML/CSS/JS editor (Monaco Editor, vs-dark) + Run + iframe preview + Preview in New Tab |
| **Prev / Next Nav** | `CompleteAndNext.tsx` + `page.tsx` | Prev link + "Complete & Continue →" button that auto-marks lesson complete in Firestore |
| **Progress Mini** | `ProgressMini.tsx` | Small progress bar in lesson breadcrumb |
| **Syllabus Progress** | `SyllabusProgress.tsx` | Checkboxes + "{n}/{total} completed" per phase on the syllabus page |

### Auth & Progress
- Firebase Auth with email/password (Login + Register pages)
- AuthProvider context (`useAuth()` hook)
- Firestore progress tracking (`/progress` page with per-phase breakdown)
- Navbar shows user email when logged in, Login/SignUp when logged out

---

## Phase Exercises (In Progress — New in This Session)

### Architecture
Two pages per phase:

1. **`/exercises/phase-N`** — Exercise page with:
   - Phase goal/instructions
   - Side-by-side layout: editor (compact) | snapshot answer (read-only)
   - "Open Full Playground →" link to standalone page

2. **`/playground?phase=phase-N`** — Standalone full-page playground with:
   - Collapsible-free, full-height layout
   - HTML/CSS/JS tabs + Preview iframe
   - "Show Answer" toggle (loads snapshot code into editors)
   - "Preview ↗" button to open in new tab
   - "Reset" button

### Snapshot Data Source
Snapshots are the answer keys located at `portfolio/snapshots/phase-*/`.
Loaded at build time via `lib/snapshots.ts` using `fs`.

### Phase Mapping
| Phase | Route | Snapshot Source | Goal |
|-------|-------|----------------|------|
| 1 | `/exercises/phase-1` | `portfolio/snapshots/phase-1-html/` | HTML structure — all sections, nav, 3 project pages |
| 2 | `/exercises/phase-2` | `portfolio/snapshots/phase-2-css/` | CSS styling — colors, fonts, grid, flexbox |
| 3 | `/exercises/phase-3` | `portfolio/snapshots/phase-3-effects/` | Manga visual effects — badges, shadows, bubbles |
| 4 | `/exercises/phase-4` | `portfolio/snapshots/phase-4-js/` | JavaScript — scroll, form, nav interaction |
| 5 | `/exercises/phase-5` | `portfolio/snapshots/phase-5-evolution/` | JS automation — arrays, dynamic pages, injection |
| 6 | `/exercises/phase-6` | `portfolio/snapshots/phase-6-ship/` | Ship — SEO, responsive, deploy |

---

## Key Files to Understand Before Making Changes

| File | Why It Matters |
|------|---------------|
| `lib/firebase.ts` | Graceful init — doesn't crash when env vars are empty (essential for SSG) |
| `lib/auth.tsx` | Provides `useAuth()` hook; `firebaseReady` flag for components |
| `lib/lessons.ts` | Hardcoded lesson list — NO `fs` usage (avoids client bundle issues) |
| `lib/snapshots.ts` | Uses `fs` — server-only, only importable in server components or `getStaticProps` equivalent |
| `components/CodePlayground.tsx` | Core reusable editor — props: `initialHtml`, `initialCss`, `initialJs`, `standalone`, `showAnswer` |
| `app/lessons/[id]/page.tsx` | SSG with `generateStaticParams` — uses `params: Promise<{id: string}>` (Next.js 16 async pattern) |

---

## What's Likely Next

1. **Complete the Phase Exercises** — `/exercises/[phase]/page.tsx` and `/playground/page.tsx` files are stubs that need full implementation
2. **Complete `lib/snapshots.ts`** — needs `fs`-based snapshot loading wired up
3. **Wire SnapshotViewer into exercise pages** — currently renders code but exercise page layout isn't connected
4. **Deploy** — The course platform could be deployed to Vercel
5. **Course content updates** — Any edits to the `.md` lesson files
6. **Student verification** — A real student should follow the 37 lessons from Phase 1 through 6 to verify correctness

---

## Session Log — Jul 6, 2026

### Changes Made

**1. Figma boilerplate deleted from repo root**
- The original scaffolding files that Figma exported (`C:\Users\ACT-STUDENT\Downloads\FIGMA\`) were removed — only the living project in `Manga Style Portfolio Website (1)/` remains

**2. Monokai dark theme applied across all code blocks (Monaco Editor + rehype-highlight)**

Two complementary changes to give every code display a uniform dark editor look:

- **Monaco Editor integration** (`components/CodePlayground.tsx`, `components/SnapshotViewer.tsx`):
  - Replaced raw `<textarea>` editors with `@monaco-editor/react` (vs-dark theme)
  - `CodePlayground.tsx` — live editable code tabs now use Monaco (with minimap off, 13px font)
  - `SnapshotViewer.tsx` — read-only code display now uses Monaco (with `readOnly: true`, 12px font, language auto-detected from file extension)
  - Both imported via `dynamic(() => import(...), { ssr: false })` to avoid SSR issues

- **Syntax highlighting in lesson markdown** (`app/globals.css`, `app/lessons/[id]/LessonContent.tsx`):
  - Added `rehype-highlight` plugin to `ReactMarkdown` in `LessonContent.tsx`
  - Imported `highlight.js/styles/vs2015.css` in `globals.css`
  - Removed the hardcoded dark background from `.markdown pre` (now handled by highlight.js)

**3. New dependencies added to `package.json`:**
  - `@monaco-editor/react` — Monaco Editor wrapper for React
  - `rehype-highlight` — syntax highlighting plugin for react-markdown

**4. Monaco editor height fix** (`components/CodePlayground.tsx`, `components/SnapshotViewer.tsx`)
- Monaco was rendering at only ~86px because the flex chain had a gap: the `inner` component's `flex-1` had no effect since its parent `div.h-[500px]` was not a flex container
- Fix: added `flex flex-col` to `div.h-[500px] sm:h-[60vh]` at line 327
- Also added `h-full` and `height="100%"` to the Monaco wrapper and `<MonacoEditor>` prop (lines 215-217)
- Added `automaticLayout: true` to Monaco options in both `CodePlayground.tsx` and `SnapshotViewer.tsx` so the editor re-measures when the flex layout resolves

**5. Full-width layout** (all main pages)
- Changed `max-w-4xl`/`max-w-5xl mx-auto px-6` → `w-full px-4 sm:px-6 lg:px-8` on:
  - `app/lessons/[id]/page.tsx` (lesson content + playground now spans full width)
  - `app/syllabus/page.tsx`
  - `app/exercises/[phase]/page.tsx`
  - `app/progress/page.tsx`
- Each page now fills 100% of `<main>`, with responsive padding that shrinks on small screens

**6. Progress tracking overhaul**
- **Deleted** `components/TryItChecklist.tsx` — user deemed it useless
- **Created** `components/CompleteAndNext.tsx` — red "Complete & Continue →" button that marks the current lesson complete in Firestore, then navigates to the next lesson. Replaces the previous plain `<Link>` for "Next"
- **Created** `components/ProgressMini.tsx` — small text + bar (e.g., "32%") shown in the lesson page breadcrumb, so the user always sees overall course progress
- **Created** `components/SyllabusProgress.tsx` — wraps the syllabus page lesson list with:
  - Checkboxes: filled red checkmark for completed, empty bordered box for incomplete
  - Phase counters: "3/10 completed" next to each phase heading
  - Dimmed style for completed lesson titles
  - Respects `loading` from `useAuth()` and has try/catch on Firestore fetch
- **Updated** `app/lessons/[id]/page.tsx` — removed TryItChecklist import/usage; added ProgressMini in breadcrumb; replaced plain Next `<Link>` with CompleteAndNext
- **Updated** `app/syllabus/page.tsx` — replaced static phase loop with `<SyllabusProgress phases={phases} />`

### Remaining / Known Issues

- `/exercises/[phase]/page.tsx` — still a stub, needs full implementation
- `/playground/page.tsx` — still a stub, needs full implementation
- `components/SnapshotViewer.tsx` — now renders code, but exercise page layout is not wired up
- `lib/snapshots.ts` — still a stub, needs `fs`-based snapshot loading
- Monaco editor textarea fallback not tested in older browsers
- Syllabus and lesson page progress requires Firebase auth — logged-out users see 0% (no way to mark progress without an account)

---

## Critical Rules for the Next AI

1. **NEVER use `fs` in client components.** `lib/snapshots.ts` is server-only.
2. **Firebase env vars** are currently live — don't commit them to public repos.
3. **Lesson content** in `content/` is copied from `portfolio/course/`. If you edit lessons, keep both in sync.
4. **`params` must be awaited** — Next.js 16 requires `const { id } = await params`.
5. **MarkComplete** requires `lessonId` prop — it fetches progress from Firestore.
6. **Code Playground** uses `Blob` URLs for "Preview in New Tab" — `URL.revokeObjectURL` is called after 10s delay.
7. **Monaco Editor (`@monaco-editor/react`)** must ALWAYS be imported via `dynamic(() => import(...), { ssr: false })` — it references `window` and will crash on the server. Never import it statically.
8. **SnapshotViewer** uses `detectLang(name)` to map file extensions (`html`, `css`, `js`) to Monaco language IDs. If a snapshot adds new file types, update this mapper.
9. **CompleteAndNext** marks the current lesson as complete in Firestore via `setDoc` merge — it reads the existing array, appends the current lesson ID if not already present, then calls `router.push()`. It does NOT check if Firestore write succeeds before navigating.
10. **SyllabusProgress and ProgressMini** both respect `loading` from `useAuth()` — they show nothing until auth state resolves. If Firebase is unavailable (no env vars), they show 0% / "0/N" silently.
11. **All main pages** now use `w-full px-4 sm:px-6 lg:px-8` instead of `max-w-* mx-auto` — content fills the full width. If you add a new page, use the same pattern for consistency.

---

## Quick Commands

```bash
cd course-platform
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (SSG all 48 pages)
npm run start    # Serve production build
```

## Portfolio Snapshot Paths (Relative to Repo Root)

| Phase | Path |
|-------|------|
| 1 | `portfolio/snapshots/phase-1-html/` |
| 2 | `portfolio/snapshots/phase-2-css/` |
| 3 | `portfolio/snapshots/phase-3-effects/` |
| 4 | `portfolio/snapshots/phase-4-js/` |
| 5 | `portfolio/snapshots/phase-5-evolution/` |
| 6 | `portfolio/snapshots/phase-6-ship/` |
