let currentSound = null;

function playSound(filename) {
  if (currentSound) {
    currentSound.pause();
  }
  currentSound = new Audio(filename);
  currentSound.play();
}

function pauseSound() {
  if (currentSound) {
    currentSound.pause();
  }
}
