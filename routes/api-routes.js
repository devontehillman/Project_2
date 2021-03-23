/* eslint-disable no-unused-vars */
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { request } = require("chai");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.user.email,
      id: req.user.id,
      admin: req.user.admin,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      admin: req.body.admin,
    })
      .then(() => {
        console.log(req.body);
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        console.log(req.body);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.user.email,
        id: req.user.id,
        admin: req.user.admin,
      });
    }
  });

  //Route to get translated text back to the database (save to db)
  app.post("/api/newArticle", (req, res) => {
    translate(req.body.blogText, "en", "es").then((trans) => {
      db.Article.create({
        title: req.body.title,
        categoryId: req.body.category,
        english: req.body.text,
        spanishTrans: trans,
      })
        .then(() => {
          console.log(req.body);
          res.status(200);
        })
        .catch((err) => {
          console.log(req.body);
          res.status(500).json(err);
        });
    });
  });
};
