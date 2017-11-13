// start packages
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({exteded:true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Note the model var's name starts with a capital. This is a common convention.
var Campground = mongoose.model("Campground", campgroundSchema);

/*
Campground.create(
    {
        name: "Granite Hill", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Deep_Lake_tenting_campsite_-_Riding_Mountain_National_Park.JPG",
        description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!" 
    },function(err, campground){
        if(err){
            console.log(err);
        }        
        else{
            console.log("Newly created campground:");
            console.log(campground);
        }
    });
*/

// var campgrounds = [
//             {name: "Salmon Creek", image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg"},
//             {name: "Dewey Point", image: "https://msdnshared.blob.core.windows.net/media/MSDNBlogsFS/prod.evol.blogs.msdn.com/CommunityServer.Blogs.Components.WeblogFiles/00/00/01/21/36/2818.IMG_2641.JPG"},
//             {name: "Granite Hill", image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Deep_Lake_tenting_campsite_-_Riding_Mountain_National_Park.JPG"}
//         ];

// Landing page
app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - Display campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else {
            // pass in allCampgrounds to the index.ejs page under the var name 'campgrounds'
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
});

// NEW - Adds new campground with form
app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

// CREATE - Post new campground to campgrounds page
app.post("/campgrounds", function(req, res){
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    
    // add form submission to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");  
        }
    });
});

// SHOW - shows more info about one campground.
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            // render show template with that campground (pass in foundCampground to the show.ejs page with var name 'campground')
            res.render("show", {campground: foundCampground});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started!");
});