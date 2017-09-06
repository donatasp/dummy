const express = require('express');
const app = express();
const path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Oberlo theme listening on port ${port}!`);
});
