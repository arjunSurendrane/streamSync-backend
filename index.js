import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to streamSync api");
});

app.listen(3000, () => {
  console.log("connected to localhost: 3000");
});
