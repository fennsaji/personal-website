const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, './public');

// Port Number
const port = process.env.PORT || 8080;

var app = express();

//Sending all files in public
app.use(express.static(publicPath));

// Middleware for interprocess communication
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port, ()=> {
  console.log(`Connected to port ${port}`);
});