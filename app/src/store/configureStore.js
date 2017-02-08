import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import asideReducer from '../reducers/aside';
// import booksReducer from '../reducers/books';
import librariesReducer from '../reducers/libraries';
import collectionsReducer from '../reducers/collections';
import booksReducer from '../reducers/books';

import { routerReducer } from 'react-router-redux';

export default () => createStore(
  combineReducers({
    aside: asideReducer,
    routing: routerReducer,
    libraries: librariesReducer,
    collections: collectionsReducer,
    books: booksReducer,
  }),
  compose(
    applyMiddleware(
      store => next => action => {
        next(action);
      },
      thunkMiddleware
    ),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);
