document.getElementById("reserveBtnHero").addEventListener("click", function() {
    window.open("https://stung-upon-gap.figma.site/classes", "_blank");
  });
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


function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}


const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navLinks.style.transform = "translateX(10px)";
  } else {
    navLinks.style.transform = "translateX(0)";
  }
});
const text = document.getElementById('scrollingText');
let translateX = 0;

function animateText() {
  translateX -= 1; 

  
  if(-translateX > text.offsetWidth) {
    translateX = window.innerWidth;
  }

  text.style.transform = `translateX(${translateX}px)`;
  requestAnimationFrame(animateText);
}

animateText();
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.banner, .sectiontwo-wrapper, .sectionthree-wrapper, .founders-section, .dembele, .footer, .footer-bottom ');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
  

    sections.forEach(section => {
      section.style.transform = `translateY(${Math.max(-scrollTop, -document.querySelector('.hero').offsetHeight)}px)`;

    });document.getElementById("youtubeBtn").addEventListener("click", function() {
  window.open("https://www.youtube.com/@AlainIranzi", "_blank");
});
  });
});








