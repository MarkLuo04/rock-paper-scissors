let humanScore = 0
let computerScore = 0

// User selects option
function getHumanChoice() {
    let choice = "";
    while (true) {
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            break;  
        } else {
            console.log("Invalid choice. Please try again.");
        }
    }
    return choice;
}

// Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Computer generates option
function getComputerChoice() {
    let number = getRandomInt(3);

    if(number == 1) {
        return "rock";
    }
    else if(number == 2) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

// Plays a round of Rock Paper Scissors. Calculates score based on winner
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    }
}

// Determines winner based on score
function determineWinner() {
    console.log("Final Scores:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won!");
    } else if (computerScore > humanScore) {
        console.log("The computer wins this time. Better luck next time!");
    }
}

// 5 rounds of RPS
function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    determineWinner();
}

// Runs game
playGame();



