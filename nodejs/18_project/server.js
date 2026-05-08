import express from 'express'; // ES6 Module import
import dotenv from 'dotenv';
import connectDB from './config/ConnectDB.js';
import UserRouter from './routes/user.router.js';
import authMiddleware from './middleware/auth.middleware.js';
import HackathonRouter from './routes/hackathon.router.js';
import upload from './middleware/upload.js';

dotenv.config();
const app = express();
connectDB()

app.use(express.json())
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/user", UserRouter)
app.use("/api/hackathon", upload.single(), HackathonRouter)
// hackathon routes ...


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// user -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJkaHJ1dml0MTIzQGdtYWlsLmNvbSIsInVzZXJSb2xlIjoidXNlciIsImlhdCI6MTc3NzcyNzc1MH0.6B89WKn6Ib7K8l70TKa9S48glFJsNF92R26GjsV0smA
// admin -> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluIiwiaWF0IjoxNzc3NzI4MzM5fQ.zp0bWcglIHOtMASvYItuWON5UsXZ0-FEaVQ4k0agbQQ
// organizer -> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJvcmdhbml6ZXJAZ21haWwuY29tIiwidXNlclJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NzcyODU2MH0.ulV3oYP1HdHWsB33Cu4m_HW0zrxWIbdzSgHhaASOpDY