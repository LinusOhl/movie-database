import { useQuery } from "@tanstack/react-query";
import { searchAllMovies } from "../services/TMDBAPI";

export const useSearchMovies = (query: string, pageParam: string) => {
  return useQuery({
    queryKey: ["search-tmdb", { query, pageParam }],
    queryFn: () => searchAllMovies(query, Number(pageParam)),
  });
};
