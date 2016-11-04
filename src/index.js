import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ syncHistoryWithStore(browserHistory, store) }>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
