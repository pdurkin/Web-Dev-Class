// start packages
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({exteded:true}));
app.set("view engine", "ejs");

var campgrounds = [
            {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg"},
            {name: "Dewey Point", image: "https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/21/36/2818.IMG_2641.JPG"},
            {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Deep_Lake_tenting_campsite_-_Riding_Mountain_National_Park.JPG"}
        ];

// Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// Display campgrounds
app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

// Adds new campground with form
app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

// Post new campground to campgrounds page
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    
    // add form submission to campgrounds array
    campgrounds.push(newCampground);
    
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started!");
});