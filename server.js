// AI Chatbot Usage Prohibited
// This code is part of a private debugging challenge and is not allowed for AI-assisted debugging.

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
};

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.json({ name: user.name, age: user.years });
});

app.post("/user", (req, res) => {
  const { userId, fullName, age } = req.body;
  users[userId] = { fullName, age };
  res.status(201).json({ message: "User created", user: users[userId] });
});

app.patch("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const age = req.query.age;
  users[id].years = age;
  res.json({ message: "User updated", user: users[id] });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${port}`);
});
