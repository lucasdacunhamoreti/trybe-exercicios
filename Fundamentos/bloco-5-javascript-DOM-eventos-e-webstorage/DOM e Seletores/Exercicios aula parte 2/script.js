let descricao = document.getElementsByTagName("p");
descricao[0].innerText = "Eu me vejo sendo um profissional de sucesso e muito bem de vida.";

let cor1 = document.getElementsByClassName("main-content");
cor1[0].style.background = "rgb(76,164,109)";

let cor2 = document.getElementsByClassName("center-content");
cor2[0].style.background = "white";
      
let corrigeTexto = document.getElementsByTagName("h1");
corrigeTexto[0].innerText = "Exercício 5.1 - JavaScript";
      
let converteMaiusculo = document.getElementsByTagName("p");
    for(let i = 0; i<converteMaiusculo.length;i+=1){
     converteMaiusculo = converteMaiusculo[i].style.textTransform = "uppercase";
    }