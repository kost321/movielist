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
    <div className="container__filters">
      <div>
        <button onClick={() => dispatch(movieFilter(""))} className="btnAsync">
          ALL
        </button>

        <button
          onClick={() => dispatch(movieFilter("Fantasy"))}
          className={`btnAsync ${
            currentFilter === "Fantasy" && "btnAsyncComplit"
          }`}
        >
          FANTASY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Adventure"))}
          className={`btnAsync ${
            currentFilter === "Adventure" && "btnAsyncComplit"
          }`}
        >
          ADVENTURE
        </button>
        <button
          onClick={() => dispatch(movieFilter("Family"))}
          className={`btnAsync ${
            currentFilter === "Family" && "btnAsyncComplit"
          }`}
        >
          FAMILY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Thriller"))}
          className={`btnAsync ${
            currentFilter === "Thriller" && "btnAsyncComplit"
          }`}
        >
          THRILLER
        </button>
        <button
          onClick={() => dispatch(movieFilter("Drama"))}
          className={`btnAsync ${
            currentFilter === "Drama" && "btnAsyncComplit"
          }`}
        >
          DRAMA
        </button>
        <button
          onClick={() => dispatch(movieFilter("Documentary"))}
          className={`btnAsync ${
            currentFilter === "Documentary" && "btnAsyncComplit"
          }`}
        >
          DOCUMENTARY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Horror"))}
          className={`btnAsync ${
            currentFilter === "Horror" && "btnAsyncComplit"
          }`}
        >
          HORROR
        </button>
      </div>
      <div>
        SORT BY
        <button
          onClick={changeBtnAsc}
          className = {btnAsc === true ? `btnAsyncComplit` : `btnAsync`}
        >
          ASC
        </button>
        <button
          onClick={changeBtnDesc}
          className = {btnDesc === true ? `btnAsyncComplit` : `btnAsync`}
        >
          DESC
        </button>
      </div>
    </div>
  );
};

export default Filters;
