//variable
//humanScore
//computerScore
//array of r, p, s

//human chooses r, p, s

//computer chooses r, p, s

let humanScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];
let isRunning = true;
let humanChoice = "";
let computerChoice = "";
let playAgain = "";

while (isRunning === true) {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  humanChoice = prompt("Enter rock, paper, or scissors: ");
  humanChoice.toUpperCase();
  computerChoice.toUpperCase();
  if (humanChoice === computerChoice) {
    window.alert(
      `It's a tie! You chose ${humanChoice} and the computer chose ${computerChoice}. The current score is Human: ${humanScore} Computer: ${computerScore}`
    );
  } else if (
    (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (humanChoice === "PAPER" && computerChoice === "ROCK") ||
    (humanChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    humanScore++;
    window.alert(
      `You win! You chose ${humanChoice} and the computer chose ${computerChoice}. The current score is Human: ${humanScore} Computer: ${computerScore}`
    );
  } else if (
    (humanChoice === "ROCK" && computerChoice === "PAPER") ||
    (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (humanChoice === "SCISSORS" && computerChoice === "ROCK")
  ) {
    computerScore++;
    window.alert(
      `You lose! You chose ${humanChoice} and the computer chose ${computerChoice}. The current score is Human: ${humanScore} Computer: ${computerScore}`
    );
  } else {
    window.alert("Invalid input. Please try again.");
  }
  playAgain = prompt("Do you want to play again? (yes or no)");
  playAgain.toUpperCase();
  if (playAgain === "NO") {
    isRunning = false;
  }
}
