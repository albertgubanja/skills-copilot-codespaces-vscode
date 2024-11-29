// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  // Send a response
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});