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



