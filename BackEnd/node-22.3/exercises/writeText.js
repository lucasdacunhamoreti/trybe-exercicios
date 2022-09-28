

const fs = require('fs').promises;

function writeText(nameArquive, text) {
  fs.writeFile(nameArquive, text);
  return 'ok';
}

writeText('teste.txt', 'Teste de escrita');

module.exports = { writeText };