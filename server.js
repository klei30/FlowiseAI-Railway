const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname)));

// Set up a route to redirect all requests for the root to the chatbot URL
app.get('/', (req, res) => {
  res.redirect('/chatbot/e9794f69-43bd-4598-b346-49bffb1f4aee');
});

// Start the server
app.listen(80, () => {
  console.log('Server is running on port 80');
});
