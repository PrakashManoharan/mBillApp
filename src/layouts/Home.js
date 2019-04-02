import React, { Component } from 'react';

import Credits from '../components/home/Credits';
import Debits from '../components/home/Debits';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-xs-12 col-md-6">
            <Credits heading="Credit" symbol="+" />
          </div>
          <div className="col col-xs-12 col-md-6">
            <Debits heading="Debit" symbol="-" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
