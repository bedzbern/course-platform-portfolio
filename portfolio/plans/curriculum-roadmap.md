# Curriculum Roadmap — Manga Portfolio Builder

## For Future AI Sessions

This document describes the full teaching curriculum for this project.
Always read this first before continuing work to understand the arc, philosophy, and current progress.

---

## Teaching Philosophy

1. **One concept per lesson.** Each lesson teaches exactly ONE thing. No mixing topics.
2. **Manual before automatic.** Start repetitive (e.g., 3 HTML files for 3 projects) — later evolve into automation (e.g., 1 JS template).
3. **No frameworks.** Pure HTML + CSS + JavaScript. No React, no Vite, no build tools.
4. **Student types every line.** No copy-paste. Understanding comes from typing.
5. **Each lesson has a "Try It" challenge.** A small modification to reinforce learning.
6. **Snapshots at each phase.** The `snapshots/` folder shows the site's evolution — open any phase and it works.

---

## Final File Structure (The Answer Key)

These files already exist and represent the **completed** site. Do NOT modify them unless explicitly asked.

```
portfolio/
├── index.html          # Home page — single scrollable page
├── project-1.html      # Detail page (legacy — Phase 1 lesson 10)
├── project-2.html      # Detail page (legacy — Phase 1 lesson 10)
├── project-3.html      # Detail page (legacy — Phase 1 lesson 10)
├── project.html        # Final evolution — single dynamic detail page (Phase 5)
├── style.css           # All styling
├── nav.js              # Reusable nav injector (Phase 5)
├── script.js           # All interactivity
├── course/             # All lessons, numbered
├── snapshots/          # Phase-by-phase working copies
└── plans/
    └── curriculum-roadmap.md   ← This file
```

---

## The 6 Phases (37 Lessons Total)

### Phase 1: HTML — Structure (10 lessons)
Goal: Build the full page structure with NO CSS styling. Looks ugly but works.

| # | Lesson | Teaches | Lines |
|---|--------|---------|-------|
| 01-01 | Document Setup | DOCTYPE, html, head, body, meta tags, title | 8 |
| 01-02 | Nav Bar | nav, div, span, ul, li, a | 8 |
| 01-03 | Hero Section | section, h1, p, a button | 5 |
| 01-04 | About Section | h2, p tags, content structure | 6 |
| 01-05 | Project Cards | div, class, nested elements, grid structure | 16 |
| 01-06 | Skills Section | Multiple nested divs, progress bar structure | 14 |
| 01-07 | Contact Form | form, input, textarea, button, placeholder | 9 |
| 01-08 | Footer | footer, p, copyright | 3 |
| 01-09 | Link Nav to Sections | id attribute, href="#id" anchors | ~6 attr changes |
| 01-10 | Project Detail Pages | Creating separate HTML files, linking between pages | ~40 each |

**Snapshot:** `snapshots/phase-1-html/` — Raw HTML, no CSS, no JS. Browser defaults.

---

### Phase 2: CSS — Make It Look Good (10 lessons)
Goal: Style every section. No layouts yet, just colors, fonts, and spacing.

| # | Lesson | Teaches | CSS Concepts |
|---|--------|---------|-------------|
| 02-01 | Link CSS + Reset | link rel="stylesheet", * selector, box-sizing | 3 |
| 02-02 | Colors with Variables | :root, --custom-properties, var() | 6 |
| 02-03 | Google Fonts | @import or link, font-family stack | 4 |
| 02-04 | Nav Styling | background, flexbox, border-bottom, hover | 12 |
| 02-05 | Hero Background | background-image, gradient overlay, cover | 8 |
| 02-06 | Hero Typography | clamp(), text-shadow, letter-spacing | 6 |
| 02-07 | Section Layout | section padding, nth-child backgrounds, container | 8 |
| 02-08 | Project Grid | display: grid, grid-template-columns, gap | 10 |
| 02-09 | Project Cards | border, hover effect, transform, box-shadow | 14 |
| 02-10 | Skills + Contact + Footer | Bar fills, input borders, footer bg | 16 |

