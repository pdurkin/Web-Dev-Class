//hard vs easy mode tracker
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); //easy and hard mode buttons

init();

function init(){
	
	setupModeButtons();
	setupSquares();

	//Reset Button
	resetButton.addEventListener("click", function(){
		reset();
	});
	
	reset();
	colorDisplay.textContent = pickedColor;
}



function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color;
	colorDisplay.textContent = pickedColor;
	//change colors of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else{
			squares[i].style.display = "none";
		}
	}

	resetHeader();
}

function resetHeader(){
	h1.style.backgroundColor = "steelblue";
	if(resetButton.textContent === "Play again?"){
		resetButton.textContent = "New colors";
	}
	messageDisplay.textContent = "";
}

function setupModeButtons(){
	//assign listeners to mode buttons
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			//remove selected class from both buttons and then add it to whichever was clicked
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
}

function setupSquares(){
	//setup the squares
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//get color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				resetButton.textContent = "Play again?";
				h1.style.backgroundColor = clickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function changeColors(color){
	//loop through all squares (and h1) to match given color
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0-255, a green from 0-255, and a blue from 0-255
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}