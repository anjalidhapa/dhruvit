// const express = require("express");
import express from "express";
import {
  updateTodo,
  clearAll,
  createTodo,
} from "./controller/Todo.controller.js";
const app = express();

app.use(express.json()); // middleware

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/todo/create", createTodo); // create
app.get("/api/todo/clear-all", clearAll); // create
app.put("/api/todo/update/:id", updateTodo);
// app.put("/api/todo/update", createTodo); // update
// app.get("/api/todo/list", createTodo); // list

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
