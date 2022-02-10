let palavra = 'banana';
let palavraAoContrario = '';

for(let index =  palavra.length-1; index >=0; index -=1){
  palavraAoContrario+=palavra[index];
}
console.log(palavraAoContrario);