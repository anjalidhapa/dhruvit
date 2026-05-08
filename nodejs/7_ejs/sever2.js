// const express = require("express");
import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let todos = ["Study", "Coding"];

app.get("/", (req, res) => {
  console.log("get /");
  res.render("index1", { todos });
});
app.post("/add", (req, res) => {
  console.log("post /add");

  // let task = req.body.task;
  const { task } = req.body;
  console.log(task);
  todos.push(task);
  res.json(todos);
});

// app.post("/add", (req, res) => {
//   const task = req.body.task;
//   if (task.trim() !== "") {
//     todos.push(task);
//   }
//   res.redirect("/");
// });

app.post("/delete", (req, res) => {
  const id = req.params.id;
  todos.splice(id);
  res.redirect("/");
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});