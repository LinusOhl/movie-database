import { Routes, Route } from "react-router-dom";
import ActorPage from "./pages/ActorPage";
import Container from "react-bootstrap/Container";
import GenresPage from "./pages/GenresPage";
import GlobalLoadingSpinner from "./components/GlobalLoadingSpinner";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Navigation from "./pages/partials/Navigation";
import NotFoundPage from "./pages/NotFoundPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import TopRatedPage from "./pages/TopRatedPage";
import TrendingPage from "./pages/TrendingPage";
import "./assets/scss/App.scss";
import Footer from "./pages/partials/Footer";

function App() {
  return (
    <div id="App">
      <Navigation />
      <GlobalLoadingSpinner />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />

          <Route path="/genres" element={<GenresPage />} />
          <Route path="/now-playing" element={<NowPlayingPage />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />

          <Route path="/actors/:id" element={<ActorPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
