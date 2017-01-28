import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from '../containers/Home';
import Task from '../containers/Task';
import Setting from '../containers/Setting';
import Book from '../containers/Book';

import App from '../App';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="task" component={Task} />
    <Route path="setting" component={Setting} />
    <Route path="book/:id" component={Book} />
  </Route>
);
