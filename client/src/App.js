import classes from "./App.module.scss";
import PostCreate from "./PostCreate";

function App() {
  return (
    <div className={classes.container}>
      <h1>Create Post</h1>
      <PostCreate />
    </div>
  );
}

export default App;
