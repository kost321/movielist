import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { FieldInput } from "./features/input/FieldInput";
import { AddTodoForm } from "./features/todolist/AddTodoForm";
import { AddFilmList } from "./film/movieList/components/movieList/MovieLsit";
import { Header } from "./film/movieList/components/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />
        <FieldInput />
        <AddTodoForm /> */}
        <Header />
        <AddFilmList />
      </header>
    </div>
  );
}

export default App;
