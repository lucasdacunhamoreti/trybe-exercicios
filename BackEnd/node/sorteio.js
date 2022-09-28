const readlineSync = require('readline-sync');

function gameDivination () {
  const numberUser = readlineSync.questionInt('Informe um número para sortear:');
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber === numberUser){
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  }
  const playAgain = readlineSync.question('Deseja jogar novamente?:');
  if (playAgain === 'Sim') {
    gameDivination();
  } console.log('Obrigado pela visita!! =-)');
}

gameDivination();

module.exports = { gameDivination };