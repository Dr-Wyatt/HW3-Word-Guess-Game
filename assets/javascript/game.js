var wins = 0;
var numberOfGuesses;
var lettersAlreadyGuessed = [];
var lettersToGuess = [];
var wordsToGuess = ["rhino", "giraffe", "dog", "buffalo", "cat"];
var newline = "\r\n";

function randomWordFunc(list){
    numberOfGuesses = 13;
    lettersAlreadyGuessed = [];
    lettersToGuess = [];
    var length = list.length;
    console.log(length);
    var index = Math.floor(Math.random()*length);
    lettersAlreadyGuessed.length = 0;
    lettersToGuess.length = 0;
    for (var q=0; q < list[index].length; q++){
        lettersToGuess[q] = "_ ";
    }
    return list[index];
}


var randomWord = randomWordFunc(wordsToGuess);

function game(){
    
    document.onkeyup = function(event) {
        console.log(event.keyCode);
        if (event.keyCode>=65 && event.keyCode<=90)
        {
            console.log("random word:", randomWord);
        var player = event.key;
        console.log(event);
        var flag = false;
    
        for (var c=0; c< randomWord.length; c++){
            if (player === randomWord[c]){
                flag=true;

                lettersToGuess[c] = player;
                console.log(player);
                console.log(lettersToGuess);
                if (lettersAlreadyGuessed.indexOf(player) === -1){
                    lettersAlreadyGuessed.push(player);
                    
                    console.log(lettersAlreadyGuessed);
                    numberOfGuesses--; 
                }         
                  
            }
            // if (player != randomWord[c]) {
            //     numberOfGuesses--; 
            // } 
            
            if (lettersToGuess.join("") === randomWord) {
                wins++;
                // numberofGuesses.reset();
                randomWord= randomWordFunc(wordsToGuess);
                numberOfGuesses--;
                
            }
            else if (numberOfGuesses === 1){
                // numberofGuesses.reset();
                randomWord = randomWordFunc(wordsToGuess);
            }
            
        }
        if(flag==false){
            lettersAlreadyGuessed.push(player);
            numberOfGuesses--;
        }
        

        var gameDiv = document.getElementById("game");
        gameDiv.style.whiteSpace = "pre";
        gameDiv.textContent = " Wins: " + wins + newline + " Number of Guesses Left: " + numberOfGuesses + newline + " Letters Already Guessed: " + lettersAlreadyGuessed + newline + " Word to Guess: " + lettersToGuess.join("");
    }
    
            
        }

        
} 

game();


 