import React from 'react';

const Credits = () => {
  const creditAmount = 0;
  return (
    <div className="header-credits">
      <h1 className="header">
        <span className="symbol">+</span>Credits
      </h1>
      <p className="credit-value">{creditAmount}</p>
    </div>
  );
};

export default Credits;
