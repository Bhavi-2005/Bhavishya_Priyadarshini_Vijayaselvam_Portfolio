'use strict';
const EMAIL = 'bhavishyapriyadarshini@gmail.com';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const badges = a => `<ul class="badges">${a.map(x => `<li class="badge">${esc(x)}</li>`).join('')}</ul>`;
const GH = 'https://github.com/Bhavi-2005/';

const SKILLS = {
  'Programming Languages': ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'],
  'Frontend Development': ['HTML5', 'CSS3', 'Angular', 'React'],
  'Backend & API Development': ['FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'C# and .NET / ASP.NET Core'],
  'Databases': ['MySQL', 'SQL', 'Firebase Firestore', 'Relational database design'],
  'Testing & Development Practices': ['pytest', 'FastAPI TestClient', 'Dependency injection', 'API testing', 'Modular application architecture', 'Environment-based configuration', 'Docker'],
  'Cloud & Developer Tools': ['Amazon Web Services (AWS)', 'AWS Cloud Architecting Fundamentals', 'Git', 'GitHub', 'Visual Studio Code', 'Google Colab', 'Power BI', 'Excel', 'n8n', 'Gemini API']
};

const PROJECTS = [
  {
    t: 'Learning Roadmap API', y: '2026', c: 'APIs', tech: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'pytest', 'Docker'],
    s: 'A RESTful CRUD API built with a modular, layered architecture.',
    f: ['Code structured into routes, models, schemas, configuration and database layers', 'Nine automated tests using pytest and FastAPI TestClient', 'Dependency injection to run tests against an isolated test database', 'Environment-based configuration', 'Containerized with Docker'], src: GH + 'learning-roadmap-api'
  },
  {
    t: 'NCFSS AI Conference Hub', y: '2026', c: 'Web', tech: ['React', 'TypeScript', 'Firebase', 'EmailJS'],
    s: 'A conference management platform for participant registration, paper submission and administration.',
    f: ['Integrated registration and paper submission workflows', 'Administrative dashboard', 'Centralized conference management operations'], src: GH + 'ncss-ai26', live: 'https://ncssai-26.vercel.app'
  },
  {
    t: 'SafeRoute — Predicting Road Risks Before They Become Accidents', src: 'https://github.com/Bhavi-2005/SAFEROUTE', y: '2026', c: 'Web', tech: ['HTML', 'CSS', 'JavaScript', 'GPS', 'Browser APIs', 'Leaflet.js'],
    s: 'A GPS-based web application that warns users when they approach predefined high-risk road areas. It is a risk-awareness prototype using identified risk zones, not a system that independently predicts all accidents.',
    f: ['Browser geolocation', 'Map-based risk-zone visualization', 'Alerts approximately 300–400 metres before identified high-risk zones', 'Visual alerts, voice notifications and vibration feedback']
  },
  {
    t: 'MindTrack AI', y: '2026', c: 'AI', tech: ['Gemini API', 'Angular', 'Python'],
    s: 'An AI-powered learning tracker built using the Gemini API, Angular and Python.', f: [], src: GH + 'Learning-Tracker'
  },
  {
    t: 'ElectViz — Election Data Visualization', src: 'https://github.com/Bhavi-2005/Infosys_Springboard_Virtual_Internship-2026_Batch-11_Team-C', y: 'Infosys Springboard internship', c: 'Data', tech: ['Python', 'Power BI', 'Excel'],
    s: 'A team data visualization project presenting election data in an understandable manner, developed during the Infosys Springboard internship.',
    f: ['Cleaned, analyzed and transformed election datasets', 'Created visual reports', 'Converted raw data into understandable visual insights', 'Collaborated as part of a team']
  },
  {
    t: 'School Bus GPS Tracker', src: 'https://github.com/AnthonyOfficial/GpsTracker', y: '', c: 'Web', tech: ['Angular', 'C#/.NET', 'GPS tracking', 'APIs'],
    s: 'A full-stack school transportation tracking application with an Angular frontend and a C#/.NET backend.', f: []
  },
  {
    t: "TECHSPIRE '26 Registration System", src: GH + 'upside-down-codeverse', live: 'https://techspire-26.vercel.app/', y: '', c: 'Web', tech: ['Angular', 'Node.js', 'Express', 'Firebase Firestore', 'Cloudinary', 'Nodemailer', 'Gmail SMTP'],
    s: 'A technical event registration platform with an Angular frontend and a separate Node.js/Express backend.',
    f: ['Event registration workflows', 'Payment screenshot uploads through Cloudinary', 'Registration data stored in Firestore', 'Backend email processing and participant confirmation emails', 'Email queue and daily sending-capacity controls']
  },
  {
    t: 'Lazy Declutter', src: GH + 'lazy-declutter', y: '', c: 'Automation', tech: ['Python'],
    s: 'A desktop decluttering automation script created for a technical automation challenge.', f: []
  },
  {
    t: 'Data Weaver', src: GH + 'data-weaver', y: '', c: 'Data', tech: [],
    s: 'A data-focused project developed as part of a technical challenge.', f: []
  }
];

