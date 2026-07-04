# Lesson 01-01: Document Setup

## Goal
Create a blank HTML page with the correct document structure.

## What You Type

Create a file called `index.html` and type this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
</head>
<body>

</body>
</html>
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Tells the browser "this is an HTML5 document" |
| `<html lang="en">` | The root element. `lang="en"` says the page is in English |
| `<head>` | Invisible stuff: title, meta tags, CSS links |
| `<meta charset="UTF-8">` | Supports all characters (letters, emoji, symbols) |
| `<meta name="viewport"...>` | Makes the page work on phones (responsive) |
| `<title>Portfolio</title>` | Text shown in the browser tab |
| `<body>` | Everything visible on the page goes here |

## Try It

Open `index.html` in your browser. You'll see a blank page. The tab at the top should say "Portfolio".

Now change the `<title>` to your own name and refresh.

## What You Learned

- [ ] Every HTML page starts with `<!DOCTYPE html>`
- [ ] `<head>` contains metadata, `<body>` contains visible content
- [ ] `<meta charset="UTF-8">` enables all characters
- [ ] `<title>` sets the browser tab text
