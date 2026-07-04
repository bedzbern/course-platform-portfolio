# Lesson 06-01: Meta Tags + SEO

## Goal
Add meta description, Open Graph tags (for social media previews), and a favicon.

## What You Type

Update the `<head>` in both `index.html` and `project.html` (create `project.html` first if it doesn't exist yet — it was introduced in Phase 5):

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio — Web Developer & Designer">
  <meta property="og:title" content="Portfolio">
  <meta property="og:description" content="Web Developer & Designer">
  <meta property="og:type" content="website">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>">
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
| `meta name="description"` | The text shown under your link in Google search results |
| `meta property="og:title"` | The title shown when someone shares your site on Facebook/Twitter/Discord |
| `meta property="og:description"` | The description shown in social media previews |
| `meta property="og:type"` | Tells social platforms this is a website (not an article or video) |
| `link rel="icon"` | Sets the icon in the browser tab |
| `data:image/svg+xml,...` | An inline SVG favicon — no file needed, just raw SVG code |

### The SVG Favicon Trick

```html
<link rel="icon" href="data:image/svg+xml,<svg ...><text ...>⚡</text></svg>">
```

Instead of creating a `.ico` or `.png` file, you embed the SVG directly in the `href` attribute using a data URL. The `<text>` element renders any emoji or character as the favicon. Change `⚡` to any emoji or letter.

### How Search Engines Use This

1. Google crawls your site and reads `<meta name="description">`
2. When someone searches for your name, it shows the title + description as the search result
3. When someone shares your link on social media, the platform reads `og:title`, `og:description`, and `og:image`
4. The browser tab shows your favicon icon

## Try It

Refresh and look at the browser tab — you should see a lightning bolt ⚡ icon. Share the link in Discord or Facebook (or use the Open Graph debugger) — the preview should show your title and description.

## What You Learned

- [ ] `<meta name="description">` controls Google search result text
- [ ] `<meta property="og:*">` controls social media previews
- [ ] Data URL favicons don't require an image file
- [ ] HTML entities in URLs use `%22` for quotes and `%3E` for `>`
- [ ] Meta tags live in `<head>` and are invisible on the page
