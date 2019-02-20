import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

const Debits = props => {
  const { symbol, heading } = props;
  const totalDebits = 0;

  return (
    <div className="header-debits card card-header mb-5 bg-light">
      <h1 className="deb-header">
        <span className="symbol">{symbol}</span>
        {heading}
      </h1>
      <h3 className="card my-3 py-3">{totalDebits}</h3>
    </div>
  );
};

Debits.propTypes = {
  symbol: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Debits;
