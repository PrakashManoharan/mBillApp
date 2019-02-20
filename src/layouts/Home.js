import React, { Component } from 'react';

import Credits from '../components/home/Credits';
import Debits from '../components/home/Debits';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Credits heading="Credit" symbol="+" />
        <Debits heading="Debit" symbol="-" />
      </div>
    );
  }
}

export default Home;
