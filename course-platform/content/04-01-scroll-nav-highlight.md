# Lesson 04-01: Scroll Nav Highlight

## Goal
Highlight the current section's nav link as the user scrolls through the page.

## What You Type

### 1. Add script.js to index.html

Add this line just before `</body>`:

```html
<script src="script.js"></script>
```

### 2. Create script.js

Create a new file called `script.js` in the same folder. Type this:

```javascript
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('nav-active', link.getAttribute('href') === '#' + current);
  });
});
```

### 3. Add nav-active style to style.css

```css
.nav-active {
  color: var(--red) !important;
  border-bottom: 2px solid var(--red);
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `document.querySelectorAll('section[id]')` | Gets every section that has an `id` attribute |
| `document.querySelectorAll('nav a[href^="#"]')` | Gets all nav links that start with `#` (anchor links) |
| `window.addEventListener('scroll', ...)` | Runs the code every time the user scrolls |
| `section.offsetTop - 120` | The section's top position, minus 120px offset (nav height buffer) |
| `window.scrollY` | How many pixels the user has scrolled down |
| `link.getAttribute('href') === '#' + current` | Checks if the link's href matches the current section's id |
| `classList.toggle('nav-active', condition)` | Adds `nav-active` if condition is true, removes it if false |

### How It Works

1. On every scroll event, loop through all sections
2. For each section, check: "Have I scrolled past this section's top?"
3. The last section you scrolled past is the "current" section
4. Loop through all nav links, toggle `.nav-active` on the matching link
5. `offsetTop - 120` accounts for the fixed nav bar height so the link switches slightly before you reach each section

## Try It

Refresh and scroll down. The nav link for each section should highlight in red as you scroll. Scroll back up — the highlight should follow.

## What You Learned

- [ ] `querySelectorAll` selects multiple elements by CSS selector
- [ ] `window.addEventListener('scroll', ...)` detects scrolling
- [ ] `offsetTop` gives an element's distance from the top of the page
- [ ] `scrollY` gives how far the user has scrolled
- [ ] `classList.toggle` adds/removes a class based on a condition
