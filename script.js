let index = 0;
const slides = document.querySelectorAll('.banner img');

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
  index = (index + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 3000);
