import React, { Component } from 'react';

export default class Master extends Component {
  render() {
    const { AddMaster } = this.props;

    return (
      <form>
        <h3 className="text-info mb-5">
          <span className="text-secondary">Master</span> Data
        </h3>

        <div class="form-row">
          <div className="col">
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
        </div>
      </form>
    );
  }
}
