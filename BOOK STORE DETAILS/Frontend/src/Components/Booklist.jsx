import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList({ onEdit, onDelete }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
    .then(response => {
      setBooks(response.data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
          <p>Description: {book.description}</p>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onDelete(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
