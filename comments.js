// Create web server
// 1. Import express
const express = require('express');
// 2. Create express app
const app = express();
// 3. Add a route
app.get('/comments', (req, res) => {
  res.send('This is a GET request');
});
// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});