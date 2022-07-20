import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilter, movieSort } from "../../redux/MovieListSlice";
import "./filters.css";

export const Filters = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.movie.currentFilter);
  const [btnAsc, setBtnAsc] = useState(false);
  const [btnDesc, setBtnDesc] = useState(false);

  const changeBtnAsc = () => {
    setBtnAsc(!btnAsc);
    dispatch(movieSort("asc"));
  };

  const changeBtnDesc = () => {
    setBtnDesc(!btnDesc);
    dispatch(movieSort("desc"));
  };

  return (
    <div className="container__filter">
      <div>
        <button
          onClick={() => dispatch(movieFilter(""))}
          className="btn__async"
        >
          ALL
        </button>
        <button
          onClick={() => dispatch(movieFilter("Fantasy"))}
          className={`btn__async ${
            currentFilter === "Fantasy" && "btn__async-complete"
          }`}
        >
          FANTASY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Adventure"))}
          className={`btn__async ${
            currentFilter === "Adventure" && "btn__async-complete"
          }`}
        >
          ADVENTURE
        </button>
        <button
          onClick={() => dispatch(movieFilter("Family"))}
          className={`btn__async ${
            currentFilter === "Family" && "btn__async-complete"
          }`}
        >
          FAMILY
        </button>
        <button
          onClick={() => dispatch(movieFilter("COMEDY"))}
          className={`btn__async ${
            currentFilter === "COMEDY" && "btn__async-complete"
          }`}
        >
          COMEDY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Thriller"))}
          className={`btn__async ${
            currentFilter === "Thriller" && "btn__async-complete"
          }`}
        >
          THRILLER
        </button>
        <button
          onClick={() => dispatch(movieFilter("Drama"))}
          className={`btn__async ${
            currentFilter === "Drama" && "btn__async-complete"
          }`}
        >
          DRAMA
        </button>
        <button
          onClick={() => dispatch(movieFilter("Documentary"))}
          className={`btn__async ${
            currentFilter === "Documentary" && "btn__async-complete"
          }`}
        >
          DOCUMENTARY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Horror"))}
          className={`btn__async ${
            currentFilter === "Horror" && "btn__async-complete"
          }`}
        >
          HORROR
        </button>
      </div>
      <div>
        SORT BY RELEASE DATE
        <button
          onClick={changeBtnAsc}
          className={btnAsc === true ? `btn__async-complete` : `btn__async`}
        >
          ASC
        </button>
        <button
          onClick={changeBtnDesc}
          className={btnDesc === true ? `btn__async-complete` : `btn__async`}
        >
          DESC
        </button>
      </div>
    </div>
  );
};
