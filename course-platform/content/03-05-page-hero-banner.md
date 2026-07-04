# Lesson 03-05: Page Hero Banner

## Goal
Create a shorter hero banner for the project detail pages, and add styled tech tags and card links.

## What You Type

### 1. Update project-1.html — replace the hero section

Replace the plain `<section>` that wraps the project content with a page-hero banner + content section:

```html
<section class="page-hero">
  <div class="hero-content">
    <div class="chapter-badge">— PROJECT DETAIL —</div>
    <h1>Project 1</h1>
    <div class="red-divider"></div>
    <p class="page-subtitle">A short tagline for this project</p>
  </div>
</section>

<section>
  <div class="container">
    <p><a href="index.html#projects" style="color:var(--red)">← Back to Projects</a></p>
    <img src="https://picsum.photos/seed/project1/800/400" alt="Project 1" style="max-width:100%;border:4px solid var(--ink);margin:20px 0">
    <h3>About This Project</h3>
    <p>Detailed description...</p>
    <h3>Tech Stack</h3>
    <p>
      <span style="display:inline-block;padding:4px 12px;border:2px solid var(--ink);margin:4px">HTML</span>
      <span style="display:inline-block;padding:4px 12px;border:2px solid var(--ink);margin:4px">CSS</span>
      <span style="display:inline-block;padding:4px 12px;border:2px solid var(--ink);margin:4px">JavaScript</span>
    </p>
    <p style="margin-top:20px">
      <a href="#" class="btn">Live Demo</a>
      <a href="#" class="btn">GitHub</a>
    </p>
  </div>
</section>
```

Update `project-2.html` and `project-3.html` the same way with their own content.

### 2. Add to style.css

```css
.page-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image:
    linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
}

.page-hero .chapter-badge {
  margin-bottom: 12px;
}

.page-subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-top: 8px;
}
```

### 3. Add card-link style for project cards

Also add to style.css for the project card "View Details" links:

```css
.card-link {
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

.card-link:hover {
  background: var(--red);
  border-color: var(--red);
}
```

Then update each `project-card` link in `index.html` to use `class="card-link"`:

```html
<a href="project-1.html" class="card-link">View Details →</a>
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `.page-hero { min-height: 40vh }` | Only 40% of viewport — shorter than the main hero (100vh) |
| `.page-hero .chapter-badge` | Smaller margin for badge in the tighter hero |
| `style="max-width:100%;border:4px solid var(--ink)"` | Inline styles keep the image from overflowing |
| `style="display:inline-block;padding:4px 12px;border:2px solid var(--ink)"` | Creates tech-stack tag pills using inline styles |
| `.card-link` | Reusable styled link for project cards (replaces the naked `<a>`) |

### Why Inline Styles Here?

In Phase 3, we use inline `style=""` attributes for the tech tags and project images because we haven't introduced a dedicated project detail CSS section yet. The inline styles are temporary — they'll be replaced by proper CSS in Phase 5.

## Try It

Click "View Details →" on any project card. The project detail page now has a proper manga-styled banner. Update `project-2.html` and `project-3.html` the same way.

## What You Learned

- [ ] `.page-hero` reuses the hero styling pattern at 40vh height
- [ ] `style="..."` attributes apply CSS directly in HTML (inline)
- [ ] `<span>` elements with borders make good tag/chip components
- [ ] `.card-link` gives project card links consistent styling
- [ ] Detail pages need the same visual language as the home page
