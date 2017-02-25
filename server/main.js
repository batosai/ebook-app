const express = require('express');
const app     = express();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);

let libraries   = require('./api/libraries.json');
let books       = require('./api/books.json');
let book        = require('./api/book.json');
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
  findById: (socket, id) => {
    if(id !== undefined) {
      b = book.filter(book => book.id === id);

      socket.emit('action', {
          type: types.BOOK_SUCCESS,
          payload: {book: b.shift()}
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
  },
  edit: (socket, data) => {
    if(data !== undefined) {
      const index = books.findIndex(b => b.id === data.id);
      const i = book.findIndex(b => b.id === data.id);

      if(index > -1) {
          books[index] = Object.assign({}, books[index], data);
          book[i] = Object.assign({}, book[i], data);
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
        case types.LIBRARY_EDIT_REQUEST:
          const i = libraries.findIndex(library => library.id === action.payload.id);
          libraries[i] = Object.assign({}, libraries[i], {
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
        case types.COLLECTION_ADD_REQUEST:
          collections.push({
            id: collections.length+1,
            title: action.payload.title,
            library_id: action.payload.library_id,
            author: ''
          });
          socket.emit('action', {
              type: types.COLLECTIONS_SUCCESS,
              payload: {collections}
          });
          break;
        case types.COLLECTION_EDIT_REQUEST:
          const index = collections.findIndex(collection => collection.id === action.payload.id);
          collections[index] = Object.assign({}, collections[index], {
            title: action.payload.title,
            library_id: action.payload.library_id,
          });
          socket.emit('action', {
              type: types.COLLECTIONS_SUCCESS,
              payload: {collections}
          });
          break;
        case types.COLLECTION_DELETE_REQUEST:
          if(action.payload.id !== undefined) {
            const index = collections.findIndex(collection => collection.id === action.payload.id);

            if(index > -1) {
                collections.splice(index, 1);
            }
          }
          socket.emit('action', {
              type: types.COLLECTIONS_SUCCESS,
              payload: {collections}
          });
          break;
        case types.BOOKS_REQUEST:
          collection_id = action.payload.id;
          Book.findByCollectionId(socket, collection_id);
          break;
        case types.BOOK_REQUEST:
          Book.findById(socket, action.payload.id);
          break;
        case types.BOOK_DELETE_REQUEST:
          Book.delete(socket, action.payload.id);
          Book.findByCollectionId(socket, collection_id);
          break;
        case types.BOOK_EDIT_REQUEST:
          Book.edit(socket, action.payload.book);
          Book.findByCollectionId(socket, collection_id);
          break;
      }
    })

});

app.use(express.static('public'));

http.listen(3001, function(){
  console.log('listening on *:3001');
});
