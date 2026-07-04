# Lesson 06-02: Responsive Polish

## Goal
Fine-tune the mobile experience with additional media query adjustments.

## What You Type

Update the `@media` section in `style.css` by adding these rules inside it:

```css
@media (max-width: 600px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .chapter-badge {
    font-size: 0.55rem;
    padding: 4px 10px;
    letter-spacing: 2px;
  }

  #hero .speech-bubble > .tagline {
    padding: 8px 14px;
    font-size: 0.85rem;
  }

  .btn-cta {
    font-size: 1.2rem;
    padding: 10px 24px;
  }

  nav ul {
    gap: 8px;
  }

  nav a {
    font-size: 0.75rem;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .contact-layout {
    grid-template-columns: 1fr;
  }

  .detail-body {
    grid-template-columns: 1fr;
  }
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `.detail-body { grid-template-columns: 1fr }` | Stacks the description and sidebar vertically on mobile (was side-by-side on desktop) |
| `.chapter-badge { font-size: 0.55rem; padding: 4px 10px }` | Shrinks the badge so it doesn't overflow on small screens |
| `#hero .speech-bubble > .tagline { padding: 8px 14px; font-size: 0.85rem }` | Reduces bubble padding and text for mobile |
| `.btn-cta { font-size: 1.2rem; padding: 10px 24px }` | Shrinks the big CTA button on small screens |

### Desktop-First Approach

You write the full desktop layout first, then override specific things for small screens inside `@media (max-width: 600px)`. This is called "desktop-first" responsive design.

The key mobile fixes here:
- Stack the detail page layout vertically (was side-by-side)
- Shrink the speech bubble padding
- Reduce the chapter badge font size and padding
- Make buttons more compact on small screens

## Try It

Resize your browser to phone width (~375px). The project detail page should switch from side-by-side to stacked layout. The badge, speech bubble, and CTA button should all shrink to fit the smaller screen.

## What You Learned

- [ ] `@media (max-width: 600px)` targets phone-sized screens
- [ ] `grid-template-columns: 1fr` stacks grid items vertically
- [ ] Reducing font sizes and padding at breakpoints prevents overflow
- [ ] Responsive design = override layout rules at smaller widths
- [ ] Test every page (home + detail) at mobile width
