// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// const fatorial = (number) => {
//   let resultado = number;
//   for (let index = 1; index < number; index+=1) {
//     resultado = resultado * index;
//   }
//   return resultado;
// }
// const retornaValor = fatorial(6);
// console.log(`O resultado do fatorial é '${retornaValor}'`);

const fatorial = (number) => number > 1 ? number * fatorial(number - 1) : 1;
console.log(fatorial(5));