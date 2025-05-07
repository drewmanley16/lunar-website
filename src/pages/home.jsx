import React, { useState, useEffect } from 'react';
import './home.css';
import baseBuildings from "../images/buildings1.png";
import lunarLogo from "../images/lunarlogofinal.png";
import light1 from "../images/lights_overlay_1.png";
import light2 from "../images/lights_overlay_2.png";
import light3 from "../images/lights_overlay_3.png";
import light4 from "../images/lights_overlay_4.png";
import Footer from "../components/footer";
import ShootingStars from "../components/stars";
import SmallStars from "../components/small-stars";

function Home() {
  const [titleHidden, setTitleHidden] = useState(false);
  const overlays = [light1, light2, light3, light4];
  const [currentOverlay, setCurrentOverlay] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Cycle overlays every 5 seconds with fade effects
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentOverlay((prev) => (prev + 1) % overlays.length);
        setFade(true);
      }, 1000); // match the CSS transition duration
    }, 5000);
    return () => clearInterval(interval);
  }, [overlays.length]);

  useEffect(() => {
    const moon = document.getElementById("moon");
    const initialMoonTop = moon
      ? parseFloat(window.getComputedStyle(moon).top)
      : 0;
      
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buildings = document.getElementById("buildings");
      const subBuildings = document.querySelector(".sub-buildings");
      
      if (!moon || !buildings || !subBuildings) return;

      const moonRect = moon.getBoundingClientRect();
      const buildingRect = buildings.getBoundingClientRect();
      const parallaxY = initialMoonTop + scrollY * 0.2;

      if (moonRect.bottom >= buildingRect.bottom) {
        const lockedTop = buildingRect.bottom - moonRect.height;
        moon.style.top = `${lockedTop}px`;
        moon.style.opacity = "0";
      } else {
        moon.style.top = `${parallaxY}px`;
        moon.style.opacity = "1";
      }

      const speed = 0.3;
      const offset = scrollY * speed;
      buildings.style.transform = `translateY(${offset}px)`;
      subBuildings.style.transform = `translateY(${offset}px)`;

      const threshold = window.innerHeight * 0.4;
      setTitleHidden(scrollY > threshold);

      const fadeStart = window.innerHeight * 0.25;
      const fadeEnd = window.innerHeight * 0.5;
      const progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      const baseOpacity = 1, baseY = -10, extraShift = -20;
      const titleStackElem = document.querySelector('.title-stack');
      if (titleStackElem) {
        titleStackElem.style.opacity = baseOpacity - progress;
        const currentY = baseY + progress * extraShift;
        titleStackElem.style.transform = `translate(-50%, ${currentY}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="moon" id="moon" />
      <div className={`title-stack ${titleHidden ? 'title-stack-hidden' : ''}`}>
        <img src={lunarLogo} alt="Lunar Logo" className="logo-img" />
        <h1>Drink Sleep.</h1>
      </div>
      <div className="buildings-container">
        <img
          src={baseBuildings}
          alt="buildings base"
          className="buildings-base"
          id="buildings"
        />
      </div>
      
      {/* Inline light overlay */}
      <div className="light-overlays">
        <img
          src={overlays[currentOverlay]}
          alt={`Light Overlay ${currentOverlay + 1}`}
          className={`light-overlay ${fade ? 'fade-in' : 'fade-out'}`}
        />
      </div>
      
      <div className="shooting-stars-container">
        <ShootingStars count={8} />
      </div>
      
      <div className="small-stars-container">
        <SmallStars count={25} popSpeed={6} />
      </div>

      <div className="sub-buildings"></div>
      <Footer />
    </div>
  );
}

export default Home;
