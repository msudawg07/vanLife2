const express = require('express');
const cors = require('cors');
const db = require('./db/database');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  db.all('SELECT * FROM vans', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// app.get('/api/tasks', (req, res) => {
//   res.json('SUPPP')
// })


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});