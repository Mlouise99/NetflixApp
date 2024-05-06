import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPages from "./pages/AllPages"
import Home from './pages/Home';
import Explore from './pages/Explore';
import Genre from './pages/Genre';
import News from './pages/News';
import Movies from './pages/Movies';
import TV from './pages/TV';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPages />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/gen" element={<Genre />} />
          <Route path="/news" element={<News />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/show" element={<TV />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
