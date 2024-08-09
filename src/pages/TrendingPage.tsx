import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Dropdown from "react-bootstrap/Dropdown";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import { useTrending } from "../hooks/useTrending";

const TrendingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const timeWindowParam = searchParams.get("time_window") || "";

  const { data, isError } = useTrending(timeWindowParam);

  const handleTimeWindowSelect = (time_window: string) => {
    setSearchParams({ time_window: time_window });
  };

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching genres.</Alert>
    );
  }

  return (
    <>
      {data && (
        <div>
          <div className="d-flex justify-content-between">
            <h1 className="mb-3">🍿 Trending</h1>

            <Dropdown>
              <Dropdown.Toggle variant="primary">
                {timeWindowParam}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleTimeWindowSelect("day")}>
                  Day
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleTimeWindowSelect("week")}>
                  Week
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Row sm={1} md={2} lg={4} className="g-4 mb-3">
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default TrendingPage;
