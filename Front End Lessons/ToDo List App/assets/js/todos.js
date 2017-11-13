// Check off Specific todos by Clicking
//note that we add the listener to the ul and then on the li by the 2nd argument so that when additional li's are added after page load we are still listening to them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	// Selects the span, and then its parent element, and then fades it out and removes it
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// stops event bubbling, i.e. the event will only occuer on the target element and not any parent elements
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	//if keypressed = 13 aka ENTER key
	if(event.which === 13){
		// grab new todo text from input 
		var todoText = $(this).val();
		// reset the inputbox text
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// select the plus icon and when you click on it, fade the input box in or out
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});