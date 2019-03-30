var wins = 0;
var numberOfGuesses = 12;
var lettersAlreadyGuessed = [];
var lettersToGuess = [];
var wordsToGuess = ["rhino", "giraffe", "dog", "buffalo", "cat"];
var newline = "\r\n";


var randomWord = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];
for (var q=0; q < randomWord.length; q++){
    lettersToGuess[q] = "_ ";
}



function game(){
    
    document.onkeyup = function() {
        var player = event.key;
        console.log(event);
    
        for (var c=0; c< randomWord.length; c++){

            if (player === randomWord[c]){
                lettersToGuess[c] = player;
                console.log(player);
                console.log(lettersToGuess);
                if (lettersAlreadyGuessed.indexOf(player) === -1){
                    lettersAlreadyGuessed.push(player);
                    
                    console.log(lettersAlreadyGuessed);
                    
                    numberOfGuesses--;
                }
                
                
            }
            if (lettersToGuess.join("") === randomWord) {
                wins++;
                lettersAlreadyGuessed.length = 0;
                lettersToGuess.length = 0;
                
            }
            else if (numberOfGuesses === 0){
                
            }
            
        }
        

        var gameDiv = document.getElementById("game");
        gameDiv.style.whiteSpace = "pre";
        gameDiv.textContent = " Wins: " + wins + newline + " Number of Guesses Left: " + numberOfGuesses + newline + " Letters Already Guessed: " + lettersAlreadyGuessed + newline + " Word to Guess: " + lettersToGuess.join("");
    }
    
} 

game();


 