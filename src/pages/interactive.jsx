import "./interactive.css";
import React from "react";
import albumArt from "../images/blue-can.png";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";

export default function LofiPage() {
  return (
    <div className="lofi-page">
      <ShootingStars count={4} />

      <div className="lofi-content">
        {/* Music Player */}
        <div className="lofi-glass-card">
          <div className="station-switch">
            <select className="station-select">
              <option>Dreamscape</option>
              <option>Nightwaves</option>
              <option>Rainflow</option>
            </select>
          </div>

          <img src={albumArt} alt="Album" className="glass-album-art" />

          <div className="glass-text">
            <h2 className="track-title">Dreamscape</h2>
            <p className="artist-name">by LofiBoi</p>
          </div>

          <div className="glass-footer">
            <span>0:00</span>
            <div className="glass-progress">
              <div
                className="glass-progress-fill"
                style={{ width: "20%" }}
              ></div>
            </div>
            <span>3:20</span>
          </div>

          <div className="glass-audio-bar">
            <button className="glass-button">⏮</button>
            <button className="glass-button play">⏯</button>
            <button className="glass-button">⏭</button>
          </div>
        </div>

        {/* Question Cards */}
        <div className="glass-panel">
          <a href="/sleep-quiz" className="glass-link">
            Quiz to learn about why you’re struggling to sleep <span>›</span>
          </a>
          <a href="/sleep-strategies" className="glass-link">
            Strategies on how to improve <span>›</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
