import express, { type Request, type Response } from "express";
import UserRouter from "./routes/user.router.js";
import _ from "lodash"; // Works - types are now available
import connectDB from "./config/db.js";


connectDB();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use(express.json());
app.use("/api/users", UserRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
