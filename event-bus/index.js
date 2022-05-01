const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  // post service
  axios.post("http://posts-cluster-srv:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  // comments service
  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  // query service
  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  // moderation service
  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("listening on 4005");
});
