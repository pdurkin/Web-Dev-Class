var express = require("express");
var app = express();

// Our first route!
// "/" => "Hi there!"
app.get("/", function(request, response){
   response.send("Hi there!"); 
});

// "/bye" => "Goodbye!"
app.get("/bye", function(request, response){
   response.send("Goodbye!"); 
});

// "/dog" => "Meow"
app.get("/dog", function(request, response){
   response.send("Meow"); 
});

// Defining a route parameter/pattern. e.g. /r/soccer, /r/puppies. Invalid would be /r/soccer/comment.
app.get("/r/:subRedditName", function(request, response){
   var subRedditName = request.params.subRedditName;
   response.send("Welcome to the " + subRedditName.toUpperCase() + " subreddit!");
});

app.get("/r/:subRedditName/comments/:id/:title", function(request, response) {
    response.send("Welcome to the comments page!");
});

// Any non-defined route, e.g. /asdf;ljkoiu. Important that this comes last. The order matters.
app.get("*", function(request, response) {
    response.send("You are a star!");
});

// Tell Express to listen for requests (start server)

// cloud9 port/IP variables
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});