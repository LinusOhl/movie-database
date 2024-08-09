import { Movie } from "./TMDBAPI_movies.types";

export type Person = {
  id: number;
  biography: string;
  birthday: string;
  name: string;
  profile_path: string;
  movie_credits: {
    cast: Movie[];
  };
};