const EXPERIENCE = [
  { o: 'Google Student Ambassadors (India)', r: 'Google Student Ambassador', d: 'May 2026 – Present', k: 'Ambassador', b: ['Student engagement, community building and promoting technology learning initiatives', 'Leadership, collaboration and knowledge sharing around technology, AI and full-stack development'] },
  { o: 'Hack_Hunters', r: 'Community Manager', d: 'June 2025 – Present', k: 'Community', b: ['Contributed to community development and engagement'] },
  { o: 'Apex Falcon Technologies', r: 'IoT and API Integration', d: 'June 2026 – July 2026', l: 'Krishnagiri, Tamil Nadu, India', k: 'Employment', b: ['Developed and integrated ASP.NET Core Web APIs', 'Supported IoT and GPS tracking implementations', 'Worked with databases and backend services', 'Followed software development best practices'] },
  { o: 'Apex Falcon Technologies', r: 'Python API Development Trainer', d: 'February 2026 – April 2026', k: 'Training', b: ['Facilitated Python API development activities', 'Worked on API design, integration, testing and documentation', 'Used modern practices for RESTful services', 'Assisted with troubleshooting and workflow automation', 'Collaborated on API-driven applications'] },
  { o: 'Apex Falcon Technologies', r: 'Angular Developer (Intern)', d: 'December 2025 – January 2026', l: 'Krishnagiri, Tamil Nadu, India', k: 'Internship', b: ['Angular development, scalable solution building and AI workflow learning', 'Delivered features for a live client website; gained experience in Angular, REST APIs and Git'] },
  { o: 'Infosys Springboard', r: 'Data Visualization Intern', d: 'December 2025 – February 2026 (resume)', k: 'Internship', b: ['Collaborated on ElectViz', 'Cleaned, analyzed and transformed datasets with Python, Power BI and Excel', 'Created visual insights and reports'] },
  { o: 'ELEVATE LABS', r: 'Data Analyst Intern', d: 'June 2025 – July 2025', k: 'Internship', b: [] },
  { o: 'Codeiox', r: 'Web Developer', d: 'October 2024 – January 2025', k: 'Employment', b: [] },
  { o: 'Mizpah IT Solutions Private Limited', r: 'Data Entry', d: 'July 2024 – August 2024', l: 'Bengaluru, Karnataka, India', k: 'Employment', b: [] }
];

const CERTS = [
  ['AWS Academy Graduate – Cloud Architecting Training', 'AWS Academy', '2026', 'Cloud'],
  ['Prompt Design in Vertex AI', 'Google', '', 'AI'],
  ['Generative AI: Build Real World AI Apps with Gemini & Imagen', 'Google', '', 'AI'],
  ['Prompt to Prototype', 'Google for Startups', '', 'AI'],
  ['Python Basics', 'Infosys Springboard', '', 'Programming'],
  ['Power BI: Data Visualization', 'Infosys Springboard', '2026', 'Data'],
  ['ISRO Bharatiya Antariksh Hackathon 2026', 'Technical program (listed in LinkedIn profile)', '2026', 'Hackathon'],
  ['Excel Certification', 'Infosys Springboard', '', 'Data'],
  ['Learning Microsoft Power BI', 'Infosys Springboard', '', 'Data'],
  ['McKinsey.org Forward Program', 'Professional learning program', '', 'Learning'],
  ['Email Writing Skills', 'Infosys Springboard', '', 'Communication']
];

const ACHIEVEMENTS = [
  ['🥇', 'First Place — Code Debugging', 'Symposium at Christ College, Bangalore · 2026'],
  ['🥈', 'Second Place — Code Extreme', 'Symposium · 2026'],
  ['🏆', 'National Entrepreneurship Challenge 2025 Finalist', 'IIT Bombay'],
  ['🏸', 'First Place — CM Trophy, Ball Badminton', 'District level · 2025']
];

