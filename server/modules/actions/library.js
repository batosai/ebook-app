const types = require('../../types');

module.exports = {
  action: (socket, action) => {
    switch (action.type) {
      case types.LIBRARIES_REQUEST:
        socket.emit('action', {
            type: types.LIBRARIES_SUCCESS,
            payload: {libraries:require('../entities/entity').libraries}
        });
        break;
      case types.LIBRARY_ADD_REQUEST:
        require('../entities/entity').libraries.push({
          id: require('../entities/entity').libraries.length+1,
          name: action.payload.name
        });
        socket.emit('action', {
            type: types.LIBRARIES_SUCCESS,
            payload: {libraries:require('../entities/entity').libraries}
        });
        break;
      case types.LIBRARY_EDIT_REQUEST:
        const i = require('../entities/entity').libraries.findIndex(library => library.id === action.payload.id);
        require('../entities/entity').libraries[i] = Object.assign({}, require('../entities/entity').libraries[i], {
          name: action.payload.name
        });
        socket.emit('action', {
            type: types.LIBRARIES_SUCCESS,
            payload: {libraries:require('../entities/entity').libraries}
        });
        break;
      case types.LIBRARY_DELETE_REQUEST:
        if(action.payload.id !== undefined) {
          const index = require('../entities/entity').libraries.findIndex(library => library.id === action.payload.id);

          if(index > -1) {
              require('../entities/entity').libraries.splice(index, 1);
          }
        }
        socket.emit('action', {
            type: types.LIBRARIES_SUCCESS,
            payload: {libraries:require('../entities/entity').libraries}
        });
        break;
    }
  }
}
