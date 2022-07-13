import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { FieldInput } from "./features/input/FieldInput";
import { AddTodoForm } from "./features/todolist/AddTodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <FieldInput />
        <AddTodoForm />
      </header>
    </div>
  );
}

export default App;
