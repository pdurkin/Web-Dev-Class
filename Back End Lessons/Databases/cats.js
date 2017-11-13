var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Connect to the cat_app DB. Note that if the DB has not been already created, or if mongo cannot find the DB, it will create one
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Note that the "Cat" should always be the singular of whatever your collection is. So for Cats, "Cat", for People, "Person", etc.
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
/* 
var george = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

// .save will attempt to save george to the DB. By passing in a callback function with .save, we can check for errors and/or log progress. 
// Note that cat in the callback function is what is being sent back from the DB, not neccesarily george. i.e., george != cat sometimes.
george.save(function(err, cat){
    if(err){
        console.log("Something went wrong!");
    }
    else{
        console.log("We just saved a cat to the DB:");
        console.log(cat);
    }
});
*/

// .create() is basically .new() and .save() at the same time
Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else {
        console.log(cat);
    }
});

/*
// retrieve all cats from the DB and console.log each one
// {} means look for all cats, not specificying what to look for
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no! An error!");
        console.log(err);
    }
    else {
        console.log("Take a look at these cats:");
        console.log(cats);
    }
});
*/