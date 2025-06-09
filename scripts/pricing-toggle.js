// 6/12 Month Duration Toggle

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const dur = btn.dataset.duration;
    document.querySelectorAll('.plan-card').forEach(card => {
      card.style.display = card.dataset.duration === dur ? 'flex' : 'none';
    });
  });
});
