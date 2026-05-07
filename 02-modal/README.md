# Modal Window

A simple JavaScript project where a modal window appears after clicking a button.

## Project Description

This project is a small browser exercise built with vanilla JavaScript.

The user can open a modal window by clicking one of the modal buttons. The modal can be closed in three different ways:

- by clicking the close button (`×`)
- by clicking on the dark overlay background
- by pressing the `Escape` key

The goal of this project is to practise DOM manipulation, event listeners and working with CSS classes.

## Features

- Opens a modal window after clicking a button
- Supports multiple buttons that open the same modal
- Closes the modal after clicking the close button
- Closes the modal after clicking the overlay
- Closes the modal after pressing the `Escape` key
- Uses the `hidden` CSS class to show and hide the modal
- Uses `forEach()` to add event listeners to multiple buttons

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

The modal and overlay are hidden by default with the `hidden` class.

JavaScript selects all modal buttons and adds a click event listener to each of them. When a button is clicked, the modal and overlay are shown by removing the `hidden` class.

The modal is closed by adding the `hidden` class again. This happens when the user clicks the close button, clicks the overlay, or presses the `Escape` key.

## Project Status
done