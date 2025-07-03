const typedText = document.getElementById("typed-text");
const phrases = ["Front-end Developer", "Web Dev Learner" ];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = currentPhrase.substring(0, charIndex);

  let delay = isDeleting ? 50 : 120;

  // If done typing, pause then start deleting
  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 1500;
    isDeleting = true;
  }

  // If done deleting, move to next phrase
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect(); // run only after DOM is ready
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});