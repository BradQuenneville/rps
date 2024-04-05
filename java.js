const RPS = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
let compRPS = RPS[Math.floor(Math.random() * RPS.length)];
return compRPS;
}