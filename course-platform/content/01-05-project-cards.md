# Lesson 01-05: Project Cards

## Goal
Add a Projects section with three cards showing your work.

## What You Type

After the About `</section>`, add this:

```html
<section>
  <h2>Projects</h2>
  <div>
    <div>
      <h3>Project 1</h3>
      <p>Short description of your first project.</p>
      <a href="#">View Details →</a>
    </div>
    <div>
      <h3>Project 2</h3>
      <p>Short description of your second project.</p>
      <a href="#">View Details →</a>
    </div>
    <div>
      <h3>Project 3</h3>
      <p>Short description of your third project.</p>
      <a href="#">View Details →</a>
    </div>
  </div>
</section>
```

## Nested Structure

This is the deepest nesting so far:

```
section
  └─ h2
  └─ div (grid container)
       └─ div (card 1)
            └─ h3
            └─ p
            └─ a
       └─ div (card 2)
            └─ h3
            └─ p
            └─ a
       └─ div (card 3)
            └─ h3
            └─ p
            └─ a
```

Each project card is a `<div>` containing a title (`<h3>`), description (`<p>`), and link (`<a>`). The outer `<div>` will later become a CSS Grid container.

## Why `<h3>`?

Projects are inside the Projects section (`<h2>`). Each project title is one level deeper, so it uses `<h3>`. This keeps the heading hierarchy correct.

## Try It

- Replace the project names and descriptions with your real projects
- Add a 4th project card (copy the pattern)
- Open in browser — the cards stack vertically (we'll make them a grid later)

## What You Learned

- [ ] Nested `<div>`s create card structures
- [ ] `<h3>` is one level below `<h2>`
- [ ] Cards follow a pattern: heading → text → link
