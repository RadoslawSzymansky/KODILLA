import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigationComponent';
import Home from './presentational/homeComponent';
import Contact from './presentational/contactComponent';
import NotFound from './presentational/notFoundComponent';
import CountryFlagContainer from './containers/countryFlagContainer';
import CountryDetailsContainer from './containers/countryDetailsContainer';
import ContinentsContainer from './containers/continentsCotainer';

export default (
  <Route path='/' component={Navigation}>
    <IndexRoute component={Home} />
    <Route path='countries' >
      <IndexRoute component={CountryFlagContainer} />
      <Route path='country/:id' component={CountryDetailsContainer} />
    </Route>
    <Route path='continents' component={ContinentsContainer} />
    <Route path='contact' component={Contact} />
    <Route path='*' component={NotFound} />
  </Route>
);