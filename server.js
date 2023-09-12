const express = require('express');
const app = express();

// Redirect all traffic to the chatbot URL
app.get('*', (req, res) => {
  res.redirect('https://flowiseai-railway-production-7b22.up.railway.app/chatbot/e9794f69-43bd-4598-b346-49bffb1f4aee');
});

app.listen(80, () => {
  console.log('Server is running on port 80');
});
