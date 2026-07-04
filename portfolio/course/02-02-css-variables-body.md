# Lesson 02-02: CSS Variables + Body Typography

## Goal
Set your color palette and base font styles using CSS custom properties.

## What You Type

Add these rules to `style.css`, after the reset:

```css
body {
  font-family: 'Noto Sans JP', 'Segoe UI', system-ui, sans-serif;
  background: #f5f0e8;
  color: #0d0d0d;
  line-height: 1.6;
}

h1, h2, h3, h4, .logo {
  font-family: 'Bangers', cursive;
  letter-spacing: 3px;
}

:root {
  --ink: #0d0d0d;
  --paper: #f5f0e8;
  --red: #cc0000;
  --gray: #555;
  --light-gray: #ddd;
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `body { font-family: ...; }` | Sets the main text font (Noto Sans JP) with fallbacks |
| `background: #f5f0e8` | A warm off-white — your "paper" color |
| `color: #0d0d0d` | Near-black text — your "ink" color |
| `line-height: 1.6` | Space between lines for readability |
| `h1... { font-family: 'Bangers', cursive; }` | Manga-style display font for headings |
| `letter-spacing: 3px` | Spreads out heading letters (comic-book style) |
| `:root { }` | The document root — stores global variables |
| `--ink: #0d0d0d` | A custom property named `--ink` with value `#0d0d0d` |
| `--paper: #f5f0e8` | Variable for the off-white background |
| `--red: #cc0000` | Variable for accent color (manga red) |

### Using a variable
Instead of writing `color: #0d0d0d` you can write `color: var(--ink)`. Variables make it easy to change your entire color scheme by editing one line.

## Try It

Change `--red` to `#0066cc` (blue) and refresh. The whole site's accent color changes from one line. Change it back after.

## What You Learned

- [ ] `:root` creates document-wide CSS variables
- [ ] `--name: value` defines a custom property
- [ ] `var(--name)` uses a custom property
- [ ] `font-family` accepts a fallback stack
- [ ] `letter-spacing` adjusts space between characters
