import { Fragment, useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const posts = useLoaderData();

  return (
    <Fragment>
      {posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      ) : (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default PostsList;
