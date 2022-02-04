//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

const peca = "rei";

switch(peca.toLowerCase()){
    case "bispo":
        console.log("Diagonal");
        break;
    
    case "peao":
        console.log("Vertical");
         break;

    case "torre":
        console.log("Linha reta horizontalmente e verticalmente");
        break;
    
    case "cavalo":
        console.log("Duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
        break;

    case "rainha":
        console.log(peca+ " ->  Verticalmente, horizontalmente ou diagonalmente");
        break;

    case "rei":
        console.log(peca+ " ->  Horizontalmente, verticalmente ou diagonalmente");
        break;

    case "rei":
        console.log(peca+ " ->  Horizontalmente, verticalmente ou diagonalmente");
        break;

    default:
        console.log("Essa peça é inválida!")
}
