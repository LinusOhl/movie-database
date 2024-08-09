import { Movie } from "../types/TMDBAPI_movies.types";

const updateLocalStorageMoviesArray = (item: Movie) => {
  const moviesArrayString = localStorage.getItem("moviesArray") || "[]";
  const moviesArray: Movie[] = moviesArrayString
    ? JSON.parse(moviesArrayString)
    : [];

  if (moviesArray.length === 10) {
    moviesArray.shift();
  }

  moviesArray.push(item);

  localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
};

export default updateLocalStorageMoviesArray;
