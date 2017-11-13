var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image:"http://i.imgur.com/nGSZnHN.jpg",
        description:"Here is Cloud's rest"  
    },
    {
        name: "Desert Mesa", 
        image:"https://images.fineartamerica.com/images-medium-large/painted-desert-mesa-top-david-waldo.jpg",
        description:"Here is Desert Mesa blah"  
    },
    {
        name: "Canyon Floor", 
        image:"https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5396707.jpg",
        description:"Here is Canyon Floor drib drib"  
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed all campgrounds!");
        
        // add some campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Added a campground.");
                    
                    // add some comments
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if (err){
                                console.log(err);
                            }
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;