# Guess My Number

A simple JavaScript game where the player has to guess a randomly generated number between 1 and 20.

## Project Description

This project is a small browser game built with vanilla JavaScript.  
The application generates a random secret number, and the player tries to guess it by entering a number in the input field.

After clicking the **Check** button, the game validates the input and displays an appropriate message.

## Features

- Generates a random number between 1 and 20
- Validates whether the input is within the allowed range
- Shows an error message for invalid numbers
- Reveals the secret number when the player wins
- Changes the background color after a correct guess
- Automatically resets the game after a short delay
- Allows manual reset using the **Again** button

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The game stores references to important DOM elements in the `elements` object.


A random secret number is generated when the game starts:


The player's input is converted from a string to a number:


Then the game checks if the number is valid:


If the guess is correct, the secret number is revealed and the winning message is displayed.

## Main Functions

### `generateSecretNumber()`

Generates a random number between 1 and 20.

### `isValidGuess(guess)`

Checks whether the player's guess is within the allowed range.

### `revealNumber()`

Displays the secret number on the screen.

### `resetGame()`

Resets the game state by:

- generating a new secret number
- hiding the secret number
- clearing the input field
- resetting the message
- restoring the background color

### `handleCorrectGuess()`

Handles the winning state by:

- revealing the secret number
- displaying the winning message
- changing the background color
- starting an automatic reset after a delay

### `handleGuess()`

Handles the main game logic after clicking the **Check** button.

It:

- reads the player's input
- validates the value
- checks if the guess is correct
- displays the proper message

## What I Practised

In this project, I practised:

- DOM manipulation
- event listeners
- functions
- conditional statements
- early return pattern
- working with `setTimeout` and `clearTimeout`
- separating DOM references from game logic
- writing cleaner and more readable JavaScript code

## Possible Improvements

In the future, this project could be improved by adding:

- score counting
- high score saving
- messages for guesses that are too high or too low
- disabled input after winning
- simple animations
- better accessibility for keyboard users

## Project Status

The basic version of the game is finished.  
Further improvements may be added as part of JavaScript practice.