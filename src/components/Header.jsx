import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <div className="menu-btn" onClick={props.onClick}>
        <div className="btn-hash" />
        <div className="btn-hash" />
        <div className="btn-hash" />
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait" />
        </div>

        <ul className="menu-nav">
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" onClick={props.onClick} exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" onClick={props.onClick} exact to="/about">About Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" onClick={props.onClick} exact to="/projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" onClick={props.onClick} exact to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Header;
