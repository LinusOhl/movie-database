import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import CustomPagination from "../components/CustomPagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import MovieCard from "../components/MovieCard";
import Row from "react-bootstrap/Row";
import { useGenresQuery } from "../hooks/useGenresQuery";

const GenresPage = () => {
  const {
    selectedGenre,
    isGenreError,
    genreData,
    isMoviesByGenreError,
    moviesByGenreData,
    pageParam,
    genreIdParam,
    handleGenreSelect,
    setSearchParams,
  } = useGenresQuery();

  if (isGenreError || isMoviesByGenreError) {
    return (
      <Alert variant="warning">An error occurred while fetching genres.</Alert>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h1>🎞 Genres</h1>

        {genreData && (
          <DropdownButton
            data-bs-theme="light"
            title={
              localStorage.getItem("selected-genre")
                ? localStorage.getItem("selected-genre")
                : "Genres"
            }
          >
            {genreData.genres.map((genre) => (
              <Dropdown.Item
                key={genre.id}
                onClick={() => {
                  localStorage.setItem("selected-genre", genre.name);
                  handleGenreSelect(genre);
                }}
              >
                {genre.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        )}
      </div>

      {moviesByGenreData &&
        Number(pageParam) > Math.min(moviesByGenreData.total_pages, 500) &&
        selectedGenre && (
          <div>
            <Alert variant="warning">No more pages, sorry.</Alert>
            <Button className="goback-btn" variant="primary">
              Go back
            </Button>
          </div>
        )}

      {moviesByGenreData &&
        genreIdParam &&
        Number(pageParam) <= Math.min(moviesByGenreData.total_pages, 500) && (
          <>
            <Row sm={1} md={2} lg={4} className="g-4 mb-3">
              {moviesByGenreData.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </Row>

            <CustomPagination
              page={Number(pageParam)}
              hasPreviousPage={Number(pageParam) > 1}
              hasNextPage={
                Number(pageParam) < Math.min(moviesByGenreData.total_pages, 500)
              }
              onFirstPage={() =>
                setSearchParams({ genre_id: genreIdParam, page: "1" })
              }
              onLastPage={() =>
                setSearchParams({
                  genre_id: genreIdParam,
                  page: String(Math.min(moviesByGenreData.total_pages, 500)),
                })
              }
              onPreviousPage={() =>
                setSearchParams({
                  genre_id: genreIdParam,
                  page: String(Number(pageParam) - 1),
                })
              }
              onNextPage={() =>
                setSearchParams({
                  genre_id: genreIdParam,
                  page: String(Number(pageParam) + 1),
                })
              }
            />
          </>
        )}
    </>
  );
};

export default GenresPage;
