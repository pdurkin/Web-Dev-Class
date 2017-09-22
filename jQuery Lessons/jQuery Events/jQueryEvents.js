// .click()

//add alerts when certain elements are clicked
$("h1").click(function(){
	alert("h1 clicked!");
});

$("button").click(function(){
	alert("button clicked!");
});

//change button's background color when clicked
$("button").click(function(){
	$(this).css("background", "pink");
});

//print button's text to console when clicked
$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked " + text);
});


// .keypress()

//print to the console whenever someone presses a key in the input box
$("input").keypress(function(){
	console.log("You pressed a key!");
});

//when pressing the enter key in the input box send an alert
$("input").keypress(function(event){
	//13 is the key code for enter
	if(event.which === 13){
		alert("You hit enter!");
	}
});


// .on()

// Note that .on() will add listeners for future elements that are added at a later time, whereas .click() and others will only add listeners for existing elements

//when clicking on an h1, turn it purple
$("h1").on("click", function(){
	$(this).css("color", "purple");
});

//when pressing a key in an input box, print "Keypressed!" to the console
$("input").on("keypress", function(){
	console.log("Keypressed!");
});

//when hovering over a button, print "Mouse Enter!" to the console
$("button").on("mouseenter", function(){
	console.log("Mouse Enter!");
});

//when hovering over a button, change its font to bold
$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

//when leaving the hoverover, change the font back to normal
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});