import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fieldReducer from '../features/input/inputSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    input: fieldReducer,
  },
});
