import React from "react";
import { useDispatch } from "react-redux";
import { toogleCompleted, deleteTodo, changeTodo } from "./TodoSclice";
import { useState } from "react";
import "./todolist.css";
import { useEffect, useRef } from "react";

export function TodoItem({ id, title, completed }) {
  const [changeState, setChangeState] = useState(title)
  const [showMe, setShowMe] = useState(true);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toogleCompleted({ id: id, completed: !completed }));
  };


  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const ref = useRef();


  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      setShowMe(true);
      dispatch(changeTodo({changeState,id: id}))
    }
  };
  console.log("changestate",changeState)

  const handleClickInside = () => setShowMe(false);

 useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); 
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },[]);
  

  let inputChange;
 
  if (showMe) {
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
        onChange={(event) => setChangeState(event.target.value)}
        value={changeState}
        className={`list-group-item ${completed && "list-group-item-success"}`}
      />
    );
  }
  console.log("showme", showMe);

 
  console.log("changestate",changeState)
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
