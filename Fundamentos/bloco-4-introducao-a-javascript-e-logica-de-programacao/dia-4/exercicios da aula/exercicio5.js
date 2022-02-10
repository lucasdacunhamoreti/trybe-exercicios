function anguloTriangulo(a,b,c) {
  if(a+b+c == 180){
    return(true);
  }
  else if(a+b+c < 180 || a+b+c > 180){
    return(false);
  }
  else{
    return('Ângulo inválido');
  }
}
console.log(anguloTriangulo(140,20,20));