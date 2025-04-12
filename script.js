
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
const round = document.createElement("div");
round.setAttribute("class", "text");


options.appendChild(playerSide);
options.appendChild(computerSide);
options.appendChild(round);
options.appendChild(score);

function getComputerChoice(){
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "scissors";
        return "paper";
}

function getWiner(human, computer){
    if (human === computer){
        return "Tie";
    } else if (human === "rock" && computer === "scissors" ||
    human === "paper" && computer === "rock" ||
    human === "scissors" && computer === "paper"){
        playerScore++;
        return "Player";
    } else {
        computerScore++;
        return "Computer";
    }
}

function showResult(winer){
    round.textContent = winer == "Tie" ? "Tie! Play again!" : `${winer} wins!`;
    score.textContent = `Player = ${playerScore} Computer = ${computerScore}`;
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    let winer = getWiner(humanChoice, computerChoice)
    playerSide.textContent = "";
    playerSide.textContent = "Player choose: " + humanChoice;
    computerSide.textContent = "";
    computerSide.textContent = "Computer choice: " + computerChoice;
    showResult(winer);
}

function playGame(playerChoice){
    playRound(playerChoice);
    if (playerScore == 5){
        playerScore = 0;
        computerScore = 0;
        score.textContent = "";
        computerSide.textContent = "";
        playerSide.textContent = "";
        round.textContent = "";
        alert("YOU WON!")
    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        score.textContent = "";
        computerSide.textContent = "";
        playerSide.textContent = "";
        round.textContent = "";
        alert("YOU LOSE!")
    }
}

playerSelection.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "rock":
            playGame("rock");
            break;
        case "scissors":
            playGame("scissors");
            break;
        case "paper":
            playGame("paper");
            break;
    }
});