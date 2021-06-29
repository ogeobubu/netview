const axios = require("axios");

exports.getMovie = async (req, res) => {
  const API_KEY = process.env.API_KEY;

  try {
    const { id } = req.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );

    res.json({
      message: response.data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

exports.getMovies = async (req, res) => {
  const API_KEY = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`
    );

    res.status(200).json({
      message: response.data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};

exports.searchMovie = async (req, res) => {
  const { id } = req.params;
  const API_KEY = process.env.API_KEY;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${id}`
    );
  } catch (error) {}
};
