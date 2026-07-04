# Lesson 02-06: Hero Typography

## Goal
Make the hero heading massive and responsive, style the tagline, and create a button.

## What You Type

### 1. Update index.html — add two classes

In the hero section, add `class="tagline"` to the `<p>` and change the `<a>` to include `class="btn"`:

```html
<section id="hero">
  <div class="hero-content">
    <h1>Your Name</h1>
    <p class="tagline">Title / Tagline</p>
    <a href="#projects" class="btn">View My Work ↓</a>
  </div>
</section>
```

### 2. Add to style.css

```css
.hero-content h1 {
  font-size: clamp(3rem, 12vw, 8rem);
  margin-bottom: 8px;
}

.tagline {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 28px;
}

.btn {
  display: inline-block;
  background: var(--red);
  color: var(--paper);
  padding: 12px 28px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  border: 3px solid var(--paper);
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: var(--paper);
  color: var(--ink);
  border-color: var(--paper);
}
```

## What Each Line Means

### clamp()
| Line | Purpose |
|------|---------|
| `clamp(3rem, 12vw, 8rem)` | Sets font size with a minimum (3rem), preferred (12vw), and maximum (8rem) |
| `3rem` | Smallest the heading will ever be (48px) |
| `12vw` | 12% of viewport width — scales with window size |
| `8rem` | Largest the heading will ever be (128px) |

### Button styling
| Line | Purpose |
|------|---------|
| `.btn` | A reusable class for any button-like element |
| `display: inline-block` | Behaves like a block but stays inline (allows padding) |
| `border: 3px solid var(--paper)` | Thick white border around the red button |
| `cursor: pointer` | Changes mouse cursor to a hand on hover |
| `.btn:hover` | Swaps background and text colors on hover |

## The Transition Property

```css
transition: 0.2s;
```

Without `transition`, the hover color swap would be instant and jarring. With it, the colors blend smoothly over 0.2 seconds.

## Try It

Refresh. The heading should shrink and grow as you resize the browser. Hover over the button — it flips from red to white.

## What You Learned

- [ ] `clamp(min, preferred, max)` creates responsive font sizes
- [ ] `vw` units scale with viewport width
- [ ] `rem` units are relative to the root font size
- [ ] `.btn` pattern creates reusable styled buttons
- [ ] `transition` smooths property changes on hover
