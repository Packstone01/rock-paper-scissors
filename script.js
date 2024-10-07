let compChoice = '';
let humanChoice = '';

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

function getHumanChoice() {
  humanChoice = prompt('Do you choose rock, paper, or scissors? ');
}

function playGame() {
  let humanScore = 0;
  let compScore = 0;

   function playRound() {
     if (humanChoice === compChoice) {
       console.log(`Tie game, you both chose ${humanChoice}.`);
   } else if (humanChoice === 'rock' && compChoice === 'paper') {
       console.log(`You lost! The computer chose paper.`);
   } else if (humanChoice === 'rock' && compChoice === 'scissors') {
       console.log(`You won! The computer chose scissors.`);
   } else if (humanChoice === 'paper' && compChoice === 'scissors') {
       console.log(`You lost! The computer chose scissors.`);
   } else if (humanChoice === 'paper' && compChoice === 'rock') {
       console.log(`You won! The computer chose rock.`);
   } else if (humanChoice === 'scissors' && compChoice === 'rock') {
       console.log(`You lost! The computer chose rock.`);
   } else if (humanChoice === 'scissors' && compChoice === 'paper') {
       console.log(`You won! The computer chose paper.`);
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
playGame();