/* ---------- rendering ---------- */
function renderSkills() {
  $('#skillGrid').innerHTML = Object.entries(SKILLS).map(([k, v]) => `<article class="card"><h3>${esc(k)}</h3>${badges(v)}</article>`).join('');
}
function renderFilters() {
  const cats = ['All', ...new Set(PROJECTS.map(p => p.c))];
  $('#filters').innerHTML = cats.map((c, i) => `<button type="button" data-cat="${c}" aria-pressed="${i === 0}">${c}</button>`).join('');
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
    renderProjects(b.dataset.cat);
  });
}
function renderProjects(cat = 'All') {
  $('#projectGrid').innerHTML = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => cat === 'All' || p.c === cat).map(({ p, i }) => `
    <article class="card"><span class="tag">${esc(p.c)}${p.y ? ' · ' + esc(p.y) : ''}</span><h3>${esc(p.t)}</h3><p>${esc(p.s)}</p>${badges(p.tech)}
    <div class="links"><button class="more" type="button" data-i="${i}">View Details</button>
    ${p.src ? `<a href="${p.src}" target="_blank" rel="noopener">Source code</a>` : ''}${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live demo</a>` : ''}
    ${!p.src && !p.live ? '<span class="meta">Project overview</span>' : ''}</div></article>`).join('');
}
function openProject(i) {
  const p = PROJECTS[i];
  $('#mBody').innerHTML = `<h3 id="mTitle">${esc(p.t)}</h3><p>${esc(p.s)}</p>${p.f.length ? `<h4>Key features</h4><ul class="pts">${p.f.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '<p class="meta">Further details will be added after verification.</p>'}${badges(p.tech)}`;
  $('#modal').showModal();
}
function renderTimeline() {
  $('#timeline').innerHTML = EXPERIENCE.map(e => `<li class="card"><span class="tag">${e.k}</span><h3>${esc(e.r)}</h3><p>${esc(e.o)}</p>
    <p class="meta">${esc(e.d)}${e.l ? ' · ' + esc(e.l) : ''}</p>${e.b.length ? `<ul class="pts">${e.b.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</li>`).join('');
}
function renderCerts() {
  $('#certGrid').innerHTML = CERTS.map(([n, p, y, c]) => `<article class="card"><span class="tag">${c}</span><h3>${esc(n)}</h3><p class="meta">${esc(p)}${y ? ' · ' + y : ''}</p></article>`).join('');
  $('#achGrid').innerHTML = ACHIEVEMENTS.map(([i, t, d]) => `<article class="card"><div aria-hidden="true" style="font-size:2rem">${i}</div><h3>${esc(t)}</h3><p class="meta">${esc(d)}</p></article>`).join('');
}

/* ---------- behaviour ---------- */
function initTheme() {
  let saved = null; try { saved = localStorage.getItem('theme'); } catch (e) { }
  document.documentElement.dataset.theme = saved || 'dark';
  $('#theme').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { }
  });
}
function initMenu() {
  const b = $('#burger'), m = $('#menu');
  b.addEventListener('click', () => b.setAttribute('aria-expanded', m.classList.toggle('open')));
  $$('a', m).forEach(a => a.addEventListener('click', () => { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }));
}
function initRoleCycle() {
  const roles = ['Full-Stack Developer', 'Software Developer', 'Python API Developer', 'Computer Science Engineer'], el = $('#role');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0; setInterval(() => { i = (i + 1) % roles.length; el.textContent = roles[i]; }, 2400);
}
function initScroll() {
  const bar = $('#progress'), top = $('#top');
  const onScroll = () => {
    const h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + '%';
    top.classList.toggle('show', h.scrollTop > 600);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  top.addEventListener('click', () => scrollTo({ top: 0 }));
  const links = $$('nav ul a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
  const rev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } }), { threshold: .08 });
  $$('.reveal').forEach(r => rev.observe(r));
}
function initModal() {
  const m = $('#modal');
  $('#projectGrid').addEventListener('click', e => { const b = e.target.closest('.more'); if (b) openProject(+b.dataset.i); });
  $('#mClose').addEventListener('click', () => m.close());
  m.addEventListener('click', e => { if (e.target === m) m.close(); });
}
function initContact() {
  $('#copyMail').addEventListener('click', async e => {
    try { await navigator.clipboard.writeText(EMAIL); e.target.textContent = 'Copied'; }
    catch (err) { prompt('Copy this email address:', EMAIL); }
    setTimeout(() => e.target.textContent = 'Copy', 1800);
  });
  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, v = Object.fromEntries(new FormData(f)); let ok = true;
    $$('input,textarea', f).forEach(inp => {
      const bad = !inp.value.trim() || (inp.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inp.value));
      inp.closest('label').nextElementSibling.textContent = bad ? 'Please enter a valid ' + inp.name + '.' : '';
      inp.setAttribute('aria-invalid', bad); if (bad) ok = false;
    });
    if (!ok) return;
    const body = `${v.message}\n\nFrom: ${v.name} (${v.email})`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    $('#status').textContent = 'Opening your email app. Nothing is sent until you press send there.';
  });
}
document.addEventListener('DOMContentLoaded', () => {
  initTheme(); initMenu(); renderSkills(); renderFilters(); renderProjects(); renderTimeline(); renderCerts();
  initRoleCycle(); initScroll(); initModal(); initContact(); $('#yr').textContent = new Date().getFullYear();
});
