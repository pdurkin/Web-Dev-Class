var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
         {                            // Here's the reference part.
             type: mongoose.Schema.Types.ObjectId,
             ref: "Post"
         }
     ]     
});

// var User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema); // return the User model