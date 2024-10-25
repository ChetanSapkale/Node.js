import React from 'react';

function BookDetails({ book }) {
  if (!book) return <div>Select a book to see details</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
    </div>
  );
}

export default BookDetails;
