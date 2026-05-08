// Import the built-in http module
const http = require("http");
// import http from "http";

// Define where the server will listen
const port = 3000;

// Create the server with a request listener function
const server = http.createServer((req, res) => {
  // Send the response body and close the connection
  res.end("Hello, World!");
});

// Start listening for connections
server.listen(port, () => {
  console.log(server);
  console.log(`Server running at http://localhost:${port}/`);
});

// http
//   .createServer((req, res) => {
//     res.write("server is running");
//     res.end();
//   })
//   .listen(5000, () => {
//     console.log("server is running at 5000");
//   });
