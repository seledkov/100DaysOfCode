const resetGameData = () => {
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // activePlayer = 0;
  currentRound = 1;

  for (let i = 0; i < 9; i++) {
    gameBoardElement.children[i].textContent = '';
    gameBoardElement.children[i].classList.remove('disabled');
  }

  gameOverElement.firstElementChild.innerHTML =
    'You won <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = 'none';
  gameOverElement.firstElementChild.firstElementChild.textContent = players[activePlayer].name;

  // alternative for i { for j  clear every cell}
};

function startNewGame() {
  if (players[0].name === '' || players[0].name === '') {
    //return guard
    return;
  }

  resetGameData();
  setCurrentPlayer();
  gameZoneElement.style.display = 'block';
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  setCurrentPlayer();
}

function setCurrentPlayer() {
  document.getElementById('active-player-name').textContent = players[activePlayer].name;
}

function selectGameField(event) {
  console.log('clock');
  console.log(event.target.tagName);
  const currentGameField = event.target;
  if (currentGameField.tagName !== 'LI') {
    return;
  }
  if (currentGameField.textContent !== '') {
    return;
  }

  currentGameField.textContent = players[activePlayer].symbol;
  currentGameField.classList.add('disabled');

  selectedRow = currentGameField.dataset.row - 1;
  selectedColumn = currentGameField.dataset.column - 1;
  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = getWinnerPlayer();
  console.log(winnerId);

  if (winnerId !== 0) {
    gameOver(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function getWinnerPlayer() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][0] === gameData[i][2]
    ) {
      return gameData[0][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][0];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}

const gameOver = (playerId) => {
  gameOverElement.style.display = 'block';

  // block unclicked li - add disabled class

  if (playerId > 0) {
    const playerName = players[playerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = playerName;
  } else {
    gameOverElement.firstElementChild.textContent = 'It is draw';
  }
};
