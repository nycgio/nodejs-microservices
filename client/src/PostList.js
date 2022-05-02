import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./App.module.scss";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className={classes.card}>
        <p className={classes.heading}>{post.title}</p>
        <div className={classes.body}>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return <div className={classes.cardContainer}>{renderedPosts}</div>;
}

export default PostList;
