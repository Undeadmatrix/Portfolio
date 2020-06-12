// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated"); //workaround until database is ready

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/portfolio", function(req, res) {
    console.log("portfolio req reached");
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/oopsy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/oopsy.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

   app.get("/members", function(req, res) {
     if (req.user) {
      res.sendFile(path.join(__dirname, "../public/membersLoggedIn.html"));
     }
    res.sendFile(path.join(__dirname, "../public/membersView.html"));
  });

  app.get("/posts", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/posts.html"));
  });

};
