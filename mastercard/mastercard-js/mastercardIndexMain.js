const blink = "blink";

const first_circle = document.querySelector(".redCircle");

function slide() {
  const currentCircle = document.querySelector(`.${blink}`);
  if (currentCircle) {
    currentCircle.classList.remove(blink);
    const nextCircle = currentCircle.nextElementSibling;
    if (nextCircle) {
      nextCircle.classList.add(blink);
    } else {
      first_circle.classList.add(blink);
    }
  } else {
    first_circle.classList.add(blink);
  }
}

slide();

setInterval(slide, 1000);
