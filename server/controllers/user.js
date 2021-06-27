const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if (!user) {
      return res.status(401).json({
        message: "This user does not exist",
      });
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.user.id },
      {
        $set: req.body,
      }
    );
    const updatedUser = await User.find({ _id: req.user.id });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(401).json({
        message: "This user does not exist",
      });
    } else {
      return res.status(200).json({
        message: "This user has been deleted!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
