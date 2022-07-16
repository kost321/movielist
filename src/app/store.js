import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fieldReducer from '../features/input/inputSlice';
import todosReducer from '../features/todolist/TodoSclice'
import movieReducer from "../film/movieList/redux/MovieListSlice"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // input: fieldReducer,
    // todos: todosReducer,
    movie: movieReducer
  },
});
