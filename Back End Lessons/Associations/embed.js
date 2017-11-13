var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]     // <-- THIS IS THE EMBEDDED PART!
});

var User = mongoose.model("User", userSchema);

/*
    Sample model
    1 user has many posts
    
    {
        email: "blah@blah.com",
        name: "Charlie",
        posts:
            {
                {title: "Post title", content: "Gibberish"}
                {title: "Post title 2", content: "Gibberish"}
                {title: "Post title 3", content: "Gibberish"}
            }
    }
*/

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn."
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        user.posts.push({
            title: "3 things I really hate",
            content: "Voldemort. Voldemort. Voldemort."
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        });
    }
});