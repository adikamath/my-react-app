import React from 'react';
import './NavBar.css';
import logo from '../../assets/bumpups-test-logo.svg';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Bumpups Test Logo" />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#pricing" className="navbar-link">Pricing</a>
            </li>
            <li className="navbar-item">
              <a href="#video" className="navbar-link navbar-link-highlight">Do More With Video</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
