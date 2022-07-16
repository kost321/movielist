import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPostsFromServer,getPostsFromServerFilter, getPostsFromServerSort } from "./GetMovieListAPI";



const initialState = {
  posts: [],
  loading: false,
  currentFilter: "",
  currentSort: "",
  currentCountMovie: 0 
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await getPostsFromServer();
  return posts;
});

export const movieFilter = createAsyncThunk("posts/movieFilter", async (filter,{dispatch}) => {
  const posts = await getPostsFromServerFilter(filter);
  dispatch(setCurrentFilter(filter));
  return posts;
});

export const movieSort= createAsyncThunk("posts/movieFilter", async (typeOrder, {dispatch, getState}) => {
  const currentState = getState();
  const currentFilter = currentState.movie.currentFilter;
  const sortMovie = await getPostsFromServerSort(typeOrder, currentFilter);
  dispatch(setSort(typeOrder));
  return sortMovie;
});

export const movieSearch= createAsyncThunk("posts/movieFilter", async (typeOrder, {dispatch, getState}) => {
  const currentState = getState();
  const currentFilter = currentState.movie.currentFilter;
  const sortMovie = await getPostsFromServerSort(typeOrder, currentFilter);
  dispatch(setSort(typeOrder));
  return sortMovie;
});





export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload
    },
    setSort: (state,action) => {
      state.currentSort = action.payload
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [movieFilter.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length
    },
    [movieSort.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length
    },
  },
});

export const { setCurrentFilter,setSort} = movieSlice.actions;

export default movieSlice.reducer;
