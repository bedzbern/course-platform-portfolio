# Lesson 02-03: Google Fonts

## Goal
Import the fonts you used in Lesson 02-02 so they actually display. (In the previous lesson you set the `font-family` names, but the fonts aren't installed on your computer — you need to download them from Google.)

## What You Type

Add these three `<link>` tags inside `<head>`, right above your `<link rel="stylesheet" href="style.css">`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
```

Your `<head>` should now look like this:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `rel="preconnect"` | Tells the browser "we'll need this domain soon, connect early" |
| `href="https://fonts.googleapis.com"` | Google's font API server |
| `href="https://fonts.gstatic.com"` | Google's font file server (CDN) |
| `crossorigin` | Required because fonts are cross-origin resources |
| `family=Bangers&family=Noto+Sans+JP` | Request two font families |
| `wght@400;700;900` | Request specific font weights: normal, bold, black |
| `display=swap` | Show fallback font immediately, swap when custom font loads |
| `rel="stylesheet"` | Treat the URL's response as CSS |

## How It Works

1. The browser sees `font-family: 'Noto Sans JP'` in your CSS
2. It checks if the font is installed — it's not
3. It looks for a `@font-face` or `@import` — your link tags provide this
4. It downloads the font files from Google's servers
5. The page renders with your chosen fonts

## Try It

Refresh the page. Your headings should now be in the Bangers comic-book font, and your body text in Noto Sans JP. Try changing the weights in the URL (e.g., `wght@300;400`) and see what happens.

## What You Learned

- [ ] `<link rel="preconnect">` speeds up font loading
- [ ] Google Fonts provides a URL with font family and weight options
- [ ] `display=swap` improves perceived load time
- [ ] Fonts must be imported before they can be used in CSS
