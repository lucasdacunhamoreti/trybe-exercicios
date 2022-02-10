function numMaior(a,b,c) {
  if(a>b && a >c){
    return(a+ ' é o maior');
  }
  else if(b>a && b>c){
    return(b+ ' é o maior');
  }
  else if (c>a && c>b){
    return(c+ ' é o maior');
  }
  else{
    return('Os numeros sao iguais');
  }
}
console.log(numMaior(500,500,500));