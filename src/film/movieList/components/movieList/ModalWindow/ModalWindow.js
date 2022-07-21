import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../../redux/MovieListSlice";
import { deletePost } from "../../../redux/MovieListSlice";
import { EditWindow } from "./EditWindow";

import "./editWindow.css";


export const ModalWindow = ({ id }) => {
  const [changeEditWindow, setchangeEditWindow] = useState(false);
  const dispatch = useDispatch();
  const [valueTitle, setValueTitle] = useState("");
  const [valueRelease, setValueRelease] = useState("");
  const [valueUrl, setValueUrl] = useState("");
  const [valueOverview, setValueOverview] = useState("");
  const [valueRuntime, seValueRuntime] = useState("");
  const [valueGenres, seValueGenres] = useState("");

  function handleClickDelete(event, key) {
    dispatch(deletePost(key));
  }
  const onSubmit = () => {
    setValueTitle("");
    const paramDispatch = {
      valueTitle,
      valueRelease,
      valueUrl,
      valueOverview,
      valueRuntime,
      id,
      valueGenres,
    };
    dispatch(editPost(paramDispatch));
  };

  function handleClickEdit(event, key) {
    if (
      event.target.className === "btn__modal-window" ||
      event.target.className === "btn__close-modal"
    ) {
      event.preventDefault();
      setchangeEditWindow(!changeEditWindow);
    } else if (event.target.className === "btn__on-submit") {
      onSubmit();
    }
  }

  return (
    <div>
      <button
        className="btn__modal-window"
        onClick={(event) => handleClickEdit(event, id)}
      >
        EDIT
        {changeEditWindow ? (
          <EditWindow
            id={id}
            valueTitle={valueTitle}
            setValueTitle={setValueTitle}
            valueRelease={valueRelease}
            setValueRelease={setValueRelease}
            valueUrl={valueUrl}
            setValueUrl={setValueUrl}
            valueOverview={valueOverview}
            setValueOverview={setValueOverview}
            valueRuntime={valueRuntime}
            seValueRuntime={seValueRuntime}
            onSubmit={onSubmit}
            valueGenres={valueGenres}
            seValueGenres={seValueGenres}
          />
        ) : null}{" "}
      </button>
      <button onClick={(event) => handleClickDelete(event, id)}>DELETE</button>
    </div>
  );
};
