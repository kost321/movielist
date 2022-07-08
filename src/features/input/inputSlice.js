import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ''
};

export const counterSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    add: (state) => {
      state.value += '!';
    },
    clear: (state) => {
      state.value = '';
    },
    addSomeText: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { add, clear, addSomeText } = counterSlice.actions;

export const selectInput = (state) => state.input.value;

export default counterSlice.reducer;
