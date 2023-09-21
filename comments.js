// create web server

const express = require('express');
const app = express();
const port = 3000;

// Array to store comments
const comments = [];

// Middleware to parse request body
app.use(express.json());

// Route to handle new comments
app.post('/comments', (req, res) => {
  const { name, message } = req.body;
  
  // Add the comment to the comments array
  comments.push({ name, message });
  
  // Send a success response
  res.status(201).json({ message: 'Comment added successfully!' });
});

// Route to get all comments
app.get('/comments', (_req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});