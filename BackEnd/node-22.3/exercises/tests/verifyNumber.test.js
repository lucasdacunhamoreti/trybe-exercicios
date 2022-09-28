const { verifyNumber } = require('../verifyNumber');

const { expect } = require('chai');

describe("Testes no módulo verifyNumber", () => {
  describe("Testa números", () => {
    it("Testa se o numero passado é negativo, positivo ou neutro.", async () => {
      expect(await verifyNumber(-1)).to.equal('Negativo');
      expect(await verifyNumber(0)).to.equal('Neutro');
      expect(await verifyNumber(1)).to.equal('Positivo');
    });

    it("Testa se ao passar um parâmetro que não seja um número retorne o erro: 'O valor deve ser um número.'", async () => {
      expect(await verifyNumber('a')).to.equal('O valor deve ser um número.');
    });
  });
});