import React, { useState } from "react";
import "./editWindow.css";
import { editPost } from "../../../redux/MovieListSlice";
import { useSelector, useDispatch } from "react-redux";

export const EditWindow = ({
  id,
  valueTitle,
  setValueTitle,
  valueRelease,
  setValueRelease,
  valueUrl,
  setValueUrl,
  valueOverview,
  setValueOverview,
  valueRuntime,
  seValueRuntime,
  onSubmit,
}) => {
  const movieState = useSelector((state) => state.movie.posts);
  let currentMovieState = movieState.find((item) => item.id === id);
console.log(movieState)
  return (
    <div className="container__input">
      <div className="block__input">
        <button className="btn__close-modal">BACK</button>
        <div className="current-block__input">
          MOVIE ID
          <div>{currentMovieState.id}</div>
        </div>
        <div className="current-block__input">
          TITILE
          <input
            type="text"
            value={valueTitle}
            placeholder={currentMovieState.title}
            onChange={(event) => setValueTitle(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          RELEASE DATE
          <input
            type="text"
            value={valueRelease}
            placeholder={currentMovieState.release_date}
            onChange={(event) => setValueRelease(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          MOVIE URL
          <input
            type="text"
            value={valueUrl}
            placeholder={currentMovieState.poster_path}
            onChange={(event) => setValueUrl(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          OVERVIEW
          <input
            type="text"
            value={valueOverview}
            placeholder={currentMovieState.overview}
            onChange={(event) => setValueOverview(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          RUNTIME
          <input
            type="text"
            value={valueRuntime}
            placeholder={currentMovieState.runtime}
            onChange={(event) => seValueRuntime(event.target.value)}
          />
        </div>
        <button className="btn__on-submit" onSubmit={onSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
};
