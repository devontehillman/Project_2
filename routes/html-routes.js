/* eslint-disable prettier/prettier */
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    if (req.user.admin) {
      res.redirect("/admin");
    } else {
      //redirect to content consumer page
      res.redirect("/user");
    }
  });

  app.get("/user", isAuthenticated, (req, res) => {
    if (req.user.admin) {
      res.redirect("/admin");
    } else {
      db.Article.findAll({
        raw: true,
        attributes: ["id", "title", "categoryId", "english", "spanishTrans"],
      }).then((data) => {
        //console.log(data);
        res.render("userIndex", {
          article: data,
        });
      });
    }
    });

  app.get("/admin", isAuthenticated, (req, res) => {
    if (req.user.admin) {
      db.Article.findAll({
        raw: true,
        attributes: ["id", "title", "categoryId", "english", "spanishTrans"],
      }).then((data) => {
        //console.log(data);
        res.render("index", {
          article: data,
        });
      });
    } else {
      //redirect to content consumer page
      res.redirect("/user");
    }
  });

  app.get("/newArticle", isAuthenticated, (req, res) => {
    if (req.user.admin) {
      res.sendFile(path.join(__dirname, "../public/newArticle.html"));
    } else {
      //redirect to content consumer page
      res.redirect("/");
    }
  });

  app.get("/api/article/:title", isAuthenticated, (req, res) => {
    console.log(req.params)
    // res.end()
    const articleContents = {
      first: '',
      last: '',
      article: {}
    };
      db.User.findOne({
        raw: true,
        where: { admin: 1 },
        attributes:["firstname", "lastname"]
      }).then((data) => {
        articleContents.first = data.firstname;
        articleContents.last = data.lastname;
        //console.log(articleContents)
      });

      db.Article.findOne({
        where: { title: req.params.title },
        raw: true,
        attributes: ["id", "title", "categoryId", "english", "spanishTrans"],
      }).then((data) => {
          articleContents.article = data;
          console.log(articleContents.article)
          res.render("article", {
          first: articleContents.first,
          last: articleContents.last,
          title: articleContents.article.title, 
          english: articleContents.article.english,
          spanishTrans: articleContents.article.spanishTrans
          }
          )
      });
  });
};
