import { book, collection, library } from '../actions';

export function socketIoMiddleware(socket, channelName = 'action') {
  return store => {
    socket.on('book', event => book.dispatch(store.dispatch, event));
    socket.on('collection', event =>
      collection.dispatch(store.dispatch, event),
    );
    socket.on('library', event => library.dispatch(store.dispatch, event));

    return next => action => next(action);
  };
}
