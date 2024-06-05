import axios from "axios";

export const _notFoundImg =
  "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
const _apiKey = "fa1733fc48msh6a8d997325a2d79p1c6c4ajsnb688a7d2767c";
const _apiHost = "moviesdatabase.p.rapidapi.com";
const _url = "https://moviesdatabase.p.rapidapi.com";

export const http = axios.create({
  baseURL: _url,
  headers: {
    "X-RapidAPI-Key": _apiKey,
    "X-RapidAPI-Host": _apiHost,
  },
});

export const _transformMoviesList = (movies, genre, numbered) => {
  return {
    genre: genre || null,
    numbered: numbered || false,
    id: movies.id,
    title: movies.titleText.text,
    description: movies.plot?.plotText?.plainText,
    image: movies.primaryImage?.url || _notFoundImg,
    genres: movies.genres?.genres,
    runtime: movies.runtime?.seconds,
    isSeries: movies.titleType.isSeries,
    voteCount:movies.ratingsSummary.voteCount,
    releaseYear: movies.releaseYear?.year
  };
};
