const express = require('express');
const expressWs = require('express-ws');

const app = express();
expressWs(app); // Enable WebSocket support

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());

// WebSocket route
app.ws('/ws', (ws, req) => {
  console.log('WebSocket connection established');

  ws.on('message', (msg) => {
    console.log(`Received message: ${msg}`);
    // Handle incoming messages
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

// API Routes
app.use('/api', require('./routes/monitioring.route'));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
