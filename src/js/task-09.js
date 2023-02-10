function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

colorBtn.addEventListener('click', randomBodyColor);

function randomBodyColor() {
  const bodyBg = document.querySelector('body');
  bodyBg.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyBg.style.backgroundColor;
};


