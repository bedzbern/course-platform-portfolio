# Lesson 02-01: Link CSS + Reset

## Goal
Connect a CSS file to your HTML and remove browser default spacing.

## What You Type

### 1. Link style.css in index.html

Add this line inside `<head>`, after the `<title>` tag:

```html
<link rel="stylesheet" href="style.css">
```

### 2. Create style.css

Create a new file called `style.css` in the same folder as `index.html`. Type this:

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}
```

## What Each Line Means

### HTML link tag
| Part | Purpose |
|------|---------|
| `<link>` | An empty tag that connects external resources |
| `rel="stylesheet"` | Tells the browser "this is a stylesheet" |
| `href="style.css"` | Points to the CSS file in the same folder |

### CSS reset
| Line | Purpose |
|------|---------|
| `*` | Universal selector — matches EVERY element |
| `*::before, *::after` | Also matches pseudo-elements (we use these later) |
| `margin: 0; padding: 0;` | Removes all default spacing browsers add |
| `box-sizing: border-box;` | Makes `width` include padding/border (easier sizing) |
| `html { scroll-behavior: smooth; }` | Makes anchor links scroll smoothly instead of jumping |

## Try It

Refresh `index.html`. The content should shift to the very top left — the browser's default margin around `<body>` is gone.

Now remove the reset (just comment it out /* like this */) and refresh to see the difference.

## What You Learned

- [ ] `<link rel="stylesheet" href="...">` attaches a CSS file
- [ ] `*` selects all elements
- [ ] `box-sizing: border-box` makes width calculations intuitive
- [ ] `scroll-behavior: smooth` enables smooth scrolling to anchors
