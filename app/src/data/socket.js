import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const LIBRARIES_SOCKET = 'libraries';
export const COLLECTIONS_SOCKET = 'collections';

export const init = () => {
  socket.emit('init');
  console.log('init');
};

export const libraries = () =>
  new Promise(resolve =>
    socket.on(LIBRARIES_SOCKET, data => {
      console.log(LIBRARIES_SOCKET);
      resolve(data);
    })
  );

export const collections = () =>
  new Promise(resolve =>
    socket.on(COLLECTIONS_SOCKET, data => {
      console.log(COLLECTIONS_SOCKET);
      resolve(data);
    })
  );
