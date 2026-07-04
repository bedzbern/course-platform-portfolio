# Lesson 03-01: Chapter Badge

## Goal
Add a small manga-style chapter label above the hero name.

## What You Type

### 1. Update index.html — add the chapter badge

Inside the hero section, above the `<h1>`, add a `<div class="chapter-badge">` and a `<div class="red-divider">` between the h1 and the tagline:

```html
<section id="hero">
  <div class="hero-content">
    <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
    <h1>Your Name</h1>
    <div class="red-divider"></div>
    <div class="speech-bubble">
      <p class="tagline">Title / Tagline</p>
    </div>
    <a href="#projects" class="btn-cta">VIEW MY WORK ↓</a>
  </div>
</section>
```

(Don't worry about `.speech-bubble` and `.btn-cta` — they come in lessons 03-03 and 03-04.)

### 2. Add to style.css

```css
.chapter-badge {
  display: inline-block;
  background: var(--paper);
  color: var(--ink);
  padding: 6px 16px;
  margin-bottom: 20px;
  border: 3px solid var(--ink);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.red-divider {
  width: 80px;
  height: 6px;
  background: var(--red);
  margin: 16px auto;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `display: inline-block` | Makes the badge shrink-wrap around its text (doesn't stretch full width) |
| `background: var(--paper)` | Light paper background stands out against the dark hero background |
| `border: 3px solid var(--ink)` | Thick dark border for comic-book contrast |
| `letter-spacing: 4px` | Spreads out the CHAPTER text for a comic-book feel |
| `font-family: 'Noto Sans JP', sans-serif` | Keeps the badge in the sans-serif font (not the display font) |
| `-- CHAPTER 01: THE PROTAGONIST --` | The em-dashes (—) make it look like a manga chapter title |
| `.red-divider` | A thin red line that separates visual sections in the hero |

## Where It Goes In The Stacks

```
chapter-badge (small, dark, red border)
  ↓
h1 (massive name)
  ↓
red-divider (thin red line)
  ↓
speech-bubble (coming in lesson 03-03)
  ↓
btn-cta (coming in lesson 03-04)
```

## Try It

Change the badge text to "— CHAPTER 02: THE JOURNEY —" and refresh. Change the `--ink` variable in `:root` to see the badge border change too.

## What You Learned

- [ ] `display: inline-block` wraps tightly around content
- [ ] `letter-spacing` controls character spacing
- [ ] An empty `<div>` with `width` + `height` acts as a visual line
- [ ] Em-dashes (—) add a comic-book chapter feel