**Snapshot:** `snapshots/phase-2-css/` — Colored, styled, but no manga character yet.

---

### Phase 3: Manga Effects (5 lessons)
Goal: Add comic-book personality — speech bubbles, ink stamps, chapter labels.

| # | Lesson | Effect | Key CSS |
|---|--------|--------|---------|
| 03-01 | Chapter Badge | Small label box above hero name | inline-block, border, bg |
| 03-02 | Text Shadow Stack | Red + black offset shadows | text-shadow multi-layer |
| 03-03 | Speech Bubble | White bubble with comic tail | ::before, ::after, borders |
| 03-04 | Ink-Stamp CTA | Bold button with shadow press | box-shadow, transform hover |
| 03-05 | Page Hero Banner | Shorter hero for inner pages | .page-hero, 40vh |

**Snapshot:** `snapshots/phase-3-effects/` — Now looks like a manga site.

---

### Phase 4: JavaScript — Interaction (4 lessons)
Goal: Make the site respond to the user.

| # | Lesson | What You Build | Key JS |
|---|--------|---------------|--------|
| 04-01 | Scroll Nav Highlight | Active link changes as you scroll | scroll event, getBoundingClientRect |
| 04-02 | Contact Form Handler | Prevent default, validate, show message | addEventListener, if/else |
| 04-03 | Smooth Scroll | Click nav link → smooth scroll to section | scrollIntoView, behavior smooth |
| 04-04 | Page Detection | Know which page you're on for nav highlight | window.location, pathname |

**Snapshot:** `snapshots/phase-4-js/` — Interactive, responsive to user actions.

---

### Phase 5: Evolution — Manual → Automated (5 lessons)
Goal: Replace repetitive manual work with smarter JS. The "AH-HA!" phase.

| # | What We Did Before | Now We Automate | Key Technique |
|---|-------------------|-----------------|--------------|
| 05-01 | 3 project cards hardcoded in HTML | Cards loaded from JS array + for loop | createElement, appendChild |
| 05-02 | 3 separate project detail pages | 1 dynamic page using URL parameter | URLSearchParams, ?id= |
| 05-03 | Nav repeated in every HTML file | 1 nav.js that injects nav everywhere | document.write, script src |
| 05-04 | Nav-active hardcoded per page | Auto-detected from window.location | pathname, classList.add |
| 05-05 | Form just shows alert | Sends email via Formspree or stores data | fetch, FormData |

**Snapshot:** `snapshots/phase-5-evolution/` — Adding project 4 = 1 line in an array.

---

### Phase 6: Ship It (3 lessons)
Goal: Make it professional and put it live.

| # | Lesson | What You Learn |
|---|--------|---------------|
| 06-01 | Meta Tags + SEO | title, description, Open Graph, favicon |
| 06-02 | Responsive Polish | @media breakpoints, mobile nav, font sizes |
| 06-03 | Deploy to GitHub Pages | git, push, Pages settings, custom domain optional |

**Snapshot:** `snapshots/phase-6-ship/` — Live, polished, professional.

---

## Snapshot Guide

Each `snapshots/phase-N-name/` folder contains a fully working standalone copy of the site at that stage. Open the `index.html` in any browser and it works.

| Snapshot | What It Shows |
|----------|--------------|
| phase-1-html | Raw unstyled HTML (browser defaults) |
| phase-2-css | Colored + laid out but no manga effects |
| phase-3-effects | Manga personality added |
| phase-4-js | Interactive (scroll, form) |
| phase-5-evolution | Dynamic content (JS-driven) |
| phase-6-ship | Production-ready (responsive, meta, deployed) |

---

## Phase 1 Detail: Exact Lesson Content

This section provides enough detail that any AI session can reconstruct Phase 1 lessons correctly.

### 01-01: Document Setup (~8 lines)
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
</head>
<body>

</body>
</html>
```
Concepts: DOCTYPE, html tag (lang attr), head vs body, meta tags, title.

### 01-02: Nav Bar (~8 lines inside body)
```html
<nav>
  <div>
    <span>PORTFOLIO</span>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
