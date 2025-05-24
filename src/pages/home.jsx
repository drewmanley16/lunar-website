// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import './home.css';
import baseBuildings from "../images/buildings1.png";
import lunarLogo from "../images/lunarlogofinal.png";
import ShootingStars from "../components/stars";
import SmallStars from "../components/small-stars";
import blueCan from "../images/blue-can.png";
import orangeCan from "../images/orange-can.png";
const melatoninInfo = "Supports your natural sleep cycle and helps you fall asleep faster, so you wake up feeling refreshed and restored";
const magnesiumInfo = "Calms your body and mind, eases stress, and promotes deep, restful sleep for total overnight recovery";
const ltheanineInfo = "Encourages relaxation and tranquility, reduces stress, and helps you unwind for a peaceful night’s sleep";
const lunarInfo = "Melatonin is a powerful supplement, and proper usage can be extremely effective at giving you fast, deep, and full sleep. Follow along here to learn about best ways to get more sleep";


function Home() {
  const [titleHidden, setTitleHidden] = useState(false);

  useEffect(() => {
    const moon = document.getElementById("moon");
    const titleStackElem = document.querySelector('.title-stack');
    const buildings = document.getElementById("buildings");
    const subBuildings = document.querySelector(".sub-buildings");
  
    const initialMoonTop = moon
      ? parseFloat(window.getComputedStyle(moon).top)
      : 0;
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      // Parallax for moon
      const moonRect = moon.getBoundingClientRect();
      const buildingRect = buildings.getBoundingClientRect();
      const parallaxY = initialMoonTop + scrollY * 0.5;
      if (moonRect.bottom >= buildingRect.bottom) {
        const lockedTop = buildingRect.bottom - moonRect.height;
        moon.style.top = `${lockedTop}px`;
        moon.style.opacity = "0";
      } else {
        moon.style.top = `${parallaxY}px`;
        moon.style.opacity = "1";
      }
      /*
      // Buildings shift
      const offset = scrollY * 0.3;
      buildings.style.transform = `translateY(${offset}px)`;
  
      // Sub-buildings shift in sync
      if (subBuildings) {
        subBuildings.style.transform = `translateY(${offset}px)`;
      }
      */
  
      // Title fade & slide
      const threshold = window.innerHeight * 0.4;
      const fadeStart = window.innerHeight * 0.25;
      const fadeEnd = window.innerHeight * 0.5;
      const progress = Math.min(
        Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0),
        1
      );
      setTitleHidden(scrollY > threshold);
      if (titleStackElem) {
        titleStackElem.style.opacity = 1 - progress;
        titleStackElem.style.transform = `translate(-50%, ${-10 + progress * -20}%)`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <ShootingStars></ShootingStars>
      <SmallStars></SmallStars>
      <div className="moon" id="moon" />
      <div className={`title-stack ${titleHidden ? 'title-stack-hidden' : ''}`}>  
        <img src={lunarLogo} alt="Lunar Logo" className="logo-img" />
        <h1>Drink Sleep.</h1>
      </div>
      {/* Parallax layers */}
      <div className="buildings-container">
        <img
          src={baseBuildings}
          alt="buildings base"
          className="buildings-base"
          id="buildings"
        />
      </div>

      {/* Underneath section for content */}
      <div className="sub-buildings">

        <div className="cols1">
          <div className="whats-in-it">What's in Lunar?</div>
          <div className="lunar-can">
            <img src={blueCan} alt="blue-can" className="glow" />
          </div>
        </div>

        <div className="cols2">


          <div className= "col1">
            <h2 className="ingredient-title">MELATONIN</h2>
            <div className="melatoninInfo">{melatoninInfo}</div>
          </div>
          

          <div className= "col2">
            <h2 className="ingredient-title">MAGNESIUM</h2>
            <div className="melatoninInfo">{magnesiumInfo}</div>
          </div>

          <div className= "col3">
            <h2 className="ingredient-title">L-THEANINE</h2>
          <div className="melatoninInfo">{ltheanineInfo}</div>
          </div>

        </div>


        <div className="cols3">

          <div className="col4">
            <div className="orange-can">
              <img src={orangeCan} alt="orange-can" />
            </div>
            <div className="how-take-it">How do I take it?</div>
        </div>

        </div>

          <div className= "cols4">
            <div className="lunar-how-title">Proper Usage</div>
            <div className= "lunarInfo">{lunarInfo}</div>
          </div>


        </div>
      
    </div>
  );
}

export default Home;