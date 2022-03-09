const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropOverlayElement = document.querySelector('.backdrop');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelEditPlayerBtnElement = document.getElementById('cancel-edit-name-btn');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
backdropOverlayElement.addEventListener('click', closePlayerConfig);
cancelEditPlayerBtnElement.addEventListener('click', closePlayerConfig);
