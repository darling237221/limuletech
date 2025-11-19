// Minimal app control for the merge preview
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    mobileMenuBtn.setAttribute('aria-expanded', document.body.classList.contains('menu-open'));
  });
}

// Restore theme
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);

export {};
