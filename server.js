const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the frontend/build directory
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
