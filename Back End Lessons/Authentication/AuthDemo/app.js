var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUnintialized: false
}));
// passport config
app.use(passport.initialize());
app.use(passport.session());

// These methods take care of the encryption/decryption during sessions. Note that the local mongoose package on the User schema is what added the de/serialize methods to our User schema.
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

// ======================================
//              ROUTES
// ======================================

app.get("/", function(req, res){
    res.render("home");
});

// isLoggedIn checks whether a user is logged in before they can access this page
app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

// Auth routes

// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});

// handling user sign up
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    });
});

// LOGIN ROUTES
// render login form
app.get("/login", function(req, res){
    res.render("login");
});

// login logic
// middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
    }), function(req, res){
    
});

app.get("/logout", function(req, res){
    // destroy user session data, AKA log out!
    req.logout();
    res.redirect("/");
});

// used as middleware to check whether a user is logged in
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up!");
});