import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsFromServer,
  getPostsFromServerFilter,
  getPostsFromServerSort,
  getPostsFromServerSearch,
  getPostFromServerById,
} from "./GetMovieListAPI";

const initialState = {
  posts: [],
  loading: false,
  currentFilter: "",
  currentSort: "",
  currentCountMovie: 0,
  currentMovie: "",
  notFoundMovie: { value: "MOVIE NOT FOUND" },
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await getPostsFromServer();
  return posts;
});

export const movieFilter = createAsyncThunk(
  "posts/movieFilter",
  async (filter, { dispatch }) => {
    const posts = await getPostsFromServerFilter(filter);
    dispatch(setCurrentFilter(filter));
    return posts;
  }
);

export const movieSort = createAsyncThunk(
  "posts/movieSort",
  async (typeOrder, { dispatch, getState }) => {
    const currentState = getState();
    const currentFilter = currentState.movie.currentFilter;
    const sortMovie = await getPostsFromServerSort(typeOrder, currentFilter);
    dispatch(setSort(typeOrder));
    return sortMovie;
  }
);

export const movieSearch = createAsyncThunk(
  "posts/movieSearch",
  async (value) => {
    const searchMovie = await getPostsFromServerSearch(value);
    return searchMovie;
  }
);

export const currentMovie = createAsyncThunk(
  "posts/currentMovie",
  async (id) => {
    const searchMovie = await getPostFromServerById(id);
    return searchMovie;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    setSort: (state, action) => {
      state.currentSort = action.payload;
    },
    deleteMovie: (state, action) => {
      const index = state.posts.findIndex((item) => item.id === action.payload);
      console.log(index);
      state.posts.splice(index, 1);
    },
    notFoundMovie: (state, action) => {
      state.posts = initialState.notFoundMovie
      debugger
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
    [movieFilter.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [movieSort.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [movieSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [currentMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMovie = action.payload;
      state.currentCountMovie = action.payload.length;
    },
  },
});

export const {
  setCurrentFilter,
  setSort,
  movieNotFound,
  deleteMovie,
  notFoundMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
