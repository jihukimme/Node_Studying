//express로 웹서버 구축하기
const express = require("express");
const app = express();

const server = app.listen(3001, () => {
  console.log("Start Server : localhost:3001");
});

app.get("/api/users/:type", (req, res) => {
  res.send("connect");
});
