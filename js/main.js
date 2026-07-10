/* ================================================
   HUEVIA BY DIVYANSHA — Main JavaScript
   ================================================ */

const CONFIG = {
  whatsapp: '919799884882',
  email:    'divyanshachirania1@gmail.com',
  instagram:'divyansha_chirania',
};

/* ─── Paintings Data ─────────────────────────── */
const paintings = [
  {
    id: 16, title: 'Mediterranean Reverie', category: 'painting',
    dimensions: '18" × 24"', medium: 'Acrylic on Canvas', canvas: 'Stretched Canvas',
    price: '₹5,000', available: true, shipping: '5–7 business days',
    gradient: 'linear-gradient(135deg,#F4D58D 0%,#8FBFA3 55%,#3A6B7C 100%)',
    image: 'images/mediterranean-reverie.jpeg',
    desc: 'A vibrant still life inspired by Mediterranean coastal living, blending olives, citrus, and seaside charm into a scene of effortless sophistication.',
  },
  {
    id: 17, title: 'Ivory Blossoms', category: 'painting',
    dimensions: '18" × 24"', medium: 'Acrylic on Canvas', canvas: 'Stretched Canvas',
    price: '₹8,000', available: true, shipping: '5–7 business days',
    gradient: 'linear-gradient(135deg,#FDF6EC 0%,#E8DCC4 55%,#B8A888 100%)',
    image: 'images/ivory-blossoms.png',
    desc: 'A timeless composition where delicate white lilies bloom against an ornate backdrop, celebrating elegance, serenity, and the quiet poetry of nature.',
  },
  {
    id: 18, title: 'Shattered Divinity', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹4,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#8A8A8A 0%,#4A4A4A 55%,#1A1A1A 100%)',
    image: 'images/shattered-divinity.jpeg',
    desc: 'A surreal portrait where fractured stone meets living form, capturing the tension between decay, resilience, and timeless beauty.',
  },
  {
    id: 19, title: 'Divine Harmony', category: 'painting',
    dimensions: '24" × 36"', medium: 'Acrylic on Canvas', canvas: 'Stretched Canvas',
    price: '₹10,000', available: true, shipping: '5–7 business days',
    gradient: 'linear-gradient(135deg,#1A1F35 0%,#3D4568 55%,#C9A227 100%)',
    image: 'images/divine-harmony.jpeg',
    desc: 'Inspired by the eternal love of Radha and Krishna, this painting captures a sacred moment beneath a luminous moon. The monochromatic palette, enriched with golden accents, reflects the serenity, grace, and spiritual connection that have inspired generations.',
  },
  {
    id: 20, title: 'Reflections Within', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹3,500', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#B8C4CC 0%,#5A6B75 55%,#1F2A30 100%)',
    image: 'images/reflections-within.jpeg',
    desc: 'A surreal portrait where liquid reflections blur the boundaries between reality and self, revealing the beauty of transformation and inner complexity.',
  },
  {
    id: 21, title: 'Grace in Silence', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹4,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#E8E6E1 0%,#A8A29B 55%,#3A362F 100%)',
    image: 'images/grace-in-silence.jpeg',
    desc: 'A monochromatic tribute to classical sculpture, where marble appears to breathe through delicate charcoal, revealing a timeless moment of grace and quiet devotion.',
  },
  {
    id: 22, title: 'In the Flow', category: 'sketch',
    dimensions: '11.7" × 16"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹3,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#D6E4E5 0%,#6E97A0 55%,#25424B 100%)',
    image: 'images/in-the-flow.jpeg',
    desc: 'A contemporary charcoal portrait where flowing water symbolizes renewal, fluidity, and the ever-changing nature of self.',
  },
  {
    id: 23, title: 'Fingers Crossed', category: 'painting',
    dimensions: '12" × 16"', medium: 'Acrylic on Canvas', canvas: 'Stretched Canvas',
    price: '₹3,500', available: true, shipping: '5–7 business days',
    gradient: 'linear-gradient(135deg,#F6D9C4 0%,#D98E73 55%,#5C3A3A 100%)',
    image: 'images/fingers-crossed.jpeg',
    desc: 'This artwork reflects the beauty of connection through a simple yet meaningful gesture. Soft tones and expressive details create a sense of warmth, reassurance, and lasting affection.',
  },
  {
    id: 24, title: 'Window Whiskers', category: 'painting',
    dimensions: '8" × 10"', medium: 'Acrylic on Canvas', canvas: 'Stretched Canvas',
    price: '₹2,500', available: true, shipping: '5–7 business days',
    gradient: 'linear-gradient(135deg,#F5E6C8 0%,#B8A382 55%,#4A3B2A 100%)',
    image: 'images/window-whiskers.png',
    desc: 'A peaceful moment of a cat resting by an open window, embracing the warmth of soft light and quiet surroundings. With gentle brushstrokes and calming tones, this artwork brings a sense of comfort, curiosity, and the simple joy of feeling at home.',
  },
  {
    id: 25, title: 'Echoes Within', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹4,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#E0DCD4 0%,#8A8378 55%,#2E2A24 100%)',
    image: 'images/echoes-within.png',
    desc: 'An expressive portrait that explores the beauty found within imperfection. Through layered textures, bold contrasts, and abstract forms.',
  },
  {
    id: 26, title: 'Behind the Silence', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹4,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#D4D0C8 0%,#726B60 55%,#1C1815 100%)',
    image: 'images/behind-the-silence.png',
    desc: 'A striking monochrome portrait that reveals only the eyes, inviting viewers to look beyond the surface. Emerging through torn paper, the gaze reflects mystery, resilience, and the emotions that often remain hidden. Its minimalist composition creates a powerful connection through simplicity.',
  },
  {
    id: 27, title: 'Shattered Reflection', category: 'sketch',
    dimensions: '11.7" × 16.5"', medium: 'Charcoal on Paper', canvas: 'Bristol Paper',
    price: '₹4,000', available: true, shipping: '3–5 business days',
    gradient: 'linear-gradient(135deg,#DCD8D2 0%,#7C7670 55%,#221F1C 100%)',
    image: 'images/shattered-reflection.png',
    desc: 'A charcoal portrait that explores identity through the symbolism of a torn reflection. Blending realism with emotion, the artwork captures the quiet struggle between the self we reveal and the self we hide, inviting viewers to reflect on their own inner journey.',
  },
];

