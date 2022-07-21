import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentMovie } from "../../../redux/MovieListSlice";
import { ModalWindow } from "../ModalWindow/ModalWindow";


export const Movie = ({ id, title, img, genres, date }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalWindow, setModalWindow] = useState(false);

  function handleClick(event, key) {
    dispatch(currentMovie(key));
    navigate("/movieInfo");
  }

  function changeStateModalWindow() {
    setModalWindow(!modalWindow);
  }

  return (
    <div>
      <article className="block__movie-list" key={id}>
        <div>{title}</div>
        <div className="img__icone"></div>
        <div>
          <img
            onClick={(event) => handleClick(event, id)}
            key={id}
            className="movie_img"
            src={img}
            alt="sd"
          />
          <div onClick={(event) => changeStateModalWindow(event, id)}>
            modalWindow
          </div>
          {modalWindow ? <ModalWindow id={id} /> : null}
        </div>
        <div>{title}</div>
        <div>{genres.join(", ")}</div>
        <div>{date}</div>
      </article>
    </div>
  );
};
