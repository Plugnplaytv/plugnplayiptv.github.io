document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.toggle-btn');
  const cards = document.querySelectorAll('.plan-card');

  function showCards(duration) {
    cards.forEach(card => {
      card.style.display = card.dataset.duration === duration ? '' : 'none';
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.toggle('active', b === btn));
      showCards(btn.dataset.duration);
    });
  });

  const active = document.querySelector('.toggle-btn.active');
  if (active) showCards(active.dataset.duration);

  // Renewal rates toggle
  document.querySelectorAll('.renewal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.renewal-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const show = btn.dataset.renewal === 'on';
      document.querySelectorAll('.renewal-rate').forEach(el => {
        el.style.display = show ? 'inline' : 'none';
      });
    });
  });
});
