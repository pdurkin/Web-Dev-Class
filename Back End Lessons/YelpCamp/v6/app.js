// start packages
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    seedsDB     = require("./seeds");

seedsDB();
mongoose.connect("mongodb://localhost/yelp_camp_v5", {useMongoClient: true});
app.use(bodyParser.urlencoded({exteded:true}));
app.set("view engine", "ejs");
// Link to main.css
app.use(express.static(__dirname + "/public"));


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
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });
});

// NEW - Adds new campground with form
app.get("/campgrounds/new", function(req, res){
   res.render("campgrounds/new"); 
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
    // note here that the .populate method is taking the comment id's that are tied to the campground model and populating the comments that are associated 
    // with those id's so that we actually have the comments themselves and not just IDs
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            // render show template with that campground (pass in foundCampground to the show.ejs page with var name 'campground')
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// ==========================================================
// COMMENTS ROUTES
// ==========================================================

app.get("/campgrounds/:id/comments/new", function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }
        else{
            res.render("comments/new", {campground:campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
    // lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            // create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                }
                else{
                    // connect new comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    // redirect to campground show page
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started!");
});