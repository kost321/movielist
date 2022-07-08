import React from "react";
import { useDispatch } from "react-redux";
import { toogleCompleted, deleteTodo } from "./TodoSclice";

export function  TodoItem ({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toogleCompleted({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div>
        <span>
          <input
            id="cbox"
            type="checkbox"
            checked={completed}
            onChange={handleCompleteClick}
          ></input> 
          {title}
        </span>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;