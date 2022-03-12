let editedPlayer = 0;

const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('error-output');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelEditPlayerBtnElement = document.getElementById('cancel-edit-name-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
cancelEditPlayerBtnElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
