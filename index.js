import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.listen(1000, () => {
  console.log("server up ===>1000");
});
