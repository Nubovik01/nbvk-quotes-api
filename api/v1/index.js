const express = require("express");
const bodyParser = require('body-parser');
let quotes = require('../quotes.json');

const app = express();
app.use(bodyParser.json());

app.get("/v1", async function (req, res) {
  return res.send(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.listen(process.env.PORT || 21791, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});