const express = require('express');
const cors = require('cors');
const db = require('./db/database');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/vans', (req, res) => {
  db.all('SELECT * FROM vans', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.get('/api/vans/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM vans WHERE id = ?', [id], (err, row) => {
    res.json(row)
  })
})

app.post('/api/login', (req, res) => {
  const {email, password} = req.body
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
    if(!row) {
      return res.json('Email does not exist')
    }
    if(password != row.password) {
      res.json(`No Match`)
    } else {
      res.json(`Match`)
    }
  })
})

// app.get('/api/tasks', (req, res) => {
//   res.json('SUPPP')
// })


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});