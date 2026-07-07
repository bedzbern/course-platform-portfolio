export interface LessonCode {
  html: string;
  css: string;
  js: string;
}

const ROOT = '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Portfolio</title>\n</head>\n<body>\n\n</body>\n</html>';

const NAV_HASH = `  <nav>
    <div>
      <span>PORTFOLIO</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>`;

const NAV_SECTION = `  <nav>
    <div>
      <span>PORTFOLIO</span>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>`;

const HERO = `  <section>
    <h1>Your Name</h1>
    <p>Title / Tagline</p>
    <a href="#">View My Work</a>
  </section>`;

const HERO_LINKED = `  <section id="hero">
    <h1>Your Name</h1>
    <p>Title / Tagline</p>
    <a href="#projects">View My Work</a>
  </section>`;

const ABOUT = `  <section>
    <h2>About Me</h2>
    <p>Write your bio here. Who you are, what you do, what you\'re passionate about.</p>
    <p>This will be your real story — not placeholder text from a template.</p>
  </section>`;

const ABOUT_LINKED = `  <section id="about">
    <h2>About Me</h2>
    <p>Write your bio here. Who you are, what you do, what you\'re passionate about.</p>
    <p>This will be your real story — not placeholder text from a template.</p>
  </section>`;

const PROJECTS = `  <section>
    <h2>Projects</h2>
    <div>
      <div>
        <h3>Project 1</h3>
        <p>Short description of your first project.</p>
        <a href="#">View Details →</a>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Short description of your second project.</p>
        <a href="#">View Details →</a>
      </div>
      <div>
        <h3>Project 3</h3>
        <p>Short description of your third project.</p>
        <a href="#">View Details →</a>
      </div>
    </div>
  </section>`;

const PROJECTS_LINKED = `  <section id="projects">
    <h2>Projects</h2>
    <div>
      <div>
        <h3>Project 1</h3>
        <p>Short description of your first project.</p>
        <a href="#">View Details →</a>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Short description of your second project.</p>
        <a href="#">View Details →</a>
      </div>
      <div>
        <h3>Project 3</h3>
        <p>Short description of your third project.</p>
        <a href="#">View Details →</a>
      </div>
    </div>
  </section>`;

const PROJECTS_FINAL = `  <section id="projects">
    <h2>Projects</h2>
    <div>
      <div>
        <h3>Project 1</h3>
        <p>Short description of your first project.</p>
        <a href="project-1.html">View Details →</a>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Short description of your second project.</p>
        <a href="project-2.html">View Details →</a>
      </div>
      <div>
        <h3>Project 3</h3>
        <p>Short description of your third project.</p>
        <a href="project-3.html">View Details →</a>
      </div>
    </div>
  </section>`;

const SKILLS = `  <section>
    <h2>Skills</h2>
    <div>
      <div>
        <span>HTML & CSS</span>
        <div><div></div></div>
      </div>
      <div>
        <span>JavaScript</span>
        <div><div></div></div>
      </div>
      <div>
        <span>Python</span>
        <div><div></div></div>
      </div>
    </div>
  </section>`;

const SKILLS_LINKED = `  <section id="skills">
    <h2>Skills</h2>
    <div>
      <div>
        <span>HTML & CSS</span>
        <div><div></div></div>
      </div>
      <div>
        <span>JavaScript</span>
        <div><div></div></div>
      </div>
      <div>
        <span>Python</span>
        <div><div></div></div>
      </div>
    </div>
  </section>`;

const CONTACT = `  <section>
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Your Email">
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>`;

const CONTACT_LINKED = `  <section id="contact">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Your Name">
      <input type="email" placeholder="Your Email">
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>`;

const FOOTER = `  <footer>
    <p>&copy; 2026 Your Name</p>
  </footer>`;

