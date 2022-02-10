function numMaior(a,b) {
  if(a>b){
    return (a+ ' é o maior');
  }
  else if(b>a){
    return (b+ ' é o maior');
  }
  else{
    return ('Os numeros são iguais');
  }
}
console.log(numMaior(820,82));
