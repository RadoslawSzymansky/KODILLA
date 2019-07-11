import React from 'react';

const CountryDetails = ({ country }) => (
  <div className="country-wrapper">
    <header>
      <img className="country-photo" src={country.imageUrl} alt="country" />
    </header>
    <div className="country-info">
      <h1>{country.name}</h1>
      <h2>Kontynent: {country.continent}</h2>

      <div className="info">
        <div>
          <span>{country.populace}</span>
          <span>Ludność[mln]</span>
        </div>

        <div>
          <span>{country.capital}</span>
          <span>Stolica</span>
        </div>

        <div>
          <span>{country.currency}</span>
          <span>Waluta</span>
        </div>
      </div>
    </div>
  </div>
);

export default CountryDetails;