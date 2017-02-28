
module.exports = (http) => {
  const io = require('socket.io')(http);
  const types = require('../types');

  io.on('connection', function(socket){
    socket.emit('collections', require('./entities/entity').collections);

    socket.on("action", function (action) {
      console.log(action.type);
        switch (action.type) {
          case types.LIBRARIES_REQUEST:
            require('./actions/library').action(socket, action);
            break;
          case types.LIBRARY_ADD_REQUEST:
            require('./actions/library').action(socket, action);
            break;
          case types.LIBRARY_EDIT_REQUEST:
            require('./actions/library').action(socket, action);
            break;
          case types.LIBRARY_DELETE_REQUEST:
            require('./actions/library').action(socket, action);
            break;
          case types.COLLECTIONS_REQUEST:
            require('./actions/collection').action(socket, action);
            break;
          case types.COLLECTION_ADD_REQUEST:
            require('./actions/collection').action(socket, action);
            break;
          case types.COLLECTION_EDIT_REQUEST:
            require('./actions/collection').action(socket, action);
            break;
          case types.COLLECTION_DELETE_REQUEST:
            require('./actions/collection').action(socket, action);
            break;
          case types.BOOKS_REQUEST:
            require('./actions/book').action(socket, action);
            break;
          case types.BOOK_REQUEST:
            require('./actions/book').action(socket, action);
            break;
          case types.BOOK_DELETE_REQUEST:
            require('./actions/book').action(socket, action);
            break;
          case types.BOOK_EDIT_REQUEST:
            require('./actions/book').action(socket, action);
            break;
        }
      })

  });
};
