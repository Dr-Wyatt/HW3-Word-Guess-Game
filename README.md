# HW3-Word-Guess-Game

## Introduction:
This game was built as the third homework assignment for NU Coding Bootcamp. The instructions were to develop a hangman game.

## Problems
A few problems encountered were:
* Allowing any key to start
    * Able to do this by utilizing the keycodes for letters, and restricting input to only letters.
* Capturing each letter and comparing to the correct word
    * Was able to create this functionality by comparing each letter from onkeyup input to a loop of the word to guess for each letter it is made up of.
    * The guessed letters are pushed into an array, and are joined together after each guess to see if the word has been completed, and matches the word to guess.

## Instructions:
* Start the game by pressing any key. A random word will be chosen for the player to guess. An incorrectly guessed letter will subtract your number of guesses remaining by 1. 
* Duplicate letter guesses will not count against you. Run out of guesses and you lose. A new word will be chosen for you. 
* Should you guess correctly, you will gain a "Win" point, and a new word will be chosen for you to guess, with the number of guesses remaining resetting.

## Website
https://dr-wyatt.github.io/HW3-Word-Guess-Game/
