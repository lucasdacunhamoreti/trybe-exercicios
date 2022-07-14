const lado1 = 150;
const lado2 = 20;
const lado3 = 10;

const soma = lado1+lado2+lado3;

if(lado1 < 0 || lado2 < 0 || lado3 < 0){
  console.log("Ângulo inválido");
}
else if(soma == 180){
  console.log(true);
}

else{
  console.log(false);
}
