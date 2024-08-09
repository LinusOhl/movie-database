import { useQuery } from "@tanstack/react-query";
import { getMoviesNowPlaying } from "../services/TMDBAPI";

export const useNowPlaying = () => {
  return useQuery({
    queryKey: ["movies-now-playing"],
    queryFn: getMoviesNowPlaying,
  });
};
