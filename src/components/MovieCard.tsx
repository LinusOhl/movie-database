import React from "react";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import updateLocalStorageMoviesArray from "./updateLocalStorageMovieArrays";
import { Movie } from "../types/TMDBAPI.types";
import { useGenres } from "../hooks/useGenres";

interface IMovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
  const { data: genres } = useGenres();

  const getGenreById = (id: number) => {
    if (genres) {
      const genre = genres.genres.find((item) => item.id === id);
      return genre ? genre.name : "";
    }
  };

  return (
    <Col>
      <Card className="card">
        <Card.Img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/500x750"
          }
          alt="Poster"
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>

          <ul className="genres mb-3">
            {movie.genre_ids.slice(0, 3).map((genreId) => (
              <li key={genreId}>
                <Badge className="genre">{getGenreById(genreId)}</Badge>
              </li>
            ))}
          </ul>

          <div className="card-info">
            <h3 className="card-info-title">{movie.title}</h3>
            <p className="card-info-overview">{movie.overview}</p>

            <div className="scores">
              <p>Score</p>
              <div className="score">
                <h4 className="nmbScore">
                  {Math.round(movie.vote_average)} / 10
                </h4>
              </div>
            </div>

            <Link to={`/movies/${movie.id}`}>
              <Button
                variant="primary"
                className="watch-button"
                onClick={() => updateLocalStorageMoviesArray(movie)}
              >
                Learn More
              </Button>
            </Link>
          </div>

          <p className="release-date">{movie.release_date}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
