"use strict";
// Create function to get the computer's choice
// Randomly returns rock, paper or scissors.
function getComputerChoice() {
    let randomNumber;
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

// Create function to get the user's choice
// Prompts the user to enter their choice of eiter rock, paper
// or scissors.
function getHumanChoice() {
    let userInput;
    userInput = prompt("What's your choice?");
    userInput = userInput.toLowerCase();

    if (userInput !== "rock" && userInput !== "paper" && 
        userInput !== "scissors") {
        return;
    }
    else {
        return userInput;
    }
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);

playRound(humanSelection, computerSelection);

// Create function to play an entire game (5 rounds)
// Calls playRound 5 times
function playGame() {
    // Declare variable for game score for the computer.
    let computerScore = 0;

    // Declare variable for game score for the user.
    let humanScore = 0;

    // Create funtion to play a single round
    //   If computer's choice beats user's choice, update
    //   computer score by 1, and output a string of the result.
    //   If user's choice beats computer's choice, update
    //   user score by 1, and output a string of the result.
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "rock" && 
        computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "rock" &&
        computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "paper" && 
        computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "paper" && 
        computerChoice === "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "scissors" && 
        computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
        else if (humanChoice === "scissors" && 
        computerChoice === "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
            console.log(`The score is: ${humanScore}-${computerScore}`);
        }
    }
}

