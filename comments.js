// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for '/comments' that sends a JSON object as a response
app.get('/comments', (req, res) => {
  res.json({ comments: [{ username: 'Todd', comment: 'lolol' }] });
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// Run the server by executing the following command:
// node comments.js
// Now you can visit http://localhost:3000/comments to see the JSON object in the browser.
