import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="menu-btn">
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
            <NavLink activeClassName="current" className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" exact to="/about">About Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" exact to="/projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="current" className="nav-link" exact to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
