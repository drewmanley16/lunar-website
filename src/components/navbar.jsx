import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // Track previous visibility to know when it changes from false to true
  const prevVisibleRef = useRef(true);
  // Track whether a fast reappear animation should run
  const [fast, setFast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar if scrolled more than 25% viewport height, show otherwise
      if (window.scrollY > window.innerHeight * 0.25) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect when visible changes from false to true
  useEffect(() => {
    if (!prevVisibleRef.current && visible) {
      // Navbar is reappearing: set fast animation
      setFast(true);
      // Remove the fast class after the animation is finished (0.3s)
      setTimeout(() => setFast(false), 300);
    }
    prevVisibleRef.current = visible;
  }, [visible]);

  return (
    <nav className={`navbar ${!visible ? 'navbar-hidden' : ''} ${fast ? 'navbar-fast' : ''}`}>
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/what-is-lunar">WHAT IS LUNAR</Link></li>
        <li><Link to="/buy">SHOP</Link></li>
        <li><Link to="/interactive">INTERACT</Link></li>
        <li><Link to="/about-us">OUR STORY</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
