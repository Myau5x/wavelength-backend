const db = require("../models");
const passport = require("../config/passport");


module.exports = function(app) {
  

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // GET route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // GET route for all user data
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({        
        email: req.user.email,
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName
      });
    }
  });

  // POST route for saving a new user
  app.post("/api/signup", function(req, res) {
    db.User.create(
      req.body
    ).then(function() {
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      console.log(err);
      res.status(401).json(err);
    });
  });

//POST route to upload a document file

};