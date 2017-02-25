import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import asideReducer from '../reducers/aside';
// import booksReducer from '../reducers/books';
import librariesReducer from '../reducers/libraries';
import collectionsReducer from '../reducers/collections';
import booksReducer from '../reducers/books';
import bookReducer from '../reducers/book';

import { socketIoMiddleware } from '../helpers';

import { routerReducer } from 'react-router-redux';

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

export default () => createStore(
  combineReducers({
    aside: asideReducer,
    routing: routerReducer,
    libraries: librariesReducer,
    collections: collectionsReducer,
    books: booksReducer,
    book: bookReducer,
  }),
  compose(
    applyMiddleware(
      store => next => action => {
        next(action);
      },
      thunkMiddleware,
      socketIoMiddleware(socket)
    ),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);
