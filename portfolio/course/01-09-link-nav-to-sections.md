# Lesson 01-09: Link Nav to Sections

## Goal
Make the nav links actually scroll to each section.

## What You Change

### Step 1: Add `id` to each section

Find each `<section>` tag and add a unique `id`:

```html
<section id="hero">
<section id="about">
<section id="projects">
<section id="skills">
<section id="contact">
```

### Step 2: Update nav links

Replace the `#` placeholders with the matching `id`:

```html
<a href="#hero">Home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
```

Also update the hero "View My Work" button:

```html
<a href="#projects">View My Work</a>
```

## How It Works

```html
<tag id="projects">     ← target (the destination)
<a href="#projects">    ← link (the clickable thing)
```

The `href="#projects"` tells the browser:
1. Look for an element with `id="projects"`
2. Scroll the page so that element is at the top

The `#` symbol means "same page, different spot."

## Why `id` Must Be Unique

You can't have two elements with the same `id`:

```html
<!-- WRONG: two elements with id="projects" -->
<section id="projects">...</section>
<div id="projects">...</div>

<!-- CORRECT: each id is unique -->
<section id="projects">...</section>
<div id="portfolio">...</div>
```

If you do, the browser won't know which one to scroll to.

## Try It

- Click each nav link and watch the page scroll
- Add `id="top"` to the hero section, then add a "Back to Top" link in the footer: `<a href="#top">Back to Top</a>`
- Open in browser — clicking nav links now scrolls smoothly

## What You Learned

- [ ] `id` gives an element a unique name
- [ ] `href="#idname"` scrolls to that element
- [ ] IDs must be unique (no duplicates)
- [ ] Same-page navigation uses `#` before the id
