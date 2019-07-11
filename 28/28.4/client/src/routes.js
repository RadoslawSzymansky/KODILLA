import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigationComponent';
import Home from './presentational/homeComponent';
import Contact from './presentational/contactComponent';
import NotFound from './presentational/notFoundComponent';


export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);