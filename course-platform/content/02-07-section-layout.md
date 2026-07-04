# Lesson 02-07: Section Layout

## Goal
Give each section consistent spacing, alternating background colors, and a centered content container.

## What You Type

### 1. Update index.html — add container divs

Add a `<div class="container">` inside each section that has content. For example, the About section changes from:

```html
<section id="about">
  <h2>About Me</h2>
  <div class="about-content">
    <p>Write your bio here...</p>
  </div>
</section>
```

to:

```html
<section id="about">
  <div class="container">
    <h2>About Me</h2>
    <div class="about-content">
      <p>Write your bio here...</p>
    </div>
  </div>
</section>
```

Do the same for Projects, Skills, and Contact sections (not Hero — it uses `.hero-content` instead).

### 2. Add to style.css

```css
section {
  padding: 80px 20px;
}

section:nth-child(even) {
  background: var(--paper);
}

section:nth-child(odd) {
  background: #e8e0d0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  letter-spacing: 3px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--red);
  margin: 10px auto 0;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `section { padding: 80px 20px; }` | Adds vertical breathing room inside every section |
| `section:nth-child(even)` | Selects every even-numbered section (2nd, 4th, 6th) |
| `section:nth-child(odd)` | Selects every odd-numbered section (1st, 3rd, 5th) |
| `.container` | Centers content and caps width at 900px |
| `max-width: 900px` | Prevents lines of text from getting too long |
| `margin: 0 auto` | The classic centering trick: auto left/right margins |
| `h2::after` | Creates a decorative red line under each section heading |
| `content: ''` | Required for `::after` to render (even when empty) |

## nth-child Behavior

Sections 1-6 in order are: Hero, About, Projects, Skills, Contact, Footer.
- Odd: Hero (#f5f0e8), Projects (#e8e0d0), Contact (#e8e0d0)
- Even: About (#f5f0e8), Skills (#e8e0d0), Footer (#f5f0e8)

This creates a subtle alternating strip effect.

## Try It

Resize the window — the content inside each section stays centered and doesn't go wider than 900px. Notice the red line under each `h2`.

## What You Learned

- [ ] `section { padding }` adds spacing inside sections
- [ ] `section:nth-child(even/odd)` alternates background colors
- [ ] `.container` with `max-width` + `margin: 0 auto` centers content
- [ ] `::after` creates decorative elements after content
- [ ] `position: relative` is needed for certain positioning tricks later
