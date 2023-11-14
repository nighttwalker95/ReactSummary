import { Fragment, useState } from "react";
import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <Fragment>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </Fragment>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
};
