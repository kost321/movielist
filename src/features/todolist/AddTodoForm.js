import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodos } from "./TodoSclice";

export function AddTodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    dispatch(
      addTodos({
        title: value,
      })
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <TodoList />
    </>
  );
}

export default AddTodoForm;
