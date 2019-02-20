import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    receipts: [],
    payments: []
  };

  render() {
    return (
      <Context.Provider value={this.value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
