# Lesson 01-02: Nav Bar

## Goal
Add a navigation bar with a logo and clickable links.

## What You Type

Inside `<body>` (before the empty space), add this:

```html
<nav>
  <div>
    <span>PORTFOLIO</span>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
```

## What Each Tag Means

| Tag | What It Is |
|-----|-----------|
| `<nav>` | A container for navigation links (semantic) |
| `<div>` | A generic box (used for layout) |
| `<span>` | Inline text (stays on the same line) |
| `<ul>` | Unordered list — bullet points |
| `<li>` | A single list item inside `<ul>` |
| `<a href="#">` | A link. `#` is a placeholder (goes nowhere yet) |

## Why This Structure

The nav has three levels:
1. **`<nav>`** — tells the browser "this is navigation"
2. **`<div>`** — groups the logo and links together so we can style them later
3. **`<ul>` / `<li>`** — a list of links (semantic and accessible)

## Try It

- Change "PORTFOLIO" to your own brand name
- Add a fourth nav link: "Skills"
- Open in browser — click the links (they won't go anywhere yet, that's fine)

## What You Learned

- [ ] `<nav>` is for navigation
- [ ] `<ul>` + `<li>` creates a list of links
- [ ] `<a href="#">` creates a clickable link
- [ ] `<div>` groups elements together
- [ ] `<span>` keeps text inline
