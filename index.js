const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample in-memory user storage (replace with DB in production)
let users = [];

app.post("/api/signup", (req, res) => {
    const { email, password } = req.body;
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "User already exists" });
    }
    users.push({ email, password });
    res.json({ message: "Signup successful" });
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: "Login successful", email });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});