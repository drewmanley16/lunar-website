import React from "react";
import "../components/stars.css"; // we'll extract styles too

export default function ShootingStars({ count = 4 }) {
  const stars = Array.from({ length: count }, (_, i) => {
    const top = Math.random() * 50;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;

    return (
      <div
        key={`shooting-${i}`}
        className="shooting-star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <div className="shooting-stars">{stars}</div>;
}
