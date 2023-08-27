import axios from "axios";
const useMoviesService = () => {
 const _apiKey = "fa1733fc48msh6a8d997325a2d79p1c6c4ajsnb688a7d2767c";
 const _apiHost = 'moviesdatabase.p.rapidapi.com"'

  const _transformMoviesList = (movies, genre) => {
    return {
      genre,
      id: movies.id,
      title: movies.titleText.text,
      image:
        movies.primaryImage?.url ||
        "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
    };
  };

  const getUpcomingMovies = async (genre) => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      params: {
        genre,
        info: "base_info",
      },
      headers: {
        "X-RapidAPI-Key": _apiKey,
        "X-RapidAPI-Host": _apiHost,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response);
      return response.data.results.map((item) => _transformMoviesList(item, genre));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getUpcomingMovies,
  };
};

export default useMoviesService;
