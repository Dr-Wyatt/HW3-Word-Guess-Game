var wins = 0;
var numberOfGuesses = 12;
var lettersAlreadyGuessed = [];
var lettersToGuess = [];
var wordsToGuess = ["rhino", "giraffe", "dog", "buffalo", "cat"];
var randomWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
for (var q=0; q < randomWord.length; q++){
    lettersToGuess[q] = "_";
}
var lettersLeft = randomWord.length;



var newline = "\r\n";


document.onkeyup = function(event) {
    var player = event.key;
    console.log("player", player);
    console.log(randomWord);
    console.log(lettersToGuess);
          
    //correct & incorrect guess counter
    //use exec()?
    //update html

        for (var c=0; c<randomWord.length; c++){
            if (player === randomWord[c]){
                lettersToGuess[c] = player;
                console.log(player);
                console.log(lettersToGuess);
                // lettersleft--;
                
            }
        }

    
    
    
    
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
    
    if (lettersToGuess.join("") === randomWord) {
        wins++;
    }
    

    //html output
    var gameDiv = document.getElementById("game");
    gameDiv.style.whiteSpace = "pre";
    gameDiv.textContent = " Wins: " + wins + newline + " Number of Guesses Left: " + numberOfGuesses + newline + " Letters Already Guessed: " + lettersAlreadyGuessed + newline + " Word to Guess: " + lettersToGuess.join(""); //+ display word to guess 
}

 