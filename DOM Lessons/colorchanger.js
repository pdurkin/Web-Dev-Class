console.log("CONNECTED");

var button = document.querySelector("#myButton");
var body = document.querySelector("body");

button.addEventListener("click", function(){
	body.classList.toggle("purple");
});