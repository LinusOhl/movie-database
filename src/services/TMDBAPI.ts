import axios from "axios";
import {
  MoviesResult,
  Genres,
  Movie_More,
  Person,
} from "../types/TMDBAPI.types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_ACCESS_TOKEN = import.meta.env.VITE_REACT_APP_API_ACCESS_TOKEN;

// Create a new axios instance
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + API_ACCESS_TOKEN,
  },
});

// Execute a HTTP GET request to an endpoint
const get = async <T>(endpoint: string) => {
  const response = await instance.get<T>(endpoint);
  return response.data;
};

// Get all genres
export const getAllGenres = () => {
  return get<Genres>("/genre/movie/list");
};

// Get movies by genre
export const getMoviesByGenre = (genre_id: number, page = 1) => {
  return get<MoviesResult>(
    `/discover/movie?with_genres=${genre_id}&page=${page}&include_adult=false`
  );
};

// Get movie by id
export const getMovieById = (movie_id: number) => {
  return get<Movie_More>(
    `/movie/${movie_id}?append_to_response=credits,similar`
  );
};

// Get movies in cinemas now
export const getMoviesNowPlaying = () => {
  return get<MoviesResult>("/movie/now_playing?include_adult=false");
};

// Get trending movies
export const getTrendingMovies = (time_window = "day") => {
  return get<MoviesResult>(
    `/trending/movie/${time_window}?include_adult=false`
  );
};

// Get top rated movies
export const getTopRatedMovies = () => {
  return get<MoviesResult>("/movie/top_rated?include_adult=false");
};

// Get actor by id
export const getActorById = (actor_id: number) => {
  return get<Person>(`/person/${actor_id}?append_to_response=movie_credits`);
};

// Search all movies
export const searchAllMovies = (query: string, page = 1) => {
  return get<MoviesResult>(`/search/movie?query=${query}&page=${page}`);
};
