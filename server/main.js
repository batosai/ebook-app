const express = require('express');
const app     = express();
const http    = require('http').Server(app);

require('./modules/connect')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

http.listen(3001, function(){
  console.log('listening on *:3001');
});
