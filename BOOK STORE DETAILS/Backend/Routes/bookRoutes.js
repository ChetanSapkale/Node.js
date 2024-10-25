const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.addBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
