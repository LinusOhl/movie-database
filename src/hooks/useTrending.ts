import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../services/TMDBAPI";

export const useTrending = (timeWindowParam: string) => {
  return useQuery({
    queryKey: ["trending-movies", { timeWindowParam }],
    queryFn: () => getTrendingMovies(timeWindowParam),
  });
};
