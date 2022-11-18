const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router();
const app = express(); // Line 2
const port = process.env.PORT || 3002; // Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); // Line 6
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// create a GET route
router.get('/express_backend', (req, res) => { // Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); // Line 10
});

router.post('/insert', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.send({ express: 'asdasd' });
  console.log(req.body);
  res.end();
});

app.use('/', router);
