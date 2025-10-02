
document.getElementById("reserveBtnHero").addEventListener("click", function() {
  window.open("https://stung-upon-gap.figma.site/classes", "_blank");
});
document.getElementById("youtubeBtn").addEventListener("click", function() {
  window.open("https://www.youtube.com/@AlainIranzi", "_blank");
});


const text = document.getElementById('scrollingText');
let translateX = 0;

function animateText() {
  translateX -= 1;
  if(-translateX > text.offsetWidth) translateX = window.innerWidth;
  text.style.transform = `translateX(${translateX}px)`;
  requestAnimationFrame(animateText);
}
animateText();
const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;
const movingSections = document.querySelectorAll('.banner, .sectiontwo-wrapper, .sectionthree-wrapper, .blues');


window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  movingSections.forEach(section => {
    if(scrollY < heroHeight){
     const offset = heroHeight - scrollY;
      section.style.transform = `translateY(${offset}px)`;
      section.style.opacity = 0.7 + 0.3 * (scrollY / heroHeight); 
    } else {
      section.style.transform = `translateY(0px)`; 
      section.style.opacity = 1; 
    }
    section.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
  });
});
