//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 62;
const num2 = 1;
const num3 = 54;

if(num1 > num2 && num1 > num3){
    console.log(num1);
}
else if(num2 > num1 && num2 > num3){
    console.log(num2);
}
else{
    console.log(num3);
}