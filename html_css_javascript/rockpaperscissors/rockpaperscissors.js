console.log("Hello world");

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
    let userInput = "";
    while (true) {
        userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase();
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
        }
    }
}

function printResult(winlose, computerChoice) {
    console.log("You " + winlose + "! Opponent chose " + computerChoice + ".");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        return printResult("win", computerChoice);
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        return printResult("win", computerChoice);
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        return printResult("win", computerChoice);
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        return printResult("lose", computerChoice);
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        return printResult("lose", computerChoice);
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        return printResult("lose", computerChoice);
    } else {
        return "Tie game!"
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));

