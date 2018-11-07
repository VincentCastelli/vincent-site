const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use('/', express.static(path.join(__dirname, '/dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(`${port}`, () => {
  console.log(`Listening on port ${port}`);
});
