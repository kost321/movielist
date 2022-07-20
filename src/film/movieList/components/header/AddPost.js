import React from "react";
import "./header.css";

export const AddPost = ({
  valueTitle,
  setValueTitle,
  valueRelease,
  setValueRelease,
  valueUrl,
  setValueUrl,
  valueOverview,
  setValueOverview,
  valueRuntime,
  setValueRuntime,
  onSubmit,
  valueGenres,
  setValueGenres,
}) => {
  return (
    <div className="container__input">
      <div className="block__input">
        <button className="btn__add__close-modal">BACK</button>

        <div className="current-block__input">
          TITILE
          <input
            type="text"
            value={valueTitle}
            onChange={(event) => setValueTitle(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          RELEASE DATE
          <input
            type="text"
            value={valueRelease}
            onChange={(event) => setValueRelease(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          MOVIE URL
          <input
            type="text"
            value={valueUrl}
            onChange={(event) => setValueUrl(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          OVERVIEW
          <input
            type="text"
            value={valueOverview}
            onChange={(event) => setValueOverview(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          RUNTIME
          <input
            type="text"
            value={valueRuntime}
            onChange={(event) => setValueRuntime(event.target.value)}
          />
        </div>
        <div className="current-block__input">
          GENRES
          <input
            type="text"
            value={valueGenres}
            onChange={(event) => setValueGenres(event.target.value)}
          />
        </div>
        <button className="btn__add__on-submit" onSubmit={onSubmit}>
          SAVE
        </button>
      </div>
    </div>
  );
};
