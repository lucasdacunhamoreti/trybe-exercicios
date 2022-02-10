//Header principal
let head = document.querySelector("#header-container");
head.style.background = "green";

// Lista Urgente
let emergencyTasks1 = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasks1.length; index+=1) {
  emergencyTasks1[index].style.background = "purple";
}

// Lista não urgente
let emergencyTasks2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < emergencyTasks2.length; index+=1) {
  emergencyTasks2[index].style.background = "black";
}

//Define cor da lista Urgente
let colorEmergencyTasks1 = document.querySelector(".emergency-tasks");
colorEmergencyTasks1.style.background = "salmon";

//Define cor da Lista não urgente
let colorEmergencyTasks2 = document.querySelector(".no-emergency-tasks");
colorEmergencyTasks2.style.background = "yellow";

//Define cor do footer
let footer = document.getElementById("footer-container");
footer.style.background = "green";