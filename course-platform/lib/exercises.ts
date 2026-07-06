export interface ChoiceExercise {
  id: string;
  lessonId: string;
  type: 'choice';
  prompt: string;
  options: string[];
  correctIndex: number;
  points: number;
  explanation: string;
}

export interface DOMCheck {
  type: 'element-exists' | 'element-count' | 'has-text' | 'has-attr';
  selector: string;
  expected?: string | number;
  attr?: string;
  hint?: string;
}

export interface CodeExercise {
  id: string;
  lessonId: string;
  type: 'code';
  prompt: string;
  instructions: string;
  starterCode: { html: string; css: string; js: string };
  checks: DOMCheck[];
  points: number;
  hint: string;
}

export type Exercise = ChoiceExercise | CodeExercise;

const PHASE1_CHOICE: ChoiceExercise[] = [
  // 01-01
  {
    id: '01-01-q1', lessonId: '01-01-document-setup', type: 'choice',
    prompt: 'What does `<!DOCTYPE html>` tell the browser?',
    options: [
      'That the page is written in HTML5',
      'To load the document from a file',
      'To create a new HTML document in memory',
      'To display a document type label on the page',
    ],
    correctIndex: 0,
    points: 5,
    explanation: '`<!DOCTYPE html>` declares the document type as HTML5. It tells the browser to render the page in standards mode, not quirks mode.',
  },
  {
    id: '01-01-q2', lessonId: '01-01-document-setup', type: 'choice',
    prompt: 'Which `<meta>` tag makes your website work well on mobile phones?',
    options: [
      '<meta charset="UTF-8">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="description" content="...">',
      '<meta http-equiv="refresh" content="30">',
    ],
    correctIndex: 1,
    points: 5,
    explanation: 'The viewport meta tag tells mobile browsers to scale the page to fit the screen width. Without it, mobile browsers render the page zoomed out.',
  },
  {
    id: '01-01-q3', lessonId: '01-01-document-setup', type: 'choice',
    prompt: 'Which part of an HTML page contains the visible content?',
    options: ['<head>', '<meta>', '<body>', '<title>'],
    correctIndex: 2,
    points: 5,
    explanation: 'Everything inside `<body>` is displayed on the page. The `<head>` contains metadata that is not visible.',
  },

  // 01-02
  {
    id: '01-02-q1', lessonId: '01-02-nav-bar', type: 'choice',
    prompt: 'Which HTML element is specifically designed for navigation links?',
    options: ['<div>', '<nav>', '<span>', '<header>'],
    correctIndex: 1,
    points: 5,
    explanation: '`<nav>` is the semantic element for navigation. It helps screen readers and search engines identify the navigation area.',
  },
  {
    id: '01-02-q2', lessonId: '01-02-nav-bar', type: 'choice',
    prompt: 'What does `<ul>` create?',
    options: [
      'A numbered list',
      'A bulleted list',
      'A dropdown menu',
      'A horizontal row of items',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`<ul>` stands for "unordered list" and creates a bulleted list. Each item inside is wrapped in `<li>`.',
  },

  // 01-03
  {
    id: '01-03-q1', lessonId: '01-03-hero-section', type: 'choice',
    prompt: 'How many `<h1>` elements should a page have?',
    options: ['As many as you want', 'At least one per section', 'Only one', 'None — use <h2> instead'],
    correctIndex: 2,
    points: 5,
    explanation: 'A page should have only one `<h1>` — the main heading. It tells search engines and screen readers what the page is about.',
  },
  {
    id: '01-03-q2', lessonId: '01-03-hero-section', type: 'choice',
    prompt: 'What is the purpose of a `<section>` element?',
    options: [
      'To style a group of elements with CSS',
      'To group related content into a thematic chunk',
      'To create a clickable button',
      'To add a line break between paragraphs',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`<section>` groups related content thematically — like a chapter in a book. It gives structure and meaning to the page.',
  },

  // 01-04
  {
    id: '01-04-q1', lessonId: '01-04-about-section', type: 'choice',
    prompt: 'Which is the correct heading hierarchy?',
    options: [
      '<h1> → <h2> → <h3> (most to least important)',
      '<h3> → <h2> → <h1> (least to most important)',
      'All headings are equally important',
      '<h1> is for paragraphs, <h2> is for sections',
    ],
    correctIndex: 0,
    points: 5,
    explanation: 'Heading levels go from most important (`<h1>`) to least important (`<h6>`). Skip levels to reflect your content structure, not the font size you want.',
  },
  {
    id: '01-04-q2', lessonId: '01-04-about-section', type: 'choice',
    prompt: 'When should you use `<h2>` instead of `<h1>`?',
    options: [
      'When you want smaller text',
      'For section titles below the main page heading',
      'For the navigation bar items',
      'Only in the footer area',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`<h2>` is for section headings that are below the main `<h1>`. Each major section of your page (About, Projects, Contact) should start with an `<h2>`.',
  },

  // 01-05
  {
    id: '01-05-q1', lessonId: '01-05-project-cards', type: 'choice',
    prompt: 'What is the correct structure for a project card?',
    options: [
      'section > h2 > div > div > h3 + p + a',
      'div > section > h3 + p + a',
      'h3 > div > p > a > section',
      'section > div > div + div + div > h3 + p + a',
    ],
    correctIndex: 0,
    points: 10,
    explanation: 'Project cards follow: section → h2 (title) → div (grid) → div (card) → h3 + p + a. The nesting creates a grid of cards, each with a heading, description, and link.',
  },
  {
    id: '01-05-q2', lessonId: '01-05-project-cards', type: 'choice',
    prompt: 'What does `<h3>` represent in the heading hierarchy?',
    options: [
      'The page title',
      'A section heading',
      'A sub-heading within a section (like a card title)',
      'The least important heading on the page',
    ],
    correctIndex: 2,
    points: 5,
    explanation: '`<h3>` is one level below `<h2>`. Use it for sub-sections within a section — like individual project card titles inside the Projects section.',
  },

  // 01-06
  {
    id: '01-06-q1', lessonId: '01-06-skills-section', type: 'choice',
    prompt: 'What is the difference between `<span>` and `<div>`?',
    options: [
      'There is no difference — they are interchangeable',
      '`<span>` is inline (stays on the same line), `<div>` is block (takes full width)',
      '`<span>` is for text only, `<div>` is for images only',
      '`<span>` creates a new line, `<div>` stays inline',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`<span>` is inline — it sits next to other content on the same line. `<div>` is block-level — it takes the full width and forces a new line.',
  },
  {
    id: '01-06-q2', lessonId: '01-06-skills-section', type: 'choice',
    prompt: 'Why do skill bars use nested divs (`<div><div></div></div>`)?',
    options: [
      'To create a border around the bar',
      'One outer div is the track, one inner div is the colored fill',
      'Two divs are needed because of a CSS requirement',
      'To center the text inside the bar',
    ],
    correctIndex: 1,
    points: 10,
    explanation: 'The outer `<div>` is the bar track (background), the inner `<div>` is the fill (colored width). CSS later sets the inner div\'s width percentage.',
  },

  // 01-07
  {
    id: '01-07-q1', lessonId: '01-07-contact-form', type: 'choice',
    prompt: 'What does the `placeholder` attribute do?',
    options: [
      'Validates the input when the form is submitted',
      'Shows hint text inside the input that disappears when you type',
      'Places a label above the input field',
      'Sets a default value that gets submitted with the form',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`placeholder` shows temporary hint text inside an input. It vanishes as soon as the user starts typing — it\'s not a label or a default value.',
  },
  {
    id: '01-07-q2', lessonId: '01-07-contact-form', type: 'choice',
    prompt: 'Which input type should you use for collecting an email address?',
    options: [
      '<input type="text">',
      '<input type="email">',
      '<input type="password">',
      '<input type="url">',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`<input type="email">` tells the browser to expect an email address. Mobile devices show an @-friendly keyboard, and browsers validate that it contains "@".',
  },

  // 01-08
  {
    id: '01-08-q1', lessonId: '01-08-footer', type: 'choice',
    prompt: 'What HTML entity creates the copyright symbol (©)?',
    options: ['&copy;', '&amp;', '&lt;', '&reg;'],
    correctIndex: 0,
    points: 5,
    explanation: '`&copy;` is the HTML entity for the copyright symbol ©. HTML entities always start with `&` and end with `;`.',
  },
  {
    id: '01-08-q2', lessonId: '01-08-footer', type: 'choice',
    prompt: 'Why should you use `&lt;` instead of `<` in HTML text?',
    options: [
      '`<` is faster to type, so `&lt;` is rarely needed',
      '`<` can break HTML parsing — it looks like the start of a tag',
      '`&lt;` displays a different symbol than `<`',
      '`&lt;` only works inside code blocks',
    ],
    correctIndex: 1,
    points: 5,
    explanation: 'If you type `<` in HTML content, the browser thinks it\'s the start of an HTML tag. `&lt;` safely displays the `<` character without breaking the page.',
  },

  // 01-09
  {
    id: '01-09-q1', lessonId: '01-09-link-nav-to-sections', type: 'choice',
    prompt: 'What does `href="#projects"` do?',
    options: [
      'Opens a file called projects.html',
      'Scrolls to the element with id="projects" on the same page',
      'Creates a new window with the URL "#projects"',
      'Highlights all elements with class="projects"',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`href="#projects"` is same-page navigation. The browser scrolls to whichever element has `id="projects"`. The `#` means "on this page".',
  },
  {
    id: '01-09-q2', lessonId: '01-09-link-nav-to-sections', type: 'choice',
    prompt: 'Can two elements on the same page share the same `id` value?',
    options: [
      'Yes, ids are like classes and can be reused',
      'No, each id must be unique on the page',
      'Yes, but only if they are the same type of element',
      'No, ids cannot contain letters and numbers together',
    ],
    correctIndex: 1,
    points: 5,
    explanation: 'Each `id` must be unique. If two elements share the same `id`, clicking a link like `href="#projects"` might scroll to the wrong one — JavaScript and CSS also expect unique ids.',
  },

  // 01-10
  {
    id: '01-10-q1', lessonId: '01-10-project-detail-pages', type: 'choice',
    prompt: 'What does `href="project-1.html#hero"` do?',
    options: [
      'Opens project-1.html and scrolls to the element with id="hero"',
      'Opens project-1.html and highlights the hero section',
      'Creates a link to a file called "project-1.html#hero"',
      'Only works if project-1.html is in a subfolder',
    ],
    correctIndex: 0,
    points: 5,
    explanation: '`href="project-1.html#hero"` opens project-1.html, then the browser jumps to the element with `id="hero"` on that page.',
  },
  {
    id: '01-10-q2', lessonId: '01-10-project-detail-pages', type: 'choice',
    prompt: 'Which attribute of `<img>` provides a text description for accessibility?',
    options: ['src', 'alt', 'title', 'href'],
    correctIndex: 1,
    points: 5,
    explanation: 'The `alt` attribute provides alternative text that describes the image. Screen readers read it aloud, and it shows if the image fails to load.',
  },
];

const P1_STARTER_HTML = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Portfolio</title>\n</head>\n<body>\n\n</body>\n</html>';

const PHASE1_CODE: CodeExercise[] = [
  {
    id: '01-01-code1', lessonId: '01-01-document-setup', type: 'code',
    prompt: 'Create a valid HTML skeleton',
    instructions: 'Write a complete HTML document that includes the DOCTYPE, html element with lang="en", head with meta charset and title "My Page", and an empty body.',
    starterCode: { html: '', css: '', js: '' },
    checks: [
      { type: 'element-exists', selector: 'html', hint: 'Add <html lang="en">' },
      { type: 'has-attr', selector: 'html', attr: 'lang', expected: 'en', hint: 'Add lang="en" to <html>' },
      { type: 'element-exists', selector: 'title', hint: 'Add <title> inside <head>' },
      { type: 'has-text', selector: 'title', expected: 'My Page', hint: 'Set the title text to "My Page"' },
      { type: 'element-exists', selector: 'body', hint: 'Add <body> after </head>' },
    ],
    points: 20,
    hint: 'Start with <!DOCTYPE html>, then <html lang="en">, then <head>, then <body>. Every HTML page follows this pattern.',
  },
  {
    id: '01-02-code1', lessonId: '01-02-nav-bar', type: 'code',
    prompt: 'Build a navigation bar',
    instructions: 'Create a `<nav>` element containing a `<div>`. Inside the div, add a `<span>` with text "PORTFOLIO" and a `<ul>` with three `<li>` items: Home, Projects, and Contact. Each link should use `<a href="#">`.',
    starterCode: { html: P1_STARTER_HTML, css: '', js: '' },
    checks: [
      { type: 'element-exists', selector: 'nav', hint: 'Add a <nav> element inside <body>' },
      { type: 'element-count', selector: 'nav a', expected: 3, hint: 'Add three <a> links inside <li> items' },
      { type: 'has-text', selector: 'nav span', expected: 'PORTFOLIO', hint: 'Add <span>PORTFOLIO</span> inside the nav' },
      { type: 'element-exists', selector: 'nav ul', hint: 'Add <ul> inside the nav div' },
      { type: 'element-count', selector: 'nav li', expected: 3, hint: 'Add three <li> items inside the <ul>' },
    ],
    points: 20,
    hint: 'Structure: <nav> > <div> > <span>PORTFOLIO</span> + <ul> > <li> > <a href="#">Link</a>',
  },
  {
    id: '01-03-code1', lessonId: '01-03-hero-section', type: 'code',
    prompt: 'Add a hero section',
    instructions: 'Add a `<section>` after the nav. Inside it, put an `<h1>` with "Your Name", a `<p>` with "Title / Tagline", and an `<a href="#">` with "View My Work".',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'element-exists', selector: 'section', hint: 'Add a <section> element after the nav' },
      { type: 'has-text', selector: 'section h1', expected: 'Your Name', hint: 'Add <h1>Your Name</h1> inside the section' },
      { type: 'element-exists', selector: 'section p', hint: 'Add a <p> with your tagline inside the section' },
      { type: 'element-exists', selector: 'section a', hint: 'Add "View My Work" link inside the section' },
    ],
    points: 15,
    hint: 'Inside <section>, add <h1>, then <p>, then <a href="#">View My Work</a>.',
  },
  {
    id: '01-04-code1', lessonId: '01-04-about-section', type: 'code',
    prompt: 'Add an About Me section',
    instructions: 'Add another `<section>` with an `<h2>About Me</h2>` and two `<p>` paragraphs with placeholder bio text. Place it after the hero section.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-text', selector: 'section:nth-of-type(2) h2', expected: 'About Me', hint: 'Add <h2>About Me</h2> in the second section' },
      { type: 'element-count', selector: 'section:nth-of-type(2) p', expected: 2, hint: 'Add two paragraphs inside the About section' },
      { type: 'element-exists', selector: 'h2', hint: 'Add an <h2> heading for the section title' },
    ],
    points: 15,
    hint: 'Section 2 should have <h2>About Me</h2> and two <p> tags with bio text.',
  },
  {
    id: '01-05-code1', lessonId: '01-05-project-cards', type: 'code',
    prompt: 'Build project cards',
    instructions: 'Add a Projects section after About. It needs an `<h2>Projects</h2>`, a `<div>` grid container, and three card `<div>`s. Each card has `<h3>`, `<p>`, and `<a href="#">View Details →</a>`.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n  <section>\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-text', selector: 'h2', expected: 'Projects', hint: 'Add <h2>Projects</h2>' },
      { type: 'element-count', selector: 'h3', expected: 3, hint: 'Add three <h3> elements (one per card)' },
      { type: 'element-count', selector: 'section:nth-of-type(3) a[href="#"]', expected: 3, hint: 'Each card needs a "View Details" link' },
    ],
    points: 20,
    hint: 'Structure: <section> > <h2>Projects</h2> + <div> > 3x <div> > <h3> + <p> + <a>',
  },
  {
    id: '01-06-code1', lessonId: '01-06-skills-section', type: 'code',
    prompt: 'Build a skills section with progress bars',
    instructions: 'Add a Skills section with `<h2>Skills</h2>` and a `<div>` container. Inside, add three skill items. Each skill has a `<span>` with the skill name and a double-nested `<div><div></div></div>` for the progress bar track and fill.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n  <section>\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n  <section>\n    <h2>Projects</h2>\n    <div>\n      <div>\n        <h3>Project 1</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 2</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 3</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n    </div>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-text', selector: 'section:nth-of-type(4) span', expected: 'HTML & CSS', hint: 'Add <span> with skill name' },
      { type: 'element-count', selector: 'section:nth-of-type(4) span', expected: 3, hint: 'Add three skills: HTML & CSS, JavaScript, Python' },
      { type: 'element-count', selector: 'section:nth-of-type(4) div > div > div', expected: 3, hint: 'Each skill needs double-nested divs for the bar' },
    ],
    points: 20,
    hint: 'Each skill: <div> > <span>Skill Name</span> + <div> > <div></div></div>. The outer div is the bar track, inner div is the fill.',
  },
  {
    id: '01-07-code1', lessonId: '01-07-contact-form', type: 'code',
    prompt: 'Build a contact form',
    instructions: 'Add a Contact section with `<h2>Contact</h2>` and a `<form>`. Inside the form, add `<input type="text">` for name, `<input type="email">` for email, `<textarea>` for message, and `<button type="submit">Send</button>`.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n  <section>\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n  <section>\n    <h2>Projects</h2>\n    <div>\n      <div>\n        <h3>Project 1</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 2</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 3</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Skills</h2>\n    <div>\n      <div>\n        <span>HTML & CSS</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>JavaScript</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>Python</span>\n        <div><div></div></div>\n      </div>\n    </div>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-text', selector: 'section:nth-of-type(5) h2', expected: 'Contact', hint: 'Add <h2>Contact</h2>' },
      { type: 'element-exists', selector: 'form', hint: 'Add a <form> element' },
      { type: 'element-count', selector: 'form input', expected: 2, hint: 'Add text input for name + email input' },
      { type: 'element-exists', selector: 'form textarea', hint: 'Add a <textarea> for the message' },
      { type: 'has-text', selector: 'form button', expected: 'Send', hint: 'Add <button type="submit">Send</button>' },
    ],
    points: 20,
    hint: 'Form structure: <form> > <input type="text"> + <input type="email"> + <textarea> + <button type="submit">',
  },
  {
    id: '01-08-code1', lessonId: '01-08-footer', type: 'code',
    prompt: 'Add a footer with copyright',
    instructions: 'Add a `<footer>` at the bottom of the page with a `<p>` containing the copyright symbol using `&copy;` and "2026 Your Name".',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n  <section>\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n  <section>\n    <h2>Projects</h2>\n    <div>\n      <div>\n        <h3>Project 1</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 2</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 3</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Skills</h2>\n    <div>\n      <div>\n        <span>HTML & CSS</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>JavaScript</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>Python</span>\n        <div><div></div></div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Contact</h2>\n    <form>\n      <input type="text" placeholder="Your Name">\n      <input type="email" placeholder="Your Email">\n      <textarea placeholder="Your Message"></textarea>\n      <button type="submit">Send</button>\n    </form>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'element-exists', selector: 'footer', hint: 'Add a <footer> element at the bottom' },
      { type: 'has-text', selector: 'footer p', expected: '2026 Your Name', hint: 'Add copyright text with &copy; symbol' },
    ],
    points: 10,
    hint: 'Add <footer> before </body>. Inside: <p>&copy; 2026 Your Name</p>',
  },
  {
    id: '01-09-code1', lessonId: '01-09-link-nav-to-sections', type: 'code',
    prompt: 'Link nav to sections using IDs',
    instructions: 'Add `id` attributes to all 5 sections (hero, about, projects, skills, contact). Update the nav links to use `href="#idname"` instead of `href="#"`. Update the hero "View My Work" link to point to `#projects`.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">Projects</a></li>\n        <li><a href="#">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section>\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#">View My Work</a>\n  </section>\n\n  <section>\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n  <section>\n    <h2>Projects</h2>\n    <div>\n      <div>\n        <h3>Project 1</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 2</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 3</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Skills</h2>\n    <div>\n      <div>\n        <span>HTML & CSS</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>JavaScript</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>Python</span>\n        <div><div></div></div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <h2>Contact</h2>\n    <form>\n      <input type="text" placeholder="Your Name">\n      <input type="email" placeholder="Your Email">\n      <textarea placeholder="Your Message"></textarea>\n      <button type="submit">Send</button>\n    </form>\n  </section>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-attr', selector: 'section:nth-of-type(1)', attr: 'id', expected: 'hero', hint: 'Add id="hero" to the first section' },
      { type: 'has-attr', selector: 'nav a[href="#hero"]', attr: 'href', expected: '#hero', hint: 'Set nav Home link to href="#hero"' },
      { type: 'has-attr', selector: 'section a[href="#projects"]', attr: 'href', expected: '#projects', hint: 'Set "View My Work" to href="#projects"' },
    ],
    points: 20,
    hint: 'Add id="hero", id="about", id="projects", id="skills", id="contact" to each section. Then update nav links: href="#hero", etc.',
  },
  {
    id: '01-10-code1', lessonId: '01-10-project-detail-pages', type: 'code',
    prompt: 'Link project cards to detail pages',
    instructions: 'Update the three project card "View Details" links to point to `project-1.html`, `project-2.html`, and `project-3.html` instead of `#`.',
    starterCode: { html: P1_STARTER_HTML.replace('</head>\n<body>\n\n</body>', '</head>\n<body>\n\n  <nav>\n    <div>\n      <span>PORTFOLIO</span>\n      <ul>\n        <li><a href="#hero">Home</a></li>\n        <li><a href="#projects">Projects</a></li>\n        <li><a href="#contact">Contact</a></li>\n      </ul>\n    </div>\n  </nav>\n\n  <section id="hero">\n    <h1>Your Name</h1>\n    <p>Title / Tagline</p>\n    <a href="#projects">View My Work</a>\n  </section>\n\n  <section id="about">\n    <h2>About Me</h2>\n    <p>Write your bio here.</p>\n    <p>This will be your real story.</p>\n  </section>\n\n  <section id="projects">\n    <h2>Projects</h2>\n    <div>\n      <div>\n        <h3>Project 1</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 2</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n      <div>\n        <h3>Project 3</h3>\n        <p>Description here.</p>\n        <a href="#">View Details →</a>\n      </div>\n    </div>\n  </section>\n\n  <section id="skills">\n    <h2>Skills</h2>\n    <div>\n      <div>\n        <span>HTML & CSS</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>JavaScript</span>\n        <div><div></div></div>\n      </div>\n      <div>\n        <span>Python</span>\n        <div><div></div></div>\n      </div>\n    </div>\n  </section>\n\n  <section id="contact">\n    <h2>Contact</h2>\n    <form>\n      <input type="text" placeholder="Your Name">\n      <input type="email" placeholder="Your Email">\n      <textarea placeholder="Your Message"></textarea>\n      <button type="submit">Send</button>\n    </form>\n  </section>\n\n  <footer>\n    <p>&copy; 2026 Your Name</p>\n  </footer>\n\n</body>'), css: '', js: '' },
    checks: [
      { type: 'has-attr', selector: 'section a[href="project-1.html"]', attr: 'href', expected: 'project-1.html', hint: 'First card link should be href="project-1.html"' },
      { type: 'has-attr', selector: 'section a[href="project-2.html"]', attr: 'href', expected: 'project-2.html', hint: 'Second card link should be href="project-2.html"' },
      { type: 'has-attr', selector: 'section a[href="project-3.html"]', attr: 'href', expected: 'project-3.html', hint: 'Third card link should be href="project-3.html"' },
    ],
    points: 15,
    hint: 'Replace href="#" with href="project-1.html", href="project-2.html", and href="project-3.html" on the three "View Details" links.',
  },
];

export const ALL_EXERCISES: Exercise[] = [...PHASE1_CHOICE, ...PHASE1_CODE];

export function getExercisesByLesson(lessonId: string): Exercise[] {
  return ALL_EXERCISES.filter(e => e.lessonId === lessonId);
}

export function getExerciseById(id: string): Exercise | undefined {
  return ALL_EXERCISES.find(e => e.id === id);
}

export function getPhasePoints(phase: number): { earned: number; total: number } {
  const prefix = `0${phase}-`;
  const exercises = ALL_EXERCISES.filter(e => e.lessonId.startsWith(prefix));
  const total = exercises.reduce((sum, e) => sum + e.points, 0);
  return { earned: 0, total };
}

export const TOTAL_COURSE_POINTS = ALL_EXERCISES.reduce((sum, e) => sum + e.points, 0);
