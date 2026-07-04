# Lesson 01-04: About Section

## Goal
Add an "About Me" section with a heading and paragraphs.

## What You Type

After the hero `</section>`, add this:

```html
<section>
  <h2>About Me</h2>
  <p>Write your bio here. Who you are, what you do, what you're passionate about.</p>
  <p>This will be your real story — not placeholder text from a template.</p>
</section>
```

## What's New

| Tag | Purpose |
|-----|---------|
| `<h2>` | A sub-heading. Less important than `<h1>`, more important than `<h3>` |

## Heading Hierarchy

```
<h1>  ── Page title (Hero name)         ← only one
<h2>  ── Section titles (About Me)      ← multiple allowed
<h3>  ── Card titles (Project names)    ← coming next lesson
```

This hierarchy isn't just for size — it's for **structure**. Screen readers and search engines use it to understand your page.

## Try It

- Write your real bio in your own words
- Add a third paragraph about what you're learning right now
- Open in browser — the About section appears below the hero

## What You Learned

- [ ] `<h2>` is a section-level heading
- [ ] Multiple `<p>` tags create multiple paragraphs
- [ ] Heading hierarchy: `<h1>` → `<h2>` → `<h3>`
