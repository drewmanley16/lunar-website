// src/pages/about-us.jsx
import React, { useEffect, useState, useRef } from 'react';
import './about-us.css'; //
import ShootingStars from '../components/stars';
import SmallStars from '../components/small-stars';
import lunarLogo from '../images/lunarlogofinal.png'; 

export default function AboutUs() {
  const pathRef = useRef(null);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.setProperty('--path-length', pathLength);
    }
  }, [isNarrowScreen]); 

  const widePathD = `
    M 700, 100
    C 700, 400, 100, 500, 100, 800
    C 100, 1100, 700, 1200, 700, 1500
    C 700, 1800, 100, 1900, 100, 2200
    C 100, 2500, 700, 2600, 700, 2900
  `;

  // New CENTERE D and more vertical path for screens <= 1000px
  // It undulates gently around x=400 (the center of the 800-width viewBox)
  // Y-coordinates are chosen to align with typical event card vertical spacing.
  const narrowPathD = `
    M 400, 400 
    C 450, 250, 350, 350, 400, 550
    S 450, 750, 400, 950
    S 350, 1150, 400, 1350
    S 450, 1550, 400, 1750
    S 350, 1950, 400, 2150
    S 450, 2350, 400, 2550
    C 350, 2750, 450, 2850, 400, 2950 
  `;
  // This path provides enough vertical length and gentle curves for 5 event cards.
  // It starts at y=50 and ends at y=2950.
  // The control points (e.g., 450, 350) create the undulation.

  return (
    <div className="timeline-container">
      <ShootingStars />
      <SmallStars />

      <div className="header">
        <img src={lunarLogo} alt="Lunar Logo" className="header-logo" />
        <h2>OUR STORY</h2>
      </div>

      <svg
        className="timeline"
        viewBox="0 0 800 3000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="pathGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="6000">
            <stop offset="0%"    stopColor="#B26EFF" /> 
            <stop offset="12.5%" stopColor="#6A9BFF" />
            <stop offset="25%"   stopColor="#ffffff" />
            <stop offset="37.5%" stopColor="#6A9BFF" />
            <stop offset="50%"   stopColor="#B26EFF" />
            <stop offset="50%"   stopColor="#B26EFF" />
            <stop offset="62.5%" stopColor="#6A9BFF" />
            <stop offset="75%"   stopColor="#ffffff" />
            <stop offset="87.5%" stopColor="#6A9BFF" />
            <stop offset="100%"  stopColor="#B26EFF" />
            <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="0 -3000"
                to="0 0"
                dur="6s"
                repeatCount="indefinite"
                />
          </linearGradient>
          <filter id="blueGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
            <feFlood floodColor="#6A9BFF" result="col1" />
            <feComposite in="col1" in2="blur1" operator="in" result="glow1" />
            <feMerge>
              <feMergeNode in="glow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="purpleGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
            <feFlood floodColor="#B26EFF" result="col2" />
            <feComposite in="col2" in2="blur2" operator="in" result="glow2" />
            <feMerge>
              <feMergeNode in="glow2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <path
          ref={pathRef}
          className="timeline-path"
          d={isNarrowScreen ? narrowPathD : widePathD}
          stroke="url(#pathGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#blueGlow) url(#purpleGlow)"
        />
      </svg>

      {/* Event cards - CSS handles their centered stacking below 1000px */}
      <div className="event event1">
        <h3>The Idea</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </div>
      <div className="event event2">
        <h3>First Prototype</h3>
        <span>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
      </div>
      <div className="event event3">
        <h3>Funding Secured</h3>
        <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span>
      </div>
      <div className="event event4">
        <h3>Official Launch</h3>
        <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</span>
      </div>
      <div className="event event5">
        <h3>Expansion</h3>
        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</span>
      </div>
    </div>
  );
}