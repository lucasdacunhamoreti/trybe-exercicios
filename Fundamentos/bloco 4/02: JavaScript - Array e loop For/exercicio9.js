const contador = 25;
let contagem = []; 
let divisao = 0;

for (let index = 1; index <= contador; index++) {
  contagem.push(index);
}
for (let index = 0; index < contagem.length; index++) {
  divisao = contagem[index]/2
  console.log(divisao);
  
}

