var wins = 0;
var numberOfGuesses = 12;
var lettersAlreadyGuessed = [];
var lettersToGuess = []
var wordsToGuess = ["Rhino", "Giraffe", "Dog", "Buffalo", "Cat"];
var randomNumber = wordsToGuess[Math.floor(Math.random()*5)];
for (var q=0; q < randomNumber.length; q++){
    lettersToGuess[q] = "_";
}
var lettersLeft = randomNumber.length;



var newline = "\r\n";


document.onkeyup = function(event) {
    var player = event.key;

    console.log(randomNumber);
          
    //correct & incorrect guess counter
    //use exec()?
    //update html
    
    
    if (lettersAlreadyGuessed.indexOf(player) === -1){
        lettersAlreadyGuessed.push(player);
        
        console.log(lettersAlreadyGuessed);
        numberOfGuesses--;
    }
    else if (lettersAlreadyGuessed.indexOf(player) === player){
        numberOfGuesses++;
    }
    else {
        numberOfGuesses--;
    }
    //win counter
    
    // if (lettersAlreadyGuessed = wordsToGuess[randomNumber]) {
    //     wins++;
    // }
    

    //html output
    var gameDiv = document.getElementById("game");
    gameDiv.style.whiteSpace = "pre";
    gameDiv.textContent = " Wins: " + wins + newline + " Number of Guesses Left: " + numberOfGuesses + newline + " Letters Already Guessed: " + lettersAlreadyGuessed + newline + " Word to Guess: " + lettersToGuess; //+ display word to guess 
}

 