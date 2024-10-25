import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookForm({ selectedBook, onFormSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    isbn: ''
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/books', formData)
      .then(response => {
        console.log('Book added:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedBook ? 'Edit Book' : 'Add Book'}</h2>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
      <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" required />
      <button type="submit">{selectedBook ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default BookForm;
