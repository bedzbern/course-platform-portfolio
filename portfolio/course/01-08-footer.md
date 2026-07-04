# Lesson 01-08: Footer

## Goal
Add a footer at the bottom of the page with copyright text.

## What You Type

After the Contact `</section>`, add this:

```html
<footer>
  <p>&copy; 2026 Your Name</p>
</footer>
```

## What Is `&copy;`?

`&copy;` is an **HTML entity** — a special code that displays ©. Browsers render it as the copyright symbol.

Common entities:

| Code | Shows |
|------|-------|
| `&copy;` | © |
| `&amp;` | & |
| `&lt;` | < |
| `&gt;` | > |

## Why `<footer>`?

`<footer>` is a semantic tag — it tells browsers and screen readers "this is the bottom of the page." It usually contains copyright, social links, or contact info.

## Try It

- Change the year to the current year
- Add a second line inside the footer with your email
- Open in browser — the footer appears at the very bottom

## What You Learned

- [ ] `<footer>` is for the page bottom
- [ ] `&copy;` creates the © symbol
- [ ] HTML entities display special characters safely
