# Lesson 04-02: Contact Form Handler

## Goal
Intercept the form submission to prevent page reload and show a confirmation message.

## What You Type

Add this to the end of `script.js`:

```javascript
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! (Form handler coming soon)');
  });
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `document.querySelector('form')` | Finds the first `<form>` element on the page |
| `if (form) { ... }` | Only runs the code if a form exists (prevents errors on pages without a form) |
| `form.addEventListener('submit', function(e) { ... })` | Listens for the "submit" event on the form |
| `e` | The event object — contains info about what just happened |
| `e.preventDefault()` | Stops the browser from reloading the page (the default form behavior) |
| `alert('...')` | Shows a popup dialog box with your message |

### Why preventDefault?

When a form submits, the browser's default action is to:
1. Collect the form data
2. Send it to the URL in the `action` attribute (or reload the page if none)
3. Navigate away from the current page

We don't want that yet — we'll add real form handling in Phase 5. For now, we stop the default behavior and show a friendly message.

### The `if (form)` Guard

The project detail pages (project-1.html, etc.) don't have a form. Without the `if (form)` check, JavaScript would try to add an event listener to `null` (no element found), causing an error that could break other scripts.

## Try It

Fill in the form fields and click "Send". Instead of reloading, a popup should appear with your message. Press OK to dismiss it.

## What You Learned

- [ ] `document.querySelector('form')` finds a form element
- [ ] `addEventListener('submit', ...)` runs code when a form is submitted
- [ ] `e.preventDefault()` stops the browser's default form behavior
- [ ] `alert()` shows a dialog popup
- [ ] The `if (element)` guard prevents errors when the element doesn't exist
