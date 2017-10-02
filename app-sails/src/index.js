import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import routes from './config/routes';

import './index.css';

// Add polyfill for fetch for older browsers
// import 'isomorphic-fetch';
// require('es6-promise').polyfill();

const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={syncHistoryWithStore(browserHistory, store)}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
