const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data)=>{
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);

    comment.status = status;
    comment.content = content;
  }

  res.send({});
}

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/events", (req, res) => {
  const {type, data} = req.body;
  handleEvent(type, data);
  res.json({});
});


app.listen(4002, () => {
  console.log(`listening on 4002`);
  const res = await axios.get("http://event-bus-srv:4005/events");

  for(let event in res.data){
    console.log(`Processing event: ${event.type}`)
    handleEvent(event.type, event.data);
  }
});
