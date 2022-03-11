function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
}

function savePlayerConfig(e) {
  e.preventDefault();
  console.log(e);
  // closePlayerConfig();
}
