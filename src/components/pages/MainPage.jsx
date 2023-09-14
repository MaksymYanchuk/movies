import useMoviesService from "../../services/useMoviesServices";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesList";
import ErrorBoundary from "../ErrorBoundary";
const MainPage = () => {
  const genresToLoad = [
    "Latest & Trending",
    "Top Searches",
    "Action",
    "Comedy",
    "Romance",
    "Drama",
    "Trending",
  ];

  const [genreList, setGenreList] = useState({});

  const { getMovies, process } = useMoviesService();

  const onLoad = async () => {
    try {
      const genreData = await Promise.all(
        genresToLoad.map((genre) => getMovies(genre))
      );
      console.log(genreData);
      const updatedGenreList = genresToLoad.reduce((acc, genre, index) => {
        const formattedGenre = (
          genre.charAt(0).toLowerCase() + genre.slice(1)
        ).replace(/ /g, "");
        acc[formattedGenre] = genreData[index];

        return acc;
      }, {});

      setGenreList(updatedGenreList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Object.entries(genreList).map((item) => {
        return (
          <ErrorBoundary key={item[0]}>
            <MoviesList
              movieList={item[1]}
              title={item[1][0]?.genre}
              process={process}
            ></MoviesList>
          </ErrorBoundary>
        );
      })}
    </>
  );
};

export default MainPage;
