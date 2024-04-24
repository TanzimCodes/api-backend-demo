const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Hi!'+ `I'm rolling update`);
  console.log("Welcome to our API")
});

app.get('/crash', (req, res) => {
  console.log("Mayday Mayday, going down");
  process.exit(1);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
