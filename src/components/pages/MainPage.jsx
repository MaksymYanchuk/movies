import useMoviesService from "../../services/MoviesServices";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesList";

const MainPage = () => {
  const [actionList, setActionList] = useState([]);
  const { getUpcomingMovies } = useMoviesService();

  // const genresToLoad = ['Action', 'Comedy', 'Romance', 'Drama'];

  const onLoad = () => {
    getUpcomingMovies('Action')
    .then((data) => {
      setActionList(data)
    })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    onLoad();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MoviesList movieList={actionList}></MoviesList>
      {/* <MoviesList movieList={actionList}></MoviesList> */}
    </>
  );
};

export default MainPage;
