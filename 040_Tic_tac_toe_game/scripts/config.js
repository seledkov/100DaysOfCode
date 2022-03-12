function openPlayerConfig(e) {
  editedPlayer = +e.target.dataset.playerid; // all dataset = string[]
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorOutputElement.textContent = '';
  document.getElementById('playerName').value = ''; // clear input data
}

function savePlayerConfig(e) {
  e.preventDefault();
  console.log(e);
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playerName').trim();
  if (!enteredPlayerName) {
    // maybe add check to dublicate name if need
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name!';
    return; // stop function
  }

  const updatedPlayer = document.querySelector('#player-' + editedPlayer + '-name');
  updatedPlayer.textContent = enteredPlayerName;
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
