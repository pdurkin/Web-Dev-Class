//.text()
//returns the text of that element
$("h1").text();
// jQuery Methods Demo Page
$("ul").text();
//  Skittles Starburst Twix
$("li").text();
// SkittlesStarburstTwix


//updates the h1 text
$("h1").text("New Text!!!");

//will change all li's text
$("li").text("Rusty, the dog, is adorable!"); 

//.html()

$("ul").html();
// " <li>Skittles</li> <li>Starburst</li> <li>Twix</li> "
$("ul").html()("<li>I hacked your UL!</li><li>Rusty is still adorable!</li>");
//updates the li's in your ul


//.attr()
//.attr( attributeName )    returns the value of the attributeName
//.attr( attributeName, value )    sets the value for the designated attribute

$("img").css("width");
//returns the img's width
$("img").css("width", "200px");
//set the new width
$("img").attr("src");
//returns the src attribute value
$("img").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
//changes src attribute to new image link

//select the last image and charge the src
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

//select the first image and change the src
$("img:first").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

$("input").attr("type");
//returns the input's type
$("input").attr("type", c)



//.val()

$("input").val();
//returns the value of whatever is in the input box

$("input").val("New value");
//updates the input to "new value"

$("select").val();
//returns whatever was selected in the select box


// .addClass(), .removeClass(), .toggleClass()

$("h1").addClass("correct");
//adds the "correct" class to the h1
$("h1").removeClass("correct");
//removes the "correct" class to the h1

$("li").addClass("wrong");
//adds the "wrong" class to all the li's
$("li").removeClass("wrong");

$("li").first().toggleClass("correct");
//toggles the "correct" class but only the first li
$("li").first().toggleClass("done");
