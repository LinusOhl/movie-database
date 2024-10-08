import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      className="mb-3 mdb-navbar"
      data-bs-theme="dark"
      expand="md"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          🎬 MovieDB
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/genres">
              📃 Genres
            </Nav.Link>
            <Nav.Link as={NavLink} to="/now-playing">
              🎥 Now Playing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/trending?time_window=day">
              🍿 Trending
            </Nav.Link>
            <Nav.Link as={NavLink} to="/top-rated">
              🚀 Top Rated
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
