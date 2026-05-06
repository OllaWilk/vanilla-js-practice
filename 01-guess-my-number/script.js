"use strict";

// Generate a random number between 1 and 20
const generateSecretNumber = () => Math.floor(Math.random() * 20) + 1;

const elements = {
  againButton: document.querySelector(".again"),
  secretNumber: document.querySelector(".number"),
  guessInput: document.querySelector(".guess"),
  checkButton: document.querySelector(".check"),
  message: document.querySelector(".message"),
  score: document.querySelector(".score"),
  highestScore: document.querySelector(".highscore"),
};

const RESET_DELAY = 6000;
let secretNumber = generateSecretNumber();
let resetTimeoutId;

// Check if the number is within the allowed range
const isValidGuess = (guess) => guess >= 1 && guess <= 20;

// Reveal the secret number on the screen
const revealNumber = () => {
  elements.secretNumber.textContent = secretNumber;
};

const resetGame = () => {
  clearTimeout(resetTimeoutId);

  secretNumber = generateSecretNumber();

  elements.message.textContent = "Start guessing...";
  elements.secretNumber.textContent = "?";
  elements.guessInput.value = "";
  document.body.style.backgroundColor = "#222";
};

const handleCorrectGuess = () => {
  revealNumber();
  elements.message.textContent = "You WON!";
  document.body.style.backgroundColor = "#60b347";

  clearTimeout(resetTimeoutId);

  resetTimeoutId = setTimeout(() => {
    resetGame();
  }, RESET_DELAY);
};

const handleGuess = () => {
  const guess = Number(elements.guessInput.value);

  if (!isValidGuess(guess)) {
    elements.message.textContent = "Please enter a number between 1 and 20.";
    return;
  }

  if (guess === secretNumber) {
    handleCorrectGuess();
    return;
  }
  elements.message.textContent = "Try again";
};

elements.checkButton.addEventListener("click", handleGuess);
elements.againButton.addEventListener("click", resetGame);
