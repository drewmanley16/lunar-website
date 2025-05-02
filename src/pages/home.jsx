import React, { useEffect } from 'react';
import './home.css';
import baseBuildings from "../images/buildings1.png"; // your constant building background
import buildingLights from "../images/building-lights-transparent.png"; // new overlay image
import Footer from "../components/footer";
import ShootingStars from "../components/stars";

function Home() {
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
      <div className="buildings-container">
        {/* Base building image stays constant */}
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
        <ShootingStars count={6} />
      </div>
      <div className="sub-buildings">
      </div>
      <Footer />
    </div>
  );
}

export default Home;