function wrapBody(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
</head>
<body>

${body}
</body>
</html>`;
}

// ============================================================
// PHASE 1 — HTML (10 lessons)
// Each lesson's end state is the cumulative HTML after completing it
// ============================================================

const P1_01 = wrapBody('');

const P1_02 = wrapBody(`${NAV_HASH}
`);

const P1_03 = wrapBody(`${NAV_HASH}

${HERO}
`);

const P1_04 = wrapBody(`${NAV_HASH}

${HERO}

${ABOUT}
`);

const P1_05 = wrapBody(`${NAV_HASH}

${HERO}

${ABOUT}

${PROJECTS}
`);

const P1_06 = wrapBody(`${NAV_HASH}

${HERO}

${ABOUT}

${PROJECTS}

${SKILLS}
`);

const P1_07 = wrapBody(`${NAV_HASH}

${HERO}

${ABOUT}

${PROJECTS}

${SKILLS}

${CONTACT}
`);

const P1_08 = wrapBody(`${NAV_HASH}

${HERO}

${ABOUT}

${PROJECTS}

${SKILLS}

${CONTACT}

${FOOTER}
`);

const P1_09 = wrapBody(`${NAV_SECTION}

${HERO_LINKED}

${ABOUT_LINKED}

${PROJECTS_LINKED}

${SKILLS_LINKED}

${CONTACT_LINKED}

${FOOTER}
`);

const P1_10 = wrapBody(`${NAV_SECTION}

${HERO_LINKED}

${ABOUT_LINKED}

${PROJECTS_FINAL}

${SKILLS_LINKED}

${CONTACT_LINKED}

${FOOTER}
`);

// ============================================================
// PHASE 2 — CSS (10 lessons) — HTML = Phase 1 final throughout
// CSS builds incrementally. JS stays empty.
// ============================================================

const P2_HTML_BASE = P1_10;

const P2_CSS_01 = `*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}`;

const P2_CSS_02 = `*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

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

const P2_CSS_03 = P2_CSS_02; // Font links added to HTML only, CSS unchanged

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

const P2_CSS_10 = `${P2_CSS_09}

.skill-list {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill span {
  font-weight: 700;
  font-size: 0.9rem;
}

.bar {
  height: 14px;
  background: var(--light-gray);
  border: 2px solid var(--ink);
}

.fill {
  height: 100%;
  background: var(--red);
  transition: width 0.6s ease;
}

form {
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input, textarea {
  padding: 12px 14px;
  border: 3px solid var(--ink);
  background: var(--paper);
  font-family: inherit;
  font-size: 0.95rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

form .btn {
  align-self: flex-start;
  border-color: var(--ink);
}

form .btn:hover {
  border-color: var(--red);
}

footer {
  text-align: center;
  padding: 28px 20px;
  background: var(--ink);
  color: var(--paper);
  border-top: 4px solid var(--red);
}

footer p {
  font-size: 0.85rem;
  letter-spacing: 1px;
}

@media (max-width: 600px) {
  .hero-content h1 {
    font-size: 2.8rem;
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
}`;

// ============================================================
// PHASE 3 — Manga Effects (5 lessons)
// HTML and CSS both evolve
// ============================================================

// Phase 3 adds Google Fonts links + style.css link to HTML
function p3Head(): string {
  return `  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+JP:wght@400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">`;
}

