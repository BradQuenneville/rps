// COMPUTER SELECTION
const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return computerRPS = choices[Math.floor(Math.random() * choices.length)];
}

// PLAYER SELECTION
function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?");
}

// ONE ROUND
function playRound(playerSelection, computerSelection) {
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        return "Draw";
    } else if ((computerSelection === "Scissors" && playerSelection.toLowerCase() === "rock") ||
               (computerSelection === "Rock" && playerSelection.toLowerCase() === "paper") ||
               (computerSelection === "Paper" && playerSelection.toLowerCase() === "scissors")) {
        return "Win";
    } else {
        return "Loss";
    }
}

// GAME
let playerScore = 0
let compScore = 0

function playGame(){
    let playerSelection = getPlayerChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection)
    console.log(`Computer chose ${computerSelection}. You chose ${playerSelection}.`)
    if (roundResult == "Win") {
        ++playerScore, console.log(`Player WINS! Player: ${playerScore}, Computer: ${compScore}`)
    } else if (roundResult == "Loss") {
        ++compScore, console.log(`Player LOSES! Player: ${playerScore}, Computer: ${compScore}`)
    } else if (roundResult == "Draw") {
        console.log(`DRAW! Player: ${playerScore}, Computer: ${compScore}`)
    }
}

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());

// RESULTS
if (playerScore > compScore) {
    console.log('You win! Congratulations!!! Refresh to play again.');
} else if (playerScore < compScore) {
    console.log('You lose! Sucks to be you!!! Refresh to try again.');
} else {
    console.log('The game was a draw. Refresh to try again.');
}


