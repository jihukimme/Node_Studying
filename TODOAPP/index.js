//서버 오픈하는 문법
const express = require("express");
const app = express();

app.listen(8080, function () {
  //8080포트에 서버를 띄우겠다.

  console.log("listening on 8080");
});

//누군가가 /pet으로 방문을 하면
//pet관련된 안내문을 띄워주자
app.get("/pet", function (req, res) {
  res.send("펫용품 쇼핑할 수 있는 페이지입니다.");
});

//누군가가 /beauty로 방문을 하면
//뷰티관련된 안내문을 띄워주자
app.get("/beauty", function (req, res) {
  res.send("뷰티용품 쇼핑할 수 있는 페이지입니다.");
});

//누군가가 /로 방문을 하면
//메인페이지를 띄워주자(메인페이지는 index.html)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
