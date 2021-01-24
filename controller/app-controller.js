// Import the models
const db = require("../models");
var path = require("path");


module.exports = function(app) {
  //Serve home handlebars page & required data
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    
    res.sendFile(path.join(__dirname, "../public/community.html"));
  });

  
  
  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/profile");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  app.get("/help", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/helpfulinfo.html"));
  });
  app.get("/prof", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ProfessionalProfile.html"));
  });
  

}