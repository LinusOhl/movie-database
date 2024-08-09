import Alert from "react-bootstrap/Alert";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import { useNowPlaying } from "../hooks/useNowPlaying";

const NowPlayingPage = () => {
  const { data, isError } = useNowPlaying();

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching genres.</Alert>
    );
  }

  return (
    <>
      <h1 className="mb-3">🎥 Now Playing</h1>

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

export default NowPlayingPage;
