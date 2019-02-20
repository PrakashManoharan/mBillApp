import React, { Component } from 'react';

export default class Invoice extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-primary text-light">
            <h3>
              <i className="i fas fa-file-invoice-dollar" />
              Maintenance Invoice
            </h3>
          </div>

          <div className="col-md-12 col sm-12 bg-light">
            <table className="table table-striped">
              <thead className="text-secondary">
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Current Monthly Charges</th>
                  <th scope="col">Dues</th>
                  <th scope="col">Total Amount</th>
                </tr>
              </thead>
              <tbody className="tbody-hover">
                <tr>
                  <th>G1</th>
                  <th>1200</th>
                  <th>25</th>
                  <th>1225</th>
                </tr>
              </tbody>
              <thead className="bg-light">
                <tr>
                  <th>Total</th>
                  <th>0</th>
                  <th>0</th>
                  <th>0</th>
                </tr>
              </thead>
            </table>
          </div>

          <table className="table table-hover my-5">
            <thead className="bg-light">
              <tr>
                <th>Total Common Expenses</th>
                <th>Total Water Consumption</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>625</th>
                <th>50.18</th>
              </tr>
            </tbody>
          </table>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card card-header bg-success text-light">
                <h4>
                  <i className="i fas fa-plus" />
                  Receipts
                </h4>
              </div>
              <table className="table table-hover">
                <thead className="bg-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Unit ID</th>
                    <th scope="col">Dues</th>
                    <th scope="col">Amount Paid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>16 Feb 2019</th>
                    <th>S2</th>
                    <th>0</th>
                    <th>1100</th>
                  </tr>
                </tbody>
                <thead className="bg-light">
                  <tr>
                    <th />
                    <th>Total</th>
                    <th>0</th>
                    <th>1100</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="col-md-6 col sm-12">
              <div className="card card-header bg-danger text-light">
                <h4>
                  <i className="i fas fa-minus" />
                  Payments
                </h4>
              </div>
              <table className="table table-hover">
                <thead className="bg-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Services</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>12 Feb 2019</th>
                    <th>Servant Maid</th>
                    <th>1000</th>
                  </tr>
                </tbody>
                <thead className="bg-light">
                  <tr>
                    <th />
                    <th>Total</th>
                    <th>1000</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
