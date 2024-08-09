import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import SmallMovieCard from "../components/SmallMovieCard";
import SmallActorCard from "../components/SmallActorCard";
import { useMovie } from "../hooks/useMovie";

const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const { data, isError } = useMovie(movieId);

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching movie.</Alert>
    );
  }

  return (
    <div>
      {data && (
        <>
          <h1 className="mb-3">{data.title}</h1>

          <Row>
            <Col>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                      : "https://placehold.co/500x750"
                  }
                />
                <Card.Header>Information</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Runtime: {data.runtime} minutes
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Language: {data.original_language}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Budget:{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data.budget)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Revenue:{" "}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(data.revenue)}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col xs={12} md={8}>
              <div className="information-container">
                <h2 className="mb-3">More Information</h2>
                <p>"{data.overview}"</p>

                <h3>Cast</h3>
                <CardGroup className="mb-3">
                  {data.credits.cast.slice(0, 5).map((actor) => (
                    <SmallActorCard key={actor.id} data={actor} />
                  ))}
                </CardGroup>

                <h3>Similar movies</h3>
                <CardGroup className="mb-3">
                  {data.similar.results.slice(0, 5).map((smMovie) => (
                    <SmallMovieCard key={smMovie.id} data={smMovie} />
                  ))}
                </CardGroup>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default MoviePage;
