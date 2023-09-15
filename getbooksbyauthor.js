const express = require('express');
const app = express();

const books = [
  { id: 1, title: 'Book 1', author: 'Author A' },
  { id: 2, title: 'Book 2', author: 'Author B' },
  { id: 3, title: 'Book 3', author: 'Author A' },
];


app.get('/books/author/:authorName', (req, res) => {
  const authorToFind = req.params.authorName;

  const booksByAuthor = books.filter(book => book.author === authorToFind);

  if (booksByAuthor.length === 0) {
    return res.status(404).json({ error: 'No books found by this author' });
  }
 
  res.json(booksByAuthor);
});

const port = 8000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
