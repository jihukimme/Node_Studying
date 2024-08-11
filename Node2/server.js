//웹 어플리케이션 서버를 만들어보자
//express 모듈을 사용해서 웹 서버를 만들어보자

//express 모듈을 사용하기 위해 require()함수를 사용해서 express 모듈을 불러온다.
const express = require("express");
const app = express();

// 서버 띄우기
const server = app.listen(3000, () => {
  console.log("Start Server : localhost:3000");
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// 라우팅
app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/about", (req, res) => {
  res.render("about.html");
});

app.get("/test", (req, res) => {
  res.send("test");
});

// db 연결하기
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

app.get("/db", (req, res) => {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query("SELECT * FROM test", function (error, results, fields) {
      res.send(results);
      console.log("results", results);
      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
});
