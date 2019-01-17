//Create Secret Number
let secretNumber = 4;


function guessGame () {
  //ask user for guess
  let guess = prompt("Guess a number.");

  //check if guess is correct
  if(Number(guess) === secretNumber) {
    alert("You got it right.");
  } else if (Number(guess) > secretNumber) {
    alert("Too high.");
    guessGame();
  } else if (Number(guess) < secretNumber) {
    alert("Too low.");
    guessGame();
  } else {
    alert("You got it wrong...");
    guessGame();
  }
}

guessGame();
