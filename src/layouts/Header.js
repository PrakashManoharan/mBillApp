import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-5 py-0">
      <div className="container">
        <a href="/" className="navbar-branding text-light">
          {branding}
        </a>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Receipts" className="nav-link">
                  Receipts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Payments" className="nav-link">
                  Payments
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Invoice" className="nav-link">
                  Invoice
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="nav-link">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/notification" className="nav-link">
                  Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fas fa-user-circle" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'MyMaintenanceApp'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;

/*
  static propTypes = {
  branding: PropTypes.string.isRequired
}; */