function wrapBodyP3(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${p3Head()}
</head>
<body>

${body}
</body>
</html>`;
}

// Phase 3 starts from Phase 2's final state. Let me derive from the Phase 3 snapshot.
// Looking at the Phase 3 snapshot, the main HTML changes from Phase 2 are:
// - hero section: chapter-badge, red-divider, speech-bubble, btn-cta
// - project cards: card-link class on links
// - New page-hero CSS for project detail pages
// - Contact-layout, social-links, project detail page sections

// Phase 3 HTML base (from Phase 2 snapshot, which includes Phase 1 final HTML)
// Phase 2 HTML is the same as Phase 1 final (P1_10) but with classes added.

const P2_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
${p3Head()}
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

// Phase 2 HTML without Google Fonts links (for lessons 02-01, 02-02 before GFONTS taught)
const P2_BODY = P2_HTML.replace(/[\s\S]*<body>([\s\S]*)<\/body>[\s\S]*/, '$1').trim();
const P2_HTML_NO_FONTS = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
${P2_BODY}
</body>
</html>`;

// Phase 3 CSS base (starting from Phase 2 final CSS = P2_CSS_10)
const P3_HTML_BASE = P2_HTML;
const P3_CSS_BASE = P2_CSS_10;

// Lesson 03-01: Add chapter-badge and red-divider to hero + CSS
const P3_01_HTML_BODY = `  <nav>
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
      <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
      <h1>Your Name</h1>
      <div class="red-divider"></div>
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
  </footer>`;

const P3_01_CSS = `${P3_CSS_BASE}

.chapter-badge {
  display: inline-block;
  background: var(--paper);
  color: var(--ink);
  padding: 6px 16px;
  margin-bottom: 20px;
  border: 3px solid var(--ink);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.red-divider {
  width: 80px;
  height: 6px;
  background: var(--red);
  margin: 16px auto;
}`;

// 03-02: Add text-shadow to hero h1
const P3_02_CSS = `${P3_01_CSS}

.hero-content h1 {
  font-size: clamp(3rem, 12vw, 8rem);
  line-height: 1;
  margin-bottom: 0;
  color: var(--paper);
  text-shadow: 4px 4px 0 var(--red), 7px 7px 0 #0d0d0d;
}`;

// 03-03: Add speech bubble + tagline wrapped in speech-bubble div
const P3_03_HTML_BODY_SECTION = `      <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
      <h1>Your Name</h1>
      <div class="red-divider"></div>
      <div class="speech-bubble">
        <p class="tagline">Title / Tagline</p>
      </div>
      <a href="#projects" class="btn">View My Work ↓</a>`;

// Replace just the hero-content inner part
const P3_03_HTML_BODY = P3_01_HTML_BODY.replace(
  `      <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
      <h1>Your Name</h1>
      <div class="red-divider"></div>
      <p class="tagline">Title / Tagline</p>
      <a href="#projects" class="btn">View My Work ↓</a>`,
  P3_03_HTML_BODY_SECTION
);

const P3_03_CSS = `${P3_02_CSS}

#hero .speech-bubble {
  position: relative;
  display: inline-block;
  text-align: center;
  margin-bottom: 24px;
}

#hero .speech-bubble > .tagline {
  background: #fff;
  color: var(--ink);
  border: 4px solid var(--ink);
  padding: 10px 24px;
  position: relative;
  box-shadow: 4px 4px 0 var(--ink);
}

#hero .speech-bubble::before {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 32px;
  border: 10px solid transparent;
  border-top-color: var(--ink);
}

#hero .speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 35px;
  border: 8px solid transparent;
  border-top-color: #fff;
}`;

// 03-04: Change btn to btn-cta + ink-stamp effect
const P3_04_HTML_BODY = P3_03_HTML_BODY.replace(
  `<a href="#projects" class="btn">View My Work ↓</a>`,
  `<a href="#projects" class="btn-cta">VIEW MY WORK ↓</a>`
);

const P3_04_CSS = `${P3_03_CSS}

.btn-cta {
  display: inline-block;
  background: var(--red);
  color: var(--paper);
  padding: 14px 40px;
  text-decoration: none;
  border: 4px solid var(--paper);
  font-family: 'Bangers', cursive;
  font-size: 1.6rem;
  letter-spacing: 3px;
  box-shadow: 6px 6px 0 var(--ink);
  transition: 0.15s;
}

.btn-cta:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--ink);
}`;

// 03-05: Add page-hero CSS, card-link, project detail styles, contact-layout
const P3_05_CSS = `${P3_04_CSS}

/* Page hero for inner pages */
.page-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-image:
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
  padding: 80px 20px 40px;
}

.page-hero .hero-content h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
}

.page-subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-top: 4px;
}

/* Card link */
.card-link {
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

.card-link:hover {
  background: var(--red);
  border-color: var(--red);
}

/* Project detail page */
.project-detail {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: var(--red);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 24px;
  transition: 0.2s;
}

.back-link:hover {
  color: var(--ink);
}

.detail-image {
  width: 100%;
  border: 4px solid var(--ink);
  margin-bottom: 32px;
}

.detail-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
}

.detail-description h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.detail-description p {
  margin-bottom: 14px;
  line-height: 1.7;
}

.tech-list {
  margin-bottom: 24px;
}

.tech-list h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.tech-list span {
  display: inline-block;
  padding: 4px 12px;
  margin: 0 6px 8px 0;
  border: 2px solid var(--ink);
  font-size: 0.8rem;
  font-weight: 700;
}

.detail-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-links .btn {
  text-align: center;
}

/* Contact layout */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.contact-info p {
  font-size: 1.05rem;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.social-link {
  display: inline-block;
  padding: 8px 20px;
  border: 3px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: 0.2s;
}

.social-link:hover {
  background: var(--ink);
  color: var(--paper);
}`;

// Add card-link class to project cards' links
const P3_05_HTML_BODY = P3_04_HTML_BODY.replace(
  `<a href="project-1.html">View Details →</a>`,
  `<a href="project-1.html" class="card-link">View Details →</a>`
).replace(
  `<a href="project-2.html">View Details →</a>`,
  `<a href="project-2.html" class="card-link">View Details →</a>`
).replace(
  `<a href="project-3.html">View Details →</a>`,
  `<a href="project-3.html" class="card-link">View Details →</a>`
);

// ============================================================
// PHASE 4 — JavaScript (4 lessons)
// HTML = Phase 3 final + script.js tag. CSS = Phase 3 final. JS builds.
// ============================================================

const P4_HTML_BODY = `${P3_05_HTML_BODY}

  <script src="script.js"></script>`;

const P4_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
${p3Head()}
</head>
<body>

${P4_HTML_BODY}
</body>
</html>`;

const P4_CSS = P3_05_CSS; // No CSS changes in Phase 4

// Add h2 uppercase to CSS (from Phase 3 final)
const P4_CSS2 = `/* ===== RESET ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

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

/* ===== MANGA COLOR PALETTE ===== */
:root {
  --ink: #0d0d0d;
  --paper: #f5f0e8;
  --red: #cc0000;
  --gray: #555;
  --light-gray: #ddd;
}

/* ===== NAV ===== */
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
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 2px;
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
}

