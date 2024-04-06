// COMPUTER SELECTION
const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
let computerRPS = choices[Math.floor(Math.random() * choices.length)];
return computerRPS;
}
const computerSelection = getComputerChoice();

// PLAYER SELECTION
function playerSelection() {
    let playerRPS = prompt("Rock, paper, or scissors?");
    return playerRPS;
}
console.log(playerSelection())

// GAME
function playRound(playerSelection, computerSelection) {
    console.log("Computer chose ${computerSelection}")

    
  }
