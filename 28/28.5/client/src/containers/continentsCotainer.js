import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry, getCountries, searchCountries } from '../actions/countriesActions';
import CountryFlagList from '../presentational/flagListComponent';

class ContinentsContainer extends Component {

  chooseContinent(event) {
    this.props.setContinent(event.target.value);
  }

  deleteCountry(id) {
    this.props.deleteCountry(id);
  }

  componentDidMount() {
    this.props.getCountries();
    this.props.setContinent('Europa');
  }

  renderCountryFlagList() {
    if (!this.props.countries.length) {
      return (
        <div className="loader" id="loader-1"></div>
      )
    };

    return (
      <CountryFlagList
        countries={this.props.visibleCountries}
        deleteCountry={this.deleteCountry.bind(this)}
      />
    );
  }

  render() {
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
        {this.renderCountryFlagList()}
      </div>
    )
  }
};

const mapStateToProps = function (store) {
  return {
    visibleCountries: store.countriesReducer.visibleCountries,
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps, { setContinent, deleteCountry, getCountries, searchCountries })(ContinentsContainer);