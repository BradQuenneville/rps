// COMPUTER SELECTION
const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return computerRPS = choices[Math.floor(Math.random() * choices.length)];
}
const computerSelection = getComputerChoice();

// PLAYER SELECTION
function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?");
}
const playerSelection = getPlayerChoice();

// ONE ROUND
function playRound(playerSelection, computerSelection) {
    console.log(`Computer chose ${computerSelection}.`); 
// DRAWS
    if (computerSelection === "Rock" && playerSelection.toLowerCase() === "rock"){
        return "Draw.";
    } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "paper"){
        return "Draw.";
    } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "scissors"){
        return "Draw."; 
// PLAYER WINS    
    } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "rock"){
        return "You win!";
    } else if (computerSelection === "Rock" && playerSelection.toLowerCase() === "paper"){
        return "You win!";
    } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "scissors"){
        return "You win!";  
// COMPUTER WINS    
    } else if (computerSelection === "Rock" && playerSelection.toLowerCase() === "scissors"){
        return "We have a LOSER!";
    } else if (computerSelection === "Paper" && playerSelection.toLowerCase() === "rock"){
        return "We have a LOSER!";
    } else if (computerSelection === "Scissors" && playerSelection.toLowerCase() === "paper"){
        return "We have a LOSER!";
    }
}

