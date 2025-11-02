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
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="#services" className="navbar-link">Services</a>
            </li>
            <li className="navbar-item">
              <a href="#contact" className="navbar-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
