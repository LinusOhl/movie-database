import { Genre } from "./TMDBAPI_genres.types";

export type MoviesResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type Movie_More = Movie & {
  budget: number;
  genres: Genre[];
  imdb_id: string;
  production_companies: Production_Company[];
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  credits: {
    cast: Actor[];
    crew: Crew_Member[];
  };
  similar: {
    results: Movie[];
  };
};

export type Actor = {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
};

export type Crew_Member = {
  id: number;
  name: string;
  job: string;
};

export type Production_Company = {
  id: number;
  logo_path: string;
  name: string;
};

export type Language = {
  english_name: string;
};
