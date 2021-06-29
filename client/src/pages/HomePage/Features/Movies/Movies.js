import { MoviesSection, MoviesContainer } from "./styles";
import MovieList from "../Movies/MovieList/MovieList";

const Movies = () => {
  return (
    <MoviesSection>
      <MoviesContainer>
        <MovieList />
      </MoviesContainer>
    </MoviesSection>
  );
};

export default Movies;
