import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import * as TMDBAPI from "../services/TMDBAPI";
import { Genre } from "../types/TMDBAPI_genres.types";

export const useGenresQuery = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const pageParam = searchParams.get("page") || "1";
  const genreIdParam = searchParams.get("genre_id") || "";

  const { data: genreData, isError: isGenreError } = useQuery({
    queryKey: ["genres"],
    queryFn: TMDBAPI.getAllGenres,
  });

  const { data: moviesByGenreData, isError: isMoviesByGenreError } = useQuery({
    queryKey: ["moviesByGenre", { genreIdParam, pageParam }],
    queryFn: () =>
      TMDBAPI.getMoviesByGenre(Number(genreIdParam), Number(pageParam)),
  });

  const handleGenreSelect = (genre: Genre) => {
    if (moviesByGenreData) {
      setSearchParams({ genre_id: String(genre.id), page: "1" });
      setSelectedGenre(genre.name);
    }
  };

  return {
    selectedGenre,
    isGenreError,
    genreData,
    isMoviesByGenreError,
    moviesByGenreData,
    pageParam,
    genreIdParam,
    handleGenreSelect,
    setSearchParams,
  };
};
