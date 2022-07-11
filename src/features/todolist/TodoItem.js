import React from "react";
import { useDispatch } from "react-redux";
import { toogleCompleted, deleteTodo, changeTodo } from "./TodoSclice";
import { useState } from "react";
import "./todolist.css";
import { useEffect, useRef } from "react";

export function TodoItem({ id, title, completed }) {
  const [changeState, setChangeState] = useState(title);
  const [edditDiv, setEdditDiv] = useState(true);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toogleCompleted({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setEdditDiv(true);
      e.preventDefault();
      dispatch(changeTodo({ title: changeState, id: id }));
    }
  };

  const handleClickInside = () => setEdditDiv(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  let inputChange;
  if (edditDiv) {
    inputChange = (
      <div
        onClick={handleClickInside}
        className={`list-group-item ${completed && "list-group-item-success"}`}
      >
        {changeState}
      </div>
    );
  } else {
    inputChange = (
      <input
        ref={ref}
        onChange={(e) => setChangeState(e.target.value)}
        value={changeState}
        className={`list-group-item ${completed && "list-group-item-success"}`}
      />
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
