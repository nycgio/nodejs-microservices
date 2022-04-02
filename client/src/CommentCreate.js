import axios from "axios";
import { useState } from "react";
import classes from "./App.module.scss";

function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://192.168.1.4:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={classes.formControl}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentCreate;
