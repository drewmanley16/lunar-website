import "./interactive.css";
import React, { useState, useEffect } from "react";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";

export default function LofiPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="lofi-page">
      <ShootingStars count={4} />

      <div className="lofi-content" style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}>
        {/* Music Player */}
        <div className="lofi-glass-card">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator&theme=0"
            width="100%"
            height="280"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ 
              borderRadius: '15px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            }}
          ></iframe>

          <div className="artist-credit">
            Featuring: [artist name soon]
          </div>
        </div>

        {/* Question Cards */}
        <div className="glass-panel">
          <a href="/sleep-quiz" className="glass-link">
            Quiz to learn about why you're struggling to sleep <span>›</span>
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
