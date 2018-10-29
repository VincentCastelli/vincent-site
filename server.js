const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use('/', express.static(path.join(__dirname, '/dist')));

const port = process.env.PORT || 5000;

app.listen(`${port}`, () => {
  console.log(`Listening on port ${port}`);
});
