let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let indice = 0;indice < numbers.length; indice +=1){
  soma += numbers[indice];
  media = soma/numbers.length;
}
if(media > 20){
  console.log("valor maior que 20")
}
else{
  console.log("valor menor ou igual a 20");
}
