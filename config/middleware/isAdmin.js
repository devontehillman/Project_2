module.exports = function(req, res, next) {
  if (!isAdmin(req.user)) {
    return res.redirect("/");
  }
  return next();
};
