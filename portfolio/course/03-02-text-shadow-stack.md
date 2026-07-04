# Lesson 03-02: Text Shadow Stack

## Goal
Give the hero heading a bold manga-style text shadow — red and black offset layers.

## What You Type

Replace the existing `.hero-content h1` rule in `style.css`:

```css
.hero-content h1 {
  font-size: clamp(3rem, 12vw, 8rem);
  margin-bottom: 8px;
  text-shadow:
    4px 4px 0 var(--red),
    7px 7px 0 var(--ink);
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `text-shadow` | Adds shadows to text (like box-shadow but for letters) |
| `4px 4px 0 var(--red)` | First shadow: 4px right, 4px down, no blur, red color |
| `7px 7px 0 var(--ink)` | Second shadow: 7px right, 7px down, no blur, black color |

### Multi-Layer Shadow Trick

```css
text-shadow:
  first shadow,
  second shadow;
```

Shadows stack from bottom to top. The **last** shadow listed is the **bottommost** layer:
1. Bottom layer: black at 7px,7px
2. Top layer: red at 4px,4px

This creates a 3D effect where the text looks like it's floating above the page with a red glow and black outline.

### Why Zero Blur?

A manga/comic-book aesthetic uses hard-edged shadows, not soft blurs. `0` blur radius = sharp shadow edges. This matches the bold, crisp look of printed comics.

## Try It

Change the values temporarily:
- `text-shadow: 2px 2px 0 var(--red)` — smaller, subtle
- `text-shadow: 10px 10px 0 var(--ink)` — extreme, like a poster
- Add a third shadow with a different color

Change back when you're done.

## What You Learned

- [ ] `text-shadow` adds shadows to text characters
- [ ] Multiple shadows are comma-separated
- [ ] `0` blur = sharp comic-book shadow
- [ ] Stacking shadows creates a 3D floating effect
- [ ] The last shadow in the list is the bottommost layer
