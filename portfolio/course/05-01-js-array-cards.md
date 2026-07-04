# Lesson 05-01: JS Array Cards

## Goal
Replace the 3 hardcoded project cards with cards generated from a JavaScript array and loop.

## What You Type

### 1. Update index.html — replace project cards with an empty container

Remove all the hardcoded `.project-card` divs and replace with an empty container:

```html
<section id="projects">
  <div class="container">
    <h2>Projects</h2>
    <div id="project-grid" class="project-grid">
    </div>
  </div>
</section>
```

### 2. Update script.js — add project data array and card generator

Replace the entire script.js with this:

```javascript
// ===== PROJECT DATA =====
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
    card.innerHTML = `
      <img src="${p.thumb}" alt="${p.title}" loading="lazy">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="project.html?id=${p.id}" class="card-link">View Details →</a>
    `;
    grid.appendChild(card);
  });
}
```

## What Each Line Means

| Line | Purpose |
|------|---------|
| `const projects = [ ... ]` | An array of objects — each object is one project |
| `{ id: 1, title: '...', desc: '...', thumb: '...' }` | One project object with all its data |
| `document.getElementById('project-grid')` | Finds the empty container div by ID |
| `projects.forEach(p => { ... })` | Loops through every project in the array |
| `document.createElement('div')` | Creates a new empty div in memory (not on the page yet) |
| `card.className = 'project-card'` | Sets the class attribute |
| `card.innerHTML = \`...\`` | Sets the HTML content using a template literal with `${}` placeholders |
| `\`<img src="${p.thumb}" ...>\`` | Backtick string — `${p.thumb}` inserts the actual value |
| `grid.appendChild(card)` | Adds the new card to the page inside the grid |

### The AH-HA Moment

Before: To add a 4th project, you had to copy-paste 6 lines of HTML and create a new HTML file.

After: To add a 4th project, you add 5 lines to the array:
```javascript
{
  id: 4,
  title: 'Project 4',
  desc: 'Description of your fourth project.',
  thumb: 'https://picsum.photos/seed/project4/400/250',
  tech: ['Vue', 'Firebase']
}
```
That's it — no new HTML file, no copy-paste.

## Try It

Add a 4th project to the `projects` array. Refresh — a 4th card appears automatically.

## What You Learned

- [ ] Arrays of objects store structured data
- [ ] `forEach` loops through every item in an array
- [ ] `createElement` + `appendChild` adds elements dynamically
- [ ] Template literals (backtick strings) embed variables with `${}`
- [ ] Data-driven generation means adding content = adding data
