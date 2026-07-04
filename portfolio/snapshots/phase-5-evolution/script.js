// ===== PROJECT DATA =====
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
    card.innerHTML = `
      <img src="${p.thumb}" alt="${p.title}" loading="lazy">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="project.html?id=${p.id}" class="card-link">View Details →</a>
    `;
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
    .map(t => `<span>${t}</span>`)
    .join(' ');
}

// ===== ACTIVE NAV LINK =====
const page = window.location.pathname.split('/').pop() || 'index.html';
document.getElementById('nav-home')?.classList.toggle('nav-active', page === 'index.html');
document.getElementById('nav-projects')?.classList.toggle('nav-active', page === 'project.html');

// ===== SCROLL NAV (home page) =====
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
}
