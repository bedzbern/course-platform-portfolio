# Lesson 02-09: Project Card Hover

## Goal
Add images to project cards and make them lift up with a shadow on hover.

## What You Type

### 1. Update index.html — add images inside project cards

Add an `<img>` tag at the top of each `.project-card`:

```html
<div class="project-card">
  <img src="https://picsum.photos/seed/project1/400/250" alt="Project 1" loading="lazy">
  <h3>Project 1</h3>
  <p>Short description of your first project.</p>
  <a href="project-1.html">View Details →</a>
</div>
```

Do the same for project 2 (`seed/project2`) and project 3 (`seed/project3`).

### 2. Add to style.css

```css
.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--ink);
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  border-bottom: 3px solid var(--ink);
}

.project-card h3 {
  font-size: 1.3rem;
  margin: 16px 0 8px;
  padding: 0 16px;
}

.project-card p {
  font-size: 0.9rem;
  color: var(--gray);
  padding: 0 16px 16px;
}

.project-card a {
  display: inline-block;
  margin: 0 16px 20px;
  padding: 6px 16px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid var(--ink);
  transition: 0.2s;
}

.project-card a:hover {
  background: var(--red);
  border-color: var(--red);
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `transform: translate(-4px, -4px)` | Moves the card 4px up and left on hover |
| `box-shadow: 8px 8px 0 var(--ink)` | A hard-edged shadow (no blur) — comic-book style |
| `object-fit: cover` | Crops the image to fill 180px height without stretching |
| `width: 100%` | Makes the image fill the card width |
| `display: block` | Removes the small gap below images (they're inline by default) |
| `loading="lazy"` | Tells the browser "load this image only when it's near the viewport" |

### The Hover Effect

```css
.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--ink);
}
```

The card shifts diagonally and a hard shadow appears beneath it. This creates a "popping off the page" effect. It pairs with the `transition: 0.2s` on `.project-card` (added in lesson 02-08) to animate smoothly.

## Try It

Hover over each card. It should shift up-left and cast a shadow. Click the "View Details" link — notice the hover color change.

## What You Learned

- [ ] `:hover` triggers styles when the mouse is over an element
- [ ] `transform: translate()` moves an element from its normal position
- [ ] `box-shadow` creates a hard comic-book shadow with zero blur
- [ ] `object-fit: cover` prevents image distortion
- [ ] `loading="lazy"` defers off-screen image loading
