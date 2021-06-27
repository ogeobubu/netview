const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("authorization");

  if (!token) {
    return res.status(401).json({
      message: "You are unauthorized to access this.",
    });
  } else {
    return jwt.verify(token, process.env.ACCESS, (error, user) => {
      if (error) {
        return res.status(401).json({
          message: "You are unauthorized to access this.",
        });
      } else {
        req.user = user;
      }
      next();
    });
  }
};

module.exports = auth;
