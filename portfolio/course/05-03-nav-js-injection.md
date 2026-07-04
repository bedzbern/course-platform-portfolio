# Lesson 05-03: Nav.js Injection

## Goal
Replace the nav HTML that's repeated in every page with a single `nav.js` file that injects the nav everywhere.

## What You Type

### 1. Create nav.js

Create a new file `nav.js`:

```javascript
document.write(`
<nav>
  <div class="nav-inner">
    <span class="logo">PORTFOLIO</span>
    <ul>
      <li><a href="index.html" id="nav-home">Home</a></li>
      <li><a href="index.html#projects" id="nav-projects">Projects</a></li>
      <li><a href="index.html#contact" id="nav-contact">Contact</a></li>
    </ul>
  </div>
</nav>
`);
```

### 2. Update index.html — replace nav with script tag

Remove the entire `<nav>...</nav>` block (18 lines) and replace with:

```html
<script src="nav.js"></script>
```

### 3. Update project.html — same change

Remove the nav from `project.html` and replace with the same `<script src="nav.js"></script>`.

## What Each Line Means

| Line | Purpose |
|------|---------|
| `document.write(`) | Writes a string directly into the HTML at the point where the script is placed |
| `` ` `` (backtick) | Template literal — allows multi-line strings |
| `<script src="nav.js"></script>` | Loads and executes nav.js, which writes the nav HTML |

### How It Works

1. The browser reads the HTML file top-to-bottom
2. When it hits `<script src="nav.js">`, it pauses and runs nav.js
3. `document.write()` inserts the nav HTML string into the page at that exact spot
4. The browser continues parsing the rest of the HTML

The result: the nav appears exactly where the `<script>` tag was, as if you had typed the nav HTML directly.

### The AH-HA Moment

Before: You had the same nav HTML in `index.html` AND `project-1.html` AND `project-2.html` AND `project-3.html`. Changing the nav meant editing 4 files.

After: The nav is in ONE file (`nav.js`). Change it once, every page updates. And now the nav has `id="nav-home"` and `id="nav-projects"` — these IDs let the JavaScript target specific nav items for highlighting (next lesson).

## Try It

Refresh both `index.html` and `project.html` — the nav looks exactly the same as before. Now add a new nav link in `nav.js` (like "Skills"), refresh — both pages have the new link.

## What You Learned

- [ ] `document.write()` injects HTML at the script's position
- [ ] Template literals (backtick strings) span multiple lines
- [ ] `<script src="...">` loads and executes an external JS file
- [ ] One source of truth for nav = change once, update everywhere
- [ ] Adding `id` attributes to nav links enables targeted JS
