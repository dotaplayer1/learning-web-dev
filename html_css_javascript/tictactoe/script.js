const gameBoardSection = document.querySelector('#gameBoardSection');
const textSection = document.querySelector('.textSection');
const resetButton = document.querySelector('.resetButton')

// creates a board and has the game logic coded directly inside
const tictactoeBoard = (() => {
    const gameBoard = document.createElement('div')
    const winningPositions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    let turns = 0;
    let currentPlayer = 1;
    let gameOver = false;
    let boardArr = [0,0,0,0,0,0,0,0,0,0];
    gameBoard.classList.add('gameBoard');
    for (let i = 0; i < 9; i++) {
        const gameBoardSection = document.createElement('div');
        gameBoardSection.classList.add('boardSection');
        gameBoardSection.classList.add(`${i+1}`);
        gameBoard.appendChild(gameBoardSection);

        gameBoardSection.addEventListener('click', (event) => {
            var clickedElement = event.target;
            var boardSectionNum = clickedElement.classList[1];
            if (boardArr[boardSectionNum] === 1 || boardArr[boardSectionNum] === 2) {
                return;
            }
            if (gameOver === true) {
                return;
            } else {
                if (currentPlayer === 1) {
                    gameBoardSection.textContent = 'X';
                    currentPlayer = 2;
                    boardArr[boardSectionNum] = 1;
                } else {
                    gameBoardSection.textContent = 'O';
                    currentPlayer = 1;
                    boardArr[boardSectionNum] = 2;
                }
                checkGameStatus();
            }
        });
    }

    // checks game status
    function checkGameStatus() {
        if (isGameWon() === 1) {
            textSection.textContent = 'Game Over! Player 1 wins!';
            gameOver = true;
            return;
        } 
        if (isGameWon() === 2) {
            textSection.textContent = 'Game Over! Player 2 wins!';
            gameOver = true;
            return;
        } 
        turns += 1;
        if (turns === 9) {
            textSection.textContent = 'Game Over! Tie game!';
            gameOver = true;
        } else {
            textSection.textContent = `Player ${currentPlayer}'s turn`;
        }
    }

    // checks if game has been won
    function isGameWon() {
        for (let i = 0; i < 8; i++) {
            let winValidationArr = winningPositions[i];
            if (boardArr[winValidationArr[0]] === 1 && boardArr[winValidationArr[1]] === 1 && boardArr[winValidationArr[2]] === 1) {
                return 1;
            }
            if (boardArr[winValidationArr[0]] === 2 && boardArr[winValidationArr[1]] === 2 && boardArr[winValidationArr[2]] === 2) {
                return 2;
            }
        }
    }

    function resetGame() {
        turns = 0;
        currentPlayer = 1;
        gameOver = false;
        boardArr = [0,0,0,0,0,0,0,0,0,0];
        const collection = document.getElementsByClassName("boardSection");
        for (let i = 0; i < 9; i++) {
            collection[i].textContent = '';
        }
        textSection.textContent = 'Player 1\'s turn';
    }

    return {gameBoard, resetGame};
})();

gameBoardSection.appendChild(tictactoeBoard.gameBoard);

resetButton.addEventListener('click', function() {
    tictactoeBoard.resetGame();
});