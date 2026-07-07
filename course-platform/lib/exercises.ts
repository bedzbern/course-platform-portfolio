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
  type: 'element-exists' | 'element-count' | 'has-text' | 'has-attr' | 'has-style';
  selector: string;
  expected?: string | number;
  attr?: string;
  property?: string;
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

const P2_BASE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <nav>
    <div class="nav-inner">
      <span class="logo">PORTFOLIO</span>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <section id="hero">
    <div class="hero-content">
      <h1>Your Name</h1>
      <p class="tagline">Title / Tagline</p>
      <a href="#projects" class="btn">View My Work ↓</a>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-content">
        <p>Write your bio here. Who you are, what you do, what you\'re passionate about.</p>
        <p>This will be your real story — not placeholder text from a template.</p>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <h2>Projects</h2>
      <div class="project-grid">
        <div class="project-card">
          <img src="https://picsum.photos/seed/project1/400/250" alt="Project 1" loading="lazy">
          <h3>Project 1</h3>
          <p>Short description of your first project.</p>
          <a href="project-1.html">View Details →</a>
        </div>
        <div class="project-card">
          <img src="https://picsum.photos/seed/project2/400/250" alt="Project 2" loading="lazy">
          <h3>Project 2</h3>
          <p>Short description of your second project.</p>
          <a href="project-2.html">View Details →</a>
        </div>
        <div class="project-card">
          <img src="https://picsum.photos/seed/project3/400/250" alt="Project 3" loading="lazy">
          <h3>Project 3</h3>
          <p>Short description of your third project.</p>
          <a href="project-3.html">View Details →</a>
        </div>
      </div>
    </div>
  </section>

  <section id="skills">
    <div class="container">
      <h2>Skills</h2>
      <div class="skill-list">
        <div class="skill">
          <span>HTML & CSS</span>
          <div class="bar"><div class="fill" style="width:80%"></div></div>
        </div>
        <div class="skill">
          <span>JavaScript</span>
          <div class="bar"><div class="fill" style="width:60%"></div></div>
        </div>
        <div class="skill">
          <span>Python</span>
          <div class="bar"><div class="fill" style="width:50%"></div></div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Your Email">
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Your Name</p>
  </footer>

</body>
</html>`;

const P2_CSS_01 = `*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}`;

const P2_CSS_02 = `${P2_CSS_01}

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
}`;

const P2_CSS_04 = `${P2_CSS_02}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--ink);
  border-bottom: 4px solid var(--red);
  z-index: 100;
}

.nav-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}

.logo {
  color: var(--paper);
  font-size: 1.2rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 16px;
}

nav a {
  color: var(--paper);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 8px;
  transition: color 0.2s;
}

nav a:hover {
  color: var(--red);
}`;

const P2_CSS_05 = `${P2_CSS_04}

#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image:
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
  padding: 20px;
}`;

const P2_CSS_06 = `${P2_CSS_05}

.hero-content h1 {
  font-size: clamp(3rem, 12vw, 8rem);
  margin-bottom: 8px;
}

.tagline {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 28px;
}

.btn {
  display: inline-block;
  background: var(--red);
  color: var(--paper);
  padding: 12px 28px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  border: 3px solid var(--paper);
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: var(--paper);
  color: var(--ink);
  border-color: var(--paper);
}`;

const P2_CSS_07 = `${P2_CSS_06}

section {
  padding: 80px 20px;
}

section:nth-child(even) {
  background: var(--paper);
}

section:nth-child(odd) {
  background: #e8e0d0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  letter-spacing: 3px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--red);
  margin: 10px auto 0;
}`;

const P2_CSS_08 = `${P2_CSS_07}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--paper);
  border: 4px solid var(--ink);
  text-align: center;
  transition: 0.2s;
  overflow: hidden;
}`;

const P2_CSS_09 = `${P2_CSS_08}

.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--ink);
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  border-bottom: 3px solid var(--ink);
}

.project-card h3 {
  font-size: 1.3rem;
  margin: 16px 0 8px;
  padding: 0 16px;
}

