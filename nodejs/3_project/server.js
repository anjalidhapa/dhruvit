// const http = require('http');
// import http from "http";
import { createServer } from "http";

const PORT = 3000;

const server = createServer((req, res) => {
  const data = {
    name: "Dhruvit",
    age: 22,
    city: "Ahmedabad",
  };
  console.log(typeof JSON.stringify(data));
  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});   