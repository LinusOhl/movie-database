import { useQuery } from "@tanstack/react-query";
import { getAllGenres } from "../services/TMDBAPI";

export const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });
};
