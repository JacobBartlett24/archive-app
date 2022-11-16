const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'archive',
});

// Connect

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mysql connected');
});

const app = express();

app.listen('3002', () => {
  console.log('server started on port 3002');
});

// eslint-disable-next-line no-unused-vars
app.post('/api/insert', (req, res) => {
  const { src } = req.body;
  const bio = '';

  const query = 'INSERT INTO playlists (src,bio) VALUES (?,?)';
  db.query(query, [src, bio], ((err, result) => { console.log(result); console.log(err); }));
});
