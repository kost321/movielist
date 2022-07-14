import React from "react";
import { useSelector } from "react-redux";

export const AddFilmList = () => {
  const posts = useSelector((state) => console.log(state));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {console.log(posts)}
      {posts && posts.map((post) => (
        <article className="post-excerpt">
          <h3>{post}</h3>
        </article>
      ))}
    </section>
  );
};
