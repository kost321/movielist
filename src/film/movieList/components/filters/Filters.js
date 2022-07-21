import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieFilter, movieSort } from "../../redux/MovieListSlice";
import sortDown from "./media/sort-down_icon-icons.com_73402.svg";
import sortUp from "./media/sort-up_icon-icons.com_73400.svg";

import "./filters.css";

export const Filters = () => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.movie.currentFilter);
  const [btnAsc, setBtnAsc] = useState(false);
  // const [btnDesc, setBtnDesc] = useState(false);

  const changeBtnAsc = () => {
    setBtnAsc(!btnAsc);
    dispatch(movieSort("asc"));
  };

  const changeBtnDesc = () => {
    setBtnAsc(!btnAsc);
    dispatch(movieSort("desc"));
  };

  let sortBtn;
  if (btnAsc) {
    sortBtn = (
      <>
        <button onClick={changeBtnAsc}>ASC</button>
          <img className="icon-sort" src={sortUp} alt="sortDown" />
      </>
    )
  } else {
    sortBtn = (
      <>
        <button onClick={changeBtnDesc}>DESC</button>
          <img className="icon-sort" src={sortDown} alt="sortUp" />
      </>
    )
  }

  return (
    <div className="container__filter">
      <div>
        <button
          onClick={() => dispatch(movieFilter(""))}
          className={currentFilter === "" ? "btn__async-complete" : null}
        >
          ALL
        </button>
        <button
          onClick={() => dispatch(movieFilter("Fantasy"))}
          className={currentFilter === "Fantasy" ? "btn__async-complete" : null}
          
        >
          FANTASY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Adventure"))}
          className={currentFilter === "Adventure" ? "btn__async-complete" : null}
        >
          ADVENTURE
        </button>
        <button
          onClick={() => dispatch(movieFilter("Family"))}
          className={currentFilter === "Family" ? "btn__async-complete" : null}
        >
          FAMILY
        </button>
        <button
          onClick={() => dispatch(movieFilter("COMEDY"))}
          className={currentFilter === "COMEDY" ? "btn__async-complete" : null}
        >
          COMEDY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Thriller"))}
          className={currentFilter === "Thriller" ? "btn__async-complete" : null}
        >
          THRILLER
        </button>
        <button
          onClick={() => dispatch(movieFilter("Drama"))}
          className={currentFilter === "Drama" ? "btn__async-complete" : null}
        >
          DRAMA
        </button>
        <button
          onClick={() => dispatch(movieFilter("Documentary"))}
          className={currentFilter === "Documentary" ? "btn__async-complete" : null}
        >
          DOCUMENTARY
        </button>
        <button
          onClick={() => dispatch(movieFilter("Horror"))}
          className={currentFilter === "Horror" ? "btn__async-complete" : null}
        >
          HORROR
        </button>
      </div>
      <div className="block__sort">
        SORT BY RELEASE DATE
        {sortBtn}
      </div>
    </div>
  );
};
