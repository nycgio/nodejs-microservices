import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./App.module.scss";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://192.168.1.4:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className={classes.card}>
        <div className={classes.body}>{post.title}</div>
      </div>
    );
  });
  return <div className={classes.cardContainer}>{renderedPosts}</div>;
}

export default PostList;
