const message = document.querySelector("#message");
const score = document.querySelector("#score");
const rockbutton = document.querySelector("#rockbutton");
const paperbutton = document.querySelector("#paperbutton");
const scissorsbutton = document.querySelector("#scissorsbutton");
const resultboard = document.querySelector("#resultboard");
let computerScore = 0;
let playerScore = 0;

let getRandomInt = (max) => Math.floor(Math.random() * max);

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function game() {
    message.textContent = "Pick rock, paper, or scissors: ";
    rockbutton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperbutton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsbutton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

function endGame(winlose) {
    message.textContent = `Game over! you ${winlose}!`;
}

function printResult(winlose, computerChoice) {
    if (winlose == "win") {
        playerScore++;
        resultboard.textContent = "You " + winlose + "! Opponent chose " + computerChoice + ".";
        score.textContent = `Computer score: ${computerScore}, Player score: ${playerScore}`;
    } else if (winlose == "lose") {
        computerScore++;
        resultboard.textContent = "You " + winlose + "! Opponent chose " + computerChoice + ".";
        score.textContent = `Computer score: ${computerScore}, Player score: ${playerScore}`;
    } else {
        playerScore++;
        computerScore++;
        resultboard.textContent = "Tie game! Opponent chose " + computerChoice + ".";
        score.textContent = `Computer score: ${computerScore}, Player score: ${playerScore}`;
    }
    if (playerScore == 5 && computerScore == 5) {
        endGame("tied");
        return 1;
    }
    if (playerScore == 5) {
        endGame("win");
    }
    if (computerScore == 5) {
        endGame("lose");
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        printResult("win", computerChoice);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        printResult("win", computerChoice);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        printResult("win", computerChoice);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        printResult("lose", computerChoice);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        printResult("lose", computerChoice);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        printResult("lose", computerChoice);
    } else {
        printResult("tie", computerChoice);
    }
}

game();




