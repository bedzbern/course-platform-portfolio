# Lesson 02-08: Project Grid

## Goal
Arrange project cards in a responsive grid using CSS Grid.

## What You Type

### 1. Update index.html — add classes to the project section

Add `class="project-grid"` to the div wrapping the cards and `class="project-card"` to each card div:

```html
<section id="projects">
  <div class="container">
    <h2>Projects</h2>
    <div class="project-grid">
      <div class="project-card">
        <h3>Project 1</h3>
        <p>Short description of your first project.</p>
        <a href="project-1.html">View Details →</a>
      </div>
      <!-- repeat for project 2, project 3 -->
    </div>
  </div>
</section>
```

### 2. Add to style.css

```css
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--paper);
  border: 4px solid var(--ink);
  text-align: center;
  transition: 0.2s;
  overflow: hidden;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `display: grid` | Turns the container into a CSS Grid |
| `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` | Creates columns that auto-wrap — see below |
| `gap: 24px` | Adds 24px space between grid items |
| `.project-card` | Styles each individual card |
| `border: 4px solid var(--ink)` | Thick black comic-book border |
| `overflow: hidden` | Keeps content from spilling outside the card's rounded... wait, we aren't using border-radius. But it clips any child that tries to overflow (like images). |

### The Magic Grid Formula

```css
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
```

This says: "Create as many columns as will fit, each at least 240px wide, and stretch them evenly to fill the row."

- On a wide screen: 3 columns, 3 cards in one row
- On a medium screen: 2 columns, cards wrap to 2 rows
- On a narrow screen: 1 column, cards stack vertically

## Try It

Resize the browser window. The cards should reflow from 3 columns → 2 → 1. This is responsive layout without writing a single media query.

## What You Learned

- [ ] `display: grid` creates a grid container
- [ ] `repeat(auto-fit, minmax(N, 1fr))` creates responsive columns
- [ ] `gap` controls spacing between grid items
- [ ] Grid automatically wraps items to new rows when they don't fit
