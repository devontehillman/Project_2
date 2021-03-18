const isAuthenticated = require("./isAuthenticated");

module.exports = function(req, res, next) {
  if (req.isAuthenticated() && req.user.admin === 1) {
    console.log(req.user.admin);
    return next();
  }
  return res.redirect(403, "/error");
};
