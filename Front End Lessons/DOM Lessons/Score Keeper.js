console.log("CONNECTED");

//select p1 button
var p1Button = document.querySelector("#p1");
//select p2 button 
var p2Button = document.querySelector("#p2");
//select p1 score text
var p1Display = document.querySelector("#p1display");
//select p2 score text
var p2Display = document.querySelector("#p2display");

var resetButton = document.querySelector("#reset");

var inputButton = document.querySelector("input[type='number']");

//select the span inside a paragraph
var winningNumDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function(){
	//if the game is not yet over...	
	if(!gameOver){
		//add 1 to the score and update the display
		p1Score++;
		p1Display.textContent = p1Score;

		//if we've reached the max score then...
		if(p1Score === maxScore){
			//add the winner class to the display <span> (to change its color to green)
			p1Display.classList.add("winner");
			//and mark the game as over.
			gameOver = true;
		}	
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === maxScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

inputButton.addEventListener("change", function(){
	winningNumDisplay.textContent = inputButton.value;
	maxScore = Number(inputButton.value);
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
