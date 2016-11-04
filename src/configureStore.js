import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import listReducer from './reducers/list';
import itemReducer from './reducers/item';
import linkReducer from './reducers/link';

import { routerReducer } from 'react-router-redux';

export default () => createStore(
  combineReducers({
    items: listReducer,
    item: itemReducer,
    link: linkReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      store => next => action => {
        // console.log(action);
        next(action);
      },
      thunkMiddleware
    ),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);
