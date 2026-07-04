# Lesson 03-03: Speech Bubble

## Goal
Wrap the tagline in a manga-style speech bubble with a tail pointing downward.

## What You Type

### 1. Update index.html — wrap tagline in speech bubble

Already done in lesson 03-01, but verify your hero section has this:

```html
<div class="speech-bubble">
  <p class="tagline">Title / Tagline</p>
</div>
```

### 2. Add to style.css

```css
#hero .speech-bubble {
  position: relative;
  display: inline-block;
  text-align: center;
  margin-bottom: 24px;
}

#hero .speech-bubble > .tagline {
  background: #fff;
  color: var(--ink);
  border: 4px solid var(--ink);
  padding: 10px 24px;
  position: relative;
  box-shadow: 4px 4px 0 var(--ink);
}

/* Speech bubble tail (ink border) */
#hero .speech-bubble::before {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 32px;
  border: 10px solid transparent;
  border-top-color: var(--ink);
}

/* Speech bubble tail (white fill) */
#hero .speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 35px;
  border: 8px solid transparent;
  border-top-color: #fff;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `#hero .speech-bubble` | Scopes the bubble to the hero section (won't affect other bubbles) |
| `#hero .speech-bubble > .tagline` | Styles the tagline INSIDE the bubble — the actual white card |
| `border: 4px solid var(--ink)` | Thick dark border for the comic-book outline |
| `box-shadow: 4px 4px 0 var(--ink)` | Hard shadow — no blur, just offset — adds depth like manga |
| `#hero .speech-bubble::before` | Creates the dark outer triangle (the tail outline) |
| `#hero .speech-bubble::after` | Creates the smaller white triangle (the tail fill) |
| `content: ''` | Required for pseudo-elements to render |
| `position: absolute` | Positions the tail relative to the bubble container |
| `bottom: -16px` | Places the tail below the bubble |
| `left: 32px` | Offsets the tail to the left side (not centered) |

### The CSS Triangle Trick

A zero-width/height element with one colored border creates a triangle:

```
border: 10px solid transparent;
border-top-color: var(--ink);
```

All four borders are 10px, but only the top has a color. The other three are invisible. The result is a triangle pointing downward.

The outer `::before` triangle is larger (10px) and dark (--ink). The inner `::after` triangle is smaller (8px) and white (#fff). Layered together, they create a framed arrow tail offset to the left side.

### Why Offset the Tail?

In manga, speech bubble tails usually point to the character's mouth, which is rarely centered. An offset tail (left side) feels more natural and dynamic than a perfectly centered one.

## Try It

Change `left` values on `::before` and `::after` to move the tail left/right. Switch `border-top-color` to `border-bottom-color` and adjust `bottom` values to point the tail upward instead.

## What You Learned

- [ ] `#hero .speech-bubble` scopes styles to a specific section
- [ ] `>` (child combinator) targets direct children only
- [ ] `::before` and `::after` create pseudo-elements attached to an element
- [ ] `position: absolute` positions relative to the nearest `position: relative` parent
- [ ] `box-shadow` with 0 blur creates hard-edged comic shadows
- [ ] Zero-width/height borders create CSS triangles
