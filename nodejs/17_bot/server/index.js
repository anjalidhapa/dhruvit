import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

dotenv.config();

// console.log("API KEY:", process.env.GROQ_API_KEY);
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

// 🔥 Use OpenAI (modern replacement of api.ai)
async function getAIResponse(text) {
    try {
        const res = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.3-70b-versatile", // 🔥 fast + free
                messages: [{ role: "user", content: text }]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );
        // console.log(res.data, res.data.choices[0].message);

        return res.data.choices[0].message.content;

    } catch (err) {
        console.error("GROQ ERROR:", err.response?.data || err.message);
        throw err;
    }
}

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("chat message", async (msg) => {
        try {
            const reply = await getAIResponse(msg);
            socket.emit("bot reply", reply);
        } catch (err) {
            console.error(err);
            socket.emit("bot reply", "Error getting response");
        }
    });
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});