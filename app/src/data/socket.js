import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export const INIT_SOCKET        = 'init';
export const LIBRARIES_SOCKET   = 'libraries';
export const COLLECTIONS_SOCKET = 'collections';
export const BOOKS_SOCKET       = 'books';
export const BOOK_DELETE_SOCKET = 'book:delete';

export const init = () => {
  socket.emit(INIT_SOCKET);
  console.log(INIT_SOCKET);
};

export const catchLibraries = () =>
  new Promise(resolve =>
    socket.on(LIBRARIES_SOCKET, data => {
      console.log(LIBRARIES_SOCKET);
      resolve(data);
    })
  );

export const catchCollections = () =>
  new Promise(resolve =>
    socket.on(COLLECTIONS_SOCKET, data => {
      console.log(COLLECTIONS_SOCKET);
      resolve(data);
    })
  );

export const catchBooksByCollection = id => {
  socket.emit(BOOKS_SOCKET, id);
  return new Promise(resolve =>
    socket.on(BOOKS_SOCKET, data => {
      console.log(BOOKS_SOCKET);
      resolve(data);
    })
  );
};

export const removeBook = id => socket.emit(BOOK_DELETE_SOCKET, id);
