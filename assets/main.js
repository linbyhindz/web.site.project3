// Active navigation
const navLinks = document.querySelectorAll('.main-nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// Scroll to top
const scrollToTopLink = document.querySelector('.scroll-to-top');
if (scrollToTopLink) {
  scrollToTopLink.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// License modal
const licenseLink = document.querySelector('.license-link');
const licenseModal = document.getElementById('license-modal');
const licenseClose = document.querySelector('.license-close');

if (licenseLink && licenseModal) {
  licenseLink.addEventListener('click', e => {
    e.preventDefault();
    licenseModal.style.display = 'block';
  });
}

if (licenseClose) {
  licenseClose.addEventListener('click', () => {
    licenseModal.style.display = 'none';
  });
}

if (licenseModal) {
  licenseModal.addEventListener('click', e => {
    if (e.target === licenseModal) {
      licenseModal.style.display = 'none';
    }
  });
}