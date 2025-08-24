// Reveal-on-scroll for elements with .reveal
const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  
  // Optional: make anchor links account for the fixed top strip.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
      if (!target) return;
  
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 56; // offset for top strip
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
  