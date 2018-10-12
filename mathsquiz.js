function checkGuess() {
  var value = document.getElementById("guessInput").value;
    if (value < 63) {
    alert("Too small! Guess again.");
    }
    if (value > 63) {
    alert("Too large! Guess again.");
    }
    if (value == 63) {
    alert("You guessed the correct number! It was " + 63 );
    }
  return false;
}
