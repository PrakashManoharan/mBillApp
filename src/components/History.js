import React, { Component } from 'react';

import FileUpload from './FileUpload';

export default class History extends Component {
  render() {
    return (
      <div className="container my-5">
        <table className="table table-hover">
          <thead className="bg-info text-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Monthly Statements</th>
            </tr>
          </thead>
          <tbody className="text-secondary">
            <tr>
              <th>19 Feb 2019</th>
              <th>July 2017</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
