const { verify } = require('./atividade1');

// async function randomNumbers () {
//   try {
//     const num1 = Number(Math.floor(Math.random() * 100 + 1));
//     const num2 = Number(Math.floor(Math.random() * 100 + 1));
//     const num3 = Number(Math.floor(Math.random() * 100 + 1));

//     const returnPromisse = await verify(num1, num2, num3);
//     console.log(returnPromisse);
    
//   } catch (error) {
//     console.log(error);
//   }
// }

function randomNumbers () {
  const num1 = Number(Math.floor(Math.random() * 100 + 1));
  const num2 = Number(Math.floor(Math.random() * 100 + 1));
  const num3 = Number(Math.floor(Math.random() * 100 + 1));

  verify(num1, num2, num3).then((resolve) => {
    console.log(resolve);
  }).catch((reject) => {
    console.log(reject);
  });
}

randomNumbers();
