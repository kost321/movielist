import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/MovieListSlice";
import { useNavigate } from "react-router-dom";
import "./movieInfo.css";

export const MovieInfo = () => {
  const currentFilm = useSelector((state) => state.movie.currentMovie);
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
        <img className="movie_img" src={currentFilm.poster_path} alt="sd" />
        <div>
          <div>
            <div>{currentFilm.title}</div>
            <div>{currentFilm.tagline}</div>
          </div>
          <div>
            <div>{currentFilm.release_date}</div>
            <div>{currentFilm.runtime}</div>
          </div>
          <div>{currentFilm.overview}</div>
        </div>
      </div>
    </div>
  );
};
