
let playerScore = 0;
let computerScore = 0;
const playerSide = document.createElement("div");
playerSide.setAttribute("class", "text");
const computerSide = document.createElement("div");
computerSide.setAttribute("class", "text")
const score = document.createElement("div");
score.setAttribute("class", "text");
const options = document.querySelector("#options");
const playerSelection = document.querySelector("#options");

options.appendChild(playerSide);
options.appendChild(computerSide);
options.appendChild(score);

function getComputerChoice(){
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "scissors";
        return "paper";
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    playerSide.textContent = "";
    playerSide.textContent = "Player choose: " + humanChoice;
    computerSide.textContent = "";
    computerSide.textContent = "Computer choice: " + computerChoice;
    if (humanChoice === computerChoice){
        score.textContent = `Tie! Nobody win this round\n\rPlayer = ${playerScore}\n\rComputer = ${computerScore}`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"){
        playerScore++;
        score.textContent = `Player wins this round\n\rPlayer = ${playerScore}\n\rComputer = ${computerScore}`;
    } else {
        computerScore++;
        score.textContent = `Computer wins this round\n\rPlayer = ${playerScore}\n\rComputer = ${computerScore}`;
    }
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        score.textContent = "";
        score.textContent = "Player wins the GAME!. Select an option to start playing again.";
    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        score.textContent = "";
        score.textContent = "Computer wins the GAME!. Select an option to start playing again.";
    }
}

playerSelection.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "rock":
            playRound("rock");
            break;
        case "scissors":
            playRound("scissors");
            break;
        case "paper":
            playRound("paper");
            break;
    }
});