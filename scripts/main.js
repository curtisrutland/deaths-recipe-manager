// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// CTA button scroll
document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Contact form — client-side only (no backend)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Thanks! Your message was received.';
  e.target.reset();
  setTimeout(() => { status.textContent = ''; }, 4000);
});
