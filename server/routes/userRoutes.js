const express = require("express");
const {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const auth = require("../middlewares/auth");
const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.get("/", auth, getUser);
router.patch("/", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.get("/all", auth, authAdmin, getAllUsers);

module.exports = router;
