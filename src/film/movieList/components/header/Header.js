import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieSearch } from "../../redux/MovieListSlice";
import { AddPost } from "./AddPost/AddPost";
import { addPost } from "../../redux/MovieListSlice";
import { movieFilter } from "../../redux/MovieListSlice";
import searchIcone from "./media/search-interface-symbol.png";

import "./header.css";

export function Header() {
  const [value, setValue] = useState("");
  const [changeAddWindow, setChangeAddWindow] = useState(false);
  const [valueTitle, setValueTitle] = useState("");
  const [valueRelease, setValueRelease] = useState("");
  const [valueUrl, setValueUrl] = useState("");
  const [valueOverview, setValueOverview] = useState("");
  const [valueRuntime, setValueRuntime] = useState("");
  const [valueGenres, setValueGenres] = useState("");
  const dispatch = useDispatch();

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
      event.target.className === "btn__add-movie" ||
      event.target.className === "btn__add__close-modal" ||
      event.target.className === "container__input"
    ) {
      event.preventDefault();
      setChangeAddWindow(!changeAddWindow);
    } else if (event.target.className === "btn__add__on-submit") {
      onSubmitAdd();
    }
  }

  return (
    <>
      <nav className="header">
        <div onClick={() => dispatch(movieFilter(""))} className="header__logo">
          Netflix
        </div>
        <button
          className="btn__add-movie"
          onClick={(event) => handleClickEdit(event)}
        >
          + ADD MOVIE
          {changeAddWindow ? (
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
          ) : null}
        </button>
      </nav>
      <div className="container__search">
        <div className="title-text">
          Discover thousands of movies and series from all over the world.
        </div>
        <div className="block__search">
          <img className="search__icon" src={searchIcone} alt="search" />
          <input
            className="search__input"
            type="text"
            placeholder="What do you want to watch?"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button className="btn__search" onClick={onSubmit}>
            SEARCH
          </button>
        </div>
      </div>
    </>
  );
}
