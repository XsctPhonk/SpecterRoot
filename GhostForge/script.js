document.querySelectorAll('.ghost-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 30px #00ffee80';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = '0 0 20px #00ffee40';
  });
});
