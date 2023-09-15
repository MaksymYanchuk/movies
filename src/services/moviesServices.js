import axios from "axios";

const moviesService = () => {
  const _apiKey = "fa1733fc48msh6a8d997325a2d79p1c6c4ajsnb688a7d2767c";
  const _apiHost = 'moviesdatabase.p.rapidapi.com"';
  const _notFoundImg =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
  const _url = "https://moviesdatabase.p.rapidapi.com/titles";

  const _transformMoviesList = (movies, genre, numbered) => {
    return {
      genre,
      numbered,
      id: movies.id,
      title: movies.titleText.text,
      image: movies.primaryImage?.url || _notFoundImg,
    };
  };

  const getMovies = async (genre, numbered) => {
    let options = {
      method: "GET",
      url: _url,
      params: {
        genre,
        list: "most_pop_movies",
        sort: "year.decr",
        info: "base_info",
      },
      headers: {
        "X-RapidAPI-Key": _apiKey,
        "X-RapidAPI-Host": _apiHost,
      },
    };

    switch (genre) {
      case "Top Searches":
        delete options.params.genre;
        break;
      case "Latest & Trending":
        delete options.params.genre;
        options.params.list = "top_rated_english_250";
        break;
      default:
    }

    try {
      const response = await axios.request(options);
      return response.data.results.map((item) =>
        _transformMoviesList(item, genre, numbered)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getMovies,
  };
};

export default moviesService;
