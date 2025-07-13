
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Mock user for demo
const users = [
  { email: "jyoung8377@gmail.com", password: "admin123", role: "admin" }
];

app.use(bodyParser.json());
app.use(express.static('src'));

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if(user) {
    res.json({ success: true, redirect: user.role === "admin" ? "/admin.html" : "/dashboard.html" });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
