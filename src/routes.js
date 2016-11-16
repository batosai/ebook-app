import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import Splash from './components/Splash/Splash';
import List from './components/List/List';
import Card from './components/Card/Card';
import Task from './components/Task/Task';
import Setting from './components/Setting/Setting';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Splash } />
    <Route path="list/:slug" component={ List }>
      <Route path=":id" component={ Card } />
    </Route>
    <Route path="task" component={ Task } />
    <Route path="setting" component={ Setting } />
  </Route>
);
