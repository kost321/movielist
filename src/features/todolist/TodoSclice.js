import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toogleCompleted: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
    const index = state.findIndex((todo) => todo.id === action.payload.id);
    state.splice(index,1);
    },
    changeTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    }
  },
});

export const { addTodos, toogleCompleted, deleteTodo, changeTodo } = counterSlice.actions;

export default counterSlice.reducer;