import classes from "./App.module.scss";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <div className={classes.container}>
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
