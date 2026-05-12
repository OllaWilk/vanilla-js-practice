# Modal Window

A simple JavaScript dice game built with vanilla JavaScript.

## Project Description

This project is a small browser game based on turn-based gameplay.

Two players take turns rolling a dice. During each turn, the current player can continue rolling to collect points or choose to hold the score and save it to their total score.

However, if the player rolls a `1`, they lose all points collected during the current turn and the turn switches to the other player.

The first player to reach the winning score wins the game.

The goal of this project is to practise DOM manipulation, game state management, conditional logic and event handling in JavaScript.


## Features

- Two-player turn-based gameplay
- Random dice generation
- Current score tracking
- Total score tracking
- Switching active players
- Losing current points after rolling `1`
- Holding points and saving them to the total score
- Winning state detection
- Resetting the game with the **New Game** button
- Dynamic UI updates using CSS classes

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The game starts with both players having a score of `0`.

The active player rolls the dice using the **Roll Dice** button. If the dice value is between `2` and `6`, the value is added to the current score.

If the player rolls a `1`, the current score is lost and the turn switches to the other player.

The player can also click the **Hold** button to add the current score to the total score and pass the turn to the other player.

The first player to reach the winning score wins the game.


## Main Functions

### `rollDice()`

Generates a random dice value and updates the current score.

### `switchPlayer()`

Changes the active player and resets the current turn score.

### `holdScore()`

Adds the current score to the active player's total score.

### `resetGame()`

Restores the game to its initial state.

## Project Status

In progress.