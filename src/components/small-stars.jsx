import React from 'react';
import './small-stars.css';

export default function SmallStars({ count = 20, popSpeed = 2 }) {
  // Helper function returns a random position
  const getRandomPosition = () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });

  const stars = Array.from({ length: count }, (_, i) => {
    const initialPos = getRandomPosition();
    const delay = Math.random() * 8; // seconds delay before animation starts
    // Use popSpeed prop as a base for the star's animation duration,
    // adding a random factor for some variation.
    const duration = popSpeed + Math.random();

    return (
      <div
        key={i}
        className="small-star"
        // When each animation cycle restarts, update the star’s position randomly.
        onAnimationIteration={(e) => {
          const pos = getRandomPosition();
          e.currentTarget.style.top = `${pos.top}vh`;
          e.currentTarget.style.left = `${pos.left}vw`;
        }}
        style={{
          top: `${initialPos.top}vh`,
          left: `${initialPos.left}vw`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />
    );
  });
  
  return <div className="small-stars-container">{stars}</div>;
}