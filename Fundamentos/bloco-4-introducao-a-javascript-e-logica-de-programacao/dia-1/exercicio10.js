const custo = 0;
const valorVenda = 20;

impostoSobreOCusto = custo * (20/100)
valorCustoTotal = custo + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal

if(custo < 0 || valorVenda < 0){
    console.log("Valores inválidos");
}
else{
    console.log(lucro);
}