# Next Session Handoff — Manga Portfolio Course Builder

> Read this file first. After reading, tell the user: "I've read the handoff. I'm ready for the next building phase. Reminder: [insert the relevant next step from the phase you're resuming]."

---

## Project Status: COMPLETE

All **37 lessons** across **6 phases** are written and all **6 snapshots** exist. The root answer key (`portfolio/index.html`, `style.css`, `script.js`, `nav.js`, `project.html`) has been brought up to Phase 6 standard — nav is injected via `nav.js`, project cards are JS-generated, and `project.html` is the single dynamic detail page with SEO meta tags.

### File Structure

```
portfolio/
├── index.html              # Final answer key — DO NOT MODIFY
├── style.css               # Final answer key — DO NOT MODIFY
├── script.js               # Final answer key — DO NOT MODIFY
├── nav.js                  # Final answer key — DO NOT MODIFY
├── project.html            # Final dynamic detail page — DO NOT MODIFY
├── project-1.html          # Legacy (Phase 1) — DO NOT DELETE
├── project-2.html          # Legacy (Phase 1) — DO NOT DELETE
├── project-3.html          # Legacy (Phase 1) — DO NOT DELETE
├── course/                 # 37 lesson files (01-01 through 06-03)
│   ├── 00-welcome.md
│   ├── 01-01-document-setup.md
│   ├── ...
│   └── 06-03-github-pages-deploy.md
├── snapshots/              # 6 standalone working copies
│   ├── phase-1-html/
│   ├── phase-2-css/
│   ├── phase-3-effects/
│   ├── phase-4-js/
│   ├── phase-5-evolution/
│   └── phase-6-ship/
└── plans/
    ├── curriculum-roadmap.md   # Master roadmap — read this for full arc
    └── next-session-handoff.md # ← This file
```

### What Each Phase Teaches

| Phase | # Lessons | What Student Builds |
|-------|-----------|-------------------|
| 1 HTML | 10 | Raw unstyled HTML, all sections, 3 project detail pages |
| 2 CSS | 10 | Colors, fonts, grid, flexbox, nav/hero/forms/footer styling |
| 3 Manga | 5 | Chapter badge, text-shadow, speech bubble, ink-stamp CTA, page hero |
| 4 JS | 4 | Scroll nav highlight, contact form handler, smooth scroll, page detection |
| 5 Evolution | 5 | JS array cards, dynamic project.html, nav.js injection, auto nav highlight, Formspree |
| 6 Ship | 3 | SEO meta tags + OG + favicon, responsive polish, GitHub Pages deploy |

---

## The Teaching Philosophy

1. **One concept per lesson** — never mix topics
2. **Manual before automatic** — write 3 HTML files, then evolve to 1 dynamic page
3. **No frameworks** — pure HTML + CSS + JS
4. **Student types every line** — no copy-paste
5. **Each lesson has a "Try It" challenge**
6. **Snapshots show evolution** — open any phase folder in a browser and it works

Every lesson follows this format:
- Goal
- What You Type (code)
- What Each Line Means (table)
- Try It (challenge)
- What You Learned (checklist)

---

## What's Ready for the Next Session

### Option A: Review & Polish (Recommended)
The lessons are written but **untested**. A student should actually follow each lesson from Phase 1 through Phase 6 to verify:
- Each lesson's code produces the expected result
- No missing steps between lessons
- Snapshots match what the student would have after completing each phase
- All links, images, and scripts work in all 6 snapshots

### Option B: Add a Course Index Page
Create `course/index.md` that lists all 37 lessons with brief descriptions and links — a table of contents for the student.

### Option C: Create a "Welcome / Getting Started" Lesson
A lesson-00 or README at the course level explaining:
- What tools they need (VS Code, browser)
- How the course is structured
- How to use the snapshots as reference

### Option D: Package for Submission
Create a zip archive, write a cover letter, or format the course for the professor's submission requirements.

---

## Critical Rules for the Next AI

1. **NEVER modify** the root `portfolio/index.html`, `style.css`, `script.js`, or `nav.js` — those are the final answer key
2. **NEVER delete** `project-1.html`, `project-2.html`, `project-3.html` — they're legacy references
3. **ALWAYS read** `plans/curriculum-roadmap.md` before making any changes
4. **Snapshots** must remain fully working standalone copies — any edit to CSS/JS must be applied to the relevant snapshots too
5. **Lessons format** must stay consistent — if you edit a lesson, keep the same structure

---

## Quick Reference

| What to Check | File |
|--------------|------|
| Full curriculum arc | `plans/curriculum-roadmap.md` |
| Final answer key (do not touch) | `index.html`, `style.css`, `script.js` |
| Phase 1 student result | `snapshots/phase-1-html/index.html` |
| Phase 2 student result | `snapshots/phase-2-css/index.html` |
| Phase 6 student result | `snapshots/phase-6-ship/index.html` |
| Lesson format example | `course/01-01-document-setup.md` |
| All lesson files | `course/` directory |
| **Course platform (Next.js)** | `course-platform/` — see its own handoff doc |