/* ===== HERO ===== */
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-image:
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
  padding: 20px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.chapter-badge {
  display: inline-block;
  background: var(--paper);
  color: var(--ink);
  padding: 6px 16px;
  margin-bottom: 20px;
  border: 3px solid var(--ink);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.hero-content h1 {
  font-size: clamp(3rem, 12vw, 9rem);
  line-height: 1;
  margin-bottom: 0;
  color: var(--paper);
  text-shadow: 4px 4px 0 var(--red), 7px 7px 0 #0d0d0d;
}

.red-divider {
  width: 80px;
  height: 6px;
  background: var(--red);
  margin: 16px auto;
}

.tagline {
  font-size: 1rem;
  color: var(--ink);
  font-weight: 700;
  margin-bottom: 0;
}

#hero .speech-bubble {
  position: relative;
  display: inline-block;
  text-align: center;
  margin-bottom: 24px;
}

#hero .speech-bubble > .tagline {
  background: #fff;
  color: var(--ink);
  border: 4px solid var(--ink);
  padding: 10px 24px;
  position: relative;
  box-shadow: 4px 4px 0 var(--ink);
}

#hero .speech-bubble::before {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 32px;
  border: 10px solid transparent;
  border-top-color: var(--ink);
}

#hero .speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 35px;
  border: 8px solid transparent;
  border-top-color: #fff;
}

/* ===== PAGE HERO (inner pages) ===== */
.page-hero {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background-image:
    linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
    url('https://picsum.photos/seed/manga-bg/1600/900');
  background-size: cover;
  background-position: center;
  color: var(--paper);
  border-bottom: 4px solid var(--ink);
  padding: 80px 20px 40px;
}

.page-hero .hero-content h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
}

.page-subtitle {
  font-size: 1rem;
  color: #ccc;
  margin-top: 4px;
}

/* ===== CTA Button */
.btn-cta {
  display: inline-block;
  background: var(--red);
  color: var(--paper);
  padding: 14px 40px;
  text-decoration: none;
  border: 4px solid var(--paper);
  font-family: 'Bangers', cursive;
  font-size: 1.6rem;
  letter-spacing: 3px;
  box-shadow: 6px 6px 0 var(--ink);
  transition: 0.15s;
}

.btn-cta:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--ink);
}

/* ===== BUTTONS ===== */
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
  color: var(--red);
  border-color: var(--red);
}

/* ===== SECTIONS ===== */
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
  font-weight: 900;
  text-transform: uppercase;
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
}

/* ===== ABOUT ===== */
.about-content p {
  font-size: 1.05rem;
  margin-bottom: 16px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* ===== PROJECTS ===== */
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
}

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
  padding: 0 16px;
  margin-bottom: 12px;
}

.card-link {
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

.card-link:hover {
  background: var(--red);
  border-color: var(--red);
}

/* ===== PROJECT DETAIL PAGE ===== */
.project-detail {
  max-width: 900px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  color: var(--red);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 24px;
  transition: 0.2s;
}

.back-link:hover {
  color: var(--ink);
}

.detail-image {
  width: 100%;
  border: 4px solid var(--ink);
  margin-bottom: 32px;
}

.detail-body {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
}

.detail-description h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
}

.detail-description p {
  margin-bottom: 14px;
  line-height: 1.7;
}

.tech-list {
  margin-bottom: 24px;
}

.tech-list h3 {
  font-size: 1rem;
  margin-bottom: 10px;
}

.tech-list span {
  display: inline-block;
  padding: 4px 12px;
  margin: 0 6px 8px 0;
  border: 2px solid var(--ink);
  font-size: 0.8rem;
  font-weight: 700;
}

