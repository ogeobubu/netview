import { MovieListSection, MovieListItem } from "./styles";
import img from "../../../../../assets/hero-bg.jpg";
import { List } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const response = await axios.get("/api/movies");
      setMovies(response.data.message.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <MovieListSection>
          {movies?.map((movie) => {
            const imageURL = "https://image.tmdb.org/t/p/w1280";

            return (
              <MovieListItem key={movie.id}>
                <img src={imageURL + movie.poster_path} alt={movie.title} />

                <div className="menuOption">
                  <Link className="linkMovie" to={`/movie/${movie.id}`}>
                    <List style={{ color: "white" }} />
                  </Link>
                </div>
                <div className="movieDescription">
                  <Link className="linkMovie" to={`/movie/${movie.id}`}>
                    <h3 className="movieTitle">{movie.title}</h3>
                  </Link>
                  <span className="movieDate">{movie.release_date}</span>
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
                  </div>
                </div>
              </MovieListItem>
            );
          })}
        </MovieListSection>
      )}
    </>
  );
};

export default MovieList;
