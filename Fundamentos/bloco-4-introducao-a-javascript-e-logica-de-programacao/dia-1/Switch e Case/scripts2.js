let processoSeletivo = "aprovada";

switch(processoSeletivo){
    case "aprovada":
        console.log("PARABÉNS! VOCÊ FOI APROVADA.");
        break;
    
    case "lista":
        console.log("ATENÇÃO! VOCÊ ESTÁ NA LISTA DE ESPERA.");
        break;
    
    case "reprovada":
        console.log("QUE PENA! VOCÊ FOI REPROVADA.");
        break;
    default:
        console.log("Não se aplica")
    }