import React from 'react';
import PropTypes from 'prop-types';

const Credits = props => {
  const { symbol, heading } = props;
  const creditAmount = 0;

  return (
    <div className="header-credits">
      <h1 className="header">
        <span className="symbol">{symbol}</span>
        {heading}
      </h1>
      <h3 className="credit-value">{creditAmount}</h3>
    </div>
  );
};

Credits.propTypes = {
  symbol: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Credits;
