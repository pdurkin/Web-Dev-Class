var express = require("express");
var app = express();

// tells express to serve the contents of the public directory
app.use(express.static("public"))

// tells express that our default view enginge is .ejs, letting us remove the .ejs suffix on our res.render calls
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
//   res.send("<h1>Welcome to the home page!</h1><h2>Blah blah blah</h2>"); 
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // res.send("You fell in love with " + thing);
    
    //{thingVar: thing} = We're passing thing in the get request to thingVar in our .ejs file.
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet Bunny", author: "Jorge"},
            {title: "Can you believe this Pomsky", author: "Colt"}
        ];
        
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});