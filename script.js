const slideWrapper = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide .slide');
let currentIndex = 0;

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Wrap around to the last slide
  } else if (currentIndex >= slides.length) {
    currentIndex = 0; // Wrap around to the first slide
  }

  const offset = -currentIndex * 100; // Move to the correct slide
  slideWrapper.style.transform = `translateX(${offset}%)`;
}
