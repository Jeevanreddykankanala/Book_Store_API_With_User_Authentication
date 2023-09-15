const express = require('express');
const app = express();


const books = [
  { id: 1, title: 'Book1', author: 'Author A', isbn: '1234567890' },
  { id: 2, title: 'Book 2', author: 'Author B', isbn: '9876543210' },
  { id: 3, title: 'Book 3', author: 'Author A', isbn: '5432109876' },
];

app.get('/books/:isbn', (req, res) => {
  const isbnToFind = req.params.isbn;
  
  const book = books.find(book => book.isbn === isbnToFind);
  
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

const port = 4000; // 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
