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
}

function savePlayerConfig(e) {
  e.preventDefault();
  console.log(e);
  const formData = new FormData(event.target);
  const enteredlayerName = formData.get('playerName').trim();
  if (!enteredlayerName) {
    event.target.firstElementChild.classList.add('error');
    errorOutputElement.textContent = 'Please enter a valid name!';
    return; // stop function
  }
}
