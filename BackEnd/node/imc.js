const readlineSync = require('readline-sync');

function calculatorImc () {
  const weight = readlineSync.questionFloat('Qual seu peso?:');
  const height = readlineSync.questionFloat('Qual sua altura?:');

  const calcImc = (weight / Math.pow(height, 2)).toFixed(2);

  if (calcImc < 18.5)return `Seu IMC é de ${ calcImc } - Abaixo do peso (magreza)`;
  if (calcImc >= 18.5 && calcImc <= 24.9)return `Seu IMC é de ${ calcImc } - Peso normal`;
  if (calcImc >= 25.0 && calcImc <= 29.9)return `Seu IMC é de ${ calcImc } - Peso normal`;
  if (calcImc >= 30.0 && calcImc <= 34.9)return `Seu IMC é de ${ calcImc } - Obesidade grau I`;
  if (calcImc >= 35.0 && calcImc <= 39.9)return `Seu IMC é de ${ calcImc } - Obesidade grau II`;
  if (calcImc > 40)return `Seu IMC é de ${ calcImc } - Obesidade graus III e IV`;
}

console.log(calculatorImc());

module.exports = { calculatorImc };