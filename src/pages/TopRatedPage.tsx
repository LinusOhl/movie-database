import Alert from "react-bootstrap/Alert";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import { useTopRated } from "../hooks/useTopRated";

const TopRatedPage = () => {
  const { data, isError } = useTopRated();

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching genres.</Alert>
    );
  }

  return (
    <>
      <h1 className="mb-3">🚀 Top Rated</h1>

      {data && (
        <Row sm={1} md={2} lg={4} className="g-4 mb-3">
          {data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      )}
    </>
  );
};

export default TopRatedPage;
