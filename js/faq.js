
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
      const icon = item.querySelector('.faq-toggle');
      icon.textContent = item.classList.contains('open') ? '−' : '+';
    });
  });
});
