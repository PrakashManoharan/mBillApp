import React from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

const Credits = props => {
  const { symbol, heading } = props;
  const creditAmount = 0;

  return (
    <div className="header-credits card card-header mb-5 bg-light">
      <h1 className="cr-heading">
        <span className="symbol">{symbol}</span>
        {heading}
      </h1>
      <h3 className="card my-3 py-3">{creditAmount}</h3>
    </div>
  );
};

Credits.propTypes = {
  symbol: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
};

export default Credits;
