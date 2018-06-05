var express = require('express');
var app = express();

//app.all('/api/*', requireAuthentication);

app.use(express.static('dist'));

app.get('/api/health', function(req, res){
    res.send('I\'m healthy');
});

app.listen(3000);

console.log('Listening to server localhost:3000');