.detail-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail-links .btn {
  text-align: center;
}

/* ===== SKILLS ===== */
.skill-list {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill span {
  font-weight: 700;
  font-size: 0.9rem;
}

.bar {
  height: 14px;
  background: var(--light-gray);
  border: 2px solid var(--ink);
}

.fill {
  height: 100%;
  background: var(--red);
  transition: width 0.6s ease;
}

/* ===== CONTACT ===== */
form {
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

input, textarea {
  padding: 12px 14px;
  border: 3px solid var(--ink);
  background: var(--paper);
  font-family: inherit;
  font-size: 0.95rem;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

form .btn {
  align-self: flex-start;
  border-color: var(--ink);
}

form .btn:hover {
  border-color: var(--red);
}

/* ===== CONTACT PAGE LAYOUT ===== */
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.contact-info p {
  font-size: 1.05rem;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.social-link {
  display: inline-block;
  padding: 8px 20px;
  border: 3px solid var(--ink);
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: 0.2s;
}

.social-link:hover {
  background: var(--ink);
  color: var(--paper);
}

/* ===== FOOTER ===== */
footer {
  text-align: center;
  padding: 28px 20px;
  background: var(--ink);
  color: var(--paper);
  border-top: 4px solid var(--red);
}

footer p {
  font-size: 0.85rem;
  letter-spacing: 1px;
}

/* ===== RESPONSIVE ===== */
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
}`;

// Phase 4 JS progression
// 04-01: Scroll nav highlight
const P4_JS_01 = `const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('nav-active', link.getAttribute('href') === '#' + current);
  });
});`;

// Update CSS to include nav-active class
const P4_CSS_01 = `${P4_CSS}

.nav-active {
  color: var(--red) !important;
  border-bottom: 2px solid var(--red);
}`;

// 04-02: Form handler
const P4_JS_02 = `${P4_JS_01}

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! (Form handler coming soon)');
  });
}`;

// 04-03: Smooth scroll
const P4_JS_03 = `${P4_JS_02}

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});`;

// 04-04: Page detection
const P4_JS_04 = `// Active nav link on scroll (home page only)
const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('portfolio/');

if (isHomePage) {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('nav-active', link.getAttribute('href') === '#' + current);
    });
  });
}

// Contact form alert
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! (Form handler coming soon)');
  });
}`;

// ============================================================
// PHASE 5 — Evolution (5 lessons)
// Major changes across all files
// ============================================================

// Lesson 05-01: JS array cards — replaces hardcoded project cards with JS-generated
const P5_01_HTML_BODY = P4_HTML_BODY; // Same HTML body as Phase 4

// Actually Phase 5 changes the HTML more significantly. Let me use the actual Phase 5 snapshot.

// Phase 5_01: Replace project cards with empty container, add JS project data + card generation
// But the nav is still in HTML, not yet extracted to nav.js

// Phase 5_01 HTML: Same as Phase 4 final, but project grid is empty
const P5_01_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
${p3Head()}
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
      <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
      <h1>Your Name</h1>
      <div class="red-divider"></div>
      <div class="speech-bubble">
        <p class="tagline">Title / Tagline</p>
      </div>
      <a href="#projects" class="btn-cta">VIEW MY WORK ↓</a>
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
      <div id="project-grid" class="project-grid">
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

  <script src="script.js"></script>
</body>
</html>`;

const P5_01_JS = `// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: 'Project 1',
    desc: 'Short description of your first project.',
    thumb: 'https://picsum.photos/seed/project1/400/250',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: 'Project 2',
    desc: 'Short description of your second project.',
    thumb: 'https://picsum.photos/seed/project2/400/250',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Project 3',
    desc: 'Short description of your third project.',
    thumb: 'https://picsum.photos/seed/project3/400/250',
    tech: ['Python', 'Flask', 'PostgreSQL']
  }
];

// ===== GENERATE PROJECT CARDS =====
const grid = document.getElementById('project-grid');
if (grid) {
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = \`
      <img src="\${p.thumb}" alt="\${p.title}" loading="lazy">
      <h3>\${p.title}</h3>
      <p>\${p.desc}</p>
      <a href="project.html?id=\${p.id}" class="card-link">View Details →</a>
    \`;
    grid.appendChild(card);
  });
}`;

