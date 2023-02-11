const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrement.addEventListener('click', decrementBtn);
refs.increment.addEventListener('click', incrementBtn);

function decrementBtn() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};

function incrementBtn() {
  counterValue += 1;
  refs.value.textContent = counterValue;
};