# Lesson 01-06: Skills Section

## Goal
Add a Skills section with labels and progress bar placeholders.

## What You Type

After the Projects `</section>`, add this:

```html
<section>
  <h2>Skills</h2>
  <div>
    <div>
      <span>HTML & CSS</span>
      <div><div></div></div>
    </div>
    <div>
      <span>JavaScript</span>
      <div><div></div></div>
    </div>
    <div>
      <span>Python</span>
      <div><div></div></div>
    </div>
  </div>
</section>
```

## The Double Div Trick

```html
<div>         ← The bar track (background)
  <div></div>  ← The fill (colored portion)
</div>
```

The **outer div** is the background track. The **inner div** is the colored fill. Later in CSS, we'll give the inner div a width (like `width: 80%`) to show skill level. But for now, it's just an empty div inside another div.

## `<span>` vs `<div>`

- `<span>` — inline (stays on same line, only as wide as its text)
- `<div>` — block (takes full width, forces a new line)

Here, `<span>` is perfect for the skill label because it should sit next to other content rather than taking the whole line.

## Try It

- Add a 4th skill (e.g. "React")
- Change the skill names to match what you actually know
- Open in browser — you'll see labels with empty boxes next to them

## What You Learned

- [ ] `<span>` is for inline text
- [ ] Nested divs create structured components (bar track → fill)
- [ ] `<div>` is block-level, `<span>` is inline-level
