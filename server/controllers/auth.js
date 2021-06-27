const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 12);

    const user = {
      firstName,
      lastName,
      username,
      email,
      password: hashPassword,
    };

    const newUser = await User.create(user);

    await newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "This user does not exist.",
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({
        message: "Password is incorrect!",
      });
    }

    const createAccessToken = (payload) => {
      return jwt.sign(payload, process.env.ACCESS, {
        expiresIn: "20m",
      });
    };

    const token = createAccessToken({ id: user._id });

    console.log(token);

    return res.status(200).json({
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
