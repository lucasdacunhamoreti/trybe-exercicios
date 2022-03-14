window.onload = (selectColorInitial);

//Inicia a página com todos os píxels em branco e define a cor preta como cor inicial da paleta;
function selectColorInitial (event) {
  let pixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = "white";
  }
  if (colorPalette[0].style.background === "black") {
    colorPalette[0].classList.add("selected");
  }
}

// Gera cores aleatórias
let colors = [];
for (let i = 0; i < 3; i+=1) {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  
  let coresAleatorias = ("rgb"+"("+ r + "," + g + "," + b + ")");
  colors.push(coresAleatorias);
}

//Inicia a paleta de acordo com as cores inseridas no array.
let colorPalette = document.querySelectorAll(".color");
function createPalette(colors) {
  for (let i = 0; i < colors.length; i += 1) {
    colorPalette[i].style.background = colors[i];
  }
  
}
createPalette(["black",colors[0], colors[1], colors[2]]);


//Inicia a página com 5x5 pixels;
let pixelSquare = document.getElementById("pixel-board");
function createPixel(numberOfPixels) {
  pixelSquare.innerHTML = "";
  for (let i = 1; i <= numberOfPixels; i += 1) {
    let line = document.createElement("div");
    line.className = "line";
    pixelSquare.appendChild(line);

    for (let i = 1; i <= numberOfPixels; i += 1) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      line.appendChild(pixel);
    }
  }
}
createPixel(5);

//Seleciona a cor da paleta;
const paletteColor = document.querySelector('#color-palette');
paletteColor.addEventListener("click", selectPalette);

function selectPalette(event) {
  let selectedPalette = document.querySelector('.selected');
  selectedPalette.classList.remove('selected');
  event.target.classList.add('selected');
}

//Pinta os pixels;
let pixels = document.querySelectorAll(".pixel");
for(let i of pixels){
  i.addEventListener("click",colorPixel)
}

function colorPixel(event){
  let colorSelected = document.querySelector(".selected").style.backgroundColor;
  event.target.style.backgroundColor = colorSelected;
}

//Limpa os pixels;
let buttonClear = document.getElementById("clear-board");
buttonClear.addEventListener("click",cleanPixels);

function cleanPixels() {
  let cor = document.querySelectorAll(".pixel");
  for (let j = 0; j < cor.length; j+=1) {
    cor[j].style.backgroundColor = "white";
  }
}

//Cria a quantidade de pixels definida pelo usuário;
let input = document.getElementById("board-size");
let buttonInput = document.getElementById("generate-board");
buttonInput.addEventListener("click",criaPixels)

function criaPixels() {
  let valor = input.value;
  if(valor == ""){
    alert("Board inválido!");
  }
  else if(valor<5){
    createPixel(5);
  }
  else if(valor>50){
    createPixel(50);
  }
  else{
    createPixel(valor);
    let pixels = document.querySelectorAll(".pixel");
    for(let i of pixels){
    i.addEventListener("click",colorPixel);
  }
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = "white";
  }
  }
}



