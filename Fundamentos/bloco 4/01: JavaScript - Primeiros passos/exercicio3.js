const a = 2;
const b = 2;
const c = 2;

if(a>b && a>c){
  console.log(a);
}
else if(b>a && b>c){
  console.log(b);
}
else if (c>a && c>b){
  console.log(c);
}
else{
  console.log("Os três números são iguais");
}