.project-card p {
  font-size: 0.9rem;
  color: var(--gray);
  padding: 0 16px 16px;
}

.project-card a {
  display: inline-block;
  margin: 0 16px 20px;
  padding: 6px 16px;
  background: var(--ink);
  color: var(--paper);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid var(--ink);
  transition: 0.2s;
}

.project-card a:hover {
  background: var(--red);
  border-color: var(--red);
}`;

const PHASE2_CHOICE: ChoiceExercise[] = [
  // 02-01
  {
    id: '02-01-q1', lessonId: '02-01-link-css-reset', type: 'choice',
    prompt: 'What does the universal selector `*` target in CSS?',
    options: [
      'All elements on the page',
      'Only <div> elements',
      'Only the first element',
      'Inline elements only',
    ],
    correctIndex: 0,
    points: 5,
    explanation: 'The `*` universal selector matches every element on the page. It\'s commonly used in CSS resets to remove default margins and padding.',
  },
  {
    id: '02-01-q2', lessonId: '02-01-link-css-reset', type: 'choice',
    prompt: 'What does `box-sizing: border-box` do to an element?',
    options: [
      'Adds a border around the content area',
      'Includes padding and border in the element\'s total width',
      'Removes the box shadow from the element',
      'Centers the element within its parent',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`box-sizing: border-box` makes width/height include padding and border. Without it, padding adds to the total width, making layouts harder to control.',
  },

  // 02-02
  {
    id: '02-02-q1', lessonId: '02-02-css-variables-body', type: 'choice',
    prompt: 'How do you define a CSS custom property (variable)?',
    options: ['$ink: #000;', '--ink: #000;', '@ink: #000;', 'var(--ink): #000;'],
    correctIndex: 1,
    points: 5,
    explanation: 'CSS custom properties start with `--`, like `--ink: #000`. Use `var(--ink)` to reference them. They\'re inherited and can be overridden in any rule.',
  },
  {
    id: '02-02-q2', lessonId: '02-02-css-variables-body', type: 'choice',
    prompt: 'Which CSS property sets the overall page background color?',
    options: ['color', 'background-color', 'bgcolor', 'fill'],
    correctIndex: 1,
    points: 5,
    explanation: '`background-color` sets the background color. On `body` it fills the entire page. `color` sets text color — a common mix-up for beginners.',
  },

  // 02-03
  {
    id: '02-03-q1', lessonId: '02-03-google-fonts', type: 'choice',
    prompt: 'Which HTML tag is used to load a Google Font on your page?',
    options: ['<font>', '<link>', '<style>', '<script>'],
    correctIndex: 1,
    points: 5,
    explanation: 'Google Fonts are loaded with a `<link>` tag in the `<head>`. The href points to Google\'s CSS API URL with the font family and weights you want.',
  },
  {
    id: '02-03-q2', lessonId: '02-03-google-fonts', type: 'choice',
    prompt: 'What does `rel="preconnect"` on a `<link>` do for Google Fonts?',
    options: [
      'Downloads the font file immediately',
      'Establishes an early connection to the font server before the browser needs it',
      'Prevents the font from loading on slow connections',
      'Connects the font to a local database',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`preconnect` tells the browser to set up an early connection to the font server. This reduces latency when the font CSS is requested, making fonts load faster.',
  },

  // 02-04
  {
    id: '02-04-q1', lessonId: '02-04-nav-styling', type: 'choice',
    prompt: 'What does `position: fixed` do to a navigation bar?',
    options: [
      'Keeps it in normal document flow like any other element',
      'Sticks it to the viewport so it stays visible while scrolling',
      'Fixes layout bugs caused by floating elements',
      'Centers the nav bar horizontally on the page',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`position: fixed` removes the element from normal flow and positions it relative to the viewport. It stays in place while the page scrolls — perfect for nav bars.',
  },
  {
    id: '02-04-q2', lessonId: '02-04-nav-styling', type: 'choice',
    prompt: 'Which Flexbox property controls horizontal alignment of items?',
    options: ['align-items', 'justify-content', 'flex-direction', 'flex-wrap'],
    correctIndex: 1,
    points: 5,
    explanation: '`justify-content` aligns items along the main axis (horizontal by default). `align-items` controls the cross axis (vertical by default).',
  },

  // 02-05
  {
    id: '02-05-q1', lessonId: '02-05-hero-background', type: 'choice',
    prompt: 'What does `min-height: 100vh` on the hero section do?',
    options: [
      'Sets the height to exactly 100 pixels',
      'Makes the hero at least as tall as the browser viewport',
      'Sets the maximum height to 100% of the parent',
      'Creates a 100px vertical margin around the hero',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`100vh` means 100% of the viewport height. `min-height` ensures the hero is at least this tall, but can grow if content needs more space.',
  },
  {
    id: '02-05-q2', lessonId: '02-05-hero-background', type: 'choice',
    prompt: 'How do you layer a dark overlay on top of a background image?',
    options: [
      'Use a separate <div> with a dark background',
      'Use `linear-gradient()` as the first value in `background-image`',
      'Set `background-filter: darken()`',
      'Add `overlay-color: black` to the section',
    ],
    correctIndex: 1,
    points: 5,
    explanation: 'Stack a `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65))` before the image URL in `background-image`. The gradient sits on top of the image.',
  },

  // 02-06
  {
    id: '02-06-q1', lessonId: '02-06-hero-typography', type: 'choice',
    prompt: 'What does `clamp(3rem, 12vw, 8rem)` do?',
    options: [
      'Sets three different font sizes that cycle on each click',
      'Creates a responsive font size between 3rem and 8rem, scaling with 12vw',
      'Locks the font size to exactly 3rem on all screens',
      'Clamps the element to a fixed 12vw width with 3rem padding',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`clamp(MIN, PREFERRED, MAX)` sets a responsive value. Here font-size is 12vw but never below 3rem or above 8rem — fluid responsive typography without media queries.',
  },
  {
    id: '02-06-q2', lessonId: '02-06-hero-typography', type: 'choice',
    prompt: 'Which pseudo-class triggers styles when hovering over an element?',
    options: [':active', ':focus', ':hover', ':visited'],
    correctIndex: 2,
    points: 5,
    explanation: '`:hover` applies styles when the mouse pointer is over an element. It\'s commonly used for buttons, links, and cards to provide visual feedback.',
  },

  // 02-07
  {
    id: '02-07-q1', lessonId: '02-07-section-layout', type: 'choice',
    prompt: 'What does `section:nth-child(even)` target?',
    options: [
      'Every <section> element on the page',
      'Only the first <section>',
      'Even-numbered <section> elements (2nd, 4th, 6th...)',
      'Sections that have a class name "even"',
    ],
    correctIndex: 2,
    points: 5,
    explanation: '`:nth-child(even)` selects elements in even positions (2nd, 4th, 6th...). Use it to alternate section background colors for visual rhythm.',
  },
  {
    id: '02-07-q2', lessonId: '02-07-section-layout', type: 'choice',
    prompt: 'What does the `::after` pseudo-element do?',
    options: [
      'Creates a virtual element after the selected element\'s content',
      'Runs a JavaScript function after the element loads',
      'Adds an image overlay on top of the element',
      'Changes the element\'s CSS after a delay',
    ],
    correctIndex: 0,
    points: 5,
    explanation: '`::after` inserts a decorative element after the content. Combined with `content: ""` and styling, it\'s great for underlines, badges, and visual flourishes.',
  },

  // 02-08
  {
    id: '02-08-q1', lessonId: '02-08-project-grid', type: 'choice',
    prompt: 'What does `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` do?',
    options: [
      'Creates exactly 3 fixed-width columns',
      'Creates responsive columns that automatically wrap as the screen gets narrower',
      'Sets all columns to exactly 240px wide with no wrapping',
      'Creates a single column that fills the full width',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`auto-fit` creates as many columns as fit, `minmax(240px, 1fr)` ensures each column is at least 240px but can grow. The grid wraps items to new rows automatically.',
  },
  {
    id: '02-08-q2', lessonId: '02-08-project-grid', type: 'choice',
    prompt: 'Which CSS property creates space between grid or flex items?',
    options: ['margin', 'padding', 'gap', 'spacing'],
    correctIndex: 2,
    points: 5,
    explanation: '`gap` (formerly `grid-gap`) creates spacing between items in both grid and flexbox layouts. Unlike `margin`, it doesn\'t add space at the container edges.',
  },

  // 02-09
  {
    id: '02-09-q1', lessonId: '02-09-project-card-hover', type: 'choice',
    prompt: 'Which CSS property creates a slide/shift effect on hover?',
    options: ['translate() as a transform value', 'transform: translate()', 'move()', 'shift()'],
    correctIndex: 1,
    points: 5,
    explanation: '`transform: translate(-4px, -4px)` moves the element up and left on hover. Combined with `transition` it creates a smooth, interactive card effect.',
  },
  {
    id: '02-09-q2', lessonId: '02-09-project-card-hover', type: 'choice',
    prompt: 'What does `object-fit: cover` do on an <img>?',
    options: [
      'Stretches the image to fill the container, ignoring aspect ratio',
      'Maintains aspect ratio while filling the container, cropping excess',
      'Adds a decorative cover border around the image',
      'Centers the image text inside the <img> element',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`object-fit: cover` keeps the image\'s aspect ratio but scales it to cover the container. Parts that don\'t fit are cropped — like CSS `background-size: cover` for images.',
  },

  // 02-10
  {
    id: '02-10-q1', lessonId: '02-10-skills-contact-footer', type: 'choice',
    prompt: 'Which Flexbox property stacks child elements vertically?',
    options: ['flex-direction: row', 'flex-direction: column', 'align-items: center', 'flex-wrap: wrap'],
    correctIndex: 1,
    points: 5,
    explanation: '`flex-direction: column` changes the main axis from horizontal to vertical, stacking children top-to-bottom instead of left-to-right.',
  },
  {
    id: '02-10-q2', lessonId: '02-10-skills-contact-footer', type: 'choice',
    prompt: 'What does `@media (max-width: 600px)` do?',
    options: [
      'Applies styles only on screens wider than 600px',
      'Applies styles only on screens narrower than 600px',
      'Applies styles only when printing at 600px resolution',
      'Creates a CSS Grid with 600px-wide columns',
    ],
    correctIndex: 1,
    points: 5,
    explanation: '`@media (max-width: 600px)` is a media query that targets viewports 600px wide or less — typically phones in portrait orientation. Everything inside applies only on small screens.',
  },
];

const PHASE2_CODE: CodeExercise[] = [
  {
    id: '02-01-code1', lessonId: '02-01-link-css-reset', type: 'code',
    prompt: 'Write a CSS reset',
    instructions: 'Write a CSS reset that targets all elements with the universal selector, removes default margin and padding, sets box-sizing to border-box, and adds smooth scrolling to the html element.',
    starterCode: { html: P2_BASE_HTML, css: '', js: '' },
    checks: [
      { type: 'has-style', selector: '*', property: 'box-sizing', expected: 'border-box', hint: 'Add box-sizing: border-box to *' },
      { type: 'has-style', selector: '*', property: 'margin', expected: '0px', hint: 'Add margin: 0 to * to remove default spacing' },
      { type: 'has-style', selector: 'html', property: 'scroll-behavior', expected: 'smooth', hint: 'Add scroll-behavior: smooth to html' },
    ],
    points: 15,
    hint: 'Use the universal selector `*` with `margin: 0; padding: 0; box-sizing: border-box;`. Then add `html { scroll-behavior: smooth; }`.',
  },
  {
    id: '02-02-code1', lessonId: '02-02-css-variables-body', type: 'code',
    prompt: 'Style the body and add CSS variables',
    instructions: 'Set the body background to #f5f0e8, text color to #0d0d0d. Define CSS custom properties for ink, paper, red, gray, and light-gray colors. Style headings with the Bangers font family.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_01, js: '' },
    checks: [
      { type: 'has-style', selector: 'body', property: 'background-color', expected: 'rgb(245, 240, 232)', hint: 'Set body background to #f5f0e8' },
      { type: 'has-style', selector: 'body', property: 'color', expected: 'rgb(13, 13, 13)', hint: 'Set body text color to #0d0d0d' },
      { type: 'has-style', selector: 'h1', property: 'letter-spacing', expected: '3px', hint: 'Style h1-h4 with letter-spacing: 3px for the manga title look' },
    ],
    points: 15,
    hint: 'Style body with background, color, font-family. Define :root variables (--ink, --paper, --red, --gray, --light-gray). Set heading font-family to Bangers.',
  },
  {
    id: '02-03-code1', lessonId: '02-03-google-fonts', type: 'code',
    prompt: 'Add Google Fonts links',
    instructions: 'Add <link> tags in the HTML <head> to load the Bangers and Noto Sans JP fonts from Google Fonts. Include both the preconnect links and the stylesheet link.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_02, js: '' },
    checks: [
      { type: 'element-exists', selector: 'link[href*="fonts.googleapis.com/css2"]', hint: 'Add a Google Fonts stylesheet link with Bangers and Noto Sans JP' },
      { type: 'element-exists', selector: 'link[rel="preconnect"][href*="fonts.gstatic.com"]', hint: 'Add preconnect link for fonts.gstatic.com' },
    ],
    points: 15,
    hint: 'In the HTML tab, inside <head>, add: <link rel="preconnect" href="https://fonts.googleapis.com">, <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>, and the Google Fonts CSS link.',
  },
  {
    id: '02-04-code1', lessonId: '02-04-nav-styling', type: 'code',
    prompt: 'Style the navigation bar',
    instructions: 'Make the nav fixed at the top, full width, with a dark background and red bottom border. Style the nav links using flexbox with a hover color change.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_02, js: '' },
    checks: [
      { type: 'has-style', selector: 'nav', property: 'position', expected: 'fixed', hint: 'Set nav to position: fixed so it stays on top while scrolling' },
      { type: 'has-style', selector: 'nav', property: 'width', expected: '100%', hint: 'Set nav width to 100%' },
      { type: 'has-style', selector: 'nav ul', property: 'display', expected: 'flex', hint: 'Make the nav menu a flexbox row' },
    ],
    points: 15,
    hint: 'nav: position fixed, full width, dark background. .nav-inner: flexbox with space-between. nav ul: display flex, gap for spacing. nav a: color, no underline, hover color.',
  },
  {
    id: '02-05-code1', lessonId: '02-05-hero-background', type: 'code',
    prompt: 'Create the hero background',
    instructions: 'Make the hero section full viewport height, centered with flexbox, and add a background image with a dark gradient overlay.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_04, js: '' },
    checks: [
      { type: 'has-style', selector: '#hero', property: 'min-height', expected: '100vh', hint: 'Set #hero min-height to 100vh for a full-screen hero' },
      { type: 'has-style', selector: '#hero', property: 'display', expected: 'flex', hint: 'Use flexbox on #hero to center content' },
      { type: 'has-style', selector: '#hero', property: 'background-size', expected: 'cover', hint: 'Set background-size to cover so the image fills the hero' },
    ],
    points: 15,
    hint: '#hero needs min-height: 100vh, display: flex with align-items/justify-content center. For the background: use background-image with linear-gradient overlay + image URL, background-size: cover.',
  },
  {
    id: '02-06-code1', lessonId: '02-06-hero-typography', type: 'code',
    prompt: 'Style hero typography and button',
    instructions: 'Style the hero heading with a large responsive font size, add a tagline, and create a call-to-action button with red background and hover effect.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_05, js: '' },
    checks: [
      { type: 'has-style', selector: '.btn', property: 'display', expected: 'inline-block', hint: 'Set .btn to display: inline-block for proper padding' },
      { type: 'has-style', selector: '.btn', property: 'background-color', expected: 'rgb(204, 0, 0)', hint: 'Give .btn a red background (#cc0000)' },
      { type: 'has-style', selector: '.tagline', property: 'color', expected: 'rgb(204, 204, 204)', hint: 'Set .tagline color to #ccc for contrast against the dark hero' },
    ],
    points: 15,
    hint: '.hero-content h1: use clamp() for responsive font-size. .tagline: lighter color, margin. .btn: inline-block, red bg, white text, no underline, hover effect.',
  },
  {
    id: '02-07-code1', lessonId: '02-07-section-layout', type: 'code',
    prompt: 'Build section layouts',
    instructions: 'Style sections with vertical padding and alternating backgrounds. Create a centered container and style section headings with an underline accent.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_06, js: '' },
    checks: [
      { type: 'has-style', selector: 'section', property: 'padding-top', expected: '80px', hint: 'Add vertical padding to sections' },
      { type: 'has-style', selector: '.container', property: 'max-width', expected: '900px', hint: 'Limit .container width for readability' },
      { type: 'has-style', selector: 'h2', property: 'text-align', expected: 'center', hint: 'Center h2 headings' },
    ],
    points: 15,
    hint: 'section: padding 80px both sides, alternating background via nth-child. .container: max-width 900px, margin auto. h2: center, ::after for red underline.',
  },
  {
    id: '02-08-code1', lessonId: '02-08-project-grid', type: 'code',
    prompt: 'Create a responsive project grid',
    instructions: 'Build a CSS Grid for the project cards that automatically wraps columns as the screen narrows. Style each card with a border and overflow hidden.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_07, js: '' },
    checks: [
      { type: 'has-style', selector: '.project-grid', property: 'display', expected: 'grid', hint: 'Set .project-grid to display grid' },
      { type: 'has-style', selector: '.project-grid', property: 'gap', expected: '24px', hint: 'Add gap between project grid items' },
      { type: 'has-style', selector: '.project-card', property: 'overflow', expected: 'hidden', hint: 'Hide overflow on .project-card' },
    ],
    points: 15,
    hint: '.project-grid: display grid, grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)), gap. .project-card: border, background, overflow hidden.',
  },
  {
    id: '02-09-code1', lessonId: '02-09-project-card-hover', type: 'code',
    prompt: 'Add card hover effects and image styles',
    instructions: 'Style project card images with object-fit to maintain aspect ratio. Add a hover effect that shifts the card and shows a shadow. Style card links with a button-like appearance.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_08, js: '' },
    checks: [
      { type: 'has-style', selector: '.project-card img', property: 'display', expected: 'block', hint: 'Make card images display: block to remove bottom gap' },
      { type: 'has-style', selector: '.project-card img', property: 'object-fit', expected: 'cover', hint: 'Use object-fit: cover so images fill the container' },
      { type: 'has-style', selector: '.project-card a', property: 'font-weight', expected: '700', hint: 'Style card links with bold font-weight' },
    ],
    points: 15,
    hint: '.project-card img: object-fit cover, display block, full width. .project-card:hover: translate and box-shadow. .project-card a: styled like a button with bg, border, hover.',
  },
  {
    id: '02-10-code1', lessonId: '02-10-skills-contact-footer', type: 'code',
    prompt: 'Style skills, contact form, and footer',
    instructions: 'Stack the skill bars vertically. Style the contact form inputs with a bold border. Create a dark footer with centered text.',
    starterCode: { html: P2_BASE_HTML, css: P2_CSS_09, js: '' },
    checks: [
      { type: 'has-style', selector: '.skill-list', property: 'display', expected: 'flex', hint: 'Make .skill-list a flex container' },
      { type: 'has-style', selector: '.skill-list', property: 'flex-direction', expected: 'column', hint: 'Stack skills vertically with flex-direction column' },
      { type: 'has-style', selector: 'footer', property: 'text-align', expected: 'center', hint: 'Center footer text' },
    ],
    points: 15,
    hint: '.skill-list: flex column, gap. .skill: label + bar column. .bar + .fill for progress. form: max-width, flex column. input/textarea: bold border, padding. footer: dark bg, centered text.',
  },
];

export const ALL_EXERCISES: Exercise[] = [...PHASE1_CHOICE, ...PHASE1_CODE, ...PHASE2_CHOICE, ...PHASE2_CODE];

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
