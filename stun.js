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

function animateText() {
  let left = text.offsetLeft;

  left -= 2; // Uko amagambo agenda gahoro cyangwa vuba

  if(left + text.offsetWidth < 0){
    left = window.innerWidth; // Iyo amaze kuva ibumoso, asubira iburyo
  }

  text.style.left = left + 'px';
  requestAnimationFrame(animateText);
}

animateText();

