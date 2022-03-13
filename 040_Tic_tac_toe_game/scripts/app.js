const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('error-output');
const gameZoneElement = document.getElementById('active-game');
// const gameZoneElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelEditPlayerBtnElement = document.getElementById('cancel-edit-name-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

backdropElement.addEventListener('click', closePlayerConfig);
cancelEditPlayerBtnElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

// for (let element of gameZoneElements) {
//   element.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);
