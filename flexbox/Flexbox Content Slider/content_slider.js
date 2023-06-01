const slides = document.querySelector(".slides");
const positions = [0, -320, -640, -960];
let currentPosition = 0;

document.querySelector(".btn-prev").addEventListener("click", function () {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = positions.length;
  }
  slides.style.left = `${positions[currentPosition]}px`;
  slides.style.transition = "left 0.5s ease";
});

document.querySelector(".btn-next").addEventListener("click", function () {
  if (currentPosition < positions.length - 1) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  slides.style.left = `${positions[currentPosition]}px`;
  slides.style.transition = "left 0.5s ease";
});
