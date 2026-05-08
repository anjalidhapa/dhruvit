import express from 'express'; // ES6 Module import
import dotenv from 'dotenv';
import ProductRouter from './routes/Product.router.js';
import connectDB from './config/ConnectDB.js';

dotenv.config();
const app = express();
app.use(express.json())
connectDB()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/product", ProductRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
