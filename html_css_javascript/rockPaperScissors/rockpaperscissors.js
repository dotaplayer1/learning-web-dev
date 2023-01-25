const message = document.querySelector("#message");
const score = document.querySelector("#score");
const rockbutton = document.querySelector("#rockbutton");
const paperbutton = document.querySelector("#paperbutton");
const scissorsbutton = document.querySelector("#scissorsbutton");
const resultboard = document.querySelector("#resultboard");

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

function getPlayerChoice() {
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

function printResult(winlose, computerChoice) {
    resultboard.textContent = "You " + winlose + "! Opponent chose " + computerChoice + ".";
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        printResult("win", computerChoice);
        return 1;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        printResult("win", computerChoice);
        return 1;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        printResult("win", computerChoice);
        return 1;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        printResult("lose", computerChoice);
        return 0;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        printResult("lose", computerChoice);
        return 0;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        printResult("lose", computerChoice);
        return 0;
    } else {
        resultboard.textContent = "Tie game! Opponent chose " + computerChoice + ".";
        return 2;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    message.textContent = "Pick rock, paper, or scissors: ";
    while (computerScore < 5 && playerScore < 5) {
        score.textContent = `Computer score: ${computerScore}, Player score: ${playerScore}`;
        let result = getPlayerChoice();
        if (result === 0) {
            computerScore++;
        } else if (result === 1) {
            playerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    return 1;
}

game();




