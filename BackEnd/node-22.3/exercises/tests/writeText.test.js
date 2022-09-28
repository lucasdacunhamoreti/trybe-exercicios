const { expect } = require('chai');
const sinon = require('sinon');

const { writeText } = require('../writeText');
const fs = require('fs').promises;



describe("Testes no módulo writeText", () => {
  describe("Testa funcionalidade", () => {
    before(() => {
        sinon.stub(fs, 'writeFile');
      });
    
      after(() => {
        fs.writeFile.restore();
      });
    it("Testa se quando passado o nome do arquivo e conteúdo cria um arquivo.", async () => {
      

      const textContent = await fs.readFile('./teste.txt', 'utf8');
      expect(await writeText('teste.txt', 'Teste de escrita')).equal('ok');
      expect(textContent).equal('Teste de escrita');
    });

    it('Testa se é uma "string"', async () => {
      expect(await writeText('teste.txt', 'Teste de escrita')).a('string');
    });
  });
});