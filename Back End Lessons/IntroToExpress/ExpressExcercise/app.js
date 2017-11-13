var express = require("express");
var app = express();

// home page
app.get("/", function(req, res){
    res.send("Hi there! Welcome to my assignment!");
});

// speak
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof!",
        cat: "I hate you, human",
        walrus: "Arf arf"
    }
    var animal = req.params.animal.toLowerCase();
    var noise = sounds[animal];
    
    res.send("The " + animal + " says \"" + noise + "\"");
});

// repeat
app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = parseInt(req.params.num);
    var string = "";
    
    console.log("My word is: " + word);
    console.log("My num is: " + num);
    
    //put together the repeating string
    for (var i = 0; i < num; i++){
        string += word + " ";
    }
    
    res.send(string);
});

// catch-all
app.get("*", function(req, res) {
    res.send("What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
// cloud9 port/IP variables
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!");
});