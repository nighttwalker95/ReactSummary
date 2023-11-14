import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="author">Your Name</label>
          <input type="text" id="author" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="..">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("..");
};
