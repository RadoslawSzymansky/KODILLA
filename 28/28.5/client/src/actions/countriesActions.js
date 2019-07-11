import axios from 'axios';
import { GET_COUNTRIES, DELETE_COUNTRY, GET_COUNTRY, SET_CONTINENT, SEARCH_COUNTRIES } from './types';

export const getCountries = () => dispatch => {
  axios.get('/countries')
    .then(res => {
      dispatch({
        type: GET_COUNTRIES,
        countries: res.data
      });
    });
};

export const deleteCountry = id => dispatch => {

  axios.delete(`/countries/${id}`)
    .then(res => {
      console.log('res', res);
      dispatch({
        type: DELETE_COUNTRY,
        id
      });
    });
};

export const getCountry = (id) => dispatch => {
  axios.get(`/countries/${id}`)
    .then(res => {
      dispatch({
        type: GET_COUNTRY,
        country: res.data
      });
    });
};

export const searchCountries = (searchText) => {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  };
};

export const setContinent = (name) => {
  return {
    type: SET_CONTINENT,
    name
  };
};