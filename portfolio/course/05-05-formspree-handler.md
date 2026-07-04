# Lesson 05-05: Formspree Handler

## Goal
Send form submissions to your email using Formspree (a free form backend service).

## What You Type

### 1. Update index.html — add form action

Add an `action` attribute to the `<form>` tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID (get one at https://formspree.io).

### 2. Update script.js — replace the form handler

Replace the existing form handler section with:

```javascript
// ===== FORM HANDLER =====
const form = document.querySelector('form');
if (form && !form.hasAttribute('data-handler-set')) {
  form.setAttribute('data-handler-set', 'true');
  form.addEventListener('submit', function(e) {
    const btn = form.querySelector('.btn, button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }
  });
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `action="https://formspree.io/f/..."` | Submits the form data to Formspree's servers |
| `method="POST"` | Sends data in the request body (not in the URL) |
| `form.hasAttribute('data-handler-set')` | Checks if we already set up this form (prevents double setup) |
| `form.setAttribute('data-handler-set', 'true')` | Marks the form so we don't set it up twice |
| `btn.textContent = 'Sending...'` | Shows feedback that the form is submitting |
| `btn.disabled = true` | Prevents double-clicks |

### How Formspree Works

1. User fills in the form and clicks Send
2. The browser sends a POST request to `https://formspree.io/f/YOUR_ID`
3. Formspree receives the data and forwards it to your email
4. The page redirects to a Formspree thank-you page

### Why This Is Better Than alert()

Before (Phase 4): The form just showed an alert popup and didn't actually send anything.

After (Phase 5): The form actually sends data to your email. The alert is replaced by real functionality.

### Getting a Formspree ID

1. Go to https://formspree.io
2. Sign up (free tier: 50 submissions/month)
3. Create a new form
4. Copy the form ID (the long hash in the URL)
5. Replace `YOUR_FORM_ID` in the `action` attribute

## Try It

Fill out the form and click Send. You should be redirected to a Formspree thank-you page. Check your email — you should have a notification.

## What You Learned

- [ ] `action` + `method="POST"` on a form sends data to a server
- [ ] Formspree provides a free server endpoint for form submissions
- [ ] `hasAttribute` / `setAttribute` prevents duplicate event listeners
- [ ] `btn.disabled = true` prevents multiple submissions
- [ ] Real form handling replaces simulated (alert-based) handling
