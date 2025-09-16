const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Optional: Trust proxy if behind one
// app.set('trust proxy', true);

app.post('/api/data', (req, res) => {
  // Extract IP address
  const ip =
    req.headers['x-forwarded-for'] ||  // If behind a proxy
    req.connection.remoteAddress ||    // Legacy method
    req.socket.remoteAddress ||        // Most common
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  console.log('📥 Received JSON from ESP32:');
  console.log('🌐 IP Address:', ip);
  console.log('📦 Data:', req.body);

  res.json({ message: '✅ JSON and IP received successfully!' });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
