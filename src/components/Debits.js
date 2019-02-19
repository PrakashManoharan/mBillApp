import React from 'react';

import '../App.css';

const Debits = () => {
  const totalDebits = 0;
  return (
    <div className="header-debits">
      <h1 className="deb-header">
        <span className="symbol">-</span>Debits
      </h1>
      <h2 className="deb-value">{totalDebits}</h2>
    </div>
  );
};

export default Debits;
