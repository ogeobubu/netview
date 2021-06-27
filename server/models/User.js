const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  subscription: {
    default: "user",
    type: String,
  },
  firstName: String,
  lastName: String,
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("netview_user", userModel);

module.exports = User;
