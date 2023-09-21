// Create a web server
import express from 'express';
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});