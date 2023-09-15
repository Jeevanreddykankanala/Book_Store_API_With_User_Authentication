const express = require('express');
const app = express();

const booksWithReviews = [
  { id: 1, title: 'Book 1', reviews: ['Review 1 Good', 'Review 2 Average'] },
  { id: 2, title: 'Book 2', reviews: ['Review 3 Ok', 'Review 4 Best'] },
  { id: 3, title: 'Book 3', reviews: ['Review 5 Average'] },
];


app.get('/reviews/:bookId', (req, res) => {
  const bookIdToFind = parseInt(req.params.bookId);

  const book = booksWithReviews.find(book => book.id === bookIdToFind);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json({ bookId: book.id, title: book.title, reviews: book.reviews });
});

// Start the Express server
const port = 2000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
