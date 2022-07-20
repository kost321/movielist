import React from "react";
import { HomePage } from "./film/movieList/components/movieList/MovieLsit";
import { Header } from "./film/movieList/components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieInfo } from "./film/movieList/components/currentMovieInfo/MovieInfo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movieInfo" element={<MovieInfo />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
