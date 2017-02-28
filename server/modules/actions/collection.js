const types = require('../../types');

const fetch = (socket) => {
  socket.emit('action', {
      type: types.COLLECTIONS_SUCCESS,
      payload: {collections:require('../entities/entity').collections}
  });
};

const add = (socket, action) => {
  require('../entities/entity').collections.push({
    id: require('../entities/entity').collections.length+1,
    title: action.payload.title,
    library_id: action.payload.library_id,
    author: ''
  });
  socket.emit('action', {
      type: types.COLLECTIONS_SUCCESS,
      payload: {collections:require('../entities/entity').collections}
  });
};

const edit = (socket, action) => {
  const index = require('../entities/entity').collections.findIndex(collection => collection.id === action.payload.id);
  require('../entities/entity').collections[index] = Object.assign({}, require('../entities/entity').collections[index], {
    title: action.payload.title,
    library_id: action.payload.library_id,
  });
  socket.emit('action', {
      type: types.COLLECTIONS_SUCCESS,
      payload: {collections:require('../entities/entity').collections}
  });
};

const remove = (socket, action) => {
  if(action.payload.id !== undefined) {
    const index = require('../entities/entity').collections.findIndex(collection => collection.id === action.payload.id);

    if(index > -1) {
        require('../entities/entity').collections.splice(index, 1);
    }
  }
  socket.emit('action', {
      type: types.COLLECTIONS_SUCCESS,
      payload: {collections:require('../entities/entity').collections}
  });
};

module.exports = {
  action: (socket, action) => {
    switch (action.type) {
      case types.COLLECTIONS_REQUEST:
        fetch(socket);
        break;
      case types.COLLECTION_ADD_REQUEST:
        add(socket, action);
        break;
      case types.COLLECTION_EDIT_REQUEST:
        edit(socket, action);
        break;
      case types.COLLECTION_DELETE_REQUEST:
        remove(socket, action);
        break;
      }
    }
  }
