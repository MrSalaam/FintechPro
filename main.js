// Pricing toggle logic
const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
  const isYearly = toggle.checked;
  
  prices.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');

    if (isYearly) {
      price.innerHTML = `$${yearly}<span>/yr</span>`;
    } else {
      price.innerHTML = `$${monthly}<span>/mo</span>`;
    }
  });
});


const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });


 ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true,
    interval: 100,
  });

  ScrollReveal().reveal('.hero, .logo-strip, .stats, .pricing, .testimonial, .about, .cta, .contact, .faq, .footer', {
    opacity: 0,
    scale: 0.98,
  });

  // Optional: Add subtle direction-based effects
  ScrollReveal().reveal('.hero-text, .about-content, .contact-info', { origin: 'left' });
  ScrollReveal().reveal('.hero-image, .about-media, .contact-form', { origin: 'right' });
  ScrollReveal().reveal('.footer-col', { origin: 'bottom', interval: 100 });


   const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });