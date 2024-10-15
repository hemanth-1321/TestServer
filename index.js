import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello from express");
});
app.get("/check", (req, res) => {
  res.send("hello from check");
});
app.listen(1000, () => {
  console.log("server up ===>1000");
});
