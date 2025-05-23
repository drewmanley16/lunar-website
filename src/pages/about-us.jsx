// AboutUs.jsx
import React, { useEffect, useRef } from 'react';
import './about-us.css';

export default function AboutUs() {
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.setProperty('--path-length', pathLength);
    }
  }, []);

  return (
    <div className="timeline-container">
      <div className="header">
        <h1>LUNAR</h1>
        <h2>OUR STORY</h2>
      </div>

      <svg
        className="timeline"
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ...defs content is unchanged... */}
        <defs>
          <linearGradient id="pathGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1000">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="25%" stopColor="#6A9BFF" />
            <stop offset="65%" stopColor="#6A9BFF" />
            <stop offset="100%" stopColor="#B26EFF" />
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
          d="
            M 660, 80
            C 660, 150, 460, 150, 460, 220
            C 460, 290, 760, 310, 760, 380
            C 760, 450, 230, 480, 230, 600
            C 230, 720, 510, 750, 510, 820
            C 510, 890, 460, 950, 410, 980
          "
          stroke="url(#pathGradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#blueGlow) url(#purpleGlow)"
        />
      </svg>

      {/* ...event divs are unchanged... */}
      <div className="event event1">
        gurt 2022
        <span>blurb blurb blurb blurb</span>
      </div>
      <div className="event event2">
        gurt 2022
        <span>blurb blurb blurb blurb</span>
      </div>
      <div className="event event3">
        gurt 2022
        <span>blurb blurb blurb blurb</span>
      </div>
      <div className="event event4">
        gurt 2022
        <span>blurb blurb blurb blurb</span>
      </div>
      <div className="event event5">
        gurt 2022
        <span>blurb blurb blurb blurb</span>
      </div>
    </div>
  );
}