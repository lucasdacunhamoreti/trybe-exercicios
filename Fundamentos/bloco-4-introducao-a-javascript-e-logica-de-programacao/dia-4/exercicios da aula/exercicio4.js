function positivoOuNegativo(a) {
  if(a>0){
    return('Positive');
  }
  else if(a<0){
    return('Negative');
  }
  else{
    return('Zero');
  }
}
console.log(positivoOuNegativo(20));