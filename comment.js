// Create web server and listen to port 3000
// Create a web server and listen to port 3000
const express = require('express');
const app = express();
const port = 3000;

// Set up the route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen to port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
