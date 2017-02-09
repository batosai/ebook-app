const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

const libraries   = require('./api/libraries.json');
const books       = require('./api/books.json');
const collections = require('./api/collections.json');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('init', function(){
    socket.emit('libraries', libraries);
    socket.emit('collections', collections);
    console.log('init');
    // if(libraries.length > 4) libraries.pop();

    // setTimeout(function(){
    //   libraries.push({
    //     "id": 5,
    //     "name": "Test"
    //   });
    //   io.emit('libraries', libraries);
    // }, 5000);
  });

  socket.on('books', function(collection_id){
    console.log('books');
    if(collection_id !== undefined) {
      const b = books.filter(book => book.collection_id === collection_id);
      socket.emit('books', b);
    }
    else {
      socket.emit('books', book);
    }
  });

  socket.on('book:delete', function(book_id){
    console.log('book:delete');
    if(book_id !== undefined) {
      const index = books.findIndex(book => book.id === book_id);

      if(index > -1) {
          books.splice(index, 1);
          socket.emit('books', books);
      }
    }
  });

});

app.use(express.static('public'));

http.listen(3001, function(){
  console.log('listening on *:3001');
});
