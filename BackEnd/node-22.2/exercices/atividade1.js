function verify (a, b, c) {
  const promisse = new Promise((resolve, reject) => {
    const result = (a+b) * c;
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject(`Informe apenas números`);
    if (result < 50) reject (`Valor muito baixo`);
    resolve(result);
  }
  );
  return promisse;
}

// async function main () {
//   try {
//     console.log(await verify(40, 20, 100));
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

module.exports = { verify };