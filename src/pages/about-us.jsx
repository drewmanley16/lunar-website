/*ts needs fixing yo



import React from 'react';
import './about-us.css';
/*
import personDrinking from '../assets/person-drinking.png';
import cansFlask from '../assets/cans-flask.png';
import sketchPrototype from '../assets/sketch-prototype.png';
import partyCans from '../assets/party-cans.png';
import expansionBalloons from '../assets/expansion-balloons.png';
*/
export default function AboutUs() {
  return (
    <div className="timeline-container">
      <div className="header">
        <img src={personDrinking} alt="Person drinking" className="top-image" />
        <h1>About US</h1>
      </div>

      <div className="timeline">
        <svg className="zigzag-line" viewBox="0 0 500 600" preserveAspectRatio="xMinYMin meet">
          <path
            d="M250,80 C360,120 360,200 250,240 C140,280 140,360 250,400 C320,430 280,520 250,560"
            stroke="white"
            strokeWidth={4}
            fill="none"
          />
        </svg>

        <div className="event left" style={{ top: '7%' }}>
          <h3>2023</h3>
          <p>Lunar is born from sleep deprived students</p>
          <img src={cansFlask} alt="" />
        </div>

        <div className="event right" style={{ top: '46%' }}>
          <h3>2024</h3>
          <p>First prototypes made</p>
          <img src={sketchPrototype} alt="" />
        </div>

        <div className="event left" style={{ top: '75%' }}>
          <h3>2024</h3>
          <p>Lunar launch party</p>
          <img src={partyCans} alt="" />
        </div>

        <div className="event right" style={{ top: '93%' }}>
          <h3>2025</h3>
          <p>Expanding to new campuses/partners etc</p>
          <img src={expansionBalloons} alt="" />
        </div>
      </div>
    </div>
  );
}