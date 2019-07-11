import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/countriesActions';
import CountryDetails from '../presentational/countryDetails';

class CountryDetailsContainer extends Component {

  componentDidMount() {
    this.props.getCountry(this.props.params.id);
    console.log(this.props)
  }
  
  renderCountryFlagList() {
    if (!this.props.selectedCountry) {
      return (
        <div className="loader" id="loader-1"></div>
      )
    };
    return <CountryDetails country={this.props.selectedCountry} />
  }

  render() {
    return (
      <>
        {this.renderCountryFlagList()}
      </>
    )
  }
};

const mapStateToProps = function (store) {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps, { getCountry })(CountryDetailsContainer);