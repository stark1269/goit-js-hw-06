const input = document.querySelector('#validation-input');

input.addEventListener('blur', validInput);

function validInput(event) {
  if (event.currentTarget.value.length != input.dataset.length) {
    input.classList.add('invalid');
    input.classList.contains('valid');
    input.classList.remove('valid');
    return
  } else (event.currentTarget.value.length == input.dataset.length)
    input.classList.add('valid');
    input.classList.contains('invalid');
    input.classList.remove('invalid');
};
