// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

//1
function prevent1(event) {
  event.preventDefault();
  
}
HREF_LINK.addEventListener("click",prevent1);

//2
function prevent2(event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click",prevent2);

//3
function prevent3(event) {
  if(event.key!=="a"){
    event.preventDefault(); 
  }
}
INPUT_TEXT.addEventListener("keypress",prevent3)