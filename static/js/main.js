(() => {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.getElementById('site-nav');
  if (toggle && navigation) {
    toggle.hidden = false;
    const setMenuOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', () => {
      setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) setMenuOpen(false);
    });
  }

  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const visible = new Set();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      const active = sections.find((section) => visible.has(section.id));
      for (const link of navLinks) {
        const selected = Boolean(active && link.hash === '#' + active.id);
        link.classList.toggle('is-active', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }, { rootMargin: '-90px 0px -45% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const viewer = document.getElementById('figure-viewer');
  const image = document.getElementById('figure-image');
  const caption = document.getElementById('figure-caption');
  if (!viewer || !image || !caption || typeof viewer.showModal !== 'function') return;

  document.querySelectorAll('[data-figure]').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Keep native link behavior for a new tab and for browsers without dialogs.
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const source = link.querySelector('img');
      if (!source) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = source.alt;
      caption.textContent = link.dataset.caption || source.alt;
      viewer.showModal();
    });
  });
  viewer.querySelector('.dialog-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });
})();
