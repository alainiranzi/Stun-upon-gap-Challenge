document.getElementById("reserveBtnHero").addEventListener("click", function() {
    window.open("https://stung-upon-gap.figma.site/classes", "_blank");
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
const text = document.getElementById('scrollingText');
let translateX = 0;

function animateText() {
  translateX -= 1; // uko igenda gahoro cyangwa vuba

  // Iyo text yose imaze kuva ibumoso, subira iburyo
  if(-translateX > text.offsetWidth) {
    translateX = window.innerWidth;
  }

  text.style.transform = `translateX(${translateX}px)`;
  requestAnimationFrame(animateText);
}

animateText();
// Optional JS: scroll-based movement
const content = document.querySelector('.section fade-in');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  content.style.transform = `translateY(${ -scrollY * 0.5 }px)`; // igenda gupfuka
});



