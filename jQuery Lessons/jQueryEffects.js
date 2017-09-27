// .fadeout(), .fadein(), .fadetoggle()

//when clicking on the button, fade out the divs
$("button").on("click", function(){
	//note that fadeout simply hides the elements, it doesn't actually delete them
	//the callback function starts after the fadeout is complete
	$("div").fadeout(1000, function(){
		//console.log("Fade completed!");
		//removes the <div>s
		$(this).remove();	
	});
});


//we can fade things IN as well
/*
$("button").on("click", function(){
	$("div").fadeIn(1000, function(){
		$(this).remove();	
	});
});
*/

//lastly, there is .fadeToggle() which simply fades in if not there, and out if already there


// .slideDown(), .slideUp(), .slideToggle()
$("button").on("click", function(){
	//note that fadeout simply hides the elements, it doesn't actually delete them
	//the callback function starts after the slide is complete
	$("div").slideDown(1000, function(){
		//console.log("Slide completed!");
		//removes the <div>s
		$(this).remove();	
	});
});
