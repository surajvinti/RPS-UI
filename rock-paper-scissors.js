"use strict";
// Create function to get the computer's choice
// Randomly returns rock, paper or scissors.
function getComputerChoice() {
    let computerChoice;
    computerChoice = Math.floor(Math.random() * 3) + 1;
    
    if (computerChoice === 1) {
        return "rock";
    }
    else if (computerChoice === 2) {
        return "paper";
    }
    else if (computerChoice === 3) {
        return "scissors";
    }
}

console.log(getComputerChoice());

// Create function to get the user's choice
// Prompts the user to enter their choice of eiter rock, paper
// or scissors.
function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt("What's your choice?");

    if (humanChoice !== "rock" || humanChoice !== "paper" || 
        humanChoice !== "scissors") {
        return;
    }
    else {
        return humanChoice;
    }
}

console.log(getHumanChoice());

// Declare variable for game score for the computer.
let computerScore = 0;

// Declare variable for game score for the user.
let humanScore = 0;