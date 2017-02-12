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

  socket.on("action", function (action) {
    console.log(action.type);
    let b;
      switch (action.type) {
        case "books:request":
          if(action.payload.id !== undefined) {
            b = books.filter(book => book.collection_id === action.payload.id);
            socket.emit('action', {
                type: "books:success",
                payload: {books: b}
            });
          }
      }

      // setTimeout(function(){
      //   b.push({
      //     "id": 2345,
      //     "img": "http://localhost:3001/files/9tigres-01.jpg",
      //     "title": "Vegetables",
      //     "author": "jill111",
      //     "collection_id": 1,
      //     "local": true
      //   });
      //   io.emit('action', {
      //       type: "books:success",
      //       payload: {books: b}
      //   });
      // }, 5000);
    })

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

    // setTimeout(function(){
    //   books.push({
    //     "id": 2345,
    //     "img": "http://localhost:3001/files/9tigres-01.jpg",
    //     "title": "Vegetables",
    //     "author": "jill111",
    //     "collection_id": 1,
    //     "local": true
    //   });
    //   io.emit('books', books);
    // }, 5000);
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
