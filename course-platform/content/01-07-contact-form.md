# Lesson 01-07: Contact Form

## Goal
Add a contact form with text inputs and a message area.

## What You Type

After the Skills `</section>`, add this:

```html
<section>
  <h2>Contact</h2>
  <form>
    <input type="text" placeholder="Your Name">
    <input type="email" placeholder="Your Email">
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Send</button>
  </form>
</section>
```

## Input Types

| Element | Type | Purpose |
|---------|------|---------|
| `<input>` | `text` | Single line of text (name) |
| `<input>` | `email` | Email address (browsers check for @) |
| `<textarea>` | — | Multiple lines of text (messages) |
| `<button>` | `submit` | Sends the form |

## The `placeholder` Attribute

```html
<input placeholder="Your Name">
```

Placeholder text appears inside the input as a hint. It disappears when you start typing. It's not a label — it's a hint.

## Why `<form>`?

Wrapping inputs in `<form>` gives us:
1. **Submit behavior** — pressing Enter submits the form
2. **Validation** — `type="email"` checks for valid emails
3. **Future** — we can add form handling later (Phase 4)

## Try It

- Add a phone number field: `<input type="tel" placeholder="Your Phone">`
- Change the button text from "Send" to "Send Message"
- Open in browser and try typing in the fields

## What You Learned

- [ ] `<form>` wraps input fields together
- [ ] `<input type="text">` for single-line text
- [ ] `<input type="email">` for email (with validation)
- [ ] `<textarea>` for multi-line text
- [ ] `<button type="submit">` to submit the form
- [ ] `placeholder` shows hints inside inputs
