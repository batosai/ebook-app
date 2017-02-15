const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

let libraries   = require('./api/libraries.json');
let books       = require('./api/books.json');
let collections = require('./api/collections.json');

const types = require('./types');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

const Book = {
  findByCollectionId: (socket, id) => {
    if(id !== undefined) {
      b = books.filter(book => book.collection_id === id);
      socket.emit('action', {
          type: types.BOOKS_SUCCESS,
          payload: {books: b}
      });
    }
    return b;
  },
  delete: (socket, book_id) => {
    if(book_id !== undefined) {
      const index = books.findIndex(book => book.id === book_id);

      if(index > -1) {
          books.splice(index, 1);
      }
    }
  }
}

io.on('connection', function(socket){
  let collection_id;

  socket.emit('collections', collections);

  socket.on("action", function (action) {
    console.log(action.type);
      switch (action.type) {
        case types.LIBRARIES_REQUEST:
          socket.emit('action', {
              type: types.LIBRARIES_SUCCESS,
              payload: {libraries}
          });
          break;
        case types.LIBRARY_ADD_REQUEST:
          libraries.push({
            id: libraries.length+1,
            name: action.payload.name
          });
          socket.emit('action', {
              type: types.LIBRARIES_SUCCESS,
              payload: {libraries}
          });
          break;
        case types.LIBRARY_DELETE_REQUEST:
          if(action.payload.id !== undefined) {
            const index = libraries.findIndex(library => library.id === action.payload.id);

            if(index > -1) {
                libraries.splice(index, 1);
            }
          }
          socket.emit('action', {
              type: types.LIBRARIES_SUCCESS,
              payload: {libraries}
          });
          break;
        case types.COLLECTIONS_REQUEST:
          socket.emit('action', {
              type: types.COLLECTIONS_SUCCESS,
              payload: {collections}
          });
          break;
        case types.BOOKS_REQUEST:
          collection_id = action.payload.id;
          Book.findByCollectionId(socket, collection_id);
          break;
        case types.BOOK_DELETE_REQUEST:
          Book.delete(socket, action.payload.id);
          Book.findByCollectionId(socket, collection_id);
          break;
      }
    })

});

app.use(express.static('public'));

http.listen(3001, function(){
  console.log('listening on *:3001');
});