/* ─── Build a Painting Card HTML ────────────────── */
function cardHTML(p) {
  return `
    <div class="paint-card" data-category="${p.category}" data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="cimg-wrap">
        <div class="img-grad" style="background:${p.gradient}"></div>
        <img src="${p.image}" alt="${p.title}" loading="lazy" style="position:absolute;inset:0;" onerror="this.remove()">
        <span class="badge ${p.available ? 'badge-avail' : 'badge-sold'}">${p.available ? 'Available' : 'Sold'}</span>
      </div>
      <div class="cinfo">
        <h4>${p.title}</h4>
        <div class="cmeta">${p.dimensions} &middot; ${p.medium}</div>
        <div class="cfooter">
          <span class="price">${p.price}</span>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();${p.available ? `inquire(${p.id})` : ''}">
            ${p.available ? 'Inquire' : 'Sold'}
          </button>
        </div>
      </div>
    </div>`;
}

/* ─── Render Gallery ─────────────────────────── */
function renderGallery(limit) {
  const grid = document.querySelector('.paintings-grid');
  if (!grid) return;
  const list = limit ? paintings.slice(0, limit) : paintings;
  grid.innerHTML = list.map(cardHTML).join('');
  initReveal();
}

/* ─── Filter Gallery ─────────────────────────── */
function filterGallery(cat) {
  document.querySelectorAll('.f-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  document.querySelectorAll('.paint-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.category !== cat);
  });
}

/* ─── Modal ──────────────────────────────────── */
function openModal(id) {
  const p = paintings.find(x => x.id === id);
  if (!p) return;
  const w = document.querySelector('.modal-wrap');
  if (!w) return;

  w.querySelector('.modal-img').innerHTML =
    `<div class="img-grad" style="background:${p.gradient};width:100%;height:100%;min-height:260px;"></div>
     <img src="${p.image}" alt="${p.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" onerror="this.remove()">`;
  w.querySelector('.modal-avail').textContent = p.available ? 'Available' : 'Sold';
  w.querySelector('.modal-avail').className   = `modal-avail${p.available ? '' : ' sold'}`;
  w.querySelector('.modal-title').textContent = p.title;
  w.querySelector('.modal-desc').textContent  = p.desc;
  w.querySelector('.m-dim').textContent  = p.dimensions;
  w.querySelector('.m-med').textContent  = p.medium;
  w.querySelector('.m-can').textContent  = p.canvas;
  w.querySelector('.m-ship').textContent = p.shipping;
  w.querySelector('.modal-price').textContent = p.price;

  const btn = w.querySelector('.modal-inquire');
  btn.style.display = p.available ? '' : 'none';
  btn.onclick = () => inquire(id);

  w.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  const w = document.querySelector('.modal-wrap');
  if (w) { w.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ─── WhatsApp Inquiry ───────────────────────── */
function inquire(id) {
  const p = paintings.find(x => x.id === id);
  if (!p) return;
  const msg = `Hi Divyansha! I'm interested in your painting "${p.title}" (${p.price}). Is it still available? 🎨`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}
function inquireCommission() {
  const msg = 'Hi Divyansha! I\'d love to commission a custom painting. Can you share more details?';
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ─── FAQ Accordion ──────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ─── Scroll Reveal ──────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ─── Navbar ─────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20));

  const burger = document.querySelector('.nav-burger');
  const mMenu  = document.querySelector('.mobile-nav');
  if (burger && mMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mMenu.classList.toggle('open');
    });
    mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open'); mMenu.classList.remove('open');
    }));
  }

  // Highlight active page
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });
}

/* ─── Gallery URL param filter ───────────────── */
function applyURLFilter() {
  const cat = new URLSearchParams(location.search).get('filter');
  filterGallery(cat || 'all');
}

/* ─── Forms → WhatsApp ───────────────────────── */
function initForms() {
  document.querySelectorAll('.site-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const name    = d.get('name') || 'there';
      const subject = d.get('subject') || d.get('size') || 'your artwork';
      const message = d.get('message') || '';
      const email   = d.get('email') || '';
      const phone   = d.get('phone') || '';
      const full = `Hi Divyansha! I'm ${name}${email ? ' (' + email + ')' : ''}${phone ? ', ' + phone : ''}.\n\nI'm enquiring about: ${subject}.\n\n${message}`;
      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(full)}`, '_blank');
    });
  });
}

/* ─── Modal dismiss ──────────────────────────── */
document.addEventListener('click', e => { if (e.target.classList.contains('modal-wrap')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── Init ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initFAQ();
  initForms();

  if (document.querySelector('#gallery-grid')) {
    renderGallery();
    applyURLFilter();
    document.querySelectorAll('.f-btn').forEach(b => {
      b.addEventListener('click', () => filterGallery(b.dataset.filter));
    });
  }
  if (document.querySelector('#featured-grid')) {
    const grid = document.querySelector('#featured-grid');
    grid.innerHTML = paintings.slice(0, 3).map(cardHTML).join('');
    initReveal();
  }
});
