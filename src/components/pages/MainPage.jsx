import moviesService from "../../services/moviesServices";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesList";
import ErrorBoundary from "../ErrorBoundary";

import Spinner from "../Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";


const genresToLoad = [
  {
    genre: "Latest & Trending",
    numbered: true,
  },
  {
    genre: "Top Searches",
    numbered: false,
  },
  {
    genre: "Action",
    numbered: false,
  },
  {
    genre: "Comedy",
    numbered: false,
  },
  {
    genre: "Romance",
    numbered: false,
  },
  {
    genre: "Drama",
    numbered: false,
  },
];

const MainPage = () => {
  

  const [genreList, setGenreList] = useState({});
  const [process, setProcess] = useState("loading");

  const { getMovies } = moviesService();
  const onLoad = async () => {
    try {
      const genreData = await Promise.all(
        genresToLoad.map((item) => getMovies(item.genre, item.numbered))
      );

      console.log(genreData);
      const updatedGenreList = genresToLoad.reduce((acc, genre, index) => {
        const formattedGenre = (
          genre.genre.charAt(0).toLowerCase() + genre.genre.slice(1)
        ).replace(/ /g, "");
        acc[formattedGenre] = genreData[index];

        return acc;
      }, {});
      setGenreList(updatedGenreList);
      setProcess("confirmed");
    } catch (error) {
      console.log(error);
      setProcess("error");
    }
  };

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProcessState = () => {
    if (process === "loading") {
      return <Spinner/>
    }
    if (process === "error") {
      return <ErrorMessage/>
    }
    return Object.entries(genreList).map((item) => {
      return (
        <ErrorBoundary key={item[0]}>
          <MoviesList
            movieList={item[1]}
            title={item[1][0]?.genre}
            numbered={item[1][0]?.numbered}
          />
        </ErrorBoundary>
      );
    })
  }

  console.log(process);
  return (
    <>
      {renderProcessState()}
    </>
  );
};

export default MainPage;