// Lesson 05-02: Dynamic project page — adds tagline + img to project data, creates project.html
// Update JS with full project detail loading
const P5_02_JS = `// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: 'Project 1',
    tagline: 'A short tagline for this project',
    desc: 'This is where you write a detailed description of your project. Explain what it does, why you built it, what problems it solves, and what you learned while building it.',
    img: 'https://picsum.photos/seed/project1/800/400',
    thumb: 'https://picsum.photos/seed/project1/400/250',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: 'Project 2',
    tagline: 'A short tagline for this project',
    desc: 'Detailed description of your second project. Go into as much detail as you want.',
    img: 'https://picsum.photos/seed/project2/800/400',
    thumb: 'https://picsum.photos/seed/project2/400/250',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Project 3',
    tagline: 'A short tagline for this project',
    desc: 'Detailed description of your third project. Go into as much detail as you want.',
    img: 'https://picsum.photos/seed/project3/800/400',
    thumb: 'https://picsum.photos/seed/project3/400/250',
    tech: ['Python', 'Flask', 'PostgreSQL']
  }
];

// ===== GENERATE PROJECT CARDS =====
const grid = document.getElementById('project-grid');
if (grid) {
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = \`
      <img src="\${p.thumb}" alt="\${p.title}" loading="lazy">
      <h3>\${p.title}</h3>
      <p>\${p.desc}</p>
      <a href="project.html?id=\${p.id}" class="card-link">View Details →</a>
    \`;
    grid.appendChild(card);
  });
}

// ===== LOAD PROJECT DETAIL =====
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const project = projects.find(p => p.id === id);

if (project) {
  document.title = project.title + ' — Portfolio';
  document.getElementById('detail-title').textContent = project.title;
  document.getElementById('detail-tagline').textContent = project.tagline;
  document.getElementById('detail-image').src = project.img;
  document.getElementById('detail-image').alt = project.title;
  document.getElementById('detail-description').textContent = project.desc;
  document.getElementById('detail-tech').innerHTML = project.tech
    .map(t => \`<span>\${t}</span>\`)
    .join(' ');
}`;

// Lesson 05-03: Nav.js injection — extract nav to nav.js, use script src
// HTML: Add <script src="nav.js"></script> at top of body, remove nav HTML
const P5_03_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
${p3Head()}
</head>
<body>

  <script src="nav.js"></script>

  <section id="hero">
    <div class="hero-content">
      <div class="chapter-badge">— CHAPTER 01: THE PROTAGONIST —</div>
      <h1>Your Name</h1>
      <div class="red-divider"></div>
      <div class="speech-bubble">
        <p class="tagline">Title / Tagline</p>
      </div>
      <a href="#projects" class="btn-cta">VIEW MY WORK ↓</a>
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
      <div id="project-grid" class="project-grid">
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

  <script src="script.js"></script>
</body>
</html>`;

// Lesson 05-04: Auto nav highlight — add page detection to JS
const P5_04_JS = `${P5_02_JS}

// ===== ACTIVE NAV LINK =====
const page = window.location.pathname.split('/').pop() || 'index.html';
document.getElementById('nav-home')?.classList.toggle('nav-active', page === 'index.html');
document.getElementById('nav-projects')?.classList.toggle('nav-active', page === 'project.html');`;

// Lesson 05-05: Formspree handler
const P5_05_JS = `// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: 'Project 1',
    tagline: 'A short tagline for this project',
    desc: 'This is where you write a detailed description of your project. Explain what it does, why you built it, what problems it solves, and what you learned while building it.',
    img: 'https://picsum.photos/seed/project1/800/400',
    thumb: 'https://picsum.photos/seed/project1/400/250',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    title: 'Project 2',
    tagline: 'A short tagline for this project',
    desc: 'Detailed description of your second project. Go into as much detail as you want.',
    img: 'https://picsum.photos/seed/project2/800/400',
    thumb: 'https://picsum.photos/seed/project2/400/250',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 3,
    title: 'Project 3',
    tagline: 'A short tagline for this project',
    desc: 'Detailed description of your third project. Go into as much detail as you want.',
    img: 'https://picsum.photos/seed/project3/800/400',
    thumb: 'https://picsum.photos/seed/project3/400/250',
    tech: ['Python', 'Flask', 'PostgreSQL']
  }
];

