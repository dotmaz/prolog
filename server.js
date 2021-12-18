const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static('public'));
const port = 3030;



app.listen(port, function() {
  console.log(`Listening on port ${port}.`)
});