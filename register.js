const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
  // Get user data from the request body
  const { username, email, password } = req.body;

  const existingUser = users.find(user => user.username === username || user.email === email);
  
  if (existingUser) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  const newUser = { username, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

const port = 9000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
