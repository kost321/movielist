import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./movielist.css";
import { getPosts } from "../../redux/MovieListSlice";
import { Filters } from "../filters/Filters";

export const AddFilmList = () => {
  const { posts } = useSelector((state) => state.movie);
  const countMovies = useSelector((state) => state.movie.currentCountMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container__movie">
      <Filters />
      {countMovies}
      <div></div>
      <section className="container__movie-list">
        {posts.map((post) => (
    <article className="block__movie-list" key={post.id}>
      <div>{post.title}</div>
      <div className="img__icone"></div>
      <img className="movie_img" src={post.poster_path} alt="sd" />
      <div>{post.title}</div>
      <div>{post.genres.join(", ")}</div>
      <div>{post.release_date}</div>
    </article>
  ))}
  </section>
    </div>
  );
};
