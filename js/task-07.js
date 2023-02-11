const sizeBtn = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

sizeBtn.addEventListener('input', sizeControl);

function sizeControl(event) {
  sizeText.style.fontSize = `${event.currentTarget.value}px`
};