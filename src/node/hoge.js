const express = require('express');
const app = express();
const port = 5914;

app.get('/', (req, res) => {
  res.send('こんにちは、りんたです');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
