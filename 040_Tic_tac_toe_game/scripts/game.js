function startNewGame() {
  console.log('start game');

  if (players[0].name === '' || players[0].name === '') {
    //return guard
    return;
  }
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
  console.log(gameData);

  switchPlayer();
}
