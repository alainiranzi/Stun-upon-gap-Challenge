// Modal Logic
const modal = document.getElementById('modal');
const reserveBtnHero = document.getElementById('reserveBtnHero');
const closeModal = document.getElementById('closeModal');

reserveBtnHero.addEventListener('click', () => modal.style.display = 'flex');
closeModal.addEventListener('click', () => modal.style.display = 'none');

window.addEventListener('click', e => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll Fade-in Animation
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// Scroll to Section Buttons
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Header Motion Animation on Scroll
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navLinks.style.transform = "translateX(20px)"; // items iburyo bimove gahoro
  } else {
    navLinks.style.transform = "translateX(0)";
  }
});
