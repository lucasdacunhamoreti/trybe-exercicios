const increment = (obj,key,value) => {
  obj[key] = value;
  return;
}

console.log(increment('customer','Nome','Lucas'));