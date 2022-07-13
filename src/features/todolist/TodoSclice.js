import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddLetter } from "./AddLetterAPI";

const initialState = [];

export const addLetterAsync = createAsyncThunk(
  "todos/fetchAddLetter",
  async (id) => {
    const response = await fetchAddLetter();
    console.log("respons", response);
    return {
      letter: response,
      id: id,
    };
  }
);

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
      state.splice(index, 1);
    },
    changeTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.title = action.payload.title;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLetterAsync.pending, () => {
        console.log("load");
      })
      .addCase(addLetterAsync.fulfilled, (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload.id);
        todo.title += action.payload.letter;
      })
      .addCase(addLetterAsync.rejected, (error) => {
        console.log("error", error);
      });
  },
});

export const { addTodos, toogleCompleted, deleteTodo, changeTodo } =
  counterSlice.actions;

export default counterSlice.reducer;
