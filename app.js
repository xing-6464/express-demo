const express = require('express');

const app = express();

app.get('/', (req, res) => {});

app.listen(3000, () => {
  console.info('Run http://127.0.0.1:3000');
});
