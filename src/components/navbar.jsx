import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/about">WHAT IS LUNAR</Link></li>
        <li><Link to="/educational">BUY NOW</Link></li>
        <li><Link to="/campus">INTERACTIVE</Link></li>
        <li><Link to="/partner">ABOUT US</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
