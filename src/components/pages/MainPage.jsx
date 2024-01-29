import styled from "styled-components";
import MoviesList from "../MoviesList";
import MainPagePreview from "../MainPagePreview";
import ErrorBoundary from "../ErrorBoundary";
import Spinner from "../Spinner";
import useFetchMovies, { _genresToLoad } from "../../services/moviesServices";
import ErrorMessage from "../ErrorMessage";

const MoviesWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const MainPage = () => {
  const {data: movies, loading, error} = useFetchMovies();
  
  console.log(movies)
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage/>
  }

  return (
    <>
      {Object.keys(movies).length > 0 && (
        <ErrorBoundary>
          <MainPagePreview movie={movies[_genresToLoad[0]?.genre]?.[0]} />
        </ErrorBoundary>
      )}
      <MoviesWrapper>
        {Object.entries(movies).map((item) => (
          <ErrorBoundary key={item[0]}>
            <MoviesList
              movieList={item[1]}
              title={item[1]?.[0]?.genre}
              numbered={item[1]?.[0]?.numbered}
            />
          </ErrorBoundary>
        ))}
      </MoviesWrapper>
    </>
  );
};

export default MainPage;
