// ===== Sidebar Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

if (menuToggle && sidebar && closeBtn) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}

// ===== Sliders =====
const sliders = document.querySelectorAll('.product-slider');

sliders.forEach(slider => {
  const track = slider.querySelector('.slider-track');
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');

  // Scroll amount = width of one card (image + gap)
  const scrollAmount = 250;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});
