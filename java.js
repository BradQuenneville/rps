const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");

// COMPUTER SELECTION
const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
    

// GAME
let playerScore = 0
let compScore = 0

function playGame(playerSelection, computerSelection){
    if (playerScore < 5 && compScore < 5) {if ((computerSelection === "Scissors" && playerSelection === "Rock") ||
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors")) {
        ++playerScore; 
        const p = document.createElement('p')
        p.textContent = `Player WINS! You chose ${playerSelection}. Computer chose ${computerSelection}.
            Player: ${playerScore}, Computer: ${compScore}`;
        results.appendChild(p);
    }  else if (computerSelection === playerSelection) {
        const p = document.createElement('p')
        p.textContent = `DRAW! You chose ${playerSelection}. Computer chose ${computerSelection}.
            Player: ${playerScore}, Computer: ${compScore}`;
        results.appendChild(p);
    }  else {
        ++compScore; 
        const p = document.createElement('p')
        p.textContent = `Player LOSES! You chose ${playerSelection}. Computer chose ${computerSelection}.
            Player: ${playerScore}, Computer: ${compScore}`;
        results.appendChild(p);
    }
}
}

// RESULTS
const checkWinner = (playerScore, compScore) => {
if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add("playerWin")
    h2.textContent = 'You win! Congratulations!!! Refresh to play again.';
    h2.style.cssText = "background:green";
    results.appendChild(h2);
} else if (compScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add("playerLoss")
    h2.textContent = 'You lose! Sucks to be you!!! Refresh to try again.';
    h2.style.cssText = "background:red";
    results.appendChild(h2);
};
};

// BUTTONS

rockBtn.addEventListener("click", () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    checkWinner(playerScore, compScore);
})
paperBtn.addEventListener("click", () => {
    const playerSelection = "Paper"
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    checkWinner(playerScore, compScore);
})
scissorsBtn.addEventListener("click", () => {
    const playerSelection = "Scissors"
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    checkWinner(playerScore, compScore);
})


