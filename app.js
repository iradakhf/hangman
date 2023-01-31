window.onload = function() {
  
  var displayWord = document.getElementById("displayWord");
  var displayLives = document.getElementById("lives");
  var displayGuesses = document.getElementById("guessedWords");
  var displayNewGame = document.getElementById("newGame");
  var words = ["pink", "purple", "watermelon", "storm"];
  var letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  function newGame() {
    var lives = 9;
    displayLives.innerHTML = lives;
    var storedGuess = "";
    var arrayGuess = [];
    displayGuesses.innerHTML = arrayGuess;
    var dash = 0;
    var letters = 0;
    
    var chosenWord = words[Math.floor(Math.random()*words.length)];
    console.log(chosenWord);

    var splitWord = chosenWord.split('');
    console.log(splitWord);
    var arrayOfBlanks = splitWord.map(function(val) {
      if (val != " ") {
        return "_";
      } else {
        dash++;
        return "-";
      }
    });
    var stringOfBlanks = arrayOfBlanks.join('');
    displayWord.innerHTML = stringOfBlanks;
  
    document.onkeyup = function checkKey() {
      var keyPress = event.keyCode
      storedGuess = String.fromCharCode(keyPress).toLowerCase();

      if (letter.indexOf(storedGuess) !== -1 && arrayGuess.indexOf(storedGuess) === -1)  {
        arrayGuess.push(storedGuess);  
        displayGuesses.innerHTML = arrayGuess;
        console.log(arrayGuess);
        for (var i = 0; i < splitWord.length; i++) {
          if (storedGuess == splitWord[i].toLowerCase()) {
            arrayOfBlanks[i] = storedGuess;
            displayWord.innerHTML = arrayOfBlanks.join('').toUpperCase();
            letters++;
            console.log(letters);
            if (letters + dash === chosenWord.length) {
              displayLives.innerHTML = "YOU WON";
              displayNewGame.innerHTML = 'PRESS "ENTER" TO CONTINUE';
              displayNewGame.style.visibility = "visible";
              document.onkeyup = false;
              document.onkeyup = function() {
                if (event.key === "Enter") {
                newGame();
                displayNewGame.style.visibility = "hidden";
                }
              } 
            } 
          } 
        } 
      if (chosenWord.indexOf(storedGuess) === -1) {
        lives -= 1;
        displayLives.innerHTML = lives;
        if (lives <= 0) {
          displayLives.innerHTML = "YOU LOST";
          displayNewGame.innerHTML = 'PRESS "ENTER" TO CONTINUE';
          displayNewGame.style.visibility = "visible";
          document.onkeyup = false;
          document.onkeyup = function() {
            if (event.key === "Enter") {
            newGame();
            displayNewGame.style.visibility = "hidden";
            }
          } 
        } 
      } 
    } 
  } 
 } 
 newGame();
} 
