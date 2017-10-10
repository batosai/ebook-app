import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Splash from '../containers/Splash';
import Task from '../components/Task';
import Setting from '../components/Setting';
import Collection from '../containers/Collection';
import Book from '../containers/Book';
import NotFound from '../components/NotFound';

import App from '../App';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />
    <Route path="collection" component={Collection} />
    <Route path="collection/:id" component={Collection} />
    <Route path="book/:id" component={Book} />
    <Route path="about" component={About} />
    <Route path="task" component={Task} />
    <Route path="setting" component={Setting} />
    <Route path="*" component={NotFound} />
  </Route>
);
