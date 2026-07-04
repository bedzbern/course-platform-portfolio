# Lesson 02-10: Skills + Contact + Footer

## Goal
Style the remaining sections: skill bars, contact form, and the footer.

## What You Type

### 1. Update index.html — add classes to Skills section

Add `class="skill-list"` to the outer div, and `class="skill"`, `class="bar"`, `class="fill"` to the nested divs:

```html
<section id="skills">
  <div class="container">
    <h2>Skills</h2>
    <div class="skill-list">
      <div class="skill">
        <span>HTML & CSS</span>
        <div class="bar"><div class="fill" style="width:80%"></div></div>
      </div>
      <div class="skill">
        <span>JavaScript</span>
        <div class="bar"><div class="fill" style="width:60%"></div></div>
      </div>
      <!-- repeat for other skills -->
    </div>
  </div>
</section>
```

### 2. Add to style.css

```css
.skill-list {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill span {
  font-weight: 700;
  font-size: 0.9rem;
}

.bar {
  height: 14px;
  background: var(--light-gray);
  border: 2px solid var(--ink);
}

.fill {
  height: 100%;
  background: var(--red);
  transition: width 0.6s ease;
}

form {
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input, textarea {
  padding: 12px 14px;
  border: 3px solid var(--ink);
  background: var(--paper);
  font-family: inherit;
  font-size: 0.95rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

form .btn {
  align-self: flex-start;
  border-color: var(--ink);
}

form .btn:hover {
  border-color: var(--red);
}

footer {
  text-align: center;
  padding: 28px 20px;
  background: var(--ink);
  color: var(--paper);
  border-top: 4px solid var(--red);
}

footer p {
  font-size: 0.85rem;
  letter-spacing: 1px;
}

@media (max-width: 600px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  nav ul {
    gap: 8px;
  }

  nav a {
    font-size: 0.75rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `flex-direction: column` | Stacks items vertically instead of horizontally |
| `.bar` | The gray background track of a progress bar |
| `.fill` | The red foreground that fills the bar |
| `width:80%` (inline) | Controls how full each bar is (80%, 60%, 50%) |
| `font-family: inherit` | Makes inputs use the same font as the page |
| `resize: vertical` | Lets users resize the textarea but only vertically |
| `align-self: flex-start` | Keeps the button from stretching full width |
| `@media (max-width: 600px)` | Applies styles only when screen is ≤600px wide |

### The Media Query

```css
@media (max-width: 600px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

This ensures that even on very small screens, the project grid collapses to a single column. (The `auto-fit` formula usually handles this, but `1fr` makes it explicit.)

## Try It

Resize the window to under 600px — the heading shrinks and the project cards stack in one column. Type in the form fields and see the thick borders.

## What You Learned

- [ ] `flex-direction: column` stacks items vertically
- [ ] Nested divs with percentage widths create progress bars
- [ ] `font-family: inherit` keeps form inputs consistent with page text
- [ ] `resize: vertical` controls textarea resizing
- [ ] `@media (max-width: 600px)` adds responsive breakpoints
