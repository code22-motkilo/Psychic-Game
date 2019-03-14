// LIST of stuff to build
//===============================================
//===============================================



// set up array of letters
var letterArray = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(letterArray);

// array for picked letters
var userPickedLetters = [];
var computerPickedLetters = [];

//score variable
var wins = 0;
var losses = 0;

// Questions allowed 
var numberOfGuesses = 10;

//variables to hold references to places in HTML where updates will be displayed.
var userLetter = document.getElementById("user-letter");
var remainingGuesses = document.getElementById("remaining-guesses");
var win_score = document.getElementById("win-score");
var loss_score = document.getElementById("loss-score");
var computerPicked = document.getElementById("computer-picked");

// Game Functionality
//===============================================================================

// prompt to ask user if they want to play a game?
var playGame = prompt("Do you want to play a game?: (y)es or (n)o");
var playChoice = playGame;
console.log(playChoice);

// if player picks (y)es 

if (playChoice === 'y') {

    // allows the computer to randomly choose a letter
    var computerChoice = letterArray[Math.floor(Math.random() * letterArray.length)];


    document.onkeyup = function (event) {

        if (numberOfGuesses === 0) {
            return;
        }

        //gets User's letter choice
        var userInput = event.key.toLowerCase();
    
        // Determine if user and compter match:
    
        // If they DO NOT match
        if (userInput !== computerChoice) {
            console.log("Sorry! Guess Again...");
            numberOfGuesses--;
            userPickedLetters.push(" " + userInput);
            
    
            // Remaining guesses
            if (numberOfGuesses >= 1) {
                console.log("You have " + numberOfGuesses + " remaining");
            }
            // all out of guesses
            else {
                console.log("Sorry, you are out of allowed guesses.");
                losses++;
                computerPickedLetters.push(" " + computerChoice)
            }
        }
        // if they DO MATCH
        else {
            console.log("Yes! You must be PSYCHIC!!! The compute also picked: " + computerChoice);
            wins++;
        }
    
        // Send results to html display
        userLetter.textContent = "letters you picked: " + userPickedLetters;
        remainingGuesses.textContent = "remaining guesses: " + numberOfGuesses;
        win_score.textContent = "wins: " + wins;
        loss_score.textContent = "losses: " + losses;
        computerPicked.textContent = "The computer picked: " + computerPickedLetters;
    
    };


} else {
    alert("you can not play unless you type 'y' ");
};

