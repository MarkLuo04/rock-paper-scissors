let humanScore = 0
let computerScore = 0

const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

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
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        result = `You gained a point! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `Your opponent gains a point. ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }

    resultsDiv.textContent = result;
    scoreDiv.textContent = `User: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        determineWinner();
    }
}


// Determines winner based on score
function determineWinner() {
    let finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "Congratulations, you won the game!";
    } else {
        finalMessage = "The computer wins the game. Better luck next time!";
    }

    resultsDiv.textContent = finalMessage;

    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}


function handleClick(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

}


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", handleClick);
paperBtn.addEventListener("click", handleClick);
scissorsBtn.addEventListener("click", handleClick);







