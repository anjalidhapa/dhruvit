import express from 'express'; // ES6 Module import
import dotenv from 'dotenv';
import connectDB from './config/ConnectDB.js';
import UserRouter from './routes/user.router.js'
import authMiddleware from './middleware/auth.middleware.js';
import PostRouter from './routes/post.router.js';

dotenv.config();
const app = express();
app.use(express.json())

connectDB()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/user", UserRouter)
app.use("/api/post", PostRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
