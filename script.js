let compChoice = '';
let humanChoice = '';

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    compChoice = 'rock';
  } else if (num === 2) {
    compChoice = 'paper';
  } else {
    compChoice = 'scissors';
  }
}

getComputerChoice();
console.log(compChoice);

function getHumanChoice() {
  humanChoice = prompt('Do you choose rock, paper, or scissors? ');
}

getHumanChoice();
humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);

function playRound(humanChoice, compChoice) {
  if (humanChoice === compChoice) {
    console.log('Tie game, you both chose ' + humanChoice);
  }
}
