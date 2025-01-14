"use strict";
// Create function to get the computer's choice
// Randomly returns rock, paper or scissors.
let randomNumber;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
}

let buttons = document.querySelectorAll("button");

// Create function to get the user's choice
// Prompts the user to enter their choice of eiter rock, paper
// or scissors.

buttons.forEach((button) => {
    button.addEventListener("click", playRound)
});

let humanChoice = "";

const scoreboard = document.querySelector("div");


// Create funtion to play a single round
//   If computer's choice beats user's choice, update
//   computer score by 1, and output a string of the result.
//   If user's choice beats computer's choice, update
//   user score by 1, and output a string of the result.

// Declare variable for game score for the computer.
let computerScore = 0;

// Declare variable for game score for the user.
let humanScore = 0;

function playRound(event) {

    humanChoice = event.target.id;
    let computerChoice = getComputerChoice();

    if (humanScore < 5 && computerScore < 5) {
        if (humanChoice === computerChoice) {
            scoreboard.textContent = `It's a tie \n The score is: ${humanScore}-${computerScore}`;
        }
        else if (humanChoice === "rock" && 
        computerChoice === "scissors") {
            humanScore++;
            if (humanScore == 5) {
                scoreboard.textContent = "Congrats! You're the Champ!"
            }
            else {
                scoreboard.textContent = `You win! Rock beats Scissors \n The score is: ${humanScore}-${computerScore}`;
            }
        }
        else if (humanChoice === "rock" &&
        computerChoice === "paper") {
            computerScore++;
            if (computerScore == 5) {
                scoreboard.textContent = "Womp Womp loser, better luck next time!"
            }
            else {
                scoreboard.textContent = `You lose! Paper beats Rock \n The score is: ${humanScore}-${computerScore}`;
            }
        }
        else if (humanChoice === "paper" && 
        computerChoice === "rock") {
            humanScore++;
            if (humanScore == 5) {
                scoreboard.textContent = "Congrats! You're the Champ"
            }
            else {
                scoreboard.textContent = `You win! Paper beats Rock \n The score is: ${humanScore}-${computerScore}`;
            }
        }
        else if (humanChoice === "paper" && 
        computerChoice === "scissors") {
            if (computerScore == 5) {
                scoreboard.textContent = "Womp Womp loser, better luck next time!"
            }
            else {
                scoreboard.textContent = `You lose! Scissors beats Paper \n The score is: ${humanScore}-${computerScore}`;
            }
        }
        else if (humanChoice === "scissors" && 
        computerChoice === "paper") {
            humanScore++;
            if (humanScore == 5) {
                scoreboard.textContent = "Congrats! You're the Champ"
            }
            else {
                scoreboard.textContent = `You win! Scissors beats Paper \n The score is: ${humanScore}-${computerScore}`;
            }
        }
        else if (humanChoice === "scissors" && 
        computerChoice === "rock") {
            computerScore++;
            if (computerScore == 5) {
                scoreboard.textContent = "Womp Womp loser, better luck next time!"
            }
            else {
                scoreboard.textContent = `You lose! Rock beats Scissors \n The score is: ${humanScore}-${computerScore}`;
            }
        }
    }
}