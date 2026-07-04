# Lesson 02-04: Nav Styling

## Goal
Make the navigation bar fixed to the top with dark background, red underline, and horizontal menu items.

## What You Type

### 1. Update index.html — add classes to the nav

Change your `<nav>` section:

```html
<nav>
  <div class="nav-inner">
    <span class="logo">PORTFOLIO</span>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
```

Only two changes: `class="nav-inner"` on the `<div>` and `class="logo"` on the `<span>`.

### 2. Add to style.css

```css
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--ink);
  border-bottom: 4px solid var(--red);
  z-index: 100;
}

.nav-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}

.logo {
  color: var(--paper);
  font-size: 1.2rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 16px;
}

nav a {
  color: var(--paper);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  transition: color 0.2s;
}

nav a:hover {
  color: var(--red);
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `position: fixed; top: 0; width: 100%` | Sticks the nav to the top of the viewport |
| `z-index: 100` | Keeps the nav above other content when scrolling |
| `.nav-inner` | A container that centers content and limits max width |
| `display: flex` | Lays out children (logo + ul) side by side |
| `justify-content: space-between` | Pushes logo left, menu right |
| `align-items: center` | Vertically centers both items |
| `nav ul { display: flex; list-style: none; gap: 16px }` | Makes list items horizontal, removes bullets, adds spacing |
| `text-decoration: none` | Removes the underline from links |
| `transition: color 0.2s` | Smoothly changes color over 0.2 seconds on hover |

## Try It

Refresh. Scroll down — the nav stays at the top. Hover over a link — it turns red. Resize the window — the nav items stay spaced correctly.

## What You Learned

- [ ] `position: fixed` makes an element stay on screen while scrolling
- [ ] `display: flex` creates a horizontal layout container
- [ ] `justify-content: space-between` spreads items apart
- [ ] `gap` adds spacing between flex items
- [ ] `transition` creates smooth hover animations
