# Lesson 05-04: Auto Nav Highlight

## Goal
Automatically highlight the correct nav link based on which page the user is on, using the IDs we added in nav.js.

## What You Type

Add this to `script.js`, after the project detail section:

```javascript
// ===== ACTIVE NAV LINK =====
const page = window.location.pathname.split('/').pop() || 'index.html';
document.getElementById('nav-home')?.classList.toggle('nav-active', page === 'index.html');
document.getElementById('nav-projects')?.classList.toggle('nav-active', page === 'project.html');
```

Also update the scroll nav section to use the same `page` variable:

```javascript
// ===== SCROLL NAV (home page only) =====
const isHome = page === 'index.html' || page.endsWith('index.html');
if (isHome) {
  // ... (existing scroll code)
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `document.getElementById('nav-home')` | Finds the nav link with `id="nav-home"` (set in nav.js) |
| `?.` (optional chaining) | Only calls `.classList.toggle` if the element exists |
| `classList.toggle('nav-active', condition)` | Adds `nav-active` if condition is true, removes otherwise |
| `page === 'index.html'` | True when on the home page — highlights "Home" |
| `page === 'project.html'` | True when on the detail page — highlights "Projects" |

### Before vs After

Before (Phase 4): The nav highlight only worked while scrolling on the home page. On project detail pages, the highlight didn't work.

After (Phase 5): When you open `project.html`, JavaScript detects the page name and immediately sets `.nav-active` on the "Projects" link. When you open `index.html`, it highlights "Home". Scrolling still works on the home page.

### The `?.` Operator

```javascript
document.getElementById('nav-home')?.classList.toggle(...)
```

`?.` is called optional chaining. If `getElementById` finds nothing (returns `null`), the `?.` stops the line from executing instead of throwing an error. This is important because nav.js might not have loaded yet, or the element ID might not exist.

## Combined script.js Structure (Phase 5)

```
1. PROJECT DATA (array)
2. GENERATE PROJECT CARDS (forEach loop)
3. LOAD PROJECT DETAIL (URL params)
4. ACTIVE NAV LINK (page detection)
5. SCROLL NAV (home page only)
6. FORM HANDLER (preventDefault + alert)
```

## Try It

Open `index.html` — "Home" is highlighted. Open `project.html?id=1` — "Projects" is highlighted. Scroll on the home page — the highlight follows as before.

## What You Learned

- [ ] `?.` optional chaining prevents null reference errors
- [ ] `window.location.pathname.split('/').pop()` extracts the current filename
- [ ] Page-based nav highlighting works independently of scroll-based highlighting
- [ ] A single `nav-active` class can be set by two different mechanisms
- [ ] Multiple JS features can coexist without conflict
