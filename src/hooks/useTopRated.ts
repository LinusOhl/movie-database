import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../services/TMDBAPI";

export const useTopRated = () => {
  return useQuery({
    queryKey: ["top-rated-movies"],
    queryFn: getTopRatedMovies,
  });
};
