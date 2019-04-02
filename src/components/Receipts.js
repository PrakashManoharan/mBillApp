import React, { Component } from 'react';

export default class Receipts extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mb-5">
          <div className="card-header bg-success text-light">
            <h3>
              <i className="fas fa-plus" /> Receipts
            </h3>
          </div>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Unit ID</th>
                <th scope="col">Monthly Charges</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Dues</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th  scope="col"className="row">11 Feb 2019</th>
                <th scope="col">G1</th>
                <th scope="col">1325</th>
                <th scope="col">1300</th>
                <th scope="col">25</th>
              </tr>
              <tr>
                <th className="row">13 Feb 2019</th>
                <th>F1</th>
                <th>1405</th>
                <th>1405</th>
                <th>0</th>
              </tr>
            </tbody>
            <thead className="thead-dark">
              <tr>
                <th scope="col" />
                <th scope="col">Total</th>
                <th scope="col">0</th>
                <th scope="col">0</th>
                <th scope="col">0</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
