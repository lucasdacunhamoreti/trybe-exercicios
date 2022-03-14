// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(" ");
  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  let ultimaString = arrayStrings[arrayStrings.length-1];
  let primeiraString = arrayStrings[0];
  return ultimaString + ", " + primeiraString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties*1);
}

// Desafio 6
function highestCount(numbers) {
  let maior = numbers[0];
  let contador = 0;
  for(let index = 0; index<numbers.length; index +=1){
    if(numbers[index]>maior){
      maior = numbers[index];
    }
  }
  for(let value of numbers){
    if(value === maior){
      contador+=1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaoGato1 = Math.abs(cat1-mouse); 
  let posicaoGato2 = Math.abs(cat2-mouse);
  if(posicaoGato1<posicaoGato2){
    return 'cat1';
  }
  else if (posicaoGato2<posicaoGato1){
    return 'cat2';
  }
  else
    return 'os gatos trombam e o rato foge';
  }
 

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let recebeStrings = [];
  for(let key in arrayNumeros){
    if(arrayNumeros[key]%3 === 0 && arrayNumeros[key]%5 === 0){
      recebeStrings.push('fizzBuzz');
    }
    else if(arrayNumeros[key]%3 === 0){
      recebeStrings.push('fizz');
    }
    else if(arrayNumeros[key]%5 === 0){
      recebeStrings.push('buzz');
    }
    else{
      recebeStrings.push('bug!');
    }
  }
  return recebeStrings;
}

// Desafio 9
function encode(string) {
 let separador = string.split("");
 let codificado = [];
 for(let i = 0; i<separador.length; i+=1){
   if(string[i] === 'a'){
    codificado.push('1');
   }
   else if(string[i] === 'e'){
    codificado.push('2');
   }
   else if(string[i] === 'i'){
    codificado.push('3');
   }
   else if(string[i] === 'o'){
    codificado.push('4');
   }
   else if(string[i] === 'u'){
    codificado.push('5');
   }
   else{
    codificado.push(string[i]);
   }
 }
 return codificado.join('');
}

function decode(string) {
let separador = string.split("");
 let decodificado = [];
 for(let i = 0; i<separador.length; i+=1){
   if(string[i] === '1'){
  decodificado.push('a');
}
   else if(string[i] === '2'){
    decodificado.push('e');
   }
   else if(string[i] === '3'){
    decodificado.push('i');
   }
   else if(string[i] === '4'){
    decodificado.push('o');
   }
   else if(string[i] === '5'){
    decodificado.push('u');
   }
   else{
    decodificado.push(string[i]);
   }
 }
 return decodificado.join('');
}

// Desafio 10
function techList(arrayNomes, name){
  if(arrayNomes.length===0){
    return ('Vazio!');
  }
  arrayNomes.sort();
  let recebe = [];
  for (let index = 0; index < arrayNomes.length; index+=1) {
  recebe.push({tech:arrayNomes[index],name:name});
  }
  return recebe;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas");



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
