# Lesson 01-03: Hero Section

## Goal
Add a hero section — the big welcome area at the top of the page.

## What You Type

After the closing `</nav>` tag, add this:

```html
<section>
  <h1>Your Name</h1>
  <p>Title / Tagline</p>
  <a href="#">View My Work</a>
</section>
```

## What Each Tag Means

| Tag | Purpose |
|-----|---------|
| `<section>` | A themed group of content (like a chapter) |
| `<h1>` | The most important heading on the page |
| `<p>` | A paragraph of text |
| `<a href="#">` | Used here as a button (temporary placeholder) |

## Why This Order

1. **`<h1>`** comes first — it's the page's main heading. Search engines and screen readers look at this.
2. **`<p>`** follows — the subtitle supports the heading.
3. **`<a>`** at the bottom — the call-to-action button.

The hero should be the first thing visitors see after the nav.

## Try It

- Replace "Your Name" with your actual name
- Change "Title / Tagline" to something that describes you (e.g. "Web Developer & Designer")
- Open in browser — you'll see the text appear below the nav

## What You Learned

- [ ] `<section>` groups related content
- [ ] `<h1>` is the primary heading (one per page)
- [ ] `<p>` is for paragraphs
- [ ] Content order matters: heading → subtitle → action
