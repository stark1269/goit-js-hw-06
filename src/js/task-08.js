const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault()

  const formEl = event.currentTarget.elements;
  let formObj = {};
  const email = formEl.email.value;
  const password = formEl.password.value;

  if (email == '' || password == '') {
    alert('Заполните все поля для ввода!');
    return
  } else
    formObj = {
      email,
      password,
    };
  document.querySelector('.login-form').reset();
  console.log(formObj);
};
