const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let latestData = { weight: 0, timestamp: Date.now() };

// ESP32 will POST data to this endpoint
app.post('/api/data', (req, res) => {
  latestData = {
    weight: req.body.weight,
    timestamp: Date.now()
  };
  res.send({ status: 'success' });
});

// Flutter app will GET data from this endpoint
app.get('/api/data', (req, res) => {
  res.json(latestData);
});

app.listen(port, () => {
  console.log(`Server is running and continuously listening on port ${port}`);
});