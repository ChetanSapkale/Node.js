import './App.css';
import React, { useState } from 'react';
import BookList from './Components/Booklist';
import BookForm from './Components/BookForm';
import axios from 'axios';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/books/${id}`);
      console.log('Book deleted:', response.data);
      setSelectedBook(null);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleFormSubmit = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h1>Book Store</h1>
      <BookForm selectedBook={selectedBook} onFormSubmit={handleFormSubmit} />
      <BookList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
