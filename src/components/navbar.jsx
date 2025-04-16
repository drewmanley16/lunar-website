import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
<nav className="navbar">
  <div className="navbar-logo">
    <img src="src/images/lunar-logo.png" alt="Logo" />
  </div>
  <ul className="navbar-links">
    <li><Link to="/about">About</Link></li>
    <li><Link to="/educational">Educational</Link></li>
    <li><Link to="/campus">Campus</Link></li>
    <li><Link to="/partner">Partner</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>
  );
}

export default Navbar;
