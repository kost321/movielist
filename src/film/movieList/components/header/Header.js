import React, { useState } from "react";
import { movieSearch,notFoundMovie } from "../../redux/MovieListSlice";
import { useDispatch, useSelector } from "react-redux";

export function Header() {
  const [value, setValue] = useState("");
  const countMovies = useSelector((state) => state.movie.currentCountMovie);
  console.log(countMovies);
  // debugger;
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    dispatch(movieSearch(value));

// СПРОСИТЬ!!!!
    // if(countMovies === 0) {
    //   debugger
    //   dispatch(notFoundMovie())
    // }
  };

  return (
    <>
      
        <div>
          <input
            type="text"
            placeholder="What do you want to watch?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
        <button className="btnAsync" onClick={onSubmit}>
          SEARCH
        </button>
   
    </>
  );
}

