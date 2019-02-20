import React, { Component } from 'react';

export default class Payments extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-danger text-light">
            <h3>
              <i className="i fas fa-minus" /> Payments
            </h3>
          </div>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Service Description</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="row">11 Feb 2019</th>
                <th>G1</th>
                <th>1325</th>
              </tr>
              <tr>
                <th className="row">13 Feb 2019</th>
                <th>F1</th>
                <th>1405</th>
              </tr>
            </tbody>
            <thead className="thead-dark">
              <tr>
                <th scope="col" />
                <th scope="col">Total</th>
                <th scope="col">0</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
