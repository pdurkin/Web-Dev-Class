var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient: true});

// Include the post/user.js files which contain the model creations
var Post = require("./models/post");
var User = require("./models/user");

// POST - title, content
// var postSchema = new mongoose.Schema({
//     title: String,
//     content: String
// });

// var Post = mongoose.model("Post", postSchema);

// USER - email, name
// var userSchema = new mongoose.Schema({
//     email: String,
//     name: String,
//     posts: [
//          {                            // Here's the reference part.
//              type: mongoose.Schema.Types.ObjectId,
//              ref: "Post"
//          }
//      ]     
// });

// var User = mongoose.model("User", userSchema);

// Create post, add it to a user, save to DB
Post.create({
    title: "How to cook the best burger pt. 4",
    content: "aASDASD DSFAS DSFASDqr"
}, function(err, post){
    // Find user
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            // Add post to User's post attribute
            foundUser.posts.push(post);
            // Save to DB
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        }
    });
});

// Create User
// User.create({
//     email:"bob@gmail.com",
//     name: "Bob Belcher"
// });

// Find user
// find all posts for that user
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });