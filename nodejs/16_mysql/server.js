import express from 'express';
import db from './db.js';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// GET: Fetch all users
app.get('/users', async (req, res) => {
    console.log(db)
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Create a new user (using parameterized queries to prevent SQL injection)
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    
    try {
        const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.status(201).json({ id: result.insertId, name, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
