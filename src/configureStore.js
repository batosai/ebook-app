import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import itemsReducer from './reducers/items';
import itemReducer from './reducers/item';
import linkReducer from './reducers/link';
import listReducer from './reducers/list';
import listTaskReducer from './reducers/task';
import collectionsReducer from './reducers/collections';

import { routerReducer } from 'react-router-redux';

export default () => createStore(
  combineReducers({
    items: itemsReducer,
    item: itemReducer,
    list: listReducer,
    link: linkReducer,
    task: listTaskReducer,
    routing: routerReducer,
    collections: collectionsReducer,
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
