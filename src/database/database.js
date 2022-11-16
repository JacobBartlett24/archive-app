const express = require('express');

const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const cors = require('cors');

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

app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// eslint-disable-next-line no-unused-vars
app.post('/api/insert', (req, res) => {
  const { src } = req.body;
  const bio = '';

  const query = 'INSERT INTO playlists (src,bio) VALUES (?,?)';
  db.query(query, [src, bio], ((err, result) => {
    console.log(result);
    console.log(err);
  }));
});

app.listen('3001', () => {
  console.log('server started on port 3001');
});
