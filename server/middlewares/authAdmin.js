const User = require("../models/User");

const authAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (user.subscription !== "admin") {
      res.status(401).json({
        message: "You are unauthorized to view this.",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "You are unauthorized to view this.",
    });
  }
};

module.exports = authAdmin;
