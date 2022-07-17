import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/MovieListSlice";
import { useNavigate } from "react-router-dom";
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
      <img className="movie_img" src={currentFilm.poster_path} alt="sd" />
    </div>
  );
};
