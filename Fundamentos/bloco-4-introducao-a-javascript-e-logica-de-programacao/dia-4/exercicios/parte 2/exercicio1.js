function palindromo(palavra) {
  let inverso = palavra.split('').reverse().join('');
  if(inverso === palavra){
    return(true);
  }else{
    return(false);
  }
}
console.log(palindromo('desenvolvimento'));