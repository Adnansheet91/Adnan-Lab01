const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>
    <h1><a href="https://adnan-lab01.herokuapp.com/adnan">Name Endpoint</a></h1>`);
});
app.get("/adnan", (req, res) => {
  res.send(`<h1>My Name is Adnan. And it's Lab 01.</h1>`);
});

app.listen(process.env.PORT || 8080);
