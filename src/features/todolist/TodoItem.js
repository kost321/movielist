import React from "react";
import { useDispatch } from "react-redux";
import {
  toogleCompleted,
  deleteTodo,
  changeTodo,
  addLetterAsync,
} from "./TodoSclice";
import { useState } from "react";
import "./todolist.css";
import { useEffect, useRef } from "react";

export function TodoItem({ id, title, completed }) {
  const [editDiv, setEditDiv] = useState(true);

  const ref = useRef();
  const refBtn = useRef();

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toogleCompleted({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleClickOutside = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      !refBtn.current.contains(e.target)
    ) {
      setEditDiv(true);
      e.preventDefault();
    }
  };

  const handleClickInside = () => setEditDiv(false);

  const clickBtnAsync = (e) => {
    e.preventDefault();
    dispatch(addLetterAsync(id));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  let inputChange;
  if (editDiv) {
    inputChange = (
      <>
        <div
          onClick={handleClickInside}
          className={`list-group-item ${
            completed && "list-group-item-success"
          }`}
        >
          {title}
        </div>
      </>
    );
  } else {
    inputChange = (
      <>
        <input
          ref={ref}
          onChange={(e) =>
            dispatch(changeTodo({ title: e.target.value, id: id }))
          }
          value={title}
          className={`list-group-item ${
            completed && "list-group-item-success"
          }`}
        />
        <button ref={refBtn} className="btnAsync" onClick={clickBtnAsync}>
          Add Async
        </button>
      </>
    );
  }

  return (
    <li>
      <div>
        <span>
          <input
            id="cbox"
            type="checkbox"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          <form>{inputChange}</form>
        </span>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
