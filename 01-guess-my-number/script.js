"use strict";

/*
  Guess My Number Game

  Main flow:
  1. Generate a random secret number between 1 and 20.
  2. Wait for the player to enter a number and click "Check".
  3. Validate the input.
  4. Compare the guess with the secret number.
  5. Update the message, score and UI depending on the result.
  6. Reset the game manually or automatically after a correct guess.
*/

/* ---------- Configuration ---------- */

// Initial score value at the beginning of each game round
const INITIAL_SCORE = 20;

// Delay before the game resets automatically after a correct guess
const RESET_DELAY = 6000;

/* ---------- DOM Elements ---------- */

const elements = {
  againButton: document.querySelector(".again"),
  secretNumber: document.querySelector(".number"),
  guessInput: document.querySelector(".guess"),
  checkButton: document.querySelector(".check"),
  message: document.querySelector(".message"),
  score: document.querySelector(".score"),
  highestScore: document.querySelector(".highscore"),
};

/* ---------- Game State ---------- */

// Generate a random number between 1 and 20
const generateSecretNumber = () => Math.floor(Math.random() * 20) + 1;

// Current secret number that the player has to guess
let secretNumber = generateSecretNumber();
console.log(secretNumber);
// Current player score
let score = INITIAL_SCORE;
// Best score achieved during the current page session
let highscore = 0;
// Stores the timeout ID so it can be cleared when needed
let resetTimeoutId;

/* ---------- UI Helpers ---------- */

// Display a message in the game message area
const displayMesage = (message) => {
  elements.message.textContent = message;
};

// Reveal the secret number on the screen
const revealNumber = () => {
  elements.secretNumber.textContent = secretNumber;
};

// Update the score displayed in the UI
const updateScore = () => {
  elements.score.textContent = score;
};

// Decrease the score by one point and update the UI
const decreaseScore = () => {
  score--;
  updateScore();
};

/* ---------- Validation ---------- */
// Check if the number is within the allowed range
const isValidGuess = (guess) => guess >= 1 && guess <= 20;

/* ---------- Game Logic ---------- */

// Handle the winning state
const handleCorrectGuess = () => {
  revealNumber();
  displayMesage("🎉 Correct Number!");
  document.body.style.backgroundColor = "#60b347";

  // Update highscore only if the current score is better
  if (score > highscore) {
    highscore = score;
    elements.highestScore.textContent = highscore;
  }

  // Clear any previous reset timeout before starting a new one
  clearTimeout(resetTimeoutId);

  // Automatically reset the game after a short delay
  resetTimeoutId = setTimeout(() => {
    resetGame();
  }, RESET_DELAY);
};

// Handle a wrong guess.
const handleWrongGuess = (message) => {
  decreaseScore();
  displayMesage(message);
};

// Reset the game to its initial state
const resetGame = () => {
  clearTimeout(resetTimeoutId);

  secretNumber = generateSecretNumber();
  score = INITIAL_SCORE;

  displayMesage("Start guessing...");
  elements.secretNumber.textContent = "?";
  elements.guessInput.value = "";
  updateScore();
  document.body.style.backgroundColor = "#222";
};

// Main function that handles the player's guess after clicking "Check"
const handleGuess = () => {
  const guess = Number(elements.guessInput.value);

  // Stop the function early if the input is invalid
  if (!isValidGuess(guess)) {
    displayMesage("Please enter a number between 1 and 20.");
    return;
  }

  // Correct guess
  if (guess === secretNumber) {
    handleCorrectGuess();
    return;
  }

  // Wrong guess: too low
  if (guess < secretNumber) {
    handleWrongGuess("📉 Your number is too low!");
    return;
  }

  // Wrong guess: too high
  if (guess > secretNumber) {
    handleWrongGuess("📈 Your number is too high!");
  }
};

/* ---------- Event Listeners ---------- */
// Check the player's guess when the "Check" button is clicked
elements.checkButton.addEventListener("click", handleGuess);

// Reset the game manually when the "Again" button is clicked
elements.againButton.addEventListener("click", resetGame);
