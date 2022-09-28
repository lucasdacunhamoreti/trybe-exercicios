const { verify } = require('./atividade1');

async function randomNumbers () {
  try {
    const num1 = Number(Math.floor(Math.random() * 100 + 1));
    const num2 = Number(Math.floor(Math.random() * 100 + 1));
    const num3 = Number(Math.floor(Math.random() * 100 + 1));

    const returnPromisse = await verify(num1, num2, num3);
    console.log(returnPromisse);
    
  } catch (error) {
    console.log(error);
  }
}

randomNumbers();