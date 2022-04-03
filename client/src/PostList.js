import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./App.module.scss";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className={classes.card}>
        <p className={classes.heading}>{post.title}</p>
        <div className={classes.body}>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return <div className={classes.cardContainer}>{renderedPosts}</div>;
}

export default PostList;
