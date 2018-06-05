var express = require('express');
var app = express();

app.use(express.static('dist'));

app.listen(3000);

console.log('Listening to server localhost:3000');