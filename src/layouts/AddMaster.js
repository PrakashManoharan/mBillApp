import React, { Component } from 'react';

export default class Master extends Component {
  render() {
    return (
      <form id="add-master">
        <h3 className="text-info mb-5">
          <span className="text-secondary">ADD</span> Master
        </h3>

        <div className="col-md-6 mb-3 bg-info text-light">
          <h4>
            Account
            <span>
              <select
                className="btn btn-lg text-white"
                name="account"
                id="account"
              >
                <option className="text-secondary" value="owner">
                  Owner
                </option>
                <option className="text-secondary" value="tenant">
                  Tenant
                </option>
              </select>
            </span>
          </h4>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Record Date"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Unit ID" />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Mobile" />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Spouse Name"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Spouse Email"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Spouse Mobile"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Maintenance Advance"
            />
          </div>
        </div>
        <div className="form-row mb-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Corpus Advance"
            />
          </div>
        </div>
        <div className="form-row">
          <button className="col-md-3 btn px-3 my-1">
            <input
              type="text"
              placeholder="Add"
              className="add form-control text-center"
            />
          </button>
          <button className="col-md-3 btn px-3 my-1">
            <input
              type="text"
              placeholder="Reset"
              className="reset form-control text-center"
            />
          </button>
        </div>
      </form>
    );
  }
}
