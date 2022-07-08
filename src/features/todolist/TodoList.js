import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <ul >
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
}

export default TodoList;