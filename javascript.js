function getComputerChoice(){
    let randomNumber = Math.random() * 100;
    if (randomNumber < 33) {
        return "rock"; 
    } else if (randomNumber >= 33 && randomNumber < 66){
        return "scissors"
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    return prompt("What's your choice? (rock, scissors or paper)", "");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    if (humanChoice === computerChoice){
        return "Tie! Nobody win this round"
    } else if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            humanSocre++;
            return "Rocks beat Scissors! Player wins this round";
        } else {
            computerScore++;
            return "Paper beat rocks! Computer wins this round";
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock") {
            humanSocre++;
            return "Paper beat rock! Player wins this round";
        } else {
            computerScore++;
            return "Scissors beat paper! Computer wins this round";
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "paper"){
                humanSocre++;
                return "Scissors beat paper! Player wins this round";
            } else {
                computerScore++;
                return "Rock beat scissors! Computer wins this round";
            }
        }
    return "probablemente player eligio una opcion incorrecta";
    }

let humanSocre = 0;
let computerScore = 0;
let round = 1;

while (round <= 5){
    console.log(`This is the round number: ${round}`);
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(`Player score: ${humanSocre}`);
    console.log(`Compter score: ${computerScore}`);
    console.log("***************************")
    round++;
}

if (humanSocre > computerScore) {
    console.log("Player wins THE GAME!");
} else if (humanScore < computerScore) {
    console.log("Computer win THE GAME!")
} else {
    console.log("TIE! Play again");
}
