/* 

Create a function to get the computer choice

return randomly rock, paper or scissors

create a function to get the human choice

compare the human choice with the computer choice to decide the result

*/

let rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return rockPaperScissors[computerChoice];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper or scissors");
    while (!rockPaperScissors.includes(humanChoice)) {
        humanChoice = prompt("You misspelled! Choose between rock, paper or scissors.");
    }
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`Draw! You chose ${humanChoice} and so did the computer! `);
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }

    else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    }
}

function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Your score: " + humanScore)
    console.log("Computer score: " + computerScore)
}

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore === computerScore) {
    console.log("The game ended in a draw!")
} else if (humanScore > computerScore) {
    console.log("You won the game!")
} else if (computerScore < computerScore) {
    console.log("You lost the game!")
}






