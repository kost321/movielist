import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../redux/MovieListSlice";

import "./movieInfo.css";


export const MovieInfo = () => {
  const currentMovie = useSelector((state) => state.movie.currentMovie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(getPosts());
    navigate("/");
  }

  return (
    <div>
      <button onClick={handleClick}>BACK</button>
      <div className="container__movie-info">
        <img className="movie_img" src={currentMovie.poster_path} alt="sd" />
        <div>
          <div>
            <div>{currentMovie.title}</div>
            <div>{currentMovie.tagline}</div>
          </div>
          <div>
            <div>{currentMovie.release_date}</div>
            <div>{currentMovie.runtime}</div>
          </div>
          <div>{currentMovie.overview}</div>
        </div>
      </div>
    </div>
  );
};
