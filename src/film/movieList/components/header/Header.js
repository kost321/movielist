import React, { useState } from "react";
import { movieSearch } from "../../redux/MovieListSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddPost } from "./AddPost";
import { addPost } from "../../redux/MovieListSlice";
import "./header.css";

export function Header() {
  const [value, setValue] = useState("");
  const countMovies = useSelector((state) => state.movie.currentCountMovie);
  console.log(countMovies);
  const [changeEditWindow, setchangeEditWindow] = useState(false);
  const dispatch = useDispatch();
  const [valueTitle, setValueTitle] = useState("");
  const [valueRelease, setValueRelease] = useState("");
  const [valueUrl, setValueUrl] = useState("");
  const [valueOverview, setValueOverview] = useState("");
  const [valueRuntime, setValueRuntime] = useState("");
  const [valueGenres, setValueGenres] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    dispatch(movieSearch(value));
  };

  const onSubmitAdd = () => {
    setValueTitle("");
    const paramDispatch = {
      valueTitle,
      valueRelease,
      valueUrl,
      valueOverview,
      valueRuntime,
      valueGenres,
    };
    dispatch(addPost(paramDispatch));
  };

  function handleClickEdit(event) {
    if (
      event.target.className === "btn__add__modal-window" ||
      event.target.className === "btn__add__close-modal"
    ) {
      event.preventDefault();
      setchangeEditWindow(!changeEditWindow);
    } else if (event.target.className === "btn__add__on-submit") {
      onSubmitAdd();
    }
  }

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
      <button
        className="btn__add__modal-window"
        onClick={(event) => handleClickEdit(event)}
      >
        +ADD MOVIE
        {changeEditWindow ? (
          <AddPost
            valueTitle={valueTitle}
            setValueTitle={setValueTitle}
            valueRelease={valueRelease}
            setValueRelease={setValueRelease}
            valueUrl={valueUrl}
            setValueUrl={setValueUrl}
            valueOverview={valueOverview}
            setValueOverview={setValueOverview}
            valueRuntime={valueRuntime}
            setValueRuntime={setValueRuntime}
            onSubmit={onSubmit}
            valueGenres={valueGenres}
            setValueGenres={setValueGenres}
          />
        ) : null}{" "}
      </button>
    </>
  );
}
