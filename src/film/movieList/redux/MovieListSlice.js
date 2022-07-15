import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFromServer,getPostsFromServerFilter } from "./GetMovieListAPI";

const initialState = {
  posts: [],
  loading: false,
  currentFilter: "",
  currentSort: "asc"
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await getPostsFromServer();
  return posts;
});

export const movieFilter = createAsyncThunk("posts/movieFilter", async (filter,{dispatch}) => {
  // создать новую синхр функцию , вызвать в ней состояние текущего стейта и передать в параметры для функции 
  const posts = await getPostsFromServerFilter(filter);
  posts.sort(x => x.date);
  dispatch(setCurrentFilter(filter));
  return posts;
});


export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [movieFilter.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
  },
});

export const { setCurrentFilter} = movieSlice.actions;

export default movieSlice.reducer;
