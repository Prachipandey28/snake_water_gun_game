let userScore = 0;
let computerScore = 0;

function playGame(userChoice){

const choices = ["snake","water","gun"];

const computerChoice =
    choices[Math.floor(Math.random()*3)];

let result = "";

if(userChoice === computerChoice){

    result = "🤝 Draw";

}

else if(
    (userChoice === "snake" && computerChoice === "water") ||
    (userChoice === "water" && computerChoice === "gun") ||
    (userChoice === "gun" && computerChoice === "snake")
){

    result = "🎉 You Win!";
    userScore++;

}

else{

    result = "😢 Computer Wins!";
    computerScore++;

}

document.getElementById("result").textContent =
    result;

document.getElementById("userChoice").textContent =
    "You Chose: " + userChoice;

document.getElementById("computerChoice").textContent =
    "Computer Chose: " + computerChoice;

document.getElementById("userScore").textContent =
    userScore;

document.getElementById("computerScore").textContent =
    computerScore;

}

function resetGame(){

userScore = 0;
computerScore = 0;

document.getElementById("userScore").textContent = "0";
document.getElementById("computerScore").textContent = "0";

document.getElementById("result").textContent =
    "Choose Your Weapon";

document.getElementById("userChoice").textContent = "";
document.getElementById("computerChoice").textContent = "";

}
