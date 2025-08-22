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
    console.log(`hal: ${computerChoice}`);
    return computerChoice;
}

// Return human choice
function getHumanChoice() {
    let humanChoice = prompt("your choice").toLowerCase();
    console.log(`you: ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "scissors" && humanChoice === "rock"
    ) {
        humanScore++;
        return console.log(`you win! ${humanChoice} beats ${computerChoice}. score: you ${humanScore} – ${computerScore} hal`);
    }
    else if (computerChoice === humanChoice) {
        return console.log(`it's a draw. score: you ${humanScore} – ${computerScore} hal`);
    }
    else {
        computerScore++;
        return console.log(`you lose! ${computerChoice} beats ${humanChoice}. score: you ${humanScore} – ${computerScore} hal`);
    }
}

function playGame() {
    for (let counter = 1; counter < 5; counter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        alert(`you win! final score: you ${humanScore} – ${computerScore} hal`)
    }
    else if (humanScore < computerScore) {
       alert(`you lose! final score: you ${humanScore} – ${computerScore} hal`)
    }
    else {
        alert(`it's a draw! final score: you ${humanScore} – ${computerScore} hal`)
    }

}

playGame();