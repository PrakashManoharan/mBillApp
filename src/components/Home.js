import React, { Component } from 'react';

import Credits from './Credits';
import Debits from './Debits';

class Home extends Component {
  render() {
    return (
      <div>
        <Credits />
        <Debits />
      </div>
    );
  }
}

export default Home;
