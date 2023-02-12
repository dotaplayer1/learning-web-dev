const gameBoardSection = document.querySelector('#gameBoardSection');

const tictactoeBoard = (() => {
    const gameBoard = document.createElement('div')
    let winningPositions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    gameBoard.classList.add('gameBoard');
    for (let i = 0; i < 9; i++) {
        const gameBoardSection = document.createElement('div');
        gameBoardSection.classList.add('boardSection');
        gameBoardSection.classList.add(`${i+1}`);
        gameBoardSection.textContent = 'O';
        gameBoard.appendChild(gameBoardSection);

        gameBoardSection.addEventListener('click', (event) => {
            var clickedElement = event.target;
            var classList = clickedElement.classList;

            console.log(classList[1]);
        });
    }
    return gameBoard;
})();

gameBoardSection.appendChild(tictactoeBoard);