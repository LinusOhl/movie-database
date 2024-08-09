import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Movie } from "../types/TMDBAPI_movies.types";

interface ISmallMovieCardProps {
  data: Movie;
}

const SmallMovieCard: React.FC<ISmallMovieCardProps> = ({ data }) => {
  return (
    <Card className="sm-card" key={data.id}>
      <Link className="sm-link" to={`/movies/${data.id}`}>
        <Card.Img
          variant="top"
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "https://placehold.co/500x750"
          }
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.release_date}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default SmallMovieCard;
