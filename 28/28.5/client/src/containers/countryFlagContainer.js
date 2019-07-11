import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flagListComponent';
import { getCountries, searchCountries, deleteCountry } from '../actions/countriesActions';
import '../country.css';

class CountryFlagContainer extends Component {

  componentDidMount() {
    this.props.getCountries();
    this.props.searchCountries('');
  }

  renderCountryFlagList() {
    if (!this.props.countries.length) {
      return (
        <div className="loader" id="loader-1"></div>
      )
    };

    if (!this.props.visibleCountries.length) {
      return (
      <CountryFlagList 
        countries={this.props.countries} 
        deleteCountry={this.deleteCountry.bind(this)}  
      />
      );
    };

    return ( 
    <CountryFlagList 
      countries={this.props.visibleCountries} 
      deleteCountry={this.deleteCountry.bind(this)}
    />
    );
  }

  deleteCountry(id) {
    this.props.deleteCountry(id);
  }

  search(event) {
    this.props.searchCountries(event.target.value);
  }

  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)} />
        </div>
        {this.renderCountryFlagList()}
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps, { getCountries, searchCountries, deleteCountry })(CountryFlagContainer);