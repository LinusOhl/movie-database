import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import CustomPagination from "../components/CustomPagination";
import Form from "react-bootstrap/Form";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import { useSearchMovies } from "../hooks/useSearchMovies";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";
  const pageParam = searchParams.get("page") ?? "1";

  const { data, isError } = useSearchMovies(query, pageParam);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchInput.trim().length) {
      return;
    }

    setPage(1);

    setSearchParams({ query: searchInput, page: String(page) });
  };

  if (isError) {
    return (
      <Alert variant="warning">An error occurred while fetching movie.</Alert>
    );
  }

  return (
    <div>
      <h1>🔎 Search</h1>

      <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Search query</Form.Label>
          <Form.Control
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search movies..."
            required
            type="text"
            value={searchInput}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={!searchInput.trim().length}
          >
            Search
          </Button>
        </div>
      </Form>

      {data && (
        <div>
          <Row sm={1} md={2} lg={4} className="g-4 mb-3">
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Row>

          <CustomPagination
            page={Number(pageParam)}
            hasPreviousPage={Number(pageParam) > 1}
            hasNextPage={Number(pageParam) < Math.min(data.total_pages, 500)}
            onFirstPage={() => setSearchParams({ query: query, page: "1" })}
            onLastPage={() =>
              setSearchParams({
                query: query,
                page: String(Math.min(data.total_pages, 500)),
              })
            }
            onPreviousPage={() =>
              setSearchParams({
                query: query,
                page: String(Number(pageParam) - 1),
              })
            }
            onNextPage={() =>
              setSearchParams({
                query: query,
                page: String(Number(pageParam) + 1),
              })
            }
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
