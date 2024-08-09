import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Actor } from "../types/TMDBAPI_movies.types";

interface ISmallActorCardProps {
  data: Actor;
}

const SmallActorCard: React.FC<ISmallActorCardProps> = ({ data }) => {
  return (
    <Card className="sm-card" key={data.id}>
      <Link className="sm-link" to={`/actors/${data.id}`}>
        <Card.Img
          variant="top"
          src={
            data.profile_path
              ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
              : "https://placehold.co/500x750"
          }
        />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.character}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default SmallActorCard;
