import React from 'react';

const Credits = () => {
  const creditAmount = 0;
  return (
    <div className="header-credits">
      <h1 className="header">
        <span className="symbol">+</span>Credits
      </h1>
      <h1 className="credit-value">{creditAmount}</h1>
    </div>
  );
};

export default Credits;
