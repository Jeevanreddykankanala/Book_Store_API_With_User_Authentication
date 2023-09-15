const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const booksWithReviews = [
  { id: 1, title: 'Book 1', reviews: [{id: 1,text: 'good'}] },
  { id: 2, title: 'Book 2', reviews: [] },
];


app.delete('/reviews/:bookId/:reviewId', (req, res) => {
  const bookIdToDeleteReviewFrom = parseInt(req.params.bookId);
  const reviewIdToDelete = parseInt(req.params.reviewId);

  
  const book = booksWithReviews.find(book => book.id === bookIdToDeleteReviewFrom);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const reviewIndexToDelete = book.reviews.findIndex(review => review.id === reviewIdToDelete);

  if (reviewIndexToDelete === -1) {
    return res.status(404).json({ error: 'Review not found' });
  }

  book.reviews.splice(reviewIndexToDelete, 1);

  res.json({ message: 'Review deleted successfully', book });
});

const port = 14000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
