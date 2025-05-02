import React, { useEffect } from 'react';
import './home.css';
import buildingsImage from "./buildings1.png";

function Home() {
  useEffect(() => {
    // grab the moon element and read its initial top from CSS once
    const moon = document.getElementById("moon");
    const initialMoonTop = moon
      ? parseFloat(window.getComputedStyle(moon).top)
      : 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buildings = document.getElementById("buildings");
      const subBuildings = document.querySelector(".sub-buildings");
      if (!moon || !buildings || !subBuildings) return;
    
      // Compute their viewport‐relative boxes
      const moonRect = moon.getBoundingClientRect();
      const buildingRect = buildings.getBoundingClientRect();
    
      // Normal parallax position for the moon:
      const parallaxY = initialMoonTop + scrollY * 0.2;
    
      if (moonRect.bottom >= buildingRect.bottom) {
        // Pin the moon at the bottom of the buildings
        const lockedTop = buildingRect.bottom - moonRect.height;
        moon.style.top = `${lockedTop}px`;
    
        // Hide the moon completely if it overlaps with the buildings
        moon.style.opacity = "0";
      } else {
        // Otherwise, keep the usual parallax motion and make it visible
        moon.style.top = `${parallaxY}px`;
        moon.style.opacity = "1";
      }
    
      // Existing building parallax:
      const speed = 0.3;
      const offset = scrollY * speed;
      buildings.style.transform = `translateY(${offset}px)`;
    
      // Apply the same parallax effect to sub-buildings
      subBuildings.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="moon" id="moon" />
      <div className="title-stack">
        <h1>LUNAR</h1>
        <h2>DRINK SLEEP</h2>
      </div>
      <img
        src={buildingsImage}
        alt="buildings"
        className="buildings"
        id="buildings"
      />
      <div className="sub-buildings">
      </div>
    </div>
  );
}

export default Home;
