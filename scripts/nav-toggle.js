// Toggle mobile navigation drawer
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });

  // Optionally close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
});
