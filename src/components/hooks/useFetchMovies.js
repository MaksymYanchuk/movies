import { enqueueSnackbar } from "notistack";
import {useQueries } from "@tanstack/react-query";
import { _transformMoviesList } from "../../services/moviesServices";
import { http } from "../../services/moviesServices";

const useFetchMovies = (genresArr, params) => {
  const genrePromises = genresArr.map((item) => {
    return {
      genre: item.genre,
      numbered: item.numbered,
      promise: async () => {
        try {
          const genreParams = new URLSearchParams(params);
          item.genreParam && genreParams.append("genre", item.genre);
          const response = await http.get(item.url || "/titles", { params: genreParams });
          return response.data;
        } catch (error) {
          enqueueSnackbar(`Error fetching movies: ${item.genre}`, { variant: "error" });
          throw error;
        }
      }
    };
  });

  const results = useQueries({
    queries: genrePromises.map((promise, i) => {
      return {
        queryKey: [genresArr, params, i],
        queryFn: promise.promise,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
        retryOnMount: false,
        keepPreviousData: true,
        select: (data) =>
          data?.results.map((movie) => {
            return _transformMoviesList(movie, promise.genre, promise.numbered);
          }),
      };
    }),
    combine: (results) => {
      return {
        data: results.reduce((acc, result) => {
          if (!result.data || result.data.length === 0) {
            return acc;
          }
          if (result.data[0].genre) {
            acc[result.data?.[0]?.genre] = result.data;
          }
          return acc;
        }, {}),
        isLoading: results.some((result) => result.isLoading),
        error: results.some((result) => result.isError),
        isPlaceholderData: results.some((result) => result.isPlaceholderData),
        isPending: results.some((result) => result.isPending),
      };
    },
  });

  return results;
};


export default useFetchMovies;
