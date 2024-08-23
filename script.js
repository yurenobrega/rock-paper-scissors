/* 

Create a function to get the computer choice

return randomly rock, paper or scissors

create a function to get the human choice

compare the human choice with the computer choice to decide the result

*/

let rockPaperScissors = ["rock", "paper", "scissors"];

function getComputerChoice(){
    

    let computerChoice = Math.floor(Math.random() * 3);

    return rockPaperScissors[computerChoice];
}

function getHumanChoice(){

    let humanChoice =  prompt("Choose between rock, paper or scissors");

    while(!rockPaperScissors.includes(humanChoice)){
        humanChoice =  prompt("You misspelled! Choose between rock, paper or scissors.");
    }

    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

if (humanChoice === computerChoice){
    console.log(`Draw! You chose ${humanChoice} and so did the computer! `);
} else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`)
} else{
    console.log(`You lost! ${computerChoice} beats ${humanChoice}!`)
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

