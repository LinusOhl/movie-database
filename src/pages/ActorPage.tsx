import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import SmallMovieCard from "../components/SmallMovieCard";
import { useActorQuery } from "../hooks/useActorQuery";

const ActorPage = () => {
  const { id } = useParams();
  const actorId = Number(id);

  const { data, isError } = useActorQuery(actorId);

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching genres.</Alert>
    );
  }

  return (
    <div>
      {data && (
        <div>
          <h1 className="mb-3">{data.name}</h1>

          <Row>
            <Col>
              <Card className="mb-3">
                <Card.Img
                  variant="top"
                  src={
                    data.profile_path
                      ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                      : "https://placehold.co/500x750"
                  }
                />
                <Card.Header>Information</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Birthday: {data.birthday}</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>

            <Col xs={12} md={8}>
              <div className="information-container">
                <h2 className="mb-3">More Information</h2>
                <p>{data.biography}</p>

                <h3>Movie credits</h3>
                <CardGroup className="mb-3">
                  {data.movie_credits.cast.slice(0, 5).map((smMovie) => (
                    <SmallMovieCard key={smMovie.id} data={smMovie} />
                  ))}
                </CardGroup>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default ActorPage;
