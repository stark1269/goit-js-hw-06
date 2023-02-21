const input = document.querySelector('#validation-input');

input.addEventListener('blur', validInput);

function validInput(event) {

  const dataLength = input.dataset.length;
  const inputLength = event.target.value.length;

  if (inputLength !== Number.parseInt(dataLength)) {
    
    input.classList.add('invalid');
    input.classList.contains('valid');
    input.classList.remove('valid');
    return
  } input.classList.add('valid');
    input.classList.contains('invalid');
    input.classList.remove('invalid')
};
