import React, { useEffect, useState } from 'react';
import './home.css';
import baseBuildings from "../images/buildings1.png";
import buildingLights from "../images/building-lights-transparent.png";
import Footer from "../components/footer";
import ShootingStars from "../components/stars";

function Home() {
  const [titleHidden, setTitleHidden] = useState(false);

  useEffect(() => {
    const moon = document.getElementById("moon");
    const initialMoonTop = moon
      ? parseFloat(window.getComputedStyle(moon).top)
      : 0;
      
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buildings = document.getElementById("buildings");
      const subBuildings = document.querySelector(".sub-buildings");
      const lights = document.getElementById("lights");
      
      // Ensure required elements exist before executing
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
      lights.style.transform = `translateY(${offset}px)`;
      subBuildings.style.transform = `translateY(${offset}px)`;

      // Toggle title visibility based on scroll threshold (adjust threshold as needed)
      const threshold = window.innerHeight * 0.4; // 10% of viewport height
      if (scrollY > threshold) {
        setTitleHidden(true);
      } else {
        setTitleHidden(false);
      }

      // Handle title stack fade and movement
      const fadeStart = window.innerHeight * 0.25; // start fading after 25% of viewport height
      const fadeEnd = window.innerHeight * 0.5;    // full fade by 50% of viewport height

      // Calculate progress between 0 and 1
      const progress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);

      // Assuming the title should be fully visible at progress 0 and fully faded (and moved up) at progress 1:
      const baseOpacity = 1;
      const baseY = -10;         // base translateY in percent (from transform of .title-stack)
      const extraShift = -20;      // extra vertical movement (in percent) that will be added when fully faded

      // Update the title stack style
      const titleStackElem = document.querySelector('.title-stack');
      if (titleStackElem) {
        // Interpolate opacity and translateY based on progress
        titleStackElem.style.opacity = baseOpacity - progress;
        const currentY = baseY + progress * extraShift;
        // Since we want to keep horizontal centering, we fix X at -50%
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
        <h1>LUNAR</h1>
        <h2>Drink Sleep.</h2>
      </div>
      <div className="buildings-container">
        {/* Base building image remains constant */}
        <img
          src={baseBuildings}
          alt="buildings base"
          className="buildings-base"
          id="buildings"
        />
        {/* Overlay for lights */}
        <img
          src={buildingLights}
          alt="building lights"
          className="buildings-overlay"
          id="lights"
        />
      </div>
      <div className="shooting-stars-container">
        <ShootingStars count={8} />
      </div>
      <div className="sub-buildings"></div>
      <Footer />
    </div>
  );
}

export default Home;
