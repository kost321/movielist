import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPostsFromServer,
  getPostsFromServerFilter,
  getPostsFromServerSort,
  getPostsFromServerSearch,
  getPostFromServerById,
  deletePostsFromServer,
  editPostFromServer,
} from "./GetMovieListAPI";

const initialState = {
  posts: [],
  loading: true,
  currentFilter: "",
  currentSort: "",
  currentCountMovie: 0,
  currentMovie: "",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await getPostsFromServer();
  return posts;
});

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch, getState }) => {
    await deletePostsFromServer(id);
    const currentState = getState();
    const currentFilter = currentState.movie.currentFilter;
    console.log("state", currentFilter);
    if (currentFilter === "") {
      dispatch(getPosts());
    } else {
      dispatch(movieFilter(currentFilter));
    }
    return id;
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (paramDispatch) => {
    const searchMovie = await editPostFromServer(paramDispatch);
    return searchMovie;
  }
);

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
    [movieFilter.pending]: (state) => {
      state.loading = true;
    },
    [movieFilter.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [movieSort.pending]: (state) => {
      state.loading = true;
    },
    [movieSort.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [movieSearch.pending]: (state) => {
      state.loading = true;
    },
    [movieSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [currentMovie.pending]: (state) => {
      state.loading = true;
    },
    [currentMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentMovie = action.payload;
      state.currentCountMovie = action.payload.length;
    },
    [deletePost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex((item) => item.id === action.payload);
      state.posts.splice(index, 1);
      state.currentCountMovie = action.payload.length;
    },
    [editPost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.posts[index] = action.payload;
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
