var express = require("express");
var app = express();
// add in body-parser package
var bodyParser = require("body-parser");

// tell express to use body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    // in {friends: friends}, the first 'friends' refers to the name we're giving this data as we
    // pass it into the view. The second 'friends' refers to the above array we're passing in.
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});