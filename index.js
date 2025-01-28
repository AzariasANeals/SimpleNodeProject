// Importing the Express module
const express = require('express');

// Creating an instance of an Express application
const app = express();

// Define a route for the root URL that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port where the server will listen (3000 in this case)
const PORT = process.env.PORT || 3000;

// Start the server and log a message to the console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});