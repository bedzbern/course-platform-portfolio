# Lesson 02-05: Hero Background

## Goal
Turn the hero section into a full-screen banner with a background image and dark overlay.

## What You Type

Add to `style.css`:

```css
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image:
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
  padding: 20px;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `min-height: 100vh` | At least 100% of the viewport height (vh = viewport height) |
| `display: flex; align-items: center; justify-content: center` | Centers content both vertically and horizontally |
| `text-align: center` | Centers the text inside |
| `background-image: linear-gradient(...), url(...)` | TWO backgrounds: dark overlay ON TOP of the image (comma-separated) |
| `rgba(0,0,0,0.65)` | Black color with 65% opacity — darkens the image |
| `url('...')` | A placeholder background image from picsum.photos |
| `background-size: cover` | Scales the image to fill the area (may crop edges) |
| `background-position: center` | Centers the image so the middle is always visible |
| `color: var(--paper)` | Light text so it's readable on dark overlay |
| `border-bottom: 4px solid var(--ink)` | A dark line separating hero from the next section |

## The Comma Trick

```css
background-image: gradient, image;
```

The first item renders on top. So the gradient (dark overlay) sits above the image, darkening it so white text is readable. Without the overlay, text would compete with the image.

## Try It

Refresh. Your hero should fill the screen with a background image and centered text. Replace the URL with your own image (like `url('my-photo.jpg')`) if you have one.

## What You Learned

- [ ] `100vh` = full viewport height
- [ ] `background-image` accepts multiple values, comma-separated
- [ ] `linear-gradient(rgba(...))` creates a semi-transparent overlay
- [ ] `background-size: cover` fills the area without stretching
- [ ] Flexbox centering: `display: flex` + `align-items` + `justify-content`
