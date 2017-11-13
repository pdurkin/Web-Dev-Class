var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            // parse results to JSON
            var data = JSON.parse(body);
            // Send back title of first result
            // res.send(results["Search"][0]["Title"]);
            res.render("results", {data: data});
        }   
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App is running!");
});