import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./MovieListSlice";


export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
