const custo = 100;
const valorVenda = 140;

impostoSobreOCusto = custo*0.2
valorCustoTotal = custo + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal;
console.log('A empresa terá ' +lucro * 1000, 'de lucro ao vender 1000 produtos');

if(custo < 0 || valorVenda < 0){
  console.log('Valor menor que zero');
}