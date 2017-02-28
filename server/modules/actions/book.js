const types = require('../../types');

const findByCollectionId = (socket, id) => {
  if(id !== undefined) {
    b = require('../entities/entity').books.filter(book => book.collection_id === id);
    socket.emit('action', {
        type: types.BOOKS_SUCCESS,
        payload: {books: b}
    });
  }
  return b;
}

const findById = (socket, id) => {
  if(id !== undefined) {
    b = require('../entities/entity').book.filter(book => book.id === id);

    socket.emit('action', {
        type: types.BOOK_SUCCESS,
        payload: {book: b.shift()}
    });
  }
  return b;
};

const remove = (socket, book_id) => {
  if(book_id !== undefined) {
    const index = require('../entities/entity').books.findIndex(book => book.id === book_id);

    if(index > -1) {
        require('../entities/entity').books.splice(index, 1);

        findByCollectionId(socket, require('../entities/entity').collection_id);
    }
  }
};

const edit = (socket, data) => {
  if(data !== undefined) {
    const index = require('../entities/entity').books.findIndex(b => b.id === data.id);
    const i = require('../entities/entity').book.findIndex(b => b.id === data.id);

    if(index > -1) {
        require('../entities/entity').books[index] = Object.assign({}, require('../entities/entity').books[index], data);
        require('../entities/entity').book[i] = Object.assign({}, require('../entities/entity').book[i], data);

        findByCollectionId(socket, require('../entities/entity').collection_id);
    }
  }
};

module.exports = {
  action: (socket, action) => {
    switch (action.type) {
      case types.BOOKS_REQUEST:
        require('../entities/entity').collection_id = action.payload.id;
        findByCollectionId(socket, require('../entities/entity').collection_id);
        break;
      case types.BOOK_REQUEST:
        findById(socket, action.payload.id);
        break;
      case types.BOOK_DELETE_REQUEST:
        remove(socket, action.payload.id);
        break;
      case types.BOOK_EDIT_REQUEST:
        edit(socket, action.payload.book);
        break;
    }
  }
}
