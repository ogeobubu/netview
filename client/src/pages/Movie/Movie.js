import Navbar from "../HomePage/Navbar/Navbar";
import { MovieSection, MovieDetails, MovieDescription } from "./styles";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const imageURL = "https://image.tmdb.org/t/p/w1280";
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(`/api/movies/${id}`);
      setMovie(response.data.message);
    };
    getMovies();
  }, [id]);

  return (
    <>
      <MovieSection>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <MovieDetails>
          <div className="imageContain">
            <img src={imageURL + movie.poster_path} alt="" className="image" />
          </div>

          <MovieDescription>
            <h2 className="movieTitle">{movie.title}</h2>
            <div className="generic">
              <span className="watchAge">{movie.adult ? "18+" : "PG"}</span>
              <span className="date">{movie.release_date}</span>
              <span className="genre">
                {movie.genres?.map((genre) => genre.name)}
              </span>
              <span className="duration">{movie.runtime}minutes</span>
            </div>
            <div className="ratingTitle">
              <div className="ratings">
                <div
                  className={
                    movie.vote_average >= 8
                      ? "inner green"
                      : movie.vote_average >= 5
                      ? "inner yellow"
                      : movie.vote_average < 4
                      ? "inner red"
                      : "inner"
                  }
                >
                  {movie.vote_average}
                </div>
              </div>{" "}
              Ratings
            </div>
            <div className="overview">
              <h3 className="overviewTitle">Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </MovieDescription>
        </MovieDetails>
      </MovieSection>
      <Footer />
    </>
  );
};

export default Movie;
