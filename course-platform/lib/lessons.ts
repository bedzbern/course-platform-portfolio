export interface LessonMeta {
  id: string;
  phase: number;
  number: string;
  title: string;
  file: string;
}

const LESSON_LIST: LessonMeta[] = [
  { id: '00-welcome', phase: 0, number: '00', title: 'Welcome & Getting Started', file: '00-welcome.md' },
  { id: '01-01-document-setup', phase: 1, number: '01-01', title: 'Document Setup', file: '01-01-document-setup.md' },
  { id: '01-02-nav-bar', phase: 1, number: '01-02', title: 'Nav Bar', file: '01-02-nav-bar.md' },
  { id: '01-03-hero-section', phase: 1, number: '01-03', title: 'Hero Section', file: '01-03-hero-section.md' },
  { id: '01-04-about-section', phase: 1, number: '01-04', title: 'About Section', file: '01-04-about-section.md' },
  { id: '01-05-project-cards', phase: 1, number: '01-05', title: 'Project Cards', file: '01-05-project-cards.md' },
  { id: '01-06-skills-section', phase: 1, number: '01-06', title: 'Skills Section', file: '01-06-skills-section.md' },
  { id: '01-07-contact-form', phase: 1, number: '01-07', title: 'Contact Form', file: '01-07-contact-form.md' },
  { id: '01-08-footer', phase: 1, number: '01-08', title: 'Footer', file: '01-08-footer.md' },
  { id: '01-09-link-nav-to-sections', phase: 1, number: '01-09', title: 'Link Nav to Sections', file: '01-09-link-nav-to-sections.md' },
  { id: '01-10-project-detail-pages', phase: 1, number: '01-10', title: 'Project Detail Pages', file: '01-10-project-detail-pages.md' },
  { id: '02-01-link-css-reset', phase: 2, number: '02-01', title: 'Link CSS & Reset', file: '02-01-link-css-reset.md' },
  { id: '02-02-css-variables-body', phase: 2, number: '02-02', title: 'CSS Variables & Body', file: '02-02-css-variables-body.md' },
  { id: '02-03-google-fonts', phase: 2, number: '02-03', title: 'Google Fonts', file: '02-03-google-fonts.md' },
  { id: '02-04-nav-styling', phase: 2, number: '02-04', title: 'Nav Styling', file: '02-04-nav-styling.md' },
  { id: '02-05-hero-background', phase: 2, number: '02-05', title: 'Hero Background', file: '02-05-hero-background.md' },
  { id: '02-06-hero-typography', phase: 2, number: '02-06', title: 'Hero Typography', file: '02-06-hero-typography.md' },
  { id: '02-07-section-layout', phase: 2, number: '02-07', title: 'Section Layout', file: '02-07-section-layout.md' },
  { id: '02-08-project-grid', phase: 2, number: '02-08', title: 'Project Grid', file: '02-08-project-grid.md' },
  { id: '02-09-project-card-hover', phase: 2, number: '02-09', title: 'Project Card Hover', file: '02-09-project-card-hover.md' },
  { id: '02-10-skills-contact-footer', phase: 2, number: '02-10', title: 'Skills, Contact & Footer', file: '02-10-skills-contact-footer.md' },
  { id: '03-01-chapter-badge', phase: 3, number: '03-01', title: 'Chapter Badge', file: '03-01-chapter-badge.md' },
  { id: '03-02-text-shadow-stack', phase: 3, number: '03-02', title: 'Text Shadow Stack', file: '03-02-text-shadow-stack.md' },
  { id: '03-03-speech-bubble', phase: 3, number: '03-03', title: 'Speech Bubble', file: '03-03-speech-bubble.md' },
  { id: '03-04-ink-stamp-cta', phase: 3, number: '03-04', title: 'Ink-Stamp CTA', file: '03-04-ink-stamp-cta.md' },
  { id: '03-05-page-hero-banner', phase: 3, number: '03-05', title: 'Page Hero Banner', file: '03-05-page-hero-banner.md' },
  { id: '04-01-scroll-nav-highlight', phase: 4, number: '04-01', title: 'Scroll Nav Highlight', file: '04-01-scroll-nav-highlight.md' },
  { id: '04-02-contact-form-handler', phase: 4, number: '04-02', title: 'Contact Form Handler', file: '04-02-contact-form-handler.md' },
  { id: '04-03-smooth-scroll', phase: 4, number: '04-03', title: 'Smooth Scroll', file: '04-03-smooth-scroll.md' },
  { id: '04-04-page-detection', phase: 4, number: '04-04', title: 'Page Detection', file: '04-04-page-detection.md' },
  { id: '05-01-js-array-cards', phase: 5, number: '05-01', title: 'JS Array Cards', file: '05-01-js-array-cards.md' },
  { id: '05-02-dynamic-project-page', phase: 5, number: '05-02', title: 'Dynamic Project Page', file: '05-02-dynamic-project-page.md' },
  { id: '05-03-nav-js-injection', phase: 5, number: '05-03', title: 'Nav.js Injection', file: '05-03-nav-js-injection.md' },
  { id: '05-04-auto-nav-highlight', phase: 5, number: '05-04', title: 'Auto Nav Highlight', file: '05-04-auto-nav-highlight.md' },
  { id: '05-05-formspree-handler', phase: 5, number: '05-05', title: 'Formspree Handler', file: '05-05-formspree-handler.md' },
  { id: '06-01-meta-tags-seo', phase: 6, number: '06-01', title: 'Meta Tags & SEO', file: '06-01-meta-tags-seo.md' },
  { id: '06-02-responsive-polish', phase: 6, number: '06-02', title: 'Responsive Polish', file: '06-02-responsive-polish.md' },
  { id: '06-03-github-pages-deploy', phase: 6, number: '06-03', title: 'GitHub Pages Deploy', file: '06-03-github-pages-deploy.md' },
];

export function getAllLessons(): LessonMeta[] {
  return LESSON_LIST;
}

export function getLessonsByPhase(): { phase: number; label: string; lessons: LessonMeta[] }[] {
  const phaseLabels: Record<number, string> = {
    0: 'Getting Started',
    1: 'HTML — Structure',
    2: 'CSS — Make It Look Good',
    3: 'Manga Effects',
    4: 'JavaScript — Interaction',
    5: 'Evolution — Manual to Automated',
    6: 'Ship It',
  };
  const phases: { phase: number; label: string; lessons: LessonMeta[] }[] = [];
  for (let p = 0; p <= 6; p++) {
    const filtered = LESSON_LIST.filter(l => l.phase === p);
    if (filtered.length > 0) {
      phases.push({ phase: p, label: phaseLabels[p] || `Phase ${p}`, lessons: filtered });
    }
  }
  return phases;
}

export function getLessonById(id: string): LessonMeta | undefined {
  return LESSON_LIST.find(l => l.id === id);
}

export function getAdjacentLessons(id: string): { prev: LessonMeta | null; next: LessonMeta | null } {
  const idx = LESSON_LIST.findIndex(l => l.id === id);
  return {
    prev: idx > 0 ? LESSON_LIST[idx - 1] : null,
    next: idx < LESSON_LIST.length - 1 ? LESSON_LIST[idx + 1] : null,
  };
}
