import "./interactive.css";
import React from "react";
import albumArt from "../images/blue-can.png";
import ShootingStars from "../components/stars";

export default function LofiPage() {
  // Random background stars
  const generateStars = (count = 80) => {
    return Array.from({ length: count }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2 + 1;
      const opacity = Math.random() * 0.5 + 0.2;

      return (
        <div
          key={`star-${i}`}
          className="star"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
          }}
        />
      );
    });
  };

  return (
    <div className="lofi-page">
      {/* ✨ Background stars */}
      <div className="stars">{generateStars()}</div>

      {/* 🌠 Shooting stars from external component */}
      <ShootingStars count={5} />

      {/* 🎵 Main lofi content */}
      <div className="lofi-container">
        <img src={albumArt} alt="Album Art" className="album-art" />
        <h2 className="track-title">Dreamscape</h2>
        <p className="artist-name">by LofiBoi</p>
        <audio
          className="audio-player"
          controls
          autoPlay
          loop
          src="/placeholder.mp3"
        />
      </div>
    </div>
  );
}
