import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services/TMDBAPI";

export const useMovie = (movieId: number) => {
  return useQuery({
    queryKey: ["movie", { movieId }],
    queryFn: () => getMovieById(movieId),
  });
};
