import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/types';

const initialState = {
  countries: [],
  selectedCountry: {}
};

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, { countries: action.countries });

    case GET_COUNTRY:
      const selectedCountry = action.country;
      return Object.assign({}, state, { selectedCountry });

    case SEARCH_COUNTRIES:
      const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
      return Object.assign({}, state, { visibleCountries: foundCountries });

    case DELETE_COUNTRY:
      console.log('jestem w reducerze usuwania')
      const notDeletedCountries = state.countries.filter(country => country.id != action.id);
      const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
      return Object.assign({}, state, { countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries });

    case SET_CONTINENT:
      const continentCountries = state.countries.filter(country => country.continent === action.name);
      return Object.assign({}, state, { visibleCountries: continentCountries });

    default:
      return state;
  };
  
};

export default countriesReducer;