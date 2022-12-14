/**
 * Server Configuration
 */
const SERVER_PORT = 1777;

/**
 * Set up Express
 */
const express = require('express');
const app = express();
app.listen(SERVER_PORT, () => {
  console.log('Server Started at http://localhost:' + SERVER_PORT);
});
/**
 * ROUTING
 */
const greetings = '<h1>Hello Express JS</h1>';

app.get('/hello', (req, res) => {
  res.send(greetings);
});

app.get('/user', (req, res) => {
  res.send(JSON.stringify(req.query));
});

app.post('/user/:fnm/:lnm', (req, res) => {
  const s = req.params;

  let first_name = s.fnm;
  let last_name = s.lnm;

  const userFirstAndLast = {
    first_name,
    last_name,
  };
  res.json(userFirstAndLast);
});
