const express = require('express');
const app = express();
const bookRoutes = require('./Routes/bookRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//http://localhost:5000