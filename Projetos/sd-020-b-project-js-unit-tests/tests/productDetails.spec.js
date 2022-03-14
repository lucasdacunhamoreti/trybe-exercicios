const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const arrayCheck = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(arrayCheck)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const productTypeCheck = productDetails('Alcool gel', 'Máscara');
    for (let i = 0; i < productTypeCheck.length; i += 1) {
      expect(typeof productTypeCheck[i]).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const productDifferenceCheck = productDetails('Alcool gel', 'Máscara');
    expect(productDifferenceCheck[0] !== productDifferenceCheck[1]).toBeTruthy();
  
    // Teste se os dois productIds terminam com 123.
    const endWord = productDetails('Alcool gel', 'Máscara');
    for (let i = 0; i < productDifferenceCheck.length; i += 1) {
      expect(endWord[i].details.productId.endsWith('123')).toBeTruthy();
    } 
  });
});
