// assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // Scroll-to-top button
  const scrollToTop = document.createElement('a');
  scrollToTop.href = '#top';
  scrollToTop.id = 'scrollToTop';
  scrollToTop.innerHTML = '↑';
  document.body.appendChild(scrollToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  });

  // Smooth scroll untuk semua tautan internal
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animasi saat scroll (fade-in)
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < window.innerHeight - elementVisible) {
        el.classList.add('appear');
      }
    });
  };

// Countdown ke September 2026
function updateCountdown() {
  const target = new Date('2026-09-01T00:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('months').textContent = '0';
    document.getElementById('days').textContent = '0';
    return;
  }

  const totalDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;

  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
}

// Update setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // jalankan saat load
});
