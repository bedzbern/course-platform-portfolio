# Lesson 04-04: Page Detection

## Goal
Detect which page the user is on and only run the scroll-highlight code on the home page.

## What You Type

Replace the existing `script.js` with this combined version:

```javascript
// ===== PAGE DETECTION =====
const page = window.location.pathname.split('/').pop() || 'index.html';

// ===== SCROLL NAV (home page only) =====
const isHome = page === 'index.html' || page.endsWith('index.html');
if (isHome) {
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
}

// ===== FORM HANDLER =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! (Form handler coming soon)');
  });
}
```

## What Each Line Means

### Page Detection
| Line | Purpose |
|------|---------|
| `window.location.pathname` | Gets the path part of the URL (e.g., `/portfolio/index.html` or `/project-1.html`) |
| `.split('/')` | Splits the path into parts: `['', 'portfolio', 'index.html']` |
| `.pop()` | Gets the last part: `'index.html'` |
| `|| 'index.html'` | If `pop()` returns empty (e.g., URL ends with `/`), default to `'index.html'` |

### Why Page Detection Matters

The scroll-highlight code only works on the home page (index.html) because:
1. The project detail pages don't have all the sections with IDs
2. The nav links on detail pages point to `index.html#section` (cross-page), not `#section` (same-page)
3. Running scroll detection on a page without those elements would cause errors

The `isHome` check wraps the scroll code so it only executes when appropriate.

## Complete script.js Structure

```
1. Page detection (runs immediately)
    ↓
2. Scroll nav highlight (only on home page)
    ↓
3. Form handler (only on pages with a form)
```

Each section is independent and guarded by a condition.

## Try It

Open the browser console (F12 → Console) and type `console.log(page)` — it should show `"index.html"`. Navigate to a project detail page and check again — it should show `"project-1.html"`.

## What You Learned

- [ ] `window.location.pathname` returns the URL path
- [ ] `.split()` + `.pop()` extracts the filename from a path
- [ ] Code can be conditionally executed based on the current page
- [ ] Guard clauses (`if (isHome)`, `if (form)`) prevent errors
- [ ] A well-organized script has clear, labeled sections
