import express from "express";

const app = new express();

// / -> root or home page
app.get("/", (req, res) => {
  console.log("/ route");
  res.send("Hello ");
});

app.get("/contact", (req, res) => {
  res.send(`<h1 style="color: red;">This s contact page</h1>`);
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/about/me", (req, res) => {
  res.send("This is about me page");
});

app.get("/users", (req, res) => {
  res.send("This is users page");
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  //   console.log(typeof req.params.id);
  res.send(`This is user with id ${req.params.id}`);
});

app.get("/users/:id/:name", (req, res) => {
  console.log(req.params);
  res.send(`This is User ${req.params.id} ${req.params.name} page`);
});

app.get("/todos", (req, res) => {
  res.send(`all todos`);
});
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  res.send(`todo with id = ${id}`);
});

app.get("/post", (req, res) => {
  res.send(`This is post page`);
});

app.get("/post/:postId", (req, res) => {
  console.log(req.params);
  res.send(`This is post with id ${req.params.postId}`);
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
