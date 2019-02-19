import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Debits = props => {
  const { symbol, heading } = props;
  const totalDebits = 0;

  return (
    <div className="header-debits">
      <h1 className="deb-header">
        <span className="symbol">{symbol}</span>
        {heading}
      </h1>
      <h3 className="deb-value">{totalDebits}</h3>
    </div>
  );
};

Debits.propTypes = {
  symbol: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Debits;
