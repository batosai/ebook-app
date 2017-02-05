var socket = require('socket.io-client')('http://localhost:3001');

export const LIBRARIES_SOCKET = 'libraries';

export const init = () => {
  socket.emit('init');
};

export const libraries = () =>
  new Promise(resolve =>
    socket.on(LIBRARIES_SOCKET, data => {
      console.log(data);
      resolve(data);
    })
  );
