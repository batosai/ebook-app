import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import asideReducer from '../reducers/aside';

import { routerReducer } from 'react-router-redux';

export default () => createStore(
  combineReducers({
    aside: asideReducer,
    routing: routerReducer,
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
