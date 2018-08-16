import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  let linkStyle = {
    cursor: 'pointer'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Contact Manager
      </a>
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
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              style={linkStyle}
              onClick={props.switchRouteChild.bind(this, 'viewContacts')}
            >
              View <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={linkStyle}
              onClick={props.switchRouteChild.bind(this, 'addContact')}
            >
              Add
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// syntax for propTypes:
/*
ComponentName.propTypes = {
  List of props within as keys to the object, and the type you expect it to be on the right
  propName: PropTypes.type
}
*/
Navbar.propTypes = {
  switchRouteChild: PropTypes.func.isRequired
};

export default Navbar;
