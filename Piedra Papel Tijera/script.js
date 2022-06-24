const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1){
        computerChoice = "Piedra";
    } else if(randomNumber === 2){
        computerChoice = "Tijera"
    } else{
        computerChoice = "Papel"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = "Es un empate!";
    } else if (computerChoice === "Piedra" && userChoice === "Papel"){
        result = "Ganaste!"
    } else if (computerChoice === "Piedra" && userChoice === "Tijera"){
        result = "Perdiste!"
    } else if (computerChoice === "Papel" && userChoice === "Tijera"){
        result = "Ganaste!"
    } else if (computerChoice === "Papel" && userChoice === "Piedra"){
        result = "Perdiste!"
    } else if (computerChoice === "Tijera" && userChoice === "Piedra"){
        result = "Ganaste!"
    } else if(computerChoice === "Tijera" && userChoice === "Papel"){
        result = "Perdiste!"
    }
    resultDisplay.innerHTML = result;
}