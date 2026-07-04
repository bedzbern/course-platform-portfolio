# Lesson 01-10: Project Detail Pages

## Goal
Create separate HTML pages for each project so clicking "View Details" shows the full story.

## What You Create

Create three new files: `project-1.html`, `project-2.html`, `project-3.html`.

### project-1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Project 1 — Portfolio</title>
</head>
<body>

  <nav>
    <div>
      <span>PORTFOLIO</span>
      <ul>
        <li><a href="index.html#hero">Home</a></li>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#projects">Projects</a></li>
        <li><a href="index.html#skills">Skills</a></li>
        <li><a href="index.html#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section>
    <a href="index.html#projects">← Back to Projects</a>
    <h1>Project 1</h1>
    <p>A short tagline for this project</p>
    <img src="https://picsum.photos/seed/project1/800/400" alt="Project 1" style="max-width:100%">
    <h3>About This Project</h3>
    <p>Detailed description of your project. What it does, why you built it, what you learned.</p>
    <h3>Tech Stack</h3>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <br><br>
    <a href="#">Live Demo</a>
    <a href="#">GitHub</a>
  </section>

  <footer>
    <p>&copy; 2026 Your Name</p>
  </footer>

</body>
</html>
```

Create `project-2.html` and `project-3.html` with the same structure but different content, different image seed (`project2`, `project3`), and different tech stacks.

### Update index.html

Change the "View Details" links from `#` to the real page:

```html
<a href="project-1.html">View Details →</a>
<a href="project-2.html">View Details →</a>
<a href="project-3.html">View Details →</a>
```

## Cross-Page Linking

```html
<a href="index.html#projects">← Back to Projects</a>
```

This link does TWO things:
1. `index.html` — opens the home page
2. `#projects` — scrolls to the Projects section

This is how you link to a specific spot on a different page.

## The `<img>` Tag

```html
<img src="url" alt="description">
```

- `src` — the image URL (where the image lives)
- `alt` — text description (for accessibility, shows if image fails)
- `style="max-width:100%"` — keeps the image from overflowing (temporary, CSS later)

The `picsum.photos` URLs are placeholder images — replace them with your own screenshots later.

## Try It

- Click "View Details →" on any project card — it opens a new page
- Click "← Back to Projects" on the detail page — it returns to the home page
- Add a 4th project: create `project-4.html` and add a card in `index.html`

## What You Learned

- [ ] Multiple `.html` files = multiple pages
- [ ] `href="page.html#section"` links to a specific spot on another page
- [ ] `<img>` displays images with `src` and `alt`
- [ ] Placeholder images (picsum.photos) work as temporary content
