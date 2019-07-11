import { GET_COUNTRIES } from '../actions/types';

const initialState = {};

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, { countries: action.countries });
    default:
      return state;
  };
};

export default countriesReducer;