# Lesson 05-02: Dynamic Project Page

## Goal
Replace 3 separate HTML files with a single `project.html` that loads different content based on a URL parameter (`?id=1`).

## What You Type

### 1. Create project.html

Create a new file `project.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project — Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <script src="nav.js"></script>

  <section class="page-hero">
    <div class="hero-content">
      <div class="chapter-badge">— PROJECT DETAIL —</div>
      <h1 id="detail-title">Project</h1>
      <div class="red-divider"></div>
      <p class="page-subtitle" id="detail-tagline">Project details</p>
    </div>
  </section>

  <section>
    <div class="container project-detail">
      <a href="index.html#projects" class="back-link">← Back to Projects</a>
      <img id="detail-image" src="" alt="" class="detail-image" loading="lazy">
      <div class="detail-body">
        <div class="detail-description">
          <h3>About This Project</h3>
          <p id="detail-description">Loading...</p>
        </div>
        <div class="detail-sidebar">
          <div class="tech-list">
            <h3>Tech Stack</h3>
            <p id="detail-tech">Loading...</p>
          </div>
          <div class="detail-links">
            <a href="#" class="btn" id="detail-demo">Live Demo</a>
            <a href="#" class="btn" id="detail-github">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Your Name</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### 2. Update script.js — add project detail loader

Add to the end of `script.js`:

```javascript
// ===== LOAD PROJECT DETAIL =====
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const project = projects.find(p => p.id === id);

if (project) {
  document.title = project.title + ' — Portfolio';
  document.getElementById('detail-title').textContent = project.title;
  document.getElementById('detail-tagline').textContent = project.tagline;
  document.getElementById('detail-image').src = project.img;
  document.getElementById('detail-image').alt = project.title;
  document.getElementById('detail-description').textContent = project.desc;
  document.getElementById('detail-tech').innerHTML = project.tech
    .map(t => `<span>${t}</span>`)
    .join(' ');
}
```

Also update the `projects` array to include `tagline` and `img` fields:

```javascript
const projects = [
  {
    id: 1,
    title: 'Project 1',
    tagline: 'A short tagline for this project',
    desc: 'Detailed description of your first project...',
    img: 'https://picsum.photos/seed/project1/800/400',
    thumb: 'https://picsum.photos/seed/project1/400/250',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  // ... same for project 2, 3
];
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `URLSearchParams(window.location.search)` | Reads the query string from the URL (the `?id=1` part) |
| `params.get('id')` | Gets the value of the `id` parameter (e.g., `"1"`) |
| `parseInt(...)` | Converts the string `"1"` to the number `1` |
| `projects.find(p => p.id === id)` | Finds the project object where `id` matches |
| `document.getElementById('detail-title')` | Finds the empty element by ID to fill it |
| `textContent` | Sets the text content (safe — no HTML injection) |
| `innerHTML = ... .join(' ')` | Joins the tech array into an HTML string |

### What Changed

The three separate files (`project-1.html`, `project-2.html`, `project-3.html`) are now replaced by one dynamic `project.html`. Keep the old files as legacy reference — they show the "before" state of the evolution. You won't link to them from the nav anymore, but they're useful to compare how far you've come.

## Try It

Open `project.html?id=1` in your browser — it shows Project 1. Change to `project.html?id=2` — it shows Project 2. Open `project.html?id=99` — it shows "Loading..." because there's no project with id 99.

## What You Learned

- [ ] `URLSearchParams` reads query string parameters from the URL
- [ ] `Array.find()` returns the first element matching a condition
- [ ] `document.getElementById().textContent` sets element text
- [ ] `.map()` + `.join(' ')` converts arrays to HTML strings
- [ ] One dynamic page replaces many static pages
