const express = require('express');
const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const app = express();
app.get('/', async (req, res) => {
  try {
    const back = await readFile('./db.json', 'utf-8');
    res.send(back);
  } catch (e) {
    res.status(500).json({ e });
  }
});

app.listen(3000, () => {
  console.info('Run http://127.0.0.1:3000');
});
