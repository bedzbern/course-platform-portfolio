# Lesson 06-03: GitHub Pages Deploy

## Goal
Put your portfolio live on the internet for free using GitHub Pages.

## What You Type

### 1. Create a GitHub repository

Open https://github.com in your browser, sign in, and click the "+" icon → "New repository".

- Repository name: `portfolio` (or `your-username.github.io` for a custom URL)
- Visibility: Public
- Don't check any boxes
- Click "Create repository"

### 2. Initialize git in your project folder

Open your terminal/command prompt in the `portfolio` folder and run:

```bash
git init
git add .
git commit -m "Initial commit — complete portfolio site"
```

### 3. Connect to GitHub and push

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Branch", select `main` and `/ (root)`
4. Click **Save**

Wait 2-3 minutes, then visit `https://YOUR_USERNAME.github.io/portfolio/`

### Optional: Custom Domain

1. Buy a domain (e.g., from Namecheap or Google Domains)
2. In GitHub Pages settings, enter your domain under "Custom domain"
3. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`
4. Wait for DNS to propagate (up to 24 hours)

## Commands Explained

| Command | Purpose |
|---------|---------|
| `git init` | Creates a new git repository in the current folder |
| `git add .` | Stages all files for the first commit |
| `git commit -m "..."` | Saves a snapshot with a message |
| `git branch -M main` | Renames the default branch to `main` |
| `git remote add origin URL` | Links your local repo to GitHub |
| `git push -u origin main` | Uploads your code to GitHub |

## What Each GitHub Pages Setting Does

| Setting | Purpose |
|---------|---------|
| Branch: main | Tells GitHub "publish the files on the main branch" |
| Folder: / (root) | Tells GitHub "the website files are in the root folder" |
| Public repository | Required for free GitHub Pages hosting |

### Your Live URL

```
https://YOUR_USERNAME.github.io/portfolio/
```

If your repository is named `YOUR_USERNAME.github.io`, the URL is just:
```
https://YOUR_USERNAME.github.io/
```

### Why Your Site Might Not Work (And How to Fix It)

| Problem | Fix |
|---------|-----|
| Blank page | Check that `index.html` is in the root, not a subfolder |
| No styles | Make sure `style.css` paths are relative (not absolute) |
| Nav broken | `nav.js` uses relative paths — this should work on GitHub Pages |
| Images broken | Picsum.photos is external — it'll work. Local images need correct paths |

## Try It

Visit your live URL. Click through all the pages, test the form, check the nav. Your portfolio is now on the internet!

## What You Learned

- [ ] `git init` starts version control in a project
- [ ] `git add` + `git commit` creates a snapshot
- [ ] `git push` uploads to GitHub
- [ ] GitHub Pages serves static sites from a repository
- [ ] Your portfolio is now live and accessible to anyone
