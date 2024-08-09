import { useEffect, useState } from "react";
import { Movie } from "../../types/TMDBAPI_movies.types";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Footer = () => {
  const [moviesArray, setMoviesArray] = useState<Movie[]>([]);

  useEffect(() => {
    const moviesArrayString = localStorage.getItem("moviesArray");

    if (moviesArrayString) {
      setMoviesArray(JSON.parse(moviesArrayString));
    }
  }, []);

  const handleStorageEvent = (e: StorageEvent) => {
    if (e.key === "moviesArray") {
      setMoviesArray(e.newValue ? JSON.parse(e.newValue) : []);
    }
  };

  window.addEventListener("storage", handleStorageEvent);

  return (
    <div>
      {moviesArray && (
        <CardGroup className="mt-3">
          {moviesArray.map((movie) => (
            <Card key={movie.id}>
              <Card.Img
                variant="top"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/500x750"
                }
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      )}
    </div>
  );
};

export default Footer;
