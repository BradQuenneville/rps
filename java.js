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

// GAME
function playRound(playerSelection, computerSelection) {
    console.log(`Computer chose ${computerSelection}.`); 
    if (computerSelection === "Rock" && playerSelection.toLowerCase === "rock"){
        console.log("Draw!");
    }
  }

