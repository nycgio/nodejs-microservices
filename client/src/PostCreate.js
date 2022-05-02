import { useState } from "react";
import axios from "axios";
import classes from "./App.module.scss";

function PostCreate() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // send a post request to our post service
    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div className={classes.postCreate}>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(() => e.target.value)}
            className={classes.formControl}
            placeholder="Post Title"
          />
          <button type="submit" className={classes.buttonPrimary}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostCreate;
