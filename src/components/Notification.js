import React, { Component } from 'react';

export default class Notification extends Component {
  render() {
    return (
      <div className="container my-5">
        <table className="table table-hover">
          <thead className="bg-info text-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Notification Alert</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            <tr>
              <th>19 Feb 2019</th>
              <th>Water supply interruption due to motor breakdown</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
