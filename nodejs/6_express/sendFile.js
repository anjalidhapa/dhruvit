import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = new express();

// create __filename and __dirname
console.log("asdf", fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  console.log(__dirname);
  console.log(__filename);
  console.log("/ route");
  //   res.send("Hello");
  //   res.sendFile("./static/index.html"); // error -> file path must be absolute
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/json", (req, res) => {
  //   res.send(
  //     JSON.stringify({
  //       name: "hadi",
  //       class: "cosmos",
  //     }),
  //   );
  //   res.send(path.join(__dirname, "static", "MOCK_DATA.json"));
  res.sendFile(path.join(__dirname, "static", "MOCK_DATA.json"));
});
app.get("/json/:id", (req, res) => {
  const id = Number(req.params.id);

  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "static", "MOCK_DATA.json"), "utf-8"),
  );
  const result = data.find((item) => item.id === id);
  res.json(result);
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
