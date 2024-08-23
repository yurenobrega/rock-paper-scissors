/* Create function to get the computer choice

return randomly rock, paper or scissors

create function to get the human choice

compare the human choice with the computer choice to decide the result

*/

function getComputerChoice(){
    let rockPaperScissors = ["rock", "paper", "scissors"];

    let computerChoice = Math.floor(Math.random() * 3);

    return rockPaperScissors[computerChoice];
}

function getHumanChoice(){
    let humanChoice =  prompt("Choose between rock, paper or scissors");

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

