const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

const libraries   = require('./api/libraries.json');
const books       = require('./api/books.json');
const collections = require('./api/collections.json');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('init', function(){
    io.emit('libraries', libraries);
    io.emit('collections', collections);

    if(libraries.length > 4) libraries.pop();

    setTimeout(function(){
      libraries.push({
        "id": 5,
        "name": "Test"
      });
      io.emit('libraries', libraries);
    }, 5000);
  });

});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
