# Lesson 04-03: Smooth Scroll

## Goal
Smooth-scroll to sections when nav links are clicked, instead of jumping instantly.

## What You Type

Add this to the end of `script.js`:

```javascript
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `navLinks.forEach(link => ...)` | Loops through all nav links (from the previous lesson) |
| `link.addEventListener('click', ...)` | Listens for a click on each nav link |
| `e.preventDefault()` | Stops the browser from instantly jumping (the default link behavior) |
| `this.getAttribute('href')` | Gets the `href` value from the clicked link (e.g., `"#about"`) |
| `document.querySelector(...)` | Finds the element with that ID |
| `target.scrollIntoView({ behavior: 'smooth' })` | Scrolls the element into view with smooth animation |

### CSS vs JavaScript Smooth Scroll

You already have `scroll-behavior: smooth` in your CSS (from lesson 02-01). That handles scrolling triggered by `<a href="#section">` links natively.

So why add JavaScript?
- CSS smooth scroll works automatically. But adding JS gives you more control:
  - You can add offset (account for the fixed nav bar)
  - You can add callbacks (do something after scroll finishes)
  - You can customize the animation timing

This lesson shows the JS approach as a learning exercise — for this project, the CSS method is sufficient.

### Why This Matters

Before `scroll-behavior: smooth` (which is relatively new), the only way to get smooth scrolling was JavaScript. This lesson teaches the underlying mechanism that CSS now handles automatically.

## Try It

Click any nav link (Home, About, Projects, etc.). The page should smoothly scroll to that section instead of jumping.

## What You Learned

- [ ] `scrollIntoView()` scrolls the browser to make an element visible
- [ ] `{ behavior: 'smooth' }` enables smooth animation
- [ ] `e.preventDefault()` stops the default jump-to behavior
- [ ] `this` inside an event listener refers to the element that was clicked
- [ ] CSS `scroll-behavior: smooth` does the same thing without JavaScript
