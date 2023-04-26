const form = document.querySelector('form');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#Confirmpassword');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const continueButton = document.querySelector('.continue-button button');

continueButton.addEventListener('click', function(event) {
event.preventDefault();

if (firstName.value === '') {
alert('Por favor, preencha o campo Primeiro nome.');
firstName.focus();
return false;
}

if (lastName.value === '') {
alert('Por favor, preencha o campo Sobrenome.');
lastName.focus();
return false;
}

if (email.value === '') {
alert('Por favor, preencha o campo Email.');
email.focus();
return false;
}

if (number.value === '') {
alert('Por favor, preencha o campo Celular.');
number.focus();
return false;
}

if (password.value === '') {
alert('Por favor, preencha o campo Senha.');
password.focus();
return false;
}

if (confirmPassword.value === '') {
alert('Por favor, preencha o campo Confirme sua Senha.');
confirmPassword.focus();
return false;
}

if (password.value !== confirmPassword.value) {
alert('As senhas não correspondem. Por favor, digite novamente.');
confirmPassword.value = '';
confirmPassword.focus();
return false;
}

let genderSelected = false;
for (let i = 0; i < genderInputs.length; i++) {
if (genderInputs[i].checked) {
genderSelected = true;
break;
}
}

if (!genderSelected) {
alert('Por favor, selecione o campo Gênero.');
return false;
}

// todos os campos obrigatórios precisam estar preenchidos corretamente, para que o formulário seja enviado
form.submit();
});