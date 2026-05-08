import 'dotenv/config'

import express from "express";
import ProductRouter from "./routers/ProductRouter.js";
import UserRouter from "./routers/user.router.js";
import { checkAllUsers } from "./middleware/check.middleware.js";
import appMiddleware from "./middleware/app.middleware.js";
import { connectToDatabase } from "./config/db.js";

const app = express();
connectToDatabase().catch((error) => {
  console.error("Failed to connect to the database:", error);
  process.exit(1); // Exit the application if the database connection fails
});

app.use(express.json()); // Middleware to parse JSON bodies
app.use(appMiddleware); // Use the app level middleware

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send('hadi !'); // Send a generic error response
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/products", ProductRouter);
app.use("/api/users", checkAllUsers, UserRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// curl -X POST http://localhost:3000/products/create
// curl http://localhost:3000/products/list
// curl -X PUT http://localhost:3000/products/update/1
// curl -X DELETE http://localhost:3000/products/delete/1
