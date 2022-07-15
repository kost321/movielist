import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilter } from "../../redux/MovieListSlice";
import "./filters.css";

export const Filters = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.movie.currentFilter);



  return (
    <div className="container__filters">
      <div>
        <button onClick={() => dispatch(movieFilter(""))} className="btnAsync">
          ALL
        </button>
        <button
          onClick={() => dispatch(movieFilter("Fantasy"))}
          className={`btnAsync ${
            (currentFilter === "Fantasy") && "btnAsyncComplit"
          }`}
        >
          FANTASY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Drama"))}
          className="btnAsync"
        >
          DRAMA
        </button>
        <button
          onClick={() => dispatch(movieFilter("Documentary"))}
          className="btnAsync"
        >
          DOCUMENTARY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Horror"))}
          className="btnAsync"
        >
          HORROR
        </button>
      </div>
      <div>
        SORT BY
        <button className="btnAsync">
          ASC
        </button>
        <button className="btnAsync">
          DESC
        </button>
      </div>
    </div>
  );
};

export default Filters;
