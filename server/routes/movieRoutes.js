const express = require("express");
const { getMovie, getMovies, searchMovie } = require("../controllers/movie");

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);
router.get("/search/:id", searchMovie);

module.exports = router;
