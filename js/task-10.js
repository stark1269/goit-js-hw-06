const refs = {
  input: document.querySelector('#controls').firstElementChild,
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  box: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const divArray = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');

    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();

    divArray.push(div);
  }
  return divArray
};

function addElementsInBox() {
  const ElementsBox = createBoxes(refs.input.value);
  refs.box.append(...ElementsBox);
}

function destroyBoxes() {
  refs.box.innerHTML = '';
};

refs.create.addEventListener('click', addElementsInBox);

refs.destroy.addEventListener('click', destroyBoxes);