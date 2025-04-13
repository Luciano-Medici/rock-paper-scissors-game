const container = document.querySelector("#container");
const btn = document.querySelector("#playGame");
const ROCK_ICON = "fa-solid fa-hand-back-fist fa-3x rockIcon";
const SCISSORS_ICON = "fa-solid fa-hand-scissors fa-3x scissorsIcon";
const PAPER_ICON = "fa-solid fa-hand fa-3x paperIcon";
let computer = 0;
let player = 0;
let winer = "";

btn.addEventListener("click", () => {
    btn.remove();
    const message = document.createElement("div");
    const actualRound = document.createElement("div");
    const options = document.createElement("div");
    const rockButton = document.createElement("button");
    const scissorsButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const rockIcon = document.createElement("i");
    const scissorsIcon = document.createElement("i");
    const paperIcon = document.createElement("i");
    const playerSide = document.createElement("div");
    const computerSide = document.createElement("div");
    const playerSelection = document.createElement("div");
    const playerScore = document.createElement("div");
    const computerSelection = document.createElement("div");
    const computerScore = document.createElement("div");
    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");

    rockIcon.setAttribute("class", ROCK_ICON);
    rockIcon.setAttribute("id", "rock");
    scissorsIcon.setAttribute("class", SCISSORS_ICON);
    scissorsIcon.setAttribute("id", "scissors");
    paperIcon.setAttribute("class", PAPER_ICON);
    paperIcon.setAttribute("id", "paper")

    message.setAttribute("class", "message");
    actualRound.setAttribute("class", "actualRound");
    options.setAttribute("class", "options");

    playerSide.setAttribute("class", "playerSide");
    computerSide.setAttribute("class", "computerSide");

    playerSelection.setAttribute("class", "playerSelection");
    playerScore.setAttribute("class", "playerScore");
    computerSelection.setAttribute("class", "computerSelection");
    computerScore.setAttribute("class", "computerScore");

    container.appendChild(message);
    container.appendChild(actualRound);
    container.appendChild(options);
    
    actualRound.appendChild(playerSide);
    actualRound.appendChild(computerSide);

    playerSide.appendChild(playerSelection);
    playerSide.appendChild(playerScore);
    computerSide.appendChild(computerSelection);
    computerSide.appendChild(computerScore);

    options.appendChild(rockButton);
    options.appendChild(scissorsButton);
    options.appendChild(paperButton);

    rockButton.appendChild(rockIcon);
    scissorsButton.appendChild(scissorsIcon);
    paperButton.appendChild(paperIcon);

    playerSelection.appendChild(icon1);
    computerSelection.appendChild(icon2);

    message.textContent = "The first to reach 5 wins! Select an option!";

    options.addEventListener("click", (event) => {
        let target = event.target;
        let computerChoice = getComputerChoice();
        icon2.setAttribute("class", "");
        icon2.setAttribute("class", getClass(computerChoice));
        switch(target.id){
            case "rock":
                icon1.setAttribute("class", "");
                icon1.setAttribute("class", getClass("rock"));
                winer = getWiner("rock", computerChoice);
                break;
            case "scissors":
                icon1.setAttribute("class", "");
                icon1.setAttribute("class", getClass("scissors"));
                winer = getWiner("scissors", computerChoice);
                break;
            case "paper":
                icon1.setAttribute("class", "");
                icon1.setAttribute("class", getClass("paper"));
                winer = getWiner("paper", computerChoice);
                break;
        }

        if (player == 5 || computer == 5){
            winer = endGame();
            message.textContent = `${winer} won the GAME! Select an option and play again!`
            player = 0;
            computer = 0;
        } else {
            message.textContent = winer == "Tie" ? "Tie! Play again!" : `${winer} wins this round!`;
        }
        playerScore.textContent = `Player = ${player}`;
        computerScore.textContent = `Computer = ${computer}`;
    });
})

function getComputerChoice(){
    let randomNumber = Math.ceil(Math.random() * 3);
    if (randomNumber == 1) return "rock";
    if (randomNumber == 2) return "scissors";
        return "paper";
}

function getWiner(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "Tie";
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"){
        player++;
        return "Player";
    } else {
        computer++;
        return "Computer";
    }
}

function endGame(){
    if (player == 5){
        return "Player";
    } else if (computer == 5) {
        return "Computer";
    }
}

function getClass(choice){
    if (choice == "rock"){
        return ROCK_ICON;
    } else if (choice == "scissors") {
        return SCISSORS_ICON;
    } else if (choice == "paper"){
        return PAPER_ICON;
    }
}