// ===== GENERATE PROJECT CARDS =====
const grid = document.getElementById('project-grid');
if (grid) {
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = \`
      <img src="\${p.thumb}" alt="\${p.title}" loading="lazy">
      <h3>\${p.title}</h3>
      <p>\${p.desc}</p>
      <a href="project.html?id=\${p.id}" class="card-link">View Details →</a>
    \`;
    grid.appendChild(card);
  });
}

// ===== LOAD PROJECT DETAIL =====
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const project = projects.find(p => p.id === id);

if (project) {
  document.title = project.title + ' — Portfolio';
  document.getElementById('detail-title').textContent = project.title;
  document.getElementById('detail-tagline').textContent = project.tagline;
  document.getElementById('detail-image').src = project.img;
  document.getElementById('detail-image').alt = project.title;
  document.getElementById('detail-description').textContent = project.desc;
  document.getElementById('detail-tech').innerHTML = project.tech
    .map(t => \`<span>\${t}</span>\`)
    .join(' ');
}

// ===== ACTIVE NAV LINK =====
const page = window.location.pathname.split('/').pop() || 'index.html';
document.getElementById('nav-home')?.classList.toggle('nav-active', page === 'index.html');
document.getElementById('nav-about')?.classList.toggle('nav-active', page === 'about.html');
document.getElementById('nav-projects')?.classList.toggle('nav-active', page === 'project.html');
document.getElementById('nav-skills')?.classList.toggle('nav-active', page === 'skills.html');
document.getElementById('nav-contact')?.classList.toggle('nav-active', page === 'contact.html');

// ===== SCROLL NAV (home page only) =====
const isHome = page === 'index.html' || page.endsWith('index.html');
if (isHome) {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href*="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      const hash = link.getAttribute('href')?.split('#')[1];
      link.classList.toggle('nav-active', hash === current);
    });
  });
}

// ===== FORM HANDLER =====
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Form handler coming soon)');
  });
}`;

// Phase 5 final CSS (same as Phase 4 CSS with minor adjustments)
const P5_CSS = P4_CSS2;

// Phase 5 final nav.js content
const P5_NAVJS = `document.write(\`
<nav>
  <div class="nav-inner">
    <span class="logo">PORTFOLIO</span>
    <ul>
      <li><a href="index.html" id="nav-home">Home</a></li>
      <li><a href="index.html#about" id="nav-about">About</a></li>
      <li><a href="index.html#projects" id="nav-projects">Projects</a></li>
      <li><a href="index.html#skills" id="nav-skills">Skills</a></li>
      <li><a href="index.html#contact" id="nav-contact">Contact</a></li>
    </ul>
  </div>
</nav>
\`);`;

// ============================================================
// PHASE 6 — Ship (3 lessons)
// ============================================================

// 06-01: Add meta tags, OG, favicon, description to HTML head
const P6_01_HEAD = `  <meta charset="UTF-8">
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
  <link rel="stylesheet" href="style.css">`;

function wrapBodyP6(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
${P6_01_HEAD}
</head>
<body>

${body}
</body>
</html>`;
}

const P6_01_HTML_BODY = P5_03_HTML.replace(
  /[\s\S]*<body>([\s\S]*)<\/body>[\s\S]*/,
  '$1'
).trim();

const P6_01_HTML = wrapBodyP6(P6_01_HTML_BODY);

// 06-02: Responsive polish — already included in P4_CSS2
// No CSS change needed
const P6_02_CSS = P4_CSS2;

// 06-03: GitHub Pages — no code changes, just git commands
const P6_03_JS = P5_05_JS;

// ===== THE MAP =====
const LESSON_END_CODE: Record<string, LessonCode> = {
  // Phase 1
  '01-01-document-setup': { html: P1_01, css: '', js: '' },
  '01-02-nav-bar': { html: P1_02, css: '', js: '' },
  '01-03-hero-section': { html: P1_03, css: '', js: '' },
  '01-04-about-section': { html: P1_04, css: '', js: '' },
  '01-05-project-cards': { html: P1_05, css: '', js: '' },
  '01-06-skills-section': { html: P1_06, css: '', js: '' },
  '01-07-contact-form': { html: P1_07, css: '', js: '' },
  '01-08-footer': { html: P1_08, css: '', js: '' },
  '01-09-link-nav-to-sections': { html: P1_09, css: '', js: '' },
  '01-10-project-detail-pages': { html: P1_10, css: '', js: '' },

  // Phase 2
  '02-01-link-css-reset': { html: P2_HTML_NO_FONTS, css: P2_CSS_01, js: '' },
  '02-02-css-variables-body': { html: P2_HTML_NO_FONTS, css: P2_CSS_02, js: '' },
  '02-03-google-fonts': { html: P2_HTML, css: P2_CSS_03, js: '' },
  '02-04-nav-styling': { html: P2_HTML, css: P2_CSS_04, js: '' },
  '02-05-hero-background': { html: P2_HTML, css: P2_CSS_05, js: '' },
  '02-06-hero-typography': { html: P2_HTML, css: P2_CSS_06, js: '' },
  '02-07-section-layout': { html: P2_HTML, css: P2_CSS_07, js: '' },
  '02-08-project-grid': { html: P2_HTML, css: P2_CSS_08, js: '' },
  '02-09-project-card-hover': { html: P2_HTML, css: P2_CSS_09, js: '' },
  '02-10-skills-contact-footer': { html: P2_HTML, css: P2_CSS_10, js: '' },

  // Phase 3
  '03-01-chapter-badge': { html: wrapBodyP3(P3_01_HTML_BODY), css: P3_01_CSS, js: '' },
  '03-02-text-shadow-stack': { html: wrapBodyP3(P3_01_HTML_BODY), css: P3_02_CSS, js: '' },
  '03-03-speech-bubble': { html: wrapBodyP3(P3_03_HTML_BODY), css: P3_03_CSS, js: '' },
  '03-04-ink-stamp-cta': { html: wrapBodyP3(P3_04_HTML_BODY), css: P3_04_CSS, js: '' },
  '03-05-page-hero-banner': { html: wrapBodyP3(P3_05_HTML_BODY), css: P3_05_CSS, js: '' },

  // Phase 4
  '04-01-scroll-nav-highlight': { html: P4_HTML, css: P4_CSS_01, js: P4_JS_01 },
  '04-02-contact-form-handler': { html: P4_HTML, css: P4_CSS_01, js: P4_JS_02 },
  '04-03-smooth-scroll': { html: P4_HTML, css: P4_CSS_01, js: P4_JS_03 },
  '04-04-page-detection': { html: P4_HTML, css: P4_CSS2, js: P4_JS_04 },

  // Phase 5
  '05-01-js-array-cards': { html: P5_01_HTML, css: P5_CSS, js: P5_01_JS },
  '05-02-dynamic-project-page': { html: P5_01_HTML, css: P5_CSS, js: P5_02_JS },
  '05-03-nav-js-injection': { html: P5_03_HTML, css: P5_CSS, js: P5_02_JS },
  '05-04-auto-nav-highlight': { html: P5_03_HTML, css: P5_CSS, js: P5_04_JS },
  '05-05-formspree-handler': { html: P5_03_HTML, css: P5_CSS, js: P5_05_JS },

  // Phase 6
  '06-01-meta-tags-seo': { html: P6_01_HTML, css: P4_CSS2, js: P5_05_JS },
  '06-02-responsive-polish': { html: P6_01_HTML, css: P6_02_CSS, js: P5_05_JS },
  '06-03-github-pages-deploy': { html: P6_01_HTML, css: P6_02_CSS, js: P5_05_JS },
};

export function getLessonEndCode(id: string): LessonCode | undefined {
  return LESSON_END_CODE[id];
}

import { getAllLessons } from '@/lib/lessons';
import { getSnapshotFiles, type SnapshotFile } from '@/lib/snapshots';

export function getLessonStartCode(id: string): LessonCode {
  if (id === '00-welcome') return { html: '', css: '', js: '' };
  if (id === '01-01-document-setup') return { html: '', css: '', js: '' };

  const lessons = getAllLessons();
  const idx = lessons.findIndex(l => l.id === id);
  if (idx <= 0) return { html: '', css: '', js: '' };

  const prev = lessons[idx - 1];
  const curr = lessons[idx];

  // If crossing a phase boundary, use the previous phase's final snapshot
  if (prev.phase !== curr.phase) {
    const phaseFiles = getSnapshotFiles(curr.phase - 1);
    const findFile = (files: SnapshotFile[], name: string) => files.find(f => f.name === name)?.content || '';
    return {
      html: findFile(phaseFiles, 'index.html'),
      css: findFile(phaseFiles, 'style.css'),
      js: findFile(phaseFiles, 'script.js'),
    };
  }

  // Same phase — use previous lesson's end code
  return LESSON_END_CODE[prev.id] || { html: '', css: '', js: '' };
}

// Exported for use in exercises.ts
export { P2_HTML, P2_HTML_NO_FONTS, P2_CSS_01, P2_CSS_02, P2_CSS_03, P2_CSS_04, P2_CSS_05, P2_CSS_06, P2_CSS_07, P2_CSS_08, P2_CSS_09, P2_CSS_10 };