```
Concepts: nav (semantic), div (container), span (inline), ul/li (list), a (anchor). Note: href="#" are placeholders — we fix them in lesson 09.

### 01-03: Hero Section (~5 lines)
```html
<section>
  <h1>Your Name</h1>
  <p>Title / Tagline</p>
  <a href="#">View My Work</a>
</section>
```
Concepts: section (semantic), h1 (most important heading), p (paragraph), a as button.

### 01-04: About Section (~6 lines)
```html
<section>
  <h2>About Me</h2>
  <p>Bio paragraph 1...</p>
  <p>Bio paragraph 2...</p>
</section>
```
Concepts: h2 (subheading), multiple paragraphs, content structure.

### 01-05: Project Cards (~16 lines)
```html
<section>
  <h2>Projects</h2>
  <div>
    <div>
      <h3>Project 1</h3>
      <p>Description...</p>
    </div>
    <div>
      <h3>Project 2</h3>
      <p>Description...</p>
    </div>
    <div>
      <h3>Project 3</h3>
      <p>Description...</p>
    </div>
  </div>
</section>
```
Concepts: Nested divs, h3 (sub-subheading), class attribute (add class="project-card" etc.).

### 01-06: Skills Section (~14 lines)
```html
<section>
  <h2>Skills</h2>
  <div>
    <div>
      <span>HTML & CSS</span>
      <div><div></div></div>
    </div>
    <!-- repeat for JS, Python -->
  </div>
</section>
```
Concepts: Deeply nested divs (structure for progress bars), span for labels.

### 01-07: Contact Form (~9 lines)
```html
<section>
  <h2>Contact</h2>
  <form>
    <input type="text" placeholder="Your Name">
    <input type="email" placeholder="Your Email">
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Send</button>
  </form>
</section>
```
Concepts: form tag, input types, textarea, button, placeholder attribute.

### 01-08: Footer (~3 lines)
```html
<footer>
  <p>&copy; 2026 Your Name</p>
</footer>
```
Concepts: footer (semantic), HTML entities (&copy;).

### 01-09: Link Nav to Sections
Add id attributes to each section:
```html
<section id="hero">
<section id="about">
<section id="projects">
<section id="skills">
<section id="contact">
```
Update nav hrefs:
```html
<a href="#hero">Home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
```
Concepts: id attribute (unique identifier), href="#id" (anchor link), smooth scroll behavior.

### 01-10: Project Detail Pages
Create 3 separate files: project-1.html, project-2.html, project-3.html.
Each has:
- Same nav (links back to index.html sections via index.html#section)
- Page hero (h1 with project name only, no styling)
- Large image placeholder
- Description paragraph
- A "Back to Projects" link: `<a href="index.html#projects">← Back</a>`

Also update project cards on index.html to link to detail pages:
```html
<a href="project-1.html">View Details →</a>
```
Concepts: Multiple HTML files, linking between pages, href="page.html#section".

---

## Final Evolution Notes

After Phase 5, the site should work like this:

- **project-1.html through project-3.html** become legacy (no longer linked from nav)
- **project.html** is the single dynamic detail page: `project.html?id=1`
- **index.html** project cards are generated from a JS array, not hardcoded
- **nav.js** is included via `<script src="nav.js"></script>` instead of writing nav HTML
- **script.js** handles nav injection, page detection, card generation, form handling

The final site is a single `index.html` + `project.html` + `style.css` + `nav.js` + `script.js`.
All 3 original project-*.html files serve as a reference for "the manual way."

---

## Current Progress

<!-- Update this section as lessons are completed -->

Phase 1: Completed (all 10 lessons written, snapshot saved)
Phase 2: Completed (all 10 lessons written, snapshot saved)
Phase 3: Completed (all 5 lessons written, snapshot saved)
Phase 4: Completed (all 4 lessons written, snapshot saved)
Phase 5: Completed (all 5 lessons written, snapshot saved)
Phase 6: Completed (all 3 lessons written, snapshot saved)

<!-- All 37 lessons are complete. Next AI should review/polish or create course index page. -->
