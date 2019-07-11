import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/countriesActions';

render(
  <Provider store={store}>
    <h1>Inicjalizacja projektu</h1>
  </Provider>,
  document.getElementById('root')
);

// just to check getting countries from data-base. Will be removed after check :)
store.dispatch(getCountries());