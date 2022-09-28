const readlineSync = require('readline-sync');

function calculateVelocity () {
  const distancia = readlineSync.questionInt('Informe a distância em metros:');
  const tempo = readlineSync.questionInt('Informe o tempo em segundos:');
  return `A velocidade média é de ${distancia / tempo} Km/H`;
}

console.log(calculateVelocity());

module.exports = { calculateVelocity };