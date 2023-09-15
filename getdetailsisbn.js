const express = require('express');
const app = express();


const books = [
  { id: 1, title: 'Book 1', author: 'Author A' },
  { id: 2, title: 'Book 2', author: 'Author B' },
  { id: 3, title: 'Book 3', author: 'Author A' },
];


app.get('/books', (req, res) => {
  // Return the list of books as a JSON response
  res.json(books);
});


const port = 4000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
