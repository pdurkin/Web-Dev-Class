var secretNumber = 7;
var userGuess = Number(prompt("Guess a number!"));

if (userGuess === secretNumber){
	alert("You guessed it!");
}
else if(userGuess < secretNumber){
	alert("Your guess was too low...");
}
else{
	alert("Your guess was too high...");
}