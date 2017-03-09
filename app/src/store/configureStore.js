import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import io from 'socket.io-client';

import * as reducers from '../reducers';
import { socketIoMiddleware } from './middlewares';

const socket = io('http://localhost:3001');

export default () => createStore(
  combineReducers({
    routing: routerReducer,
    aside: reducers.asideReducer,
    libraries: reducers.librariesReducer,
    collections: reducers.collectionsReducer,
    books: reducers.booksReducer,
    book: reducers.bookReducer,
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
