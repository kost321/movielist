import React from "react";
import { useDispatch } from "react-redux";
import { toogleCompleted, deleteTodo, changeTodo } from "./TodoSclice";
import { useState } from "react";
import "./todolist.css"

export function  TodoItem ({ id, title, completed }) {
  const [value, setValue] = useState(title);

  const handleChangeClick = () => {
    dispatch(changeTodo({ title: title }))
  }

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toogleCompleted({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li>
      <div>
        <span >
          <input
            id="cbox"
            type="checkbox"
            checked={completed}
            onChange={handleCompleteClick}
          ></input> 
         <input defaultValue={title} onClick={handleChangeClick} className={`list-group-item ${completed && "list-group-item-success"}`}/>
        </span>
        <button onChange={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;