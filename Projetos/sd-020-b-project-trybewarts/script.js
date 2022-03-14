const inputEmail = document.querySelector('.email');
const inputPassword = document.querySelector('.password');
const buttonLogin = document.querySelector('#login');
const stateAgreement = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');
const text = document.querySelector('#textarea');
const counterLetters = document.querySelector('#counter');
const form = document.querySelector('#evaluation-form');

function validation() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', validation);

function releaseSubmit() {
  if (stateAgreement.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}
stateAgreement.addEventListener('input', releaseSubmit);

window.onload = (releaseSubmit);

function counter() {
  const max = 500;
  const remaining = max - (text.value.length);
  counterLetters.innerText = remaining;
}
text.addEventListener('input', counter);

function materias() {
  const materias2 = document.querySelectorAll('.subject');
  const resultado = [];
  for (let i = 0; i < materias2.length; i += 1) {
    if (materias2[i].checked === true) {
      resultado.push(materias2[i].value);
    }
  }
  return resultado.join(', ');
}

function createList(event) {
  event.preventDefault();
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name ="family"]:checked').value;
  const avaliation = document.querySelector('input[name ="rate"]:checked').value;
  const observation = document.querySelector('#textarea').value;
  const fullName = `${inputName} ${inputLastName}`;
  const info = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  const answers = [fullName, email, house, family, materias(), avaliation, observation];
  form.innerHTML = '';
  for (let i = 0; i < info.length; i += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerText = `${info[i]}: ${answers[i]}`;
    form.append(paragraph);
  }
}
buttonSubmit.addEventListener('click', createList);
