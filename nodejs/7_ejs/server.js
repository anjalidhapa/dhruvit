import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();

app.set("view engine", "ejs"); // Sets EJS as the template engine
app.set("views", "views"); // Express will look for templates in the 'views' folder by default

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page", name: "dhruvit bhai" }); // Renders the 'index.ejs' file and passes data
});

app.get("/users/:name", (req, res) => {
  const { name } = req.params; // Extracts the 'name' parameter from the URL
  res.render("index", { title: "Home Page", name: name }); // Renders the 'index.ejs' file and passes data
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/json", (req, res) => {
  console.log(
    JSON.parse(
      fs.readFileSync(path.join(__dirname, "MOCK_DATA.json"), "utf-8"),
    ),
  );

  res.render("data", {
    data: JSON.parse(
      fs.readFileSync(path.join(__dirname, "MOCK_DATA.json"), "utf-8"),
    ),
  }); // Renders the 'index.ejs' file and passes data
});

app.listen(3000, () => {
  // console.log("file ", __filename);
  // console.log("dir ", __dirname);
  console.log("Server is running on http://localhost:3000");
});
