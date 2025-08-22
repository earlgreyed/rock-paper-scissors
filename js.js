// Return rock, paper or scissors for computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(`computer: ${computerChoice}`);
    return computerChoice;
}

// Return human choice

function getHumanChoice() {
    let humanChoice = prompt("your choice").toLowerCase();
    console.log(`you: ${humanChoice}`);
    return humanChoice;
}

// Game

function playGame {

// Scores
let humanScore = 0;
let computerScore = 0;

// Round
function playRound(humanChoice, computerChoice) {
    if (computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "scissors" && humanChoice === "rock"
    ) {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === humanChoice) {
        return console.log(`It's a draw`);
    }
    else {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}