import React from 'react';
import './what-is-lunar.css';
import background from '../images/2dskylinebackground.png';

export default function WhatIsLunar() {
  return (
    <div
      className="lunar-page"
      style={{
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <h1>What is Lunar?</h1>
        <div className="subtitle">
          A drink made to help you wind down and recharge
        </div>
        <button className="button">Explore Ingredients</button>

        <div className="features">
          {[
            ['Melatonin', 'Supports Natural Sleep'],
            ['Magnesium', 'Promotes muscle relaxation'],
            ['L-Theanine', 'Calms the mind'],
            ['Zero Sugar', 'Pure, clean sleep'],
          ].map(([title, desc]) => (
            <div key={title} className="feature-card">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="footer">
          <strong>Nature Meets Science</strong><br />
          At Lunar, we combine naturally-sourced ingredients with modern wellness research — 
          helping you drift into deeper, more fulfilling sleep.
        </div>
      </div>
    </div>
  );
}
