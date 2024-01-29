import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";

const _apiKey = "fa1733fc48msh6a8d997325a2d79p1c6c4ajsnb688a7d2767c";
const _apiHost = "moviesdatabase.p.rapidapi.com";
const _url = "https://moviesdatabase.p.rapidapi.com";

export const _genresToLoad = [
  {
    genre: "Latest & Trending",
    numbered: true,
  },
  {
    genre: "Top Searches",
    numbered: false,
  },
  {
    genreParam: "Action",
    genre: "Action",
    numbered: false,
  },
  {
    genreParam: "Comedy",
    genre: "Comedy",
    numbered: false,
  },
  {
    genreParam: "Romance",
    genre: "Romance",
    numbered: false,
  },
  {
    genreParam: "Drama",
    genre: "Drama",
    numbered: false,
  },
];

const _transformMoviesList = (movies, genre, numbered) => {
  const _notFoundImg =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";

  return {
    genre,
    numbered,
    id: movies.id,
    title: movies.titleText.text,
    description: movies.plot?.plotText?.plainText,
    image: movies.primaryImage?.url || _notFoundImg,
    genres: movies.genres.genres,
    runtime: movies.runtime?.seconds,
  };
};

const http = axios.create({
  baseURL: _url,
  headers: {
    "X-RapidAPI-Key": _apiKey,
    "X-RapidAPI-Host": _apiHost,
  },
  params: {
    sort: "year.decr",
    info: "base_info",
  },
});

const fetchMovies = async (genre) => {
  const params = new URLSearchParams({
    list: "top_rated_english_250",
    sort: "year.decr",
    info: "base_info",
  });
  genre && params.append("genre", genre);
  return (await http.get("/titles", { params })).data;
};

const useFetchMovies = () => {
  const genrePromises = _genresToLoad.map((item) => {
    return {
      genre: item.genre,
      numbered: item.numbered,
      promise: () => fetchMovies(item.genreParam),
    };
  });

  const results = useQueries({
    queries: genrePromises.map((promise, i) => {
      return {
        queryKey: ["movies", i],
        queryFn: promise.promise,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
        retryOnMount: false,
        select: (data) =>
          data?.results.map((movie) => {
            return _transformMoviesList(movie, promise.genre, promise.numbered);
          }),
          throwOnError: () => {
            enqueueSnackbar(`Error fetching movies for genre ${promise.genre}`, {
              variant: "error",
            });
          }
      };
    }),
    combine: (results) => {
      return {
        data: results.reduce((acc, result) => {
          if (!result.data) {
            return acc;
          }
          if (result.data[0].genre) {
            acc[result.data?.[0]?.genre] = result.data;
          }
          return acc;
        }, {}),
        loading: results.some((result) => result.isLoading),
        error: results.some((result) => result.isError),
      };
    },
  });

  console.log(results)
  return results;
};

export default useFetchMovies;
