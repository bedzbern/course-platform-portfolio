# Lesson 03-04: Ink-Stamp CTA

## Goal
Replace the plain button with a bold, comic-book-style "ink stamp" call-to-action.

## What You Type

### 1. Update index.html — change btn to btn-cta

Update the hero CTA link from `class="btn"` to `class="btn-cta"`:

```html
<a href="#projects" class="btn-cta">VIEW MY WORK ↓</a>
```

### 2. Add to style.css

```css
.btn-cta {
  display: inline-block;
  background: var(--red);
  color: var(--paper);
  padding: 16px 36px;
  font-size: 1rem;
  font-weight: 900;
  text-decoration: none;
  border: 3px solid var(--paper);
  box-shadow: 6px 6px 0 var(--ink);
  transition: 0.15s;
  letter-spacing: 2px;
}

.btn-cta:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--ink);
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `font-weight: 900` | Extra bold — thicker than the regular `.btn` |
| `box-shadow: 6px 6px 0 var(--ink)` | Hard shadow like the text-shadow on the heading |
| `padding: 16px 36px` | Larger padding than `.btn` (was 12px 28px) |
| `letter-spacing: 2px` | Spreads out the all-caps text |
| `.btn-cta:hover` | On hover, the button shifts 3px down/right |
| `box-shadow: 3px 3px 0 var(--ink)` | Shadow shrinks as if the button is being pressed |

### The "Press" Effect

When you hover over the button:
1. It moves down-right by 3px (`translate(3px, 3px)`)
2. The shadow shrinks by 3px (from 6px to 3px)

This simulates pressing a physical rubber stamp into paper — the button looks like it's being pushed down, reducing the gap between the "stamp" and its shadow.

## Compare: .btn vs .btn-cta

| Feature | .btn (Phase 2) | .btn-cta (Phase 3) |
|---------|---------------|-------------------|
| Weight | 700 (bold) | 900 (extra bold) |
| Padding | 12px 28px | 16px 36px |
| Shadow | none | 6px 6px 0 var(--ink) |
| Hover effect | color swap | press (move + shrink shadow) |

## Try It

Hover over the CTA button. Feel the "stamp press" effect. Change `box-shadow` to `10px 10px 0 var(--ink)` for a more dramatic look.

## What You Learned

- [ ] `box-shadow` with 0 blur creates hard-edged comic shadows
- [ ] `translate()` shifts an element on hover for interactivity
- [ ] Combining position shift + shadow change creates a press effect
- [ ] Font weight 900 is the boldest available weight
- [ ] `letter-spacing` makes all-caps text more readable
