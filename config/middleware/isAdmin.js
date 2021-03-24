//this file is part of the authentication to look to see if the user is an admin or a user.  If they are not an admin, they will be re-directed to a 403 error page

const isAuthenticated = require("./isAuthenticated");

module.exports = function(req, res, next) {
  if (req.isAuthenticated() && req.user.admin === 1) {
    console.log(req.user.admin);
    return next();
  }
  return res.redirect(403, "/error");
};
