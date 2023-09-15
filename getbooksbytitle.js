const express = require('express');
const app = express();


const books = [
  { id: 1, title: 'Book 1', author: 'Author A' },
  { id: 2, title: 'Book2', author: 'Author B' },
  { id: 3, title: 'Book 3', author: 'Author A' },
];


app.get('/books/title/:title', (req, res) => {
  const titleToFind = req.params.title;

  // Filter books by the specified title
  const booksWithTitle = books.filter(book => book.title.includes(titleToFind));

  if (booksWithTitle.length === 0) {
    return res.status(404).json({ error: 'No books found with this title' });
  }

 
  res.json(booksWithTitle);
});

// Start the Express server
const port = 5000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
