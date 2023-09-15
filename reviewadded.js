const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const booksWithReviews = [
  { id: 1, title: 'Book 1', reviews: [] },
  { id: 2, title: 'Book 2', reviews: [] },
];

app.post('/reviews/:bookId', (req, res) => {
  const bookIdToReview = parseInt(req.params.bookId);
  const review = req.body.review;

  const book = booksWithReviews.find(book => book.id === bookIdToReview);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  book.reviews.push(review);

  res.status(201).json({ message: 'Review added/modified successfully', book });
});


const port = 1000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
