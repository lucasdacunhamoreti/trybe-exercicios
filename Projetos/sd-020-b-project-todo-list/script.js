//Função de criar as tarefas e adicionar em uma lista
let buttonAdd = document.getElementById("criar-tarefa");
let inputText = document.getElementById("texto-tarefa");
let recebeLista = document.getElementById("lista-tarefas");

buttonAdd.addEventListener("click",addList);

function addList(event) {
  let recebeTexto = inputText.value;
  let text = document.createElement("li");
  text.innerText = recebeTexto;
  recebeLista.appendChild(text);
  inputText.value = '';
}

//Seleciona os itens da lista com a cor cinza
recebeLista.addEventListener("click",colorGray);

function colorGray(event) {
  
  let teste = document.getElementsByTagName("li");
  for (let i = 0; i < teste.length; i+=1) {
    teste[i].classList.remove("selected");
    teste[i].style.background = "white";
    event.target.classList.add("selected");
    event.target.style.background = "gray";
  }
}

//Tarefas completas
recebeLista.addEventListener("dblclick",tarefasCompletas);

function tarefasCompletas(event) {
  if (event.target.classList.contains("completed")) {
    event.target.classList.remove("completed")
    } else {
      event.target.classList.add("completed");
    }
}

//Excluir lista de tarefas
let botaoApaga = document.getElementById("apaga-tudo");
let recebeLista2 = document.getElementById("lista-tarefas");
botaoApaga.addEventListener("click",apagar);

function apagar(event) {
  recebeLista.innerText = "";
}

//Excluir tarefas finalizadas
let botaoApagaFinalizados = document.getElementById("remover-finalizados");
botaoApagaFinalizados.addEventListener("click",apagaFinalizados);

function apagaFinalizados() {
  let completed = document.querySelectorAll(".completed");
  for (let i = 0; i < completed.length; i+=1) {
    completed[i].remove();
  }
}

//Remove um item da lista selecionado
let tarefaSelecionada = document.getElementsByTagName("li");
let botaoRemoveSelecionado = document.getElementById("remover-selecionado");
botaoRemoveSelecionado.addEventListener("click",removeSelecionado);

function removeSelecionado() {
  for (let i = 0; i < tarefaSelecionada.length; i+=1) {
    if(tarefaSelecionada[i].classList.contains("selected")) 
    recebeLista.removeChild(tarefaSelecionada[i]);
  }
}

//Salvar tarefas
let buttonSave = document.getElementById("salvar-tarefas");
buttonSave.addEventListener("click",saveListStorage);

function saveListStorage() {
  let recebeLista = document.getElementById("lista-tarefas");
  localStorage.setItem("Tarefas",recebeLista.innerHTML);
}

window.onload = function() {
  let recebeLista = document.getElementById("lista-tarefas");
  let tarefas = localStorage.getItem("Tarefas");
  recebeLista.innerHTML = tarefas;
  localStorage.removeItem("Tarefas");
}









