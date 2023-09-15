const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
  { username: 'jeevan', password: 'jeevan36123' },
  { username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

 
  if (user.password !== password) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

 
  res.json({ message: 'Login successful', user: { username: user.username } });
});

const port = 9000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
