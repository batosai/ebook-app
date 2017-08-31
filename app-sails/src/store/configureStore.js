import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

const io = sailsIOClient(socketIOClient);

import { config } from '../config';

import * as reducers from '../reducers';
import { socketIoMiddleware } from './middlewares';

io.sails.url = 'http://localhost:1337';

config.io = io;

export default () =>
  createStore(
    combineReducers({
      routing: routerReducer,
      ...reducers,
    }),
    compose(
      applyMiddleware(
        store => next => action => {
          next(action);
        },
        thunkMiddleware,
        socketIoMiddleware(io.socket),
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
