import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPosts,
  currentMovie,
  deleteMovie,
} from "../../redux/MovieListSlice";
import { Filters } from "../filters/Filters";
import { useNavigate } from "react-router-dom";
import {NotFound} from "./notFound/NotFound"

import "./movielist.css";

export const HomePage = () => {
  const { posts } = useSelector((state) => state.movie);
  const countMovies = useSelector((state) => state.movie.currentCountMovie);
  console.log(posts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  function handleClick(key) {
    console.log("key", key);
    dispatch(currentMovie(key));
    navigate("/movieInfo");
  }

  function handleClickDelete(event, key) {
    console.log("key", key);
    dispatch(deleteMovie(key));
  }

  
    return (
      <div className="container__movie">
        <Filters />
        {countMovies}
        <div></div>
        <section className="container__movie-list">
          {posts.map((post, key) => (
            <article className="block__movie-list" key={post.id}>
              <div>{post.title}</div>
              <div className="img__icone"></div>
              <div>
                <img
                  onClick={(event) => handleClick(event, post.id)}
                  key={key}
                  className="movie_img"
                  src={post.poster_path}
                  alt="sd"
                />
                <button onClick={(event) => handleClickDelete(event, post.id)}>
                  BACK
                </button>
              </div>

              <div>{post.title}</div>
              <div>{post.genres.join(", ")}</div>
              <div>{post.release_date}</div>
            </article>
          ))}
        </section>
      </div>
    );
};
